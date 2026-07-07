import type { Metadata } from "next";
import Link from "next/link";
import { contactInfo, siteConfig } from "@/lib/site";
import { BreadcrumbLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "联系我们",
  description:
    "预约量房、微信咨询、电话咨询、到店沟通。晟景装饰服务山西交城、太原、文水、清徐等周边县市，建议提前预约避免跑空。",
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
              不管最后选不选晟景，建议先了解透明工地。你可以先电话或微信沟通房屋地址、面积、户型、预算和装修需求，再预约量房或到店看材料。
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
                <p>· 营业时间：{contactInfo.serviceHours}</p>
                <p>· 上门规则：电话邀约</p>
                <p>· {contactInfo.visitRule}</p>
              </div>
              <div className="mt-6">
                <Link
                  href={`tel:${contactInfo.phones[0]}`}
                  className="btn bg-wood text-ink hover:bg-wood-dark hover:text-cream"
                >
                  电话预约
                </Link>
              </div>
            </div>

            {/* 微信咨询 */}
            <div id="wechat" className="card scroll-mt-24">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-wood/20 text-wood-dark">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.5 4C4.91 4 2 6.46 2 9.5c0 1.61.83 3.06 2.17 4.06L3.5 16l2.5-1.5c.8.25 1.65.38 2.5.38.34 0 .67-.02 1-.06-.32-.6-.5-1.27-.5-1.97C9 10.69 11.69 8.5 15 8.5c.34 0 .67.03 1 .08C15.66 5.94 12.39 4 8.5 4zM6.5 8a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zm4 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zM15 10c-3.31 0-6 2.24-6 5 0 1.43.71 2.72 1.83 3.62L10 21l2-1c.94.28 1.95.43 3 .43 3.31 0 6-2.24 6-5s-2.69-5.43-6-5.43zm-2 3a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zm4 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z" />
                </svg>
              </div>
              <h2 className="mt-4 text-lg font-semibold text-forest">微信咨询</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                微信号与手机号一致。发送户型图、房屋面积和装修需求，可以更快进入初步沟通。
              </p>
              <div className="mt-4 rounded-xl border border-wood/30 bg-wood/5 p-4">
                <p className="text-sm font-semibold text-forest">
                  微信：{contactInfo.wechats.join(" / ")}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                  当前不展示二维码，避免误用旧码；请手动搜索微信号添加。
                </p>
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
                电话适合先确认能否上门、是否方便看现场、旧房翻新是否需要提前沟通拆改和保护。
              </p>
              <div className="mt-4 rounded-xl bg-cream-50 p-4">
                <p className="text-sm font-medium text-forest">
                  {contactInfo.phones.join(" / ")}
                </p>
                <p className="mt-1 text-xs text-ink-muted">
                  营业时间：{contactInfo.serviceHours}
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
                  <p className="text-xs text-ink-muted">具体是否上门，以电话邀约沟通为准</p>
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
                  {contactInfo.address}
                </p>
              </div>
            </div>
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
