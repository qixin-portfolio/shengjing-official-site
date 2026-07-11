import type { Metadata } from "next";
import Link from "next/link";
import { contactInfo, siteConfig } from "@/lib/site";
import { BreadcrumbLd, FaqPageLd, WebPageLd } from "@/components/json-ld";
import { PhoneMockup, PhotoGridMockup, DailyReportMockup, DesignConfirmMockup } from "@/components/phone-mockup";
import { Reveal } from "@/components/reveal";

const pageTitle = "晟景透明工地：装修进度看得见，施工过程有记录";
const pageDescription =
  "晟景透明工地通过工长日报、现场照片、节点记录、老板审核和设计确认，把装修过程沉淀为业主可查看的施工记录。";
const pageUrl = `${siteConfig.url}/transparent-site/`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: pageTitle,
    description: pageDescription,
  },
};

const flow = [
  { step: "01", title: "工长提交日报", desc: "工长每天记录施工内容、人员和进度，上传现场照片。隐蔽工程封槽前必须留档。", icon: "pen" },
  { step: "02", title: "老板审核", desc: "管理人员审核日报内容和照片，确认无误后再展示给业主。不是工长随便发。", icon: "check" },
  { step: "03", title: "业主手机查看", desc: "业主在手机上查看施工进度、现场照片和关键节点，不用天天跑工地。", icon: "phone" },
  { step: "04", title: "设计方案确认", desc: "设计图和变更可线上确认，留痕可追溯，减少口头沟通误差。", icon: "design" },
  { step: "05", title: "施工过程留痕", desc: "从开工到验收，记录沉淀为可回看的工地档案，后续沟通更有依据。", icon: "archive" },
];

const comparisonRows = [
  { stage: "施工进度", normal: "靠业主自己跑工地，或口头问工长", transparent: "手机查看进度节点，清楚做到哪一步" },
  { stage: "现场照片", normal: "想看就要去现场，或等工长发（不一定发）", transparent: "按节点上传，隐蔽工程封槽前留档" },
  { stage: "工长日报", normal: "没有日报，或口头说一句", transparent: "每天记录施工内容、人员、进度" },
  { stage: "审核机制", normal: "无审核，工长自己说了算", transparent: "老板/管理人员审核后再展示给业主" },
  { stage: "设计确认", normal: "口头确认或微信聊，后期找不到记录", transparent: "线上确认留痕，可追溯" },
  { stage: "问题沟通", normal: "各说各的，缺少过程依据", transparent: "过程记录可回看，方便核对当时情况" },
  { stage: "售后追溯", normal: "完工后资料散落，难追溯", transparent: "装修档案长期保存，可回看" },
];

const benefits = [
  { title: "减少信息差", desc: "业主不用天天跑工地，也能知道做到哪一步、有没有问题。" },
  { title: "关键节点可回看", desc: "水电封槽前、防水做完后、瓦工贴砖后，照片和记录都在。" },
  { title: "沟通更有依据", desc: "哪天做了什么、谁确认的，记录可回看，减少只靠口头回忆。" },
  { title: "装修档案长期保存", desc: "设计资料、施工记录、验收记录、完工照片可以长期保存。" },
];

const nodes = [
  { name: "水电改造", period: "开工第 1-2 周" },
  { name: "防水验收", period: "水电完成后" },
  { name: "瓦工贴砖", period: "防水验收后" },
  { name: "木工", period: "瓦工进行中" },
  { name: "油工", period: "木工完成后" },
  { name: "竣工验收", period: "全部完工" },
];

