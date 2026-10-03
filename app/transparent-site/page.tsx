import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { contactInfo, siteConfig } from "@/lib/site";
import { BreadcrumbLd, FaqPageLd, WebPageLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";

const pageTitle = "晟景透明工地｜手机看日报、照片和装修进度";
const pageDescription =
  "工长上传日报和现场照片，管理人员审核后，业主可以在手机上查看施工进度、设计图纸和完工资料，也可以提交售后报修。";
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
  { step: "01", title: "工长提交日报", desc: "记录当天做了什么、谁在施工、进度如何，并上传现场照片。隐蔽工程在封槽前拍照保存。", icon: "pen" },
  { step: "02", title: "老板审核", desc: "管理人员检查日报和照片，审核后再发布给业主。", icon: "check" },
  { step: "03", title: "业主手机查看", desc: "打开自己的工地，查看已发布的进度、照片和施工记录。", icon: "phone" },
  { step: "04", title: "设计方案确认", desc: "图纸和修改内容可以线上确认，以后需要核对时还能找到记录。", icon: "design" },
  { step: "05", title: "保存施工记录", desc: "日报、照片和确认记录保存在项目里，之后可以按时间回看。", icon: "archive" },
  { step: "06", title: "完工资料与售后", desc: "交付后还能查看已上传的完工资料、电子质保卡和售后工单。", icon: "archive" },
];

const comparisonRows = [
  { stage: "施工进度", normal: "到现场看，或问工长", transparent: "打开自己的工地，查看已更新的进度" },
  { stage: "现场照片", normal: "到现场拍，或在聊天里接收", transparent: "按施工阶段保存，封槽前留照片" },
  { stage: "工长日报", normal: "电话、微信里了解当天施工", transparent: "用日报记录施工内容、人员和进度" },
  { stage: "审核机制", normal: "根据双方约定核对信息", transparent: "管理人员审核后发布日报和照片" },
  { stage: "设计确认", normal: "在聊天、图纸或书面文件里确认", transparent: "在项目中保存确认记录" },
  { stage: "问题沟通", normal: "查找聊天和现场资料", transparent: "按项目回看日报、照片和确认记录" },
  { stage: "售后追溯", normal: "分别保存图纸、验收和质保资料", transparent: "已归档的项目资料可继续查看" },
];

const benefits = [
  { title: "知道工地做到哪里", desc: "工作忙没去现场，也能看已更新的进度和日报里的问题说明。" },
  { title: "关键节点可回看", desc: "查找已上传的水电、防水和贴砖照片，核对当时的施工情况。" },
  { title: "沟通更有依据", desc: "讨论方案或施工问题时，可以对照当天的照片和确认记录。" },
  { title: "资料按项目保存", desc: "已上传的设计、施工、验收和完工资料，可以在项目里回看。" },
];

const completionFeatures = [
  { title: "我的家装档案", desc: "查看项目中已上传的图纸、施工照片、验收和完工资料。" },
  { title: "电子质保卡", desc: "查看项目编号、交付日期和质保范围，质保期限按合同执行。" },
  { title: "一键售后报修", desc: "选择自己的项目，写清问题、上传照片，再提交报修。" },
  { title: "售后工单", desc: "查看报修是否受理、正在处理，或等待你确认。具体维修安排由项目人员沟通。" },
];

const teamRoles = [
  ["员工邀请码", "员工用邀请码加入，在对应岗位的工作台处理任务。"],
  ["工长与项目管理", "上传日报和现场照片，更新进度，记录施工问题。"],
  ["设计与负责人", "管理图纸、确认修改、审核日报，沟通需要业主决定的事项。"],
] as const;

