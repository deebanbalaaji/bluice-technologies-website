import { cache } from "react";
import { caseStudies, type CaseStudy } from "./content";

export const getCaseStudies = cache(async (): Promise<CaseStudy[]> => caseStudies);

export async function getCaseStudy(slug: string): Promise<CaseStudy | undefined> {
  return caseStudies.find((study) => study.slug === slug);
}
