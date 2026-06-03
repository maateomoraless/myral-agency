"use client";

import { useEffect, useRef } from "react";

export default function CursorEffect() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const media = window.matchMedia("(min-width: 1024px) and (pointer: fine)");
    if (!media.matches) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let hovering = false;
    let rafId = 0;

    const setDotPosition = (x: number, y: number) => {
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
    };

    const setRingPosition = (x: number, y: number) => {
      ring.style.left = `${x}px`;
      ring.style.top = `${y}px`;
    };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setDotPosition(mouseX, mouseY);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      hovering = !!target?.closest("a, button, [data-cursor-hover]");
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.1;
      ringY += (mouseY - ringY) * 0.1;

      const dotSize = hovering ? 14 : 8;
      const ringSize = hovering ? 50 : 32;

      dot.style.width = `${dotSize}px`;
      dot.style.height = `${dotSize}px`;
      ring.style.width = `${ringSize}px`;
      ring.style.height = `${ringSize}px`;

      setRingPosition(ringX, ringY);
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    rafId = requestAnimationFrame(animate);

    const onMediaChange = () => {
      if (!media.matches) {
        dot.style.opacity = "0";
        ring.style.opacity = "0";
      } else {
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }
    };

    media.addEventListener("change", onMediaChange);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      media.removeEventListener("change", onMediaChange);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="cursor-dot pointer-events-none fixed left-0 top-0 z-[9999] hidden -translate-x-1/2 -translate-y-1/2 lg:block"
      />
      <div
        ref={ringRef}
        aria-hidden
        className="cursor-ring pointer-events-none fixed left-0 top-0 z-[9998] hidden -translate-x-1/2 -translate-y-1/2 lg:block"
      />
    </>
  );
}
