import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, homeFaqs } from "@/lib/site";
import { FaqPageLd } from "@/components/json-ld";
import { PhoneMockup, DailyReportMockup } from "@/components/phone-mockup";

const homeTitle = "晟景装饰｜交城本地装修公司｜透明工地";
const homeDescription =
  "交城装修、旧房翻新、整装、全屋定制。通过透明工地小程序查看工长日报、现场照片和关键节点记录，让装修过程更看得见。";
const homeUrl = `${siteConfig.url}/`;
const homeOgImage = `${siteConfig.url}/og-home.jpg`;

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
  {
    num: "1997",
    unit: "年",
    title: "品牌起点",
    desc: "晟景装饰始于 1997 年，当前经营主体为交城县晟景装饰有限责任公司。",
  },
  {
    num: "6",
    unit: "类",
    title: "关键节点留痕",
    desc: "水电、防水、瓦工、木工、油工、竣工验收等节点建议记录。",
  },
  {
    num: "1",
    unit: "套",
    title: "透明工地小程序",
    desc: "工长日报 + 老板审核 + 业主查看，过程可追溯。",
  },
  {
    num: "4",
    unit: "地",
    title: "服务区域",
    desc: "以交城县为主，太原、文水、清徐及周边县市可先电话或微信确认。",
  },
];

const transparentFlow = [
  {
    step: "01",
    title: "工长提交日报",
    desc: "记录施工内容、人员和进度，上传现场照片。",
  },
  {
    step: "02",
    title: "老板审核",
    desc: "管理人员审核后再展示给业主，避免随意发。",
  },
  {
    step: "03",
    title: "业主手机查看",
    desc: "进度、照片、节点、设计确认，都在手机里。",
  },
];

const services = [
  {
    title: "新房装修",
    desc: "毛坯房从量房到验收的全流程服务，适合首次装修业主。",
    icon: "home",
  },
  {
    title: "老房翻新",
    desc: "老房水电改造、墙面重做、空间优化，过程记录更关键。",
    icon: "refresh",
  },
  {
    title: "整装服务",
    desc: "设计、施工、材料、定制一站对接，减少多头沟通。",
    icon: "layers",
  },
  {
    title: "定制设计",
    desc: "根据家庭需求、户型和预算出方案，风格不只是效果图。",
    icon: "pen",
  },
  {
    title: "施工管理",
    desc: "分阶段施工、节点确认、过程留痕，施工进度可查看。",
    icon: "clipboard",
  },
  {
    title: "售后沟通",
    desc: "本地团队售后响应更及时，装修档案长期保存。",
    icon: "chat",
  },
];

