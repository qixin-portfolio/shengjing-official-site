# 晟景官网微信 JS-SDK 分享卡片落地方案

## 1. 当前问题

- 官网已上线基础分享卡片元信息：
  - `canonical`
  - `og:title`
  - `og:description`
  - `og:image`
  - `twitter:image`
- `https://www.shengjingjc.cn/og-home.jpg` 已确认返回 `200`。
- 用户实测微信朋友圈仍然只展示普通网站链接。
- 判断：普通 OG 元信息对微信朋友圈展示不稳定，稳定自定义微信分享卡片需要接入微信公众号 JS-SDK。

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
- 不要在没有公众号资料前实现正式代码。
- 不要部署 ECS。
