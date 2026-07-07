import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "装修服务",
  description:
    "晟景装饰提供交城新房装修、旧房翻新、整装服务、全屋定制、施工管理和透明工地服务，覆盖本地业主常见装修需求。",
  alternates: { canonical: "/services" },
};

const serviceList = [
  {
    title: "整装服务",
    desc: "设计、施工、材料、定制一站对接，减少多头沟通。适合希望省心、不想自己跑工地的业主。",
    points: ["设计 + 施工 + 材料一站对接", "报价分项列明", "施工进度可查看"],
  },
  {
    title: "定制设计",
    desc: "根据家庭需求、户型和预算出方案，风格不只是效果图，更要能落地。",
    points: ["量房后出初步方案", "风格、材质、色彩可沟通", "设计变更线上确认留痕"],
  },
  {
    title: "新房装修",
    desc: "毛坯房从量房到验收的全流程服务，适合首次装修的业主。",
    points: ["水电、防水、瓦工分阶段确认", "关键节点照片留档", "验收分项进行"],
  },
  {
    title: "旧房 / 老房翻新",
    desc: "旧房水电改造、墙面重做、空间优化。旧房翻新更依赖过程记录，隐蔽工程尤其重要。",
    points: ["原房水电排查", "防水和排水提前确认", "隐蔽工程封槽前留档"],
  },
  {
    title: "施工管理",
    desc: "分阶段施工、节点确认、过程留痕。工长日报 + 老板审核 + 业主查看。",
    points: ["工长日报 + 现场照片", "进度节点标注", "透明工地小程序查看"],
  },
  {
    title: "售后沟通",
    desc: "本地团队售后响应更及时，装修档案长期保存，不是装完就找不到人。",
    points: ["本地团队响应及时", "装修档案长期保存", "售后问题可回看施工记录"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbLd
        items={[
          { name: "首页", path: "/" },
          { name: "装修服务", path: "/services" },
        ]}
      />
      <section className="section">
        <div className="container-page">
          <nav className="mb-6 text-sm text-ink-muted" aria-label="面包屑">
            <Link href="/" className="hover:text-forest">
              首页
            </Link>
            <span className="mx-2">/</span>
            <span className="text-forest">装修服务</span>
          </nav>

          <div className="mx-auto max-w-3xl">
            <span className="eyebrow">
              <span className="h-px w-8 bg-wood-dark" />
              装修服务
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-forest sm:text-4xl">
              覆盖交城业主常见需求的装修服务
            </h1>
            <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg">
              从新房装修到旧房翻新，从整装到全屋定制，晟景装饰的服务都围绕一个核心：先把施工范围、报价、材料和过程记录说清楚。所有服务都可配合透明工地小程序，开工后手机查看已审核进度。
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceList.map((s) => (
              <div key={s.title} className="card flex flex-col">
                <h2 className="text-lg font-semibold text-forest">
                  {s.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {s.desc}
                </p>
                <ul className="mt-4 space-y-1.5 text-xs text-ink-soft">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span
                        className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-wood-dark"
                        aria-hidden="true"
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-forest-900 p-6 text-center text-cream sm:p-8">
            <h2 className="text-xl font-semibold sm:text-2xl">
              不确定选哪个服务？先预约量房。
            </h2>
            <p className="mt-3 text-sm text-cream/70 sm:text-base">
              量房后我们会根据你的户型、需求和预算，给出初步方案和建议。
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="btn bg-wood text-ink hover:bg-wood-dark hover:text-cream"
              >
                预约量房
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
