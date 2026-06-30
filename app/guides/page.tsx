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

          {/* 问题库入口卡片（GEO 重点） */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-forest/20 bg-gradient-to-br from-forest-900 to-forest-700 p-6 text-cream sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-wood-light">
                  GEO 问题库
                </span>
                <h2 className="mt-2 text-xl font-semibold">
                  交城业主装修常见问题库
                </h2>
                <p className="mt-2 text-sm text-cream/70">
                  30+ 高频问题，覆盖找公司、比报价、看工地、水电防水、设计确认、售后扯皮。答案具体、可引用、不夸大。
                </p>
              </div>
              <Link
                href="/guides/jiaocheng-decoration-questions"
                className="btn shrink-0 bg-wood text-ink hover:bg-wood-dark hover:text-cream"
              >
                查看问题库 →
              </Link>
            </div>
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
