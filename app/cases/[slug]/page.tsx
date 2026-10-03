import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  caseSlugs,
  caseStudies,
  getCaseStudyBySlug,
} from "@/lib/cases";
import { BreadcrumbLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/site";

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
  const cover = item.images?.[0];
  const url = `${siteConfig.url}/cases/${item.slug}/`;

  return {
    title: item.title,
    description: item.summary,
    alternates: { canonical: `/cases/${item.slug}` },
    ...(cover ? {
      openGraph: {
        title: item.title,
        description: item.summary,
        url,
        siteName: siteConfig.name,
        type: "website",
        images: [{ url: siteConfig.url + cover.src, width: cover.width, height: cover.height, alt: cover.alt }],
      },
      twitter: { card: "summary_large_image", title: item.title, description: item.summary, images: [siteConfig.url + cover.src] },
    } : {}),
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
    ["施工记录", item.transparentRecordStatus],
    ["照片说明", item.imageAuthStatus],
    ["业主反馈", item.ownerFeedbackAuthStatus],
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
            <h1 className="text-3xl font-bold leading-tight text-forest sm:text-4xl">
              {item.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
              {item.summary}
            </p>
          </div>

          {item.images && item.images.length > 0 && (
            <section className="mx-auto mt-10 max-w-5xl" aria-labelledby="project-images-title">
              <div className="border-t border-forest/20 pt-6">
                <h2 id="project-images-title" className="text-xl font-semibold text-forest">{item.imageLabel ?? "项目图片"}</h2>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-ink-soft">{item.imageAuthStatus}</p>
              </div>
              <div className="mt-6 grid gap-x-6 gap-y-8 sm:grid-cols-2">
                {item.images.map((image, index) => (
                  <figure key={image.src}>
                    <a href={image.src} target="_blank" rel="noopener noreferrer" aria-label={`查看大图：${image.caption}（新窗口）`} className="block rounded-lg">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        priority={index === 0}
                        sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1100px) 46vw, 500px"
                        className="h-auto w-full rounded-lg"
                      />
                    </a>
                    <figcaption className="mt-3 flex items-center justify-between gap-4 text-sm leading-6 text-ink-soft">
                      <span>{image.caption}</span>
                      <a href={image.src} target="_blank" rel="noopener noreferrer" aria-label={`查看大图：${image.caption}（新窗口）`} className="inline-flex min-h-11 shrink-0 items-center text-forest underline underline-offset-4">查看大图</a>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          )}

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
              照片与后续资料
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              {item.images?.length
                ? "施工日报、验收记录和业主反馈仍待授权后补充，图片不能替代现场验收。客户姓名、电话、门牌和完整报价不公开。"
                : "照片和业主反馈取得授权后再补充。客户姓名、电话、门牌和完整报价不公开；设计效果图会注明，方便与完工照片区分。"}
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
