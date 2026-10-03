const SITE_ORIGIN = "https://www.shengjingjc.cn";
const SDK_URL = "https://res.wx.qq.com/open/js/jweixin-1.6.0.js";
const SHARE_APIS = ["updateAppMessageShareData", "updateTimelineShareData"];

type ShareData = { title: string; desc: string; link: string; imgUrl: string };
type Signature = { appId: string; timestamp: number; nonceStr: string; signature: string };
export type ShareStage = "signature" | "sdk" | "config" | "friends" | "timeline";
export type ShareStatus = { state: "loading" | "ok" | "error"; message: string };
type ShareReporter = (stage: ShareStage, status: ShareStatus) => void;
type SdkResult = { errMsg?: string };
type ShareCallbacks = { success: () => void; fail: (result: SdkResult) => void };
type WeChatSdk = {
  config: (value: Signature & { debug: boolean; jsApiList: string[] }) => void;
  ready: (callback: () => void) => void;
  error: (callback: (result: SdkResult) => void) => void;
  updateAppMessageShareData: (value: ShareData & ShareCallbacks) => void;
  updateTimelineShareData: (value: Omit<ShareData, "desc"> & ShareCallbacks) => void;
};
type WeChatWindow = Window & { wx?: WeChatSdk };

let sdkPromise: Promise<WeChatSdk> | undefined;
let configQueue: Promise<void> = Promise.resolve();

export function isWeChatSite(win: Window) {
  return /MicroMessenger/i.test(win.navigator.userAgent) && win.location.origin === SITE_ORIGIN;
}

