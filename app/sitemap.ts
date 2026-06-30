import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { guides } from "@/lib/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${siteConfig.url}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${siteConfig.url}/about/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/transparent-site/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/services/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/cases/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteConfig.url}/guides/`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteConfig.url}/guides/jiaocheng-decoration-questions/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.url}/contact/`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
  ];

  const guidePages: MetadataRoute.Sitemap = guides.map((g) => ({
    url: `${siteConfig.url}/guides/${g.slug}/`,
    lastModified: new Date(g.updatedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...guidePages];
}
