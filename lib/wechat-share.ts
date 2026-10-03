const SITE_ORIGIN = "https://www.shengjingjc.cn";
const SDK_URL = "https://res.wx.qq.com/open/js/jweixin-1.6.0.js";
const SHARE_APIS = ["updateAppMessageShareData", "updateTimelineShareData"];

type ShareData = { title: string; desc: string; link: string; imgUrl: string };
type Signature = { appId: string; timestamp: number; nonceStr: string; signature: string };
type WeChatSdk = {
  config: (value: Signature & { debug: boolean; jsApiList: string[] }) => void;
  ready: (callback: () => void) => void;
  error: (callback: () => void) => void;
  updateAppMessageShareData: (value: ShareData) => void;
  updateTimelineShareData: (value: Omit<ShareData, "desc">) => void;
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

export function configureWeChatShare(win: WeChatWindow): () => void {
  if (!isWeChatSite(win)) return () => {};
  let active = true;
  const abort = new AbortController();
  const href = win.location.href;
  const url = href.split("#")[0];
  const current = () => active && win.location.href.split("#")[0] === url;

  // Serialize config calls: previous route callbacks cannot overwrite the new card.
  configQueue = configQueue.catch(() => {}).then(async () => {
    if (!current()) return;
    const timeout = win.setTimeout(() => abort.abort(), 10000);
    try {
      const response = await win.fetch(`/api/wechat-js-signature?url=${encodeURIComponent(url)}`, {
        signal: abort.signal, credentials: "omit", cache: "no-store",
      });
      if (!response.ok) return;
      const signature: unknown = await response.json();
      if (!validSignature(signature) || !current()) return;
      const wx = await loadSdk(win);
      if (!current()) return;
      await new Promise<void>((resolve) => {
        let settled = false;
        const finish = () => { settled = true; win.clearTimeout(timer); resolve(); };
        const timer = win.setTimeout(finish, 10000);
        wx.error(finish);
        wx.ready(() => {
          if (settled || !current()) return finish();
          try {
            const data = readShareData(win.document, href);
            wx.updateAppMessageShareData(data);
            const { title, link, imgUrl } = data;
            wx.updateTimelineShareData({ title, link, imgUrl });
          } catch {
            // Unsupported clients retain ordinary sharing.
          } finally { finish(); }
        });
        try { wx.config({ ...signature, debug: false, jsApiList: SHARE_APIS }); }
        catch { finish(); }
      });
    } catch {
      // Keep ordinary links/OG usable when WeChat or the signer is unavailable.
    } finally { win.clearTimeout(timeout); }
  });
  return () => { active = false; abort.abort(); };
}