const transparentFaqs = [
  {
    q: "什么是透明工地？",
    a: "工长上传日报和照片，管理人员审核后，业主用手机查看自己的工地。施工进度、设计资料和确认事项都按项目保存。",
  },
  {
    q: "业主能看到施工过程吗？",
    a: "可以。关联工地后，能查看自己项目已发布的日报、照片、进度和设计资料。没有上传或没有开放的资料不会显示。",
  },
  {
    q: "工长日报是什么？",
    a: "记录当天做了什么、现场人员、做到哪一步、遇到什么问题，再配上现场照片。",
  },
  {
    q: "老板审核是什么？",
    a: "工长提交后，老板或管理人员先检查内容和照片，再发布给业主看。",
  },
  {
    q: "装修过程中如何确认设计变更？",
    a: "把改哪里、怎么改、费用和工期是否变化写清楚，再连同新图纸一起确认并保存。",
  },
  {
    q: "水电施工要保存哪些资料？",
    a: "在封槽前保存管线走向和点位照片，同时记录管线固定、打压测试和验收结果。以后安装或检修时方便查找。",
  },
  {
    q: "防水验收需要注意什么？",
    a: "核对防水范围和高度，检查墙角、管根，以及闭水试验和楼下有无渗漏。照片和验收结果一起保存。",
  },
  {
    q: "透明工地适合哪些业主？",
    a: "工作忙、不常到现场，或者想保存水电、防水等施工资料的业主，都可以了解一下。",
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
              <span className="eyebrow"><span className="h-px w-8 bg-clay" />手机看自己的工地</span>
              <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-forest sm:text-4xl">{pageTitle}</h1>
              <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">{siteConfig.miniProgram.name}今天做了什么、做到哪一步、现场是什么样，工长上传后由管理人员审核。打开微信，你就能看自己工地已发布的记录。</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="btn-primary">预约量房</Link>
                <Link href="/guides" className="btn-secondary">查看装修知识</Link>
              </div>
            </div>
            <figure className="border border-forest/15 bg-white p-4 sm:p-6">
              <Image
                src="/images/transparent-site/illustrations/progress-concept.webp"
                alt="晟景透明工地小程序功能示意图，展示施工进度、工长日报、现场照片和设计资料"
                width={1536}
                height={1024}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="h-auto w-full"
                priority
              />
              <figcaption className="mt-4 text-xs leading-5 text-ink-muted">小程序功能示意图，非实机截图。实际界面以当前版本为准。</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="mini-program" className="scroll-mt-20 border-b border-forest/10 bg-white py-16 sm:py-20" aria-labelledby="mini-program-title">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,380px)] lg:gap-16">
          <div>
            <span className="eyebrow"><span className="h-px w-8 bg-clay" />微信小程序入口</span>
            <h2 id="mini-program-title" className="mt-4 section-title">扫码打开晟景透明工地</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-ink-soft">
              用微信扫一扫，打开晟景透明工地小程序。关联自己的工地后，就能看工长上传、管理人员已审核的日报和现场照片。
            </p>
            <dl className="mt-8 divide-y divide-forest/10 border-y border-forest/10">
              <div className="grid gap-1 py-4 sm:grid-cols-[7rem_1fr] sm:gap-5"><dt className="font-semibold text-forest">施工中</dt><dd className="text-sm leading-6 text-ink-soft">查看已审核的日报、现场照片、进度节点和已提供的设计资料。</dd></div>
              <div className="grid gap-1 py-4 sm:grid-cols-[7rem_1fr] sm:gap-5"><dt className="font-semibold text-forest">交付后</dt><dd className="text-sm leading-6 text-ink-soft">查看已归档的项目资料与电子质保卡，也可提交售后报修并跟进工单。</dd></div>
            </dl>
            <p className="mt-5 text-sm leading-7 text-ink-muted">只能查看自己有权限访问的项目。能看到哪些资料，取决于工地已上传和发布的内容；质保范围与期限按合同执行。</p>
            <Link href="/contact/" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-clay-dark">需要关联自己的工地？联系晟景 <span aria-hidden="true">→</span></Link>
          </div>
          <figure className="mx-auto w-full max-w-[380px] border border-forest/10 bg-white p-5 text-center sm:p-7">
            <Image src="/images/transparent-site/qr-code.png" alt="晟景透明工地微信小程序码" width={650} height={634} sizes="(max-width: 640px) 80vw, 320px" className="mx-auto h-auto w-full max-w-[320px]" />
            <figcaption className="mt-4 text-sm font-medium text-forest">打开微信，扫一扫进入小程序</figcaption>
          </figure>
        </div>
      </section>

      {/* 使用流程 */}
      <section className="section">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center"><span className="h-px w-8 bg-clay" />使用流程<span className="h-px w-8 bg-clay" /></span>
            <h2 className="mt-4 section-title">从工长上传，到你看到日报</h2>
            <p className="section-subtitle">上传日报 → 管理人员审核 → 业主查看 → 确认施工事项 → 保存记录 → 完工后继续查看</p>
          </Reveal>
          <div className="mt-12 grid gap-4 lg:grid-cols-6">
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

      {/* 功能示意 */}
      <section className="section bg-forest-50">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="section-title">打开小程序，可以看什么</h2>
            <p className="section-subtitle">工地关联后，已审核发布的施工记录会显示在你的项目里。</p>
          </Reveal>
          <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
            <Reveal>
              <figure className="border border-forest/15 bg-white p-4 sm:p-6">
                <Image
                  src="/images/transparent-site/illustrations/diary-concept.webp"
                  alt="晟景透明工地小程序功能示意图，展示工长日报、审核发布和业主查看的流程"
                  width={1536}
                  height={1024}
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="h-auto w-full"
                />
                <figcaption className="mt-4 text-xs leading-5 text-ink-muted">功能示意图，非实机截图。业主查看自己关联工地已发布的内容。</figcaption>
              </figure>
            </Reveal>
            <div className="grid gap-0 border-t border-forest/20">
              {[
                ["工长日报", "记录当天施工内容、人员和进度，审核后再展示。"],
                ["现场照片", "按施工阶段保存，之后可以在项目里回看。"],
                ["节点进度", "查看已记录的施工阶段和最近更新。"],
                ["设计资料", "查看自己项目已开放的图纸和确认记录。"],
              ].map(([title, detail]) => (
                <div key={title} className="border-b border-forest/20 py-5">
                  <h3 className="font-semibold text-forest">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-ink-soft">{detail}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-8 text-center text-xs text-ink-muted">图中展示功能示意。实际页面随版本和账号身份有所不同。</p>
        </div>
      </section>

      {/* 团队协作与完工服务 */}
      <section className="section">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center"><span className="h-px w-8 bg-clay" />完工之后<span className="h-px w-8 bg-clay" /></span>
            <h2 className="mt-4 section-title">资料还在，报修也能在这里提交</h2>
            <p className="section-subtitle">房子交付后，项目里已归档的资料还能查看。需要维修时，可以在小程序里报修并跟进工单。</p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {completionFeatures.map((item) => (
              <Reveal key={item.title}>
                <div className="card h-full">
                  <h3 className="font-semibold text-forest">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-forest/10 bg-cream-50 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-forest">内部团队如何协作</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">员工通过邀请码加入团队，按岗位负责建工地、上传日报、审核、管理图纸、关联业主和处理售后。</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {teamRoles.map(([title, desc]) => (
                <div key={title} className="rounded-xl border border-forest/10 bg-white p-4">
                  <h4 className="font-medium text-forest">{title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/facts/" className="text-sm font-medium text-clay-dark hover:text-clay">查看门店与售后说明 →</Link>
          </div>
        </div>
      </section>

      {/* 对比表 */}
      <section className="section bg-cream-50">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center"><span className="h-px w-8 bg-clay" />对比<span className="h-px w-8 bg-clay" /></span>
            <h2 className="mt-4 section-title">聊天记录与项目记录，怎么查看</h2>
            <p className="section-subtitle">电话、微信和现场沟通仍会用到，小程序把施工资料集中到对应项目里。</p>
          </Reveal>
          <Reveal className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-soft table-responsive">
            <div className="grid grid-cols-3 border-b border-forest/10 bg-forest-50 text-sm font-semibold text-forest">
              <div className="p-4">环节</div>
              <div className="p-4 text-ink-muted">电话、微信与现场沟通</div>
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
            <h2 className="section-title">不在现场，也能了解施工</h2>
            <p className="section-subtitle">查看日报时有疑问，可以对照照片问项目人员。到了需要验收的阶段，再按安排到场检查。</p>
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
            <p className="section-subtitle">你到工地的频率和想了解的内容，会影响小程序的使用方式。</p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <Reveal><div className="card">
              <h3 className="text-base font-semibold text-forest">经常用手机查看</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                <li>· 工作忙、没时间天天跑工地的业主</li>
                <li>· 想了解当天施工情况、及时提问的业主</li>
                <li>· 想保存图纸、施工照片和确认记录的业主</li>
                <li>· 老房翻新、隐蔽工程多的业主</li>
                <li>· 第一次装修、不懂工地的业主</li>
              </ul>
            </div></Reveal>
            <Reveal delay={80}><div className="card border-clay/20">
              <h3 className="text-base font-semibold text-clay-dark">也可以这样用</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                <li>· 经常到现场的业主，用来保存已上传的资料</li>
                <li>· 装修项目较少的业主，按需要查看施工记录</li>
                <li>· 完工后的业主，查看档案和提交售后报修</li>
              </ul>
              <p className="mt-3 text-xs text-ink-muted">具体使用安排，可以在签约和工地关联时沟通。</p>
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
            <p className="section-subtitle">关于查看权限、日报、设计变更和验收，下面分别回答。</p>
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
              <p className="mt-4 text-base leading-relaxed text-cream/70 sm:text-lg">晟景在交城提供装修服务。想看看小程序里的日报、照片、设计资料和售后入口，可以到店了解。</p>
              <p className="mt-3 text-sm leading-relaxed text-cream/60">想了解小程序，可以打电话：{contactInfo.phonePlaceholder}。地址：{contactInfo.addressNote}。</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link href="/contact" className="btn bg-clay text-cream shadow-card hover:bg-clay-dark">预约量房</Link>
              <Link href="/facts/" className="btn border border-cream/30 text-cream hover:bg-cream/10">查看门店与服务资料</Link>
              <Link href="/guides" className="btn border border-cream/30 text-cream hover:bg-cream/10">查看装修知识</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
