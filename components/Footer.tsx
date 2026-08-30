"use client";

import Link from "next/link";
import { SITE_RELEASE_LABEL } from "@/lib/site-release";
import { Brand } from "./Brand";
import { useRegion } from "./RegionProvider";

export function Footer() {
  const { region } = useRegion();
  return (
    <footer className="site-footer classic-footer">
      <div className="shell classic-footer-main">
        <div className="classic-footer-brand"><Link className="brand" href="/" aria-label="Bluice Technologies home"><Brand /></Link><p>Senior product strategy, design, engineering, and platform delivery in one accountable team.</p><span>{region.footerLine}</span><nav className="footer-social" aria-label="Bluice Technologies social media"><a href="https://www.linkedin.com/company/bluice-technologies/" target="_blank" rel="noreferrer">LinkedIn <span>→</span></a><a href="https://www.instagram.com/bluicetechnologies/" target="_blank" rel="noreferrer">Instagram <span>→</span></a></nav></div>
        <div className="classic-footer-links">
          <nav className="footer-navigation" aria-label="Company"><p className="label">Navigate</p><div className="footer-navigation-grid"><Link href="/">Home</Link><Link href="/careers">Careers</Link><Link className="footer-responsibility" href="/csr">Corporate responsibility</Link><Link href="/investors">Investor relations</Link></div></nav>
          <nav aria-label="Products"><p className="label">Products</p><Link href="/products/zutin">Zutin</Link><Link href="/products/bluice-nxt">Bluice NXT</Link></nav>
          <address><p className="label">Get in touch</p><a href="mailto:hello@bluice.in">hello@bluice.in</a><Link href="/contact">Contact us</Link><p>Replies within one business day.</p></address>
        </div>
      </div>
      <div className="shell classic-footer-base">
        <div className="classic-footer-release">
          <span>© 2026 Bluice Technologies. All Rights Reserved.</span>
          <span className="site-release" title="Current website release and published update number">{SITE_RELEASE_LABEL}</span>
        </div>
        <nav aria-label="Legal"><Link href="/terms">Terms &amp; Conditions</Link><Link href="/privacy">Privacy Policy</Link><Link href="/cookies">Cookie Policy</Link><button type="button" onClick={() => window.dispatchEvent(new Event("bluice:consent-settings"))}>Cookie settings</button><Link href="/accessibility">Accessibility Statement</Link></nav>
      </div>
    </footer>
  );
}
