"use client";

import Image from "next/image";
import { regionalMedia } from "@/lib/regional-media";
import { useRegion } from "./RegionProvider";

export function RegionalCareerContext() {
  const { code, region } = useRegion();
  const image = regionalMedia[code].career;
  return <section className="career-region"><div className="career-region-image"><Image src={image.src} alt={image.alt} fill sizes="(max-width: 760px) 100vw, 48vw" /></div><div className="career-region-copy"><p className="eyebrow">Working context / {region.name}</p><h2>{region.career.headline}</h2><p>{region.career.introduction}</p><ul>{region.career.workingContext.map((item) => <li key={item}>{item}</li>)}</ul><p className="career-region-inclusion">{region.career.inclusion}</p></div></section>;
}
