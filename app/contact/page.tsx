import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { BreadcrumbLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "联系我们",
  description:
    "预约量房、微信咨询、电话咨询、到店沟通。晟景装饰服务山西交城及周边，具体地址请以线下门店或客服确认为准。",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbLd
        items={[
          { name: "首页", path: "/" },
          { name: "联系我们", path: "/contact" },
        ]}
      />

      {/* Hero */}
      <section className="border-b border-forest/10 bg-gradient-to-b from-cream-50 to-cream">
        <div className="container-page py-12 sm:py-16">
          <nav className="mb-8 text-sm text-ink-muted" aria-label="面包屑">
            <Link href="/" className="hover:text-forest">
              首页
            </Link>
            <span className="mx-2">/</span>
            <span className="text-forest">联系我们</span>
          </nav>

          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow justify-center">
              <span className="h-px w-8 bg-wood-dark" />
              联系我们
              <span className="h-px w-8 bg-wood-dark" />
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-forest sm:text-4xl">
              预约量房 · 咨询装修
            </h1>
            <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
              不管最后选不选晟景，建议先了解透明工地。我们可以根据你的户型、需求和预算，给出初步方案和建议。
            </p>
          </div>
        </div>
      </section>

      {/* 四个咨询路径 */}
      <section className="section">
        <div className="container-page">
          <div className="grid gap-5 sm:grid-cols-2">
            {/* 预约量房 —— 主 CTA */}
            <div className="rounded-2xl bg-forest-900 p-6 text-cream shadow-card sm:row-span-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-wood text-ink">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
              </div>
              <h2 className="mt-4 text-xl font-semibold">预约量房</h2>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">
                填写需求和联系方式，我们安排量房时间。量房后给出初步方案和报价建议。
              </p>
              <div className="mt-5 space-y-2 text-sm text-cream/80">
                <p>· 服务区域：{siteConfig.serviceArea}</p>
                <p>· 服务时间：建议提前预约，避免跑空</p>
                <p>· 量房后 3 个工作日内出初步方案</p>
              </div>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="btn bg-wood text-ink hover:bg-wood-dark hover:text-cream"
                >
                  预约量房
                </Link>
              </div>
            </div>

            {/* 微信咨询 */}
            <div className="card">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-wood/20 text-wood-dark">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.5 4C4.91 4 2 6.46 2 9.5c0 1.61.83 3.06 2.17 4.06L3.5 16l2.5-1.5c.8.25 1.65.38 2.5.38.34 0 .67-.02 1-.06-.32-.6-.5-1.27-.5-1.97C9 10.69 11.69 8.5 15 8.5c.34 0 .67.03 1 .08C15.66 5.94 12.39 4 8.5 4zM6.5 8a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zm4 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zM15 10c-3.31 0-6 2.24-6 5 0 1.43.71 2.72 1.83 3.62L10 21l2-1c.94.28 1.95.43 3 .43 3.31 0 6-2.24 6-5s-2.69-5.43-6-5.43zm-2 3a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zm4 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z" />
                </svg>
              </div>
              <h2 className="mt-4 text-lg font-semibold text-forest">微信咨询</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                添加微信咨询装修问题，发送户型图可以更快给出建议。
              </p>
              <div className="mt-4 flex h-28 items-center justify-center rounded-xl border border-dashed border-wood/30 bg-wood/5">
                <div className="text-center">
                  <p className="text-xs font-medium text-wood-dark">扫码添加微信</p>
                  <p className="mt-1 text-[11px] text-ink-muted">二维码待客服确认后上线</p>
                </div>
              </div>
            </div>

            {/* 电话咨询 */}
            <div className="card">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest/10 text-forest">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h2 className="mt-4 text-lg font-semibold text-forest">电话咨询</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                电话咨询请通过微信或到店预约，我们会在确认联系方式后更新。
              </p>
              <div className="mt-4 rounded-xl bg-cream-50 p-4">
                <p className="text-sm font-medium text-forest">电话号码</p>
                <p className="mt-1 text-xs text-ink-muted">
                  具体号码请以线下门店或客服确认为准
                </p>
              </div>
            </div>
          </div>

          {/* 服务区域 + 到店沟通 */}
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div className="card">
              <h2 className="text-lg font-semibold text-forest">服务区域</h2>
              <div className="mt-4 flex items-center gap-4 rounded-xl bg-gradient-to-br from-forest/10 to-wood/10 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-forest text-cream">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-base font-semibold text-forest">
                    {siteConfig.serviceArea}
                  </p>
                  <p className="text-xs text-ink-muted">交城本地团队，响应更及时</p>
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="text-lg font-semibold text-forest">到店沟通</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                建议提前预约，避免跑空。到店可以看材料样板、聊方案。
              </p>
              <div className="mt-4 rounded-xl bg-cream-50 p-4">
                <p className="text-sm font-medium text-forest">门店地址</p>
                <p className="mt-1 text-xs text-ink-muted">
                  具体地址请以线下门店或客服确认为准
                </p>
              </div>
            </div>
          </div>

          {/* 量房准备清单 */}
          <div className="mt-12 rounded-2xl border border-forest/10 bg-white p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-forest">
              预约量房前，建议准备这些
            </h2>
            <p className="mt-2 text-sm text-ink-muted">
              准备越充分，量房后出的方案越贴近你的需求。
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-cream-50 p-4">
                <h3 className="text-sm font-semibold text-forest">基本资料</h3>
                <ul className="mt-2 space-y-1 text-xs text-ink-soft">
                  <li>· 户型图（开发商给的有尺寸版）</li>
                  <li>· 房屋现状照片（毛坯/老房）</li>
                  <li>· 小区名称和地址</li>
                </ul>
              </div>
              <div className="rounded-xl bg-cream-50 p-4">
                <h3 className="text-sm font-semibold text-forest">需求清单</h3>
                <ul className="mt-2 space-y-1 text-xs text-ink-soft">
                  <li>· 家庭成员和居住需求</li>
                  <li>· 风格倾向（可发参考图）</li>
                  <li>· 收纳重点和特殊需求</li>
                </ul>
              </div>
              <div className="rounded-xl bg-cream-50 p-4">
                <h3 className="text-sm font-semibold text-forest">预算范围</h3>
                <ul className="mt-2 space-y-1 text-xs text-ink-soft">
                  <li>· 总预算区间（不必精确）</li>
                  <li>· 哪些项目优先投入</li>
                  <li>· 哪些可以省</li>
                </ul>
              </div>
              <div className="rounded-xl bg-cream-50 p-4">
                <h3 className="text-sm font-semibold text-forest">时间安排</h3>
                <ul className="mt-2 space-y-1 text-xs text-ink-soft">
                  <li>· 期望开工时间</li>
                  <li>· 期望入住时间</li>
                  <li>· 是否需要临时住处</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-xs text-ink-muted">
              没准备齐也没关系，可以先预约量房，现场沟通中再明确。
            </p>
          </div>

          {/* 底部透明工地 CTA */}
          <div className="mt-12 rounded-2xl bg-forest-900 p-6 text-cream sm:p-8">
            <h2 className="text-lg font-semibold">
              准备装修，先看看工地怎么管。
            </h2>
            <p className="mt-3 text-sm text-cream/70">
              不管最后选不选晟景，建议先了解透明工地——装修过程看得见，比事后扯皮强。
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/transparent-site"
                className="btn bg-wood text-ink hover:bg-wood-dark hover:text-cream"
              >
                了解透明工地
              </Link>
              <Link
                href="/guides"
                className="btn border border-cream/30 text-cream hover:bg-cream/10"
              >
                查看装修知识
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
