import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Investor Relations",
  description: "Corporate information, governance principles, published updates, and investor contact for Bluice Technologies.",
  alternates: { canonical: "/investors" },
  openGraph: {
    title: "Investor Relations | Bluice Technologies",
    description: "The source for approved corporate, governance, and investor information from Bluice Technologies.",
    url: "/investors",
  },
};

const publicationRegister = [
  {
    title: "Company and operating model",
    description: "How Bluice connects product strategy, design, engineering, and platform delivery.",
    status: "Published",
    href: "/about/operating-model",
  },
  {
    title: "Corporate responsibility",
    description: "Our approach to responsible technology, inclusion, communities, and environmental practice.",
    status: "Published",
    href: "/csr",
  },
  {
    title: "Governance and financial disclosures",
    description: "Formal reports and governance documents will appear here only after company approval.",
    status: "Not yet published",
  },
  {
    title: "Investor announcements",
    description: "There are currently no investor announcements available on this website.",
    status: "No current release",
  },
] as const;

export default function InvestorsPage() {
  return <main id="main" className="investors-page">
    <header className="investor-hero">
      <div className="shell investor-hero-grid">
        <div className="investor-hero-title">
          <p className="eyebrow">Investor relations</p>
          <h1>Information for <em>long-term stakeholders.</em></h1>
        </div>
        <div className="investor-hero-note">
          <span className="investor-status"><i aria-hidden="true" /> Corporate information centre</span>
          <p>This page is the source for corporate and investor materials formally published by Bluice Technologies. Information appears only when it is complete and approved for release.</p>
        </div>
      </div>
    </header>

    <section className="investor-principle shell">
      <p className="eyebrow">Publication standard</p>
      <div>
        <h2>Clarity before claims.</h2>
        <p>Investor communication should distinguish verified information from plans and intentions. We do not publish provisional metrics, implied valuations, or promotional financial statements as fact.</p>
      </div>
    </section>

    <section className="investor-register" aria-labelledby="publication-register-title">
      <div className="shell">
        <header>
          <div><p className="eyebrow">Information register</p><h2 id="publication-register-title">Published and pending information.</h2></div>
          <p>Each entry shows its current publication state. A published label links to the latest available information on this website.</p>
        </header>
        <div className="investor-register-list">
          {publicationRegister.map((item, index) => {
            const content = <>
              <span className="investor-register-index">{String(index + 1).padStart(2, "0")}</span>
              <div><h3>{item.title}</h3><p>{item.description}</p></div>
              <span className={`investor-register-status${item.status === "Published" ? " is-published" : ""}`}>{item.status}</span>
              {"href" in item && <span className="investor-register-arrow" aria-hidden="true">↗</span>}
            </>;
            return "href" in item
              ? <Link className="investor-register-row" href={item.href} key={item.title}>{content}</Link>
              : <article className="investor-register-row is-static" key={item.title}>{content}</article>;
          })}
        </div>
      </div>
    </section>

    <section className="investor-governance shell">
      <header><p className="eyebrow">Operating governance</p><h2>Accountability close to the work.</h2></header>
      <div>
        <article><h3>Decision ownership</h3><p>Product and engineering responsibilities remain explicit from business framing through live operation.</p></article>
        <article><h3>Responsible information</h3><p>Access, consent, retention, security, and human review are treated as product and governance decisions.</p></article>
        <article><h3>Approved communication</h3><p>Corporate materials are reviewed before publication and superseded information is clearly replaced.</p></article>
      </div>
    </section>

    <section className="investor-contact">
      <div className="shell">
        <div><p className="eyebrow">Investor contact</p><h2>Request corporate information.</h2></div>
        <div><p>For an investor, governance, or corporate-information enquiry, contact Bluice directly. Include your organisation and the information you need so the request can be routed appropriately.</p><a href="mailto:hello@bluice.in?subject=Investor%20relations%20enquiry">hello@bluice.in <span aria-hidden="true">→</span></a></div>
      </div>
    </section>
  </main>;
}
