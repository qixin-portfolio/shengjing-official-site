import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { guides, guideSlugs, getGuideBySlug } from "@/lib/guides";
import { siteConfig } from "@/lib/site";
import { BreadcrumbLd } from "@/components/json-ld";

export function generateStaticParams() {
  return guideSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const guide = getGuideBySlug(params.slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    keywords: guide.keywords,
    alternates: { canonical: `/guides/${guide.slug}` },
    openGraph: {
      type: "article",
      title: guide.title,
      description: guide.description,
      publishedTime: guide.publishedAt,
      modifiedTime: guide.updatedAt,
      authors: [siteConfig.name],
    },
  };
}

export default function GuideDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) notFound();

  const related = guides.filter((g) => g.slug !== guide.slug).slice(0, 2);

  return (
    <>
      <BreadcrumbLd
        items={[
          { name: "首页", path: "/" },
          { name: "装修知识", path: "/guides" },
          { name: guide.title, path: `/guides/${guide.slug}` },
        ]}
      />
      <article className="section">
        <div className="container-page">
          <nav className="mb-6 text-sm text-ink-muted" aria-label="面包屑">
            <Link href="/" className="hover:text-forest">
              首页
            </Link>
            <span className="mx-2">/</span>
            <Link href="/guides" className="hover:text-forest">
              装修知识
            </Link>
            <span className="mx-2">/</span>
            <span className="text-forest">{guide.title}</span>
          </nav>

          <div className="mx-auto max-w-3xl">
            <div className="flex flex-wrap gap-2">
              {guide.keywords.map((k) => (
                <span
                  key={k}
                  className="rounded-full bg-forest/5 px-2.5 py-0.5 text-xs text-forest"
                >
                  {k}
                </span>
              ))}
            </div>
            <h1 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-forest sm:text-3xl">
              {guide.title}
            </h1>
            <div className="mt-4 flex items-center gap-4 text-xs text-ink-muted">
              <span>晟景装饰</span>
              <time dateTime={guide.publishedAt}>
                发布于 {guide.publishedAt}
              </time>
              <time dateTime={guide.updatedAt}>
                更新于 {guide.updatedAt}
              </time>
            </div>

            <p className="mt-6 border-l-4 border-wood bg-wood/10 px-4 py-3 text-sm leading-relaxed text-ink-soft">
              {guide.excerpt}
            </p>

            <div className="mt-8 prose-cn">
              {guide.body.map((block, idx) => {
                if (block.type === "h2") {
                  return <h2 key={idx}>{block.text}</h2>;
                }
                if (block.type === "p") {
                  return <p key={idx}>{block.text}</p>;
                }
                return (
                  <ul key={idx}>
                    {block.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                );
              })}
            </div>

            {/* 底部 CTA */}
            <div className="mt-10 rounded-2xl border border-wood/30 bg-wood/10 p-5 sm:p-6">
              <p className="text-sm font-medium text-forest">
                想了解晟景装饰的透明工地服务？
              </p>
              <p className="mt-1 text-xs text-ink-muted">
                预约量房，看看我们的工地怎么管。
              </p>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <Link href="/contact" className="btn-primary">
                  预约量房
                </Link>
                <Link href="/transparent-site" className="btn-secondary">
                  了解透明工地
                </Link>
              </div>
            </div>
          </div>

          {/* 相关文章 */}
          {related.length > 0 && (
            <div className="mx-auto mt-16 max-w-3xl">
              <h2 className="text-lg font-semibold text-forest">
                相关文章
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/guides/${r.slug}`}
                    className="card block hover:border-wood/40"
                  >
                    <h3 className="text-sm font-semibold text-forest">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                      {r.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mx-auto mt-12 max-w-3xl">
            <Link
              href="/guides"
              className="text-sm font-medium text-wood-dark hover:underline"
            >
              ← 返回装修知识列表
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
