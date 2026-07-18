"use client";

import { FormEvent, useRef, useState, useSyncExternalStore } from "react";
import { track } from "@/lib/analytics";
import { readConsent, saveConsent, subscribeConsent } from "@/lib/consent";
import { useRegion } from "./RegionProvider";

type Status = "idle" | "submitting" | "success" | "error";
const noConsent = () => null;

export function LeadForm() {
  const { region } = useRegion();
  const consent = useSyncExternalStore(subscribeConsent, readConsent, noConsent);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const startedAt = useRef(0);
  const tracked = useRef(false);
  const calendly = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com";

  function markStarted() {
    if (!startedAt.current) startedAt.current = Date.now();
    if (!tracked.current) { track("form_started"); tracked.current = true; }
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    setStatus("submitting"); setMessage("");
    const data = Object.fromEntries(new FormData(form));
    data.startedAt = String(startedAt.current);
    try {
      const response = await fetch("/api/leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Your enquiry could not be sent.");
      setStatus("success"); track("qualified_form_submitted", { company: String(data.company || "") });
    } catch (error) { setStatus("error"); setMessage(error instanceof Error ? error.message : "Your enquiry could not be sent."); }
  }

  if (status === "success") return (
    <div className="calendar-reveal" aria-live="polite">
      <p className="label">Details received</p><h2>Choose a useful time.</h2><p>Your context is with our team. The next step is a focused 30-minute conversation.</p>
      {process.env.NEXT_PUBLIC_CALENDLY_URL ? consent?.external ? <iframe title="Schedule a conversation with Bluice Technologies" src={calendly} onLoad={() => track("calendar_viewed")} /> : <div className="calendar-fallback"><p>Scheduling remains private until you allow the Calendly embed.</p><button className="button button-small" type="button" onClick={() => saveConsent({ analytics: consent?.analytics ?? false, external: true })}>Allow scheduling and continue</button><p>Or email <a href="mailto:hello@northline.example">hello@northline.example</a> and the team will arrange a time.</p></div> : <p className="calendar-fallback">Scheduling is being configured. Email <a href="mailto:hello@northline.example">hello@northline.example</a> and the team will arrange a time.</p>}
    </div>
  );

  return (
    <form className="lead-form connect-form" onSubmit={submit} onFocus={markStarted} noValidate aria-busy={status === "submitting"}>
      <header className="connect-form-head"><p className="label">Project enquiry</p><h2>Give us enough context to make the first conversation useful.</h2><p>Required fields help us route your enquiry directly to the right senior lead.</p></header>
      <section className="form-section" aria-labelledby="about-you-heading"><header className="form-section-heading"><span>01</span><h3 id="about-you-heading">About you</h3></header><div className="form-grid">
        <label>Full name<input name="name" autoComplete="name" required /></label>
        <label>Work email<input name="email" type="email" autoComplete="email" spellCheck={false} required /></label>
        <label>Company<input name="company" autoComplete="organization" required /></label>
        <label>Your role<input name="role" autoComplete="organization-title" required /></label>
      </div></section>
      <section className="form-section" aria-labelledby="project-context-heading"><header className="form-section-heading"><span>02</span><h3 id="project-context-heading">Project context</h3></header><div className="form-grid">
        <label>Project stage<select name="projectStage" required defaultValue=""><option value="" disabled>Select a stage</option><option>Exploring the opportunity</option><option>Validating direction</option><option>Ready to build</option><option>Improving a live product</option></select></label>
        <label>Preferred start<select name="timeline" required defaultValue=""><option value="" disabled>Select timing</option><option>Within 4 weeks</option><option>1–3 months</option><option>3–6 months</option><option>Still exploring</option></select></label>
        <label>Indicative budget <span className="field-hint">({region.currency})</span><span className="currency-entry"><span aria-hidden="true">{region.symbol}</span><input name="budget" inputMode="decimal" placeholder="For example, 500000…" aria-label={`Indicative budget in ${region.currency}`} required /></span></label>
        <label className="wide">What needs to become clearer? (optional)<textarea name="summary" rows={5} placeholder="The problem, who it affects, and what a better outcome would change…" /></label>
      </div></section>
      <label className="honeypot" hidden>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <label className="consent"><input type="checkbox" name="consent" value="yes" required /><span>I agree that Bluice Technologies may use these details to respond to my enquiry.</span></label>
      {status === "error" && <p className="form-error" role="alert">{message} You can also email <a href="mailto:hello@northline.example">hello@northline.example</a>.</p>}
      <button className="button submit-button" disabled={status === "submitting"}>{status === "submitting" ? "Sending…" : "Send details and choose a time"}</button>
    </form>
  );
}
