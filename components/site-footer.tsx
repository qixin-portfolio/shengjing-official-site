import Link from "next/link";
import { navLinks, siteConfig, contactInfo } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-forest/10 bg-forest-900 text-cream/80">
      <div className="container-page py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
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
              <br />
              服务区域：{siteConfig.serviceArea}
            </p>
          </div>

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

          <div>
            <h3 className="text-sm font-semibold text-cream">联系我们</h3>
            <ul className="mt-3 space-y-2 text-sm text-cream/70">
              <li>预约量房：{contactInfo.phonePlaceholder}</li>
              <li>微信咨询：{contactInfo.wechatPlaceholder}</li>
              <li>门店地址：{contactInfo.addressNote}</li>
              <li>{contactInfo.serviceHours}</li>
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-cream/50">
              配套产品：{siteConfig.miniProgram.name}
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-cream/10 pt-6 text-xs text-cream/50">
          <p>
            © {year} {siteConfig.name}。本站内容为品牌介绍与装修知识分享，不构成合同承诺。具体服务内容、价格、工期以线下签约为准。
          </p>
        </div>
      </div>
    </footer>
  );
}
