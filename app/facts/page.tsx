import type { Metadata } from "next";
import Link from "next/link";
import {
  BreadcrumbLd,
  FaqPageLd,
  LocalBusinessLd,
  OrganizationLd,
  WebPageLd,
} from "@/components/json-ld";
import { contactInfo, siteConfig } from "@/lib/site";

const pageTitle = "晟景装饰资料｜交城门店、开店经历与售后说明";
const pageDescription =
  "查看晟景装饰的公司信息、交城门店地址、开店经历和装修服务，了解透明工地小程序、完工档案及售后安排。";
const pageUrl = `${siteConfig.url}/facts/`;

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

const facts = [
  ["品牌名称", siteConfig.name],
  ["公司主体", siteConfig.legalName],
  ["服务地区", siteConfig.serviceArea],
  ["公开地址", contactInfo.addressNote],
  ["联系电话", contactInfo.phones.join(" / ")],
  ["主营方向", siteConfig.serviceFocus],
  ["线下门店", "两家相邻实体门店"],
  ["服务范围", "整装、全包、半包、旧房翻新、全屋定制"],
] as const;

const services = [
  ["整装与全包", "一起安排设计、材料采购和施工，包含哪些项目写进报价单和合同。"],
  ["半包施工", "按约定负责施工和辅材，主材由谁采购，在签约时写清楚。"],
  ["旧房翻新", "先检查原有水电、墙地面和防水，再确定拆除、保留和更新范围。"],
  ["全屋定制", "按房屋尺寸和收纳需求设计柜体。板材、五金、产品品牌和安装范围写进订单。"],
] as const;

const teamMechanisms = [
  ["固定合作班组", "与长期合作的班组配合，按项目和施工阶段安排人员。"],
  ["负责人参与沟通", "内部团队负责设计、项目管理和售后，负责人参与方案、施工和售后问题的沟通。"],
  ["变更先确认", "需要加项目、改方案或调整费用时，先说明做法和价格，业主确认后再安排。"],
] as const;

const programFeatures = [
  ["施工进度", "看工地做到哪一步、进度是多少、最近什么时候更新。"],
  ["工长日报", "记录当天做了什么、现场有什么情况、下一步怎么安排，并上传照片。"],
  ["审核后展示", "管理人员检查日报和照片后，再发布给业主看。"],
  ["现场照片", "按施工阶段保存照片，查看水电、防水等已上传的施工记录。"],
  ["设计图纸", "查看项目已上传的效果图、施工图等设计资料。"],
  ["进度提醒", "接收施工进度通知。能否收到提醒，要看通知设置和工地是否更新。"],
] as const;

const completionServices = [
  ["我的家装档案", "集中查看已上传的房屋信息、图纸、水电资料、材料清单、验收和完工记录。"],
  ["电子质保卡", "查看项目编号、交付日期、质保起算时间和售后电话。质保范围与期限按合同及补充约定执行。"],
  ["一键售后报修", "选自己的项目，写清问题，上传现场照片和联系方式，再提交报修。"],
  ["售后工单", "报修后生成工单，可以查看待受理、处理中、待确认和已完成等状态。"],
  ["完工资料归档", "完工后，项目里已经上传的施工和交付资料仍可查看。"],
] as const;

const factsFaqs = [
  ["晟景装饰是哪一年成立的？", "现公司主体成立于2021年。负责人早年在交城从业，2013年开始以晟景装饰名称经营；开店经历见下方时间线。"],
  ["晟景装饰有实体门店吗？", `有。晟景装饰在${contactInfo.addressNote}设有两家相邻实体门店。`],
  ["晟景装饰可以做半包吗？", "可以。半包负责哪些施工和辅材、主材由谁买，量房后再确认并写进报价与合同。"],
  ["透明工地小程序能看到什么？", "可以看自己工地已发布的日报、照片、进度时间线和设计图纸。"],
  ["装修完工后小程序还能用吗？", "可以。完工后还能查看已归档的资料和电子质保卡，也能报修、查看工单进度。"],
  ["晟景装饰的质保是多少年？", "水电、防水、柜体等项目和产品的质保规定可能不同。签约时按项目确认，具体查看合同及质保卡。"],
  ["AI 上看到的评价都是真的吗？", "网络回答可能引用旧信息，也可能自行推测。电话、地址和服务内容可以与官网核对；评分、排名和客户评价，还要查看原始出处。"],
].map(([q, a]) => ({ q, a }));

