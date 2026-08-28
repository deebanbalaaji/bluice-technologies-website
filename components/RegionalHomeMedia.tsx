"use client";

import Image from "next/image";
import Link from "next/link";
import { regionalMedia } from "@/lib/regional-media";
import { useRegion } from "./RegionProvider";

export function RegionalHomeStory() {
  const { code, region } = useRegion();
  const media = regionalMedia[code];
  return <section className="home-media-story"><div className="shell home-media-grid"><div className="home-media-lead"><Image src={media.homePrimary.src} alt={media.homePrimary.alt} fill sizes="(max-width: 760px) 100vw, 58vw" /></div><div className="home-media-small"><Image src={media.homeSecondary.src} alt={media.homeSecondary.alt} fill sizes="(max-width: 760px) 100vw, 32vw" /></div><div className="home-media-copy"><p className="eyebrow">Operating in {region.name}</p><h2>Technology belongs in the operating environment.</h2><p>Research happens where work happens. Product decisions are tested against real roles, constraints, and service conditions.</p><Link className="text-link" href="/about/operating-model">See our operating model <span>→</span></Link></div></div></section>;
}

export function RegionalResponsibility() {
  const { code, region } = useRegion();
  const image = regionalMedia[code].responsibility;
  return <section className="home-responsibility shell"><div><p className="eyebrow">Responsibility / {region.name}</p><h2>Responsible technology is part of product quality.</h2><p>Accessibility, data responsibility, environmental care, and human accountability are considered during the work, not added after delivery.</p><Link className="text-link" href="/csr">Corporate responsibility <span>→</span></Link></div><div className="home-responsibility-image"><Image src={image.src} alt={image.alt} fill sizes="(max-width: 760px) 100vw, 48vw" /></div></section>;
}
