"use client";

import { createContext, useContext, useSyncExternalStore } from "react";
import { RegionCode, regions } from "@/lib/regions";

type Region = (typeof regions)[RegionCode];
const RegionContext = createContext<{ code: RegionCode; region: Region }>({ code: "IN", region: regions.IN });
const subscribe = () => () => {};
const getRegion = (): RegionCode => {
  const saved = localStorage.getItem("northline-region");
  return saved && saved in regions ? saved as RegionCode : "IN";
};

export function RegionProvider({ children }: { children: React.ReactNode }) {
  const code = useSyncExternalStore<RegionCode>(subscribe, getRegion, () => "IN");
  return <RegionContext.Provider value={{ code, region: regions[code] }}>{children}</RegionContext.Provider>;
}

export function useRegion() { return useContext(RegionContext); }

export function RegionStatus() {
  const { region } = useRegion();
  return <span><span className="region-status-full">{region.marketLine}</span><span className="region-status-mobile">{region.marketLine}</span></span>;
}
