import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaqPageLd } from "@/components/json-ld";
import { DailyReportMockup, PhoneMockup } from "@/components/phone-mockup";
import { caseStudies } from "@/lib/cases";
import { contactInfo, homeFaqs, siteConfig } from "@/lib/site";

const homeTitle = "晟景装饰｜交城本地装修公司｜透明工地";
const homeDescription =
  "交城装修、旧房翻新、整装、全屋定制。通过透明工地小程序查看工长日报、现场照片和关键节点记录，让装修过程更看得见。";
const homeUrl = siteConfig.url + "/";
const homeOgImage = siteConfig.url + "/images/home/construction-scene.jpg";

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
    images: [{ url: homeOgImage, width: 1672, height: 941, alt: "晟景装饰官网装修施工场景示意图" }],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: [homeOgImage],
  },
};

const entryLinks = [
  ["01", "认识晟景", "本地门店、服务经验与经营主体", "/facts/"],
  ["02", "看见施工过程", "日报、现场照片与关键节点记录", "/transparent-site/"],
  ["03", "开始聊装修", "了解服务方式，预约到店或量房", "/contact/"],
] as const;

const process = [
  ["01", "工长记录", "施工内容、进度和现场照片按实际项目上传。"],
  ["02", "审核发布", "管理人员审核后，再向业主展示已确认的记录。"],
  ["03", "业主查看", "用手机查看进度、关键节点和设计资料。"],
] as const;

const services = [
  ["新房装修", "从量房、方案到施工验收，把重要决定说清楚。"],
  ["旧房翻新", "关注原有房屋状况、水电、防水和空间使用需求。"],
  ["整装服务", "衔接设计、施工、材料与定制，减少多头沟通。"],
  ["全屋定制", "结合户型与生活习惯，沟通收纳和空间细节。"],
] as const;

