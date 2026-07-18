"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import { Consent, readConsent, saveConsent, subscribeConsent } from "@/lib/consent";

const noConsent = () => null;
const subscribeReady = () => () => {};

export function CookieConsent() {
  const ready = useSyncExternalStore(subscribeReady, () => true, () => false);
  const saved = useSyncExternalStore(subscribeConsent, readConsent, noConsent);
  const [open, setOpen] = useState(false);
  const [managing, setManaging] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [external, setExternal] = useState(false);

  useEffect(() => {
    const showSettings = () => {
      const current = readConsent();
      setAnalytics(current?.analytics ?? false);
      setExternal(current?.external ?? false);
      setManaging(true);
      setOpen(true);
    };
    window.addEventListener("northline:consent-settings", showSettings);
    return () => window.removeEventListener("northline:consent-settings", showSettings);
  }, []);

  if (!ready || (saved && !open)) return null;

  function commit(consent: Consent) {
    saveConsent(consent);
    setOpen(false);
    setManaging(false);
  }

  return (
    <aside className="cookie-consent" role="dialog" aria-modal="false" aria-labelledby="cookie-title" aria-describedby="cookie-description">
      <div className="cookie-consent-head">
        <div><p className="label">Privacy controls</p><h2 id="cookie-title">Your choice, before optional tracking.</h2></div>
        {saved && <button className="cookie-close" type="button" aria-label="Close cookie settings" onClick={() => setOpen(false)}>×</button>}
      </div>
      <p id="cookie-description">We use essential storage for theme and regional preferences. Analytics and third-party scheduling stay off unless you allow them.</p>
      <Link className="cookie-policy-link" href="/cookies">Read the Cookie Policy <span aria-hidden="true">↗</span></Link>

      {managing && <div className="cookie-preferences">
        <label><span><strong>Essential</strong><small>Required for preferences, security and core website functions.</small></span><input type="checkbox" checked disabled aria-label="Essential storage is always active" /></label>
        <label><span><strong>Analytics</strong><small>Measures selected website interactions so we can improve the experience.</small></span><input type="checkbox" checked={analytics} onChange={(event) => setAnalytics(event.target.checked)} /></label>
        <label><span><strong>Scheduling</strong><small>Allows the third-party Calendly frame after you submit an enquiry.</small></span><input type="checkbox" checked={external} onChange={(event) => setExternal(event.target.checked)} /></label>
      </div>}

      <div className="cookie-actions">
        {managing ? <button className="cookie-button cookie-button-primary" type="button" onClick={() => commit({ analytics, external })}>Save preferences</button> : <button className="cookie-button cookie-button-quiet" type="button" onClick={() => setManaging(true)}>Manage preferences</button>}
        <button className="cookie-button cookie-button-secondary" type="button" onClick={() => commit({ analytics: false, external: false })}>Essential only</button>
        <button className="cookie-button cookie-button-primary" type="button" onClick={() => commit({ analytics: true, external: true })}>Accept all</button>
      </div>
    </aside>
  );
}
