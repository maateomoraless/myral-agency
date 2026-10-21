"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { clips, statement } from "./useClips";

/** Concepto A — la web es el visor de la cámara. Cada scroll es un clip nuevo. */
export default function Viewfinder() {
  const [i, setI] = useState(0);
  const [blink, setBlink] = useState(false);
  const [tc, setTc] = useState("00:00:00:00");
  const lock = useRef(false);
  const touchY = useRef(0);
  const c = clips[i];

  const go = useCallback((d: number) => {
    if (lock.current) return;
    lock.current = true;
    setBlink(true);
    setTimeout(() => {
      setI((v) => (v + d + clips.length) % clips.length);
      setBlink(false);
    }, 180);
    setTimeout(() => (lock.current = false), 900);
  }, []);

  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    const loop = (now: number) => {
      const f = Math.floor(((now - start) / 1000) * 25);
      const ff = f % 25,
        s = Math.floor(f / 25) % 60,
        m = Math.floor(f / 1500) % 60;
      const p = (n: number) => String(n).padStart(2, "0");
      setTc(`00:${p(m)}:${p(s)}:${p(ff)}`);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [i]);

  useEffect(() => {
    const wheel = (e: WheelEvent) => Math.abs(e.deltaY) > 18 && go(e.deltaY > 0 ? 1 : -1);
    const key = (e: KeyboardEvent) => {
      if (["ArrowDown", "ArrowRight", " "].includes(e.key)) go(1);
      if (["ArrowUp", "ArrowLeft"].includes(e.key)) go(-1);
    };
    const ts = (e: TouchEvent) => (touchY.current = e.touches[0].clientY);
    const te = (e: TouchEvent) => {
      const d = touchY.current - e.changedTouches[0].clientY;
      if (Math.abs(d) > 40) go(d > 0 ? 1 : -1);
    };
    window.addEventListener("wheel", wheel, { passive: true });
    window.addEventListener("keydown", key);
    window.addEventListener("touchstart", ts, { passive: true });
    window.addEventListener("touchend", te, { passive: true });
    const auto = setInterval(() => go(1), 7000);
    return () => {
      window.removeEventListener("wheel", wheel);
      window.removeEventListener("keydown", key);
      window.removeEventListener("touchstart", ts);
      window.removeEventListener("touchend", te);
      clearInterval(auto);
    };
  }, [go, i]);

  return (
    <section className="no-reveal fixed inset-0 overflow-hidden bg-black text-[#f0ede8]">
      {c.video ? (
        <video
          key={c.video}
          className="absolute inset-0 h-full w-full object-cover"
          src={c.video}
          poster={c.poster}
          autoPlay
          muted
          loop
          playsInline
          style={{ animation: "vf-focus 1.1s var(--ease-film) both" }}
        />
      ) : (
        <img key={c.poster} src={c.poster} alt="" className="studio-kenburns absolute inset-0 h-full w-full object-cover" />
      )}
      <div className={`absolute inset-0 bg-black transition-opacity duration-150 ${blink ? "opacity-100" : "opacity-0"}`} />

      {/* Tercios */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
        <div className="absolute inset-y-0 left-1/3 w-px bg-white" />
        <div className="absolute inset-y-0 left-2/3 w-px bg-white" />
        <div className="absolute inset-x-0 top-1/3 h-px bg-white" />
        <div className="absolute inset-x-0 top-2/3 h-px bg-white" />
      </div>

      {/* Esquinas del visor */}
      <div className="pointer-events-none absolute inset-6 md:inset-12">
        {["left-0 top-0 border-l border-t", "right-0 top-0 border-r border-t", "left-0 bottom-0 border-l border-b", "right-0 bottom-0 border-r border-b"].map(
          (k) => (
            <span key={k} className={`absolute h-8 w-8 border-white/80 ${k}`} />
          ),
        )}
        <span className="absolute left-1/2 top-1/2 h-4 w-px -translate-x-1/2 -translate-y-1/2 bg-white/70" />
        <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 bg-white/70" />
      </div>

      {/* OSD */}
      <div className="mono pointer-events-none absolute inset-x-10 top-10 flex items-center justify-between text-[11px] uppercase tracking-[0.14em] md:inset-x-16 md:top-16">
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#F5E614]" style={{ animation: "vf-rec 1.2s steps(2) infinite" }} />
          REC
        </span>
        <span className="tabular-nums">{tc}</span>
        <span className="hidden opacity-80 sm:inline">4K · 25P · ISO 800 · 1/50</span>
      </div>

      <div className="absolute inset-x-10 bottom-10 md:inset-x-16 md:bottom-16">
        <p className="mono mb-4 max-w-sm text-[11px] uppercase leading-[1.6] tracking-[0.12em] text-white/85">{statement}</p>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Link href={c.slug ? `/work/${c.slug}` : "/"} data-cursor="focus" className="block">
            <span className="mono text-[11px] tracking-[0.16em] text-[#F5E614]">
              CLIP {String(i).padStart(2, "0")} / {String(clips.length - 1).padStart(2, "0")}
            </span>
            <span className="display block leading-[0.95]" style={{ fontSize: "clamp(48px, 9vw, 150px)" }}>
              {c.title}
            </span>
          </Link>
          <div className="mono text-right text-[11px] uppercase tracking-[0.14em] text-white/80">
            <span className="block">{c.tag}</span>
            <span className="mt-2 block opacity-60">Scroll ↓ next clip</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes vf-focus { from { filter: blur(22px); transform: scale(1.08); } to { filter: blur(0); transform: scale(1); } }
        @keyframes vf-rec { 0% { opacity: 1 } 100% { opacity: 0.15 } }
      `}</style>
    </section>
  );
}