const transparentFaqs = [
  {
    q: "什么是透明工地？",
    a: "透明工地是把装修过程中的施工进度、现场照片、工长日报、节点记录和设计确认沉淀下来，让业主在过程中就能看到记录，而不是只等完工后看结果。",
  },
  {
    q: "业主能看到施工过程吗？",
    a: "可以。业主可以查看已记录的工长日报、现场照片、关键节点和设计确认内容。具体可见范围以实际小程序和项目沟通为准。",
  },
  {
    q: "工长日报是什么？",
    a: "工长日报用于记录当天施工内容、人员、进度和现场照片，帮助业主了解当天工地发生了什么。",
  },
  {
    q: "老板审核是什么？",
    a: "老板审核是指工长提交日报后，由管理人员先看内容和照片，再展示给业主，减少随意发送和信息不完整的情况。",
  },
  {
    q: "装修过程中如何确认设计变更？",
    a: "设计变更建议通过图纸、文字或小程序记录确认，保留变更内容、确认时间和相关说明，避免后续只靠口头回忆。",
  },
  {
    q: "水电节点如何留痕？",
    a: "水电阶段建议记录线路走向、开关插座位置、管线固定、打压测试和封槽前照片，方便后续检修和核对。",
  },
  {
    q: "防水验收需要注意什么？",
    a: "防水验收要关注防水区域、高度、阴阳角处理、闭水试验时间和楼下检查情况，并建议拍照留档。",
  },
  {
    q: "透明工地适合哪些业主？",
    a: "适合工作忙、不能天天跑工地，或重视隐蔽工程、节点确认和施工记录的业主。",
  },
];

