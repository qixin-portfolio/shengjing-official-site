import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "装修案例",
  description:
    "晟景装饰装修案例类型展示，包括现代简约、新中式、奶油风、改善型住宅。本页为案例类型展示，后续补充真实案例。",
  alternates: { canonical: "/cases" },
};

const caseTypes = [
  {
    title: "现代简约",
    desc: "线条干净、色彩克制、注重功能。适合刚需住房和小户型，预算相对可控。",
    tags: ["刚需住房", "小户型", "功能优先"],
    gradient: "from-cream-200 via-white to-ink/5",
    accent: "text-ink",
    suit: "刚需住房 / 小户型 / 首次装修",
    focus: "功能布局、收纳系统、材料性价比",
    nodes: "水电点位、防水、瓦工平整度",
  },
  {
    title: "新中式",
    desc: "传统元素与现代材质结合，注重意境和留白。适合改善型住房和对东方审美有偏好的业主。",
    tags: ["改善型住房", "东方审美", "材质讲究"],
    gradient: "from-forest-800 via-forest-600 to-wood/30",
    accent: "text-cream",
    suit: "改善型住房 / 东方审美 / 材质讲究",
    focus: "空间意境、材质对比、木作细节",
    nodes: "木工收口、定制柜体、墙面处理",
  },
  {
    title: "奶油风",
    desc: "低饱和度暖色调，柔软材质，整体温馨。适合年轻业主和注重居家氛围的家庭。",
    tags: ["年轻业主", "温馨氛围", "暖色调"],
    gradient: "from-wood/30 via-wood-light/40 to-cream-100",
    accent: "text-ink",
    suit: "年轻家庭 / 温馨氛围 / 收纳友好",
    focus: "色彩搭配、软装搭配、灯光氛围",
    nodes: "墙面找平、乳胶漆色差、灯光点位",
  },
  {
    title: "改善型住宅",
    desc: "注重空间规划、收纳系统和居住品质。适合换房升级的家庭，对设计细节要求更高。",
    tags: ["换房升级", "收纳系统", "品质优先"],
    gradient: "from-ink/30 via-forest-800 to-ink",
    accent: "text-cream",
    suit: "换房升级 / 长住需求 / 品质优先",
    focus: "空间重构、动线优化、收纳系统",
    nodes: "拆除结构、水电重排、全屋定制",
  },
];

const houseTypes = [
  { name: "一居室 / 小户型", suit: "现代简约 · 奶油风", focus: "功能布局、收纳" },
  { name: "两居室 · 刚需", suit: "现代简约 · 新中式", focus: "性价比、实用" },
  { name: "三居室 · 改善", suit: "新中式 · 改善型", focus: "空间重构、品质" },
  { name: "复式 / 大平层", suit: "改善型 · 新中式", focus: "动线、材质、定制" },
];

const stages = [
  { name: "量房出方案", detail: "实地量房，出初步方案和报价建议", period: "第 1 周" },
  { name: "水电改造", detail: "开槽布线，封槽前拍照留档", period: "第 1-2 周" },
  { name: "防水验收", detail: "闭水试验，验收后进入下一阶段", period: "第 3 周" },
  { name: "瓦工贴砖", detail: "墙地砖铺贴，平整度检查", period: "第 3-5 周" },
  { name: "木工油工", detail: "吊顶、柜体、墙面找平刷漆", period: "第 5-8 周" },
  { name: "竣工验收", detail: "整体验收，交付业主", period: "第 8-10 周" },
];

const realCasePlan = [
  { text: "整理已完工项目的小区、面积、户型、风格、周期", done: false },
  { text: "补充开工前 / 施工中 / 完工后对比照片", done: false },
  { text: "补充业主真实评价（经业主同意后）", done: false },
  { text: "按风格和户型分类，方便业主参考", done: false },
  { text: "在官网 /cases 上线真实案例卡片", done: false },
];

