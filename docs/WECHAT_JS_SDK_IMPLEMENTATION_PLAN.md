# 晟景官网微信 JS-SDK 分享卡片落地方案

## 0. 2026-10-03 实施状态与下一 Gate

- Issue #24：本轮只实现官网微信分享，不接小程序、数据库或消息推送。
- PR #23 的原始校验文件已部署并公网返回200，用户截图确认 JS 接口安全域名 `www.shengjingjc.cn` 已保存、公众号已微信认证。AppSecret 未查看、启用或配置；API IP 白名单仍待人工配置。
- 官方 JS-SDK 文档的权限表列出微信认证订阅号、微信认证服务号具备分享接口资格。后台没有单独的“分享接口”分类，不再要求用户反复寻找；账号实际运行权限最终以 `wx.config` 和真机分享验收为准。
- 本轮代码只在本地及模拟环境验证，**没有合并或部署，微信卡片尚未上线**。

### 已实现的文件

- `scripts/wechat-share-server.mjs`：Node 内置 HTTP/crypto/fetch，监听 `127.0.0.1:3310`，不接数据库、无额外运行依赖。Node 20+。
- `lib/wechat-share.ts` 与 `components/wechat-share.tsx`：微信内且在正式 www 域名才启用，动态加载官方1.6.0 SDK，复用当前页面 OG 标题、描述、图片及 canonical；缺图片时回退用户提供的现有品牌Logo `/images/brand/shengjing-logo.jpg`。
- `app/layout.tsx`：只挂载不可见初始化组件，不调整布局、文案或 metadata。
- 两份 `scripts/wechat-share-*.test.mjs`：使用合成凭据和模拟接口，`npm run test:wechat-share`，不访问真实微信 API。

### 签名服务行为

`GET /api/wechat-js-signature?url=<编码后的完整页面URL>` 返回 `appId/timestamp/nonceStr/signature`，不返回 access_token、jsapi_ticket 或 AppSecret。

- 只签名 `https://www.shengjingjc.cn/` 下的 URL，拒绝其它源、用户信息、空白、异常端口/写法和超长输入；不抓取传入 URL。
- 保留查询参数的原始顺序与编码，去掉 hash。凭据使用固定微信 API 地址，8秒上游超时，失败统一返回安全错误。
- 用官方 `stable_token` POST 普通模式（`force_refresh: false`），不让共享账号其他调用方的凭据失效。
- token/ticket 进程内缓存并预留过期余量，同一时间只刷新一次；无效 token 最多重试一次，失败后退避10秒。只运行一个实例，不以多进程分散缓存。
- 无 CORS、无 cookie，响应 `no-store`；存在 Origin 时必须为官网；全局每分钟最多300次签名，最多64个连接。`/healthz` 仅验证进程可用，不代表微信权限/凭据正常。

### 微信内页面跳转

微信 SDK 的验证 URL 与文档生命周期相关。本轮在微信内对同源、普通左键站内链接采用整页打开，避免 SPA 路由复用造成旧标题、旧图片或签名串页。非微信浏览器仍保留原 Next 导航；外链、电话、页内锚点、下载和新窗口不变。此差异需要 iPhone/Android 真机验收。

### 部署前必须由齐鑫确认

1. 审阅并确认合并代码。只构建 `out/` 并不能提供动态签名接口，不能将它写成完整分享功能已上线。
2. 只读核对现有 ECS 的 Node 版本、端口3310及资源，不影响当前静态站。由用户在微信后台确认 AppSecret 和服务器出口 IP 白名单；不启用消息推送。
3. 用户通过安全的服务器管理渠道在仓库和静态目录之外保存凭据，仅服务端可读。不要把密钥贴聊天、截图、GitHub、OSS、云助手脚本或执行日志。
4. 明确授权后再安装签名服务、修改 Nginx 和发布静态资源；本轮未执行以下示例配置。

服务代码可放 `/opt/shengjing-wechat-share/wechat-share-server.mjs`。独立非root用户运行，凭据放 `/etc/shengjing-wechat-share.env`（root所有、权限600，由systemd读取）；变量为 `WECHAT_APP_ID`、`WECHAT_APP_SECRET`，可选 `WECHAT_SHARE_PORT=3310`。不要写 `NEXT_PUBLIC_*`。systemd 使用 `EnvironmentFile`、绝对 Node 路径、`Restart=on-failure` 和 `NoNewPrivileges=true`；不暴露公网3310端口。

