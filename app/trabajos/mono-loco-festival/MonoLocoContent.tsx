"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatedStatsGrid } from "@/components/effects/AnimatedCounter";

const formatWithDots = (n: number) =>
  Math.round(n)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const resultStats = [
  {
    label: "Asistentes — aforo completo",
    target: 16000,
    format: formatWithDots,
    valueClassName:
      "font-[var(--font-syne)] text-[clamp(2rem,5vw,3rem)] font-extrabold leading-none text-[#F5E614]",
  },
  {
    label: "Evento del año en León",
    staticValue: "Top",
    valueClassName:
      "font-[var(--font-syne)] text-[clamp(2rem,5vw,3rem)] font-extrabold leading-none text-[#F5E614]",
  },
  {
    label: "Entradas agotadas antes del evento",
    staticValue: "Sold out",
    valueClassName:
      "font-[var(--font-syne)] text-[clamp(2rem,5vw,3rem)] font-extrabold leading-none text-[#F5E614]",
  },
];
const whatWeDid = [
  "Estrategia de comunicación y campaña en redes sociales",
  "Gestión de la comunidad online antes, durante y después del evento",
  "Campañas Meta Ads segmentadas por edad, intereses y localización",
  "Producción de contenido audiovisual para promoción",
  "Cobertura en directo del evento en redes sociales",
  "Gestión de RRPP y relaciones con medios locales",
] as const;

const sidebarPhotos = [
  "/images/monoloco-2.png",
  "/images/monoloco-3.png",
  "/images/monoloco-4.png",
] as const;

export default function MonoLocoContent() {
  const textRef = useRef<HTMLDivElement>(null);
  const [galleryHeight, setGalleryHeight] = useState<number | null>(null);

  useEffect(() => {
    const textEl = textRef.current;
    if (!textEl) return;

    const syncHeight = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setGalleryHeight(textEl.offsetHeight);
      } else {
        setGalleryHeight(null);
      }
    };

    syncHeight();

    const observer = new ResizeObserver(syncHeight);
    observer.observe(textEl);
    window.addEventListener("resize", syncHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", syncHeight);
    };
  }, []);

  return (
    <section className="section-pad section-alt reveal border-t border-[var(--border)]">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_40%] lg:items-start lg:gap-12 xl:gap-16">
        <div ref={textRef} className="space-y-14 lg:space-y-16">
          <div>
            <p className="text-[14px] leading-[1.85] text-[var(--muted)]">
              El Mono Loco Festival es uno de los eventos de música y ocio más grandes de León. Con un aforo de 16.000
              personas, la organización exige un nivel de coordinación, comunicación y logística que va mucho más allá de
              lo que cualquier agencia convencional puede ofrecer. MYRAL asumió la gestión integral del evento.
            </p>
          </div>

          <div className="border-t border-[var(--border)] pt-14 lg:pt-16">
            <h2 className="mb-6 font-[var(--font-syne)] text-3xl font-extrabold text-white">El reto</h2>
            <p className="text-[14px] leading-[1.85] text-[var(--muted)]">
              Coordinar un evento de 16.000 personas requiere sistemas, no improvisación. La comunicación tiene que
              llegar al público correcto en el momento correcto, las entradas tienen que venderse con antelación
              suficiente para cubrir costes fijos, y el día del evento todo tiene que funcionar como un reloj.
            </p>
          </div>

          <div className="border-t border-[var(--border)] pt-14 lg:pt-16">
            <h2 className="mb-8 font-[var(--font-syne)] text-3xl font-extrabold text-white">Lo que hicimos</h2>
            <ul className="space-y-4">
              {whatWeDid.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 border-b border-[var(--border)] pb-4 text-[14px] text-white/80"
                >
                  <span className="shrink-0 text-[#F5E614]">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-[var(--border)] pt-14 lg:pt-16">
            <h2 className="mb-8 font-[var(--font-syne)] text-3xl font-extrabold text-white">El resultado</h2>
            <AnimatedStatsGrid
              items={resultStats}
              wrapperClassName="mb-8"
              gridClassName="grid grid-cols-1 gap-px bg-[var(--border)] sm:grid-cols-3"
              cellClassName="bg-[var(--bg)] p-6"
            />
            <p className="text-[14px] leading-[1.85] text-[var(--muted)]">
              Uno de los eventos más grandes de León gestionado por MYRAL. Cuando el aforo importa, los sistemas
              importan más.
            </p>
          </div>
        </div>

        <aside
          className="hidden h-full flex-col gap-px overflow-hidden lg:flex"
          style={galleryHeight != null ? { height: galleryHeight } : undefined}
        >
          {sidebarPhotos.map((src, i) => (
            <div key={src} className="min-h-0 flex-1 overflow-hidden bg-[var(--bg)]">
              <img
                src={src}
                alt={`Mono Loco Festival ${i + 2}`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </aside>
      </div>

      <div className="mt-10 flex flex-col gap-px lg:hidden">
        {sidebarPhotos.map((src, i) => (
          <div key={src} className="aspect-video overflow-hidden bg-[var(--bg)]">
            <img
              src={src}
              alt={`Mono Loco Festival ${i + 2}`}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
