import type { MetadataRoute } from "next";
import { serviceDetails } from "@/lib/service-details";
import { industries } from "@/lib/industries";
import { companyPages } from "@/lib/company-pages";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://bluice.in";
  const pages = ["", "/services", "/industries", "/about", "/csr", "/careers", "/contact", "/terms", "/privacy", "/cookies", "/accessibility", "/rentops/privacy", "/rentops/terms", "/rentops/delete-account"];
  const industryPages = industries.flatMap((industry) => [
    `/industries/${industry.slug}`,
    ...industry.sectors.map((sector) => `/industries/${industry.slug}/${sector.slug}`),
  ]);
  return [
    ...pages.map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.8 })),
    ...serviceDetails.map(({ slug }) => ({ url: `${base}/services/${slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 })),
    ...industryPages.map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 })),
    ...companyPages.map(({ slug }) => ({ url: `${base}/about/${slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
