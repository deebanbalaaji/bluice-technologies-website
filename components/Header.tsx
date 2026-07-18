import Link from "next/link";
import { Brand } from "./Brand";
import { ThemeToggle } from "./ThemeToggle";
import { SiteNavigation } from "./SiteNavigation";
import { HeaderTools } from "./HeaderTools";
import { RegionStatus } from "./RegionProvider";
import { TrackLink } from "./TrackLink";

export function Header() {
  return (
    <header className="site-header">
      <div className="corporate-bar"><div className="shell"><span>Product strategy · Design · Engineering · Platforms</span><RegionStatus /></div></div>
      <div className="shell nav-wrap">
        <Link className="brand" href="/" aria-label="Bluice Technologies home"><Brand /></Link>
        <div className="header-actions">
          <SiteNavigation />
          <div className="header-utility"><HeaderTools /><HeaderTools compact panelId="compact-header-search-panel" /><ThemeToggle /></div>
          <TrackLink className="button button-small desktop-header-cta" href="/contact" event="cta_clicked" eventLabel="header">Connect</TrackLink>
        </div>
      </div>
    </header>
  );
}