function FlowIcon({ name }: { name: string }) {
  const c = "h-5 w-5";
  switch (name) {
    case "pen": return (<svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /></svg>);
    case "check": return (<svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>);
    case "phone": return (<svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" /></svg>);
    case "design": return (<svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h20v14H2z" /><path d="M8 21h8M12 17v4" /><path d="M6 7l3 3-3 3M14 13h4" /></svg>);
    case "archive": return (<svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="4" rx="1" /><path d="M4 8v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8" /><path d="M10 12h4" /></svg>);
    default: return null;
  }
}

export default function TransparentSitePage() {
  return (
    <>
      <BreadcrumbLd items={[{ name: "首页", path: "/" }, { name: "透明工地", path: "/transparent-site" }]} />
      <WebPageLd name={pageTitle} description={pageDescription} path="/transparent-site/" />
      <FaqPageLd faqs={transparentFaqs} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-forest/10 bg-paper">
        <div className="pointer-events-none absolute inset-0 bg-wood-glow" aria-hidden="true" />
        <div className="container-page relative py-12 sm:py-16 lg:py-20">
          <nav className="mb-8 text-sm text-ink-muted" aria-label="面包屑">
            <Link href="/" className="hover:text-forest">首页</Link>
            <span className="mx-2">/</span>
            <span className="text-forest">透明工地</span>
          </nav>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="eyebrow"><span className="h-px w-8 bg-clay" />透明工地 · 过程记录</span>
              <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-forest sm:text-4xl">{pageTitle}</h1>
              <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">晟景装饰不是只在完工后展示效果，而是把装修过程中的关键节点、现场照片、施工记录和设计确认沉淀下来，让业主在过程中就能看到进度。</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="btn-primary">预约量房</Link>
                <Link href="/guides" className="btn-secondary">查看装修知识</Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-clay/10 blur-2xl" />
              <PhoneMockup><PhotoGridMockup /></PhoneMockup>
              <p className="mt-4 text-center text-[11px] text-ink-muted">↑ 业主手机查看现场照片模拟界面（非真实截图）</p>
            </div>
          </div>
        </div>
      </section>

      {/* 完整链路 */}
      <section className="section">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center"><span className="h-px w-8 bg-clay" />完整链路<span className="h-px w-8 bg-clay" /></span>
            <h2 className="mt-4 section-title">透明工地怎么运作</h2>
            <p className="section-subtitle">工长日报 → 老板审核 → 业主查看 → 节点确认 → 过程留痕 → 售后可追溯</p>
          </Reveal>
          <div className="mt-12 grid gap-4 lg:grid-cols-5">
            {flow.map((f, idx) => (
              <Reveal key={f.step} delay={idx * 80} className="flow-step relative">
                {idx < flow.length - 1 && <div className="absolute -right-3 top-12 hidden h-px w-6 bg-clay/30 lg:block" aria-hidden="true" />}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest text-cream shadow-soft"><FlowIcon name={f.icon} /></div>
                  <span className="text-2xl font-bold text-clay/30">{f.step}</span>
                </div>
                <h3 className="mt-3 text-sm font-semibold text-forest">{f.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-muted">{f.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 四屏手机模拟 */}
      <section className="section bg-forest-50">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="section-title">业主在手机上能看到什么</h2>
            <p className="section-subtitle">不用天天跑工地，打开小程序就能看到这四样。</p>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Reveal delay={0}>
              <div className="mb-3 text-center"><h3 className="text-sm font-semibold text-forest">工长日报</h3><p className="text-xs text-ink-muted">每天施工内容、人员、进度</p></div>
              <PhoneMockup><DailyReportMockup /></PhoneMockup>
            </Reveal>
            <Reveal delay={80}>
              <div className="mb-3 text-center"><h3 className="text-sm font-semibold text-forest">现场照片</h3><p className="text-xs text-ink-muted">按节点归档，可随时回看</p></div>
              <PhoneMockup><PhotoGridMockup /></PhoneMockup>
            </Reveal>
            <Reveal delay={160}>
              <div className="mb-3 text-center"><h3 className="text-sm font-semibold text-forest">节点进度</h3><p className="text-xs text-ink-muted">清楚现在做到哪一步</p></div>
              <PhoneMockup>
                <div className="space-y-3 text-ink">
                  <p className="pt-3 text-[10px] font-medium text-ink-muted">晟景透明工地</p>
                  <p className="text-xs font-semibold text-forest">施工进度 · 6 个节点</p>
                  <div className="h-px bg-forest/10" />
                  <div className="space-y-2.5">
                    {nodes.map((n, i) => {
                      const done = i < 3; const current = i === 3;
                      return (
                        <div key={n.name} className="flex items-start gap-2.5">
                          <span className={`mt-0.5 h-2.5 w-2.5 rounded-full ${done ? (current ? "bg-clay ring-2 ring-clay/30" : "bg-forest") : "bg-ink/15"}`} />
                          <div>
                            <p className={`text-[10px] font-medium ${current ? "text-clay-dark" : done ? "text-forest" : "text-ink-muted"}`}>{n.name}{current ? " · 进行中" : done ? " · 已完成" : ""}</p>
                            <p className="text-[9px] text-ink-muted">{n.period}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-3 rounded-xl bg-forest/5 px-3 py-2">
                    <p className="text-[9px] text-ink-muted">整体进度：约 50%</p>
                    <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-ink/10"><div className="h-full w-1/2 rounded-full bg-clay" /></div>
                  </div>
                </div>
              </PhoneMockup>
            </Reveal>
            <Reveal delay={240}>
              <div className="mb-3 text-center"><h3 className="text-sm font-semibold text-forest">设计确认</h3><p className="text-xs text-ink-muted">变更线上确认，留痕可追溯</p></div>
              <PhoneMockup><DesignConfirmMockup /></PhoneMockup>
            </Reveal>
          </div>
          <p className="mt-8 text-center text-[11px] text-ink-muted">以上为高保真 UI 模拟界面，非真实小程序截图。实际界面以{siteConfig.miniProgram.name}为准。</p>
        </div>
      </section>

      {/* 对比表 */}
      <section className="section bg-cream-50">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center"><span className="h-px w-8 bg-clay" />对比<span className="h-px w-8 bg-clay" /></span>
            <h2 className="mt-4 section-title">普通装修沟通 vs 透明工地沟通</h2>
            <p className="section-subtitle">差别不在概念，而在过程有没有记录。</p>
          </Reveal>
          <Reveal className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-soft table-responsive">
            <div className="grid grid-cols-3 border-b border-forest/10 bg-forest-50 text-sm font-semibold text-forest">
              <div className="p-4">环节</div>
              <div className="p-4 text-ink-muted">普通装修沟通</div>
              <div className="p-4 compare-highlight text-forest"><span className="tag-dot">透明工地沟通</span></div>
            </div>
            {comparisonRows.map((row, idx) => (
              <div key={row.stage} className={`grid grid-cols-3 text-sm transition-colors hover:bg-cream-50/50 ${idx % 2 === 0 ? "bg-white" : "bg-cream-50/30"}`}>
                <div className="p-4 font-medium text-forest">{row.stage}</div>
                <div className="p-4 text-ink-muted">{row.normal}</div>
                <div className="p-4 compare-highlight text-ink-soft">{row.transparent}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 价值区 */}
      <section className="section">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="section-title">为什么这能减少装修信息不对称</h2>
            <p className="section-subtitle">装修周期长、节点多。过程有记录，后续沟通就少一点猜测，多一点依据。</p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 60}>
                <div className="card flex gap-4">
                  <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-clay/15 text-sm font-bold text-clay-dark">✓</span>
                  <div>
                    <h3 className="text-base font-semibold text-forest">{b.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{b.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 适合业主 */}
      <section className="section bg-cream-50">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="section-title">透明工地适合哪些业主</h2>
            <p className="section-subtitle">不是所有人都需要，但对这些业主特别有用。</p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <Reveal><div className="card">
              <h3 className="text-base font-semibold text-forest">✓ 适合</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                <li>· 工作忙、没时间天天跑工地的业主</li>
                <li>· 想及时发现问题、不想事后返工的业主</li>
                <li>· 重视过程记录、希望出问题能说清的业主</li>
                <li>· 老房翻新、隐蔽工程多的业主</li>
                <li>· 第一次装修、不懂工地的业主</li>
              </ul>
            </div></Reveal>
            <Reveal delay={80}><div className="card border-clay/20">
              <h3 className="text-base font-semibold text-clay-dark">不一定适合</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                <li>· 自己就是装修从业者、全程盯工的业主</li>
                <li>· 极简翻新、几乎没有隐蔽工程的业主</li>
                <li>· 完全不在意过程、只看最终结果的业主</li>
              </ul>
              <p className="mt-3 text-xs text-ink-muted">不适合不代表不能做，只是性价比相对低。</p>
            </div></Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center"><span className="h-px w-8 bg-clay" />FAQ<span className="h-px w-8 bg-clay" /></span>
            <h2 className="mt-4 section-title">关于透明工地，业主常问这些</h2>
            <p className="section-subtitle">回答只基于可说明的流程，不做价格、效果或纠纷处理承诺。</p>
          </Reveal>
          <div className="mx-auto mt-10 max-w-3xl divide-y divide-forest/10 overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-soft">
            {transparentFaqs.map((faq) => (
              <details key={faq.q} className="group p-5 sm:p-6">
                <summary className="flex cursor-pointer items-center justify-between text-base font-medium text-forest marker:content-['']">
                  <span>{faq.q}</span>
                  <span className="ml-4 text-clay-dark transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-forest-900 text-cream">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold sm:text-3xl">{siteConfig.miniProgram.name}</h2>
              <p className="mt-4 text-base leading-relaxed text-cream/70 sm:text-lg">作为交城本地装修服务团队，晟景装饰希望把装修过程做得更透明：工长上传日报，老板审核后展示，业主通过手机查看施工进度、现场照片和设计方案。</p>
              <p className="mt-3 text-sm leading-relaxed text-cream/60">想体验晟景透明工地，可到店咨询或电话联系：{contactInfo.phonePlaceholder}。地址：{contactInfo.addressNote}。</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link href="/contact" className="btn bg-clay text-cream shadow-card hover:bg-clay-dark">预约量房</Link>
              <Link href="/guides" className="btn border border-cream/30 text-cream hover:bg-cream/10">查看装修知识</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
