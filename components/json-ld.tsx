import { siteConfig } from "@/lib/site";
import type { Guide } from "@/lib/guides";

/**
 * JSON-LD 结构化数据组件
 * 集中输出 Organization / WebSite / LocalBusiness，供搜索引擎与 AI 问答平台识别。
 * 注意：telephone / 具体门店地址未确定时不写入虚假数据。
 */

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // 结构化数据为静态对象，非用户输入，可安全注入
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        url: siteConfig.url,
        description: siteConfig.description,
        areaServed: siteConfig.serviceArea,
        knowsLanguage: "zh-CN",
      }}
    />
  );
}

export function WebSiteLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.url,
        inLanguage: "zh-CN",
        description: siteConfig.description,
      }}
    />
  );
}

export function LocalBusinessLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness",
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        areaServed: {
          "@type": "AdministrativeArea",
          name: siteConfig.serviceArea,
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: siteConfig.serviceAreaParts.country,
          addressRegion: siteConfig.serviceAreaParts.region,
          addressLocality:
            siteConfig.serviceAreaParts.city +
            siteConfig.serviceAreaParts.locality,
        },
        knowsLanguage: "zh-CN",
        // telephone 暂不填写，待人工确认真实电话后补充
      }}
    />
  );
}

export function BreadcrumbLd({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: item.name,
          item: siteConfig.url + item.path,
        })),
      }}
    />
  );
}

export function ArticleLd({ guide }: { guide: Guide }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: guide.title,
        description: guide.description,
        datePublished: guide.publishedAt,
        dateModified: guide.updatedAt,
        inLanguage: "zh-CN",
        author: { "@type": "Organization", name: siteConfig.name },
        publisher: { "@type": "Organization", name: siteConfig.name },
        mainEntityOfPage: `${siteConfig.url}/guides/${guide.slug}/`,
        keywords: guide.keywords,
      }}
    />
  );
}

export function FaqPageLd({
  faqs,
}: {
  faqs: { q: string; a: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      }}
    />
  );
}
