import Link from "next/link";
import FinalCta from "@/components/FinalCta";
import HeroWordReveal from "@/components/effects/HeroWordReveal";
import ParallaxBackground from "@/components/effects/ParallaxBackground";
import BarrulResultsStats from "@/components/case-study/BarrulResultsStats";

export const metadata = {
  title: "Antonio Barrul × MYRAL Agency — Producción Audiovisual",
  description:
    "Anuncio cinematográfico del primer combate europeo de Antonio Barrul. 300K+ impresiones orgánicas sin publicidad pagada.",
};

const whatWeDid = [
  "Desarrollo del concepto narrativo y guion visual",
  "Dirección y producción completa del vídeo",
  "Grabación en localizaciones reales de León",
  "Edición cinematográfica con color grading premium",
  "Adaptación para Instagram Reels y Stories",
] as const;

export default function AntonioBarrulPage() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden no-media-hover-wrap">
        <ParallaxBackground className="absolute inset-0 h-[115%] w-full">
          <img
            src="/images/barrul-campeon.png"
            alt="Antonio Barrul"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </ParallaxBackground>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(5,5,11,0.85) 100%)",
          }}
        />
        <div className="relative z-10 flex min-h-screen flex-col justify-end px-6 pb-20 pt-32 md:px-[52px]">
          <span className="mb-4 text-[9px] uppercase tracking-[0.18em] text-[#F5E614]">
            Producción Audiovisual · 2024
          </span>
          <HeroWordReveal
            text="Antonio Barrul"
            as="h1"
            className="hero-title-96 font-[var(--font-syne)] font-extrabold tracking-[-0.025em] text-white"
          />
          <HeroWordReveal
            text="El anuncio que lo cambió todo."
            as="p"
            className="mt-4 font-[var(--font-instrument)] text-[clamp(1.25rem,3vw,2rem)] italic text-[#F5E614]"
          />
        </div>
      </section>

      <section className="relative min-h-screen overflow-hidden no-media-hover-wrap">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 z-0 h-full w-full object-cover"
          aria-label="Anuncio Antonio Barrul"
        >
          <source
            src="https://pub-b4af313647b6409d962b89eaf287e84c.r2.dev/barrul-video.mp4"
            type="video/mp4"
          />
        </video>
        <div className="pointer-events-none absolute inset-0 z-[1] bg-transparent" aria-hidden />
        <div className="pointer-events-none absolute inset-0 z-[2] bg-[rgba(5,5,11,0.55)]" />
        <div className="relative z-[2] flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center md:px-[52px]">
          <p className="mb-6 text-[9px] uppercase tracking-[0.22em] text-[#F5E614]">El anuncio</p>
          <h2
            className="max-w-4xl font-[var(--font-syne)] font-extrabold leading-[1.05] tracking-[-0.02em] text-white"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            Producción cinematográfica para el primer combate europeo de Antonio Barrul
          </h2>
          <div className="mt-10 h-0.5 w-[60px] bg-[#F5E614]" />
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[#07070f] px-6 py-24 md:px-[52px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="mb-6 font-[var(--font-syne)] text-2xl font-bold text-[#F5E614]">El proyecto</h2>
            <p className="text-[14px] leading-[1.85] text-[var(--muted)]">
              Antonio Barrul es uno de los boxeadores más seguidos de España con más de 300.000 seguidores. Cuando
              llegó a MYRAL tenía un hito que anunciar: su primer combate a nivel europeo. Necesitaba algo
              cinematográfico, algo que estuviera a la altura del momento.
            </p>
          </div>
          <div className="overflow-hidden rounded-[4px]">
            <img
              src="/images/barrul-ring.png"
              alt="Antonio Barrul en el ring"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover lg:aspect-auto lg:min-h-[360px]"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[#05050b] px-6 py-24 md:px-[52px]">
        <h2 className="title-display mb-12">Lo que hicimos.</h2>
        <ul className="max-w-3xl space-y-4">
          {whatWeDid.map((item) => (
            <li key={item} className="flex gap-4 text-base text-white/85">
              <span className="shrink-0 text-[#F5E614]">→</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-[var(--border)] bg-[#07070f] px-6 py-24 md:px-[52px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-center lg:gap-16">
          <div className="overflow-hidden">
            <img
              src="/images/barrul-equipo.png"
              alt="Equipo de producción Antonio Barrul"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover lg:aspect-auto lg:min-h-[480px]"
            />
          </div>

          <div className="flex flex-col">
            <BarrulResultsStats />

            <div className="my-8 h-px w-full bg-[var(--border)]" />

            <p className="text-[13px] leading-[1.85] text-[var(--muted)]">
              El vídeo se convirtió en la publicación con más alcance orgánico de su historia en Instagram. Sin
              publicidad pagada.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[#05050b] px-6 py-12 text-center md:px-[52px]">
        <p className="mb-3 text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">Ver el proyecto completo</p>
        <Link
          href="https://www.instagram.com/reel/DOoi8rWAk_V/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] uppercase tracking-[0.16em] text-[#F5E614] transition-opacity hover:opacity-70"
        >
          Instagram →
        </Link>
      </section>

      <FinalCta title="¿Quieres un contenido así para tu marca?" />
    </>
  );
}
