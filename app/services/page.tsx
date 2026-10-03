import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbLd } from "@/components/json-ld";
import { BrandShowcase } from "@/components/brand-showcase";

export const metadata: Metadata = {
  title: "装修服务",
  description:
    "了解晟景装饰的别墅、大宅、精装、设计、施工及全屋定制服务，查看门店代理品牌。量房后确认方案、报价、材料与工期。",
  alternates: { canonical: "/services" },
};

const serviceList = [
  {
    title: "别墅与大宅",
    desc: "先看房屋和家庭需求，再讨论各层布局、动线、设备与收纳，按现场条件确认施工范围。",
    points: ["量房后讨论空间布局", "材料与定制一起选配", "施工范围分项确认"],
  },
  {
    title: "精装服务",
    desc: "从方案到材料、施工与安装逐项安排。已经交付的精装房，先检查现状，再确认调整内容。",
    points: ["设计与材料协调", "安装尺寸提前核对", "费用与工期按项目确认"],
  },
  {
    title: "整装服务",
    desc: "一起安排设计、材料、施工和定制，具体包含的项目写进报价单。",
    points: ["设计、施工、材料一起安排", "报价分项列明", "施工进度可查看"],
  },
  {
    title: "定制设计",
    desc: "量房后按预算和居住需求设计，讨论布局、材质、配色和收纳。",
    points: ["量房后出初步方案", "风格、材质、色彩可沟通", "设计修改保存确认记录"],
  },
  {
    title: "新房装修",
    desc: "从毛坯房开始，依次确认设计、报价、材料和施工，再分阶段验收。",
    points: ["水电、防水、瓦工分阶段确认", "关键节点照片留档", "验收分项进行"],
  },
  {
    title: "老房翻新",
    desc: "先检查原有水电、墙面和防水，确定哪些拆、哪些留，再安排更新和施工。",
    points: ["原房水电排查", "隐蔽工程封槽前留档", "保存整改前后的照片"],
  },
  {
    title: "施工管理",
    desc: "工长上传日报和照片，管理人员审核后，业主可以在手机上看进度。",
    points: ["工长日报 + 现场照片", "进度节点标注", "透明工地小程序查看"],
  },
  {
    title: "售后沟通",
    desc: "完工后可以联系本地团队，或用小程序提交报修。讨论维修时，可对照已有的施工资料。",
    points: ["本地团队对接售后", "已归档资料可继续查看", "售后问题可回看施工记录"],
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
              别墅、大宅、精装，从设计到施工
            </h1>
            <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg">
              房子是毛坯还是旧房，想整装还是半包，可以先和我们聊聊。量房后确认方案和报价；开工后，已发布的日报和现场照片可以用手机查看。
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
              还没确定怎么装？可以先约量房。
            </h2>
            <p className="mt-3 text-sm text-cream/70 sm:text-base">
              看过现场，再按户型、预算和你的想法讨论初步方案。
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
      <BrandShowcase />
    </>
  );
}
