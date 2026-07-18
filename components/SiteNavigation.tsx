"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

const links = [["Home", "/"], ["Services", "/services"], ["Work", "/work"], ["About", "/about"]] as const;

export function SiteNavigation() {
  const pathname = usePathname();
  const menu = useRef<HTMLDetailsElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const current = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const closeMenu = () => {
    menu.current?.removeAttribute("open");
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([label, href]) => <Link key={href} href={href} aria-current={current(href) ? "page" : undefined}>{label}</Link>)}
      </nav>
      <details className="mobile-menu" ref={menu} onToggle={(event) => setMenuOpen(event.currentTarget.open)}>
        <summary aria-label={`${menuOpen ? "Close" : "Open"} navigation`} aria-expanded={menuOpen}><span className="menu-label">Menu</span><span className="menu-icon" aria-hidden="true"><i /><i /></span></summary>
        <nav aria-label="Mobile navigation">
          {links.map(([label, href]) => <Link key={href} href={href} onClick={closeMenu} aria-current={current(href) ? "page" : undefined}>{label}</Link>)}
          <Link href="/contact" onClick={closeMenu} aria-current={pathname === "/contact" ? "page" : undefined}>Connect</Link>
        </nav>
      </details>
    </>
  );
}
