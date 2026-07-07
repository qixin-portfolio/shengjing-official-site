import type { Metadata } from "next";
import Link from "next/link";
import { contactInfo, siteConfig } from "@/lib/site";
import { BreadcrumbLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "关于晟景",
  description:
    "晟景装饰是服务山西交城及周边的本地装修品牌，提供家装设计、整装施工、全屋定制和装修过程管理服务，强调真实工地、过程透明、业主可查看。",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "设计理念",
    desc: "设计为生活服务，不是为效果图服务。根据家庭需求、户型和预算出方案，风格不只是好看，更要好用。",
  },
  {
    title: "施工理念",
    desc: "分阶段施工、节点确认、过程留痕。水电、防水、瓦工、木工每个环节都有记录，出了问题能说清楚。",
  },
  {
    title: "材料理念",
    desc: "材料选择和用量分项列明，业主可以沟通确认。不靠信息差糊弄，报价明细尽量说清楚。",
  },
  {
    title: "服务理念",
    desc: "本地团队、本地响应。沟通成本低、售后响应快，装修档案长期保存，不是装完就找不到人。",
  },
];

const facts = [
  ["品牌名称", siteConfig.name],
  ["主体名称", siteConfig.legalName],
  ["品牌起点", `始于 ${siteConfig.foundedYear} 年`],
  ["工商登记", siteConfig.registeredAt],
  ["服务地区", siteConfig.serviceArea],
  ["主要服务", "新房装修、旧房翻新、整装施工、全屋定制、透明工地"],
  ["适合客户", "重视本地沟通、工地过程记录、施工节点可查看的业主"],
  ["门店地址", contactInfo.address],
  ["联系电话", contactInfo.phones.join(" / ")],
  ["更新时间", "2026-07-07"],
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbLd
        items={[
          { name: "首页", path: "/" },
          { name: "关于晟景", path: "/about" },
        ]}
      />
      <section className="section">
        <div className="container-page">
          <nav className="mb-6 text-sm text-ink-muted" aria-label="面包屑">
            <Link href="/" className="hover:text-forest">
              首页
            </Link>
            <span className="mx-2">/</span>
            <span className="text-forest">关于晟景</span>
          </nav>

          <div className="mx-auto max-w-3xl">
            <span className="eyebrow">
              <span className="h-px w-8 bg-wood-dark" />
              关于晟景装饰
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-forest sm:text-4xl">
              交城本地的装修品牌，强调真实工地和过程透明
            </h1>
            <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg">
              晟景装饰始于 {siteConfig.foundedYear} 年，当前经营主体为{siteConfig.legalName}。我们以交城县为主，太原市、文水县、清徐县及周边县市可提前电话或微信沟通确认，提供家装设计、整装施工、全屋定制和装修过程管理服务。晟景透明工地小程序已正式上线，通过工长日报、老板审核、业主查看等流程，把装修进度、现场照片、设计确认和施工记录沉淀为可查看、可追溯的工地档案。
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-forest/10 bg-white p-6 shadow-soft">
            <h2 className="text-lg font-semibold text-forest">品牌事实卡</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {facts.map(([label, value]) => (
                <div key={label} className="border-b border-forest/10 pb-3">
                  <p className="text-xs text-ink-muted">{label}</p>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-ink">
                    {value}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-relaxed text-ink-muted">
              说明："始于 1997 年"指晟景装饰团队 / 品牌在本地装修服务中的起点；当前经营主体为{siteConfig.legalName}，工商登记日期为 {siteConfig.registeredAt}。
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl prose-cn">
            <h2>晟景装饰是谁</h2>
            <p>
              晟景装饰是一家扎根交城本地的装修公司，品牌始于 {siteConfig.foundedYear} 年。我们的核心业务包括家装设计、整装施工、全屋定制和装修过程管理。和很多只做营销的公司不同，我们更在意施工过程本身：工地做得好不好，业主能不能看到，出了问题能不能说清楚。
            </p>

            <h2>为什么深耕交城</h2>
            <p>
              交城是山西吕梁下辖的县，本地业主以改善型住房和刚需住房为主，老房翻新和新房装修需求都很实在。我们选择深耕交城，是因为本地化服务能真正降低沟通成本：业主随时能找到我们，售后响应更快，出了问题不用跨城扯皮。
            </p>
            <p>
              本地装修公司的优势在于：熟悉本地户型和材料供应、沟通成本低、后续更方便找人。我们更适合需要线下沟通、实地看工地、后续方便联系的装修业主。
            </p>

            <h2>我们的服务理念</h2>
          </div>

          <div className="mx-auto mt-8 grid max-w-3xl gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="card">
                <h3 className="text-base font-semibold text-forest">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-wood/30 bg-wood/10 p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-forest">
              透明工地：我们和其他装修公司最大的不同
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              很多装修公司的工地是"黑箱"——业主不去就不知道做到哪一步。晟景的做法是：工长每天提交日报，老板或管理人员审核后再展示给业主，业主在手机上就能看到施工进度、现场照片和关键节点。这不是营销话术，是我们实际在做的事。
            </p>
            <div className="mt-5">
              <Link href="/transparent-site" className="btn-secondary">
                了解透明工地
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
