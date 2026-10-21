import Link from "next/link";
import AnimatedStats from "@/components/effects/AnimatedStats";
import HeroWordReveal from "@/components/effects/HeroWordReveal";
import HeroShowreel from "@/components/HeroShowreel";
import WorkCardMedia from "@/components/WorkCardMedia";
import { clientNames, featuredWorks } from "@/lib/works";

export const metadata = {
  title: "MYRAL — Estudio visual · Producción audiovisual y contenido",
  description:
    "Estudio visual en León. Producción audiovisual, contenido y redes para marcas, artistas y deportistas: Europa FM, Jakob Schubert, bodegas de Ribera del Duero y más.",
};

const pillars = [
  {
    num: "01",
    title: "Producción audiovisual",
    desc: "Rodaje y edición de piezas de marca, deporte, conciertos, eventos y videoclips. Del guion a la entrega.",
    links: [
      { href: "/servicios/produccion-contenido", label: "Producción de contenido" },
      { href: "/servicios/gestion-eventos", label: "Eventos" },
      { href: "/servicios/branding", label: "Branding" },
    ],
  },
  {
    num: "02",
    title: "Contenido y redes",
    desc: "Planificación, reels, fotografía y gestión de redes con un estilo propio para cada marca. Y campañas para que se vea.",
    links: [
      { href: "/servicios/gestion-redes-sociales", label: "Gestión de redes" },
      { href: "/servicios/publicidad-digital", label: "Publicidad digital" },
      { href: "/servicios/influencer-marketing", label: "Influencers" },
    ],
  },
  {
    num: "03",
    title: "Sistemas e IA",
    desc: "Automatizamos lo repetitivo: planificación en lote, propuestas, kits de edición por marca y un portal para que veas tus resultados.",
    links: [
      { href: "/servicios/ia", label: "Automatización con IA" },
      { href: "/servicios/webs-apps", label: "Webs y apps" },
    ],
  },
] as const;

const systems = [
  ["01", "Portal de cliente", "Tus métricas de redes actualizadas, sin esperar al informe mensual.", "Próximamente"],
  ["02", "Kit de marca para edición", "Look de color, logo animado y rótulos propios. Cada pieza sale coherente y más rápido.", "En uso"],
  ["03", "Planificación en lote", "El mes completo de publicaciones, preparado y programado de una vez.", "En uso"],
] as const;

