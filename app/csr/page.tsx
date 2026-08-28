import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { RegionalCsrMedia } from "@/components/RegionalCsrMedia";

export const metadata: Metadata = { title: "Corporate responsibility", description: "Bluice Technologies' approach to responsible technology, inclusive practice, environmental care, governance, and community capability.", alternates: { canonical: "/csr" } };

const commitments = [
  ["Technology", "Challenge harmful automation, unclear data use, exclusionary design, and decisions that cannot be adequately explained."],
  ["People", "Design for accessibility, varied communication styles, assisted service, language needs, and the realities of diverse teams."],
  ["Environment", "Reduce avoidable infrastructure, travel, waste, and rework through deliberate product and engineering choices."],
  ["Community", "Prioritise practical contributions that improve access to digital skills, mentoring, and useful technology knowledge."],
] as const;

const reporting = [
  ["Baseline", "Establish what can be measured honestly before publishing targets."],
  ["Owner", "Name the person accountable for each commitment and its evidence."],
  ["Evidence", "Retain decisions, participation, accessibility findings, and operational data that support a claim."],
  ["Review", "Publish progress, gaps, and revised priorities on a defined cadence."],
] as const;

export default function CSRPage() {
  return <main id="main" className="csr-page">
    <header className="csr-hero-v2 contextual-gradient-hero gradient-hero-csr"><div className="context-signal" aria-hidden="true" /><div className="shell csr-hero-copy"><p className="eyebrow">Corporate responsibility</p><h1>Responsibility belongs inside the work.</h1><p>Who can use a product, how its decisions are made, what resources it consumes, and whether the outcome deserves trust are product-quality questions.</p></div></header>

    <section className="csr-position shell"><p className="eyebrow">Our position</p><div><h2>Useful technology is not neutral about its effects.</h2><p>Bluice considers responsibility during research, product framing, design, engineering, release, and live operation. This page distinguishes current working commitments from future measured reporting. It does not claim impact that has not been evidenced.</p></div></section>

    <section className="csr-commitments-v2"><div className="shell"><header><p className="eyebrow">Four connected commitments</p><h2>A practical responsibility model.</h2></header><div>{commitments.map(([title, text]) => <article key={title}><span>{title}</span><p>{text}</p></article>)}</div></div></section>

    <section className="csr-story shell"><RegionalCsrMedia role="csrInclusive" className="csr-story-media" /><div><p className="eyebrow">Inclusive and responsible products</p><h2>Design around consequence, not only completion.</h2><p>Teams examine who may be excluded, what happens when automation is wrong, where a human decision is required, and how a person can understand or challenge an outcome.</p><ul><li>Accessibility and assisted-service paths</li><li>Representative research participation</li><li>Clear consent and purposeful data collection</li><li>Human review for consequential decisions</li><li>Security, safety, and operational failure modes</li></ul></div></section>

    <section className="csr-story csr-story-reverse shell"><RegionalCsrMedia role="csrEnvironment" className="csr-story-media" /><div><p className="eyebrow">Environmental and delivery responsibility</p><h2>Reduce waste in the system and in the work.</h2><p>Responsible engineering includes infrastructure choices, data movement, device life, maintainability, and avoiding product rework created by weak early decisions.</p><ul><li>Appropriate infrastructure and retention</li><li>Performance budgets and efficient delivery</li><li>Maintainable systems over unnecessary replacement</li><li>Remote collaboration where it improves the outcome</li><li>Supplier and platform decisions reviewed for risk</li></ul></div></section>

    <section className="csr-community"><div className="shell csr-community-grid"><div><p className="eyebrow">Community capability</p><h2>Make knowledge useful beyond a project.</h2><p>Our contribution should be practical: mentoring, accessible learning material, structured introductions to product and engineering work, and support for organisations where technology capacity changes real access.</p><Link className="text-link" href="mailto:hello@bluice.in?subject=Community%20and%20CSR%20conversation">Propose a community collaboration <span>→</span></Link></div><RegionalCsrMedia role="csrCommunity" className="csr-community-image" /></div></section>

    <section className="csr-reporting shell"><header><p className="eyebrow">Governance and reporting</p><h2>Accountability before claims.</h2><p>Bluice will publish quantitative targets only when the baseline, owner, evidence source, and review method are credible.</p></header><ol>{reporting.map(([title, text], index) => <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></li>)}</ol><aside><strong>What we intend to publish</strong><p>Accessibility progress, community activity, operational footprint measures, responsible-technology learning, and any material gaps against stated commitments.</p></aside></section>
    <CTA title="Bring responsibility into the product decision." context="Ask how accessibility, data use, environmental care, and human accountability should shape the work." />
  </main>;
}
