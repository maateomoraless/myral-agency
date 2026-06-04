"use client";

import { useInViewOnce } from "@/components/effects/AnimatedCounter";

const steps = [
  {
    num: "01",
    title: "NAMING",
    desc: "El nombre lo es todo. Tiene que sonar bien, ser memorable y transmitir lo que eres. Trabajamos contigo para encontrar el nombre perfecto.",
  },
  {
    num: "02",
    title: "TIPOGRAFÍA",
    desc: "La fuente que eliges dice más de ti de lo que crees. Buscamos la tipografía que encaja con tu personalidad de marca.",
  },
  {
    num: "03",
    title: "COLOR",
    desc: "El color crea emoción antes de que se lea una sola palabra. Definimos una paleta que funcione en todos los contextos.",
  },
  {
    num: "04",
    title: "LOGO",
    desc: "El símbolo que representa todo lo anterior. Limpio, versátil y que funcione en cualquier tamaño y soporte.",
  },
  {
    num: "05",
    title: "APLICACIONES",
    desc: "El manual de marca que garantiza que tu identidad se aplique correctamente en todos los canales.",
  },
] as const;

export default function BrandingTimeline() {
  const { ref, active } = useInViewOnce();

  return (
    <div ref={ref} className="relative mt-16">
      <div
        className={`absolute left-0 right-0 top-[18px] hidden h-px origin-left bg-[#F5E614]/35 md:block ${
          active ? "branding-timeline-line-active" : "scale-x-0"
        }`}
        aria-hidden
      />
      <ol className="grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-4">
        {steps.map((step, i) => (
          <li
            key={step.num}
            className="relative flex flex-col transition-all duration-500 ease-out md:items-center md:text-center"
            style={{
              transitionDelay: active ? `${i * 0.15}s` : "0s",
              opacity: active ? 1 : 0,
              transform: active ? "translateY(0)" : "translateY(12px)",
            }}
          >
            <span className="relative z-10 mb-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#F5E614]/30 bg-[#07070f] font-[var(--font-syne)] text-[11px] font-bold text-[#F5E614] md:mx-auto">
              {step.num}
            </span>
            <h3 className="font-[var(--font-syne)] text-[11px] font-bold uppercase tracking-[0.14em] text-white">
              {step.title}
            </h3>
            <p className="mt-3 text-[12px] leading-[1.7] text-[var(--muted)] md:max-w-[200px]">
              {step.desc}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
