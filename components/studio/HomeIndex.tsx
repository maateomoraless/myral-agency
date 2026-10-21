"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { projects, ui } from "@/lib/projects";
import { HandUnderline } from "./HandMark";
import { useT } from "./Lang";
import { warp } from "./Warp";

/**
 * Portada-índice. Lista de proyectos en grande; el que está activo toma el fondo
 * con un cambio de foco y una distorsión breve. Sin proyecto activo, suena el showreel de fondo.
 */
export default function HomeIndex() {
  const t = useT();
  const router = useRouter();
  const [active, setActive] = useState<number | null>(null);
  const [leaving, setLeaving] = useState(false);
  const videos = useRef<(HTMLVideoElement | null)[]>([]);
  const items = useRef<(HTMLAnchorElement | null)[]>([]);
  const touch = useRef(false);

  const activate = (i: number | null) => {
    setActive((prev) => {
      if (prev === i) return prev;
      if (i !== null) warp();
      return i;
    });
  };

  // Reproducir solo el vídeo activo
  useEffect(() => {
    videos.current.forEach((v, i) => {
      if (!v) return;
      if (i === active) {
        v.currentTime = 0;
        v.play().catch(() => {});
      } else v.pause();
    });
  }, [active]);

  // Táctil: el proyecto que pasa por el centro de la pantalla es el activo
  useEffect(() => {
    touch.current = window.matchMedia("(hover: none)").matches;
    if (!touch.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) activate(Number((e.target as HTMLElement).dataset.i));
        });
      },
      { rootMargin: "-48% 0px -48% 0px" },
    );
    items.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const open = (e: React.MouseEvent, i: number, href: string) => {
    e.preventDefault();
    activate(i);
    setLeaving(true);
    setTimeout(() => router.push(href), 650);
  };

  return (
    <section className={`no-reveal relative min-h-[100svh] bg-[#05050b] ${leaving ? "is-leaving" : ""}`}>
      {/* Fondo */}
      <div className="fixed inset-0 overflow-hidden">
        <video
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            active === null ? "opacity-40" : "opacity-0"
          }`}
          poster="/media/showreel-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
        >
          <source src="/media/showreel-mobile.mp4" type="video/mp4" media="(max-width: 768px) and (orientation: portrait)" />
          <source src="/media/showreel-1080.mp4" type="video/mp4" />
        </video>

        {projects.map((p, i) => (
          <div
            key={p.slug}
            data-o={p.orientation}
            className={`media-layer ${active === i ? "is-active" : ""} ${
              leaving && active === i ? "!inset-0 !w-auto" : ""
            }`}
          >
            <div className="media-warp">
            {p.video ? (
              <video
                ref={(el) => {
                  videos.current[i] = el;
                }}
                src={p.video}
                poster={p.poster}
                muted
                loop
                playsInline
                preload={i < 3 ? "auto" : "metadata"}
                aria-hidden
              />
            ) : (
              <img src={p.poster} alt="" className="studio-kenburns" />
            )}
            </div>
          </div>
        ))}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#05050b]/80 via-[#05050b]/20 to-transparent" />
      </div>

      {/* Índice */}
      <div
        className={`relative z-10 px-5 pb-[40vh] pt-[40vh] transition-opacity duration-500 md:px-8 md:pb-[22vh] md:pt-[24vh] ${
          leaving ? "opacity-0" : "opacity-100"
        }`}
        onMouseLeave={() => !touch.current && activate(null)}
      >
        <p className="mono mb-8 text-[10px] uppercase tracking-[0.2em] text-white/40">
          {t(ui.index)} — {String(projects.length).padStart(2, "0")}
        </p>
        <ol>
          {projects.map((p, i) => {
            const on = active === i;
            return (
              <li key={p.slug}>
                <Link
                  ref={(el) => {
                    items.current[i] = el;
                  }}
                  data-i={i}
                  data-cursor="focus"
                  href={`/work/${p.slug}`}
                  onMouseEnter={() => !touch.current && activate(i)}
                  onClick={(e) => open(e, i, `/work/${p.slug}`)}
                  className="group relative flex items-baseline gap-3 py-[0.06em] md:gap-5"
                >
                  <span className="mono w-6 shrink-0 text-[10px] text-white/35 md:w-8">{String(i + 1).padStart(2, "0")}</span>
                  <span
                    className={`display relative leading-[0.98] transition-colors duration-500 ${
                      on ? "text-[#f0ede8]" : active === null ? "text-[#f0ede8]/70" : "text-[#f0ede8]/18"
                    }`}
                    style={{ fontSize: "clamp(38px, 6.4vw, 104px)" }}
                  >
                    {p.title}
                    {on && <HandUnderline key={`u-${i}`} className="absolute -bottom-[0.06em] left-0 h-[0.16em] w-full" />}
                  </span>
                  <span
                    className={`mono hidden self-center text-[10px] uppercase tracking-[0.16em] text-white/70 transition-all duration-500 lg:inline ${
                      on ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
                    }`}
                  >
                    {t(p.role)}
                    {p.year ? ` — ${p.year}` : ""}
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
