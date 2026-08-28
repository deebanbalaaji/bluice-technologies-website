import Image from "next/image";

export function Brand({ priority = false }: { priority?: boolean }) {
  return (
    <span className="brand-lockup">
      <Image
        className="brand-symbol"
        src="/bluice-logo-mark.png"
        alt=""
        width="512"
        height="512"
        priority={priority}
      />
      <Image
        className="brand-wordmark"
        src="/bluice-technologies-wordmark.svg"
        alt="Bluice Technologies"
        width="220"
        height="96"
        priority={priority}
      />
    </span>
  );
}
