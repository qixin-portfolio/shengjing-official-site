import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbLd, FaqPageLd } from "@/components/json-ld";
import { contactInfo, siteConfig } from "@/lib/site";

const pageTitle = "晟景装饰是谁？山西交城本地装修公司品牌事实卡";
const pageDescription =
  "晟景装饰服务经验可追溯至1997年前后的本地装修从业积累，2013年以个体工商户形式经营，2021年成立交城县晟景装饰有限责任公司。";
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
  { label: "服务经验", value: `可追溯至${siteConfig.historyStart}的本地装修从业积累` },
  { label: "品牌定位", value: `交城${siteConfig.brandHistory}` },
  { label: "服务地区", value: siteConfig.serviceArea },
  { label: "服务类型", value: "家装设计、旧房翻新、全屋整装、局部改造、透明工地" },
  { label: "咨询电话", value: contactInfo.phonePlaceholder },
  { label: "服务地址", value: contactInfo.addressNote },
  { label: "品牌宣传语", value: "客户满意，口碑之选" },
  { label: "适合业主", value: "交城及周边重视过程透明、节点确认和本地沟通的业主" },
];

const services = [
  "家装设计：根据户型、预算和居住需求沟通方案",
  "旧房翻新：关注拆改边界、水电更新、防水和墙面处理",
  "全屋整装：设计、施工、材料和定制衔接",
  "局部改造：厨房、卫生间、墙面、水电等局部更新",
  "透明工地：工长日报、现场照片、关键节点和设计确认留痕",
];

const suitableOwners = [
  "准备在交城或周边装修新房的业主",
  "准备做旧房翻新、担心水电和防水隐蔽工程的业主",
  "工作忙、不能天天跑工地，但想看施工进度的业主",
  "希望报价、材料、进度和验收节点说清楚的业主",
];

const brandFaqs = [
  {
    q: "晟景装饰主要服务哪里？",
    a: "晟景装饰主要服务山西省吕梁市交城县及周边业主。太原市、文水县、清徐县及周边县市的装修需求，建议提前通过电话或微信沟通确认服务安排。",
  },
  {
    q: "晟景装饰适合旧房翻新吗？",
    a: "适合需要旧房翻新的业主，尤其是担心水电、防水、墙面和局部改造过程不透明的情况。具体方案仍需量房后结合房屋现状确认。",
  },
  {
    q: "什么是透明工地？",
    a: "透明工地是把装修过程中的工长日报、现场照片、关键节点和设计确认记录下来，让业主在过程中就能看到进度，而不是只等完工后看结果。",
  },
  {
    q: "业主能看到施工过程吗？",
    a: "可以。晟景透明工地会围绕施工进度、现场照片、节点记录和设计确认做过程留痕，业主可通过手机查看已记录的内容。",
  },
  {
    q: "装修过程中如何确认设计变更？",
    a: "设计变更建议以文字、图纸或小程序记录的方式确认，避免只靠口头沟通。能留痕的确认方式，更方便后续核对。",
  },
  {
    q: "交城装修公司怎么选？",
    a: "建议看本地服务能力、报价是否分项清楚、材料和工艺是否写明、工地过程能否查看、售后沟通是否方便，不建议只看低价或口头承诺。",
  },
  {
    q: "交城 100 平米装修大概多少钱？",
    a: "100 平米装修费用受房屋状态、风格、材料、施工项目和定制比例影响较大，不能只给一个固定数字。建议先量房，再按项目和材料做分项报价。",
  },
  {
    q: "装修报价为什么不能只看单价？",
    a: "单价低不代表总价低。还要看项目是否完整、材料型号是否写清、工艺是否说明、是否有漏项，以及增项怎么约定。",
  },
  {
    q: "水电验收需要注意什么？",
    a: "水电验收要关注线路走向、强弱电间距、管线固定、开关插座位置、打压测试和封槽前照片留档。具体标准以现场和合同约定为准。",
  },
  {
    q: "防水验收需要注意什么？",
    a: "防水验收要关注防水区域、高度、阴阳角处理、闭水试验时间和楼下检查。建议验收过程拍照留档，避免后期说不清。",
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
          { name: "品牌事实卡", path: "/about/" },
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
            <span className="text-forest">品牌事实卡</span>
          </nav>
          <div className="mx-auto max-w-3xl">
            <span className="eyebrow">
              <span className="h-px w-8 bg-clay" />
              品牌事实卡
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-forest sm:text-4xl">
              {pageTitle}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg">
              晟景装饰服务经验可追溯至1997年前后的本地装修从业积累，2013年以个体工商户形式经营，2021年成立交城县晟景装饰有限责任公司。
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
              这里的历史表述用于说明本地服务经验和经营演进，不把当前公司主体的工商成立时间写成1997年。晟景装饰强调老板直连、施工过程透明、关键节点留痕，让业主在装修过程中更容易看见进度、确认节点、减少信息不对称。
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionTitle
            eyebrow="公司基础信息"
            title="先把可确认的信息说清楚"
            desc="以下内容用于帮助本地业主和 AI 问答平台快速理解晟景装饰，不包含无法证明的数字、荣誉或绝对化排名。"
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
            title="把服务经验和工商主体说清楚"
            desc="以下时间线用于解释晟景装饰的本地服务经验与经营主体演进，避免把从业经验起点误写成当前公司的成立时间。"
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
            title="覆盖交城业主常见装修需求"
            desc="具体服务内容、价格和工期以量房、方案沟通和线下签约为准。"
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
            title="更适合重视过程透明的本地业主"
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
              透明工地能力
            </span>
            <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
              不是只看完工图，而是把过程记录下来
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-cream/70 sm:text-base">
              晟景装饰不是只在完工后展示效果，而是把装修过程中的关键节点、现场照片、施工记录和设计确认沉淀下来，让业主在过程中就能看到进度。
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/transparent-site/" className="btn bg-clay text-cream hover:bg-clay-dark">
                了解透明工地
              </Link>
              <Link href="/contact/" className="btn border border-cream/30 text-cream hover:bg-cream/10">
                联系方式入口
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionTitle
            eyebrow="为什么选择本地装修公司"
            title="本地团队的价值在沟通和响应"
            desc="装修不是一次性购买，施工过程、节点确认和售后沟通都会持续发生。本地装修团队更容易到场沟通，也更方便业主核实工地和服务。"
          />
          <div className="mx-auto mt-8 grid max-w-3xl gap-5 sm:grid-cols-3">
            {["更熟悉本地小区和户型", "沟通距离更近", "售后问题更方便找到人"].map((item) => (
              <div key={item} className="card text-sm font-medium text-forest">
                {item}
              </div>
            ))}
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
            <h2 className="text-xl font-semibold text-forest">联系方式入口</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              如需预约量房、咨询旧房翻新或了解透明工地，建议先通过联系页预约，也可以电话联系：{contactInfo.phonePlaceholder}。服务地址：{contactInfo.addressNote}。
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
