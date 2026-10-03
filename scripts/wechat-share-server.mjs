import { createHash, randomBytes } from "node:crypto";
import { createServer } from "node:http";
import { pathToFileURL } from "node:url";

export const SITE_ORIGIN = "https://www.shengjingjc.cn";

export function validateShareUrl(value) {
  if (typeof value !== "string" || value.length > 4096 || /[\s\\]/u.test(value)) {
    throw new Error("invalid_url");
  }
  const url = new URL(value);
  if (url.origin !== SITE_ORIGIN || url.username || url.password ||
      !value.startsWith(`${SITE_ORIGIN}/`)) {
    throw new Error("invalid_url");
  }
  // Signing must preserve query order and escaping, rather than reserialize URL.
  return value.split("#")[0];
}

export function signUrl(ticket, url, nonceStr, timestamp) {
  return createHash("sha1").update(
    `jsapi_ticket=${ticket}&noncestr=${nonceStr}&timestamp=${timestamp}&url=${url}`,
  ).digest("hex");
}

export function createSigner({ appId, appSecret, fetchImpl = fetch, now = Date.now }) {
  if (!/^wx[a-zA-Z0-9]{16}$/.test(appId ?? "") || !appSecret?.trim()) {
    throw new Error("missing_wechat_configuration");
  }
  let token;
  let ticket;
  let pending;
  let retryAfter = 0;

  async function request(url, options = {}) {
    const response = await fetchImpl(url, {
      ...options, redirect: "error", signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) throw new Error("wechat_unavailable");
    return response.json();
  }

  function cacheValue(value, expiresIn, startedAt) {
    if (typeof value !== "string" || !value || !Number.isFinite(expiresIn) || expiresIn <= 0) {
      throw new Error("wechat_unavailable");
    }
    const margin = Math.min(300, expiresIn / 10);
    return { value, expiresAt: startedAt + (expiresIn - margin) * 1000 };
  }

  async function getToken() {
    if (token && token.expiresAt > now()) return token.value;
    const startedAt = now();
    const data = await request("https://api.weixin.qq.com/cgi-bin/stable_token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ grant_type: "client_credential", appid: appId,
        secret: appSecret, force_refresh: false }),
    });
    if (data.errcode) throw new Error("wechat_unavailable");
    token = cacheValue(data.access_token, data.expires_in, startedAt);
    return token.value;
  }

  async function refreshTicket() {
    for (let attempt = 0; attempt < 2; attempt++) {
      const accessToken = await getToken();
      const startedAt = now();
      const data = await request(
        `https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=${encodeURIComponent(accessToken)}&type=jsapi`,
      );
      if ([40001, 40014, 42001].includes(data.errcode) && attempt === 0) {
        // Never force-refresh a shared account credential and invalidate other consumers.
        token = undefined;
        continue;
      }
      if (data.errcode) throw new Error("wechat_unavailable");
      ticket = cacheValue(data.ticket, data.expires_in, startedAt);
      return ticket.value;
    }
    throw new Error("wechat_unavailable");
  }

  async function getTicket() {
    if (ticket && ticket.expiresAt > now()) return ticket.value;
    if (retryAfter > now()) throw new Error("wechat_unavailable");
    if (!pending) {
      pending = refreshTicket().catch(() => {
        retryAfter = now() + 10000;
        throw new Error("wechat_unavailable");
      }).finally(() => { pending = undefined; });
    }
    return pending;
  }

  return async (value) => {
    const url = validateShareUrl(value);
    const jsapiTicket = await getTicket();
    const nonceStr = randomBytes(16).toString("hex");
    const timestamp = Math.floor(now() / 1000);
    return { appId, nonceStr, timestamp, signature: signUrl(jsapiTicket, url, nonceStr, timestamp) };
  };
}

export function createShareServer({ signer, now = Date.now, requestsPerMinute = 300 }) {
  let windowStart = now();
  let requestCount = 0;
  const server = createServer(async (req, res) => {
    const reply = (status, body) => {
      res.writeHead(status, {
        "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
      });
      res.end(JSON.stringify(body));
    };
    if (req.method !== "GET") {
      res.setHeader("Allow", "GET");
      return reply(405, { error: "method_not_allowed" });
    }
    if (!req.url || req.url.length > 16384) return reply(400, { error: "invalid_request" });
    let path;
    try {
      if (!req.url.startsWith("/")) throw new Error("invalid_request");
      path = new URL(req.url, "http://localhost");
    } catch { return reply(400, { error: "invalid_request" }); }
    if (path.pathname === "/healthz") return reply(200, { ok: true });
    if (path.pathname !== "/api/wechat-js-signature") return reply(404, { error: "not_found" });
    if (req.headers.origin && req.headers.origin !== SITE_ORIGIN) {
      return reply(403, { error: "forbidden" });
    }
    if (path.searchParams.getAll("url").length !== 1 || [...path.searchParams.keys()].some(key => key !== "url")) {
      return reply(400, { error: "invalid_url" });
    }
    let url;
    try { url = validateShareUrl(path.searchParams.get("url")); }
    catch { return reply(400, { error: "invalid_url" }); }
    // Global bound also works behind Nginx without trusting forwarded IP headers.
    if (now() - windowStart >= 60000) { windowStart = now(); requestCount = 0; }
    if (++requestCount > requestsPerMinute) {
      res.setHeader("Retry-After", "60");
      return reply(429, { error: "rate_limited" });
    }
    try { return reply(200, await signer(url)); }
    catch { return reply(503, { error: "wechat_unavailable" }); }
  });
  server.requestTimeout = 10000;
  server.headersTimeout = 10000;
  server.keepAliveTimeout = 5000;
  server.maxConnections = 64;
  return server;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    const signer = createSigner({ appId: process.env.WECHAT_APP_ID, appSecret: process.env.WECHAT_APP_SECRET });
    const port = Number(process.env.WECHAT_SHARE_PORT ?? 3310);
    if (!Number.isInteger(port) || port < 1024 || port > 65535) throw new Error("invalid_port");
    const server = createShareServer({ signer });
    server.on("error", () => { console.error("WeChat share service failed to listen."); process.exitCode = 1; });
    server.listen(port, "127.0.0.1", () => console.info(`WeChat share service listening on loopback port ${port}.`));
    for (const signal of ["SIGTERM", "SIGINT"]) process.on(signal, () => server.close());
  } catch {
    console.error("WeChat share service configuration is missing or invalid.");
    process.exitCode = 1;
  }
}