export default function HomePage() {
  return (
    <>
      <HeroShowreel />

      <section className="no-reveal overflow-hidden border-y border-[var(--border)] bg-[var(--bg2)] py-7">
        <p className="mb-5 px-6 text-[9px] uppercase tracking-[0.26em] text-white/35 md:px-[52px]">Han confiado en nosotros</p>
        <div className="ticker-wrap overflow-hidden">
          <div className="ticker-track" style={{ animationDuration: "60s" }}>
            {[...clientNames, ...clientNames].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="mx-8 shrink-0 font-[var(--font-syne)] text-[22px] font-bold tracking-[-0.01em] text-white/45 transition-colors hover:text-white md:text-[28px]"
              >
                {name}
                <span className="ml-16 text-[#F5E614]/50">·</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="trabajos" className="section-pad reveal-section">
        <div className="reveal-item flex flex-wrap items-end justify-between gap-6">
          <h2 className="title-display">
            Trabajo
            <br />
            <em className="font-[var(--font-instrument)] font-normal italic text-[#F5E614]">seleccionado.</em>
          </h2>
          <Link
            href="/trabajos"
            className="text-[10px] uppercase tracking-[0.18em] text-white/55 transition-colors hover:text-[#F5E614]"
          >
            Ver todo el trabajo →
          </Link>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
          {featuredWorks.map((work, i) => (
            <Link
              key={work.href}
              href={work.href}
              className={`group block ${i < 2 || i > 5 ? "col-span-2" : ""}`}
            >
              <article
                className={`relative overflow-hidden bg-[#0a0a0a] ${
                  i < 2 || i > 5 ? "aspect-[4/3] lg:aspect-[16/10]" : "aspect-[4/5]"
                }`}
              >
                <WorkCardMedia work={work} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
                  <p className="text-[8px] uppercase tracking-[0.2em] text-[#F5E614]">{work.badge}</p>
                  <h3 className="mt-1.5 font-[var(--font-syne)] text-[15px] font-bold leading-tight text-white md:text-xl">{work.name}</h3>
                  <p className="mt-1 max-h-0 overflow-hidden text-xs leading-[1.6] text-white/70 transition-all duration-500 group-hover:max-h-24">
                    {work.desc}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <AnimatedStats />

      <section className="section-pad section-alt reveal-section">
        <p className="reveal-item mb-6 text-[9px] uppercase tracking-[0.26em] text-[#F5E614]">Qué hacemos</p>
        <h2 className="reveal-item title-display">
          Tres cosas,
          <br />
          <em className="font-[var(--font-instrument)] font-normal italic text-[#F5E614]">bien hechas.</em>
        </h2>
        <div className="reveal-item mt-14 grid grid-cols-1 gap-px bg-[var(--border)] lg:grid-cols-3">
          {pillars.map((p) => (
            <article key={p.num} className="flex flex-col bg-[var(--bg2)] p-8 md:p-10">
              <span className="font-[var(--font-syne)] text-[11px] font-bold text-[#F5E614]/50">{p.num}</span>
              <h3 className="mt-4 font-[var(--font-syne)] text-[24px] font-extrabold leading-tight text-white">{p.title}</h3>
              <p className="mt-4 text-[13px] leading-[1.8] text-[var(--muted)]">{p.desc}</p>
              <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-8">
                {p.links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="text-[10px] uppercase tracking-[0.16em] text-white/55 transition-colors hover:text-[#F5E614]"
                  >
                    {l.label} →
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad reveal-section">
        <p className="reveal-item mb-6 text-[9px] uppercase tracking-[0.26em] text-[#F5E614]">Sistemas</p>
        <h2 className="reveal-item title-display">
          Menos procesos.
          <br />
          <em className="font-[var(--font-instrument)] font-normal italic text-[#F5E614]">Más imagen.</em>
        </h2>
        <p className="reveal-item mt-6 max-w-xl text-[13px] leading-[1.85] text-[var(--muted)]">
          Usamos IA y automatización en nuestro propio flujo de trabajo. Eso nos deja más tiempo para lo que importa: rodar y
          contar bien las cosas. Y lo aplicamos también a los procesos de nuestros clientes.
        </p>
        <div className="reveal-item mt-14 grid grid-cols-1 gap-px bg-[var(--border)] md:grid-cols-3">
          {systems.map(([n, t, d, status]) => (
            <article key={n} className="group relative bg-[var(--bg)] p-8">
              <div className="absolute left-0 right-0 top-0 h-0.5 origin-left scale-x-0 bg-[#F5E614] transition-transform duration-500 group-hover:scale-x-100" />
              <div className="flex items-center justify-between">
                <span className="font-[var(--font-syne)] text-[10px] font-bold text-[#F5E614]/40">{n}</span>
                <span className="text-[8px] uppercase tracking-[0.2em] text-white/35">{status}</span>
              </div>
              <h3 className="mt-4 font-[var(--font-syne)] text-[17px] font-semibold text-white">{t}</h3>
              <p className="mt-2 text-[12px] leading-[1.7] text-[var(--muted)]">{d}</p>
            </article>
          ))}
        </div>
        <Link
          href="/servicios/ia"
          className="reveal-item mt-10 inline-block text-[10px] uppercase tracking-[0.16em] text-[#F5E614] hover:opacity-70"
        >
          Automatización para tu negocio →
        </Link>
      </section>

      <section className="section-pad section-alt reveal-section">
        <HeroWordReveal text="Hablemos." as="h2" className="title-display cta-heading" />
        <p className="reveal-item mt-6 max-w-md text-[13px] leading-[1.85] text-[var(--muted)]">
          Cuéntanos qué necesitas y te decimos cómo lo haríamos. Sin compromiso.
        </p>
        <div className="reveal-item mt-10 flex flex-wrap gap-4">
          <button
            type="button"
            data-cal-link="myralagency/diagnostico"
            data-cal-namespace="diagnostico"
            data-cal-config='{"layout":"month_view"}'
            className="btn-yellow bg-[#F5E614] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-black"
          >
            Reservar una llamada
          </button>
          <Link
            href="mailto:info@myralagency.com"
            className="inline-flex items-center border border-white/20 px-8 py-4 text-[10px] uppercase tracking-[0.16em] text-white/65 hover:border-[#F5E614] hover:text-[#F5E614]"
          >
            info@myralagency.com
          </Link>
        </div>
      </section>
    </>
  );
}
