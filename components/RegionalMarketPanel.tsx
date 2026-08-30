"use client";

import Image from "next/image";
import Link from "next/link";
import { useRegion } from "./RegionProvider";

export function RegionalMarketPanel() {
  const { code, region } = useRegion();
  const displayCode = code === "GB" ? "UK" : code;
  return (
    <section className="regional-brief">
      <div className="shell">
        <header className="regional-brief-head">
          <div><span className="label">Regional operating brief</span><p>{displayCode} / {region.currency}</p></div>
          <h2>{region.marketHeadline}</h2>
        </header>

        <div className="regional-brief-stage">
          <figure className="regional-brief-media">
            <Image src={region.image} alt={region.imageAlt} fill sizes="(max-width: 760px) 100vw, 62vw" />
            <figcaption><span className="label">Local operating context</span><strong>{region.name}</strong></figcaption>
          </figure>
          <aside className="regional-brief-context">
            <p className="regional-brief-intro">{region.marketIntroduction}</p>
            <div><span className="label">Context we account for</span><p>{region.cultureNote}</p></div>
            <Link className="regional-brief-cta" href="/contact">Discuss work in {region.name} <span aria-hidden="true">↗</span></Link>
          </aside>
        </div>

        <div className="regional-brief-priorities">
          <header><span className="label">Operating priorities</span><p>Three considerations shaping work in {region.name}</p></header>
          <div>{region.marketPriorities.map((priority) => <article key={priority.title}><h3>{priority.title}</h3><p>{priority.detail}</p></article>)}</div>
        </div>
      </div>
    </section>
  );
}
