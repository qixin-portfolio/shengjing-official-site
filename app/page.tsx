import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, homeFaqs } from "@/lib/site";
import { FaqPageLd } from "@/components/json-ld";
import { PhoneMockup, DailyReportMockup } from "@/components/phone-mockup";
import { Reveal } from "@/components/reveal";

const homeTitle = "晟景装饰｜交城本地装修公司｜透明工地";
const homeDescription =
  "交城装修、旧房翻新、整装、全屋定制。通过透明工地小程序查看工长日报、现场照片和关键节点记录，让装修过程更看得见。";
const homeUrl = "https://www.shengjingjc.cn/";
const homeOgImage = "https://www.shengjingjc.cn/og-home.jpg";

export const metadata: Metadata = {
  title: homeTitle,
  description: homeDescription,
  alternates: { canonical: homeUrl },
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: homeUrl,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: homeOgImage,
        width: 1200,
        height: 630,
        alt: "晟景装饰交城本地装修公司透明工地分享图",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: [homeOgImage],
  },
};

const trustItems = [
  { num: "多年", unit: "经验", title: "本地服务积累", desc: "服务经验可追溯至1997年前后的本地装修从业积累。" },
  { num: "5", unit: "类", title: "关键节点留痕", desc: "水电、防水、瓦工、木工、油工，封槽前后都有记录。" },
  { num: "1", unit: "套", title: "透明工地小程序", desc: "工长日报 + 老板审核 + 业主查看，过程可追溯。" },
  { num: "少", unit: "跑", title: "不用天天跑工地", desc: "手机就能看施工进度、现场照片和关键节点。" },
];

const transparentFlow = [
  { step: "01", title: "工长提交日报", desc: "记录施工内容、人员和进度，上传现场照片。", icon: "pen" },
  { step: "02", title: "老板审核", desc: "管理人员审核后再展示给业主，避免随意发。", icon: "check" },
  { step: "03", title: "业主手机查看", desc: "进度、照片、节点、设计确认，都在手机里。", icon: "phone" },
];

const services = [
  { title: "新房装修", desc: "毛坯房从量房到验收的全流程服务，适合首次装修业主。", icon: "home" },
  { title: "老房翻新", desc: "老房水电改造、墙面重做、空间优化，过程记录更关键。", icon: "refresh" },
  { title: "整装服务", desc: "设计、施工、材料、定制一站对接，减少多头沟通。", icon: "layers" },
  { title: "定制设计", desc: "根据家庭需求、户型和预算出方案，风格不只是效果图。", icon: "pen" },
  { title: "施工管理", desc: "分阶段施工、节点确认、过程留痕，施工进度可查看。", icon: "clipboard" },
  { title: "售后沟通", desc: "本地团队售后响应更及时，装修档案长期保存。", icon: "chat" },
];

const casePreview = [
  { title: "现代简约", gradient: "from-cream-200 via-white to-ink/5", accent: "text-ink" },
  { title: "新中式", gradient: "from-forest-800 via-forest-600 to-clay/30", accent: "text-cream" },
  { title: "奶油风", gradient: "from-wood/30 via-wood-light/40 to-cream-100", accent: "text-ink" },
  { title: "改善型住宅", gradient: "from-clay-dark/40 via-forest-800 to-ink", accent: "text-cream" },
];

