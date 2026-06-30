import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/lib/guides";
import { BreadcrumbLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "装修知识",
  description:
    "晟景装饰装修知识库，回答交城业主真实搜索问题：交城装修公司怎么选、为什么要看工地进度、新房装修前确认什么。",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  return (
    <>
      <BreadcrumbLd
        items={[
          { name: "首页", path: "/" },
          { name: "装修知识", path: "/guides" },
        ]}
      />
      <section className="section">
        <div className="container-page">
          <nav className="mb-6 text-sm text-ink-muted" aria-label="面包屑">
            <Link href="/" className="hover:text-forest">
              首页
            </Link>
            <span className="mx-2">/</span>
            <span className="text-forest">装修知识</span>
          </nav>

          <div className="mx-auto max-w-3xl">
            <span className="eyebrow">
              <span className="h-px w-8 bg-wood-dark" />
              装修知识 · GEO 内容
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-forest sm:text-4xl">
              回答交城业主真实搜索问题
            </h1>
            <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg">
              这些文章不是软文，是我们根据交城业主常问的问题整理的判断标准和可执行步骤。如果你正在选装修公司或准备装修，可以先看看。
            </p>
          </div>

          <div className="mt-12 grid gap-6">
            {guides.map((g) => (
              <article
                key={g.slug}
                className="card flex flex-col sm:flex-row sm:items-start sm:gap-6"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {g.keywords.slice(0, 3).map((k) => (
                      <span
                        key={k}
                        className="rounded-full bg-forest/5 px-2.5 py-0.5 text-xs text-forest"
                      >
                        {k}
                      </span>
                    ))}
                  </div>
                  <h2 className="mt-3 text-lg font-semibold text-forest">
                    <Link
                      href={`/guides/${g.slug}`}
                      className="hover:underline"
                    >
                      {g.title}
                    </Link>
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {g.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-ink-muted">
                    <time dateTime={g.updatedAt}>
                      更新于 {g.updatedAt}
                    </time>
                    <Link
                      href={`/guides/${g.slug}`}
                      className="font-medium text-wood-dark hover:underline"
                    >
                      阅读全文 →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-wood/30 bg-wood/10 p-6 text-center sm:p-8">
            <h2 className="text-lg font-semibold text-forest">
              还有其他装修问题？
            </h2>
            <p className="mt-2 text-sm text-ink-soft">
              欢迎预约量房或微信咨询，我们面对面聊。
            </p>
            <div className="mt-5">
              <Link href="/contact" className="btn-primary">
                联系我们
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
