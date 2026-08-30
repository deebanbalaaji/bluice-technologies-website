"use client";

export function NxtLaunchButton({ className = "button" }: { className?: string }) {
  return <button className={className} type="button" onClick={() => window.dispatchEvent(new Event("bluice:nxt-open"))}>Open Bluice NXT <span aria-hidden="true">↗</span></button>;
}
