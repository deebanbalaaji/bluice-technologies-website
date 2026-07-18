import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTA } from "@/components/CTA";
import { TrackLink } from "@/components/TrackLink";
import { getServiceDetail, serviceDetails } from "@/lib/service-details";

export function generateStaticParams() { return serviceDetails.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const service = getServiceDetail((await params).slug); return service ? { title: service.name, description: service.summary, alternates: { canonical: `/services/${service.slug}` }, openGraph: { title: service.name, description: service.summary, url: `/services/${service.slug}` } } : {}; }

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const service = getServiceDetail((await params).slug); if (!service) notFound();
  const index = serviceDetails.findIndex(({ slug }) => slug === service.slug);
  return <main id="main">
    <header className="service-detail-hero"><div className="shell service-detail-hero-grid"><div><Link className="service-breadcrumb" href="/services">Services <span>/</span> {service.name}</Link><p className="eyebrow">Service 0{index + 1} / 05</p><h1>{service.name}</h1><p className="service-detail-lede">{service.positioning}</p></div><aside><p className="label">Choose this service when</p><p>{service.stage}</p><TrackLink className="text-link" href="/contact" event="cta_clicked" eventLabel={`${service.slug}-hero`}>Discuss your situation <span>↗</span></TrackLink></aside></div></header>

    <section className="service-problem-band"><div className="shell"><p className="label">Common signals</p><ul>{service.problems.map((problem) => <li key={problem}>{problem}</li>)}</ul></div></section>

    <section className="section shell service-offer"><header><div><p className="eyebrow">What we offer</p><h2>Specific ways we can help.</h2></div><p>Start with one focused scope or combine related work into an accountable engagement. Each offer is shaped around the decision or operating change your team needs.</p></header><div className="service-offer-list">{service.subservices.map((item, itemIndex) => <article key={item.name}><span className="index">{String(itemIndex + 1).padStart(2, "0")}</span><div><h3>{item.name}</h3><p>{item.description}</p></div><div><p className="label">Typical scope</p><ul>{item.includes.map((included) => <li key={included}>{included}</li>)}</ul></div></article>)}</div></section>

    <section className="service-method"><div className="section shell"><header><p className="eyebrow">How the work moves</p><h2>Evidence before expansion.</h2></header><ol>{service.process.map((step, stepIndex) => <li key={step.name}><span>0{stepIndex + 1}</span><h3>{step.name}</h3><p>{step.description}</p></li>)}</ol></div></section>

    <section className="section shell service-detail-evidence"><div><p className="eyebrow">Business outcomes</p><h2>What should change.</h2><ul>{service.outcomes.map((item) => <li key={item}>{item}</li>)}</ul></div><div><p className="eyebrow">Core deliverables</p><h2>What your team receives.</h2><ul>{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></div></section>

    <nav className="service-switch" aria-label="Explore other services"><div className="shell"><p className="label">Explore another service</p><div>{serviceDetails.filter(({ slug }) => slug !== service.slug).map((item) => <Link href={`/services/${item.slug}`} key={item.slug}>{item.name}<span>↗</span></Link>)}</div></div></nav>
    <CTA title={`Make ${service.name.toLowerCase()} useful to the next business decision.`} context="Bring us the current constraint. We will help define the smallest credible engagement." />
  </main>;
}
