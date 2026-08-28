"use client";

import Image from "next/image";
import Link from "next/link";
import { getIndustry, industries } from "@/lib/industries";
import { useRegion } from "./RegionProvider";

export function RegionalIndustryHero() {
  const { code, region } = useRegion();
  return <header className="regional-industry-hero contextual-gradient-hero gradient-hero-industries" data-region={code}><Image src={region.image} alt="" fill priority sizes="100vw" /><span className="industry-hero-shade" aria-hidden="true" /><div className="shell regional-industry-hero-copy"><p className="eyebrow">Industries / {region.name}</p><h1>Technology shaped by how {region.name} operates.</h1><p>{region.marketIntroduction}</p><div><span>{region.currency}</span><span>{region.marketPriorities[0].title}</span><span>{region.marketPriorities[1].title}</span></div></div></header>;
}

export function RegionalIndustryFocus() {
  const { region } = useRegion();
  return <section className="regional-industry-focus"><div className="shell"><header><p className="eyebrow">{region.name} operating lens</p><h2>Priority environments for this market.</h2><p>{region.cultureNote}</p></header><div>{region.industryFocus.map((focus) => {
    const industry = getIndustry(focus.slug);
    const image = industry?.sectors[0];
    return <Link href={`/industries/${focus.slug}`} key={focus.slug}>{image && <div className="regional-industry-focus-media"><Image src={image.image} alt={image.imageAlt} fill sizes="(max-width: 640px) 100vw, 50vw" /></div>}<div className="regional-industry-focus-copy"><span>{focus.label}</span><p>{focus.context}</p><b>Explore the industry →</b></div></Link>;
  })}</div></div></section>;
}

export function RegionalIndustryDirectory() {
  const { region } = useRegion();
  const prioritySlugs = new Set<string>(region.industryFocus.map((focus) => focus.slug));
  const additionalIndustries = industries.filter((industry) => !prioritySlugs.has(industry.slug));

  return <section className="industry-directory shell" aria-labelledby="additional-industries-title">
    <header className="industry-directory-intro"><p className="eyebrow">Broader capability</p><h2 id="additional-industries-title">More industries we support.</h2><p>Explore the sectors beyond {region.name}&apos;s priority environments.</p></header>
    {additionalIndustries.map((industry) => <Link href={`/industries/${industry.slug}`} className="industry-directory-item" key={industry.slug}>
      <div className="industry-directory-image"><Image src={industry.image} alt={industry.imageAlt} fill sizes="(max-width: 760px) 100vw, 45vw" /></div>
      <div className="industry-directory-copy"><span>{industry.name}</span><h2>{industry.headline}</h2><p>{industry.summary}</p><ul>{industry.priorities.map((priority) => <li key={priority}>{priority}</li>)}</ul><b>View industry →</b></div>
    </Link>)}
  </section>;
}

export function RegionalIndustryNote({ industrySlug, industryName }: { industrySlug: string; industryName: string }) {
  const { region } = useRegion();
  const focus = region.industryFocus.find((item) => item.slug === industrySlug);
  const marketPriorities = region.marketPriorities.map((item) => item.title.toLowerCase()).join(", ");
  return <section className="regional-industry-note"><div className="shell"><div><p className="eyebrow">{region.name} context</p><h2>{focus?.label ?? industryName} in this market</h2></div><div><p>{focus?.context ?? `${industryName} programmes in ${region.name} should account for ${marketPriorities}. Bluice begins with the operating and regulatory context before shaping the technology response.`}</p><span>{region.cultureNote}</span></div></div></section>;
}
