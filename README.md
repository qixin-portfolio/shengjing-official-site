# 晟景装饰官网

> 山西交城本地装修公司官网，服务 SEO 与 GEO，可通过 EdgeOne Makers / Pages 导入 Git 仓库部署。

## 技术栈

- **框架**：Next.js 14 (App Router) + TypeScript
- **样式**：Tailwind CSS 3.4
- **部署**：静态导出 (`output: export`)，适配 EdgeOne Makers / Pages
- **不接**：数据库、登录、支付、后端 API（MVP 阶段纯静态）

## 快速开始

```bash
# 安装依赖
npm install

# 本地开发
npm run dev

# 构建（静态导出到 out/ 目录）
npm run build

# 代码检查
npm run lint
npm run typecheck
```

## 项目结构

```
app/
├── layout.tsx              # 根布局（metadata + JSON-LD + Header/Footer）
├── page.tsx                # 首页
├── about/page.tsx          # 关于晟景
├── transparent-site/page.tsx  # 透明工地
├── services/page.tsx       # 装修服务
├── cases/page.tsx          # 装修案例
├── guides/page.tsx         # 装修知识列表
├── guides/[slug]/page.tsx  # 文章详情
├── contact/page.tsx        # 联系我们
├── not-found.tsx           # 404
├── sitemap.ts              # sitemap.xml
├── robots.ts               # robots.txt
└── globals.css             # 全局样式

components/
├── site-header.tsx         # 顶部导航（响应式）
├── site-footer.tsx         # 底部
└── json-ld.tsx             # 结构化数据组件

lib/
├── site.ts                 # 站点配置、导航、FAQ、联系信息
└── guides.ts               # GEO 文章数据

public/
└── llms.txt                # AI 问答平台识别文件

AI_TASKS/                   # AI 协作协议
├── current.md              # 当前任务状态
├── handoff.md              # 交接记录
├── PROTOCOL.md             # 详细协议
└── LOOP_PROTOCOL.md        # Loop 任务规范

.github/
├── ISSUE_TEMPLATE/ai-task.md
└── PULL_REQUEST_TEMPLATE.md
```

## 部署到 EdgeOne Makers / Pages

1. 将本仓库推送到 GitHub
2. 登录 EdgeOne Makers / Pages
3. 选择"导入 Git 仓库"
4. 选择本仓库
5. 构建命令：`npm run build`
6. 输出目录：`out`
7. 部署

## 上线前必须更新

以下信息在 `lib/site.ts` 中，上线前必须由人工确认后替换：

- `siteConfig.url`：真实域名（已配置为 https://shengjingzs.cn）
- `contactInfo.phonePlaceholder`：真实电话
- `contactInfo.wechatPlaceholder`：真实微信
- `contactInfo.addressNote`：真实门店地址

## AI 协作

本仓库使用 AI 协作协议（ChatGPT + Codex），详见：

- `AGENTS.md`：协作总纲
- `AI_TASKS/PROTOCOL.md`：详细协议
- `AI_TASKS/LOOP_PROTOCOL.md`：Loop 任务规范

## 声明

- 本站内容为品牌介绍与装修知识分享，不构成合同承诺
- 具体服务内容、价格、工期以线下签约为准
- 案例页为类型展示，后续补充真实案例
- 不使用"第一""100%满意"等无法证明的绝对化宣传
