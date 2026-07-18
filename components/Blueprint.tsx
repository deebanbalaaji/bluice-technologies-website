"use client";

import { useEffect, useRef, useState } from "react";

const stages = [
  { key: "Discover", source: "People", status: "Evidence captured", title: "Find the operating constraint", detail: "Frontline evidence shows where work stalls before a solution is proposed.", input: "18 operator interviews", decision: "Handoff failure defined", result: "3 workflows mapped" },
  { key: "Frame", source: "Process", status: "Decision resolved", title: "Choose the product behaviour", detail: "One accountable owner replaces ambiguity across the exception workflow.", input: "Ownership evidence", decision: "Single decision owner", result: "2 handoffs removed" },
  { key: "Ship", source: "Product", status: "Release observed", title: "Put the decision into use", detail: "The live product makes the next action, owner, and due time visible.", input: "Validated workflow", decision: "Visible next action", result: "First route live" },
  { key: "Learn", source: "Telemetry", status: "Outcome verified", title: "Measure the operating change", detail: "Production evidence determines what to keep, improve, or stop next.", input: "Live operating data", decision: "Continue and improve", result: "−41% status calls" },
];

export function Blueprint() {
  const [active, setActive] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const reducedMotionTimer = window.setTimeout(() => setIsPlaying(false), 0);
      return () => window.clearTimeout(reducedMotionTimer);
    }
    if (!isPlaying) return;
    timer.current = window.setInterval(() => setActive((current) => (current + 1) % stages.length), 1800);
    return () => { if (timer.current !== null) window.clearInterval(timer.current); };
  }, [isPlaying]);

  function selectStage(index: number) {
    if (timer.current !== null) window.clearInterval(timer.current);
    setIsPlaying(false);
    setActive(index);
  }

  return (
    <div className={`blueprint step-${active}${isPlaying ? "" : " is-paused"}`} aria-label="Interactive product decision system showing how evidence becomes a measurable outcome">
      <div className="blueprint-head"><span>Decision register / Live sequence</span><button className="blueprint-playback" type="button" aria-pressed={!isPlaying} onClick={() => setIsPlaying((playing) => !playing)}>{isPlaying ? "Pause sequence" : "Play sequence"}</button></div>
      <div className="blueprint-stage">
        <div className="decision-system">
          <aside className="decision-feed"><span className="decision-column-label">Evidence stream</span>{stages.map((stage, index) => <div className={`decision-feed-row${active === index ? " is-active" : ""}`} key={stage.key}><span>0{index + 1}</span><b>{stage.source}</b><i aria-hidden="true" /></div>)}</aside>
          <div className="decision-register">{stages.map((stage, index) => <article className={`decision-record${active === index ? " is-active" : ""}`} aria-hidden={active !== index} key={stage.key}><header><span>DR–0{index + 1}</span><b>{stage.status}</b></header><div className="decision-record-main"><p className="decision-record-kicker">{stage.key} / Product decision</p><h2>{stage.title}</h2><p>{stage.detail}</p></div><dl><div><dt>Evidence in</dt><dd>{stage.input}</dd></div><div><dt>Decision</dt><dd>{stage.decision}</dd></div><div><dt>Signal out</dt><dd>{stage.result}</dd></div></dl><footer><span>Confidence</span><div aria-hidden="true"><i /><i /><i /><i /></div><b>{index < 2 ? "Directional" : "Observed"}</b></footer></article>)}</div>
        </div>
      </div>
      <div className="blueprint-controls" aria-label="Explore the blueprint stages">
        {stages.map((stage, index) => <button key={stage.key} aria-pressed={active === index} onClick={() => selectStage(index)}><span>0{index + 1}</span>{stage.key}</button>)}
      </div>
    </div>
  );
}
