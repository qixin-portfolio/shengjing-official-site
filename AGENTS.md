# AGENTS.md — 晟景装饰官网 AI 协作总纲

> 本文件是所有 AI 协作者（ChatGPT / Codex / WorkBuddy / Claude Code / Cursor Agent / 其他 AI Executor）进入本仓库时必读的协作总纲。
> 最后更新：2026-06-30

## 一、核心原则

**仓库是长期记忆，聊天只是临时界面。**

- 所有重要决策、任务状态、交接信息必须写入仓库文件，不能只存在聊天记录里。
- 聊天中的讨论是临时的，PR 描述 / Issue / `AI_TASKS/` 是持久的。
- 任何 AI Executor 不得只在聊天中汇报工作，必须同步写入 PR 描述 / PR 评论 / `AI_TASKS/handoff.md`。

## 二、AI Executor 执行代理

本项目的执行代理不限定为 Codex。可用执行代理包括：

- **Codex**：适合 GitHub 仓库任务、代码修改、PR 创建、远程协作。
- **WorkBuddy**：适合本地项目查找、本地文件整理、本地构建、静态产物打包、上传前检查。
- **其他 AI 编程代理**：Claude Code、Cursor Agent 或其他本地 / 云端执行工具，只要遵守本协议，也可以作为执行代理。

统一称呼：`AI Executor`。

所有 AI Executor 都必须遵守本文件、`AI_TASKS/PROTOCOL.md`、`AI_TASKS/LOOP_PROTOCOL.md`、Human Gate 和 handoff 规则。

## 三、角色分工

| 角色 | 职责 | 不可越界 |
|------|------|---------|
| **用户（齐鑫）** | 提出目标、提供 Issue / PR 编号、做最终决策 | 不负责写代码 |
| **Checker（ChatGPT + 用户）** | 拆任务、审 PR、判断风险、判断是否可合并、判断是否进入 Human Gate | 不直接部署生产环境 |
| **Maker（Codex / WorkBuddy / 其他 AI Executor）** | 执行任务、修改文件、运行检查、创建 PR 或输出本地交付报告、更新 `AI_TASKS/handoff.md` | 不得自己宣布任务最终完成，不得自动执行高风险操作（见 Human Gate） |

### Maker / Checker 分离

Codex、WorkBuddy 或其他 AI Executor 都属于 Maker。

Maker 负责：

- 执行任务
- 修改文件
- 运行检查
- 创建 PR 或输出本地交付报告
- 更新 `AI_TASKS/handoff.md`

Checker 负责：

- 审查结果
- 判断是否越界
- 判断是否可合并
- 判断是否进入 Human Gate
- 判断是否需要回滚或补修

默认 Checker 是 ChatGPT + 用户。禁止 Maker 自己宣布任务最终完成，Maker 只能说明“已完成执行并等待审查”。

## 四、任务流程

### 标准流程（复杂任务）

```
用户提目标 → ChatGPT 拆 Issue → AI Executor 读 Issue 开分支 → AI Executor 改代码跑检查 → AI Executor 创建 PR 或输出本地交付报告 → ChatGPT 审查 → 用户决策
```

1. **复杂任务必须先有 Issue**，Issue 里写清楚目标、验收标准、约束。
2. **分支命名**：`codex/<issue编号>-<简短描述>`、`workbuddy/<issue编号>-<简短描述>`、`ai/<issue编号>-<简短描述>` 或 `feat/<描述>`。
3. **PR 必须关联 Issue**：在 PR 描述中写 `Closes #<issue编号>`。
4. **PR 描述必须包含**：改了什么、为什么改、怎么测试、有什么风险。
5. **PR 合并前必须有人审**（ChatGPT 或用户）。

### 简单流程（小改动）

```
用户提需求 → AI Executor 直接开分支改 → 创建 PR 或输出本地交付报告 → 用户审查
```

适用于：文案修改、样式调整、Bug 修复等低风险改动。仍需 PR，但可以跳过 Issue。

## 五、WorkBuddy 本地任务协议

WorkBuddy 是本地执行代理，适合处理：

- 查找本地已有项目
- 检查本地目录结构
- 判断项目类型
- 修改静态页面或配置文件
- 执行本地构建
- 准备上传产物
- 检查是否误改其他项目
- 输出本地交付报告

WorkBuddy 不应负责：

- 自动合并 PR
- 自动发布生产环境
- 自动修改真实数据库
- 自动修改支付、认证、安全配置
- 自动处理真实密钥
- 绕过用户确认执行高风险操作

