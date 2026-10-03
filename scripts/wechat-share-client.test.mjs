import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import vm from "node:vm";
import ts from "typescript";

const source = await readFile(new URL("../lib/wechat-share.ts", import.meta.url), "utf8");
function load() {
  const exports = {};
  vm.runInNewContext(ts.transpileModule(source, { compilerOptions: {
    target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.CommonJS,
  } }).outputText, { exports, URL, AbortController, Promise });
  return exports;
}
const origin = "https://www.shengjingjc.cn";
const config = { appId: "wx0000000000000000", timestamp: 1234,
  nonceStr: "a".repeat(32), signature: "b".repeat(40) };
const metadata = {
  'meta[property="og:title"]': { content: "晟景装饰案例" },
  'meta[property="og:description"]': { content: "完工图片与项目介绍" },
  'meta[property="og:image"]': { content: `${origin}/images/cases/example.webp` },
  'link[rel="canonical"]': { href: `${origin}/cases/example/` },
};
function fixture() {
  const calls = [];
  const win = {
    navigator: { userAgent: "iPhone MicroMessenger/8.0" },
    location: { origin, href: `${origin}/cases/example/?v=1#photo`, assign: href => calls.push(["navigate", href]) },
    document: { title: "默认标题", querySelector: query => metadata[query] },
    setTimeout, clearTimeout,
    fetch: async (url, options) => { calls.push(["fetch", url, options]); return { ok: true, json: async () => config }; },
    wx: {
      ready: callback => { win.ready = callback; },
      error: callback => { win.error = callback; },
      config: data => { calls.push(["config", data]); win.ready(); },
      updateAppMessageShareData: data => calls.push(["friends", data]),
      updateTimelineShareData: data => calls.push(["timeline", data]),
    },
  };
  return { win, calls };
}
const tick = () => new Promise(resolve => setImmediate(resolve));

test("no SDK or signature traffic outside production WeChat", async () => {
  for (const change of [win => { win.navigator.userAgent = "Chrome"; }, win => { win.location.origin = "http://localhost:3008"; }]) {
    const { win, calls } = fixture(); change(win);
    load().configureWeChatShare(win);
    await tick(); assert.equal(calls.length, 0);
  }
});

test("sign exact query URL without hash; share existing metadata/canonical only after ready", async () => {
  const { win, calls } = fixture();
  load().configureWeChatShare(win);
  await tick();
  assert.equal(decodeURIComponent(calls[0][1].split("url=")[1]), `${origin}/cases/example/?v=1`);
  assert.equal(calls[0][2].credentials, "omit");
  const sdkConfig = calls.find(call => call[0] === "config")[1];
  assert.equal(sdkConfig.debug, false);
  assert.deepEqual([...sdkConfig.jsApiList], ["updateAppMessageShareData", "updateTimelineShareData"]);
  const friends = calls.find(call => call[0] === "friends")[1];
  assert.equal(friends.title, "晟景装饰案例");
  assert.equal(friends.desc, "完工图片与项目介绍");
  assert.equal(friends.link, `${origin}/cases/example/`);
  assert.equal(friends.imgUrl, `${origin}/images/cases/example.webp`);
  assert.equal("desc" in calls.find(call => call[0] === "timeline")[1], false);
});

test("fallback metadata excludes unsafe image/canonical and strips tracking", () => {
  const doc = { title: "测试", querySelector: query => ({
    'meta[property="og:image"]': { content: "javascript:alert(1)" },
    'link[rel="canonical"]': { href: "https://evil.test/" },
  })[query] };
  const data = load().readShareData(doc, `${origin}/about/?from=test#part`);
  assert.equal(data.title, "测试");
  assert.equal(data.link, `${origin}/about/`);
  assert.equal(data.imgUrl, `${origin}/images/brand/shengjing-logo.jpg`);
});

test("HTTP/malformed/network failures leave ordinary sharing intact", async () => {
  for (const fetch of [async () => ({ ok: false }), async () => ({ ok: true, json: async () => ({}) }), async () => { throw new Error("network"); }]) {
    const { win, calls } = fixture(); win.fetch = fetch;
    load().configureWeChatShare(win);
    await tick(); assert.equal(calls.length, 0);
  }
});

test("unmount cancels fetch; late callbacks and stale routes cannot change card", async () => {
  const { win, calls } = fixture();
  win.wx.config = data => calls.push(["config", data]);
  const cleanup = load().configureWeChatShare(win);
  await tick();
  cleanup(); win.ready();
  assert.equal(calls[0][2].signal.aborted, true);
  assert.equal(calls.some(call => call[0] === "friends"), false);
  const other = fixture();
  other.win.wx.config = () => { other.win.location.href = `${origin}/about/`; other.win.ready(); };
  load().configureWeChatShare(other.win);
  await tick();
  assert.equal(other.calls.some(call => call[0] === "friends"), false);
});

test("wx.config errors do not trigger custom sharing", async () => {
  const { win, calls } = fixture();
  win.wx.config = () => win.error();
  load().configureWeChatShare(win);
  await tick();
  assert.equal(calls.some(call => call[0] === "friends"), false);
});

test("lazy SDK load uses official URL; SDK failure is harmless", async () => {
  for (const succeeds of [true, false]) {
    const { win, calls } = fixture();
    const sdk = win.wx; delete win.wx;
    let script;
    win.document.createElement = () => ({ remove: () => calls.push(["removed"]) });
    win.document.head = { appendChild: value => {
      script = value;
      if (succeeds) { win.wx = sdk; value.onload(); } else value.onerror();
    } };
    load().configureWeChatShare(win);
    await tick();
    assert.equal(script.src, "https://res.wx.qq.com/open/js/jweixin-1.6.0.js");
    assert.equal(script.referrerPolicy, "no-referrer");
    assert.equal(calls.some(call => call[0] === "friends"), succeeds);
  }
});

test("WeChat internal route navigation reloads document; other links/modifier keys remain native", () => {
  const { win, calls } = fixture();
  const lib = load();
  const anchor = { href: `${origin}/about/`, target: "", hasAttribute: () => false };
  const event = { button: 0, target: { closest: () => anchor }, preventDefault: () => calls.push(["prevented"]) };
  lib.navigateWeChatLink(win, event);
  assert.equal(calls[1][1], anchor.href);
  calls.length = 0;
  for (const change of [{ ctrlKey: true }, { metaKey: true }, { button: 1 }, { defaultPrevented: true }]) {
    lib.navigateWeChatLink(win, { ...event, ...change });
  }
  for (const href of ["tel:13935842860", "https://example.com/", `${win.location.href.split("#")[0]}#next`]) {
    anchor.href = href; lib.navigateWeChatLink(win, event);
  }
  anchor.href = `${origin}/contact/`; anchor.target = "_blank";
  lib.navigateWeChatLink(win, event);
  anchor.target = ""; anchor.hasAttribute = () => true;
  lib.navigateWeChatLink(win, event);
  assert.equal(calls.length, 0);
});
