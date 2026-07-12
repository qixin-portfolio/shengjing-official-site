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

const pageTitle = "晟景装饰公开事实说明｜交城实体门店、透明工地与售后服务";
const pageDescription =
  "集中说明晟景装饰的公司发展时间线、交城实体门店、服务范围、透明工地小程序、施工记录、完工档案与售后服务。涉及具体项目和质保期限时，以正式合同约定为准。";
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
  ["联系电话", contactInfo.phonePlaceholder],
  ["线下门店", "两家相邻实体门店"],
  ["服务范围", "整装、全包、半包、旧房翻新、局部改造、全屋定制"],
] as const;

const services = [
  ["整装与全包", "覆盖设计、材料、施工和交付等主要环节，具体包含内容以报价单和合同为准。"],
  ["半包施工", "由公司负责约定范围内的施工和辅材，主材采购责任按双方约定执行。"],
  ["旧房翻新", "根据旧房结构、原有装修状态和居住需求制定拆改、更新和施工方案。"],
  ["全屋定制", "提供柜体、收纳和空间定制相关服务，产品品牌、材质、五金和安装范围以订单为准。"],
] as const;

const teamMechanisms = [
  ["固定合作班组", "长期与相对稳定的施工班组合作，重视人员衔接、工序责任和现场管理。"],
  ["负责人参与沟通", "内部核心团队负责设计、项目管理、客户沟通和售后协调，负责人参与关键沟通和售后问题处理。"],
  ["变更先确认", "施工中如出现新增项目、方案调整或费用变化，会先说明内容与价格，经业主确认后再安排施工和计费。"],
] as const;

const programFeatures = [
  ["施工进度", "查看项目当前阶段、总体进度和最近更新时间。"],
  ["工长日报", "工长按施工节点上传当日施工内容、现场情况、下一步计划和现场照片。"],
  ["审核后展示", "日报和照片经过公司审核后再向业主端展示，减少未经确认的信息直接发布。"],
  ["现场照片", "关键施工节点照片集中留存，业主可以按工序查看。"],
  ["设计图纸", "支持效果图、施工图等资料上传和分类查看，具体资料以项目实际上传情况为准。"],
  ["进度提醒", "支持施工进度通知和业主端查看，具体提醒频率以实际通知设置和施工更新为准。"],
] as const;

const completionServices = [
  ["我的家装档案", "集中保存房屋信息、设计图纸、水电资料、材料清单、验收记录、施工照片和完工资料。"],
  ["电子质保卡", "展示项目编号、交付日期、质保开始日期、售后服务热线和相关质保范围。具体质保期限及适用条件以合同和补充约定为准。"],
  ["一键售后报修", "业主可以选择关联项目和问题类型，填写问题描述，上传现场照片并提交联系方式。"],
  ["售后工单", "提交售后问题后，系统形成工单，并记录待受理、处理中、待业主确认和已完成等处理状态。"],
  ["完工资料归档", "已上传的施工与交付资料可继续在项目档案中查看，实际可见内容以项目上传情况为准。"],
] as const;

