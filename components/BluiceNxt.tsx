"use client";

import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
import { answerWithBluiceKnowledge, type NxtReply } from "@/lib/bluice-nxt";

type Message = { role: "assistant" | "user"; text: string; reply?: NxtReply };
type Delivery = "idle" | "sending" | "sent" | "error";

const RECENT_SEARCHES_KEY = "bluice-nxt-recent-searches";
const MAX_RECENT_SEARCHES = 6;

const suggestions = [
  { label: "Choose the right service", prompt: "Help me choose the right Bluice service for my product." },
  { label: "Explore industry expertise", prompt: "Which industries and sectors does Bluice support?" },
  { label: "Plan a product consultation", prompt: "Help me prepare for a product consultation with Bluice." },
  { label: "Find opportunities at Bluice", prompt: "Tell me about careers and ways of working at Bluice." },
] as const;

const trendingSearches = [
  "Responsible AI product delivery",
  "Legacy platform modernisation",
  "Cloud and platform engineering",
  "Financial services product teams",
] as const;

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

function TrashIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3m3 0-1 13H7L6 7m4 4v5m4-5v5" /></svg>;
}

function PlusIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>;
}

function RecentSearchList({ searches, onSelect, onDelete }: {
  searches: string[];
  onSelect: (search: string) => void;
  onDelete: (search: string) => void;
}) {
  if (!searches.length) return <p className="nxt-history-empty">Your recent searches will appear here.</p>;

  return <ul className="nxt-history-list">{searches.map((search) => <li key={search}>
    <button type="button" className="nxt-recent-query" onClick={() => onSelect(search)}>{search}</button>
    <button type="button" className="nxt-delete-search" onClick={() => onDelete(search)} aria-label={`Delete recent search: ${search}`}><TrashIcon /></button>
  </li>)}</ul>;
}

