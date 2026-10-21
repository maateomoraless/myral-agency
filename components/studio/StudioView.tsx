"use client";

import { useT } from "./Lang";

/** Provisional: frase + hueco para la película de la historia de MYRAL. */
export default function StudioView() {
  const t = useT();
  return (
    <section className="no-reveal relative flex min-h-[100svh] flex-col items-center justify-center bg-[#05050b] px-5 text-center">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-20"
        src="/media/showreel-1080.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
      />
      <p className="display relative max-w-3xl leading-[1.1]" style={{ fontSize: "clamp(32px, 4.6vw, 72px)" }}>
        {t({ en: "Visuals for brands.", es: "Visuals for brands." })}
      </p>
      <p className="mono relative mt-8 text-[10px] uppercase tracking-[0.22em] text-white/45">
        {t({ en: "The film — coming soon", es: "La película — muy pronto" })}
      </p>
    </section>
  );
}
