"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { getProject, projects, ui } from "@/lib/projects";
import { HandCircle } from "./HandMark";
import { useT } from "./Lang";

export default function ProjectView({ slug }: { slug: string }) {
  const t = useT();
  const p = getProject(slug)!;
  const idx = projects.findIndex((x) => x.slug === slug);
  const next = projects[(idx + 1) % projects.length];
  const [ready, setReady] = useState(false);
  const strip = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // Arrastrar la tira de fotogramas con el ratón
  useEffect(() => {
    const el = strip.current;
    if (!el) return;
    let down = false,
      sx = 0,
      sl = 0;
    const d = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      down = true;
      sx = e.clientX;
      sl = el.scrollLeft;
      el.setPointerCapture(e.pointerId);
    };
    const m = (e: PointerEvent) => down && (el.scrollLeft = sl - (e.clientX - sx));
    const u = () => (down = false);
    el.addEventListener("pointerdown", d);
    el.addEventListener("pointermove", m);
    el.addEventListener("pointerup", u);
    return () => {
      el.removeEventListener("pointerdown", d);
      el.removeEventListener("pointermove", m);
      el.removeEventListener("pointerup", u);
    };
  }, []);

  const credits = [
    [t(ui.client), p.client],
    ...(p.year ? [[t(ui.year), p.year]] : []),
    [t(ui.role), t(p.role)],
    [t(ui.format), p.format],
  ];

  return (
    <article className="no-reveal bg-[#05050b] text-[#f0ede8]">
      {/* Plano principal */}
      <section className="no-reveal relative h-[100svh] overflow-hidden">
        <div
          className="absolute inset-0 transition-[filter,transform] duration-[1600ms]"
          style={{
            filter: ready ? "blur(0) brightness(0.85)" : "blur(30px) brightness(0.4)",
            transform: ready ? "scale(1)" : "scale(1.15)",
            transitionTimingFunction: "var(--ease-film)",
          }}
        >
          {p.video ? (
            <video className="h-full w-full object-cover" src={p.video} poster={p.poster} autoPlay muted loop playsInline />
          ) : (
            <img src={p.poster} alt={p.title} className="studio-kenburns h-full w-full object-cover" />
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#05050b] via-transparent to-transparent" />

        <div className="absolute inset-x-5 bottom-16 flex flex-col gap-8 md:inset-x-8 md:bottom-20 lg:flex-row lg:items-end lg:justify-between">
          <h1 className="display leading-[0.92]" style={{ fontSize: "clamp(56px, 11vw, 180px)" }}>
            {p.title}
          </h1>
          <dl className="mono grid max-w-md grid-cols-[auto_1fr] gap-x-6 gap-y-1.5 text-[10px] uppercase tracking-[0.14em]">
            {credits.map(([k, v]) => (
              <div key={k} className="contents">
                <dt className="text-white/40">{k}</dt>
                <dd className="text-white/85">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Una línea */}
      <section className="no-reveal px-5 py-[22vh] md:px-8">
        <p className="display mx-auto max-w-4xl text-center leading-[1.15]" style={{ fontSize: "clamp(26px, 3.4vw, 52px)" }}>
          {t(p.line)}
        </p>
      </section>

      {/* Tira de negativo */}
      {p.stills.length > 0 && (
        <section className="no-reveal pb-[18vh]">
          <div className="mono mb-5 flex justify-between px-5 text-[10px] uppercase tracking-[0.18em] text-white/40 md:px-8">
            <span>{t(ui.frames)}</span>
            <span>{t(ui.drag)} →</span>
          </div>
          <div ref={strip} className="filmstrip flex gap-0 overflow-x-auto px-5 md:px-8" data-cursor="focus">
            {p.stills.map((s, i) => (
              <figure key={s} className="filmstrip__frame relative shrink-0">
                <img
                  src={s}
                  alt=""
                  draggable={false}
                  className={`h-[46vh] w-auto select-none object-cover ${p.orientation === "v" ? "aspect-[9/16]" : "aspect-[16/10]"}`}
                />
                <span className="mono absolute bottom-[2px] left-2 text-[8px] text-[#f5e614]/70">
                  {String(i + 1).padStart(2, "0")}A
                </span>
                {i === 1 && <HandCircle className="pointer-events-none absolute -left-3 -top-3 h-[calc(100%+24px)] w-[calc(100%+24px)]" />}
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* Siguiente */}
      <section className="no-reveal border-t border-white/10 px-5 pb-28 pt-10 md:px-8">
        <Link href={`/work/${next.slug}`} data-cursor="focus" className="group block">
          <span className="mono text-[10px] uppercase tracking-[0.2em] text-white/40">{t(ui.next)}</span>
          <span
            className="display mt-3 block leading-[0.95] text-white/30 transition-colors duration-500 group-hover:text-[#f0ede8]"
            style={{ fontSize: "clamp(44px, 8vw, 128px)" }}
          >
            {next.title}
          </span>
        </Link>
        <Link href="/" data-cursor="focus" className="mono mt-10 inline-block text-[10px] uppercase tracking-[0.2em] text-white/50 hover:text-white">
          ← {t(ui.back)}
        </Link>
      </section>
    </article>
  );
}
