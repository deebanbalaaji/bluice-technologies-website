import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTA } from "@/components/CTA";
import { RegionalIndustryNote } from "@/components/RegionalIndustryExperience";
import { getIndustry, industries } from "@/lib/industries";

export function generateStaticParams() { return industries.map(({ slug }) => ({ industry: slug })); }

export async function generateMetadata({ params }: { params: Promise<{ industry: string }> }): Promise<Metadata> {
  const industry = getIndustry((await params).industry);
  return industry ? { title: industry.name, description: industry.summary, alternates: { canonical: `/industries/${industry.slug}` } } : {};
}

export default async function IndustryPage({ params }: { params: Promise<{ industry: string }> }) {
  const industry = getIndustry((await params).industry);
  if (!industry) notFound();

  return <main id="main" className="industry-site">
    <header className={`industry-detail-hero contextual-gradient-hero gradient-industry-${industry.slug}`}>
      <Image src={industry.image} alt="" fill priority sizes="100vw" />
      <span className="industry-hero-shade" aria-hidden="true" />
      <div className="shell industry-detail-hero-copy"><nav aria-label="Breadcrumb"><Link href="/industries">Industries</Link><span>/</span><b>{industry.name}</b></nav><h1>{industry.headline}</h1><p>{industry.summary}</p></div>
    </header>
    <RegionalIndustryNote industrySlug={industry.slug} industryName={industry.name} />
    <section className="industry-operating shell"><h2>The operating reality</h2><p>{industry.operatingReality}</p><div>{industry.priorities.map((priority) => <span key={priority}>{priority}</span>)}</div></section>
    <section className="industry-sectors">
      <div className="shell"><header><h2>Where we can collaborate</h2><p>Each sector page explains the systems, product decisions, and an illustrative engagement scenario.</p></header><div className="sector-directory">{industry.sectors.map((sector) => <Link key={sector.slug} href={`/industries/${industry.slug}/${sector.slug}`}><div className="sector-directory-media"><Image src={sector.image} alt={sector.imageAlt} fill sizes="(max-width: 760px) 100vw, 33vw" /></div><div className="sector-directory-copy"><h3>{sector.name}</h3><p>{sector.need}</p><span>{sector.systems.join(" / ")}</span><b>Explore sector →</b></div></Link>)}</div></div>
    </section>
    <section className="industry-capability-map shell"><header><h2>How capability connects</h2><p>We combine the disciplines needed to move from sector context to a dependable live product.</p></header><div>{industry.capabilities.map((capability) => <span key={capability}>{capability}</span>)}</div><p className="industry-map-flow">Operating context <b>→</b> product decision <b>→</b> engineered system <b>→</b> live operation</p></section>
    <CTA title={`Build for the reality of ${industry.shortName.toLowerCase()}.`} context="Tell us where the process, product, or platform is creating uncertainty." />
  </main>;
}
