import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "装修案例",
  description:
    "晟景装饰装修案例类型展示，包括现代简约、新中式、奶油风、改善型住宅。本页为案例类型展示，后续补充真实案例。",
  alternates: { canonical: "/cases" },
};

const caseTypes = [
  {
    title: "现代简约",
    desc: "线条干净、色彩克制、注重功能。适合刚需住房和小户型，预算相对可控。",
    tags: ["刚需住房", "小户型", "功能优先"],
  },
  {
    title: "新中式",
    desc: "传统元素与现代材质结合，注重意境和留白。适合改善型住房和对东方审美有偏好的业主。",
    tags: ["改善型住房", "东方审美", "材质讲究"],
  },
  {
    title: "奶油风",
    desc: "低饱和度暖色调，柔软材质，整体温馨。适合年轻业主和注重居家氛围的家庭。",
    tags: ["年轻业主", "温馨氛围", "暖色调"],
  },
  {
    title: "改善型住宅",
    desc: "注重空间规划、收纳系统和居住品质。适合换房升级的家庭，对设计细节要求更高。",
    tags: ["换房升级", "收纳系统", "品质优先"],
  },
];

export default function CasesPage() {
  return (
    <>
      <BreadcrumbLd
        items={[
          { name: "首页", path: "/" },
          { name: "装修案例", path: "/cases" },
        ]}
      />
      <section className="section">
        <div className="container-page">
          <nav className="mb-6 text-sm text-ink-muted" aria-label="面包屑">
            <Link href="/" className="hover:text-forest">
              首页
            </Link>
            <span className="mx-2">/</span>
            <span className="text-forest">装修案例</span>
          </nav>

          <div className="mx-auto max-w-3xl">
            <span className="eyebrow">
              <span className="h-px w-8 bg-wood-dark" />
              装修案例
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-forest sm:text-4xl">
              案例类型展示
            </h1>
            <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg">
              以下为晟景装饰可承接的装修风格类型。我们正在整理真实案例，后续会补充小区、面积、户型、风格、施工周期和完工照片。
            </p>
          </div>

          {/* 占位说明 */}
          <div className="mx-auto mt-8 max-w-3xl rounded-xl border border-wood/30 bg-wood/10 p-4 text-sm text-ink-soft">
            <strong className="text-forest">说明：</strong>
            本页为案例类型展示，后续补充真实案例。我们不会虚构客户姓名、小区和评价。
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {caseTypes.map((c) => (
              <div key={c.title} className="card flex flex-col">
                {/* 占位图区域 */}
                <div className="mb-4 flex h-40 items-center justify-center rounded-xl bg-forest-50 text-forest/40">
                  <span className="text-sm">案例图片待补充</span>
                </div>
                <h2 className="text-lg font-semibold text-forest">
                  {c.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {c.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-forest/5 px-3 py-1 text-xs text-forest"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-ink-muted">
              想看正在施工的工地？可以预约实地看工地。
            </p>
            <div className="mt-4">
              <Link href="/contact" className="btn-primary">
                预约看工地
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
