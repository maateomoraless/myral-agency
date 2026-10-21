"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

/** Portada: showreel a pantalla completa (versión vertical en móvil) con la firma del estudio. */
export default function HeroShowreel() {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      v.pause();
      return;
    }
    v.play().catch(() => {});
  }, []);

  return (
    <section className="no-reveal relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-[#05050b]">
      <video
        ref={ref}
        className="absolute inset-0 h-full w-full object-cover"
        poster="/media/showreel-poster.jpg"
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
        aria-label="Showreel MYRAL"
      >
        <source src="/media/showreel-mobile.mp4" type="video/mp4" media="(max-width: 768px) and (orientation: portrait)" />
        <source src="/media/showreel-1080.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-[#05050b] via-[#05050b]/25 to-[#05050b]/45" />

      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-14 md:px-[52px] md:pb-16">
        <p className="mb-5 flex items-center gap-2 text-[9px] uppercase tracking-[0.26em] text-white/60">
          <span className="h-[6px] w-[6px] rounded-full bg-[#F5E614] [animation:pulse_2s_ease-in-out_infinite]" />
          Estudio visual · León, España
        </p>
        <h1
          className="font-[var(--font-syne)] font-extrabold leading-[0.95] tracking-[-0.03em] text-white"
          style={{ fontSize: "clamp(48px, 9vw, 132px)" }}
        >
          Visuals
          <br />
          <em className="font-[var(--font-instrument)] font-normal italic text-[#F5E614]">for brands.</em>
        </h1>
        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <p className="max-w-sm text-[13px] leading-[1.8] text-white/65">
            Producción audiovisual, contenido y sistemas para marcas, artistas y deportistas que quieren verse al nivel de lo
            que son.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#trabajos"
              className="bg-[#F5E614] px-7 py-3.5 text-[9px] font-bold uppercase tracking-[0.18em] text-black transition-opacity hover:opacity-90"
            >
              Ver trabajo
            </Link>
            <Link
              href="/contacto"
              className="border border-white/25 px-7 py-3.5 text-[9px] uppercase tracking-[0.18em] text-white/75 transition-colors hover:border-[#F5E614] hover:text-[#F5E614]"
            >
              Hablemos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
