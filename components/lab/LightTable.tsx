"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { projects } from "@/lib/projects";
import { HandCircle } from "@/components/studio/HandMark";
import { statement } from "./useClips";

type Frame = { key: string; src: string; slug: string; title: string; video?: string; x: number; y: number; r: number; w: number; v: boolean };

/** Concepto B — una mesa de luz: fotogramas de todos los trabajos esparcidos; arrastras y miras. */
export default function LightTable() {
  const [hover, setHover] = useState<string | null>(null);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const drag = useRef<{ x: number; y: number; px: number; py: number; moved: boolean } | null>(null);

  const frames = useMemo<Frame[]>(() => {
    const out: Frame[] = [];
    let seed = 7;
    const rnd = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);
    projects.forEach((p, pi) => {
      const list = [p.poster, ...p.stills].slice(0, 4);
      list.forEach((src, k) => {
        const col = (pi % 5) * 520 + k * 120 - 1100;
        const row = Math.floor(pi / 5) * 640 + k * 70 - 520;
        out.push({
          key: `${p.slug}-${k}`,
          src,
          slug: p.slug,
          title: p.title,
          video: k === 0 ? p.video : undefined,
          x: col + rnd() * 80,
          y: row + rnd() * 80,
          r: (rnd() - 0.5) * 7,
          w: p.orientation === "v" ? 190 : 300,
          v: p.orientation === "v",
        });
      });
    });
    return out;
  }, []);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      const d = drag.current;
      if (!d) return;
      const dx = e.clientX - d.x,
        dy = e.clientY - d.y;
      if (Math.abs(dx) + Math.abs(dy) > 4) d.moved = true;
      setPan({ x: d.px + dx, y: d.py + dy });
    };
    const up = () => {
      setDragging(false);
      setTimeout(() => (drag.current = null), 0);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, []);

  return (
    <section
      className="no-reveal fixed inset-0 cursor-grab touch-none overflow-hidden active:cursor-grabbing"
      style={{ background: "radial-gradient(ellipse at 50% 45%, #2a2a2e 0%, #0b0b0e 62%, #050507 100%)" }}
      onPointerDown={(e) => {
        drag.current = { x: e.clientX, y: e.clientY, px: pan.x, py: pan.y, moved: false };
        setDragging(true);
      }}
    >
      <div
        className="absolute left-1/2 top-1/2"
        style={{ transform: `translate(${pan.x}px, ${pan.y}px)`, transition: dragging ? "none" : "transform .6s var(--ease-film)" }}
      >
        {frames.map((f) => {
          const on = hover === f.slug;
          return (
            <Link
              key={f.key}
              href={`/work/${f.slug}`}
              draggable={false}
              onClick={(e) => drag.current?.moved && e.preventDefault()}
              onMouseEnter={() => setHover(f.slug)}
              onMouseLeave={() => setHover(null)}
              className="absolute block bg-[#111] p-[7px] pb-[22px] shadow-[0_18px_40px_rgba(0,0,0,.55)] transition-[transform,filter,opacity] duration-500"
              style={{
                left: f.x,
                top: f.y,
                width: f.w,
                transform: `rotate(${on ? 0 : f.r}deg) scale(${on ? 1.12 : 1})`,
                zIndex: on ? 20 : 1,
                filter: hover && !on ? "brightness(.35) saturate(.6)" : "none",
              }}
            >
              {on && f.video ? (
                <video src={f.video} autoPlay muted loop playsInline className={`w-full object-cover ${f.v ? "aspect-[9/16]" : "aspect-video"}`} />
              ) : (
                <img src={f.src} alt="" draggable={false} className={`w-full select-none object-cover ${f.v ? "aspect-[9/16]" : "aspect-video"}`} />
              )}
              <span className="mono absolute bottom-[5px] left-2 text-[8px] uppercase tracking-[0.14em] text-[#F5E614]/80">{f.title}</span>
              {on && f.key.endsWith("-0") && <HandCircle className="pointer-events-none absolute -left-6 -top-6 h-[calc(100%+48px)] w-[calc(100%+48px)]" />}
            </Link>
          );
        })}
      </div>

      {/* Titular fijo */}
      <div className="pointer-events-none absolute inset-x-6 bottom-10 md:inset-x-12 md:bottom-14">
        <h1 className="display leading-[0.92] text-[#f0ede8]" style={{ fontSize: "clamp(52px, 9vw, 150px)", textShadow: "0 6px 40px rgba(0,0,0,.6)" }}>
          We shoot brands.
        </h1>
        <p className="mono mt-4 max-w-md text-[11px] uppercase leading-[1.6] tracking-[0.12em] text-white/75">{statement} Drag the table.</p>
      </div>
    </section>
  );
}
