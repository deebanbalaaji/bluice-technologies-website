import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTA } from "@/components/CTA";
import { getCaseStudies, getCaseStudy } from "@/lib/sanity";

export async function generateStaticParams() { return (await getCaseStudies()).map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const study = await getCaseStudy((await params).slug); return study ? { title: study.title, description: study.summary, alternates: { canonical: `/work/${study.slug}` }, openGraph: { title: study.title, description: study.summary, url: `/work/${study.slug}` } } : {}; }

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const study = await getCaseStudy((await params).slug); if (!study) notFound();
  return <main id="main"><header className="case-hero shell"><div><nav className="case-breadcrumb" aria-label="Breadcrumb"><Link href="/work">Work</Link><b aria-hidden="true">/</b><span aria-current="page">Published evidence</span></nav><p className="eyebrow">{study.client} · {study.industry}</p><h1>{study.title}</h1></div><p>{study.summary}</p></header>
    {study.metrics.length > 0 && <section className="case-metric-band"><div className="shell">{study.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div></section>}
    <section className="section shell case-story"><aside><p className="label">Services</p>{study.services.length ? study.services.map((service) => <span key={service}>{service}</span>) : <span>Integrated product delivery</span>}</aside><div className="story-flow">{study.challenge && <article><p className="eyebrow">The operating problem</p><h2>Why the existing process stopped working.</h2><p>{study.challenge}</p></article>}{study.approach && <article><p className="eyebrow">The product decision</p><h2>Reduce ambiguity before adding software.</h2><p>{study.approach}</p></article>}<div className="decision-diagram"><span>Observed constraint</span><b>→</b><span>Product decision</span><b>→</b><span>Measured release</span></div>{study.shipped && <article><p className="eyebrow">What shipped</p><h2>A working system, introduced without operational pause.</h2><p>{study.shipped}</p></article>}{study.testimonial && <blockquote>“{study.testimonial}”<cite>— Product leadership, {study.client}</cite></blockquote>}</div></section>
    <CTA title="Make the next product decision easier to defend." context="We can start with a focused problem-framing session or a defined delivery challenge." /></main>;
}
