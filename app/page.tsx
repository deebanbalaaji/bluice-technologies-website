import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { HeroFilm } from "@/components/HeroFilm";
import { IndustrySlider } from "@/components/IndustrySlider";
import { RegionalMarketPanel } from "@/components/RegionalMarketPanel";
import { RegionalHomeStory, RegionalResponsibility } from "@/components/RegionalHomeMedia";
import { TrackLink } from "@/components/TrackLink";
import { industries } from "@/lib/industries";
import { services } from "@/lib/content";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return <main id="main" className="home-rebuilt">
    <section className="hero hero-editorial hero-film home-enterprise-hero">
      <HeroFilm />
      <div className="shell hero-film-layout">
        <div className="hero-copy"><p className="eyebrow">Product and technology partner</p><h1>Make complex operations easier to run.</h1><p className="hero-lede">Bluice connects product strategy, design, engineering, and platforms around one business outcome.</p><div className="hero-actions"><TrackLink className="button" href="/contact" event="cta_clicked" eventLabel="hero">Contact us</TrackLink></div></div>
      </div>
    </section>

    <section className="home-value shell"><h2>From sector context to a dependable live product.</h2><div><p>Bluice works with teams where software is tied to revenue, safety, service quality, or essential daily operations.</p><p>We reduce uncertainty before it becomes rework, then keep senior product and engineering responsibility close through release.</p></div></section>

    <section className="home-industry-reel"><div className="shell"><header><p className="eyebrow">Industry collaboration</p><h2>Start with how your organisation operates.</h2><p>Eight industry areas, each with detailed sector pages and transparent capability scenarios.</p></header></div><IndustrySlider items={industries} /></section>

    <section className="home-capabilities shell"><header><h2>Five capabilities, connected by one product decision.</h2><p>Engage Bluice for a focused need or connect the complete path from direction to live operation.</p></header><div className="home-capability-grid">{services.map((service) => <Link href={`/services/${service.slug}`} key={service.slug}><h3>{service.name}</h3><p>{service.summary}</p><span>{service.engagement}</span><b>Explore service →</b></Link>)}</div></section>

    <RegionalHomeStory />

    <RegionalMarketPanel />

    <RegionalResponsibility />

    <CTA title="Bring us the operating problem." context="We will help define the right product, platform, and engineering response." />
  </main>;
}
