import Link from "next/link";
import HeroWordReveal from "@/components/effects/HeroWordReveal";
import ParallaxBackground from "@/components/effects/ParallaxBackground";
import IchiStats from "@/components/case-study/IchiStats";

const whatWeDid = [
  "Cobertura fotográfica en competiciones internacionales",
  "Fotografía de acción en roca natural exterior",
  "Contenido para redes adaptado a cada plataforma",
  "Edición y postproducción de todos los assets",
  "Gestión del archivo visual para uso en redes",
] as const;

export default function IchiPage() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden no-media-hover-wrap">
        <ParallaxBackground className="absolute inset-0 h-[115%] w-full">
          <img
            src="/images/ichi-roca.png"
            alt="Itziar Martínez"
            loading="lazy"
            className="h-full w-full object-cover object-center"
          />
        </ParallaxBackground>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, transparent 30%, rgba(5,5,11,0.9) 100%)",
          }}
        />
        <div className="relative z-10 flex min-h-screen flex-col justify-end px-6 pb-20 pt-32 md:px-[52px]">
          <span className="mb-4 text-[9px] uppercase tracking-[0.18em] text-[#F5E614]">
            Contenido Deportivo · 2024-2025
          </span>
          <HeroWordReveal
            text="Itziar Martínez"
            as="h1"
            className="font-[var(--font-syne)] font-extrabold leading-[0.92] tracking-[-0.025em] text-white"
            style={{ fontSize: "clamp(52px, 8vw, 96px)" }}
          />
          <HeroWordReveal
            text="Top 20 del mundo. Contada como merece."
            as="p"
            className="mt-4 font-[var(--font-instrument)] text-[clamp(1.25rem,3vw,2rem)] italic text-[#F5E614]"
          />
        </div>
      </section>

      <IchiStats />

      <section className="relative min-h-screen overflow-hidden no-media-hover-wrap">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 z-0 h-full w-full object-cover"
          aria-label="Itziar Martínez en competición"
        >
          <source
            src="https://pub-b4af313647b6409d962b89eaf287e84c.r2.dev/ichi-video.MOV"
            type="video/quicktime"
          />
        </video>
        <div className="pointer-events-none absolute inset-0 z-[1] bg-transparent" aria-hidden />
        <div className="pointer-events-none absolute inset-0 z-[2] bg-[rgba(5,5,11,0.5)]" />
        <div className="relative z-[2] flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center md:px-[52px]">
          <p className="mb-6 text-[9px] uppercase tracking-[0.22em] text-[#F5E614]">En acción</p>
          <h2
            className="max-w-2xl font-[var(--font-syne)] font-extrabold leading-[1.08] tracking-[-0.02em] text-white"
            style={{ fontSize: "clamp(32px, 5vw, 60px)" }}
          >
            Cobertura audiovisual de competiciones internacionales de escalada
          </h2>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[#07070f]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="h-[600px] overflow-hidden">
            <img
              src="/images/ichi-roca.png"
              alt="Itziar Martínez en roca natural"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-16 md:px-[80px] lg:py-0">
            <p className="mb-4 text-[9px] uppercase tracking-[0.18em] text-[#F5E614]">El proyecto</p>
            <h2 className="mb-6 font-[var(--font-syne)] text-[32px] font-extrabold leading-tight text-white">
              Escalada de élite contada desde dentro.
            </h2>
            <p className="text-[14px] leading-[1.85] text-[var(--muted)]">
              Itziar Martínez es una de las mejores escaladoras españolas de la historia. Con presencia en Copas del
              Mundo y clasificaciones entre las 20 mejores del mundo, necesitaba un contenido visual que transmitiera
              tanto su nivel técnico como su personalidad fuera de la pared.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[#05050b] px-6 py-24 md:px-[52px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="mb-10 font-[var(--font-syne)] text-4xl font-extrabold text-white">Lo que hicimos.</h2>
            <ul className="space-y-4">
              {whatWeDid.map((item) => (
                <li key={item} className="flex gap-4 text-base text-white/85">
                  <span className="shrink-0 text-[#F5E614]">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-sm">
            <img
              src="/images/ichi-rocódromo.png"
              alt="Itziar Martínez en rocódromo"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover lg:aspect-auto lg:min-h-[480px]"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[#07070f] px-6 py-24 text-center md:px-[52px]">
        <p
          className="mx-auto max-w-2xl font-[var(--font-syne)] font-semibold leading-[1.35] text-white"
          style={{ fontSize: "clamp(20px, 2.5vw, 28px)" }}
        >
          Una biblioteca de contenido que Itziar usa para su presencia online, con imágenes que han circulado en medios
          especializados de escalada y comunidades deportivas internacionales.
        </p>
        <Link
          href="https://www.instagram.com/ichiclimb/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block text-[11px] uppercase tracking-[0.16em] text-[#F5E614] transition-opacity hover:opacity-70"
        >
          Ver perfil →
        </Link>
      </section>

      <section className="border-t border-[var(--border)] bg-[#05050b] px-6 py-24 text-center md:px-[52px]">
        <h2 className="font-[var(--font-syne)] text-4xl font-extrabold text-white">
          ¿Quieres este nivel de producción para tu marca?
        </h2>
        <button
          type="button"
          data-cal-link="myralagency/diagnostico"
          data-cal-namespace="diagnostico"
          data-cal-config='{"layout":"month_view"}'
          className="btn-yellow mt-10 bg-[#F5E614] px-10 py-5 text-[10px] font-bold uppercase tracking-[0.18em] text-black"
        >
          Reservar llamada gratuita →
        </button>
      </section>
    </>
  );
}
