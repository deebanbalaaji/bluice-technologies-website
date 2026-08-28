"use client";

import Image from "next/image";
import Link from "next/link";
import { useRegion } from "./RegionProvider";

export function RegionalMarketPanel() {
  const { region } = useRegion();
  return (
    <section className="regional-market">
      <div className="shell regional-market-grid">
        <header><span className="label">{region.name}</span><h2>{region.marketHeadline}</h2><p>{region.marketIntroduction}</p><p className="regional-culture-note">{region.cultureNote}</p><Link className="text-link regional-market-link" href="/contact">Discuss work in {region.name} <span>→</span></Link></header>
        <div className="regional-market-image"><Image src={region.image} alt={region.imageAlt} fill sizes="(max-width: 760px) 100vw, 48vw" /></div>
        <div className="regional-priorities">{region.marketPriorities.map((priority) => <article key={priority.title}><h3>{priority.title}</h3><p>{priority.detail}</p></article>)}</div>
      </div>
    </section>
  );
}
