import type { MetadataRoute } from "next";
import { getCaseStudies } from "@/lib/sanity";
import { serviceDetails } from "@/lib/service-details";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://northline.example";
  const pages = ["", "/services", "/work", "/about", "/careers", "/contact", "/terms", "/privacy", "/cookies", "/accessibility"];
  const studies = await getCaseStudies();
  return [...pages.map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.8 })), ...serviceDetails.map(({ slug }) => ({ url: `${base}/services/${slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 })), ...studies.map(({ slug }) => ({ url: `${base}/work/${slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 }))];
}