export default function HomePage() {
  return (
    <>
      <section className="home-hero relative isolate overflow-hidden" aria-labelledby="home-title">
        <Image
          src="/images/home/construction-scene.jpg"
          alt="装修施工场景示意图，空间内可见施工中的吊顶、保护地面和板材"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[56%_center] sm:object-center"
        />
        <div className="home-hero-overlay absolute inset-0" aria-hidden="true" />
        <div className="container-page relative z-10 flex min-h-[670px] flex-col justify-between py-10 sm:min-h-[700px] sm:py-14 lg:min-h-[760px]">
          <div className="max-w-[660px] pt-12 sm:pt-16 lg:pt-24">
            <p className="flex items-center gap-3 text-xs font-semibold text-forest sm:text-sm">
              <span className="h-px w-8 bg-clay-dark" aria-hidden="true" />
              山西交城 · 本地装修服务
            </p>
            <h1 id="home-title" className="home-display mt-7 text-[3.5rem] font-semibold leading-none text-forest sm:text-[5rem] lg:text-[6rem]">
              晟景装饰
            </h1>
            <p className="mt-5 max-w-[12ch] text-3xl font-semibold leading-[1.35] text-forest sm:text-4xl lg:text-[2.75rem]">
              交城装修，<br />过程看得见。
            </p>
            <p className="mt-6 max-w-lg text-sm leading-7 text-ink sm:text-base">
              从方案沟通到工地记录，晟景装饰希望让装修中的每一步更清楚。
              施工进度、现场照片和关键节点，可通过透明工地小程序查看。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact/" className="btn-primary">预约量房 <span aria-hidden="true">→</span></Link>
              <Link href="/transparent-site/" className="btn border border-forest/45 bg-white/75 text-forest hover:bg-white">了解透明工地</Link>
            </div>
          </div>
          <div className="flex flex-col gap-3 border-t border-forest/25 pt-5 text-xs text-ink-soft sm:flex-row sm:items-end sm:justify-between">
            <p>服务范围：{siteConfig.serviceArea}</p>
            <p className="max-w-xs sm:text-right">施工场景示意图，非晟景项目实拍</p>
          </div>
        </div>
      </section>

      <nav className="border-b border-forest/15 bg-white" aria-label="首页快速入口">
        <div className="container-page grid md:grid-cols-3">
          {entryLinks.map(([number, label, detail, href]) => (
            <Link key={number} href={href} className="group flex min-h-28 items-center gap-5 border-b border-forest/10 py-6 transition-colors hover:text-clay-dark md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
              <span className="self-start pt-1 text-xs font-semibold text-clay-dark">{number}</span>
              <span className="flex-1">
                <span className="block text-lg font-semibold text-forest">{label}</span>
                <span className="mt-1 block text-xs leading-5 text-ink-soft">{detail}</span>
              </span>
              <span className="text-lg text-forest transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </nav>

      <section className="bg-[#f3f5f1] py-20 sm:py-28" aria-labelledby="process-title">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold text-clay-dark">晟景透明工地小程序</p>
            <h2 id="process-title" className="home-section-title mt-5 max-w-[14ch]">工地在推进，<br />记录也在同步。</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-ink-soft">
              工长提交日报，管理人员审核后展示，业主在手机上查看。
              从现场照片到关键节点，让过程中的沟通有记录可查。
            </p>
            <ol className="mt-10 border-t border-forest/20">
              {process.map(([number, title, detail]) => (
                <li key={number} className="grid grid-cols-[3rem_1fr] gap-3 border-b border-forest/20 py-5 sm:grid-cols-[4rem_1fr]">
                  <span className="pt-1 text-sm font-semibold text-clay-dark">{number}</span>
                  <div><h3 className="text-lg font-semibold text-forest">{title}</h3><p className="mt-1 text-sm leading-6 text-ink-soft">{detail}</p></div>
                </li>
              ))}
            </ol>
            <Link href="/transparent-site/" className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-forest hover:text-clay-dark">详细了解透明工地 <span aria-hidden="true">→</span></Link>
          </div>
          <div className="border border-forest/15 bg-white px-5 py-8 sm:px-10 sm:py-12">
            <PhoneMockup><DailyReportMockup /></PhoneMockup>
            <p className="mt-5 text-center text-xs text-ink-muted">小程序功能模拟界面，实际展示以项目记录为准</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28" aria-labelledby="services-title">
        <div className="container-page">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div><p className="text-xs font-semibold text-clay-dark">装修服务</p><h2 id="services-title" className="home-section-title mt-5">适合你的家，<br className="hidden sm:block" />从具体需求谈起。</h2></div>
            <p className="max-w-sm text-sm leading-7 text-ink-soft">每套房子的状态和需求不同。先量房、看现场，再沟通方案、材料、工期与报价。</p>
          </div>
          <div className="mt-12 grid border-t border-forest/20 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(([title, detail], index) => (
              <div key={title} className="min-h-56 border-b border-forest/20 px-0 py-7 sm:pr-6 lg:border-r lg:px-6 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0">
                <span className="text-xs font-semibold text-clay-dark">0{index + 1}</span>
                <h3 className="mt-8 text-xl font-semibold text-forest">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-soft">{detail}</p>
              </div>
            ))}
          </div>
          <Link href="/services/" className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-forest hover:text-clay-dark">查看全部服务 <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="bg-forest-900 py-20 text-cream sm:py-28" aria-labelledby="facts-title">
        <div className="container-page grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold text-clay-light">关于晟景</p>
            <h2 id="facts-title" className="home-section-title mt-5 !text-cream">在交城，<br />把事情做清楚。</h2>
            <p className="mt-6 text-sm leading-7 text-cream/75">晟景装饰服务交城及吕梁周边业主。关于服务经验、经营主体和门店信息，我们公开说明，也欢迎到店了解。</p>
            <Link href="/facts/" className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-cream hover:text-clay-light">查看品牌公开事实 <span aria-hidden="true">→</span></Link>
          </div>
          <div className="border-t border-cream/25">
            {siteConfig.brandTimeline.map((item) => (
              <div key={item.year} className="grid gap-3 border-b border-cream/25 py-6 sm:grid-cols-[9rem_1fr] sm:gap-7">
                <p className="text-xl font-semibold text-cream">{item.year}</p>
                <div><h3 className="text-base font-semibold text-cream">{item.title}</h3><p className="mt-2 text-sm leading-6 text-cream/65">{item.desc}</p></div>
              </div>
            ))}
            <p className="mt-5 text-xs leading-6 text-cream/55">1997 年前后指本地装修从业经验，不代表当前公司主体的工商成立时间。</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28" aria-labelledby="cases-title">
        <div className="container-page">
          <p className="text-xs font-semibold text-clay-dark">项目资料</p>
          <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <h2 id="cases-title" className="home-section-title">先看项目，<br className="hidden sm:block" />再谈怎么做。</h2>
            <p className="max-w-md text-sm leading-7 text-ink-soft">现有页面展示已确认可公开的项目基础资料。现场照片、完工图和业主反馈取得授权后再补充。</p>
          </div>
          <div className="mt-10 border-t border-forest/20">
            {caseStudies.map((item) => (
              <Link key={item.slug} href={"/cases/" + item.slug + "/"} className="group grid gap-4 border-b border-forest/20 py-7 transition-colors hover:bg-[#f3f5f1] sm:grid-cols-[1fr_auto] sm:items-center sm:px-4">
                <div><h3 className="text-lg font-semibold text-forest sm:text-xl">{item.title}</h3><p className="mt-2 text-xs leading-5 text-ink-soft">{item.currentStatus}</p></div>
                <span className="text-sm font-semibold text-clay-dark transition-transform group-hover:translate-x-1">查看项目资料 →</span>
              </Link>
            ))}
          </div>
          <Link href="/cases/" className="mt-7 inline-flex items-center gap-3 text-sm font-semibold text-forest hover:text-clay-dark">浏览全部案例资料 <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="border-t border-forest/15 bg-[#f3f5f1] py-20 sm:py-28" aria-labelledby="faq-title">
        <div className="container-page grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div><p className="text-xs font-semibold text-clay-dark">装修常见问题</p><h2 id="faq-title" className="home-section-title mt-5">先问清楚，<br />再做决定。</h2><Link href="/guides/" className="mt-7 inline-flex items-center gap-3 text-sm font-semibold text-forest hover:text-clay-dark">更多装修知识 <span aria-hidden="true">→</span></Link></div>
          <div className="border-t border-forest/20">
            {homeFaqs.map((faq) => (
              <details key={faq.q} className="group border-b border-forest/20 py-5">
                <summary className="flex cursor-pointer items-start justify-between gap-5 text-base font-semibold text-forest">
                  <span>{faq.q}</span><span className="text-xl font-normal leading-none text-clay-dark transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="max-w-2xl pt-4 text-sm leading-7 text-ink-soft">{faq.a}</p>
              </details>
            ))}
          </div>
          <FaqPageLd faqs={homeFaqs.map((faq) => ({ q: faq.q, a: faq.a }))} />
        </div>
      </section>

      <section className="bg-clay-dark py-16 text-white sm:py-20" aria-labelledby="contact-title">
        <div className="container-page flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div><p className="text-xs font-semibold text-white/70">到店或电话聊聊</p><h2 id="contact-title" className="home-section-title mt-5 !text-white">你的装修，<br />从一次认真沟通开始。</h2><p className="mt-5 text-sm leading-7 text-white/80">{contactInfo.addressNote}</p></div>
          <div className="flex flex-wrap gap-3">
            <a href={"tel:" + contactInfo.phonePlaceholder} className="btn bg-white text-forest hover:bg-cream">拨打 {contactInfo.phonePlaceholder}</a>
            <Link href="/contact/" className="btn border border-white/70 text-white hover:bg-white/10">查看联系方式</Link>
          </div>
        </div>
      </section>
    </>
  );
}