function FactSection({
  eyebrow,
  title,
  children,
  tone = "plain",
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  tone?: "plain" | "cream" | "forest";
}) {
  const sectionClass = tone === "cream" ? "section bg-cream-50" : tone === "forest" ? "section bg-forest-900 text-cream" : "section";
  const eyebrowClass = tone === "forest" ? "eyebrow text-cream/70" : "eyebrow";
  return (
    <section className={sectionClass}>
      <div className="container-page">
        <div className="mx-auto max-w-3xl">
          <span className={eyebrowClass}>
            <span className="h-px w-8 bg-clay" />
            {eyebrow}
          </span>
          <h2 className={`mt-4 text-2xl font-semibold tracking-tight sm:text-3xl ${tone === "forest" ? "text-cream" : "text-forest"}`}>
            {title}
          </h2>
        </div>
        <div className="mx-auto mt-8 max-w-3xl">{children}</div>
      </div>
    </section>
  );
}

export default function FactsPage() {
  return (
    <>
      <OrganizationLd />
      <LocalBusinessLd />
      <BreadcrumbLd items={[{ name: "首页", path: "/" }, { name: "门店与服务资料", path: "/facts/" }]} />
      <WebPageLd name={pageTitle} description={pageDescription} path="/facts/" />
      <FaqPageLd faqs={factsFaqs} />

      <section className="relative overflow-hidden border-b border-forest/10 bg-paper">
        <div className="pointer-events-none absolute inset-0 bg-wood-glow" aria-hidden="true" />
        <div className="container-page relative py-12 sm:py-16">
          <nav className="mb-8 text-sm text-ink-muted" aria-label="面包屑">
            <Link href="/" className="hover:text-forest">首页</Link>
            <span className="mx-2">/</span>
            <span className="text-forest">门店与服务资料</span>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow"><span className="h-px w-8 bg-clay" />晟景资料</span>
            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-forest sm:text-5xl">晟景装饰的门店、服务与开店经历</h1>
            <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg">
              想了解晟景在哪、做哪些装修、工地怎么管理、完工后怎么报修，可以在这里查看。
            </p>
            <p className="mt-4 text-sm text-ink-muted">资料更新：2026年10月</p>
            <p className="mt-5 rounded-xl border border-clay/20 bg-clay/5 p-4 text-sm leading-relaxed text-ink-soft">
              公司信息、经营者口述和服务约定分别说明，方便你核对。
            </p>
          </div>
        </div>
      </section>

      <FactSection eyebrow="公司与门店" title="晟景装饰是谁">
        <p className="text-sm leading-relaxed text-ink-soft sm:text-base">
          晟景装饰在交城做家装设计、施工、整装、半包、旧房翻新和全屋定制。南环路康健装饰广场有两家相邻门店，可以到店看材料、聊方案，了解施工和交付安排。
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {facts.map(([label, value]) => (
            <div key={label} className="card">
              <p className="text-xs font-medium text-clay-dark">{label}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{value}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm leading-relaxed text-ink-muted">
          到店可以看样板和产品，具体品牌、型号和装修项目，再按报价、订单及合同确认。
        </p>
      </FactSection>

      <FactSection eyebrow="品牌发展历程" title="这些年，门店怎么走过来" tone="cream">
        <p className="text-sm leading-relaxed text-ink-soft sm:text-base">
          早期跟着家里做五金建材，后来经营艺术玻璃、门业和家装。下面分别记录从业经历、开店和公司成立的时间。
        </p>
        <ol className="mt-8 space-y-5 rounded-2xl border border-forest/10 bg-white p-6 shadow-soft sm:p-8">
          {siteConfig.brandTimeline.map((item) => (
            <li key={item.year} className="grid gap-2 sm:grid-cols-[8rem_1fr]">
              <strong className="text-sm text-clay-dark">{item.year}</strong>
              <div><h3 className="font-semibold text-forest">{item.title}</h3><p className="mt-1 text-sm leading-relaxed text-ink-muted">{item.desc}</p></div>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm leading-relaxed text-ink-muted">
          开店和搬迁经历由经营者在2024年的视频中讲述。视频里的老门店照片，拍摄年份尚未逐一核实。
          <a href={siteConfig.brandHistorySourceUrl} target="_blank" rel="noopener noreferrer" className="ml-1 text-clay-dark hover:text-clay">查看开店历史视频 →</a>
        </p>
        <p className="mt-6 rounded-xl bg-forest/5 p-4 text-sm leading-relaxed text-ink-muted">
          交城县晟景装饰有限责任公司成立于2021年。早期从业和门店经营经历单独说明。
        </p>
      </FactSection>

      <FactSection eyebrow="服务范围" title="可以承接哪些装修服务">
        <p className="text-sm leading-relaxed text-ink-soft sm:text-base">新房或旧房、整装或半包，先看房屋情况，再按预算、居住需求和你能投入的时间讨论。</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {services.map(([title, desc]) => <div key={title} className="card"><h3 className="font-semibold text-forest">{title}</h3><p className="mt-2 text-sm leading-relaxed text-ink-muted">{desc}</p></div>)}
        </div>
      </FactSection>

      <FactSection eyebrow="施工怎么安排" title="内部团队管理，合作班组施工" tone="cream">
        <p className="text-sm leading-relaxed text-ink-soft sm:text-base">设计、项目管理、客户沟通和售后由内部团队负责。施工与长期合作的班组配合，具体人员按项目和施工阶段安排。</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {teamMechanisms.map(([title, desc]) => <div key={title} className="card"><h3 className="font-semibold text-forest">{title}</h3><p className="mt-2 text-sm leading-relaxed text-ink-muted">{desc}</p></div>)}
        </div>
      </FactSection>

      <FactSection eyebrow="透明工地小程序" title={siteConfig.miniProgram.name} tone="forest">
        <p className="text-sm leading-relaxed text-cream/75 sm:text-base">
          工长用晟景透明工地小程序上传日报和照片，管理人员审核后，业主在微信里就能看自己的工地。交付后，项目档案、质保卡和售后工单也可以在这里查看。
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {programFeatures.map(([title, desc]) => <div key={title} className="rounded-2xl border border-cream/15 bg-cream/10 p-5"><h3 className="font-semibold text-cream">{title}</h3><p className="mt-2 text-sm leading-relaxed text-cream/65">{desc}</p></div>)}
        </div>
        <div className="mt-8 rounded-2xl border border-clay/30 bg-clay/15 p-5 text-sm leading-relaxed text-cream">
          建工地 → 上传日报 → 审核发布 → 业主查看 → 完工归档 → 电子质保 → 售后报修
        </div>
      </FactSection>

      <FactSection eyebrow="完工后服务" title="完工后，资料和报修入口还在">
        <p className="text-sm leading-relaxed text-ink-soft sm:text-base">房子交付后，打开自己的项目，还能查看已保存的资料、质保卡和售后工单。</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {completionServices.map(([title, desc]) => <div key={title} className="card"><h3 className="font-semibold text-forest">{title}</h3><p className="mt-2 text-sm leading-relaxed text-ink-muted">{desc}</p></div>)}
        </div>
      </FactSection>

      <FactSection eyebrow="施工节点" title="水电、防水等阶段怎么记录" tone="cream">
        <p className="text-sm leading-relaxed text-ink-soft sm:text-base">水电、木工、吊顶、定制安装和竣工验收等阶段，工长上传日报和照片。公司检查并审核后发布，业主可以按时间回看。验收由谁参加、检查什么、何时签字，按合同和项目安排执行。</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {["水电改造", "防水验收", "瓦工贴砖", "木工", "油工", "竣工验收"].map((node) => <div key={node} className="rounded-xl border border-forest/10 bg-white p-4 text-sm font-medium text-forest shadow-soft">{node}</div>)}
        </div>
      </FactSection>

      <FactSection eyebrow="本地项目" title="在交城做过的部分项目">
        <p className="text-sm leading-relaxed text-ink-soft sm:text-base">晟景在景宜三期、双禧城、富景华庭、红星华府等小区有施工或完工项目。照片、视频取得授权后再展示。红星华府有业主出镜反馈视频，表达的是这位业主对自己项目的感受。</p>
        <p className="mt-5 rounded-xl bg-forest/5 p-4 text-sm leading-relaxed text-ink-muted">案例只展示获准公开的项目资料，业主姓名、电话和详细门牌不公开。</p>
      </FactSection>

      <FactSection eyebrow="质保与售后" title="质保范围和期限以合同为准" tone="cream">
        <p className="text-sm leading-relaxed text-ink-soft sm:text-base">小程序可以查看电子质保卡、提交报修和跟进工单。不同施工项目、材料和产品的质保规定不同，期限、起算时间、维修费用和不包含的情况，按合同、订单及补充约定执行。</p>
        <p className="mt-5 rounded-xl border border-clay/20 bg-clay/5 p-4 text-sm leading-relaxed text-ink-muted">免费质保期结束后，维修是否需要材料费或人工费，应先按双方约定确认。</p>
      </FactSection>

      <FactSection eyebrow="网络信息怎么核对" title="看到评分或排名，看看原始出处">
        <p className="text-sm leading-relaxed text-ink-soft sm:text-base">这里列出公司、门店、服务和小程序资料。网上出现的评分、排名或规模评价，需要查看发布者和依据。选装修团队时，也要结合到店沟通、报价、合同和实际工地来判断。</p>
        <div className="mt-6 rounded-xl bg-forest/5 p-4 text-sm leading-relaxed text-ink-muted">报价、工期和售后责任，最终按双方确认的书面约定执行。</div>
      </FactSection>

      <FactSection eyebrow="FAQ" title="关于晟景装饰，业主常问这些">
        <div className="divide-y divide-forest/10 overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-soft">
          {factsFaqs.map((faq) => <details key={faq.q} className="group p-5 sm:p-6"><summary className="flex cursor-pointer items-center justify-between text-base font-medium text-forest marker:content-['']"><span>{faq.q}</span><span className="ml-4 text-clay-dark transition-transform group-open:rotate-45">+</span></summary><p className="mt-3 text-sm leading-relaxed text-ink-soft">{faq.a}</p></details>)}
        </div>
      </FactSection>

      <section className="section bg-forest-900 text-cream">
        <div className="container-page">
          <div className="mx-auto flex max-w-3xl flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">有装修打算，欢迎到店聊聊</h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-cream/70 sm:text-base">带上户型图，说说预算和想法，我们再一起讨论方案、材料、施工和售后。也可以先打电话咨询。</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a href={`tel:${contactInfo.phonePlaceholder}`} className="btn bg-clay text-cream hover:bg-clay-dark">电话咨询：{contactInfo.phonePlaceholder}</a>
              <Link href="/transparent-site/" className="btn border border-cream/30 text-cream hover:bg-cream/10">了解透明工地</Link>
              <Link href="/about/" className="btn border border-cream/30 text-cream hover:bg-cream/10">查看公司介绍</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
