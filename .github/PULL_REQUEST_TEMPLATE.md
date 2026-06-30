## 改了什么

（列出主要改动，重要的文件用 `code` 标注）

## 为什么改

关联 Issue：#（编号）
（或说明解决什么问题）

## AI Executor

- 执行代理：Codex / WorkBuddy / 其他 AI Executor
- Maker 声明：已完成执行并等待 Checker 审查
- Checker：ChatGPT + 用户

## 怎么测试

1. （验收步骤 1）
2. （验收步骤 2）
3. （验收步骤 3）

## 有什么风险

- [ ] 低风险（不影响现有功能）
- [ ] 中风险（可能影响部分页面）
- [ ] 高风险（需 Human Gate，见 `AGENTS.md`）

（如果有风险，说明可能影响什么、需不需要人工确认）

## WorkBuddy 本地任务确认（如适用）

- [ ] 已确认当前目录和目标项目
- [ ] 已说明允许修改范围
- [ ] 已确认是否影响其他项目
- [ ] 已输出本地交付报告或可上传目录

## 检查结果

- [ ] `npm run build` 通过
- [ ] `npm run lint` 通过
- [ ] `npm run typecheck` 通过
- [ ] 没有硬编码密钥 / token
- [ ] 没有写虚假信息（客户 / 地址 / 排名）
- [ ] 遵循 `AGENTS.md` 协作规范

## 交接

- 已更新 `AI_TASKS/handoff.md`
- 已更新 `AI_TASKS/current.md`（如需要）

Closes #（Issue 编号）
