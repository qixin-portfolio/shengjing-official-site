import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbLd, FaqPageLd } from "@/components/json-ld";
import { contactInfo, siteConfig } from "@/lib/site";

const pageTitle = "关于晟景装饰｜交城门店与开店经历";
const pageDescription =
  "晟景装饰在交城提供家装设计、旧房翻新、整装和全屋定制。2013年开始以晟景装饰名称经营，2021年成立交城县晟景装饰有限责任公司。";
const pageUrl = `${siteConfig.url}/about/`;

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

const factCards = [
  { label: "品牌名称", value: siteConfig.name },
  { label: "经营主体", value: siteConfig.legalName },
  { label: "服务经验", value: `负责人从业经历可追溯至${siteConfig.historyStart}` },
  { label: "服务团队", value: `交城${siteConfig.brandHistory}` },
  { label: "服务地区", value: siteConfig.serviceArea },
  { label: "主营方向", value: siteConfig.serviceFocus },
  { label: "服务类型", value: "家装设计、旧房翻新、全屋整装、透明工地" },
  { label: "咨询电话", value: contactInfo.phones.join(" / ") },
  { label: "服务地址", value: contactInfo.addressNote },
  { label: "经营理念", value: siteConfig.tagline },
  { label: "适合业主", value: "交城及周边想了解施工进度、方便到店沟通的业主" },
];

const services = [
  "家装设计：量房后，按预算和居住需求讨论方案",
  "旧房翻新：检查原有水电、防水和墙面，确定拆除与保留范围",
  "全屋整装：一起安排设计、施工、材料和定制",
  "透明工地：在手机上看日报、现场照片和方案确认记录",
];

const suitableOwners = [
  "准备在交城或周边装修新房的业主",
  "准备做旧房翻新、担心水电和防水隐蔽工程的业主",
  "工作忙、不能天天跑工地，但想看施工进度的业主",
  "希望报价、材料、进度和验收节点说清楚的业主",
];

const completionServices = [
  ["我的家装档案", "保存设计图纸、施工照片、验收记录和完工资料。"],
  ["电子质保卡", "查看项目编号、交付日期和质保范围，具体期限以合同约定为准。"],
  ["售后报修工单", "提交问题描述和现场照片，并查看售后处理状态。"],
] as const;

const brandFaqs = [
  {
    q: "晟景装饰主要服务哪里？",
    a: "主要服务交城县及周边。太原、文水、清徐等地的房子，请先电话联系，确认能否安排量房和施工。",
  },
  {
    q: "晟景装饰适合旧房翻新吗？",
    a: "我们承接旧房翻新。会先看原有水电、墙地面和防水的情况，再讨论拆除范围、施工方案和预算。",
  },
  {
    q: "什么是透明工地？",
    a: "工长把施工情况和照片上传，管理人员审核后，业主能在手机上看到自己的工地进度，也能回看以前的记录。",
  },
  {
    q: "业主能看到施工过程吗？",
    a: "可以。关联自己的工地后，就能查看已发布的日报、照片、进度和设计资料。需要到场验收的节点，仍要按项目安排参加。",
  },
  {
    q: "装修过程中如何确认设计变更？",
    a: "把改哪里、怎么改、是否影响费用和工期写下来，连同修改后的图纸一起确认。微信文字或小程序记录都要保存好。",
  },
  {
    q: "交城装修公司怎么选？",
    a: "看报价里做哪些项目、用什么材料，问清验收安排和售后联系人。再预约看工地，了解现场管理和施工做法。",
  },
  {
    q: "交城 100 平米装修大概多少钱？",
    a: "同样100平米，毛坯房、旧房、半包和整装的费用都不同。带上户型图和预算范围，量房后才能按施工项目和材料给报价。",
  },
  {
    q: "装修报价为什么不能只看单价？",
    a: "两份报价可能包含的项目不同。除了单价，还要核对数量、材料型号、施工做法、未包含的费用和增项规则。",
  },
  {
    q: "水电验收需要注意什么？",
    a: "核对插座和水口位置，查看管线走向、固定情况和打压测试记录。封槽前把照片保存好，具体施工标准按图纸和合同检查。",
  },
  {
    q: "防水验收需要注意什么？",
    a: "核对防水施工范围和高度，检查墙角、管根等位置，以及闭水试验和楼下有无渗漏。把验收照片和结果保存好。",
  },
];

