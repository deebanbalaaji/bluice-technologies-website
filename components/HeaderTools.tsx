"use client";

import { RegionCode, regions } from "@/lib/regions";
import { useRegion } from "./RegionProvider";

export function HeaderTools() {
  const { code } = useRegion();
  return <div className="header-tools">
    <label className="country-control"><span className="sr-only">Country or region</span><select value={code} aria-label="Country or region" onChange={(event) => { localStorage.setItem("bluice-region", event.target.value as RegionCode); window.location.reload(); }}>{Object.entries(regions).map(([value, region]) => <option value={value} key={value}>{value === "GB" ? "UK" : value} · {region.currency}</option>)}</select></label>
    <div className="site-search"><button className="search-trigger" type="button" aria-label="Search with Bluice NXT" onClick={() => window.dispatchEvent(new Event("bluice:nxt-open"))}><svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><circle cx="10.8" cy="10.8" r="6.5" /><path d="m16 16 4.2 4.2" /></svg><span className="search-label">Search</span></button></div>
  </div>;
}
