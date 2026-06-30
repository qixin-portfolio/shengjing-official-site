import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { BreadcrumbLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "透明工地",
  description:
    "晟景透明工地小程序，通过工长日报、老板审核、业主查看，把装修进度、现场照片、设计确认和施工记录沉淀为可查看的工地档案，减少扯皮和不信任。",
  alternates: { canonical: "/transparent-site" },
};

const flow = [
  {
    step: "01",
    title: "工长提交日报",
    desc: "工长每天记录施工内容、人员和进度，上传现场照片。",
  },
  {
    step: "02",
    title: "老板审核",
    desc: "管理人员审核日报内容和照片，确认无误后再展示给业主。",
  },
  {
    step: "03",
    title: "业主手机查看",
    desc: "业主在手机上查看施工进度、现场照片和关键节点。",
  },
  {
    step: "04",
    title: "设计方案确认",
    desc: "设计图和变更可线上确认，留痕可追溯。",
  },
  {
    step: "05",
    title: "施工过程留痕",
    desc: "从开工到验收，记录沉淀为可长期保存的工地档案。",
  },
];

const benefits = [
  {
    title: "减少信息差",
    desc: "业主不用天天跑工地，也能知道做到哪一步、有没有问题。",
  },
  {
    title: "关键节点可回看",
    desc: "水电封槽前、防水做完后、瓦工贴砖后，照片和记录都在。",
  },
  {
    title: "出了问题能说清",
    desc: "哪天做了什么、谁确认的，记录可追溯，责任清楚。",
  },
  {
    title: "装修档案长期保存",
    desc: "设计资料、施工记录、验收记录、完工照片可以长期保存。",
  },
];

export default function TransparentSitePage() {
  return (
    <>
      <BreadcrumbLd
        items={[
          { name: "首页", path: "/" },
          { name: "透明工地", path: "/transparent-site" },
        ]}
      />
      <section className="section">
        <div className="container-page">
          <nav className="mb-6 text-sm text-ink-muted" aria-label="面包屑">
            <Link href="/" className="hover:text-forest">
              首页
            </Link>
            <span className="mx-2">/</span>
            <span className="text-forest">透明工地</span>
          </nav>

          <div className="mx-auto max-w-3xl">
            <span className="eyebrow">
              <span className="h-px w-8 bg-wood-dark" />
              透明工地
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-forest sm:text-4xl">
              什么是透明工地？为什么装修越来越需要它
            </h1>
            <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg">
              透明工地不是营销概念，而是一套让装修过程可查看、可追溯的流程。晟景透明工地小程序通过工长日报、老板审核、业主查看，把装修进度、现场照片、设计确认和施工记录沉淀为工地档案，让业主不用天天跑工地，也能了解施工进展。
            </p>
          </div>

          {/* 流程 */}
          <div className="mt-16">
            <h2 className="section-title text-center">透明工地怎么运作</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {flow.map((f) => (
                <div key={f.step} className="relative">
                  <div className="rounded-2xl border border-forest/10 bg-white p-5 shadow-soft">
                    <span className="text-2xl font-bold text-wood-dark">
                      {f.step}
                    </span>
                    <h3 className="mt-2 text-sm font-semibold text-forest">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 价值 */}
          <div className="mt-16">
            <h2 className="section-title text-center">
              为什么这能减少扯皮和不信任
            </h2>
            <p className="section-subtitle text-center">
              装修扯皮大多来自信息差。过程有记录，责任就清楚。
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {benefits.map((b) => (
                <div key={b.title} className="card">
                  <h3 className="text-base font-semibold text-forest">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 小程序说明 */}
          <div className="mt-16 rounded-2xl border border-wood/30 bg-wood/10 p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-forest">
              {siteConfig.miniProgram.name}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              {siteConfig.miniProgram.desc}。工长提交日报后，由老板或管理人员审核，再展示给业主。业主在手机上查看施工进度、现场照片和关键节点，设计方案可以线上确认留痕。
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                预约量房
              </Link>
              <Link href="/guides" className="btn-secondary">
                查看装修知识
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
