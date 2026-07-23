import Image from "next/image";

export function Brand() {
  return (
    <span className="brand-lockup">
      <Image
        className="brand-symbol"
        src="/bluice-icon.png"
        alt=""
        width="291"
        height="320"
        priority
      />
      <Image
        className="brand-wordmark"
        src="/bluice-technologies-wordmark.svg"
        alt="Bluice Technologies"
        width="220"
        height="96"
        priority
      />
    </span>
  );
}
