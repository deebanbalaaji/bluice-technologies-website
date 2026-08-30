"use client";

import { RegionCode, regions } from "@/lib/regions";
import { useEffect, useRef } from "react";
import { useRegion } from "./RegionProvider";

export function HeaderTools() {
  const { code, region } = useRegion();
  const marketSwitcher = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      if (!marketSwitcher.current?.contains(event.target as Node)) marketSwitcher.current?.removeAttribute("open");
    };
    const closeWithKeyboard = (event: KeyboardEvent) => {
      if (event.key === "Escape") marketSwitcher.current?.removeAttribute("open");
    };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeWithKeyboard);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeWithKeyboard);
    };
  }, []);

  const changeRegion = (value: string) => {
    localStorage.setItem("bluice-region", value as RegionCode);
    window.location.reload();
  };

  return <div className="header-tools">
    <details className="market-switcher" ref={marketSwitcher} onToggle={(event) => {
      const isOpen = event.currentTarget.open;
      if (isOpen) document.querySelector<HTMLDetailsElement>(".mobile-menu[open]")?.removeAttribute("open");
    }}>
      <summary aria-label={`Change market. Current selection ${region.name}, ${region.currency}`}>
        <span className="market-code">{code === "GB" ? "UK" : code}</span>
        <span className="market-separator" aria-hidden="true" />
        <span className="market-currency">{region.currency}</span>
        <span className="market-chevron" aria-hidden="true" />
      </summary>
      <div className="market-menu" aria-label="Select country or region">
        <header><span>Market</span><span>Currency</span></header>
        {Object.entries(regions).map(([value, option]) => <button type="button" className={value === code ? "is-selected" : undefined} aria-current={value === code ? "true" : undefined} onClick={() => changeRegion(value)} key={value}>
          <span className="market-option-code">{value === "GB" ? "UK" : value}</span>
          <span className="market-option-name">{option.name}</span>
          <span className="market-option-currency">{option.currency}</span>
          <i aria-hidden="true" />
        </button>)}
      </div>
    </details>
    <div className="site-search"><button className="search-trigger" type="button" aria-label="Search with Bluice NXT" onClick={() => window.dispatchEvent(new Event("bluice:nxt-open"))}><svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><circle cx="10.8" cy="10.8" r="6.5" /><path d="m16 16 4.2 4.2" /></svg><span className="search-label">Search</span></button></div>
  </div>;
}