当任务由 WorkBuddy 执行时，必须额外遵守：

1. 开始前先确认当前目录。
2. 修改前先确认目标项目，不得误改其他项目。
3. 如果发现多个疑似项目，必须停止并让用户选择。
4. 修改前输出允许修改范围。
5. 修改后输出修改文件清单。
6. 必须说明是否影响其他项目。
7. 如能使用 Git，必须走分支和 commit。
8. 如不能使用 Git，必须输出可上传目录和变更摘要。
9. 不得把真实密钥写入文件。
10. 不得直接删除重要文件。

## 六、Human Gate（高风险操作，必须人工确认）

以下操作**任何 AI Executor 不得自动执行最终动作**，必须在 PR 或 Issue 中明确提出，等用户确认：

1. **部署操作**：生产环境部署、域名切换、DNS 修改
2. **数据库**：建表、迁移、删数据（本项目 MVP 不接数据库，但未来如果接入同样适用）
3. **支付**：支付配置、密钥写入（本项目 MVP 不接支付）
4. **认证**：登录系统、权限配置（本项目 MVP 不接登录）
5. **密钥管理**：API Key、Token、密码等敏感信息的写入或修改
6. **生产环境操作**：任何影响线上服务的操作
7. **删除操作**：删除页面、删除文件、删除配置
8. **第三方服务接入**：接入新的外部服务（需确认费用、隐私、合规）

## 七、禁止事项

1. 不得修改与本任务无关的其他项目
2. 不得碰 GEO Monitor SaaS 仓库
3. 不得碰晟景透明工地小程序仓库
4. 不得提交真实密钥、token、账号密码
5. 不得写虚假客户案例
6. 不得写虚假门店地址
7. 不得写无法证明的绝对化宣传（"第一""100%满意""零投诉"等）
8. 不得接数据库（MVP 阶段）
9. 不得接登录（MVP 阶段）
10. 不得接支付（MVP 阶段）
11. 不得创建 Agent
12. 不得直接部署生产环境

## 八、Loop 任务规范

Loop 任务（循环执行的自动化任务）必须满足五个"可"：

1. **可重复**：每次执行流程一致，不依赖临时状态
2. **可验证**：执行后有明确的成功 / 失败标准
3. **可停止**：用户随时可以叫停
4. **可追踪**：执行记录写入 `AI_TASKS/handoff.md` 或 PR 评论
5. **可追责**：出了问题能定位到哪一步、哪个 AI Executor

详见 `AI_TASKS/LOOP_PROTOCOL.md`。

## 九、最小沟通格式

用户可以这样发起协作：

- Codex 执行：`让 Codex 继续 Issue #x`
- WorkBuddy 执行：`让 WorkBuddy 找本地项目并准备上传`
- ChatGPT 审查：`看 PR #x`
- 本地交付审查：`WorkBuddy 已完成，路径是 xxx`
- 新开对话恢复：`继续这个项目，先读 AI_TASKS/PROTOCOL.md 和 AI_TASKS/LOOP_PROTOCOL.md`

## 十、文件结构

```
AI_TASKS/
├── current.md       # 当前任务状态（正在做什么、卡在哪）
├── handoff.md       # 交接记录（每次 AI 工作结束后更新）
├── PROTOCOL.md      # 详细协作协议
└── LOOP_PROTOCOL.md # Loop 任务规范

.github/
├── ISSUE_TEMPLATE/ai-task.md   # AI 任务 Issue 模板
└── PULL_REQUEST_TEMPLATE.md    # PR 模板
```

## 十一、分支策略

- `main`：主分支，受保护，只通过 PR 合并
- `codex/*`：Codex 工作分支
- `workbuddy/*`：WorkBuddy 本地任务分支
- `ai/*`：其他 AI Executor 工作分支
- `feat/*`：功能开发分支
- `fix/*`：Bug 修复分支

## 十二、上线检查清单

部署前必须确认：

- [ ] `npm run build` 通过
- [ ] `npm run lint` 通过
- [ ] `npm run typecheck` 通过
- [ ] 没有硬编码的密钥 / token
- [ ] `siteConfig.url` 已替换为真实域名
- [ ] 联系信息（电话 / 微信 / 地址）已由人工确认
- [ ] robots.txt / sitemap.xml / llms.txt 内容正确
- [ ] 结构化数据 JSON-LD 验证通过
