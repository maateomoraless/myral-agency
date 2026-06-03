"use client";

import Link from "next/link";
import { useIsDesktopPointer } from "@/lib/useMediaQuery";
import { useRef } from "react";

export default function MagneticLink({
  href,
  className = "",
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const isDesktop = useIsDesktopPointer();

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isDesktop || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.08;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.08;
    ref.current.style.transform = `translate(${Math.max(-10, Math.min(10, x))}px, ${Math.max(-10, Math.min(10, y))}px)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "none";
  };

  return (
    <Link
      ref={ref}
      href={href}
      className={`magnetic-card block transition-transform duration-300 ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </Link>
  );
}
