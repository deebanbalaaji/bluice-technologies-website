import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Work with Bluice Technologies' senior product strategy, design, engineering, and platform team.",
  alternates: { canonical: "/careers" },
  openGraph: { title: "Careers at Bluice Technologies", description: "Work with Bluice Technologies' senior product strategy, design, engineering, and platform team.", url: "/careers" },
};

const disciplines = [
  { name: "Product strategy", craft: "Research, proposition design, product direction, and evidence-led roadmaps." },
  { name: "Product design", craft: "Complex workflows, interaction systems, prototyping, and accessible interfaces." },
  { name: "Product engineering", craft: "Web and mobile products built for reliability, clarity, and long-term change." },
  { name: "Cloud & platform", craft: "Architecture, infrastructure, developer experience, security, and operations." },
] as const;

const process = [
  ["Context", "A short conversation about the work you want to do and where you do it best."],
  ["Craft", "One piece of work, discussed through the decisions and trade-offs behind it."],
  ["Working session", "A practical discussion with the people you would work alongside."],
  ["Decision", "A clear answer, useful feedback, and transparent next steps."],
] as const;

function careerMailto(practice?: string) {
  const subject = practice ? `Expression of interest — ${practice}` : "Career introduction";
  const body = `Hello Bluice Technologies team,

I would like to introduce myself${practice ? ` for opportunities in ${practice}` : " for future opportunities"}.

Name:
Current role:
Location:
Portfolio or LinkedIn:
Relevant work:
Why Bluice Technologies:
Availability:

Regards,`;
  return `mailto:careers@northline.example?${new URLSearchParams({ subject, body })}`;
}

export default function CareersPage() {
  return (
    <main id="main" className="career-page">
      <header className="career-hero">
        <div className="shell career-hero-grid">
          <div className="career-hero-copy">
            <p className="label">Careers / Bluice Technologies</p>
            <h1>Do the work.<br />See it through.</h1>
            <p>We are building a senior product team for consequential software—people who care about the decision, the implementation, and what happens after release.</p>
          </div>
          <aside className="career-brief" aria-label="Current hiring status">
            <div><span className="career-status-dot" aria-hidden="true" /><p className="label">Current status</p></div>
            <h2>No advertised openings.</h2>
            <p>We still read considered introductions from experienced practitioners.</p>
            <dl><div><dt>Base</dt><dd>India</dd></div><div><dt>Delivery</dt><dd>Global</dd></div><div><dt>Model</dt><dd>Remote with intent</dd></div></dl>
            <a href="#practices">View practice areas <span aria-hidden="true">↓</span></a>
          </aside>
        </div>
      </header>

      <div className="career-principles-band" aria-label="What we value">
        <div className="shell"><span>Clear decisions</span><span>Strong craft</span><span>Direct communication</span><span>Responsibility after release</span></div>
      </div>

      <section className="career-agreement shell">
        <header><p className="eyebrow">The working agreement</p><h2>What you can expect from the team—and what the team needs from you.</h2></header>
        <div className="career-agreement-grid">
          <article><p className="label">Judgment</p><h3>Autonomy has context.</h3><p>We share the business problem and constraints, then trust people to make decisions and raise risks early.</p><strong>Ask why. Explain why.</strong></article>
          <article><p className="label">Collaboration</p><h3>Together when it matters.</h3><p>Deep work happens independently. Reviews and workshops happen together when the room improves the outcome.</p><strong>No meeting theatre.</strong></article>
          <article><p className="label">Progress</p><h3>Outcomes over output.</h3><p>Progress is what becomes clearer, faster, safer, or more valuable—not the number of tickets completed.</p><strong>Evidence beats activity.</strong></article>
        </div>
      </section>

      <section className="career-practices" id="practices">
        <div className="shell career-practices-layout">
          <header>
            <p className="eyebrow">Practice directory</p>
            <h2>Where your craft could fit.</h2>
            <p>These are the disciplines we build teams around, not advertised vacancies. Introductions are reviewed when a relevant need appears.</p>
          </header>
          <div className="career-role-board">
            <div className="career-role-head"><span>Practice</span><span>Work that matters</span><span>Contact</span></div>
            {disciplines.map((discipline) => (
              <article key={discipline.name}>
                <h3>{discipline.name}</h3>
                <p>{discipline.craft}</p>
                <a href={careerMailto(discipline.name)} aria-label={`Introduce yourself for ${discipline.name}`}>Write to us <span aria-hidden="true">↗</span></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="career-selection shell">
        <header><p className="eyebrow">Selection path</p><h2>A useful process, not an endurance test.</h2><p>Every stage has one purpose. There are no speculative assignments and no extended interview loop.</p></header>
        <ol>{process.map(([title, detail], index) => <li key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{detail}</p></li>)}</ol>
      </section>

      <section className="career-introduction">
        <div className="shell">
          <p className="label">A considered introduction</p>
          <h2>Show us how you think.</h2>
          <div><p>Send a short note and one or two examples. A polished portfolio helps, but the decisions behind the work matter more.</p><a href={careerMailto()}>careers@northline.example <span aria-hidden="true">↗</span></a></div>
        </div>
      </section>
    </main>
  );
}
