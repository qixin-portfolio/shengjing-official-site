# AI 交接记录

## 2026-10-03 | Codex | 官网整套预览发布开始

- 齐鑫已明确授权整套预览提交、合并 PR #22 并部署 ECS；此前各项本地预览记录保留为历史证据。
- 本轮仅执行 Git、已合并源码构建、既有云助手静态部署及公网验收，不新增业务功能，不触碰其他项目、DNS 或生产配置。
- 发布 commit、备份位置和最终验收结果将在执行后追加；当前尚未完成部署。package-lock.json 不提交，原 main 工作区文档不覆盖。


## 2026-10-02 | Codex | 天泰130㎡完工实拍接入

- 用户提供6张PNG并回复“完工实拍”，作为现有天泰小区130㎡法式复古案例素材；照片类型依此确认，不声称独立验收、客户评价或工期已核验。
- 来源与静态文件对应：自然暖光客厅一角-1.png→living-room.webp；蓝床卧室自然光实景-2.png→blue-bedroom.webp；暮光下的阳台长廊-3.png→balcony.webp；自然光里的餐厅餐边柜-4.png→dining-room.webp；自然暖光下的粉色卧室-5.png→pink-bedroom.webp；门厅视角的明亮客厅-6.png→entry-living-room.webp。文件统一放`public/images/cases/tiantai-130-french-retro/`。
- cwebp质量84、去元数据，1086×1448原比例未变，总体积约1MB；没有AI重绘、改变现场、删除原图或公开客户姓名/门牌/报价。
- 详情页双列/手机单列图库，缩略图及文字入口可开大图；首页/案例列表增加客厅封面。天泰图片状态、摘要及llms更新为已补完工实拍；万硕仍为设计阶段资料。天泰OG/Twitter接入www绝对图片URL。
- npm typecheck/build/lint及diff check通过，6图包含于out，sitemap18条，www canonical正常，无旧域名或旧风险口径；Impeccable静态扫描无发现。浏览器390/768/1440px四个相关页面均无横向溢出，6图加载尺寸正确，点击客厅图已打开1086×1448大图。截图`/tmp/shengjing-tiantai-desktop.jpg`、`/tmp/shengjing-tiantai-mobile.jpg`。
- current revision由5递增为6，awaiting_user；保留既有未提交工作，未提交/推送/合并/部署、未扩大案例库。用户审阅本地预览后再决定提交至现有Draft PR #22。

---

## 2026-10-02 | Codex | Impeccable 首页设计优化

- 使用Impeccable context/polish/craft-floor，保留现有深绿品牌风格，局部改善首屏、阅读密度、对比度和导航状态，不初始化新设计体系、不改事实文案/业务逻辑。
- 修改首页、全局样式与Tailwind阅读色/字距、页眉页脚、品牌和抖音共用组件。入口/服务编号删去，流程顺序编号保留；手机菜单44px、Esc关闭后焦点返回，FAQ整行可点击，外链标签可区分。内容不再默认隐藏，减少动态设置取消平滑滚动和过渡。
- Impeccable detect一次提示CSS宽度过渡，已用scaleX替换。辅助文字#656C65在#F5F7F4上对比度5.02:1；不是完整WCAG审计。
- 最终npm typecheck/build/lint与diff check通过；浏览器390/768/1440px下6页布局无横向溢出/负字距/隐藏内容，菜单及问答通过，首页全部图片加载完成。整页复查修正了小程序标题断行及图片说明低对比度。手机截图`/tmp/shengjing-impeccable-mobile.jpg`。
- sitemap18条全www；robots、llms及既有事实保持，未发现旧域名/旧风险口径。任务revision由4递增为5，awaiting_user。保留此前未提交改动，未提交/推送/部署；预览http://localhost:3008/，等待审阅后再决定Draft PR #22提交。

---

## 2026-10-02 | Codex | 开开木门来源补核

- 用户提供http://www.kkdoors.com/cp.asp。抓取工具未成功，内置浏览器可正常显示；可见产品分类为烤漆系列、无漆系列、全屋定制，页脚标明开开木门与浙江乐朗工贸有限公司。
- 更新`lib/site.ts`共用品类简介和资料链接，同步`public/llms.txt`与来源记录；不复制页面标题中的排名宣传，不把品牌全部产品等同门店现货。
- typecheck、lint、diff check通过；本次仅文字/链接补充，未重新build。浏览器刷新首页后，开开简介和原始HTTP链接均已显示。当前任务revision由3递增为4，状态仍awaiting_user。
- 未提交、推送或部署，生产状态未变。

---

## 2026-10-02 | Codex | 门店品牌与微信/抖音入口

