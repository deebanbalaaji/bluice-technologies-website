import Image from "next/image";

export function Brand() {
  return (
    <span className="brand-lockup">
      <Image src="/northline-mark.svg" alt="" width="40" height="40" priority />
      <span className="brand-type"><strong>Bluice</strong><small>Technologies</small></span>
    </span>
  );
}
