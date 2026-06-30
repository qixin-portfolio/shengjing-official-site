import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { BreadcrumbLd } from "@/components/json-ld";
import { PhoneMockup, PhotoGridMockup, DailyReportMockup, DesignConfirmMockup } from "@/components/phone-mockup";

export const metadata: Metadata = {
  title: "透明工地",
  description:
    "晟景透明工地小程序，通过工长日报、老板审核、业主查看，把装修进度、现场照片、设计确认和施工记录沉淀为可查看的工地档案，减少扯皮和不信任。",
  alternates: { canonical: "/transparent-site" },
};

const flow = [
  {
    step: "01",
    title: "工长提交日报",
    desc: "工长每天记录施工内容、人员和进度，上传现场照片。隐蔽工程封槽前必须留档。",
    icon: "pen",
  },
  {
    step: "02",
    title: "老板审核",
    desc: "管理人员审核日报内容和照片，确认无误后再展示给业主。不是工长随便发。",
    icon: "check",
  },
  {
    step: "03",
    title: "业主手机查看",
    desc: "业主在手机上查看施工进度、现场照片和关键节点，不用天天跑工地。",
    icon: "phone",
  },
  {
    step: "04",
    title: "设计方案确认",
    desc: "设计图和变更可线上确认，留痕可追溯，减少口头沟通误差。",
    icon: "design",
  },
  {
    step: "05",
    title: "施工过程留痕",
    desc: "从开工到验收，记录沉淀为可长期保存的工地档案，出问题能说清。",
    icon: "archive",
  },
];

const comparisonRows = [
  {
    stage: "施工进度",
    normal: "靠业主自己跑工地，或口头问工长",
    transparent: "手机查看进度节点，清楚做到哪一步",
  },
  {
    stage: "现场照片",
    normal: "想看就要去现场，或等工长发（不一定发）",
    transparent: "按节点上传，隐蔽工程封槽前留档",
  },
  {
    stage: "工长日报",
    normal: "没有日报，或口头说一句",
    transparent: "每天记录施工内容、人员、进度",
  },
  {
    stage: "审核机制",
    normal: "无审核，工长自己说了算",
    transparent: "老板/管理人员审核后再展示给业主",
  },
  {
    stage: "设计确认",
    normal: "口头确认或微信聊，后期找不到记录",
    transparent: "线上确认留痕，可追溯",
  },
  {
    stage: "出问题扯皮",
    normal: "各说各的，没有依据",
    transparent: "过程记录可作依据，责任清楚",
  },
  {
    stage: "售后追溯",
    normal: "完工后资料散落，难追溯",
    transparent: "装修档案长期保存，可回看",
  },
];

const benefits = [
  {
    title: "减少信息差",
    desc: "业主不用天天跑工地，也能知道做到哪一步、有没有问题。",
  },
  {
    title: "关键节点可回看",
    desc: "水电封槽前、防水做完后、瓦工贴砖后，照片和记录都在。",
  },
  {
    title: "出了问题能说清",
    desc: "哪天做了什么、谁确认的，记录可追溯，责任清楚。",
  },
  {
    title: "装修档案长期保存",
    desc: "设计资料、施工记录、验收记录、完工照片可以长期保存。",
  },
];

const nodes = [
  { name: "水电改造", period: "开工第 1-2 周" },
  { name: "防水验收", period: "水电完成后" },
  { name: "瓦工贴砖", period: "防水验收后" },
  { name: "木工", period: "瓦工进行中" },
  { name: "油工", period: "木工完成后" },
  { name: "竣工验收", period: "全部完工" },
];

function FlowIcon({ name }: { name: string }) {
  const common = "h-5 w-5";
  switch (name) {
    case "pen":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        </svg>
      );
    case "check":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 11l3 3L22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
      );
    case "phone":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <path d="M12 18h.01" />
        </svg>
      );
    case "design":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h20v14H2z" />
          <path d="M8 21h8M12 17v4" />
          <path d="M6 7l3 3-3 3M14 13h4" />
        </svg>
      );
    case "archive":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="4" rx="1" />
          <path d="M4 8v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8" />
          <path d="M10 12h4" />
        </svg>
      );
    default:
      return null;
  }
}

