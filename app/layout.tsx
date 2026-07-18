import type { Metadata, Viewport } from "next";
import "@fontsource/literata/500.css";
import "@fontsource/public-sans/400.css";
import "@fontsource/public-sans/500.css";
import "@fontsource/public-sans/600.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MotionObserver } from "@/components/MotionObserver";
import { RegionProvider } from "@/components/RegionProvider";
import { CookieConsent } from "@/components/CookieConsent";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://northline.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Bluice Technologies — Product engineering for consequential work", template: "%s — Bluice Technologies" },
  description: "A senior product engineering studio that makes complex operational products clear, dependable and useful.",
  openGraph: { title: "Bluice Technologies — Complex products, made clear.", description: "Product strategy, design and engineering for ambitious businesses.", url: siteUrl, siteName: "Bluice Technologies", locale: "en_IN", type: "website" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "#f5f8fc" }, { media: "(prefers-color-scheme: dark)", color: "#0d1825" }],
};

const organizationSchema = {
  "@context": "https://schema.org", "@type": "Organization", name: "Bluice Technologies", url: siteUrl,
  email: "hello@northline.example", areaServed: "Worldwide",
  knowsAbout: ["Product strategy", "UX design", "Software engineering", "Cloud platforms"],
};

const themeScript = `(function(){try{var saved=localStorage.getItem('northline-theme');var theme=saved==='light'||saved==='dark'?saved:matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.dataset.theme=theme;document.documentElement.style.colorScheme=theme}catch(e){}})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head><body><RegionProvider><a className="skip-link" href="#main">Skip to content</a><MotionObserver /><Header />{children}<Footer /><CookieConsent /></RegionProvider><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} /></body></html>;
}
