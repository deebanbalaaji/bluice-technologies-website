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
        <div className="classic-footer-brand"><Link className="brand" href="/" aria-label="Bluice Technologies home"><Brand /></Link><p>Senior product strategy, design, engineering, and platform delivery in one accountable team.</p><span>{region.footerLine}</span></div>
        <div className="classic-footer-links">
          <nav aria-label="Company"><p className="label">Company</p><Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/work">Work</Link><Link href="/about">About</Link><Link href="/careers">Careers</Link></nav>
          <address><p className="label">Contact</p><a href="mailto:hello@northline.example">hello@northline.example</a><Link href="/contact">Connect</Link><p>Replies within one business day.</p></address>
        </div>
      </div>
      <div className="shell classic-footer-cta"><p>Have a product problem worth solving?</p><Link href="/contact">Connect with us <span>↗</span></Link></div>
      <div className="shell classic-footer-base">
        <div className="classic-footer-release">
          <span>© {new Date().getFullYear()} Bluice Technologies. All Rights Reserved.</span>
          <span className="site-release" title="Current website release and published update number">{SITE_RELEASE_LABEL}</span>
        </div>
        <nav aria-label="Legal"><Link href="/terms">Terms &amp; Conditions</Link><Link href="/privacy">Privacy Policy</Link><Link href="/cookies">Cookie Policy</Link><button type="button" onClick={() => window.dispatchEvent(new Event("northline:consent-settings"))}>Cookie settings</button><Link href="/accessibility">Accessibility Statement</Link></nav>
      </div>
    </footer>
  );
}