export default function TransparentSitePage() {
  return (
    <>
      <BreadcrumbLd
        items={[
          { name: "首页", path: "/" },
          { name: "透明工地", path: "/transparent-site" },
        ]}
      />

      {/* Hero：左文案 + 右手机照片网格 */}
      <section className="border-b border-forest/10 bg-paper">
        <div className="pointer-events-none absolute inset-0 bg-wood-glow" aria-hidden="true" />
        <div className="container-page relative py-12 sm:py-16 lg:py-20">
          <nav className="mb-8 text-sm text-ink-muted" aria-label="面包屑">
            <Link href="/" className="hover:text-forest">
              首页
            </Link>
            <span className="mx-2">/</span>
            <span className="text-forest">透明工地</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="eyebrow">
                <span className="h-px w-8 bg-wood-dark" />
                透明工地 · 晟景的核心卖点
              </span>
              <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-forest sm:text-4xl">
                装修过程看得见，比事后扯皮强
              </h1>
              <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
                透明工地不是营销概念，而是一套让装修过程可查看、可追溯的流程。工长提交日报，老板审核后再展示给业主，把进度、现场照片、设计确认和施工记录沉淀为工地档案。
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="btn-primary">
                  预约量房
                </Link>
                <Link href="/guides" className="btn-secondary">
                  查看装修知识
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-wood/10 blur-2xl" />
              <PhoneMockup>
                <PhotoGridMockup />
              </PhoneMockup>
              <p className="mt-4 text-center text-[11px] text-ink-muted">
                ↑ 业主手机查看现场照片模拟界面（非真实截图）
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 完整链路：5 步产品流程模块 */}
      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center">
              <span className="h-px w-8 bg-wood-dark" />
              完整链路
              <span className="h-px w-8 bg-wood-dark" />
            </span>
            <h2 className="mt-4 section-title">透明工地怎么运作</h2>
            <p className="section-subtitle">
              工长日报 → 老板审核 → 业主查看 → 节点确认 → 过程留痕 → 售后可追溯
            </p>
          </div>

          {/* 横向流程时间线（桌面）/ 纵向（移动） */}
          <div className="mt-12 grid gap-4 lg:grid-cols-5">
            {flow.map((f, idx) => (
              <div key={f.step} className="flow-step relative">
                {/* 连接线（桌面） */}
                {idx < flow.length - 1 && (
                  <div
                    className="absolute -right-3 top-12 hidden h-px w-6 bg-wood/30 lg:block"
                    aria-hidden="true"
                  />
                )}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest text-cream shadow-soft">
                    <FlowIcon name={f.icon} />
                  </div>
                  <span className="text-2xl font-bold text-wood-dark/40">
                    {f.step}
                  </span>
                </div>
                <h3 className="mt-3 text-sm font-semibold text-forest">
                  {f.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-muted">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 业主能看到什么：四个模拟界面 */}
      <section className="section bg-forest-50">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="section-title">业主在手机上能看到什么</h2>
            <p className="section-subtitle">
              不用天天跑工地，打开小程序就能看到这四样。
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* 日报 */}
            <div>
              <div className="mb-3 text-center">
                <h3 className="text-sm font-semibold text-forest">工长日报</h3>
                <p className="text-xs text-ink-muted">每天施工内容、人员、进度</p>
              </div>
              <PhoneMockup>
                <DailyReportMockup />
              </PhoneMockup>
            </div>

            {/* 现场照片 */}
            <div>
              <div className="mb-3 text-center">
                <h3 className="text-sm font-semibold text-forest">现场照片</h3>
                <p className="text-xs text-ink-muted">按节点归档，可随时回看</p>
              </div>
              <PhoneMockup>
                <PhotoGridMockup />
              </PhoneMockup>
            </div>

            {/* 节点进度 */}
            <div>
              <div className="mb-3 text-center">
                <h3 className="text-sm font-semibold text-forest">节点进度</h3>
                <p className="text-xs text-ink-muted">清楚现在做到哪一步</p>
              </div>
              <PhoneMockup>
                <div className="space-y-3 text-ink">
                  <p className="pt-3 text-[10px] font-medium text-ink-muted">晟景透明工地</p>
                  <p className="text-xs font-semibold text-forest">施工进度 · 6 个节点</p>
                  <div className="h-px bg-forest/10" />
                  <div className="space-y-2.5">
                    {nodes.map((n, i) => {
                      const done = i < 3;
                      const current = i === 3;
                      return (
                        <div key={n.name} className="flex items-start gap-2.5">
                          <span
                            className={`mt-0.5 h-2.5 w-2.5 rounded-full ${
                              done
                                ? current
                                  ? "bg-wood-dark ring-2 ring-wood/30"
                                  : "bg-forest"
                                : "bg-ink/15"
                            }`}
                          />
                          <div>
                            <p
                              className={`text-[10px] font-medium ${
                                current
                                  ? "text-wood-dark"
                                  : done
                                  ? "text-forest"
                                  : "text-ink-muted"
                              }`}
                            >
                              {n.name}
                              {current ? " · 进行中" : done ? " · 已完成" : ""}
                            </p>
                            <p className="text-[9px] text-ink-muted">{n.period}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-3 rounded-xl bg-forest/5 px-3 py-2">
                    <p className="text-[9px] text-ink-muted">
                      整体进度：约 50%
                    </p>
                    <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-ink/10">
                      <div className="h-full w-1/2 rounded-full bg-wood-dark" />
                    </div>
                  </div>
                </div>
              </PhoneMockup>
            </div>

            {/* 设计确认 */}
            <div>
              <div className="mb-3 text-center">
                <h3 className="text-sm font-semibold text-forest">设计确认</h3>
                <p className="text-xs text-ink-muted">变更线上确认，留痕可追溯</p>
              </div>
              <PhoneMockup>
                <DesignConfirmMockup />
              </PhoneMockup>
            </div>
          </div>

          <p className="mt-8 text-center text-[11px] text-ink-muted">
            以上为高保真 UI 模拟界面，非真实小程序截图。实际界面以{siteConfig.miniProgram.name}为准。
          </p>
        </div>
      </section>

      {/* 对比表：普通装修沟通 vs 透明工地沟通 */}
      <section className="section bg-cream-50">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center">
              <span className="h-px w-8 bg-wood-dark" />
              对比
              <span className="h-px w-8 bg-wood-dark" />
            </span>
            <h2 className="mt-4 section-title">普通装修沟通 vs 透明工地沟通</h2>
            <p className="section-subtitle">
              差别不在概念，而在过程有没有记录。
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-soft table-responsive">
            <div className="grid grid-cols-3 border-b border-forest/10 bg-forest-50 text-sm font-semibold text-forest">
              <div className="p-4">环节</div>
              <div className="p-4 text-ink-muted">普通装修沟通</div>
              <div className="p-4 compare-highlight text-forest">
                <span className="flex items-center gap-1.5">
                  <span className="inline-block h-2 w-2 rounded-full bg-wood-dark" />
                  透明工地沟通
                </span>
              </div>
            </div>
            {comparisonRows.map((row, idx) => (
              <div
                key={row.stage}
                className={`grid grid-cols-3 text-sm transition-colors hover:bg-cream-50/50 ${
                  idx % 2 === 0 ? "bg-white" : "bg-cream-50/30"
                }`}
              >
                <div className="p-4 font-medium text-forest">{row.stage}</div>
                <div className="p-4 text-ink-muted">{row.normal}</div>
                <div className="p-4 compare-highlight text-ink-soft">
                  {row.transparent}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 价值区 */}
      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="section-title">为什么这能减少扯皮和不信任</h2>
            <p className="section-subtitle">
              装修扯皮大多来自信息差。过程有记录，责任就清楚。
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {benefits.map((b) => (
              <div key={b.title} className="card flex gap-4">
                <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-wood/15 text-sm font-bold text-wood-dark">
                  ✓
                </span>
                <div>
                  <h3 className="text-base font-semibold text-forest">
                    {b.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 适合哪些业主 */}
      <section className="section bg-cream-50">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="section-title">透明工地适合哪些业主</h2>
            <p className="section-subtitle">
              不是所有人都需要，但对这些业主特别有用。
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="card">
              <h3 className="text-base font-semibold text-forest">✓ 适合</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                <li>· 工作忙、没时间天天跑工地的业主</li>
                <li>· 想及时发现问题、不想事后返工的业主</li>
                <li>· 重视过程记录、希望出问题能说清的业主</li>
                <li>· 老房翻新、隐蔽工程多的业主</li>
                <li>· 第一次装修、不懂工地的业主</li>
              </ul>
            </div>
            <div className="card border-wood/20">
              <h3 className="text-base font-semibold text-wood-dark">不一定适合</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                <li>· 自己就是装修从业者、全程盯工的业主</li>
                <li>· 极简翻新、几乎没有隐蔽工程的业主</li>
                <li>· 完全不在意过程、只看最终结果的业主</li>
              </ul>
              <p className="mt-3 text-xs text-ink-muted">
                不适合不代表不能做，只是性价比相对低。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 小程序说明 + CTA */}
      <section className="section bg-forest-900 text-cream">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold sm:text-3xl">
                {siteConfig.miniProgram.name}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-cream/70 sm:text-lg">
                {siteConfig.miniProgram.desc}。工长提交日报后，由老板或管理人员审核，再展示给业主。业主在手机上查看施工进度、现场照片和关键节点，设计方案可以线上确认留痕。
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link
                href="/contact"
                className="btn bg-wood text-ink shadow-card hover:bg-wood-dark hover:text-cream"
              >
                预约量房
              </Link>
              <Link
                href="/guides"
                className="btn border border-cream/30 text-cream hover:bg-cream/10"
              >
                查看装修知识
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