- 在现有改版工作树上追加本次用户确认内容，保留原未提交的全站文案和历史改动。未切换/覆盖main、未提交或部署。
- `lib/site.ts`集中新增双电话、主营方向、9个品牌、两个个人微信及两个抖音账号，数据边界和官方来源记录于`docs/BRAND_AND_SOCIAL_SOURCES.md`。
- 新增共用`BrandShowcase`用于首页/服务页，`DouyinShowcase`用于首页/案例页；联系页接入两个个人微信二维码和双电话；关于、事实、页脚、JSON-LD及llms同步联系方式。
- 新增4张`public/images/contact/*.png`，机械裁切并保持码面原像素，微信码增加白色边距；裁切图与原图逐像素比对通过。无AI重绘，不把个人微信码作为公众号或小程序码；不推断截断昵称或电话归属。
- 原口号“口碑第一、品质第一、信誉第一”先不直接公开，采用“重口碑、重品质、守信誉”。代理关系源于用户确认；官方资料仅用于品类说明，不写独家、认证、排名或质保保证。
- 用户尚未提供案例视频，`douyinVideos`为空，无视频假数据与空播放器。收到获准公开MP4后可通过原生播放器接入；不进入PR-C、不做后台上传/SDK。
- npm typecheck/build/lint及diff check通过；sitemap18条，全部www；域名与正式页面风险词扫描无命中。1440/768/390px下6个页面200、无横向溢出及脚本错误；滚动触发懒加载后首页/联系/案例的图片全部正常。
- 本地预览http://localhost:3008/。真实扫码仍待用户在微信/抖音确认，图片访问及像素完整性不等同平台账号验证。下一步审阅预览、提供获准公开视频，未授权推送/合并/生产部署。

---

## 2026-10-02 | Codex | 全站文案去模板化

- 用户要求全文去AI味。重写主页、关于、事实、透明工地、服务、联系、案例、知识页面与共用页脚，包含7篇文章和32条问答；同步SEO/分享摘要、FAQ内容及llms.txt。
- 保留电话、地址、备案、公司主体、项目面积/户型/风格和1997/1999/2008/2013/2021时间线；经营者口述保留来源，效果图保留非实拍说明，质保继续按合同确定。
- 文章slug、原有站内链接、图片路径、样式类及业务函数保持不变。删去模板式开场、重复总结及“AI可引用/GEO/完整链路/信息不对称”等面向读者的内部表述。
- npm typecheck/build/lint与diff check通过。构建sitemap仍18条，canonical均www，JSON-LD可解析，未命中旧域名及旧风险宣传语。
- Chrome浏览器验证1440px/390px下9个主要页面均200，无页面脚本错误和横向溢出，截图位于`/tmp/shengjing-copy-*.png`。
- 当前分支`codex/site-refresh-2026`，本轮尚未提交、推送或部署。本地预览http://localhost:3008/；下一步交用户审阅，再决定提交到现有Draft PR #22。

---

## 2026-10-02 | Codex | 补充经营者口述开店历史

- 用户确认补充：早期家里的五金建材业务、新艺艺术玻璃；1999年前后扩展店面；2008年前后扩展门业等装修材料；2013年开始以晟景装饰名称经营，并经历门店搬迁。
- 来源：https://www.douyin.com/video/7420205811273731354 （2024年发布）。门店图片的拍摄年份未逐一核实；不按口述从业年数倒推精确开店年份。
- 修改 `lib/site.ts`、`app/about/page.tsx`、`app/facts/page.tsx`、`public/llms.txt`；首页复用统一时间线。保留2021年公司主体成立时间及从业/经营/工商主体区别。
- `npm run typecheck`、`npm run build`、`npm run lint`、`git diff --check` 通过；构建产物含新增时间线，sitemap仍18条，域名及旧风险口径扫描无命中。
- 本轮尚未提交或推送；本地预览 http://localhost:3008/ 。未合并或部署 ECS，未进入 PR-C。

---

> 每次 AI 协作者完成一段工作后，在此追加交接记录。
> 格式：时间 | Agent | 做了什么 | 下一步交给谁 | 阻塞项
> 最新的记录放在最上面。

---

## 2026-06-30 | Codex (via WorkBuddy) | 项目初始化

**做了什么：**
- 创建 Next.js 14 + TypeScript + Tailwind CSS 项目
- 配置静态导出（`output: "export"`），适配 EdgeOne Makers / Pages
- 实现全部页面：首页 / 关于 / 透明工地 / 服务 / 案例 / 知识 / 联系 / 404
- 实现 3 篇 GEO 文章（交城装修公司怎么选 / 为什么看工地进度 / 新房装修前确认 5 件事）
- 创建 SEO 文件：robots.txt / sitemap.xml / llms.txt
- 添加 JSON-LD 结构化数据（Organization / WebSite / LocalBusiness / FAQPage / BreadcrumbList）
- 初始化 AI 协作协议：AGENTS.md / AI_TASKS/ / .github/ 模板
- 本地 `npm run build` 通过

**下一步交给谁：**
- 用户：确认 GitHub 仓库创建、EdgeOne 部署
- ChatGPT：审 PR、规划下一批 GEO 文章（入库资料里还有 5 篇待写）

**阻塞项：**
- 联系信息（电话 / 微信 / 地址）待人工确认
- 真实域名待确认
- 真实案例待补充

**待写的 GEO 文章（来自入库资料）：**
1. 什么是透明工地？为什么装修业主越来越在意施工过程可查看
2. 业主不用天天跑工地，怎么判断家里装修进度是否正常？
3. 装修工长日报应该记录什么？照片、节点、问题和整改都要留痕
4. 交城毛坯房装修流程：从量房到验收，一共要看哪些节点
5. 装修公司怎么让业主放心？晟景装饰的透明工地思路

---

<!-- 之后的交接记录追加在这里 -->
