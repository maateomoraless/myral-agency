import { CaseStudyCta } from "@/components/case-study/CaseStudySections";
import HeroWordReveal from "@/components/effects/HeroWordReveal";
import ParallaxBackground from "@/components/effects/ParallaxBackground";
import MonoLocoContent from "./MonoLocoContent";

export const metadata = {
  title: "Mono Loco Festival × MYRAL Agency — Gestión de Evento",
  description:
    "Gestión integral de comunicación y redes sociales para el Mono Loco Festival. 16.000 asistentes en León.",
};

export default function MonoLocoFestivalPage() {
  return (
    <>
      <section className="relative min-h-[85vh] overflow-hidden no-media-hover-wrap">
        <ParallaxBackground className="absolute inset-0 h-[115%] w-full">
          <img
            src="/images/monoloco-1.png"
            alt="Mono Loco Festival"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </ParallaxBackground>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(5,5,11,0.95) 100%)",
          }}
        />
        <div className="relative z-10 flex min-h-[85vh] flex-col justify-end px-6 pb-14 pt-32 md:px-[52px] md:pb-16">
          <span className="mb-4 inline-block w-fit border border-[#F5E614]/40 bg-[#05050b]/80 px-3 py-1 text-[9px] uppercase tracking-[0.18em] text-[#F5E614] backdrop-blur-sm">
            Gestión Integral de Evento · León · 2024
          </span>
          <HeroWordReveal
            text="Mono Loco Festival"
            as="h1"
            className="title-display max-w-4xl text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.5)]"
          />
          <HeroWordReveal
            text="16.000 personas. Un solo escenario."
            as="p"
            className="mt-4 max-w-2xl font-[var(--font-instrument)] text-[clamp(1.25rem,3vw,2rem)] italic text-[#F5E614] drop-shadow-[0_2px_16px_rgba(0,0,0,0.45)]"
          />
        </div>
      </section>

      <MonoLocoContent />

      <CaseStudyCta />
    </>
  );
}
