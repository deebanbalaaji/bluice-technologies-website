import { industries } from "./industries";
import { services } from "./content";
import { companyPages } from "./company-pages";

export type SearchItem = {
  label: string;
  href: string;
  description: string;
  category: "Service" | "Industry" | "Sector" | "Company" | "Action";
  terms: string;
};

const baseItems: SearchItem[] = [
  { label: "Services", href: "/services", description: "Product strategy, design, engineering, cloud, and continuous improvement.", category: "Service", terms: "what we do capabilities consulting technology services" },
  { label: "Industries", href: "/industries", description: "Explore how Bluice collaborates across eight operating environments.", category: "Industry", terms: "sectors markets industry capability collaboration" },
  { label: "About Bluice", href: "/about", description: "Our company, principles, and accountable product model.", category: "Company", terms: "who we are company team bluice technologies" },
  { label: "Corporate responsibility", href: "/csr", description: "Responsible technology, inclusive practice, and community commitments.", category: "Company", terms: "csr sustainability responsibility community ethics environment" },
  { label: "Careers", href: "/careers", description: "Practice areas and how to introduce yourself to Bluice.", category: "Company", terms: "jobs careers hiring employment roles" },
  { label: "Contact us", href: "/contact", description: "Share a product, platform, or operational challenge.", category: "Action", terms: "contact consultation enquiry talk project budget" },
];

const serviceItems: SearchItem[] = services.map((service) => ({
  label: service.name,
  href: `/services/${service.slug}`,
  description: service.summary,
  category: "Service",
  terms: `${service.outcomes.join(" ")} ${service.deliverables.join(" ")} ${service.stage}`,
}));

const industryItems: SearchItem[] = industries.flatMap((industry) => [
  {
    label: industry.name,
    href: `/industries/${industry.slug}`,
    description: industry.summary,
    category: "Industry" as const,
    terms: `${industry.shortName} ${industry.priorities.join(" ")} ${industry.capabilities.join(" ")}`,
  },
  ...industry.sectors.map((sector) => ({
    label: sector.name,
    href: `/industries/${industry.slug}/${sector.slug}`,
    description: sector.need,
    category: "Sector" as const,
    terms: `${industry.name} ${sector.systems.join(" ")} ${sector.scenario.problem}`,
  })),
]);

const companyItems: SearchItem[] = companyPages.map((page) => ({
  label: page.title,
  href: `/about/${page.slug}`,
  description: page.introduction,
  category: "Company",
  terms: `${page.headline} ${page.sections.flat().join(" ")}`,
}));

export const siteSearchIndex = [...baseItems, ...serviceItems, ...industryItems, ...companyItems];

const intentExpansions: Record<string, string[]> = {
  ai: ["artificial intelligence", "automation", "data", "decision support", "product engineering"],
  artificial: ["ai", "automation", "data"],
  app: ["mobile", "product engineering", "software"],
  banking: ["financial services", "lending", "payments"],
  ecommerce: ["retail", "commerce", "checkout", "fulfilment"],
  factory: ["manufacturing", "production", "quality"],
  government: ["public services", "citizen", "case management"],
  hospital: ["healthcare", "care delivery", "clinical"],
  jobs: ["careers", "hiring", "roles"],
  modernization: ["modernisation", "platform", "continuous evolution", "cloud"],
  modernisation: ["modernization", "platform", "continuous evolution", "cloud"],
  supply: ["logistics", "warehouse", "freight", "fulfilment"],
};

const tokenize = (value: string) => value.toLowerCase().replace(/[^a-z0-9&]+/g, " ").trim().split(/\s+/).filter(Boolean);

export function smartSearch(query: string) {
  const original = tokenize(query);
  const expanded = new Set(original);
  original.forEach((token) => intentExpansions[token]?.forEach((term) => tokenize(term).forEach((part) => expanded.add(part))));

  return siteSearchIndex
    .map((item) => {
      const label = item.label.toLowerCase();
      const searchable = `${item.label} ${item.category} ${item.description} ${item.terms}`.toLowerCase();
      let score = 0;
      expanded.forEach((token) => {
        if (label === token) score += 16;
        else if (label.startsWith(token)) score += 10;
        else if (label.includes(token)) score += 7;
        if (searchable.includes(token)) score += 2;
      });
      if (query.trim().length > 2 && searchable.includes(query.trim().toLowerCase())) score += 12;
      return { ...item, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.label.localeCompare(b.label))
    .slice(0, 8);
}
