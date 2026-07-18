export function ClientMarks() {
  return (
    <ul className="client-logos" aria-label="Selected clients">
      <li aria-label="Harbor"><svg viewBox="0 0 48 36" aria-hidden="true"><path d="M5 29V9h8v20M13 15h22M35 9v20M19 15c0 8 10 8 10 0" /></svg></li>
      <li aria-label="Morrow"><svg viewBox="0 0 48 36" aria-hidden="true"><circle cx="24" cy="18" r="12" /><path d="M9 18h30M24 6v24" /></svg></li>
      <li aria-label="Relay"><svg viewBox="0 0 48 36" aria-hidden="true"><path d="M10 25 24 10l14 15" /><circle cx="10" cy="25" r="4" /><circle cx="24" cy="10" r="4" /><circle cx="38" cy="25" r="4" /></svg></li>
      <li aria-label="Fieldnote"><svg viewBox="0 0 48 36" aria-hidden="true"><path d="M13 5h17l6 6v20H13zM30 5v7h6M18 18h13M18 24h9" /></svg></li>
      <li aria-label="Common"><svg viewBox="0 0 48 36" aria-hidden="true"><circle cx="18" cy="18" r="11" /><circle cx="30" cy="18" r="11" /><path d="M24 9c7 4 7 14 0 18-7-4-7-14 0-18Z" /></svg></li>
    </ul>
  );
}
