"use client";

import { useIsDesktopPointer } from "@/lib/useMediaQuery";
import { useRef, useState } from "react";

export default function SpotlightSection({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const isDesktop = useIsDesktopPointer();
  const [pos, setPos] = useState({ x: "50%", y: "50%" });

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!isDesktop || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({
      x: `${e.clientX - rect.left}px`,
      y: `${e.clientY - rect.top}px`,
    });
  };

  return (
    <section
      ref={ref}
      id={id}
      className={`relative ${className}`}
      onMouseMove={onMove}
    >
      {children}
      {isDesktop && (
        <div
          className="pointer-events-none absolute inset-0 z-20"
          style={{
            background: `radial-gradient(circle 200px at ${pos.x} ${pos.y}, transparent 0%, rgba(0,0,0,0.85) 100%)`,
          }}
        />
      )}
    </section>
  );
}
