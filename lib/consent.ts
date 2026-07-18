export type Consent = { analytics: boolean; external: boolean };

const key = "northline-consent";
const eventName = "northline:consent";
let cachedRaw: string | null | undefined;
let cachedConsent: Consent | null = null;

export function readConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(key);
  if (raw === cachedRaw) return cachedConsent;
  cachedRaw = raw;
  try {
    const value = raw ? JSON.parse(raw) : null;
    cachedConsent = value?.version === 1 ? { analytics: value.analytics === true, external: value.external === true } : null;
  } catch { cachedConsent = null; }
  return cachedConsent;
}

export function hasConsent(type: keyof Consent) {
  return readConsent()?.[type] === true;
}

export function subscribeConsent(callback: () => void) {
  window.addEventListener(eventName, callback);
  window.addEventListener("storage", callback);
  return () => { window.removeEventListener(eventName, callback); window.removeEventListener("storage", callback); };
}

export function saveConsent(consent: Consent) {
  localStorage.setItem(key, JSON.stringify({ version: 1, ...consent, savedAt: new Date().toISOString() }));
  window.dispatchEvent(new Event(eventName));
}
