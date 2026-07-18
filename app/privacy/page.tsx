import type { Metadata } from "next";
import { RegionalLegalNotice } from "@/components/RegionalLegalNotice";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Bluice Technologies collects, uses and protects personal information submitted through this website.",
  alternates: { canonical: "/privacy" },
  openGraph: { title: "Privacy Policy", description: "How Bluice Technologies collects, uses and protects personal information submitted through this website.", url: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main id="main" className="legal-page">
      <header className="legal-hero shell"><p className="eyebrow">Legal</p><h1>Privacy Policy</h1><p>Effective 17 July 2026</p></header>
      <article className="legal-content shell">
        <p className="legal-intro">This policy explains how Bluice Technologies (“we”, “us” or “our”) handles personal information when you visit this website, contact us or book a consultation.</p>
        <RegionalLegalNotice kind="privacy" />

        <h2>1. Information we collect</h2>
        <p>When you submit our consultation form, we collect your name, work email, company, role, project stage, indicative budget, preferred timeline and the project information you provide. If you contact us by email or schedule a meeting, we also receive the information contained in those communications and booking details.</p>
        <p>We may collect limited technical information such as device and browser type, pages viewed, referral source and interaction events. We do not intentionally collect sensitive personal data through this website.</p>

        <h2>2. How we use information</h2>
        <p>We use personal information to respond to enquiries, assess project fit, arrange consultations, prepare proposals, operate and secure the website, understand website performance, maintain business records and meet legal obligations. We process information with your consent, to take steps at your request before entering a contract, for legitimate business purposes where permitted, or when required by law.</p>

        <h2>3. Service providers and disclosures</h2>
        <p>We may share information with service providers that support website hosting, content management, analytics, scheduling, email delivery and customer relationship management. These may include Sanity, Calendly, Resend and providers configured by Bluice Technologies. They process information under their own terms and privacy practices. We may also disclose information when required by law, to protect rights or security, or in connection with a business reorganisation.</p>

        <h2>4. Cookies and analytics</h2>
        <p>The website may use essential storage required for security and functionality. Analytics will only be used when configured and, where required, after obtaining consent. You can restrict cookies through your browser settings, although some functionality may be affected.</p>

        <h2>5. Retention and security</h2>
        <p>We retain enquiry information only for as long as reasonably necessary to respond, manage a potential or active business relationship, resolve disputes and meet legal or accounting requirements. We use proportionate technical and organisational safeguards, but no internet transmission or storage system is completely secure.</p>

        <h2>6. International processing</h2>
        <p>Some service providers may process information outside your country. Where applicable, we use contractual and organisational measures intended to provide an appropriate level of protection and follow restrictions imposed by applicable law.</p>

        <h2>7. Your choices and rights</h2>
        <p>Depending on applicable law, you may request access to, correction of or deletion of your personal information, withdraw consent, object to certain processing or raise a grievance. To make a request, email <a href="mailto:hello@northline.example">hello@northline.example</a>. We may need to verify your identity before acting on a request.</p>

        <h2>8. Children</h2>
        <p>This business website is not directed to children, and we do not knowingly collect personal information from children through it.</p>

        <h2>9. Updates and contact</h2>
        <p>We may update this policy as our services, providers or legal obligations change. The effective date above identifies the latest version. Questions or grievances can be sent to <a href="mailto:hello@northline.example">hello@northline.example</a>.</p>

        <p className="legal-note">This website policy should be reviewed by qualified legal counsel before production launch and updated with Bluice Technologies’ registered business details and appointed grievance contact.</p>
      </article>
    </main>
  );
}