export function navigateWeChatLink(win: Window, event: MouseEvent) {
  if (!isWeChatSite(win) || event.defaultPrevented || event.button !== 0 ||
      event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const anchor = (event.target as Element | null)?.closest?.("a");
  if (!anchor || anchor.hasAttribute("download") ||
      (anchor.target && anchor.target !== "_self")) return;
  const url = new URL(anchor.href, win.location.href);
  if (url.origin !== SITE_ORIGIN || url.username || url.password ||
      url.href.split("#")[0] === win.location.href.split("#")[0]) return;
  // Full navigation keeps WeChat's verification URL tied to this document on both platforms.
  event.preventDefault();
  win.location.assign(url.href);
}

export function readShareData(doc: Document, href: string): ShareData {
  const meta = (name: string) => doc.querySelector<HTMLMetaElement>(`meta[property="${name}"]`)?.content;
  const canonical = doc.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href;
  const localUrl = (value: string | undefined, fallback: string) => {
    try {
      const url = new URL(value ?? fallback, SITE_ORIGIN);
      return url.origin === SITE_ORIGIN && !url.username && !url.password ? url.href : fallback;
    } catch { return fallback; }
  };
  const fallbackLink = new URL(href);
  fallbackLink.hash = "";
  fallbackLink.search = "";
  return {
    title: meta("og:title") || doc.title || "晟景装饰",
    desc: meta("og:description") || doc.querySelector<HTMLMetaElement>('meta[name="description"]')?.content || "",
    link: localUrl(canonical, fallbackLink.href),
    imgUrl: localUrl(meta("og:image"), `${SITE_ORIGIN}/images/brand/shengjing-logo.jpg`),
  };
}

function loadSdk(win: WeChatWindow): Promise<WeChatSdk> {
  if (win.wx) return Promise.resolve(win.wx);
  if (sdkPromise) return sdkPromise;
  sdkPromise = new Promise<WeChatSdk>((resolve, reject) => {
    const script = win.document.createElement("script");
    script.src = SDK_URL;
    script.async = true;
    script.referrerPolicy = "no-referrer";
    const timer = win.setTimeout(() => finish(false), 10000);
    const finish = (success: boolean) => {
      win.clearTimeout(timer);
      script.onload = null;
      script.onerror = null;
      if (success && win.wx) resolve(win.wx);
      else { script.remove(); reject(new Error("sdk_unavailable")); }
    };
    script.onload = () => finish(true);
    script.onerror = () => finish(false);
    win.document.head.appendChild(script);
  }).catch((error: unknown) => { sdkPromise = undefined; throw error; });
  return sdkPromise;
}

function validSignature(value: unknown): value is Signature {
  if (!value || typeof value !== "object") return false;
  const config = value as Signature;
  return /^wx[a-zA-Z0-9]{16}$/.test(config.appId) && Number.isInteger(config.timestamp) &&
    config.timestamp > 0 && typeof config.nonceStr === "string" && /^[a-f0-9]{32}$/.test(config.nonceStr) &&
    typeof config.signature === "string" && /^[a-f0-9]{40}$/.test(config.signature);
}

function sdkErrorMessage(result?: SdkResult): string {
  const message = typeof result?.errMsg === "string" ? result.errMsg.toLowerCase() : "";
  // Only emit known labels; raw SDK payloads can contain URLs or credential data.
  if (message.includes("invalid signature")) return "微信拒绝签名";
  if (message.includes("invalid url domain")) return "微信拒绝当前域名";
  if (/permission|access denied/.test(message)) return "微信未授予此接口权限";
  if (/not support|not exist/.test(message)) return "当前微信不支持此接口";
  return "微信返回接口错误";
}

export function configureWeChatShare(win: WeChatWindow, report?: ShareReporter): () => void {
  if (!isWeChatSite(win)) return () => {};
  let active = true;
  const abort = new AbortController();
  const href = win.location.href;
  const url = href.split("#")[0];
  const current = () => active && win.location.href.split("#")[0] === url;
  const notify = (stage: ShareStage, state: ShareStatus["state"], message: string) => {
    if (current()) report?.(stage, { state, message });
  };

  // Serialize config calls: previous route callbacks cannot overwrite the new card.
  configQueue = configQueue.catch(() => {}).then(async () => {
    if (!current()) return;
    const timeout = win.setTimeout(() => abort.abort(), 10000);
    let stage: ShareStage = "signature";
    try {
      notify("signature", "loading", "正在获取签名");
      const response = await win.fetch(`/api/wechat-js-signature?url=${encodeURIComponent(url)}`, {
        signal: abort.signal, credentials: "omit", cache: "no-store",
      });
      if (!response.ok) {
        notify("signature", "error", `签名请求失败（HTTP ${response.status}）`);
        return;
      }
      const signature: unknown = await response.json();
      if (!current()) return;
      if (!validSignature(signature)) {
        notify("signature", "error", "签名响应格式不正确");
        return;
      }
      notify("signature", "ok", "签名服务已返回");
      stage = "sdk";
      notify("sdk", "loading", "正在加载微信脚本");
      const wx = await loadSdk(win);
      if (!current()) return;
      notify("sdk", "ok", "微信脚本已加载");
      stage = "config";
      notify("config", "loading", "等待微信验证签名与权限");
      await new Promise<void>((resolve) => {
        let settled = false;
        const finish = () => { settled = true; win.clearTimeout(timer); resolve(); };
        const timer = win.setTimeout(() => {
          notify("config", "error", "微信验证超时");
          finish();
        }, 10000);
        wx.error((result) => {
          notify("config", "error", sdkErrorMessage(result));
          finish();
        });
        wx.ready(() => {
          if (settled || !current()) return finish();
          notify("config", "ok", "微信验证通过");
          try {
            const data = readShareData(win.document, href);
            const callbacks = (target: "friends" | "timeline"): ShareCallbacks => ({
              success: () => notify(target, "ok", "分享内容设置成功（不是发送回执）"),
              fail: (result) => notify(target, "error", sdkErrorMessage(result)),
            });
            notify("friends", "loading", "等待朋友分享接口回执");
            notify("timeline", "loading", "等待朋友圈接口回执");
            wx.updateAppMessageShareData({ ...data, ...callbacks("friends") });
            const { title, link, imgUrl } = data;
            wx.updateTimelineShareData({ title, link, imgUrl, ...callbacks("timeline") });
          } catch {
            notify("friends", "error", "分享接口调用异常，请核对微信版本");
            notify("timeline", "error", "分享接口调用异常，请核对微信版本");
            // Unsupported clients retain ordinary sharing.
          } finally { finish(); }
        });
        try { wx.config({ ...signature, debug: false, jsApiList: SHARE_APIS }); }
        catch {
          notify("config", "error", "微信初始化异常");
          finish();
        }
      });
    } catch {
      notify(stage, "error", stage === "signature" ? "签名请求中断或网络错误" : "微信脚本加载失败");
      // Keep ordinary links/OG usable when WeChat or the signer is unavailable.
    } finally { win.clearTimeout(timeout); }
  });
  return () => { active = false; abort.abort(); };
}
