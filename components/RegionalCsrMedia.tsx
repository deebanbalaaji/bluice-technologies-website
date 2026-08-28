"use client";

import Image from "next/image";
import { regionalMedia } from "@/lib/regional-media";
import { useRegion } from "./RegionProvider";

export function RegionalCsrMedia({ role, className }: { role: "csrInclusive" | "csrEnvironment" | "csrCommunity"; className: string }) {
  const { code } = useRegion();
  const image = regionalMedia[code][role];
  return <div className={className}><Image src={image.src} alt={image.alt} fill sizes="(max-width: 760px) 100vw, 50vw" /></div>;
}
