"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { clips, statement } from "./useClips";

/** Concepto C — la web es una tele: cada scroll cambia de canal con ruido entre medias. */
export default function Channels() {
  const [ch, setCh] = useState(0);
  const [zap, setZap] = useState(false);
  const canvas = useRef<HTMLCanvasElement>(null);
  const lock = useRef(false);
  const ty = useRef(0);
  const c = clips[ch];

  // Ruido de TV mientras se cambia de canal
  useEffect(() => {
    if (!zap) return;
    const cv = canvas.current;
    const ctx = cv?.getContext("2d");
    if (!cv || !ctx) return;
    cv.width = 320;
    cv.height = 180;
    let raf = 0;
    const draw = () => {
      const img = ctx.createImageData(cv.width, cv.height);
      for (let k = 0; k < img.data.length; k += 4) {
        const v = Math.random() * 255;
        img.data[k] = img.data[k + 1] = img.data[k + 2] = v;
        img.data[k + 3] = 255;
      }
      ctx.putImageData(img, 0, 0);
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, [zap]);

  const go = useCallback((d: number) => {
    if (lock.current) return;
    lock.current = true;
    setZap(true);
    setTimeout(() => setCh((v) => (v + d + clips.length) % clips.length), 160);
    setTimeout(() => setZap(false), 380);
    setTimeout(() => (lock.current = false), 800);
  }, []);

  useEffect(() => {
    const wheel = (e: WheelEvent) => Math.abs(e.deltaY) > 18 && go(e.deltaY > 0 ? 1 : -1);
    const key = (e: KeyboardEvent) => {
      if (["ArrowDown", "ArrowRight", " "].includes(e.key)) go(1);
      if (["ArrowUp", "ArrowLeft"].includes(e.key)) go(-1);
    };
    const ts = (e: TouchEvent) => (ty.current = e.touches[0].clientY);
    const te = (e: TouchEvent) => {
      const d = ty.current - e.changedTouches[0].clientY;
      if (Math.abs(d) > 40) go(d > 0 ? 1 : -1);
    };
    window.addEventListener("wheel", wheel, { passive: true });
    window.addEventListener("keydown", key);
    window.addEventListener("touchstart", ts, { passive: true });
    window.addEventListener("touchend", te, { passive: true });
    return () => {
      window.removeEventListener("wheel", wheel);
      window.removeEventListener("keydown", key);
      window.removeEventListener("touchstart", ts);
      window.removeEventListener("touchend", te);
    };
  }, [go]);

  return (
    <section className="no-reveal fixed inset-0 overflow-hidden bg-black text-[#f0ede8]">
      {c.video ? (
        <video key={c.video} className="absolute inset-0 h-full w-full object-cover" src={c.video} poster={c.poster} autoPlay muted loop playsInline />
      ) : (
        <img key={c.poster} src={c.poster} alt="" className="absolute inset-0 h-full w-full object-cover" />
      )}

      {/* Líneas de barrido y viñeta de tubo */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30 mix-blend-multiply"
        style={{ background: "repeating-linear-gradient(0deg, rgba(0,0,0,.55) 0 1px, transparent 1px 3px)" }}
      />
      <div className="pointer-events-none absolute inset-0" style={{ boxShadow: "inset 0 0 220px 40px rgba(0,0,0,.85)" }} />

      <canvas
        ref={canvas}
        className={`pointer-events-none absolute inset-0 h-full w-full transition-opacity duration-75 ${zap ? "opacity-100" : "opacity-0"}`}
        style={{ imageRendering: "pixelated" }}
      />

      {/* OSD de canal */}
      <div className="mono pointer-events-none absolute right-8 top-8 text-right md:right-14 md:top-14">
        <span className="block text-[46px] font-medium leading-none text-[#F5E614] md:text-[72px]" style={{ textShadow: "0 0 18px rgba(245,230,20,.45)" }}>
          CH {String(ch).padStart(2, "0")}
        </span>
        <span className="mt-2 block text-[11px] uppercase tracking-[0.18em] text-white/70">{c.tag}</span>
      </div>

      <div className="absolute inset-x-8 bottom-8 md:inset-x-14 md:bottom-14">
        <p className="mono mb-5 max-w-md text-[12px] uppercase leading-[1.6] tracking-[0.1em]">{statement}</p>
        <Link href={c.slug ? `/work/${c.slug}` : "/"} data-cursor="focus" className="block">
          <span className="display block leading-[0.95]" style={{ fontSize: "clamp(48px, 9vw, 150px)" }}>
            {c.title}
          </span>
          <span className="mono mt-3 block text-[11px] uppercase tracking-[0.18em] text-white/60">{c.client} — Scroll to zap ↕</span>
        </Link>
      </div>
    </section>
  );
}
