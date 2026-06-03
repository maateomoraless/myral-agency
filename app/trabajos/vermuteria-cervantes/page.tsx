import Link from "next/link";
import HeroWordReveal from "@/components/effects/HeroWordReveal";
import ParallaxBackground from "@/components/effects/ParallaxBackground";
import CervantesStats from "@/components/case-study/CervantesStats";
import InstagramBrowserMockup from "./InstagramBrowserMockup";

const whatWeDid = [
  "Estrategia de contenido mensual personalizada",
  "Fotografía gastronómica profesional de platos y ambiente",
  "Producción de reels y vídeos para Instagram",
  "Diseño de campañas especiales: Día del Padre, catas de vermut, menús de grupo",
  "Gestión diaria de la cuenta y atención a comentarios",
] as const;

export default function CervantesPage() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden">
        <ParallaxBackground className="absolute inset-0 h-[115%] w-full">
          <iframe
            src="https://www.youtube.com/embed/a1m5ssvZ65k?autoplay=1&mute=1&loop=1&playlist=a1m5ssvZ65k&controls=0&showinfo=0&rel=0"
            className="absolute inset-0 h-full w-full"
            style={{ border: "none", pointerEvents: "none" }}
            allow="autoplay"
            allowFullScreen
            title="Vermutería Cervantes"
          />
        </ParallaxBackground>
        <div className="pointer-events-none absolute inset-0 bg-[rgba(5,5,11,0.55)]" />
        <div className="relative z-10 flex min-h-screen flex-col justify-end px-6 pb-20 pt-32 md:px-[52px]">
          <span className="mb-4 text-[9px] uppercase tracking-[0.18em] text-[#F5E614]">
            Social Media · León · 2023-2024
          </span>
          <HeroWordReveal
            text="Vermutería Cervantes"
            as="h1"
            className="font-[var(--font-syne)] font-extrabold leading-[0.92] tracking-[-0.025em] text-white"
            style={{ fontSize: "clamp(52px, 8vw, 96px)" }}
          />
          <HeroWordReveal
            text="De 200 a 2.000. En menos de un año."
            as="p"
            className="mt-4 font-[var(--font-instrument)] text-[clamp(1.25rem,3vw,2rem)] italic text-[#F5E614]"
          />
        </div>
      </section>

      <CervantesStats />

      <section className="border-t border-[var(--border)] bg-[#07070f] px-6 py-24 md:px-[52px]">
        <h2 className="mb-12 text-center font-[var(--font-syne)] text-[32px] font-extrabold text-white">
          El antes y el después.
        </h2>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <InstagramBrowserMockup
            imageSrc="/images/cervantes-antes.png"
            label="Antes"
            followers="200 seguidores"
          />
          <InstagramBrowserMockup
            imageSrc="/images/cervantes-despues.png"
            label="Después"
            followers="2.000 seguidores"
          />
        </div>
      </section>

      <section className="relative min-h-[70vh] border-t border-[var(--border)] bg-[#05050b]">
        <video
          src="/images/cervantes-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          aria-label="Vermutería Cervantes en el local"
        />
        <div className="absolute inset-0 bg-[rgba(5,5,11,0.6)]" />
        <div className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center px-6 py-24 text-center md:px-[52px]">
          <p className="mb-6 text-[9px] uppercase tracking-[0.18em] text-[#F5E614]">En el local</p>
          <h2
            className="max-w-3xl font-[var(--font-syne)] font-extrabold leading-[1.08] tracking-[-0.02em] text-white"
            style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
          >
            Contenido que atrae. Reservas que llegan.
          </h2>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[#07070f]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center px-6 py-16 md:px-[80px] lg:py-0">
            <p className="mb-4 text-[9px] uppercase tracking-[0.18em] text-[#F5E614]">El proyecto</p>
            <h2 className="mb-6 font-[var(--font-syne)] text-[28px] font-extrabold leading-tight text-white">
              Una cuenta olvidada convertida en el principal canal de captación del local.
            </h2>
            <p className="text-[14px] leading-[1.85] text-[var(--muted)]">
              Vermutería Cervantes llegó a MYRAL con 200 seguidores y sin estrategia. Un año después tienen una
              comunidad activa, contenido de nivel gastronómico y reservas que llegan directamente por Instagram.
            </p>
          </div>
          <div className="h-[500px] overflow-hidden">
            <img
              src="/images/cervantes-mesa.png"
              alt="Mesa en Vermutería Cervantes"
              loading="lazy"
              className="h-full w-full object-cover"
            />
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
          <div className="grid grid-cols-1 gap-4">
            <div className="overflow-hidden">
              <img
                src="/images/cervantes-filete.png"
                alt="Filete Vermutería Cervantes"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="overflow-hidden">
              <img
                src="/images/cervantes-arroz.png"
                alt="Arroz Vermutería Cervantes"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[#07070f] px-6 py-24 text-center md:px-[52px]">
        <p
          className="mx-auto max-w-2xl font-[var(--font-syne)] font-semibold leading-[1.35] text-white"
          style={{ fontSize: "clamp(18px, 2.5vw, 26px)" }}
        >
          Las redes pasaron de ser una cuenta olvidada a ser el principal canal de captación de clientes nuevos del
          local.
        </p>
        <Link
          href="https://www.instagram.com/cervantes10vermuteria/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block text-[11px] uppercase tracking-[0.16em] text-[#F5E614] transition-opacity hover:opacity-70"
        >
          Ver Instagram →
        </Link>
      </section>

      <section className="border-t border-[var(--border)] bg-[#05050b] px-6 py-24 text-center md:px-[52px]">
        <h2 className="font-[var(--font-syne)] text-4xl font-extrabold text-white">
          ¿Quieres estos resultados para tu negocio?
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
