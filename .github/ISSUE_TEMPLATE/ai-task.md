---
name: AI 任务
about: AI 协作者（ChatGPT / Codex / WorkBuddy / 其他 AI Executor）使用的任务模板
title: "[类型] 简短描述"
labels: ai-task
assignees: ''
---

## 目标

（这个任务要解决什么问题？给谁用？为什么做？）

## 验收标准

- [ ] 条件 1（可检查的）
- [ ] 条件 2
- [ ] 条件 3

## 约束

- 不能碰：（列出禁止修改的文件 / 目录 / 项目）
- 不能引入：（列出禁止引入的依赖 / 服务）
- 必须遵循：`AGENTS.md` 中的协作规范

## 建议 AI Executor

- [ ] Codex（GitHub 仓库任务 / 代码修改 / PR 创建 / 远程协作）
- [ ] WorkBuddy（本地项目查找 / 本地构建 / 静态产物打包 / 上传前检查）
- [ ] 其他 AI 编程代理（需遵守本协议）

## 涉及页面 / 文件

（列出预计要改的页面或文件）

## 风险评估

- [ ] 低风险（文案 / 样式调整）
- [ ] 中风险（新增页面 / 功能调整）
- [ ] 高风险（需 Human Gate，见 `AGENTS.md`）

## Maker / Checker

- Maker：AI Executor 负责执行任务、运行检查、创建 PR 或输出本地交付报告、更新 `AI_TASKS/handoff.md`
- Checker：ChatGPT + 用户负责审查、判断是否越界、判断是否可合并或进入 Human Gate

## WorkBuddy 本地任务确认（如适用）

- [ ] 已确认当前目录
- [ ] 已确认目标项目
- [ ] 已说明允许修改范围
- [ ] 已确认是否影响其他项目
- [ ] 已输出修改文件清单或可上传目录

## 备注

（其他需要说明的信息）
