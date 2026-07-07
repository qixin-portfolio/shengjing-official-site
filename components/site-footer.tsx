import Link from "next/link";
import { navLinks, siteConfig, contactInfo } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-forest/10 bg-forest-900 text-cream/80">
      <div className="container-page py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* 品牌 */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 font-semibold text-cream">
              <span
                aria-hidden="true"
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-wood text-sm font-bold text-ink"
              >
                晟
              </span>
              <span className="text-lg">{siteConfig.name}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-cream/70">
              {siteConfig.tagline}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-cream/50">
              服务区域：{siteConfig.serviceArea}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-cream/50">
              官网域名：{new URL(siteConfig.url).hostname}
            </p>
          </div>

          {/* 快速导航 */}
          <div>
            <h3 className="text-sm font-semibold text-cream">快速导航</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/70 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h3 className="text-sm font-semibold text-cream">联系方式</h3>
            <ul className="mt-3 space-y-2 text-sm text-cream/70">
              <li>预约量房</li>
              <li>电话：{contactInfo.phones.join(" / ")}</li>
              <li>微信：{contactInfo.wechats.join(" / ")}</li>
              <li>营业时间：{contactInfo.serviceHours}</li>
              <li>到店：{contactInfo.visitRule}</li>
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-cream/50">
              地址：{contactInfo.address}
            </p>
          </div>

          {/* 透明工地 */}
          <div>
            <h3 className="text-sm font-semibold text-cream">透明工地</h3>
            <p className="mt-3 text-xs leading-relaxed text-cream/60">
              {siteConfig.miniProgram.name}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-cream/50">
              {siteConfig.miniProgram.desc}
            </p>
            <div className="mt-4">
              <Link
                href="/transparent-site"
                className="text-xs text-wood-light transition-colors hover:text-wood"
              >
                了解透明工地 →
              </Link>
            </div>
          </div>
        </div>

        {/* 底部：版权 + 备案信息 */}
        <div className="mt-10 border-t border-cream/10 pt-6">
          <p className="text-xs text-cream/50">
            © {year} {siteConfig.name}。本站内容为品牌介绍与装修知识分享，不构成合同承诺。具体服务内容、价格、工期以线下签约为准。
          </p>
          <div className="mt-3 flex flex-col gap-2 text-xs text-cream/40 sm:flex-row sm:items-center sm:gap-4">
            <span>
              备案号：{contactInfo.icp || "需补充备案号"}
            </span>
            <span className="hidden sm:inline text-cream/20">|</span>
            <span>
              不使用无法证明的排名、满意度和绝对化宣传
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
