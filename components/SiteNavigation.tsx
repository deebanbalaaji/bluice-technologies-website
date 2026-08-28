"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

const menuGroups = [
  {
    id: "services",
    label: "What we do",
    href: "/services",
    eyebrow: "Connected capabilities",
    description: "Strategy, design, engineering, and platform work held accountable to one product outcome.",
    links: [
      ["Product strategy", "/services/product-strategy"],
      ["UX & UI design", "/services/ux-ui-design"],
      ["Product engineering", "/services/product-engineering"],
      ["Cloud & platform", "/services/cloud-platform"],
      ["Continuous evolution", "/services/continuous-evolution"],
    ],
  },
  {
    id: "industries",
    label: "Industries",
    href: "/industries",
    eyebrow: "Sector capability",
    description: "Explore how product, engineering, and platform decisions change across eight operating environments.",
    links: [
      ["Financial services", "/industries/financial-services"],
      ["Healthcare and life sciences", "/industries/healthcare-life-sciences"],
      ["Manufacturing and field operations", "/industries/manufacturing-field-operations"],
      ["Retail and commerce", "/industries/retail-commerce"],
      ["Logistics and mobility", "/industries/logistics-mobility"],
      ["Energy and utilities", "/industries/energy-utilities"],
      ["Public services", "/industries/public-services"],
      ["Enterprise and software platforms", "/industries/enterprise-platforms"],
    ],
  },
  {
    id: "about",
    label: "Who we are",
    href: "/about",
    eyebrow: "One accountable team",
    description: "Meet the operating model and principles that keep senior product thinking close to delivery.",
    links: [
      ["Our operating model", "/about/operating-model"],
      ["Leadership and accountability", "/about/leadership"],
      ["Ways of working", "/about/ways-of-working"],
      ["Corporate responsibility", "/csr"],
    ],
  },
] as const;

export function SiteNavigation() {
  const pathname = usePathname();
  const desktopNav = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mobileMenu = useRef<HTMLDetailsElement>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const current = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  const closeMobileMenu = () => {
    mobileMenu.current?.removeAttribute("open");
    setMobileOpen(false);
  };

  const cancelScheduledClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const openDesktopMenu = useCallback((id: string) => {
    cancelScheduledClose();
    setOpenMenu(id);
  }, [cancelScheduledClose]);

  const scheduleDesktopClose = useCallback(() => {
    cancelScheduledClose();
    closeTimer.current = setTimeout(() => {
      setOpenMenu(null);
      closeTimer.current = null;
    }, 240);
  }, [cancelScheduledClose]);

  useEffect(() => {
    const closeFromOutside = (event: PointerEvent) => {
      if (!desktopNav.current?.contains(event.target as Node)) {
        cancelScheduledClose();
        setOpenMenu(null);
      }
    };
    const closeFromKeyboard = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        cancelScheduledClose();
        setOpenMenu(null);
      }
    };

    document.addEventListener("pointerdown", closeFromOutside);
    document.addEventListener("keydown", closeFromKeyboard);
    return () => {
      cancelScheduledClose();
      document.removeEventListener("pointerdown", closeFromOutside);
      document.removeEventListener("keydown", closeFromKeyboard);
    };
  }, [cancelScheduledClose]);

  return (
    <>
      <nav className="desktop-nav" aria-label="Primary navigation" ref={desktopNav}>
        {menuGroups.map((group) => {
          const isOpen = openMenu === group.id;
          return (
            <div
              className="desktop-nav-group"
              key={group.id}
              onMouseEnter={() => openDesktopMenu(group.id)}
              onMouseLeave={scheduleDesktopClose}
            >
              <div className="desktop-nav-entry">
                <Link
                  className="desktop-nav-overview"
                  href={group.href}
                  aria-current={current(group.href) ? "page" : undefined}
                  onFocus={() => openDesktopMenu(group.id)}
                  onClick={() => {
                    cancelScheduledClose();
                    setOpenMenu(null);
                  }}
                >
                  {group.label}
                </Link>
                <button
                  className="desktop-nav-trigger"
                  type="button"
                  aria-label={`Open ${group.label} menu`}
                  aria-expanded={isOpen}
                  aria-controls={`desktop-${group.id}-menu`}
                  onClick={() => {
                    cancelScheduledClose();
                    setOpenMenu(isOpen ? null : group.id);
                  }}
                >
                  <i aria-hidden="true" />
                </button>
              </div>
              <div
                className={`nav-drawer${isOpen ? " is-open" : ""}`}
                id={`desktop-${group.id}-menu`}
                aria-hidden={!isOpen}
                onMouseEnter={cancelScheduledClose}
                onMouseLeave={scheduleDesktopClose}
              >
                <div className="shell nav-drawer-inner">
                  <div className="nav-drawer-intro">
                    <p className="label">{group.eyebrow}</p>
                    <h2>{group.label}</h2>
                    <p>{group.description}</p>
                    <Link href={group.href} onClick={() => {
                      cancelScheduledClose();
                      setOpenMenu(null);
                    }}>
                      View overview <span aria-hidden="true">↗</span>
                    </Link>
                  </div>
                  <div className="nav-drawer-links">
                    {group.links.map(([label, href], index) => (
                      <Link key={href} href={href} onClick={() => {
                        cancelScheduledClose();
                        setOpenMenu(null);
                      }}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <strong>{label}</strong>
                        <i aria-hidden="true">↗</i>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <Link
          className="desktop-nav-direct"
          href="/careers"
          aria-current={current("/careers") ? "page" : undefined}
          onClick={() => {
            cancelScheduledClose();
            setOpenMenu(null);
          }}
        >
          Careers
        </Link>
      </nav>

      <details className="mobile-menu" ref={mobileMenu} onToggle={(event) => setMobileOpen(event.currentTarget.open)}>
        <summary aria-label={`${mobileOpen ? "Close" : "Open"} navigation`} aria-expanded={mobileOpen}>
          <span className="menu-label">Menu</span>
          <span className="menu-icon" aria-hidden="true"><i /><i /></span>
        </summary>
        <nav aria-label="Mobile navigation">
          {menuGroups.map((group) => (
            <details className="mobile-nav-group" key={group.id}>
              <summary>
                <span>{group.label}</span>
                <i aria-hidden="true" />
              </summary>
              <div className="mobile-nav-submenu">
                <Link href={group.href} onClick={closeMobileMenu}>Overview</Link>
                {group.links.map(([label, href]) => (
                  <Link key={href} href={href} onClick={closeMobileMenu}>{label}</Link>
                ))}
              </div>
            </details>
          ))}
          <Link href="/careers" onClick={closeMobileMenu} aria-current={current("/careers") ? "page" : undefined}>Careers</Link>
          <Link href="/contact" onClick={closeMobileMenu} aria-current={current("/contact") ? "page" : undefined}>Contact us</Link>
        </nav>
      </details>
    </>
  );
}
