import Image from "next/image";
import Link from "next/link";
import { contactInfo, navLinks, siteConfig } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-forest/10 bg-forest-900 text-cream/80">
      <div className="container-page py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* 品牌 */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 font-semibold text-cream">
              <Image
                src="/images/brand/shengjing-logo.jpg"
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 shrink-0 rounded-full object-cover"
              />
              <span className="flex flex-col leading-none">
                <span className="text-lg">{siteConfig.name}</span>
                <span className="mt-1 text-xs font-normal text-cream/75">
                  交城 · 透明工地
                </span>
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-cream/70">
              {siteConfig.tagline}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-cream/75">
              服务区域：{siteConfig.serviceArea}
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
                    className="text-cream/70 transition-colors hover:text-clay-light"
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
              {contactInfo.phones.map((phone) => <li key={phone}><a href={"tel:" + phone} className="hover:text-clay-light">电话：{phone}</a></li>)}
              <li><Link href="/contact/" className="hover:text-clay-light">微信咨询二维码</Link></li>
              <li><Link href="/cases/#douyin" className="hover:text-clay-light">抖音视频与案例</Link></li>
              <li>地址：{contactInfo.addressNote}</li>
              <li>到店建议提前预约</li>
            </ul>
          </div>

          {/* 透明工地 */}
          <div>
            <h3 className="text-sm font-semibold text-cream">透明工地</h3>
            <p className="mt-3 text-xs leading-relaxed text-cream/60">
              {siteConfig.miniProgram.name}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-cream/75">
              {siteConfig.miniProgram.desc}
            </p>
            <div className="mt-4">
              <Link
                href="/transparent-site"
                className="text-xs text-clay-light transition-colors hover:text-clay"
              >
                了解透明工地 →
              </Link>
            </div>
          </div>
        </div>

        {/* 底部：版权 + 备案 */}
        <div className="mt-10 border-t border-cream/20 pt-6">
          <p className="text-xs leading-6 text-cream/75">
            © {year} {siteConfig.name}。装修项目、价格、工期和质保安排，以双方签署的合同为准。
          </p>
          <div className="mt-3 text-xs leading-6 text-cream/75">
            <span>备案号：晋ICP备2026008726号-1</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
