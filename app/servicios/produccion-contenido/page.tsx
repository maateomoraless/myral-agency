import Image from "next/image";
import Link from "next/link";
import InstagramCarouselMockup from "@/components/services/InstagramCarouselMockup";

export const metadata = {
  title: "Producción de Contenido — MYRAL Agency",
  description:
    "Fotografía, vídeo y reels de nivel profesional. Contenido que atrae, convence y convierte para tu marca.",
};

const includes = [
  "Fotografía gastronómica y de producto",
  "Vídeo y reels para Instagram y TikTok",
  "Carteles y motion graphics animados",
  "Contenido adaptado a cada plataforma",
  "Edición y postproducción profesional",
  "Estrategia de publicación incluida",
] as const;

const examplesRow1 = [
  { src: "/images/mono-flyer-1.mp4", label: "Bares del Mono · Cartel animado" },
  { src: "/images/mono-flyer-2.mp4", label: "Bares del Mono · Tardeo" },
  { src: "/images/puntazo-cafe.mp4", label: "El Puntazo · Reel" },
] as const;

const examplesRow2 = [
  { src: "/images/puntazo-cana.mp4", label: "El Puntazo · Reel" },
  { src: "/images/camarote-video.mp4", label: "Camarote Hotel · Presentación" },
] as const;

const steps = [
  ["01", "Briefing", "Entendemos tu marca, tu público y tus objetivos antes de coger la cámara."],
  ["02", "Producción", "Grabamos y fotografiamos con equipamiento profesional en tus localizaciones."],
  ["03", "Edición", "Postproducción, color grading y adaptación a cada formato y plataforma."],
  ["04", "Entrega y publicación", "Te entregamos los assets listos para publicar o lo gestionamos nosotros."],
] as const;

const relatedProjects = [
  {
    href: "/trabajos/antonio-barrul",
    name: "Antonio Barrul",
    image: "/images/barrul-campeon.png",
    badge: "Producción Audiovisual",
  },
  {
    href: "/trabajos/ichi",
    name: "Itziar Martínez",
    image: "/images/ichi-roca.png",
    badge: "Contenido Deportivo",
  },
  {
    href: "/trabajos/mono-loco-festival",
    name: "Mono Loco Festival",
    image: "/images/monoloco-1.png",
    badge: "Gestión de Evento",
  },
] as const;

function VideoExampleCard({ src, label }: { src: string; label: string }) {
  return (
    <article>
      <div className="relative aspect-[9/16] overflow-hidden rounded-lg bg-black">
        <video autoPlay muted loop playsInline className="h-full w-full object-cover" aria-label={label}>
          <source src={src} type="video/mp4" />
        </video>
      </div>
      <p className="mt-3 text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">{label}</p>
    </article>
  );
}

export default function ProduccionContenidoPage() {
  return (
    <>
      <section className="reveal flex min-h-screen flex-col justify-center bg-[#05050b] px-6 pb-16 pt-[120px] md:px-[52px]">
        <p className="mb-6 text-[9px] uppercase tracking-[0.26em] text-[#F5E614]">
          Servicios · Producción de Contenido
        </p>
        <h1
          className="font-[var(--font-syne)] font-extrabold leading-[0.88] tracking-[-0.025em] text-white"
          style={{ fontSize: "clamp(52px, 8vw, 96px)" }}
        >
          Contenido que
        </h1>
        <p
          className="font-[var(--font-instrument)] italic text-[#F5E614]"
          style={{ fontSize: "clamp(52px, 8vw, 96px)", lineHeight: 0.88 }}
        >
          hace que compren.
        </p>
        <p className="mt-8 max-w-lg text-[13px] leading-[1.82] text-[var(--muted)]">
          Fotografía, vídeo y reels de nivel profesional. Contenido que atrae, convence y convierte. Producido para
          que tu marca destaque donde más importa.
        </p>
      </section>

      <section className="reveal bg-[#07070f] px-6 py-28 md:px-[52px]">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="flex justify-center lg:justify-start">
            <InstagramCarouselMockup />
          </div>
          <div>
            <h2 className="mb-8 font-[var(--font-syne)] text-2xl font-bold text-white">Qué incluye</h2>
            <ul className="space-y-4">
              {includes.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 border-b border-[var(--border)] pb-4 text-[14px] leading-[1.65] text-white/85"
                >
                  <span className="shrink-0 text-[#F5E614]">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="reveal bg-[#05050b] px-6 py-24 md:px-[52px]">
        <h2 className="title-display">
          Ejemplos reales
          <br />
          <em className="font-[var(--font-instrument)] font-normal italic text-[#F5E614]">de nuestro trabajo.</em>
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {examplesRow1.map((item) => (
            <VideoExampleCard key={item.src} src={item.src} label={item.label} />
          ))}
        </div>
        <div className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
          {examplesRow2.map((item) => (
            <VideoExampleCard key={item.src} src={item.src} label={item.label} />
          ))}
        </div>
      </section>

      <section className="reveal bg-[#07070f] px-6 py-24 md:px-[52px]">
        <h2 className="title-display mb-12">Cómo trabajamos.</h2>
        <div className="max-w-3xl space-y-10">
          {steps.map(([num, title, desc]) => (
            <article key={num} className="flex gap-6 border-b border-[var(--border)] pb-10 last:border-0">
              <span className="font-[var(--font-syne)] text-[clamp(40px,6vw,64px)] font-extrabold leading-none text-[#F5E614]">
                {num}
              </span>
              <div>
                <h3 className="font-[var(--font-syne)] text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-[13px] leading-[1.8] text-[var(--muted)]">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="reveal bg-[#05050b] px-6 py-20 md:px-[52px]">
        <h2 className="title-display mb-12">Proyectos de producción.</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {relatedProjects.map((project) => (
            <Link
              key={project.href}
              href={project.href}
              className="hover-card group border border-[var(--border)] bg-[#07070f] transition-colors hover:border-[#F5E614]/25"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <span className="mb-2 inline-block bg-[#F5E614]/10 px-2 py-0.5 text-[7px] uppercase tracking-[0.14em] text-[#F5E614]">
                  {project.badge}
                </span>
                <h3 className="font-[var(--font-syne)] text-base font-semibold text-white transition-colors group-hover:text-[#F5E614]">
                  {project.name}
                </h3>
                <p className="mt-3 text-[8px] uppercase tracking-[0.12em] text-[#F5E614]/70">Ver proyecto →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="reveal bg-[#05050b] px-6 py-24 text-center md:px-[52px]">
        <h2 className="title-display mx-auto max-w-3xl">¿Quieres contenido de este nivel?</h2>
        <button
          type="button"
          data-cal-link="myralagency/diagnostico"
          data-cal-namespace="diagnostico"
          data-cal-config='{"layout":"month_view"}'
          className="mt-10 bg-[#F5E614] px-10 py-5 text-[10px] font-bold uppercase tracking-[0.18em] text-black transition-opacity hover:opacity-90"
        >
          Reservar llamada gratuita →
        </button>
      </section>
    </>
  );
}
