import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaqPageLd } from "@/components/json-ld";
import { BrandShowcase } from "@/components/brand-showcase";
import { DouyinShowcase } from "@/components/douyin-showcase";
import { caseStudies } from "@/lib/cases";
import { contactInfo, homeFaqs, siteConfig } from "@/lib/site";

const homeTitle = "晟景装饰｜交城本地装修公司｜透明工地";
const homeDescription =
  "晟景装饰在交城提供别墅、大宅、精装、设计与施工服务，也承接旧房翻新和全屋定制。施工日报和现场照片审核后，可在透明工地小程序查看。";
const homeUrl = siteConfig.url + "/";
const homeOgImage = siteConfig.url + "/images/home/storefront-concept.jpg";

export const metadata: Metadata = {
  title: homeTitle,
  description: homeDescription,
  alternates: { canonical: homeUrl },
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: homeUrl,
    siteName: siteConfig.name,
    type: "website",
    images: [{ url: homeOgImage, width: 1672, height: 941, alt: "晟景装饰门店形象效果图，非实拍" }],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: [homeOgImage],
  },
};

const entryLinks = [
  ["认识晟景", "门店地址、开店经历和公司信息", "/facts/"],
  ["看见施工过程", "今天做了什么，手机上就能看", "/transparent-site/"],
  ["聊聊你的装修", "咨询服务，预约到店或量房", "/contact/"],
] as const;

const process = [
  ["01", "工长记录", "把当天做了什么、做到哪里和现场照片传上来。"],
  ["02", "审核发布", "管理人员检查日报和照片，再发布给业主看。"],
  ["03", "业主查看", "打开小程序，看自己工地的日报、照片和图纸。"],
] as const;

const services = [
  ["别墅与大宅", "先看户型和家庭成员的使用习惯，再讨论空间布局、材料与施工安排。"],
  ["精装服务", "把设计、材料、定制与安装一起考虑，具体包含项目写进报价与合同。"],
  ["家装设计", "量房后聊动线、收纳、配色和灯光，方案确定后再安排施工。"],
  ["施工与定制", "施工分阶段检查，定制确认尺寸、板材和五金，已发布的工地记录可用手机查看。"],
] as const;