现有 HTTPS www server 中最小代理示例（授权后检查冲突、备份，再 `nginx -t`）：

```nginx
location = /api/wechat-js-signature {
    proxy_pass http://127.0.0.1:3310;
    proxy_set_header Host $host;
    proxy_set_header Origin $http_origin;
    proxy_connect_timeout 2s;
    proxy_read_timeout 35s;
    access_log off;
}
```

仅代理上述路径，不把整个官网切到 Node/SSR，不新增公网端口或修改 DNS。授权后依次检查本机 `/healthz`、www签名接口、普通浏览器无额外SDK请求、微信内分享。失败时撤回代理和本轮静态资源，旧站备份保留。

### 真实验收与能力边界

- 在微信内打开首页、关于页、透明工地页和天泰案例页，用右上角菜单分别分享朋友、朋友圈。检查标题、图片、链接，聊天分享还检查简介。
- 用 `?v=wx1` 测带参数签名，站内跳转后重测，再用 iPhone 与 Android 各测一轮。模拟 `wx.ready` 成功不代表真实权限或手机已验收。
- 直接粘贴网址不会因此保证自动成为图文卡片；朋友圈也不保证展示简介。平台缓存可能延迟，需改参数复测。
- 若真实出现 `invalid signature`，核对完整签名 URL（包含微信追加参数、无 hash）及同一个AppID的ticket；`permission denied`则核对真实权限与jsApiList。不要输出凭据排错。

