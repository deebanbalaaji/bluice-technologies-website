import type { Metadata } from "next";
import { Blueprint } from "@/components/Blueprint";
import { CTA } from "@/components/CTA";
import { ClientMarks } from "@/components/ClientMarks";
import { TrackLink } from "@/components/TrackLink";
import { services } from "@/lib/content";
import { getCaseStudies } from "@/lib/sanity";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default async function Home() {
  const studies = await getCaseStudies();
  const featured = studies[0];
  const feedbackStudies = studies.filter((study) => study.testimonial).slice(0, 3);
  return (
    <main id="main">
      <section className="hero shell">
        <div className="hero-copy"><p className="eyebrow">Senior product engineering partner</p><h1>Complex products,<br /><em>made clear.</em></h1><p className="hero-lede">We turn operational complexity into dependable digital products—connecting strategy, design, engineering, and platform decisions in one accountable team.</p><div className="hero-actions"><TrackLink className="button" href="/contact" event="cta_clicked" eventLabel="hero">Connect with us</TrackLink><TrackLink className="text-link" href="/work" event="cta_clicked" eventLabel="hero-work">See shipped outcomes <span>↗</span></TrackLink></div><ul className="hero-signals" aria-label="How Bluice Technologies works"><li>Senior-led</li><li>Integrated delivery</li><li>Measured after release</li></ul></div>
        <Blueprint />
      </section>

      <section className="client-strip"><div className="shell"><p className="label">Trusted to clarify consequential work</p><ClientMarks /></div></section>

      <section className="section home-services"><div className="shell"><header className="home-section-head"><div><p className="eyebrow">Five connected capabilities</p><h2>One team across the product lifecycle.</h2></div><p>Engage us for a focused problem or connect the full journey. The advantage is continuity: each decision carries its context into the next.</p></header><div className="home-service-list">{services.map((service, index) => <TrackLink href={`/services#${service.slug}`} className="home-service-row" key={service.slug} event="service_explored" eventLabel={service.slug}><span className="index">0{index + 1}</span><div><h3>{service.name}</h3><p>{service.summary}</p></div><p className="home-service-stage">{service.stage}</p><span className="arrow">↗</span></TrackLink>)}</div><TrackLink className="text-link home-services-link" href="/services" event="service_explored" eventLabel="all-services">Explore all service details <span>↗</span></TrackLink></div></section>

      {featured && <section className="section feature-wrap"><div className="shell featured-case"><div className="case-copy"><p className="eyebrow">Featured work · {featured.industry}</p><h2>{featured.title}</h2><p>{featured.summary}</p><TrackLink className="text-link light-link" href={`/work/${featured.slug}`} event="case_study_opened" eventLabel={featured.slug}>Read the case study <span>↗</span></TrackLink></div><div className="case-evidence"><div className="artifact-ui"><div className="artifact-top"><span>{featured.client} / Operations</span><span>Live</span></div><div className="artifact-body"><aside><i></i><i></i><i></i><i></i></aside><div className="artifact-main"><p>Exception queue</p><div className="artifact-row"><b>Shipment 4829</b><span>Owner assigned</span></div><div className="artifact-row"><b>Shipment 4851</b><span>Action due 10:30</span></div><div className="artifact-row"><b>Shipment 4860</b><span>Customer updated</span></div></div></div></div><div className="case-metrics">{featured.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div></div></div></section>}

      {feedbackStudies.length > 0 && <section className="section feedback-section">
        <div className="shell feedback-grid">
          <div className="feedback-heading"><p className="eyebrow">Client feedback</p><h2>What clarity changed for the teams doing the work.</h2><p>Reflections from product leaders after strategy, design and engineering moved as one team.</p></div>
          <div className="feedback-list">
            {feedbackStudies.map((study) => <blockquote key={study.slug}><p>“{study.testimonial}”</p><footer><cite>Product leadership, {study.client}</cite><TrackLink href={`/work/${study.slug}`} event="case_study_opened" eventLabel={`feedback-${study.slug}`} aria-label={`Read the ${study.client} case study`}>Read the evidence <span>↗</span></TrackLink></footer></blockquote>)}
          </div>
        </div>
      </section>}

      <section className="section shell home-engagement"><header><p className="eyebrow">A deliberate delivery model</p><h2>Reduce uncertainty before it becomes rework.</h2><p>We move through three evidence gates, keeping business direction, user reality, and technical decisions connected.</p><TrackLink className="text-link" href="/about" event="cta_clicked" eventLabel="home-about">How our team operates <span>↗</span></TrackLink></header><ol><li><span>01</span><div><p className="label">Direction</p><h3>Frame the decision</h3><p>Align on the business outcome, the people affected, and the evidence needed.</p></div></li><li><span>02</span><div><p className="label">Evidence</p><h3>Prove the direction</h3><p>Test the riskiest assumptions with working product slices and real users.</p></div></li><li><span>03</span><div><p className="label">Operation</p><h3>Ship and learn</h3><p>Release safely, measure what changed, and improve the live product.</p></div></li></ol></section>
      <CTA />
    </main>
  );
}
