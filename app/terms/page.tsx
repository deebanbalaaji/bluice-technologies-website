import type { Metadata } from "next";
import { RegionalLegalNotice } from "@/components/RegionalLegalNotice";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms governing access to and use of the Bluice Technologies website.",
  alternates: { canonical: "/terms" },
  openGraph: { title: "Terms & Conditions", description: "Terms governing access to and use of the Bluice Technologies website.", url: "/terms" },
};

export default function TermsPage() {
  return (
    <main id="main" className="legal-page">
      <header className="legal-hero shell"><p className="eyebrow">Legal</p><h1>Terms &amp; Conditions</h1><p>Effective 17 July 2026</p></header>
      <article className="legal-content shell">
        <p className="legal-intro">These terms govern your use of this website. By accessing it, you agree to these terms. If you do not agree, please do not use the website.</p>
        <RegionalLegalNotice kind="terms" />

        <h2>1. About this website</h2>
        <p>Bluice Technologies provides product strategy, design, engineering and related technology services. Website content is provided for general business information and does not constitute a binding offer, professional advice or a guarantee of project outcomes.</p>

        <h2>2. Service engagements</h2>
        <p>Submitting an enquiry or booking a consultation does not create a client relationship. Any services, scope, fees, delivery commitments, intellectual-property terms and warranties will be governed by a separate written agreement signed by the relevant parties.</p>

        <h2>3. Permitted use</h2>
        <p>You may use the website for lawful business purposes. You must not attempt to disrupt or gain unauthorised access to the website, introduce malicious code, misuse forms, scrape the website at unreasonable volume, impersonate another person, or use website content in a misleading or unlawful way.</p>

        <h2>4. Intellectual property</h2>
        <p>The Bluice Technologies name, logo, website design, copy, graphics and other materials are owned by or licensed to Bluice Technologies unless stated otherwise. You may view and share links to public pages, but you may not reproduce, modify, distribute or commercially exploit website materials without prior written permission.</p>

        <h2>5. Case studies and third-party material</h2>
        <p>Client names, results and project materials will be shown only where authorised. Third-party names and trademarks belong to their respective owners. Links or embedded services operated by third parties are provided for convenience, and their own terms and policies apply.</p>

        <h2>6. Availability and disclaimers</h2>
        <p>We aim to keep the website accurate and available, but content may be incomplete, become outdated or contain errors. To the extent permitted by law, the website is provided “as is” without warranties of uninterrupted availability, fitness for a particular purpose or non-infringement.</p>

        <h2>7. Limitation of liability</h2>
        <p>To the extent permitted by applicable law, Bluice Technologies will not be liable for indirect, incidental, special or consequential loss arising from use of, or inability to use, this website. Nothing in these terms excludes liability that cannot lawfully be excluded.</p>

        <h2>8. Privacy</h2>
        <p>Our <a href="/privacy">Privacy Policy</a> explains how we handle personal information submitted through the website.</p>

        <h2>9. Governing law and changes</h2>
        <p>These terms are governed by the laws of India because Bluice Technologies operates from India. Courts with jurisdiction over Bluice Technologies’ principal place of business will have jurisdiction, subject to mandatory rights that apply where you are located. We may update these terms by publishing a revised version with a new effective date.</p>

        <h2>10. Contact</h2>
        <p>Questions about these terms can be sent to <a href="mailto:hello@northline.example">hello@northline.example</a>.</p>

        <p className="legal-note">These website terms should be reviewed by qualified legal counsel before production launch and updated with Bluice Technologies’ registered legal name, address and jurisdiction details.</p>
      </article>
    </main>
  );
}
