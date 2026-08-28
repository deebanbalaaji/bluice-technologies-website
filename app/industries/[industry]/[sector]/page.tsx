import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTA } from "@/components/CTA";
import { RegionalIndustryNote } from "@/components/RegionalIndustryExperience";
import { getSector, industries } from "@/lib/industries";

export function generateStaticParams() {
  return industries.flatMap((industry) => industry.sectors.map((sector) => ({ industry: industry.slug, sector: sector.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ industry: string; sector: string }> }): Promise<Metadata> {
  const { industry: industrySlug, sector: sectorSlug } = await params;
  const match = getSector(industrySlug, sectorSlug);
  return match ? { title: `${match.sector.name} | ${match.industry.name}`, description: match.sector.need, alternates: { canonical: `/industries/${industrySlug}/${sectorSlug}` } } : {};
}

export default async function SectorPage({ params }: { params: Promise<{ industry: string; sector: string }> }) {
  const { industry: industrySlug, sector: sectorSlug } = await params;
  const match = getSector(industrySlug, sectorSlug);
  if (!match) notFound();
  const { industry, sector } = match;

  return <main id="main" className="industry-site sector-page">
    <header className={`sector-hero contextual-gradient-hero gradient-industry-${industry.slug}`}><Image src={sector.image} alt="" fill priority sizes="100vw" /><span className="industry-hero-shade" aria-hidden="true" /><div className="shell sector-hero-copy"><nav aria-label="Breadcrumb"><Link href="/industries">Industries</Link><span>/</span><Link href={`/industries/${industry.slug}`}>{industry.name}</Link></nav><p className="eyebrow">{sector.name}</p><h1>{sector.need}</h1></div></header>
    <RegionalIndustryNote industrySlug={industry.slug} industryName={industry.name} />
    <section className="sector-systems shell"><h2>Systems we can help shape</h2><div>{sector.systems.map((system) => <article key={system}><h3>{system}</h3><p>Strategy, experience, engineering, integration, and operational readiness considered as one product decision.</p></article>)}</div></section>
    <section className="sector-scenario"><div className="shell"><header><span className="label">Illustrative engagement scenario</span><h2>{sector.scenario.title}</h2><p>This scenario demonstrates how Bluice would approach a common sector problem. It is not presented as completed client work.</p></header><ol><li><span>Understand</span><h3>The operating problem</h3><p>{sector.scenario.problem}</p></li><li><span>Shape</span><h3>The product response</h3><p>{sector.scenario.response}</p></li><li><span>Enable</span><h3>The intended change</h3><p>{sector.scenario.outcome}</p></li></ol></div></section>
    <section className="sector-next shell"><h2>Start with the constraint.</h2><p>We will help identify the smallest useful decision, the evidence needed, and the safest route into delivery.</p><Link className="button" href="/contact">Contact us</Link></section>
    <CTA title={`Discuss ${sector.name.toLowerCase()} with Bluice.`} context="Share the operating context and where the current system is getting in the way." />
  </main>;
}
