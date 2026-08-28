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
        <div className="classic-footer-brand"><Link className="brand" href="/" aria-label="Bluice Technologies home"><Brand /></Link><p>Senior product strategy, design, engineering, and platform delivery in one accountable team.</p><span>{region.footerLine}</span><nav className="footer-social" aria-label="Bluice Technologies social media"><a href="https://www.linkedin.com/company/bluice-technologies/" target="_blank" rel="noreferrer">LinkedIn <span>→</span></a><a href="https://www.instagram.com/bluicetechnologies/" target="_blank" rel="noreferrer">Instagram <span>→</span></a><a href="https://www.youtube.com/@BluiceTechnologies" target="_blank" rel="noreferrer">YouTube <span>→</span></a></nav></div>
        <div className="classic-footer-links">
          <nav aria-label="Company"><p className="label">Navigate</p><Link href="/">Home</Link><Link href="/services">What we do</Link><Link href="/industries">Industries</Link><Link href="/about">Who we are</Link><Link href="/careers">Careers</Link><Link className="footer-sub-link" href="/csr">Corporate responsibility</Link></nav>
          <address><p className="label">Get in touch</p><a href="mailto:hello@bluice.in">hello@bluice.in</a><Link href="/contact">Contact us</Link><p>Replies within one business day.</p></address>
        </div>
      </div>
      <div className="shell classic-footer-cta"><p>Have a product problem worth solving?</p><Link className="classic-footer-contact" href="/contact">Contact us <span>→</span></Link></div>
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
