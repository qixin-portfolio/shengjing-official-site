# 晟景装饰官网 — GEO Monitor Sync（资料库同步说明）

> 本文件说明 GEO_ASSETS 目录下的资料如何同步进 GEO Monitor 资料库。
> GEO Monitor 是独立的 SaaS 系统，本官网不直接对接其数据库，
> 而是通过本目录的 Markdown 文件作为「单一事实源」，由 GEO Monitor 定期读取或人工同步。

---

## 一、同步关系总览

```
shengjing-official-site 仓库
└── GEO_ASSETS/
    ├── prompt-universe.md      ──→  GEO Monitor 监测问题库
    ├── evidence-atoms.md       ──→  GEO Monitor 品牌事实库
    ├── content-scorecard.md    ──→  GEO Monitor 页面评分标准
    ├── measurement-plan.md     ──→  GEO Monitor 监测任务配置
    ├── authority-network.md    ──→  GEO Monitor 外部信源清单
    └── geo-monitor-sync.md     ──→  本文件（同步说明）
```

---

## 二、各文件同步方式

### 2.1 prompt-universe.md → 监测问题库

| 项 | 说明 |
|----|------|
| 同步方向 | 官网仓库 → GEO Monitor |
| 同步频率 | 每月 1 次，或问题库有重大更新时 |
| 同步方式 | 人工导入或 GEO Monitor 读取 Git 仓库 |
| 同步内容 | 60+ 问题，按意图分类，含优先级 |
| GEO Monitor 用途 | 作为监测任务的问题来源 |

**同步检查点**：
- [ ] 问题数量是否更新
- [ ] 是否有新增 P0 问题
- [ ] 推荐承接页面是否仍有效

### 2.2 evidence-atoms.md → 品牌事实库

| 项 | 说明 |
|----|------|
| 同步方向 | 官网仓库 → GEO Monitor |
| 同步频率 | 每月 1 次，或有证据更新时 |
| 同步方式 | 人工导入或 GEO Monitor 读取 Git 仓库 |
| 同步内容 | 品牌身份、服务类型、透明工地、联系方式、案例等证据原子 |
| GEO Monitor 用途 | 核对 AI 回答是否与事实一致 |

**同步检查点**：
- [ ] 是否有新证据原子
- [ ] 「待人工补充」字段是否已转为「已验证」
- [ ] 是否有证据被修正或废弃

### 2.3 content-scorecard.md → 页面评分标准

| 项 | 说明 |
|----|------|
| 同步方向 | 官网仓库 → GEO Monitor |
| 同步频率 | 每季度 1 次，或大改版后 |
| 同步方式 | 人工导入 |
| 同步内容 | 8 维度评分标准 + 当前评分 |
| GEO Monitor 用途 | 衡量官网 GEO 能力，跟踪优化进展 |

**同步检查点**：
- [ ] 评分是否有变化
- [ ] 高优先级优化项是否完成
- [ ] 是否需要调整维度权重

### 2.4 measurement-plan.md → 监测任务配置

| 项 | 说明 |
|----|------|
| 同步方向 | 官网仓库 → GEO Monitor |
| 同步频率 | 每月 1 次，或监测计划调整时 |
| 同步方式 | 人工在 GEO Monitor 中配置监测任务 |
| 同步内容 | 监测平台、监测问题、测试次数、记录字段 |
| GEO Monitor 用途 | 自动化或半自动化执行监测 |

**同步检查点**：
- [ ] 监测平台是否有变化（新增/下线）
- [ ] 监测问题是否与 prompt-universe 一致
- [ ] 记录字段是否需要扩展

### 2.5 authority-network.md → 外部信源清单

| 项 | 说明 |
|----|------|
| 同步方向 | 官网仓库 → GEO Monitor |
| 同步频率 | 每季度 1 次，或有新平台上线时 |
| 同步方式 | 人工导入 |
| 同步内容 | 外部信源清单 + 一致性检查结果 |
| GEO Monitor 用途 | 评估外部信源一致性对 GEO 的影响 |

**同步检查点**：
- [ ] 是否有新平台上线
- [ ] 各平台信息是否一致
- [ ] 是否有平台下线或信息过期

---

## 三、同步流程

### 3.1 月度同步流程（每月 1 日）

1. 检查 GEO_ASSETS 目录是否有更新
2. 同步 prompt-universe 到 GEO Monitor 问题库
3. 同步 evidence-atoms 到 GEO Monitor 事实库
4. 检查 measurement-plan 是否需要调整监测任务
5. 记录同步日志

### 3.2 季度同步流程（每季度首月 1 日）

1. 执行月度同步流程
2. 更新 content-scorecard 评分
3. 检查 authority-network 一致性
4. 输出季度复盘报告

### 3.3 事件驱动同步

以下事件触发立即同步：
- 官网主域名变更
- 联系方式/门店地址更新
- 备案号下来
- 真实案例上线
- 透明工地小程序重大更新
- GEO Monitor 发现重大偏差

---

## 四、同步日志模板

```markdown
## YYYY-MM-DD 同步日志

### 同步内容
- [ ] prompt-universe → 问题库
- [ ] evidence-atoms → 事实库
- [ ] content-scorecard → 评分标准
- [ ] measurement-plan → 监测任务
- [ ] authority-network → 外部信源

### 变更摘要
- ...

### 备注
- ...
```

---

## 五、边界说明

- 本官网仓库不直接写入 GEO Monitor 数据库
- GEO Monitor 是独立 SaaS，由其自身负责数据存储和计算
- 本仓库的 GEO_ASSETS 是「单一事实源」，GEO Monitor 以此为准
- 如 GEO Monitor 发现官网内容与证据原子不符，以官网实际内容为准并更新证据原子
- 不为同步而虚构任何数据
