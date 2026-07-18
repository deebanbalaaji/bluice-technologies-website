import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "Bluice Technologies’ commitment to an accessible and inclusive website experience.",
  alternates: { canonical: "/accessibility" },
  openGraph: { title: "Accessibility Statement", description: "Bluice Technologies’ commitment to an accessible and inclusive website experience.", url: "/accessibility" },
};

export default function AccessibilityStatementPage() {
  return (
    <main id="main" className="legal-page">
      <header className="legal-hero shell"><p className="eyebrow">Accessibility</p><h1>Accessibility Statement</h1><p>Updated 18 July 2026</p></header>
      <article className="legal-content shell">
        <p className="legal-intro">Bluice Technologies is committed to making this website clear, usable and accessible to as many people as possible.</p>

        <h2>1. Our standard</h2>
        <p>We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA. These guidelines cover accessible experiences across desktop and mobile devices for people with a wide range of access needs.</p>

        <h2>2. Measures we take</h2>
        <p>The website uses semantic headings and landmarks, keyboard-accessible navigation, visible focus states, labelled form controls, descriptive links, sufficient colour contrast, responsive layouts and reduced-motion preferences. Content and interactions are reviewed across common screen sizes and input methods.</p>

        <h2>3. Compatibility</h2>
        <p>The website is designed for current versions of major browsers and assistive technologies. Older browsers or unusual combinations of browser and assistive technology may not provide the same experience.</p>

        <h2>4. Known limitations</h2>
        <p>Third-party content, including an optional Calendly scheduling frame, may not provide the same level of accessibility as the rest of the website. Approved client media or documents may also contain limitations outside Bluice Technologies’ direct control. We will provide an alternative way to access essential information or complete an action when reasonably possible.</p>

        <h2>5. Feedback and assistance</h2>
        <p>If you encounter a barrier, need information in another format or cannot complete an action, email <a href="mailto:hello@northline.example">hello@northline.example</a>. Please include the page address, what you were trying to do and the browser or assistive technology you used. We aim to acknowledge accessibility requests within two business days.</p>

        <h2>6. Review</h2>
        <p>We review accessibility as the website changes and use a combination of automated checks, keyboard testing and manual inspection. This statement will be updated when material improvements or known limitations change.</p>

        <p className="legal-note">Our target is WCAG 2.2 Level AA. This statement describes an ongoing commitment and is not a claim that every page or third-party integration is free from accessibility barriers. Read the <a href="https://www.w3.org/TR/WCAG22/">WCAG 2.2 standard</a>.</p>
      </article>
    </main>
  );
}
