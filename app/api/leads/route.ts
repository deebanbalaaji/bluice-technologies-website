import { NextResponse } from "next/server";

type Lead = Record<string, unknown>;
const required = ["name", "email", "company", "role", "projectStage", "budget", "timeline", "consent"];
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, max = 1000) { return typeof value === "string" ? value.trim().slice(0, max) : ""; }

export async function POST(request: Request) {
  let body: Lead;
  try { body = await request.json(); } catch { return NextResponse.json({ error: "Send the enquiry as valid JSON." }, { status: 400 }); }
  if (clean(body.website)) return NextResponse.json({ ok: true });
  const startedAt = Number(body.startedAt);
  if (!startedAt || Date.now() - startedAt < 2500) return NextResponse.json({ error: "Please take a moment to review the form." }, { status: 400 });
  const lead = Object.fromEntries(required.map((key) => [key, clean(body[key])])) as Record<string, string>;
  lead.summary = clean(body.summary);
  if (required.some((key) => !lead[key])) return NextResponse.json({ error: "Complete every required field." }, { status: 400 });
  if (!emailPattern.test(lead.email)) return NextResponse.json({ error: "Use a valid work email." }, { status: 400 });
  if (lead.consent !== "yes") return NextResponse.json({ error: "Consent is required before sending your enquiry." }, { status: 400 });
  const payload = { ...lead, source: "bluice-technologies.website", receivedAt: new Date().toISOString() };
  try {
    const jobs: Promise<Response>[] = [];
    if (process.env.CRM_WEBHOOK_URL) jobs.push(fetch(process.env.CRM_WEBHOOK_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) }));
    if (process.env.RESEND_API_KEY && process.env.LEAD_NOTIFICATION_EMAIL && process.env.LEAD_FROM_EMAIL) jobs.push(fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" }, body: JSON.stringify({ from: process.env.LEAD_FROM_EMAIL, to: [process.env.LEAD_NOTIFICATION_EMAIL], subject: `New enquiry from ${lead.company}`, text: Object.entries(payload).map(([key, value]) => `${key}: ${value}`).join("\n") }) }));
    const results = await Promise.all(jobs); if (results.some((result) => !result.ok)) throw new Error("Delivery failed");
    if (!jobs.length && process.env.NODE_ENV === "production") throw new Error("Lead delivery is not configured");
    return NextResponse.json({ ok: true });
  } catch { return NextResponse.json({ error: "We could not send your enquiry. Please email us instead." }, { status: 502 }); }
}
