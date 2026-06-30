import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { BreadcrumbLd } from "@/components/json-ld";
import { PhoneMockup, PhotoGridMockup, DailyReportMockup } from "@/components/phone-mockup";

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
  },
  {
    step: "02",
    title: "老板审核",
    desc: "管理人员审核日报内容和照片，确认无误后再展示给业主。不是工长随便发。",
  },
  {
    step: "03",
    title: "业主手机查看",
    desc: "业主在手机上查看施工进度、现场照片和关键节点，不用天天跑工地。",
  },
  {
    step: "04",
    title: "设计方案确认",
    desc: "设计图和变更可线上确认，留痕可追溯，减少口头沟通误差。",
  },
  {
    step: "05",
    title: "施工过程留痕",
    desc: "从开工到验收，记录沉淀为可长期保存的工地档案，出问题能说清。",
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
      <section className="border-b border-forest/10 bg-gradient-to-b from-cream-50 to-cream">
        <div className="container-page py-12 sm:py-16 lg:py-20">
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

      {/* 完整链路：5 步流程 */}
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

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {flow.map((f, idx) => (
              <div key={f.step} className="flow-step">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-wood-dark">
                    {f.step}
                  </span>
                  {idx < flow.length - 1 && (
                    <span className="hidden text-wood-dark lg:inline" aria-hidden>
                      →
                    </span>
                  )}
                </div>
                <h3 className="mt-2 text-sm font-semibold text-forest">
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

      {/* 业主能看到什么：三个模拟界面 */}
      <section className="section bg-forest-50">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="section-title">业主在手机上能看到什么</h2>
            <p className="section-subtitle">
              不用天天跑工地，打开小程序就能看到这三样。
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
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
                  <p className="text-[10px] font-medium text-ink-muted">晟景透明工地</p>
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
                                  ? "bg-wood-dark"
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
                  <div className="mt-3 rounded-lg bg-forest/5 px-3 py-2">
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
          </div>

          <p className="mt-8 text-center text-[11px] text-ink-muted">
            以上为高保真 UI 模拟界面，非真实小程序截图。实际界面以{siteConfig.miniProgram.name}为准。
          </p>
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
                <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-wood/20 text-sm font-bold text-wood-dark">
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

      {/* 小程序说明 + CTA */}
      <section className="section bg-forest-900 text-cream">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              {siteConfig.miniProgram.name}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-cream/70 sm:text-lg">
              {siteConfig.miniProgram.desc}。工长提交日报后，由老板或管理人员审核，再展示给业主。业主在手机上查看施工进度、现场照片和关键节点，设计方案可以线上确认留痕。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="btn bg-wood text-ink hover:bg-wood-dark hover:text-cream"
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
