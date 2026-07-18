import { cache } from "react";
import { createClient } from "next-sanity";
import { caseStudies as fallbackCaseStudies, type CaseStudy } from "./content";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

const sanityClient = projectId
  ? createClient({ projectId, dataset, apiVersion: "2025-01-01", useCdn: true, token: process.env.SANITY_API_READ_TOKEN })
  : null;

export const getCaseStudies = cache(async function getCaseStudies(): Promise<CaseStudy[]> {
  if (!sanityClient) return fallbackCaseStudies;
  try {
    const items = await sanityClient.fetch<CaseStudy[]>(
      `*[_type == "caseStudy" && published == true] | order(_createdAt desc){
        "slug": slug.current, client, title, industry, services, summary, challenge,
        approach, shipped, metrics, testimonial
      }`,
      {},
      { next: { revalidate: 60 } },
    );
    return items.length ? items.map((item) => ({ ...item, services: item.services || [], challenge: item.challenge || "", approach: item.approach || "", shipped: item.shipped || "", metrics: item.metrics || [], testimonial: item.testimonial || "" })) : fallbackCaseStudies;
  } catch {
    return fallbackCaseStudies;
  }
});

export async function getCaseStudy(slug: string): Promise<CaseStudy | undefined> {
  const studies = await getCaseStudies();
  return studies.find((study) => study.slug === slug);
}