export function BluiceNxt() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [thinking, setThinking] = useState(false);
  const [input, setInput] = useState("");
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [delivery, setDelivery] = useState<Delivery>("idle");
  const [messages, setMessages] = useState<Message[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const startedAt = useRef<number | null>(null);
  const thread = useRef<HTMLDivElement>(null);
  const composer = useRef<HTMLTextAreaElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const responseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const launchControl = useRef<HTMLElement | null>(null);

  function closeAssistant() {
    setClosing(true);
    closeTimer.current = setTimeout(() => {
      setOpen(false);
      setClosing(false);
      launchControl.current?.focus();
    }, 220);
  }

  function persistRecentSearches(searches: string[]) {
    setRecentSearches(searches);
    try { window.localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(searches)); } catch { /* Local history remains optional. */ }
  }

  function addRecentSearch(search: string) {
    const next = [search, ...recentSearches.filter((item) => item.toLowerCase() !== search.toLowerCase())].slice(0, MAX_RECENT_SEARCHES);
    persistRecentSearches(next);
  }

  function removeRecentSearch(search: string) {
    persistRecentSearches(recentSearches.filter((item) => item !== search));
  }

  function clearConversation() {
    if (responseTimer.current) clearTimeout(responseTimer.current);
    setMessages([]);
    setThinking(false);
    setShowEnquiry(false);
    setDelivery("idle");
    setInput("");
    requestAnimationFrame(() => composer.current?.focus());
  }

  useEffect(() => {
    let syncTimer: ReturnType<typeof setTimeout> | null = null;
    try {
      const stored = JSON.parse(window.localStorage.getItem(RECENT_SEARCHES_KEY) || "[]");
      if (Array.isArray(stored)) {
        const validSearches = stored.filter((item): item is string => typeof item === "string").slice(0, MAX_RECENT_SEARCHES);
        syncTimer = setTimeout(() => setRecentSearches(validSearches), 0);
      }
    } catch { /* Ignore unavailable or invalid local history. */ }
    return () => { if (syncTimer) clearTimeout(syncTimer); };
  }, []);

  useEffect(() => {
    const launch = () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
      launchControl.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      startedAt.current = Date.now();
      setClosing(false);
      setOpen(true);
    };
    window.addEventListener("bluice:nxt-open", launch);
    return () => {
      window.removeEventListener("bluice:nxt-open", launch);
      if (closeTimer.current) clearTimeout(closeTimer.current);
      if (responseTimer.current) clearTimeout(responseTimer.current);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const siblings = Array.from(document.body.children).filter((element) => !element.classList.contains("nxt-overlay"));
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") closeAssistant(); };
    document.body.style.overflow = "hidden";
    siblings.forEach((element) => element.setAttribute("inert", ""));
    window.addEventListener("keydown", closeOnEscape);
    if (window.matchMedia("(min-width: 701px)").matches) composer.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      siblings.forEach((element) => element.removeAttribute("inert"));
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  useEffect(() => {
    if (open && (messages.length || thinking || showEnquiry)) {
      thread.current?.scrollTo({ top: thread.current.scrollHeight, behavior: "smooth" });
    }
  }, [messages, open, showEnquiry, thinking]);

  function ask(text: string) {
    const clean = text.trim();
    if (!clean || thinking) return;
    addRecentSearch(clean);
    setMessages((current) => [...current, { role: "user", text: clean }]);
    setInput("");
    setThinking(true);
    responseTimer.current = setTimeout(() => {
      const reply = answerWithBluiceKnowledge(clean);
      setMessages((current) => [...current, { role: "assistant", text: reply.text, reply }]);
      setThinking(false);
    }, 420);
  }

  async function sendEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    setDelivery("sending");
    const values = Object.fromEntries(new FormData(form));
    const conversation = messages.filter((message) => message.role === "user").map((message) => message.text).join("\n");
    const payload = { ...values, summary: `${String(values.summary || "")}\n\nBluice NXT conversation:\n${conversation}`.trim(), projectStage: "Exploring the opportunity", timeline: "Still exploring", budget: "To discuss", consent: "yes", startedAt: startedAt.current ?? 0, source: "bluice-nxt" };
    try {
      const response = await fetch("/api/leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (!response.ok) throw new Error("delivery");
      setDelivery("sent");
    } catch { setDelivery("error"); }
  }

  const conversationSummary = messages.filter((message) => message.role === "user").map((message) => message.text).join("; ");
  const mailto = `mailto:hello@bluice.in?${new URLSearchParams({ subject: "Bluice NXT website enquiry", body: `Hello Bluice Technologies,\n\nI would like to discuss:\n${conversationSummary || "My product or operating need"}\n\nRegards,` })}`;

  if (!open) return null;
  const empty = messages.length === 0 && !thinking;

  return <div className={`nxt-overlay${closing ? " is-closing" : ""}`} role="dialog" aria-modal="true" aria-labelledby="nxt-title">
    <div className={`nxt-shell${empty ? " is-empty" : ""}`}>
      <header className="nxt-header">
        <div className="nxt-identity">
          <span className="nxt-mark" aria-hidden="true"><svg viewBox="0 0 24 24"><defs><linearGradient id="nxt-spectrum" x1="5" y1="4" x2="19" y2="20" gradientUnits="userSpaceOnUse"><stop stopColor="#7f45ff" stopOpacity=".88" /><stop offset=".32" stopColor="#e83d8f" stopOpacity=".86" /><stop offset=".58" stopColor="#ff8a1f" stopOpacity=".9" /><stop offset=".78" stopColor="#22bfa0" stopOpacity=".86" /><stop offset="1" stopColor="#3178f6" stopOpacity=".9" /></linearGradient></defs><path fill="url(#nxt-spectrum)" d="M12 2.8c.54 4.97 4.23 8.66 9.2 9.2-4.97.54-8.66 4.23-9.2 9.2-.54-4.97-4.23-8.66-9.2-9.2 4.97-.54 8.66-4.23 9.2-9.2Z" /></svg></span>
          <div><h2 id="nxt-title">Bluice NXT</h2><span>Bluice website assistant</span></div>
        </div>
        <div className="nxt-header-actions">
          {!empty && <button type="button" className="nxt-new-chat" aria-label="Start a new chat" onClick={clearConversation}><PlusIcon /><span>New chat</span></button>}
          <button type="button" className="nxt-close" onClick={closeAssistant} aria-label="Close Bluice NXT"><span aria-hidden="true" /></button>
        </div>
      </header>

      <div className="nxt-workspace">
        <aside className="nxt-rail" aria-label="Bluice NXT history">
          <button type="button" className="nxt-rail-new" onClick={clearConversation}><PlusIcon /><span>New conversation</span></button>
          <div className="nxt-rail-history">
            <div className="nxt-rail-heading"><span>Recent</span>{recentSearches.length > 0 && <button type="button" onClick={() => persistRecentSearches([])}>Clear</button>}</div>
            <RecentSearchList searches={recentSearches} onSelect={ask} onDelete={removeRecentSearch} />
          </div>
          <p className="nxt-rail-note">Answers are based on published Bluice website content.</p>
        </aside>

        <main className="nxt-main">
          <div className="nxt-thread" ref={thread} aria-live="polite">
            {empty && <div className="nxt-empty">
              <div className="nxt-welcome">
                <span className="nxt-kicker">Bluice NXT</span>
                <h3>How can we help?</h3>
                <p>Find a service, explore sector expertise, or prepare the context for a conversation with our team.</p>
              </div>

              <section className="nxt-suggestions" aria-labelledby="nxt-suggestions-title">
                <div className="nxt-section-heading"><h4 id="nxt-suggestions-title">Start with a goal</h4><span>Suggested</span></div>
                <div className="nxt-suggestion-grid">
                  {suggestions.map((item) => <button type="button" onClick={() => ask(item.prompt)} key={item.label}>
                    <span>{item.label}</span><ArrowIcon />
                  </button>)}
                </div>
              </section>

              <section className="nxt-trending" aria-labelledby="nxt-trending-title">
                <div className="nxt-section-heading"><h4 id="nxt-trending-title">Trending searches</h4><span>Popular now</span></div>
                <div>{trendingSearches.map((search) => <button type="button" onClick={() => ask(search)} key={search}><span>{search}</span><ArrowIcon /></button>)}</div>
              </section>

              {recentSearches.length > 0 && <section className="nxt-mobile-recents" aria-labelledby="nxt-mobile-recents-title">
                <div className="nxt-section-heading"><h4 id="nxt-mobile-recents-title">Recent</h4><button type="button" onClick={() => persistRecentSearches([])}>Clear all</button></div>
                <RecentSearchList searches={recentSearches} onSelect={ask} onDelete={removeRecentSearch} />
              </section>}
            </div>}

            {messages.map((message, index) => <article className={`nxt-message nxt-message-${message.role}`} key={`${message.role}-${index}`}>
              <span>{message.role === "assistant" ? "NXT" : "You"}</span>
              <div><p>{message.text}</p>{message.reply?.links.length ? <nav aria-label="Relevant Bluice pages">{message.reply.links.map((item) => <Link href={item.href} key={item.href} onClick={closeAssistant}><small>{item.category}</small><strong>{item.label}</strong><span>↗</span></Link>)}</nav> : null}{message.reply?.offerEnquiry ? <button className="nxt-inline-action" type="button" onClick={() => setShowEnquiry(true)}>Send this context to Bluice</button> : null}</div>
            </article>)}
            {thinking && <article className="nxt-message nxt-message-assistant nxt-thinking"><span>NXT</span><div aria-label="Bluice NXT is preparing a response"><i /><i /><i /></div></article>}
            {showEnquiry && <section className="nxt-enquiry">{delivery === "sent" ? <div className="nxt-delivered"><strong>Enquiry received.</strong><p>A Bluice product lead will review the context.</p></div> : <form onSubmit={sendEnquiry}><label>Full name<input name="name" autoComplete="name" required /></label><label>Work email<input name="email" type="email" autoComplete="email" spellCheck={false} required /></label><label>Company<input name="company" autoComplete="organization" required /></label><label>Role<input name="role" autoComplete="organization-title" required /></label><label className="wide">Additional context<textarea name="summary" rows={2} autoComplete="off" /></label><button className="button" disabled={delivery === "sending"}>{delivery === "sending" ? "Sending…" : "Send to Bluice"}</button>{delivery === "error" && <p className="wide nxt-error">Delivery is unavailable. <a href={mailto}>Open the prepared email</a>.</p>}</form>}</section>}
          </div>

          <div className="nxt-composer-wrap">
            <form className="nxt-composer" onSubmit={(event) => { event.preventDefault(); ask(input); }}>
              <label htmlFor="nxt-input" className="sr-only">Ask Bluice NXT</label>
              <textarea ref={composer} id="nxt-input" aria-label="Ask Bluice NXT" autoComplete="off" value={input} onChange={(event) => setInput(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); ask(input); } }} rows={1} placeholder="Ask Bluice NXT…" />
              <button type="submit" disabled={!input.trim() || thinking} aria-label="Send message to Bluice NXT"><ArrowIcon /></button>
            </form>
            <p>Bluice NXT can make mistakes. Confirm critical decisions with our team.</p>
          </div>
        </main>
      </div>
    </div>
  </div>;
}
