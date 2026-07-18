import { hasConsent } from "./consent";

export function track(event: string, properties: Record<string, string> = {}) {
  if (typeof window === "undefined" || !hasConsent("analytics")) return;
  const dataLayer = (window as typeof window & { dataLayer?: unknown[] }).dataLayer;
  dataLayer?.push({ event, ...properties });
  window.dispatchEvent(new CustomEvent("northline:analytics", { detail: { event, properties } }));
}
