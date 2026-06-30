import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, contactInfo } from "@/lib/site";
import { BreadcrumbLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "联系我们",
  description:
    "预约量房、微信咨询、电话咨询。晟景装饰服务山西交城及周边，具体地址请以线下门店或客服确认为准。",
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
      <section className="section">
        <div className="container-page">
          <nav className="mb-6 text-sm text-ink-muted" aria-label="面包屑">
            <Link href="/" className="hover:text-forest">
              首页
            </Link>
            <span className="mx-2">/</span>
            <span className="text-forest">联系我们</span>
          </nav>

          <div className="mx-auto max-w-3xl">
            <span className="eyebrow">
              <span className="h-px w-8 bg-wood-dark" />
              联系我们
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-forest sm:text-4xl">
              预约量房 / 咨询装修
            </h1>
            <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg">
              欢迎预约量房或咨询装修。我们可以根据你的户型、需求和预算，给出初步方案和建议。建议提前预约，避免跑空。
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl grid gap-6 sm:grid-cols-2">
            {/* 预约量房 */}
            <div className="card">
              <h2 className="text-lg font-semibold text-forest">
                预约量房
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                填写你的需求和联系方式，我们会安排量房时间。量房后给出初步方案和报价建议。
              </p>
              <div className="mt-4 rounded-lg bg-cream-50 p-3 text-xs text-ink-soft">
                <p>
                  <strong className="text-forest">服务区域：</strong>
                  {siteConfig.serviceArea}
                </p>
                <p className="mt-1">
                  <strong className="text-forest">服务时间：</strong>
                  {contactInfo.serviceHours}
                </p>
              </div>
            </div>

            {/* 微信咨询 */}
            <div className="card">
              <h2 className="text-lg font-semibold text-forest">
                微信咨询
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                添加微信咨询装修问题，发送户型图可以更快给出建议。
              </p>
              <div className="mt-4 flex h-32 items-center justify-center rounded-lg border border-dashed border-forest/20 bg-cream-50">
                <p className="text-xs text-ink-muted">
                  微信二维码待补充
                  <br />
                  {contactInfo.wechatPlaceholder}
                </p>
              </div>
            </div>

            {/* 电话咨询 */}
            <div className="card">
              <h2 className="text-lg font-semibold text-forest">
                电话咨询
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                电话咨询请以线下门店或客服确认为准，我们会在确认联系方式后更新。
              </p>
              <div className="mt-4 rounded-lg bg-cream-50 p-3 text-xs text-ink-soft">
                <p>
                  <strong className="text-forest">电话：</strong>
                  {contactInfo.phonePlaceholder}
                </p>
              </div>
            </div>

            {/* 服务区域 */}
            <div className="card">
              <h2 className="text-lg font-semibold text-forest">
                服务区域
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {siteConfig.serviceArea}
              </p>
              <div className="mt-4 rounded-lg bg-cream-50 p-3 text-xs text-ink-soft">
                <p>
                  <strong className="text-forest">门店地址：</strong>
                  {contactInfo.addressNote}
                </p>
                <p className="mt-1">
                  我们不会在此写虚假地址。具体地址请以线下门店或客服确认为准。
                </p>
              </div>
            </div>
          </div>

          {/* 底部说明 */}
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl bg-forest-900 p-6 text-cream sm:p-8">
            <h2 className="text-lg font-semibold">
              准备装修，先看看工地怎么管。
            </h2>
            <p className="mt-3 text-sm text-cream/70">
              不管最后选不选晟景，建议你都先了解"透明工地"——装修过程看得见，比事后扯皮强。
            </p>
            <div className="mt-5">
              <Link
                href="/transparent-site"
                className="btn bg-wood text-ink hover:bg-wood-dark hover:text-cream"
              >
                了解透明工地
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
