import assert from "node:assert/strict";
import { test } from "node:test";
import { once } from "node:events";
import { createShareServer, createSigner, signUrl, validateShareUrl, SITE_ORIGIN } from "./wechat-share-server.mjs";

const appId = "wx0000000000000000";
const appSecret = "mock-secret-not-a-credential";
const good = (data) => ({ ok: true, json: async () => data });

test("official signature example", () => {
  assert.equal(signUrl("sM4AOVdWfPE4DxkXGEs8VMCPGGVi4C3VM0P37wVUCFvkVAy_90u5h9nbSlYy3-Sl-HhTdfl2fzFy1AOcHKP7qg",
    "http://mp.weixin.qq.com?params=value", "Wm3WZYTPz0wzccnW", 1414587457),
  "0f9de62fce790f9a083d5c99e95740ceb90c27ed");
});

test("URL preserves query bytes and strips hash; rejects other origins/credentials/ambiguous forms", () => {
  const value = `${SITE_ORIGIN}/about/?b=2&a=%2f&x=hello+world#section`;
  assert.equal(validateShareUrl(value), value.split("#")[0]);
  for (const bad of ["https://shengjingjc.cn/", "http://www.shengjingjc.cn/", "https://example.com/",
    "https://www.shengjingjc.cn.evil.test/", "https://user@www.shengjingjc.cn/", `${SITE_ORIGIN}:443/`,
    "https://www.shengjingjc.cn\\@evil.test/", `${SITE_ORIGIN}/ a`, `${SITE_ORIGIN}/${"a".repeat(4100)}`, null]) {
    assert.throws(() => validateShareUrl(bad));
  }
});

test("fails closed without configuration", () => {
  assert.throws(() => createSigner({ appId, appSecret: "" }), /missing_wechat_configuration/);
  assert.throws(() => createSigner({ appId: "invalid", appSecret }), /missing_wechat_configuration/);
});

test("single-flight token/ticket cache, expiry margin and no forced refresh", async () => {
  let clock = 1000000;
  const calls = [];
  const signer = createSigner({ appId, appSecret, now: () => clock, fetchImpl: async (url, options) => {
    calls.push({ url, options });
    if (url.endsWith("stable_token")) return good({ access_token: "mock-token", expires_in: 7200 });
    return good({ errcode: 0, ticket: "mock-ticket", expires_in: 7200 });
  } });
  const results = await Promise.all(Array.from({ length: 20 }, () => signer(`${SITE_ORIGIN}/`)));
  assert.equal(calls.length, 2);
  assert.equal(new Set(results.map(r => r.nonceStr)).size, 20);
  assert.equal(calls[0].options.method, "POST");
  assert.equal(JSON.parse(calls[0].options.body).force_refresh, false);
  assert.equal(calls[0].url.includes(appSecret), false);
  assert.equal(calls[0].options.redirect, "error");
  assert.ok(calls[0].options.signal);
  for (const result of results) {
    assert.deepEqual(Object.keys(result).sort(), ["appId", "nonceStr", "signature", "timestamp"]);
    assert.equal(result.signature, signUrl("mock-ticket", `${SITE_ORIGIN}/`, result.nonceStr, result.timestamp));
  }
  clock += 6899 * 1000;
  await signer(`${SITE_ORIGIN}/facts/`);
  assert.equal(calls.length, 2);
  clock += 2000;
  await signer(`${SITE_ORIGIN}/facts/`);
  assert.equal(calls.length, 4);
});

test("bad URLs do not contact upstream", async () => {
  let calls = 0;
  const signer = createSigner({ appId, appSecret, fetchImpl: () => { calls++; throw new Error(); } });
  await assert.rejects(signer("https://evil.test/"));
  assert.equal(calls, 0);
});

test("expired token retries once without forced invalidation", async () => {
  let tokens = 0;
  let tickets = 0;
  const signer = createSigner({ appId, appSecret, fetchImpl: async (url) => {
    if (url.endsWith("stable_token")) { tokens++; return good({ access_token: "mock", expires_in: 7200 }); }
    tickets++;
    return good(tickets === 1 ? { errcode: 42001 } : { errcode: 0, ticket: "mock", expires_in: 7200 });
  } });
  await signer(`${SITE_ORIGIN}/`);
  assert.equal(tokens, 2);
  assert.equal(tickets, 2);
});

test("API/network/malformed failures are redacted and backed off", async () => {
  for (const mode of ["network", "http", "api", "json", "expiry"]) {
    let clock = 1000;
    let calls = 0;
    const signer = createSigner({ appId, appSecret, now: () => clock, fetchImpl: async () => {
      calls++;
      if (mode === "network") throw new Error(`URL and secret ${appSecret}`);
      if (mode === "http") return { ok: false };
      if (mode === "api") return good({ errcode: 40164, errmsg: appSecret });
      if (mode === "json") return { ok: true, json: async () => { throw new Error(appSecret); } };
      return good({ access_token: "mock", expires_in: 0 });
    } });
    await assert.rejects(signer(`${SITE_ORIGIN}/`), { message: "wechat_unavailable" });
    await assert.rejects(signer(`${SITE_ORIGIN}/`), { message: "wechat_unavailable" });
    assert.equal(calls, 1);
    clock += 11000;
    await assert.rejects(signer(`${SITE_ORIGIN}/`));
    assert.equal(calls, 2);
  }
});

test("HTTP validation, safe errors, rate limit and no credential disclosure", async (t) => {
  let calls = 0;
  let clock = 1000;
  const server = createShareServer({ requestsPerMinute: 2, now: () => clock, signer: async () => {
    calls++;
    if (calls === 2) throw new Error(appSecret);
    return { appId, timestamp: 123, nonceStr: "mock", signature: "mock" };
  } });
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  t.after(() => new Promise(resolve => { server.close(resolve); server.closeAllConnections(); }));
  const base = `http://127.0.0.1:${server.address().port}`;
  const path = `/api/wechat-js-signature?url=${encodeURIComponent(`${SITE_ORIGIN}/?v=1`)}`;
  assert.equal((await fetch(`${base}/healthz`)).status, 200);
  assert.equal((await fetch(`${base}/wrong`)).status, 404);
  assert.equal((await fetch(base + path, { method: "POST" })).status, 405);
  assert.equal((await fetch(base + path, { headers: { Origin: "https://evil.test" } })).status, 403);
  assert.equal((await fetch(base + path + "&url=bad")).status, 400);
  assert.equal((await fetch(base + path + "&other=1")).status, 400);
  assert.equal((await fetch(`${base}/api/wechat-js-signature?url=https://evil.test`)).status, 400);
  assert.equal(calls, 0);
  const valid = await fetch(base + path, { headers: { Origin: SITE_ORIGIN } });
  assert.equal(valid.status, 200);
  assert.equal(valid.headers.get("cache-control"), "no-store");
  assert.equal(valid.headers.has("access-control-allow-origin"), false);
  const failed = await fetch(base + path);
  assert.equal(failed.status, 503);
  assert.deepEqual(await failed.json(), { error: "wechat_unavailable" });
  assert.equal((await fetch(base + path)).status, 429);
  clock += 60000;
  assert.equal((await fetch(base + path)).status, 200);
});
