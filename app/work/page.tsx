import type { Metadata } from "next";
import Link from "next/link";
import { ClientMarks } from "@/components/ClientMarks";
import { CTA } from "@/components/CTA";
import { getCaseStudies } from "@/lib/sanity";

export const metadata: Metadata = { title: "Work", description: "Product engineering case studies measured by operational outcomes.", alternates: { canonical: "/work" }, openGraph: { title: "Selected product work", description: "Product engineering case studies measured by operational outcomes.", url: "/work" } };

const industries = [
  ["Financial services", "Lending, payments, underwriting and account operations", "Explainability, auditability and security"],
  ["Healthcare & life sciences", "Care coordination, patient services and clinical operations", "Safety, privacy and workflow clarity"],
  ["Logistics & mobility", "Dispatch, fleet, warehouse, tracking and exception management", "Real-time visibility, resilience and throughput"],
  ["SaaS & enterprise platforms", "Multi-tenant products, administration and workflow tools", "Adoption, scalability and maintainability"],
  ["Retail & commerce", "Commerce, catalogue, fulfilment and service operations", "Conversion, inventory accuracy and peak performance"],
  ["Manufacturing & field operations", "Production planning, quality, maintenance and field service", "Traceability, uptime and offline-ready workflows"],
  ["Education & learning", "Learning, assessment, administration and content operations", "Accessibility, engagement and data privacy"],
  ["Public services", "Citizen services, case management and internal operations", "Accessibility, compliance and accountable delivery"],
];

export default async function WorkPage() {
  const studies = await getCaseStudies();
  return <main id="main">
    <header className="work-hero work-hero-evidence shell">
      <div><p className="eyebrow">Selected product work</p><h1>Shipped systems. <em>Measured change.</em></h1><p className="work-hero-lede">We document the operating constraint, the decisions made, what reached production, and what changed after release.</p></div>
      <aside className="work-hero-proof"><p>Every published story is structured to show the work behind the outcome—not just the finished interface.</p><dl><div><dt>Operating constraint</dt><dd>Named</dd></div><div><dt>Production release</dt><dd>Shown</dd></div><div><dt>Outcome</dt><dd>Verified</dd></div></dl></aside>
    </header>
    <section className="industry-capabilities" id="industries"><div className="section shell"><header><div><p className="eyebrow">Industry capability</p><h2>Products we can take live.</h2></div><p>Our delivery model adapts to the operating rules of each sector. These are capability areas—not claims of completed client work.</p></header><div className="industry-ledger">{industries.map(([name, products, priorities]) => <article key={name}><h3>{name}</h3><div><span className="label">What we build</span><p>{products}</p></div><div><span className="label">What matters</span><p>{priorities}</p></div></article>)}</div></div></section>
    <section className="published-evidence" id="evidence"><div className="section shell published-evidence-grid"><header><p className="eyebrow">Published evidence</p><h2>Decisions, releases, and results.</h2><p>Each story connects an operating problem to the product decisions made, what shipped, and the measured change.</p></header><div className="work-hero-index"><p className="label">Case studies / {String(studies.length).padStart(2, "0")}</p><ol>{studies.map((study, index) => <li key={study.slug}><Link href={`/work/${study.slug}`}><span>{String(index + 1).padStart(2, "0")} · {study.industry}</span><strong>{study.title}</strong><b>{study.metrics[0]?.value} {study.metrics[0]?.label}</b><i className="work-evidence-arrow" aria-hidden="true">↗</i></Link></li>)}</ol></div></div></section>
    <section className="work-library shell"><header className="work-client-proof"><p className="eyebrow">Companies we’ve worked with</p><ClientMarks /></header></section>
    <CTA title="Your product will have different constraints." context="That is where useful work starts. Bring us the context, not a polished brief." />
  </main>;
}
