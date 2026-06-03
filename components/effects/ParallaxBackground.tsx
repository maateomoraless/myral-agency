"use client";

import { useEffect, useRef } from "react";
import { useIsDesktopPointer } from "@/lib/useMediaQuery";

export default function ParallaxBackground({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktopPointer();

  useEffect(() => {
    if (!isDesktop) return;

    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      el.style.transform = `translate3d(0, ${window.scrollY * 0.3}px, 0)`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isDesktop]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