官方资料（2026-10-03核对）：[JS-SDK及分享接口](https://developers.weixin.qq.com/doc/service/guide/h5/jssdk.html)、[稳定版接口调用凭据](https://developers.weixin.qq.com/doc/service/api/base/api_getstableaccesstoken.html)。以下为早期方案记录，当前完成状态以本节为准。

## 1. 当前问题

- 官网已上线基础分享卡片元信息：
  - `canonical`
  - `og:title`
  - `og:description`
  - `og:image`
  - `twitter:image`
- `https://www.shengjingjc.cn/og-home.jpg` 已确认返回 `200`。
- 用户实测微信朋友圈仍然只展示普通网站链接。
- 判断：普通 OG 元信息对微信展示不稳定，微信内菜单分享可用微信公众号 JS-SDK 自定义；实际展示仍需真机验证。

## 2. 公众号准备清单

- 注册 / 认证晟景装饰公众号。
- 获取公众号 `AppID`。
- 获取公众号 `AppSecret`。
- 在微信公众平台配置 JS 接口安全域名：
  - `www.shengjingjc.cn`
- 如微信后台要求域名校验，下载 `MP_verify_xxx.txt` 并放到 `public/` 根目录。
- 部署后确认校验文件可访问：
  - `https://www.shengjingjc.cn/MP_verify_xxx.txt`
- 确认分享图可访问：
  - `https://www.shengjingjc.cn/og-home.jpg`

## 3. 安全规则

- `AppSecret` 只能放服务端环境变量。
- 禁止把 `AppSecret` 写入前端代码。
- 禁止把 `AppSecret` 提交到 GitHub。
- 禁止把 `AppSecret` 写入 `public/` 文件。
- 禁止把 `AppSecret` 写入小程序前端。
- `.env` 文件不得提交。
- 代码中只能读取环境变量，例如：
  - `WECHAT_APP_ID`
  - `WECHAT_APP_SECRET`

## 4. 推荐架构

### 推荐方案 A：保留静态官网，新增极小微信签名服务

当前官网是 ECS 静态站部署。不要为了 JS-SDK 分享卡片把整个官网改成 SSR，也不要重构部署架构。

新增一个极小微信签名服务即可，接口建议：

```http
GET /api/wechat-js-signature?url=<encoded-current-url>
```

接口职责：

- 获取 `access_token`。
- 获取 `jsapi_ticket`。
- 缓存 `access_token` 和 `jsapi_ticket`。
- 根据当前 URL 生成 `nonceStr` / `timestamp` / `signature`。
- 返回 `appId` / `timestamp` / `nonceStr` / `signature`。

### 不推荐方案

- 为了 JS-SDK 把整个官网改成 SSR。
- 为了分享卡片重构部署架构。

## 5. 签名逻辑伪代码

前端传当前页面 URL，必须去掉 `hash`。

```ts
// frontend
const url = window.location.href.split("#")[0];
const res = await fetch(
  `/api/wechat-js-signature?url=${encodeURIComponent(url)}`,
);
const signatureConfig = await res.json();
```

服务端签名流程：

```ts
// server
const appId = process.env.WECHAT_APP_ID;
const appSecret = process.env.WECHAT_APP_SECRET;

const accessToken = await getCachedAccessToken(appId, appSecret);
const jsapiTicket = await getCachedJsapiTicket(accessToken);

const nonceStr = createNonceStr();
const timestamp = Math.floor(Date.now() / 1000);
const url = request.query.url;

const signString = [
  `jsapi_ticket=${jsapiTicket}`,
  `noncestr=${nonceStr}`,
  `timestamp=${timestamp}`,
  `url=${url}`,
].join("&");

const signature = sha1(signString);

return {
  appId,
  timestamp,
  nonceStr,
  signature,
};
```

注意：

- `access_token` 必须缓存，避免频繁请求微信接口。
- `jsapi_ticket` 必须缓存，避免频繁请求微信接口。
- 缓存过期时间应小于微信返回的 `expires_in`，预留安全余量。
- 签名 URL 必须和微信内置浏览器当前页面 URL 一致，不包含 `hash`。

## 6. 前端接入逻辑

前端只做这些事：

- 判断是否微信内置浏览器。
- 加载微信 JS-SDK。
- 请求签名接口。
- 调用 `wx.config`。
- `wx.ready` 后设置：
  - `updateAppMessageShareData`
  - `updateTimelineShareData`

### 分享参数

首页：

```ts
{
  title: "晟景装饰｜交城本地装修服务品牌",
  desc: "整装、定制、设计、旧房翻新，透明工地让装修进度看得见。",
  link: "https://www.shengjingjc.cn/",
  imgUrl: "https://www.shengjingjc.cn/og-home.jpg",
}
```

透明工地页：

```ts
{
  title: "装修进度，看得见才放心｜晟景透明工地",
  desc: "施工日报、现场照片、老板审核、业主查看，让装修过程更透明。",
  link: "https://www.shengjingjc.cn/transparent-site/",
  imgUrl: "https://www.shengjingjc.cn/og-home.jpg",
}
```

About 页：

```ts
{
  title: "晟景装饰是谁？交城本地装修服务品牌",
  desc: "服务经验可追溯至1997年前后的本地装修从业积累，服务交城及吕梁周边业主，主打整装、定制、设计、旧房翻新和透明工地。",
  link: "https://www.shengjingjc.cn/about/",
  imgUrl: "https://www.shengjingjc.cn/og-home.jpg",
}
```

## 7. 公众号菜单建议

菜单一：透明工地

- 进入透明工地小程序
- 了解透明工地
- 查看施工日报说明

菜单二：装修服务

- 整装定制
- 旧房翻新
- 装修案例
- 装修报价怎么估

菜单三：联系我们

- 电话咨询
- 到店地址
- 晟景官网

## 8. 后续开发任务拆分

### PR-1：公众号域名校验文件接入

- 等用户提供 `MP_verify_xxx.txt`。
- 放到 `public/`。
- 部署后验证可访问。

### PR-2：微信签名服务

- 新建最小服务。
- 只从环境变量读取 `AppID` / `AppSecret`。
- 实现 `access_token` / `jsapi_ticket` 缓存。
- 实现签名接口。

### PR-3：官网前端 JS-SDK 接入

- 封装 `WeChatShare` 组件。
- 首页 / about / transparent-site 配置分享内容。
- 只在微信内置浏览器启用。

### PR-4：微信内实测

- 分享给朋友。
- 分享到朋友圈。
- 检查标题、描述、图片、链接。

## 9. 测试方法

1. 把 `https://www.shengjingjc.cn/` 发到微信聊天。
2. 在微信内置浏览器打开。
3. 点击右上角 `...`。
4. 分享给朋友。
5. 分享到朋友圈。
6. 检查是否显示自定义标题、描述、图片。

## 10. 禁止事项

- 不要把 `AppSecret` 写入代码。
- 不要把 `AppSecret` 写进文档。
- 不要提交 `.env`。
- 不要为了分享卡片重构整个官网。
- 没有服务端凭据及部署确认前，不宣称分享接口已可用。
- 不要部署 ECS。
