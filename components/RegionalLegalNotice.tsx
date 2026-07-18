"use client";

import { useRegion } from "./RegionProvider";

export function RegionalLegalNotice({ kind }: { kind: "terms" | "privacy" }) {
  const { region } = useRegion();
  return (
    <aside className="regional-legal" aria-label={`${region.name} legal information`}>
      <p className="label">Regional information · {region.name}</p>
      <p>{kind === "terms" ? region.terms : region.privacy}</p>
      <a href={region.authorityUrl} target="_blank" rel="noreferrer">Official guidance: {region.authority} <span aria-hidden="true">↗</span></a>
    </aside>
  );
}
