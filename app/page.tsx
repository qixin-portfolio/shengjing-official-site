import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, homeFaqs } from "@/lib/site";
import { FaqPageLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: siteConfig.tagline,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

const trustItems = [
  {
    title: "28 年本地服务经验",
    desc: "深耕交城及周边，熟悉本地户型、材料和施工习惯。",
  },
  {
    title: "真实工地过程留痕",
    desc: "工长日报、现场照片、进度节点，施工过程有记录。",
  },
  {
    title: "设计、施工、材料、进度可沟通",
    desc: "方案、报价、节点分项确认，减少信息差。",
  },
  {
    title: "本地团队响应更及时",
    desc: "交城本地团队，沟通成本低，售后响应快。",
  },
];

const transparentFeatures = [
  {
    title: "工长日报",
    desc: "每天记录施工内容、人员和进度，提交后由管理人员审核。",
  },
  {
    title: "现场照片",
    desc: "按节点上传现场照片，隐蔽工程封槽前留档，可随时回看。",
  },
  {
    title: "进度节点",
    desc: "水电、防水、瓦工、木工等关键阶段标注，业主清楚做到哪一步。",
  },
  {
    title: "设计方案确认",
    desc: "设计图和变更可线上确认，留痕可追溯，减少口头沟通误差。",
  },
  {
    title: "施工过程留痕",
    desc: "从开工到验收，施工记录沉淀为可查看的工地档案。",
  },
];

const services = [
  {
    title: "新房装修",
    desc: "毛坯房从量房到验收的全流程服务，适合首次装修业主。",
  },
  {
    title: "老房翻新",
    desc: "老房水电改造、墙面重做、空间优化，过程记录更关键。",
  },
  {
    title: "整装服务",
    desc: "设计、施工、材料、定制一站对接，减少多头沟通。",
  },
  {
    title: "定制设计",
    desc: "根据家庭需求、户型和预算出方案，风格不只是效果图。",
  },
  {
    title: "施工管理",
    desc: "分阶段施工、节点确认、过程留痕，施工进度可查看。",
  },
  {
    title: "售后沟通",
    desc: "本地团队售后响应更及时，装修档案长期保存。",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero 首屏 */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cream-50 to-cream">
        <div className="container-page py-16 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">
              <span className="h-px w-8 bg-wood-dark" />
              晟景装饰 · 交城本地装修品牌
            </span>
            <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-forest sm:text-4xl lg:text-5xl">
              交城装修，找看得见进度的本地老品牌
            </h1>
            <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg lg:text-xl">
              {siteConfig.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link href="/contact" className="btn-primary">
                预约量房
              </Link>
              <Link href="/transparent-site" className="btn-secondary">
                了解透明工地
              </Link>
            </div>
          </div>
        </div>
        {/* 底部分隔线 */}
        <div className="h-1 w-full bg-wood/30" />
      </section>

      {/* 信任背书区 */}
      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="section-title">为什么交城业主选晟景</h2>
            <p className="section-subtitle">
              不写"第一""100%满意"这种没法证明的话，只说我们实际在做的。
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item) => (
              <div key={item.title} className="card">
                <h3 className="text-base font-semibold text-forest">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 透明工地区 */}
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
                晟景透明工地小程序，让业主不用天天跑工地，也能手机查看施工进度、现场照片和关键节点。工长提交日报，老板审核后再展示给业主。
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href="/transparent-site" className="btn-primary">
                  了解透明工地
                </Link>
                <Link href="/cases" className="btn-secondary">
                  查看案例类型
                </Link>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {transparentFeatures.map((f) => (
                <div
                  key={f.title}
                  className="rounded-xl border border-forest/10 bg-white p-5 shadow-soft"
                >
                  <h3 className="text-sm font-semibold text-forest">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                    {f.desc}
                  </p>
                </div>
              ))}
              <div className="rounded-xl border border-wood/30 bg-wood/10 p-5">
                <h3 className="text-sm font-semibold text-forest">
                  配套产品
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-ink-soft">
                  {siteConfig.miniProgram.name}
                  <br />
                  {siteConfig.miniProgram.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 服务区 */}
      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="section-title">装修服务</h2>
            <p className="section-subtitle">
              从新房装修到老房翻新，从整装到定制设计，覆盖交城业主常见需求。
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="card">
                <h3 className="text-lg font-semibold text-forest">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
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
            <h2 className="section-title">业主常问的问题</h2>
            <p className="section-subtitle">
              这些问题，也是交城业主在搜索和 AI 问答时最常问的。
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
          {/* FAQPage 结构化数据 */}
          <FaqPageLd
            faqs={homeFaqs.map((f) => ({ q: f.q, a: f.a }))}
          />
        </div>
      </section>

      {/* 底部 CTA */}
      <section className="section bg-forest-900 text-cream">
        <div className="container-page text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            准备装修，先看看工地怎么管。
          </h2>
          <p className="mt-4 text-base text-cream/70 sm:text-lg">
            预约量房，了解晟景装饰的透明工地服务，开工后手机查看施工进度。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="btn bg-wood text-ink hover:bg-wood-dark hover:text-cream"
            >
              预约量房
            </Link>
            <Link
              href="/transparent-site"
              className="btn border border-cream/30 text-cream hover:bg-cream/10"
            >
              了解透明工地
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
