import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Bluice Technologies uses cookies, local storage and similar technologies on this website.",
  alternates: { canonical: "/cookies" },
  openGraph: { title: "Cookie Policy", description: "How Bluice Technologies uses cookies, local storage and similar technologies on this website.", url: "/cookies" },
};

export default function CookiePolicyPage() {
  return (
    <main id="main" className="legal-page">
      <header className="legal-hero shell"><p className="eyebrow">Legal</p><h1>Cookie Policy</h1><p>Effective 18 July 2026</p></header>
      <article className="legal-content shell">
        <p className="legal-intro">This policy explains how Bluice Technologies uses cookies, browser storage and similar technologies on this website.</p>

        <h2>1. What this website stores</h2>
        <p>The website uses local browser storage to remember your selected colour theme and country or region. These preferences are stored on your device so the website can present the appropriate appearance, currency and regional information when you return.</p>

        <h2>2. Essential technologies</h2>
        <p>Hosting and security providers may use strictly necessary cookies or similar technologies to deliver pages, protect forms, prevent abuse and maintain website reliability. These technologies are used only where needed to provide the service you request.</p>

        <h2>3. Analytics</h2>
        <p>No advertising cookies are configured on this website. Analytics events remain disabled unless you select “Accept all” or enable Analytics in Cookie settings. This policy will be updated before materially different tracking is introduced.</p>

        <h2>4. Third-party scheduling</h2>
        <p>After a successful consultation enquiry, the website may display a Calendly scheduling frame. Calendly may use its own cookies or similar technologies when that frame loads. Calendly controls those technologies under its own privacy and cookie notices.</p>

        <h2>5. Your choices</h2>
        <p>Use the Cookie settings link in the footer to change optional Analytics and Scheduling permissions at any time. You can also remove stored theme, region and consent preferences through your browser’s site-data settings. Doing so resets those choices to their defaults.</p>

        <h2>6. Updates and contact</h2>
        <p>We may update this policy when the website or its service providers change. Questions about website storage can be sent to <a href="mailto:hello@northline.example">hello@northline.example</a>.</p>

        <p className="legal-note">This policy should be reviewed by qualified legal counsel before production launch and whenever analytics, advertising or additional embedded services are introduced.</p>
      </article>
    </main>
  );
}