function ServiceIcon({ name }: { name: string }) {
  const common = "h-6 w-6";
  switch (name) {
    case "home":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 10.5L12 3l9 7.5" />
          <path d="M5 9.5V21h14V9.5" />
          <path d="M9 21v-6h6v6" />
        </svg>
      );
    case "refresh":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
          <path d="M21 3v5h-5" />
          <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
          <path d="M3 21v-5h5" />
        </svg>
      );
    case "layers":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3l9 5-9 5-9-5 9-5z" />
          <path d="M3 13l9 5 9-5" />
        </svg>
      );
    case "pen":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      );
    case "clipboard":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 2h6a1 1 0 0 1 1 1v1H8V3a1 1 0 0 1 1-1z" />
          <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2" />
          <path d="M9 12h6M9 16h4" />
        </svg>
      );
    case "chat":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function HomePage() {
  return (
    <>
      {/* Hero 首屏：左文案 + 右手机日报模拟 */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cream-50 to-cream">
        <div className="container-page py-12 sm:py-16 lg:py-20">
          <div className="grid min-w-0 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* 左：文案 */}
            <div className="w-full max-w-[350px] min-w-0 sm:max-w-none">
              <span className="eyebrow">
                <span className="h-px w-8 bg-wood-dark" />
                晟景装饰 · 始于 {siteConfig.foundedYear} 年
              </span>
              <h1 className="mt-5 max-w-full break-words text-[1.7rem] font-bold leading-snug text-forest [overflow-wrap:anywhere] sm:text-4xl sm:leading-tight lg:text-[2.75rem]">
                <span className="block sm:inline">交城装修，找一家</span>
                <span className="block sm:inline">过程看得见的</span>
                <span className="block sm:inline">本地装修公司</span>
              </h1>
              <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
                新房装修、旧房翻新、整装、全屋定制，建议先把报价、材料、进度和验收节点说清楚。
                晟景透明工地小程序已上线，通过工长日报、现场照片、老板审核和业主查看，让进度、图纸确认和关键节点有记录可查。
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href="/contact" className="btn-primary">
                  预约量房
                </Link>
                <Link href="/contact#wechat" className="btn-wood">
                  微信咨询
                </Link>
                <Link href="/transparent-site" className="btn-secondary">
                  了解透明工地
                </Link>
              </div>
              <p className="mt-5 text-xs text-ink-muted">
                服务区域：{siteConfig.serviceArea} · 建议提前电话或微信预约，避免跑空
              </p>
            </div>

            {/* 右：手机日报模拟界面 */}
            <div className="relative min-w-0">
              <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-wood/10 blur-2xl" />
              <PhoneMockup>
                <DailyReportMockup />
              </PhoneMockup>
              <p className="mt-4 text-center text-[11px] text-ink-muted">
                ↑ 模拟界面，实际以{siteConfig.miniProgram.name}为准
              </p>
            </div>
          </div>
        </div>
        <div className="h-1 w-full bg-wood/30" />
      </section>

      {/* 信任背书区：数字条带 */}
      <section className="border-b border-forest/10 bg-white">
        <div className="container-page py-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item) => (
              <div key={item.title} className="text-center sm:text-left">
                <div className="flex items-baseline justify-center gap-1 sm:justify-start">
                  <span className="text-4xl font-bold text-forest">
                    {item.num}
                  </span>
                  <span className="text-lg font-medium text-wood-dark">
                    {item.unit}
                  </span>
                </div>
                <h3 className="mt-2 text-sm font-semibold text-forest">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-ink-muted">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 透明工地区：流程 + 手机模拟 */}
      <section className="section bg-forest-50">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="eyebrow">
                <span className="h-px w-8 bg-wood-dark" />
                透明工地
              </span>
              <h2 className="mt-4 section-title">
                装修进度，看得见才放心
              </h2>
              <p className="mt-4 section-subtitle">
                工长上传日报和现场照片，经老板或管理人员审核后再同步给业主。业主不用天天跑工地，也能看到已审核的施工进度、设计确认和关键节点。
              </p>

              {/* 流程三步 */}
              <div className="mt-8 space-y-3">
                {transparentFlow.map((f, idx) => (
                  <div key={f.step} className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest text-xs font-bold text-cream">
                      {f.step}
                    </div>
                    <div className="pt-1">
                      <h3 className="text-sm font-semibold text-forest">
                        {f.title}
                      </h3>
                      <p className="mt-0.5 text-xs leading-relaxed text-ink-muted">
                        {f.desc}
                      </p>
                    </div>
                    {idx < transparentFlow.length - 1 && (
                      <div className="ml-4 hidden self-stretch border-l-2 border-dashed border-forest/20 sm:block" />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/transparent-site" className="btn-primary">
                  了解透明工地
                </Link>
                <Link href="/cases" className="btn-secondary">
                  查看案例类型
                </Link>
              </div>
            </div>

            {/* 右：手机模拟 */}
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-forest/10 blur-2xl" />
              <PhoneMockup>
                <DailyReportMockup />
              </PhoneMockup>
            </div>
          </div>
        </div>
      </section>

      {/* 服务区 */}
      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center">
              <span className="h-px w-8 bg-wood-dark" />
              装修服务
              <span className="h-px w-8 bg-wood-dark" />
            </span>
            <h2 className="mt-4 section-title">从新房到老房，从整装到定制</h2>
            <p className="section-subtitle">
              覆盖交城、太原、文水、清徐等周边业主常见需求，重点先把范围、报价、材料和施工节点说清楚。
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="card group">
                <div className="flex items-center gap-3 text-forest">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-forest/10 transition-colors group-hover:bg-forest/20">
                    <ServiceIcon name={s.icon} />
                  </span>
                  <h3 className="text-base font-semibold text-forest">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/services" className="btn-secondary">
              查看全部服务
            </Link>
          </div>
        </div>
      </section>

      {/* GEO 问答区（FAQ） */}
      <section className="section bg-cream-50">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center">
              <span className="h-px w-8 bg-wood-dark" />
              业主常问
              <span className="h-px w-8 bg-wood-dark" />
            </span>
            <h2 className="mt-4 section-title">这些问题，也是交城业主最常问的</h2>
            <p className="section-subtitle">
              不绕弯子，直接说我们实际怎么做的。
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-3xl divide-y divide-forest/10 rounded-2xl border border-forest/10 bg-white">
            {homeFaqs.map((faq, idx) => (
              <details key={idx} className="group p-5 sm:p-6">
                <summary className="flex cursor-pointer items-center justify-between text-base font-medium text-forest marker:content-['']">
                  {faq.q}
                  <span
                    className="ml-4 shrink-0 text-wood-dark transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
          <FaqPageLd faqs={homeFaqs.map((f) => ({ q: f.q, a: f.a }))} />
        </div>
      </section>

      {/* 底部 CTA */}
      <section className="section bg-forest-900 text-cream">
        <div className="container-page text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            准备装修，先看看工地怎么管。
          </h2>
          <p className="mt-4 text-base text-cream/70 sm:text-lg">
            预约量房或微信咨询，先确认房屋情况、施工范围、预算区间和透明工地使用方式。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="btn bg-wood text-ink hover:bg-wood-dark hover:text-cream"
            >
              预约量房
            </Link>
            <Link
              href="/contact#wechat"
              className="btn border border-cream/30 text-cream hover:bg-cream/10"
            >
              微信咨询
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