function ServiceIcon({ name }: { name: string }) {
  const c = "h-6 w-6";
  switch (name) {
    case "home": return (<svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10.5L12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /><path d="M9 21v-6h6v6" /></svg>);
    case "refresh": return (<svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 15-6.7L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-15 6.7L3 16" /><path d="M3 21v-5h5" /></svg>);
    case "layers": return (<svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M3 13l9 5 9-5" /></svg>);
    case "pen": return (<svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" /></svg>);
    case "clipboard": return (<svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 2h6a1 1 0 0 1 1 1v1H8V3a1 1 0 0 1 1-1z" /><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2" /><path d="M9 12h6M9 16h4" /></svg>);
    case "chat": return (<svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>);
    default: return null;
  }
}

function FlowIcon({ name }: { name: string }) {
  const c = "h-5 w-5";
  switch (name) {
    case "pen": return (<svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /></svg>);
    case "check": return (<svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>);
    case "phone": return (<svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" /></svg>);
    default: return null;
  }
}

export default function HomePage() {
  return (
    <>
      {/* Hero 首屏 */}
      <section className="relative overflow-hidden bg-paper">
        <div className="pointer-events-none absolute inset-0 bg-wood-glow" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 bg-clay-glow" aria-hidden="true" />

        <div className="container-page relative py-12 sm:py-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="eyebrow">
                <span className="h-px w-8 bg-clay" />
                晟景装饰 · 交城本地装修服务品牌
              </span>
              <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-forest sm:text-4xl lg:text-[2.75rem]">
                交城装修，找看得见进度的本地团队
              </h1>
              <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
                不用天天跑工地，手机就能看施工进度、现场照片和关键节点。晟景装饰结合透明工地小程序，把装修过程记录下来，让沟通更清楚。
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href="/contact" className="btn-primary">预约量房</Link>
                <Link href="/transparent-site" className="btn-secondary">了解透明工地</Link>
                <Link href="/guides/jiaocheng-decoration-questions" className="btn-ghost-clay">查看装修问题库</Link>
              </div>
              <p className="mt-5 text-xs text-ink-muted">服务区域：{siteConfig.serviceArea}</p>
            </div>

            {/* 右：手机 + 浮动卡片 */}
            <div className="relative">
              <div className="absolute -left-4 top-8 hidden w-40 rounded-2xl border border-forest/10 bg-white p-3 shadow-card lg:block">
                <p className="text-[10px] font-semibold text-forest">现场照片</p>
                <div className="mt-2 grid grid-cols-3 gap-1">
                  <div className="aspect-square rounded bg-gradient-to-br from-clay/30 to-clay/10" />
                  <div className="aspect-square rounded bg-gradient-to-br from-forest/30 to-forest/10" />
                  <div className="aspect-square rounded bg-gradient-to-br from-wood/30 to-wood/10" />
                </div>
                <p className="mt-1.5 text-[9px] text-ink-muted">3 张 · 封槽前留档</p>
              </div>
              <div className="absolute -right-2 top-20 hidden rounded-xl bg-clay px-3 py-2 text-xs font-medium text-cream shadow-card lg:block">
                <span className="tag-dot">老板已审核</span>
              </div>
              <div className="absolute -right-4 bottom-16 hidden rounded-xl bg-forest px-3 py-2 text-xs font-medium text-cream shadow-card lg:block">
                <span className="tag-dot"><span className="inline-block h-2 w-2 rounded-full bg-clay" />设计确认已留痕</span>
              </div>
              <div className="relative mx-auto">
                <PhoneMockup><DailyReportMockup /></PhoneMockup>
              </div>
              <p className="mt-4 text-center text-[11px] text-ink-muted">↑ 业主手机查看工地日报模拟界面（非真实截图）</p>
            </div>
          </div>
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-clay/30 via-clay to-clay/30" />
      </section>

      {/* 信任数据条 */}
      <section className="border-b border-forest/10 bg-white">
        <div className="container-page py-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item, i) => (
              <Reveal key={item.title} delay={i * 80} className="trust-stat">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-forest">{item.num}</span>
                  <span className="text-lg font-medium text-clay-dark">{item.unit}</span>
                </div>
                <h3 className="mt-1.5 text-sm font-semibold text-forest">{item.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-ink-muted">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 透明工地核心展示 */}
      <section className="section bg-forest-50">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="eyebrow"><span className="h-px w-8 bg-clay" />透明工地</span>
              <h2 className="mt-4 section-title">装修进度，看得见才放心</h2>
              <p className="mt-4 section-subtitle">工长提交日报，老板审核后再展示给业主。业主不用天天跑工地，也能在手机上看到施工进度、现场照片和关键节点。</p>
              <div className="mt-8 space-y-4">
                {transparentFlow.map((f, idx) => (
                  <Reveal key={f.step} delay={idx * 100}>
                    <div className="flex items-start gap-4">
                      <div className="flex flex-col items-center">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest text-cream shadow-soft"><FlowIcon name={f.icon} /></div>
                        {idx < transparentFlow.length - 1 && <div className="mt-1 h-8 w-px bg-clay/30" />}
                      </div>
                      <div className="pt-1.5">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-clay-dark">{f.step}</span>
                          <h3 className="text-sm font-semibold text-forest">{f.title}</h3>
                        </div>
                        <p className="mt-1 text-xs leading-relaxed text-ink-muted">{f.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/transparent-site" className="btn-primary">了解透明工地</Link>
                <Link href="/cases" className="btn-secondary">查看案例类型</Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-clay/10 blur-2xl" />
              <PhoneMockup><DailyReportMockup /></PhoneMockup>
            </div>
          </div>
        </div>
      </section>

      {/* 服务区 */}
      <section className="section">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center"><span className="h-px w-8 bg-clay" />装修服务<span className="h-px w-8 bg-clay" /></span>
            <h2 className="mt-4 section-title">从新房到老房，从整装到定制</h2>
            <p className="section-subtitle">覆盖交城业主常见需求，每个环节都有过程记录。</p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <div className="card group">
                  <div className="flex items-center gap-3 text-forest">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-forest/10 transition-colors group-hover:bg-clay/15"><ServiceIcon name={s.icon} /></span>
                    <h3 className="text-base font-semibold text-forest">{s.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/services" className="btn-secondary">查看全部服务</Link>
          </div>
        </div>
      </section>

      {/* 案例类型预览（新增） */}
      <section className="section bg-cream-50">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center"><span className="h-px w-8 bg-clay" />案例类型<span className="h-px w-8 bg-clay" /></span>
            <h2 className="mt-4 section-title">四种主流风格，对应不同业主</h2>
            <p className="section-subtitle">真实案例经业主授权后陆续补充，不虚构客户信息。</p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {casePreview.map((c, i) => (
              <Reveal key={c.title} delay={i * 60}>
                <Link href="/cases" className="block overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-soft transition-all hover:shadow-card hover:-translate-y-0.5">
                  <div className={`swatch bg-gradient-to-br ${c.gradient}`}>
                    <span className={`text-lg font-bold ${c.accent}`}>{c.title}</span>
                  </div>
                  <p className="p-3 text-center text-xs text-ink-muted">查看详情 →</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center"><span className="h-px w-8 bg-clay" />业主常问<span className="h-px w-8 bg-clay" /></span>
            <h2 className="mt-4 section-title">这些问题，也是交城业主最常问的</h2>
            <p className="section-subtitle">不绕弯子，直接说我们实际怎么做的。</p>
          </Reveal>
          <div className="mx-auto mt-12 max-w-3xl divide-y divide-forest/10 rounded-2xl border border-forest/10 bg-white">
            {homeFaqs.map((faq, idx) => (
              <details key={idx} className="group p-5 sm:p-6">
                <summary className="flex cursor-pointer items-center justify-between text-base font-medium text-forest marker:content-['']">
                  <span className="flex items-center gap-3">
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-clay/10 text-xs font-bold text-clay-dark">?</span>
                    {faq.q}
                  </span>
                  <span className="ml-4 shrink-0 text-clay-dark transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 pl-9 text-sm leading-relaxed text-ink-soft">{faq.a}</p>
              </details>
            ))}
          </div>
          <FaqPageLd faqs={homeFaqs.map((f) => ({ q: f.q, a: f.a }))} />
        </div>
      </section>

      {/* 底部 CTA */}
      <section className="section bg-forest-900 text-cream">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold sm:text-3xl">准备装修，先看看工地怎么管。</h2>
              <p className="mt-3 text-base text-cream/70 sm:text-lg">预约量房，了解晟景装饰的透明工地服务，开工后手机查看施工进度。</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link href="/contact" className="btn bg-clay text-cream shadow-card hover:bg-clay-dark">预约量房</Link>
              <Link href="/transparent-site" className="btn border border-cream/30 text-cream hover:bg-cream/10">了解透明工地</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