export default function HomePage() {
  return (
    <>
      <section className="home-hero relative isolate overflow-hidden" aria-labelledby="home-title">
        <Image
          src="/images/home/storefront-concept.jpg"
          alt="晟景装饰门店形象效果图，展示相邻门店外立面，非实拍"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[56%_center] sm:object-center"
        />
        <div className="home-hero-overlay absolute inset-0" aria-hidden="true" />
        <div className="container-page relative z-10 flex min-h-[670px] flex-col justify-between py-10 sm:min-h-[700px] sm:py-14 lg:min-h-[760px]">
          <div className="max-w-[660px] pt-6 sm:pt-16 lg:pt-24">
            <h1 id="home-title" className="home-display text-[3.5rem] font-semibold leading-none text-forest sm:text-[5rem] lg:text-[6rem]">
              晟景装饰
            </h1>
            <p className="mt-5 text-sm font-medium text-forest">{siteConfig.serviceFocus}</p>
            <p className="mt-5 max-w-[12ch] text-3xl font-semibold leading-[1.35] text-forest sm:text-4xl lg:text-[2.75rem]">
              交城装修，<br />过程看得见。
            </p>
            <p className="mt-6 max-w-lg text-sm leading-7 text-ink sm:text-base">
              别墅、大宅、新房精装，也做旧房翻新和全屋定制，欢迎到店聊。
              开工后，用晟景透明工地小程序看施工日报、现场照片和设计资料。
            </p>
            <p className="mt-3 text-sm font-medium text-forest">{siteConfig.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact/" className="btn-primary">预约量房 <span aria-hidden="true">→</span></Link>
              <Link href="/transparent-site/" className="btn border border-forest/45 bg-white/75 text-forest hover:bg-white">了解透明工地</Link>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-2 border-t border-forest/25 bg-white/90 px-3 py-3 text-xs leading-5 text-ink-soft sm:mt-0 sm:flex-row sm:items-end sm:justify-between sm:bg-transparent sm:px-0 sm:pb-0 sm:pt-5">
            <p className="sm:bg-white/90 sm:px-3 sm:py-2">服务范围：{siteConfig.serviceArea}</p>
            <p className="max-w-xs sm:bg-white/90 sm:px-3 sm:py-2 sm:text-right">门店形象效果图，非门店实拍</p>
          </div>
        </div>
      </section>

      <nav className="border-b border-forest/15 bg-white" aria-label="首页快速入口">
        <div className="container-page grid md:grid-cols-3">
          {entryLinks.map(([label, detail, href]) => (
            <Link key={href} href={href} className="group flex min-h-24 items-center gap-5 border-b border-forest/10 py-5 transition-colors hover:bg-forest/5 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
              <span className="flex-1">
                <span className="block text-lg font-semibold text-forest">{label}</span>
                <span className="mt-1 block text-xs leading-5 text-ink-soft">{detail}</span>
              </span>
              <span className="text-lg text-forest transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </nav>

      <section className="bg-[#f3f5f1] py-16 sm:py-24" aria-labelledby="process-title">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <div>
            <h2 id="process-title" className="home-section-title">今天工地做了什么，<br />打开手机看一看。</h2>
            <p className="mt-4 text-sm font-medium text-forest">晟景透明工地小程序</p>
            <p className="mt-6 max-w-xl text-base leading-8 text-ink-soft">
              工长记录当天的施工情况，管理人员审核后，你就能在手机上看到。
              水电怎么走、哪天做的防水、方案改了什么，已上传的资料都能回看。
            </p>
            <ol className="mt-10 border-t border-forest/20">
              {process.map(([number, title, detail]) => (
                <li key={number} className="grid grid-cols-[3rem_1fr] gap-3 border-b border-forest/20 py-5 sm:grid-cols-[4rem_1fr]">
                  <span className="pt-1 text-sm font-semibold text-clay-dark">{number}</span>
                  <div><h3 className="text-lg font-semibold text-forest">{title}</h3><p className="mt-1 text-sm leading-6 text-ink-soft">{detail}</p></div>
                </li>
              ))}
            </ol>
            <Link href="/transparent-site/#mini-program" className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-forest hover:text-clay-dark">了解小程序并扫码进入 <span aria-hidden="true">→</span></Link>
          </div>
          <figure className="border border-forest/15 bg-white p-4 sm:p-6">
            <Image
              src="/images/transparent-site/illustrations/diary-concept.webp"
              alt="晟景透明工地小程序功能示意图，展示工长日报、审核发布和业主查看的流程"
              width={1536}
              height={1024}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="h-auto w-full"
            />
            <figcaption className="mt-4 text-xs leading-5 text-ink-muted">小程序功能示意图，非实机截图。登录后可查看自己工地已发布的资料。</figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24" aria-labelledby="services-title">
        <div className="container-page">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div><h2 id="services-title" className="home-section-title">新房、旧房，<br className="hidden sm:block" />都从看现场开始。</h2><p className="mt-4 text-sm font-medium text-forest">装修服务</p></div>
            <p className="max-w-sm text-sm leading-7 text-ink-soft">带上户型图，说说预算和居住需求。量房后再确认方案、材料、工期与报价。</p>
          </div>
          <div className="mt-12 grid border-t border-forest/20 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(([title, detail]) => (
              <div key={title} className="border-b border-forest/20 px-0 py-7 sm:pr-6 lg:border-r lg:px-6 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0">
                <h3 className="text-xl font-semibold text-forest">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-soft">{detail}</p>
              </div>
            ))}
          </div>
          <Link href="/services/" className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-forest hover:text-clay-dark">查看全部服务 <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <BrandShowcase />

      <section className="bg-forest-900 py-16 text-cream sm:py-24" aria-labelledby="facts-title">
        <div className="container-page grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <h2 id="facts-title" className="home-section-title !text-cream">在交城做装修，<br />这些年怎么走过来。</h2>
            <p className="mt-4 text-sm font-medium text-cream/80">关于晟景</p>
            <p className="mt-6 text-sm leading-7 text-cream/75">早年从家里的五金建材做起，后来经营艺术玻璃和门业，2013 年开始使用晟景装饰名称。两家相邻门店在南环路康健装饰广场，欢迎来坐坐。</p>
            <Link href="/facts/" className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-cream hover:text-clay-light">查看门店与公司信息 <span aria-hidden="true">→</span></Link>
          </div>
          <div className="border-t border-cream/25">
            {siteConfig.brandTimeline.map((item) => (
              <div key={item.year} className="grid gap-3 border-b border-cream/25 py-6 sm:grid-cols-[9rem_1fr] sm:gap-7">
                <p className="text-xl font-semibold text-cream">{item.year}</p>
                <div><h3 className="text-base font-semibold text-cream">{item.title}</h3><p className="mt-2 text-sm leading-6 text-cream/65">{item.desc}</p></div>
              </div>
            ))}
            <p className="mt-5 text-xs leading-6 text-cream/75">早期开店经历来自经营者口述；现公司主体成立于 2021 年。</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24" aria-labelledby="cases-title">
        <div className="container-page">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div><h2 id="cases-title" className="home-section-title">看看我们<br className="hidden sm:block" />做过的项目。</h2><p className="mt-4 text-sm font-medium text-forest">项目资料</p></div>
            <p className="max-w-md text-sm leading-7 text-ink-soft">天泰小区130㎡法式复古项目已补充6张完工实拍，客厅、卧室、餐厅和阳台都能看。施工记录与业主反馈获得授权后再补充。</p>
          </div>
          <div className="mt-10 border-t border-forest/20">
            {caseStudies.map((item) => (
              <Link key={item.slug} href={"/cases/" + item.slug + "/"} className={`group grid gap-6 border-b border-forest/20 py-7 transition-colors hover:bg-[#f3f5f1] sm:items-center sm:px-4 ${item.images?.length ? "sm:grid-cols-[12rem_1fr_auto]" : "sm:grid-cols-[1fr_auto]"}`}>
                {item.images?.[0] && <Image src={item.images[0].src} alt={item.images[0].alt} width={item.images[0].width} height={item.images[0].height} sizes="(max-width: 639px) 100vw, 192px" className="h-auto w-full rounded-lg" />}
                <div><h3 className="text-lg font-semibold text-forest sm:text-xl">{item.title}</h3><p className="mt-2 text-xs leading-5 text-ink-soft">{item.currentStatus}</p></div>
                <span className="text-sm font-semibold text-clay-dark transition-transform group-hover:translate-x-1">查看项目资料 →</span>
              </Link>
            ))}
          </div>
          <Link href="/cases/" className="mt-7 inline-flex items-center gap-3 text-sm font-semibold text-forest hover:text-clay-dark">浏览全部案例资料 <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <DouyinShowcase />

      <section className="border-t border-forest/15 bg-[#f3f5f1] py-16 sm:py-24" aria-labelledby="faq-title">
        <div className="container-page grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div><h2 id="faq-title" className="home-section-title">装修前，<br />你可能想问这些。</h2><p className="mt-4 text-sm font-medium text-forest">装修常见问题</p><Link href="/guides/" className="mt-7 inline-flex items-center gap-3 text-sm font-semibold text-forest hover:text-clay-dark">更多装修知识 <span aria-hidden="true">→</span></Link></div>
          <div className="border-t border-forest/20">
            {homeFaqs.map((faq) => (
              <details key={faq.q} className="group border-b border-forest/20">
                <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 py-5 text-base font-semibold text-forest [&::-webkit-details-marker]:hidden">
                  <span>{faq.q}</span><span className="text-xl font-normal leading-none text-clay-dark transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="max-w-2xl pb-5 text-sm leading-7 text-ink-soft">{faq.a}</p>
              </details>
            ))}
          </div>
          <FaqPageLd faqs={homeFaqs.map((faq) => ({ q: faq.q, a: faq.a }))} />
        </div>
      </section>

      <section className="bg-forest-600 py-16 text-white sm:py-20" aria-labelledby="contact-title">
        <div className="container-page flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div><h2 id="contact-title" className="home-section-title !text-white">准备装修了？<br />来店里聊聊。</h2><p className="mt-4 text-sm font-medium text-white/85">到店或电话聊聊</p><p className="mt-5 text-sm leading-7 text-white/85">{contactInfo.addressNote}</p></div>
          <div className="flex flex-wrap gap-3">
            {contactInfo.phones.map((phone) => <a key={phone} href={"tel:" + phone} className="btn bg-white text-forest hover:bg-cream">拨打 {phone}</a>)}
            <Link href="/contact/" className="btn border border-white/70 text-white hover:bg-white/10">查看联系方式</Link>
          </div>
        </div>
      </section>
    </>
  );
}
