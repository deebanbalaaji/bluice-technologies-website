"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { track } from "@/lib/analytics";

type Props = ComponentProps<typeof Link> & { event: string; eventLabel?: string };

export function TrackLink({ event, eventLabel, onClick, ...props }: Props) {
  return <Link {...props} onClick={(e) => { track(event, { label: eventLabel || String(props.href) }); onClick?.(e); }} />;
}
