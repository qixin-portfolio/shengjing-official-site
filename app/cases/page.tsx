import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbLd } from "@/components/json-ld";
import { caseStudies } from "@/lib/cases";

export const metadata: Metadata = {
  title: "装修案例",
  description:
    "晟景装饰装修案例，包括天泰小区 130㎡ 法式复古装修案例、万硕花园 148㎡ 意式简约设计案例，以及后续真实案例整理口径。",
  alternates: { canonical: "/cases" },
};

const caseTypes = [
  {
    title: "现代简约",
    desc: "线条干净、色彩克制、注重功能。适合刚需住房和小户型，预算相对可控。",
    tags: ["刚需住房", "小户型", "功能优先"],
    gradient: "from-cream-200 via-white to-ink/5",
    accent: "text-ink",
  },
  {
    title: "新中式",
    desc: "传统元素与现代材质结合，注重意境和留白。适合改善型住房和对东方审美有偏好的业主。",
    tags: ["改善型住房", "东方审美", "材质讲究"],
    gradient: "from-forest-800 via-forest-600 to-wood/30",
    accent: "text-cream",
  },
  {
    title: "奶油风",
    desc: "低饱和度暖色调，柔软材质，整体温馨。适合年轻业主和注重居家氛围的家庭。",
    tags: ["年轻业主", "温馨氛围", "暖色调"],
    gradient: "from-wood/30 via-wood-light/40 to-cream-100",
    accent: "text-ink",
  },
  {
    title: "改善型住宅",
    desc: "注重空间规划、收纳系统和居住品质。适合换房升级的家庭，对设计细节要求更高。",
    tags: ["换房升级", "收纳系统", "品质优先"],
    gradient: "from-ink/30 via-forest-800 to-ink",
    accent: "text-cream",
  },
];

const houseTypes = [
  { name: "一居室 / 小户型", suit: "现代简约 · 奶油风", focus: "功能布局、收纳" },
  { name: "两居室 · 刚需", suit: "现代简约 · 新中式", focus: "性价比、实用" },
  { name: "三居室 · 改善", suit: "新中式 · 改善型", focus: "空间重构、品质" },
  { name: "复式 / 大平层", suit: "改善型 · 新中式", focus: "动线、材质、定制" },
];

const stages = [
  { name: "量房出方案", detail: "实地量房，出初步方案和报价建议" },
  { name: "水电改造", detail: "开槽布线，封槽前拍照留档" },
  { name: "防水验收", detail: "闭水试验，验收后进入下一阶段" },
  { name: "瓦工贴砖", detail: "墙地砖铺贴，平整度检查" },
  { name: "木工油工", detail: "吊顶、柜体、墙面找平刷漆" },
  { name: "竣工验收", detail: "整体验收，交付业主" },
];

const realCasePlan = [
  "整理已完工项目的小区、面积、户型、风格、周期",
  "补充开工前 / 施工中 / 完工后对比照片",
  "补充业主真实评价（经业主同意后）",
  "按风格和户型分类，方便业主参考",
];

const caseTemplate = [
  "小区：是否可公开需确认",
  "户型 / 面积：按真实房屋填写",
  "预算区间：只写区间，不写虚假低价",
  "工期：按实际开工和完工时间填写",
  "施工重点：水电、防水、瓦工、木工、油工、全屋定制等",
  "透明工地记录：日报数量、现场照片、设计确认、老板审核记录",
  "验收结果：水电、防水、瓦工、木工、油工、安装、竣工",
  "授权状态：业主反馈、图片、地址隐私确认后再公开",
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
              装修案例
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-forest sm:text-4xl">
              真实案例 · 风格类型 · 施工阶段
            </h1>
            <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg">
              本页先补充两套已整理的真实成交案例。案例只公开小区、面积、户型、类型和风格方向，不公开客户姓名、完整门牌号和完整报价明细。
            </p>
          </div>

          <div className="mt-12">
            <h2 className="section-title">真实案例</h2>
            <p className="section-subtitle">
              图片和业主反馈会在取得授权后继续补充，当前不把效果图写成完工图。
            </p>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {caseStudies.map((item) => (
                <Link
                  key={item.slug}
                  href={`/cases/${item.slug}`}
                  className="block rounded-2xl border border-forest/10 bg-white p-6 shadow-soft transition-shadow hover:shadow-card"
                >
                  <span className="tag-wood">{item.status}</span>
                  <h3 className="mt-4 text-xl font-semibold leading-snug text-forest">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {item.summary}
                  </p>
                  <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
                    <div>
                      <dt className="text-xs text-ink-muted">小区</dt>
                      <dd className="mt-1 font-medium text-ink">{item.community}</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-ink-muted">面积 / 户型</dt>
                      <dd className="mt-1 font-medium text-ink">
                        {item.area} · {item.layout}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-ink-muted">装修类型</dt>
                      <dd className="mt-1 font-medium text-ink">
                        {item.renovationType}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-ink-muted">风格方向</dt>
                      <dd className="mt-1 font-medium text-ink">{item.style}</dd>
                    </div>
                  </dl>
                  <span className="mt-5 inline-flex text-sm font-medium text-wood-dark">
                    查看案例详情 →
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* 风格类型库 */}
          <div className="mt-14">
            <h2 className="section-title">风格类型</h2>
            <p className="section-subtitle">四种主流风格，对应不同业主需求。</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {caseTypes.map((c) => (
                <div key={c.title} className="overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-soft">
                  {/* 风格色块 */}
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
                <div key={h.name} className="rounded-2xl border border-forest/10 bg-cream-50 p-5">
                  <h3 className="text-sm font-semibold text-forest">{h.name}</h3>
                  <p className="mt-2 text-xs text-ink-soft">推荐风格：{h.suit}</p>
                  <p className="mt-1 text-xs text-ink-muted">重点：{h.focus}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 施工阶段展示 */}
          <div className="mt-16">
            <h2 className="section-title">施工阶段</h2>
            <p className="section-subtitle">
              每个阶段都有过程记录，这是透明工地的核心。
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {stages.map((s, idx) => (
                <div key={s.name} className="flex gap-4 rounded-2xl border border-forest/10 bg-white p-5 shadow-soft">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest text-xs font-bold text-cream">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-forest">{s.name}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-ink-muted">
                      {s.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 真实案例补充计划 */}
          <div className="mt-16 rounded-2xl border border-wood/30 bg-wood/10 p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-forest">
              真实案例整理中
            </h2>
            <p className="mt-2 text-sm text-ink-soft">
              本页当前只展示风格类型和整理口径，不代表已经发布真实客户案例。我们不虚构客户姓名、小区、评价和完工照片。
            </p>
            <ul className="mt-4 space-y-2">
              {realCasePlan.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-ink-soft">
                  <span className="mt-1 text-wood-dark">·</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 rounded-2xl border border-forest/10 bg-white p-6 shadow-soft sm:p-8">
            <h2 className="text-lg font-semibold text-forest">
              真实案例发布模板
            </h2>
            <p className="mt-2 text-sm text-ink-soft">
              后续每个真实案例都按下面结构补齐，再确认业主授权和图片授权。
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {caseTemplate.map((item) => (
                <div key={item} className="rounded-xl bg-cream-50 px-4 py-3 text-sm text-ink-soft">
                  {item}
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