export default function CasesPage() {
  return (
    <>
      <BreadcrumbLd
        items={[
          { name: "首页", path: "/" },
          { name: "装修案例", path: "/cases" },
        ]}
      />
      <section className="section">
        <div className="container-page">
          <nav className="mb-8 text-sm text-ink-muted" aria-label="面包屑">
            <Link href="/" className="hover:text-forest">
              首页
            </Link>
            <span className="mx-2">/</span>
            <span className="text-forest">装修案例</span>
          </nav>

          <div className="mx-auto max-w-3xl">
            <span className="eyebrow">
              <span className="h-px w-8 bg-wood-dark" />
              装修案例 · 类型库
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-forest sm:text-4xl">
              风格类型 · 户型类型 · 施工阶段
            </h1>
            <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg">
              先按风格、户型、施工阶段展示，真实案例经业主授权后陆续补充。我们不虚构客户姓名、小区和评价。
            </p>
          </div>

          {/* 风格类型库：moodboard 风格 */}
          <div className="mt-14">
            <h2 className="section-title">风格类型</h2>
            <p className="section-subtitle">四种主流风格，对应不同业主需求。</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {caseTypes.map((c) => (
                <div key={c.title} className="overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-soft transition-all hover:shadow-card hover:border-forest/20">
                  {/* moodboard 风格色块 */}
                  <div className={`swatch bg-gradient-to-br ${c.gradient}`}>
                    <span className={`text-2xl font-bold ${c.accent}`}>
                      {c.title}
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-sm leading-relaxed text-ink-muted">
                      {c.desc}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {c.tags.map((t) => (
                        <span key={t} className="tag-forest">
                          {t}
                        </span>
                      ))}
                    </div>
                    {/* 适合人群 / 施工重点 / 记录节点 */}
                    <div className="mt-4 space-y-2 border-t border-forest/5 pt-4">
                      <div className="flex items-start gap-2 text-xs">
                        <span className="shrink-0 font-semibold text-wood-dark">适合</span>
                        <span className="text-ink-soft">{c.suit}</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs">
                        <span className="shrink-0 font-semibold text-wood-dark">重点</span>
                        <span className="text-ink-soft">{c.focus}</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs">
                        <span className="shrink-0 font-semibold text-wood-dark">节点</span>
                        <span className="text-ink-soft">{c.nodes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 户型类型库 */}
          <div className="mt-16">
            <h2 className="section-title">户型类型</h2>
            <p className="section-subtitle">不同户型，关注点不一样。</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {houseTypes.map((h) => (
                <div key={h.name} className="rounded-2xl border border-forest/10 bg-cream-50 p-5 transition-all hover:border-wood/30 hover:bg-wood/5">
                  <h3 className="text-sm font-semibold text-forest">{h.name}</h3>
                  <p className="mt-2 text-xs text-ink-soft">推荐风格：{h.suit}</p>
                  <p className="mt-1 text-xs text-ink-muted">重点：{h.focus}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 施工阶段时间线 */}
          <div className="mt-16">
            <h2 className="section-title">施工阶段</h2>
            <p className="section-subtitle">
              每个阶段都有过程记录，这是透明工地的核心。
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {stages.map((s, idx) => (
                <div key={s.name} className="flex gap-4 rounded-2xl border border-forest/10 bg-white p-5 shadow-soft">
                  <div className="flex flex-col items-center">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest text-xs font-bold text-cream">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    {idx < stages.length - 1 && (
                      <div className="mt-1 h-6 w-px bg-forest/20" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-semibold text-forest">{s.name}</h3>
                      <span className="tag-neutral text-[10px]">{s.period}</span>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-ink-muted">
                      {s.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 真实案例补充计划：checklist */}
          <div className="mt-16 rounded-2xl border border-wood/30 bg-wood/10 p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-forest">
              真实案例补充计划
            </h2>
            <p className="mt-2 text-sm text-ink-soft">
              我们不虚构客户姓名、小区和评价。以下是我们正在做的整理工作：
            </p>
            <div className="mt-4 space-y-2">
              {realCasePlan.map((p) => (
                <div key={p.text} className="flex items-start gap-3 text-sm text-ink-soft">
                  <span
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border ${
                      p.done
                        ? "border-forest bg-forest text-cream"
                        : "border-wood/40 bg-white text-transparent"
                    }`}
                  >
                    ✓
                  </span>
                  <span>{p.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-sm text-ink-muted">
              想看正在施工的工地？可以预约实地看工地。
            </p>
            <div className="mt-4">
              <Link href="/contact" className="btn-primary">
                预约看工地
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
