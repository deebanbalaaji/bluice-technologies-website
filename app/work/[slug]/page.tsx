import { permanentRedirect } from "next/navigation";

const legacyIndustryMap: Record<string, string> = {
  "harbor-freight-operations": "/industries/logistics-mobility/freight-logistics",
  "morrow-care-coordination": "/industries/healthcare-life-sciences/care-delivery",
  "relay-finance-platform": "/industries/financial-services/lending-credit",
};

export default async function WorkCompatibilityDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  permanentRedirect(legacyIndustryMap[slug] || "/industries");
}
