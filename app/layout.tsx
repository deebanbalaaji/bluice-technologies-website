import type { Metadata, Viewport } from "next";
import "@fontsource/literata/500.css";
import "@fontsource/public-sans/400.css";
import "@fontsource/public-sans/500.css";
import "@fontsource/public-sans/600.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RegionProvider } from "@/components/RegionProvider";
import { CookieConsent } from "@/components/CookieConsent";
import { BluiceNxt } from "@/components/BluiceNxt";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bluice.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Bluice Technologies | Product and technology partner", template: "%s | Bluice Technologies" },
  description: "Product strategy, design, engineering, and platforms shaped around complex business operations.",
  openGraph: { title: "Bluice Technologies | Product and technology partner", description: "Product strategy, design, engineering, and platforms shaped around complex business operations.", url: siteUrl, siteName: "Bluice Technologies", locale: "en_IN", type: "website" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f6f6f3",
};

const organizationSchema = {
  "@context": "https://schema.org", "@type": "Organization", name: "Bluice Technologies", url: siteUrl,
  email: "hello@bluice.in", areaServed: "Worldwide",
  knowsAbout: ["Product strategy", "UX design", "Software engineering", "Cloud platforms", "Industry transformation", "Responsible technology"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth"><body><RegionProvider><a className="skip-link" href="#main">Skip to content</a><Header />{children}<Footer /><CookieConsent /><BluiceNxt /></RegionProvider><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} /></body></html>;
}
