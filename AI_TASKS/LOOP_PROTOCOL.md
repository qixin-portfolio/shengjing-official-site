# Loop 任务规范

> Loop 任务 = 循环执行的自动化任务（如定期检查 GEO 表现、定期更新内容等）。
> 本文件定义 Loop 任务的创建、执行、停止规范。
> Loop 可由 Codex、WorkBuddy、Claude Code、Cursor Agent 或其他 AI Executor 执行，但必须遵守 Maker / Checker 分离。

## 一、五个"可"

所有 Loop 任务必须同时满足：

1. **可重复**：每次执行流程一致，不依赖临时状态或人工干预
2. **可验证**：执行后有明确的成功 / 失败标准（不是"做了"就行，要能检查"做对了"）
3. **可停止**：用户随时可以叫停，叫停后不会再执行
4. **可追踪**：每次执行结果写入 `AI_TASKS/handoff.md` 或专门的日志文件
5. **可追责**：出了问题能定位到哪一步、哪个 AI Executor、哪次执行

## 二、Loop 任务定义模板

创建 Loop 任务时，必须在 Issue 或 `AI_TASKS/` 中写清楚：

```markdown
## Loop 任务：<名称>

### 触发条件
（什么时候执行：定时 / 事件触发 / 手动）

### 执行流程
1. ...
2. ...
3. ...

### 验证标准
- 成功条件：...
- 失败条件：...

### 输出
（结果写到哪里：handoff.md / Issue 评论 / 文件）

### 停止条件
（什么情况下不再执行）

### AI Executor
（由 Codex / WorkBuddy / 其他 AI Executor 执行）

### Checker
（由 ChatGPT + 用户审查）
```

## 三、执行记录格式

每次 Loop 执行后，在 `AI_TASKS/handoff.md` 追加：

```markdown
## YYYY-MM-DD HH:MM | Loop: <名称> | <AI Executor>

### 执行结果
- 状态：成功 / 失败 / 部分成功
- 耗时：X 分钟
- 输出：...

### 验证
- 验证标准：...
- 实际结果：...

### 异常（如有）
- ...

### 下次执行
- 时间：...
- 预期：...
```

## 四、停止机制

用户可以通过以下方式叫停 Loop 任务：

1. 在 Issue 中评论"停止 Loop"
2. 在聊天中说"停止 <Loop 名称>"
3. 修改 `AI_TASKS/current.md` 标记为"已停止"

叫停后，AI Executor 不得再执行该 Loop，除非用户重新启用。

## 五、WorkBuddy 执行 Loop 的额外要求

WorkBuddy 执行本地 Loop 任务时，必须额外确认：

1. 当前目录和目标项目。
2. 允许修改范围。
3. 是否存在多个疑似项目。
4. 是否影响其他项目。
5. 是否需要上传产物或本地交付报告。

WorkBuddy 不得借 Loop 任务自动发布生产环境、自动修改数据库、自动处理真实密钥，或绕过 Human Gate。

## 六、MVP 阶段暂不启用

本项目 MVP 阶段暂不启用 Loop 任务。以下场景未来可能需要 Loop：

- 定期检查官网在 AI 问答平台的被提及情况（GEO Monitor）
- 定期更新装修知识文章
- 定期检查 sitemap / robots 是否可访问
- 定期检查死链

启用前必须先创建 Issue，按上述模板定义，经用户确认后再执行。
