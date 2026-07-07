import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  caseSlugs,
  caseStudies,
  getCaseStudyBySlug,
} from "@/lib/cases";
import { BreadcrumbLd } from "@/components/json-ld";

export function generateStaticParams() {
  return caseSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const item = getCaseStudyBySlug(params.slug);
  if (!item) return {};

  return {
    title: item.title,
    description: item.summary,
    alternates: { canonical: `/cases/${item.slug}` },
  };
}

export default function CaseDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const item = getCaseStudyBySlug(params.slug);
  if (!item) notFound();

  const related = caseStudies.filter((caseItem) => caseItem.slug !== item.slug);
  const fields = [
    ["小区", item.community],
    ["面积", item.area],
    ["户型", item.layout],
    ["装修类型", item.renovationType],
    ["风格方向", item.style],
    ["当前状态", item.currentStatus],
    ["透明工地记录状态", item.transparentRecordStatus],
    ["图片授权状态", item.imageAuthStatus],
    ["业主反馈授权状态", item.ownerFeedbackAuthStatus],
  ];

  return (
    <>
      <BreadcrumbLd
        items={[
          { name: "首页", path: "/" },
          { name: "装修案例", path: "/cases" },
          { name: item.title, path: `/cases/${item.slug}` },
        ]}
      />
      <article className="section">
        <div className="container-page">
          <nav className="mb-6 text-sm text-ink-muted" aria-label="面包屑">
            <Link href="/" className="hover:text-forest">
              首页
            </Link>
            <span className="mx-2">/</span>
            <Link href="/cases" className="hover:text-forest">
              装修案例
            </Link>
            <span className="mx-2">/</span>
            <span className="text-forest">{item.title}</span>
          </nav>

          <div className="mx-auto max-w-3xl">
            <span className="eyebrow">
              <span className="h-px w-8 bg-wood-dark" />
              真实案例资料
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-forest sm:text-4xl">
              {item.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
              {item.summary}
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-forest/10 bg-white p-6 shadow-soft">
            <h2 className="text-lg font-semibold text-forest">案例信息</h2>
            <dl className="mt-5 grid gap-4 sm:grid-cols-2">
              {fields.map(([label, value]) => (
                <div key={label} className="border-b border-forest/10 pb-3">
                  <dt className="text-xs text-ink-muted">{label}</dt>
                  <dd className="mt-1 text-sm font-medium leading-relaxed text-ink">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-wood/30 bg-wood/10 p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-forest">施工重点</h2>
            <ul className="mt-4 space-y-2">
              {item.constructionFocus.map((focus) => (
                <li key={focus} className="flex items-start gap-2 text-sm text-ink-soft">
                  <span className="mt-1 text-wood-dark">·</span>
                  <span>{focus}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-forest/10 bg-cream-50 p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-forest">
              资料补充说明
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              案例资料会在取得图片授权、业主反馈授权和隐私确认后继续补充。当前页面不公开客户姓名、电话、完整门牌号和完整报价明细，也不把效果图写成实景完工图。
            </p>
          </div>

          {related.length > 0 ? (
            <div className="mx-auto mt-12 max-w-4xl">
              <h2 className="text-lg font-semibold text-forest">其他案例</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {related.map((caseItem) => (
                  <Link
                    key={caseItem.slug}
                    href={`/cases/${caseItem.slug}`}
                    className="card block hover:border-wood/40"
                  >
                    <h3 className="text-sm font-semibold text-forest">
                      {caseItem.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                      {caseItem.status}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}

          <div className="mx-auto mt-12 max-w-4xl">
            <Link
              href="/cases"
              className="text-sm font-medium text-wood-dark hover:underline"
            >
              ← 返回装修案例
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
