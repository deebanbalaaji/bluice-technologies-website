import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { RegionalIndustryDirectory, RegionalIndustryFocus, RegionalIndustryHero } from "@/components/RegionalIndustryExperience";

export const metadata: Metadata = {
  title: "Industries",
  description: "Industry-focused product engineering for financial services, healthcare, manufacturing, retail, logistics, energy, public services, and enterprise platforms.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return <main id="main" className="industry-site">
    <RegionalIndustryHero />
    <RegionalIndustryFocus />
    <RegionalIndustryDirectory />
    <CTA title="Your industry has its own operating rules." context="Bring us the constraint. We will shape the right product and engineering response around it." />
  </main>;
}
