"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

function readTheme(): Theme { return document.documentElement.dataset.theme === "dark" ? "dark" : "light"; }
function serverTheme(): Theme { return "light"; }
function subscribe(callback: () => void) {
  window.addEventListener("northline-theme", callback);
  window.addEventListener("storage", callback);
  return () => { window.removeEventListener("northline-theme", callback); window.removeEventListener("storage", callback); };
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, readTheme, serverTheme);

  function chooseTheme(nextTheme: Theme) {
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    localStorage.setItem("northline-theme", nextTheme);
    window.dispatchEvent(new Event("northline-theme"));
  }

  return (
    <button className="theme-switch" type="button" data-theme={theme} aria-pressed={theme === "dark"} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`} title={`Switch to ${theme === "light" ? "dark" : "light"} mode`} onClick={() => chooseTheme(theme === "light" ? "dark" : "light")}>
      <span className="theme-switch-thumb" aria-hidden="true" />
      <span className="theme-label theme-label-light" aria-hidden="true">Light</span>
      <span className="theme-label theme-label-dark" aria-hidden="true">Dark</span>
      <span className="theme-icon-mobile theme-icon-moon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z" /></svg></span>
      <span className="theme-icon-mobile theme-icon-sun" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.5" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" /></svg></span>
    </button>
  );
}