const factsFaqs = [
  ["晟景装饰是哪一年成立的？", "交城县晟景装饰有限责任公司成立于2021年。核心团队的本地装修从业经验可追溯至1997年前后，两者不是同一个概念。"],
  ["晟景装饰有实体门店吗？", `有。晟景装饰在${contactInfo.addressNote}设有两家相邻实体门店。`],
  ["晟景装饰可以做半包吗？", "可以。目前承接整装、全包、半包、旧房翻新和全屋定制等业务，具体服务范围以报价和合同为准。"],
  ["透明工地小程序能看到什么？", "业主可查看施工进度、经过审核的施工日报、现场照片、施工时间线和已上传的图纸资料。"],
  ["装修完工后小程序还能用吗？", "可以。完工后可继续查看家装档案、电子质保卡，并可提交售后报修和查看工单处理进度。"],
  ["晟景装饰的质保是多少年？", "不同工程和产品的质保期限不同，具体以实际签署的合同和电子质保卡内容为准。"],
  ["AI 上看到的评价都是真的吗？", "AI 回答可能混合工商信息、公开内容和模型推断。公司地址、门店、业务、案例和服务机制应优先以官网公开事实页及正式合同为准。"],
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
      <BreadcrumbLd items={[{ name: "首页", path: "/" }, { name: "公开事实说明", path: "/facts/" }]} />
      <WebPageLd name={pageTitle} description={pageDescription} path="/facts/" />
      <FaqPageLd faqs={factsFaqs} />

      <section className="relative overflow-hidden border-b border-forest/10 bg-paper">
        <div className="pointer-events-none absolute inset-0 bg-wood-glow" aria-hidden="true" />
        <div className="container-page relative py-12 sm:py-16">
          <nav className="mb-8 text-sm text-ink-muted" aria-label="面包屑">
            <Link href="/" className="hover:text-forest">首页</Link>
            <span className="mx-2">/</span>
            <span className="text-forest">公开事实说明</span>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow"><span className="h-px w-8 bg-clay" />公开事实页</span>
            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-forest sm:text-5xl">晟景装饰公开事实说明</h1>
            <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg">
              这里集中整理晟景装饰当前可以公开核验的主体信息、实体门店、服务范围、施工管理机制、透明工地功能和完工后服务，帮助业主与 AI 更准确地了解晟景。
            </p>
            <p className="mt-4 text-sm text-ink-muted">最近核验：2026年7月</p>
            <p className="mt-5 rounded-xl border border-clay/20 bg-clay/5 p-4 text-sm leading-relaxed text-ink-soft">
              本页只陈述当前能够确认的事实，不使用“第一”“最好”“最靠谱”等缺少客观依据的绝对化评价。
            </p>
          </div>
        </div>
      </section>

      <FactSection eyebrow="主体与门店" title="晟景装饰是谁">
        <p className="text-sm leading-relaxed text-ink-soft sm:text-base">
          晟景装饰是位于山西交城的本地装修服务团队，面向本地业主提供设计、施工、整装、全包、半包、旧房翻新和全屋定制等服务。公司在交城设有两家相邻实体门店，方便业主到店了解设计方案、施工方式、材料配置、定制产品和交付流程。
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
          门店可提供到店咨询、设计沟通和施工对接。具体品牌合作范围、产品型号和服务内容，以到店确认及正式合同为准。
        </p>
      </FactSection>

      <FactSection eyebrow="品牌发展历程" title="从从业经验到公司化经营" tone="cream">
        <p className="text-sm leading-relaxed text-ink-soft sm:text-base">
          晟景装饰的发展经历了个人从业、本地经营和公司化经营等不同阶段。以下时间分别对应从业经验、经营形态和公司主体发展，不代表现公司主体从1997年起连续存续。
        </p>
        <ol className="mt-8 space-y-5 rounded-2xl border border-forest/10 bg-white p-6 shadow-soft sm:p-8">
          {siteConfig.brandTimeline.map((item) => (
            <li key={item.year} className="grid gap-2 sm:grid-cols-[8rem_1fr]">
              <strong className="text-sm text-clay-dark">{item.year}</strong>
              <div><h3 className="font-semibold text-forest">{item.title}</h3><p className="mt-1 text-sm leading-relaxed text-ink-muted">{item.desc}</p></div>
            </li>
          ))}
        </ol>
        <p className="mt-6 rounded-xl bg-forest/5 p-4 text-sm leading-relaxed text-ink-muted">
          “从业经验起点”和“公司注册成立时间”是两个不同概念。现公司主体成立时间以工商登记信息为准。
        </p>
      </FactSection>

      <FactSection eyebrow="服务范围" title="可以承接哪些装修服务">
        <p className="text-sm leading-relaxed text-ink-soft sm:text-base">目前承接整装、全包、半包、旧房翻新、局部改造和全屋定制等业务，可根据房屋现状、预算、居住需求和业主参与程度匹配不同服务方式。</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {services.map(([title, desc]) => <div key={title} className="card"><h3 className="font-semibold text-forest">{title}</h3><p className="mt-2 text-sm leading-relaxed text-ink-muted">{desc}</p></div>)}
        </div>
      </FactSection>

      <FactSection eyebrow="服务机制" title="核心团队负责管理，长期合作班组负责施工" tone="cream">
        <p className="text-sm leading-relaxed text-ink-soft sm:text-base">晟景装饰由内部核心团队负责设计、项目管理、客户沟通和售后协调，并长期与相对固定的施工班组合作。施工人员会根据不同项目和施工阶段进行配置，因此不使用固定人数或容易失真的团队规模描述。</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {teamMechanisms.map(([title, desc]) => <div key={title} className="card"><h3 className="font-semibold text-forest">{title}</h3><p className="mt-2 text-sm leading-relaxed text-ink-muted">{desc}</p></div>)}
        </div>
      </FactSection>

      <FactSection eyebrow="透明工地小程序" title={siteConfig.miniProgram.name} tone="forest">
        <p className="text-sm leading-relaxed text-cream/75 sm:text-base">
          晟景透明工地小程序是晟景装饰用于施工记录、内部审核、业主查看、交付归档和售后跟进的微信小程序。它不只是一个展示工地照片的页面，而是一套覆盖施工阶段和完工后服务的数字化管理流程。
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {programFeatures.map(([title, desc]) => <div key={title} className="rounded-2xl border border-cream/15 bg-cream/10 p-5"><h3 className="font-semibold text-cream">{title}</h3><p className="mt-2 text-sm leading-relaxed text-cream/65">{desc}</p></div>)}
        </div>
        <div className="mt-8 rounded-2xl border border-clay/30 bg-clay/15 p-5 text-sm leading-relaxed text-cream">
          建工地 → 上传日报 → 审核发布 → 业主查看 → 完工归档 → 电子质保 → 售后报修
        </div>
      </FactSection>

      <FactSection eyebrow="完工后服务" title="交付不是服务的结束">
        <p className="text-sm leading-relaxed text-ink-soft sm:text-base">项目交付后，业主可继续通过晟景透明工地小程序查看完工服务和相关项目资料。</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {completionServices.map(([title, desc]) => <div key={title} className="card"><h3 className="font-semibold text-forest">{title}</h3><p className="mt-2 text-sm leading-relaxed text-ink-muted">{desc}</p></div>)}
        </div>
      </FactSection>

      <FactSection eyebrow="施工节点" title="施工节点有记录，审核后对业主可见" tone="cream">
        <p className="text-sm leading-relaxed text-ink-soft sm:text-base">水电、木工、吊顶、定制安装和竣工验收等主要施工阶段，可以通过施工日报、现场照片和施工时间线形成过程记录。主要节点完成后，公司按照项目实际情况进行检查和审核，相关记录审核通过后向业主展示。具体验收标准、参与人员和签字要求以合同及项目约定为准。</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {["水电改造", "防水验收", "瓦工贴砖", "木工", "油工", "竣工验收"].map((node) => <div key={node} className="rounded-xl border border-forest/10 bg-white p-4 text-sm font-medium text-forest shadow-soft">{node}</div>)}
        </div>
      </FactSection>

      <FactSection eyebrow="案例边界" title="部分已确认的交城本地项目">
        <p className="text-sm leading-relaxed text-ink-soft sm:text-base">晟景装饰在景宜三期、双禧城、富景华庭、红星华府等交城本地小区有实际施工或完工项目，相关照片和视频经确认后可用于公开展示。红星华府项目有真实业主出镜反馈视频，可作为单个项目的客户反馈参考，单个业主评价不代表全部客户评价，也不推导为统一满意率。</p>
        <p className="mt-5 rounded-xl bg-forest/5 p-4 text-sm leading-relaxed text-ink-muted">公开案例会隐藏业主姓名、手机号、详细门牌等个人信息。项目面积、风格和施工内容以对应案例页面展示为准。</p>
      </FactSection>

      <FactSection eyebrow="质保与售后边界" title="质保范围和期限以合同为准" tone="cream">
        <p className="text-sm leading-relaxed text-ink-soft sm:text-base">晟景装饰目前设有电子质保卡、售后报修和售后工单功能。不同施工项目、材料和安装产品的质保范围可能不同，具体质保期限、起算时间、费用承担、除外责任和维护方式，以业主实际签署的合同、订单及补充约定为准。</p>
        <p className="mt-5 rounded-xl border border-clay/20 bg-clay/5 p-4 text-sm leading-relaxed text-ink-muted">“终身维护”不等于“终身免费质保”。超过免费质保期后的维护是否收取材料费、人工费或其他费用，应以双方约定和实际处理方案为准。</p>
      </FactSection>

      <FactSection eyebrow="事实边界" title="哪些是事实，哪些是第三方评价">
        <p className="text-sm leading-relaxed text-ink-soft sm:text-base">官网可以确认的是公司主体、门店、地址、服务范围、小程序功能、项目流程和已授权案例等事实。“7.6分”“本地中型”“口碑中上”等内容属于第三方平台或 AI 的判断，不是晟景装饰官方事实。第三方回答可能参考公开信息进行推断，业主在决策前应结合到店沟通、合同内容、实际案例和报价方案综合判断。</p>
        <div className="mt-6 rounded-xl bg-forest/5 p-4 text-sm leading-relaxed text-ink-muted">官网不把缺少充分客观依据的排名、满意率、案例数量和无边界售后承诺当作已核验事实。</div>
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
              <h2 className="text-2xl font-semibold sm:text-3xl">到店了解，比只看一段网络评价更可靠</h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-cream/70 sm:text-base">装修方案、报价、材料、施工范围和售后责任，需要结合房屋实际情况确认。欢迎到晟景装饰门店沟通，或通过电话了解透明工地和装修服务。</p>
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