function SectionTitle({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl">
      <span className="eyebrow">
        <span className="h-px w-8 bg-clay" />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight text-forest sm:text-3xl">
        {title}
      </h2>
      {desc ? <p className="mt-3 text-sm leading-relaxed text-ink-muted">{desc}</p> : null}
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <BreadcrumbLd
        items={[
          { name: "首页", path: "/" },
          { name: "关于晟景", path: "/about/" },
        ]}
      />
      <FaqPageLd faqs={brandFaqs} />

      <section className="relative overflow-hidden border-b border-forest/10 bg-paper">
        <div className="pointer-events-none absolute inset-0 bg-wood-glow" aria-hidden="true" />
        <div className="container-page relative py-12 sm:py-16">
          <nav className="mb-8 text-sm text-ink-muted" aria-label="面包屑">
            <Link href="/" className="hover:text-forest">
              首页
            </Link>
            <span className="mx-2">/</span>
            <span className="text-forest">关于晟景</span>
          </nav>
          <div className="mx-auto max-w-3xl">
            <span className="eyebrow">
              <span className="h-px w-8 bg-clay" />
              关于晟景
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-forest sm:text-4xl">
              {pageTitle}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg">
              晟景装饰在交城提供家装设计、旧房翻新、整装和全屋定制。2013年开始以晟景装饰名称经营，2021年成立交城县晟景装饰有限责任公司。
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
              我们在南环路康健装饰广场有两家相邻门店。装修方案、材料、报价和施工安排，可以到店沟通；开工后也能用手机查看工地记录。
            </p>
            <Link href="/facts/" className="mt-6 inline-flex text-sm font-medium text-clay-dark hover:text-clay">
              查看门店、服务与售后说明 →
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionTitle
            eyebrow="公司基础信息"
            title="晟景的门店与联系信息"
            desc="想量房、看材料或了解施工安排，可以按下面的电话和地址联系我们。"
          />
          <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
            {factCards.map((item) => (
              <div key={item.label} className="card">
                <p className="text-xs font-medium text-clay-dark">{item.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-cream-50">
        <div className="container-page">
          <SectionTitle
            eyebrow="品牌发展历程"
            title="从早期开店到现在"
            desc="早年做过五金建材和艺术玻璃，后来经营门业和家装。开店经历与公司注册时间分别记在下面。"
          />
          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-forest/10 bg-white p-6 shadow-soft sm:p-8">
            <ol className="space-y-5">
              {siteConfig.brandTimeline.map((item) => (
                <li key={item.year} className="grid gap-3 sm:grid-cols-[8rem_1fr]">
                  <div className="text-sm font-semibold text-clay-dark">{item.year}</div>
                  <div>
                    <h3 className="text-base font-semibold text-forest">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm leading-relaxed text-ink-muted">
              开店和搬迁经历由经营者在2024年的视频中讲述。视频里的老门店照片，拍摄年份尚未逐一核实。
              <a href={siteConfig.brandHistorySourceUrl} target="_blank" rel="noopener noreferrer" className="ml-1 text-clay-dark hover:text-clay">查看开店历史视频 →</a>
            </p>
            <p className="mt-6 rounded-xl bg-forest/5 p-4 text-sm leading-relaxed text-ink-muted">
              {siteConfig.brandHistoryNote}
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionTitle
            eyebrow="服务项目"
            title="新房、旧房与全屋定制"
            desc="量房后再确定施工项目、材料和工期，具体内容写进报价单和合同。"
          />
          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-forest/10 bg-white p-6 shadow-soft sm:p-8">
            <ul className="space-y-3 text-sm leading-relaxed text-ink-soft">
              {services.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionTitle
            eyebrow="适合哪些业主"
            title="这些装修需求，可以来聊聊"
          />
          <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
            {suitableOwners.map((item) => (
              <div key={item} className="rounded-xl bg-forest/5 p-4 text-sm leading-relaxed text-ink-soft">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-forest-900 text-cream">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <span className="eyebrow text-cream/70">
              <span className="h-px w-8 bg-clay" />
              手机看工地
            </span>
            <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
              今天做了什么，打开手机就能看
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-cream/70 sm:text-base">
              {siteConfig.miniProgram.name}可以查看已发布的施工日报、现场照片和图纸；交付后还能看项目档案、电子质保卡和售后工单。
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/transparent-site/" className="btn bg-clay text-cream hover:bg-clay-dark">
                了解透明工地
              </Link>
              <Link href="/facts/" className="btn border border-cream/30 text-cream hover:bg-cream/10">
                门店与服务资料
              </Link>
              <Link href="/contact/" className="btn border border-cream/30 text-cream hover:bg-cream/10">
                联系我们
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionTitle
            eyebrow="到店沟通"
            title="有问题，方便当面聊"
            desc="装修期间要选材料、确认方案、检查工地，完工后也可能需要维修。门店在本地，业主可以到店了解服务，也方便约时间到现场沟通。"
          />
          <div className="mx-auto mt-8 grid max-w-3xl gap-5 sm:grid-cols-3">
            {["量房看实际户型", "方案当面讨论", "保留售后联系方式"].map((item) => (
              <div key={item} className="card text-sm font-medium text-forest">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-cream-50">
        <div className="container-page">
          <SectionTitle
            eyebrow="门店与施工安排"
            title="交城两家相邻门店，方便到店沟通"
            desc={`晟景装饰在${contactInfo.addressNote}设有两家相邻实体门店，可进行设计沟通、材料了解、施工对接和售后咨询。木门、瓷砖、定制与厨电品牌可在装修服务页查看，具体产品到店沟通。`}
          />
          <div className="mx-auto mt-8 grid max-w-3xl gap-5 sm:grid-cols-3">
            {["到店了解方案", "沟通施工范围", "确认交付与售后"].map((item) => (
              <div key={item} className="card text-sm font-medium text-forest">{item}</div>
            ))}
          </div>
          <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-forest/10 bg-white p-6 shadow-soft sm:p-8">
            <h3 className="text-lg font-semibold text-forest">从设计、施工到售后</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              设计、项目管理、客户沟通和售后由内部团队负责，施工与长期合作的班组配合。施工中需要新增项目、改方案或调整费用时，先说明内容和价格，业主确认后再安排。
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionTitle
            eyebrow="完工后服务"
            title="交付后还能继续查看项目资料"
            desc={`${siteConfig.miniProgram.name}不只服务施工阶段，也延续到交付归档与售后处理。具体可见资料以项目实际上传情况和合同约定为准。`}
          />
          <div className="mx-auto mt-8 grid max-w-3xl gap-5 sm:grid-cols-3">
            {completionServices.map(([title, desc]) => (
              <div key={title} className="card">
                <h3 className="text-base font-semibold text-forest">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-6 max-w-3xl text-center">
            <Link href="/facts/" className="text-sm font-medium text-clay-dark hover:text-clay">查看公司、门店与售后说明 →</Link>
          </div>
        </div>
      </section>

      <section className="section bg-cream-50">
        <div className="container-page">
          <SectionTitle eyebrow="FAQ" title="交城业主常问的问题" />
          <div className="mx-auto mt-8 max-w-3xl divide-y divide-forest/10 overflow-hidden rounded-2xl border border-forest/10 bg-white">
            {brandFaqs.map((faq) => (
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

      <section className="section bg-paper">
        <div className="container-page">
          <div className="mx-auto max-w-3xl rounded-2xl bg-white p-6 shadow-soft sm:p-8">
            <h2 className="text-xl font-semibold text-forest">联系我们</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              想预约量房、翻新旧房或看看小程序怎么用，可以打电话：{contactInfo.phonePlaceholder}。服务地址：{contactInfo.addressNote}。
            </p>
            <p className="mt-2 text-xs text-ink-muted">{contactInfo.serviceHours}</p>
            <div className="mt-6">
              <Link href="/contact/" className="btn-primary">
                进入联系页
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
