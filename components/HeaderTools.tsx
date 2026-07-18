"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { RegionCode, regions } from "@/lib/regions";
import { useRegion } from "./RegionProvider";

const searchIndex = [
  { label: "Product strategy", href: "/services#product-strategy", terms: "research roadmap discovery direction" },
  { label: "UX/UI design", href: "/services#ux-ui-design", terms: "user experience interface workflow design" },
  { label: "Product engineering", href: "/services#product-engineering", terms: "software web mobile development" },
  { label: "Cloud & platform", href: "/services#cloud-platform", terms: "cloud architecture devops infrastructure" },
  { label: "Continuous evolution", href: "/services#continuous-evolution", terms: "support optimisation live product" },
  { label: "Services overview", href: "/services", terms: "services capabilities" },
  { label: "Selected work", href: "/work", terms: "case studies results clients" },
  { label: "Freight operations case study", href: "/work/harbor-freight-operations", terms: "logistics harbor operations" },
  { label: "Care coordination case study", href: "/work/morrow-care-coordination", terms: "healthcare morrow clinicians" },
  { label: "Finance platform case study", href: "/work/relay-finance-platform", terms: "lending finance relay" },
  { label: "About the team", href: "/about", terms: "company leadership principles" },
  { label: "Careers", href: "/careers", terms: "jobs roles hiring team work with us" },
  { label: "Connect", href: "/contact", terms: "contact consultation project enquiry" },
] as const;

const trending = searchIndex.slice(0, 4);

export function HeaderTools({ compact = false, panelId }: { compact?: boolean; panelId?: string }) {
  const { code } = useRegion();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const trigger = useRef<HTMLButtonElement>(null);
  const normalized = query.trim().toLowerCase();
  const results = normalized ? searchIndex.filter((item) => `${item.label} ${item.terms}`.toLowerCase().includes(normalized)) : trending;
  const searchPanelId = panelId || "desktop-search-panel";

  return (
    <div className={`header-tools${compact ? " header-tools-compact" : ""}`} onKeyDown={(event) => { if (event.key === "Escape" && open) { setOpen(false); trigger.current?.focus(); } }}>
      <label className="country-control"><span className="sr-only">Country or region</span><select value={code} aria-label="Country or region" onChange={(event) => { localStorage.setItem("northline-region", event.target.value as RegionCode); window.location.reload(); }}>{Object.entries(regions).map(([value, region]) => <option value={value} key={value}>{value === "GB" ? "UK" : value}{compact ? "" : ` · ${region.currency}`}</option>)}</select></label>
      <div className="site-search">
        <button ref={trigger} className="search-trigger" type="button" aria-label="Search" aria-expanded={open} aria-controls={searchPanelId} onClick={() => setOpen((value) => !value)}><span className="search-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="5.5" /><path d="m15 15 4 4" /></svg></span><span className="search-label">Search</span></button>
      </div>
      {open && <div className="search-panel" id={searchPanelId}>
        <label><span>Search this site</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try “product engineering”…" autoComplete="off" /></label>
        <p className="label">{normalized ? "Results" : "Trending searches"}</p>
        <div className="search-results">{results.length ? results.map((item) => <Link href={item.href} key={item.href} onClick={() => setOpen(false)}>{item.label}<span aria-hidden="true">↗</span></Link>) : <p>No matching page. Try “services” or “work”.</p>}</div>
      </div>}
    </div>
  );
}
