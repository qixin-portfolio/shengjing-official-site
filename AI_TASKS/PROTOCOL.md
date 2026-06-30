# AI 协作详细协议

> 本文件是 `AGENTS.md` 的补充，定义具体的操作规范。
> 所有 AI 协作者在开始工作前必须读完本文件。

## 一、AI Executor 执行代理

本项目的执行代理不限定为 Codex。

可用执行代理包括：

- **Codex**：适合 GitHub 仓库任务、代码修改、PR 创建、远程协作。
- **WorkBuddy**：适合本地项目查找、本地文件整理、本地构建、静态产物打包、上传前检查。
- **其他 AI 编程代理**：Claude Code、Cursor Agent 或其他本地 / 云端执行工具，只要遵守本协议，也可以作为执行代理。

统一称呼：`AI Executor`。

所有 AI Executor 都必须遵守 Human Gate、Loop Protocol 和 handoff 规则。

## 二、Maker / Checker 分离

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

## 三、Issue 规范

### 何时需要 Issue

- 复杂任务（涉及多个文件 / 多个步骤）
- 新功能开发
- 架构调整
- 任何需要讨论方案的任务

### Issue 标题格式

```
[类型] 简短描述
```

类型：`feat` / `fix` / `docs` / `refactor` / `chore` / `geo`

### Issue 内容必须包含

1. **目标**：这个任务要解决什么问题
2. **验收标准**：怎样算完成（可检查的条件）
3. **约束**：不能碰什么、不能引入什么
4. **关联**：关联的 PR 编号（创建后补充）

## 四、分支规范

### 命名

```
codex/<issue编号>-<简短描述>
workbuddy/<issue编号>-<简短描述>
ai/<issue编号>-<简短描述>
feat/<简短描述>
fix/<简短描述>
```

### 规则

- 一个分支只做一件事
- 分支从 `main` 拉，PR 回 `main`
- 不要在分支里做无关的改动

## 五、PR 规范

### PR 描述必须包含

```markdown
## 改了什么
（列出主要改动）

## 为什么改
（关联 Issue / 解决什么问题）

## 怎么测试
（验收步骤）

## 有什么风险
（可能影响什么、需不需要人工确认）

## 检查结果
- [ ] npm run build 通过
- [ ] npm run lint 通过
- [ ] npm run typecheck 通过
- [ ] 没有硬编码密钥
```

### PR 规则

- PR 必须关联 Issue（`Closes #<编号>`）
- PR 合并前必须有人审（ChatGPT 或用户）
- 高风险 PR 必须等用户确认（见 Human Gate）
- AI Executor 不得自行合并 PR

## 六、AI Executor 工作流程

```
1. 读 Issue（或用户指令），理解目标和约束
2. 从 main 拉分支
3. 改代码
4. 跑 npm run build / lint / typecheck
5. git commit（消息清晰）
6. push 并创建 PR
7. 在 PR 描述中写清楚改动和风险
8. 更新 AI_TASKS/handoff.md
9. 在聊天中告诉用户 PR 链接，等用户决策
```

### Codex 适用场景

- GitHub 仓库任务
- 代码修改
- PR 创建
- 远程协作
- 按 Issue / PR 进行交接

### WorkBuddy 适用场景

WorkBuddy 是本地执行代理，适合处理：

- 查找本地已有项目
- 检查本地目录结构
- 判断项目类型
- 修改静态页面或配置文件
- 执行本地构建
- 准备上传产物
- 检查是否误改其他项目
- 输出本地交付报告

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

### AI Executor 禁止行为

- 不得自行合并 PR
- 不得直接部署
- 不得执行 Human Gate 列出的操作
- 不得只在聊天中汇报，不写 PR / handoff
- 不得为了通过检查删除重要内容
- 不得引入未经讨论的新依赖
- WorkBuddy 不得自动发布生产环境、自动修改真实数据库、自动修改支付 / 认证 / 安全配置、自动处理真实密钥，或绕过用户确认执行高风险操作

## 七、ChatGPT 工作流程

```
1. 读用户目标
2. 拆解为 Issue（或判断是否需要 Issue）
3. 分配给 AI Executor（或指导用户开 Issue）
4. AI Executor 提 PR 或本地交付报告后，审查结果
5. 审查：代码质量 / 架构 / 风险 / 是否符合 Issue
6. 审查结果写入 PR 评论
7. 通过则建议用户合并或进入部署准备，不通过则指导 AI Executor 修改
```

### ChatGPT 禁止行为

- 不得直接改代码（通过 PR 审查指导 AI Executor）
- 不得直接部署
- 不得跳过 Human Gate

## 八、用户工作流程

```
1. 提出目标（聊天或 Issue）
2. 等 ChatGPT 拆任务 / AI Executor 执行
3. 看 PR，做最终决策（合并 / 打回 / 调整）
4. 高风险操作做人工确认
```

### 用户责任

- 提供真实信息（电话 / 地址 / 域名等）
- 做最终决策（合并 PR / 批准部署）
- 确认 Human Gate 操作

## 九、沟通规范

- 所有重要信息写入仓库文件，不只存在聊天里
- PR 评论是主要沟通渠道
- `AI_TASKS/handoff.md` 是交接记录
- `AI_TASKS/current.md` 是当前状态
- 聊天只用于即时讨论，不用于持久信息

### 最小沟通格式

- Codex 执行：`让 Codex 继续 Issue #x`
- WorkBuddy 执行：`让 WorkBuddy 找本地项目并准备上传`
- ChatGPT 审查：`看 PR #x`
- 本地交付审查：`WorkBuddy 已完成，路径是 xxx`
- 新开对话恢复：`继续这个项目，先读 AI_TASKS/PROTOCOL.md 和 AI_TASKS/LOOP_PROTOCOL.md`
