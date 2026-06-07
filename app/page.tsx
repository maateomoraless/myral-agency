import Link from "next/link";
import AnimatedStats from "@/components/effects/AnimatedStats";
import HeroMiniStats from "@/components/effects/HeroMiniStats";
import HeroWordReveal from "@/components/effects/HeroWordReveal";
import MagneticLink from "@/components/effects/MagneticLink";
import FlowAnimation from "@/components/FlowAnimation";
import WorkCardMedia from "@/components/WorkCardMedia";
import { featuredWorks } from "@/lib/works";

export const metadata = {
  title: "MYRAL Agency — Branding, IA y Marketing Digital en España",
  description:
    "Agencia creativa especializada en branding, redes sociales, publicidad digital y automatización con IA. Más de 20 proyectos activos en toda España.",
};

const services = [
  { num: "01", title: "Gestión de Redes Sociales", desc: "Estrategia, calendarios y gestión completa de Instagram, TikTok y LinkedIn.", href: "/servicios/gestion-redes-sociales" },
  { num: "02", title: "Producción de Contenido", desc: "Fotografía, vídeo y reels de nivel profesional.", href: "/servicios/produccion-contenido" },
  { num: "03", title: "Publicidad Digital", desc: "Campañas Meta Ads y Google Ads. Cada euro con retorno medible.", href: "/servicios/publicidad-digital" },
  { num: "04", title: "Branding e Identidad Visual", desc: "Nombre, logo, colores, tono.", href: "/servicios/branding" },
  { num: "05", title: "Gestión y Producción de Eventos", desc: "Desde la conceptualización hasta la cobertura audiovisual.", href: "/servicios/gestion-eventos" },
  { num: "06", title: "Influencer Marketing", desc: "Alcance real, no vanity metrics.", href: "/servicios/influencer-marketing" },
  { num: "07", title: "Automatización con IA ★", desc: "Tu negocio trabajando 24/7 sin intervención manual.", href: "/servicios/ia" },
  { num: "08", title: "Creación de Webs & Apps ★", desc: "Rápidas, bonitas y conectadas con IA desde el primer día.", href: "/servicios/webs-apps" },
] as const;

const tickerItems = [
  "Branding",
  "Social Media",
  "Webs & Apps",
  "Automatización IA",
  "Meta Ads",
  "Contenido Visual",
  "Influencer Marketing",
  "Gestión de Eventos",
];

const testimonials = [
  {
    quote:
      "«El vídeo que hicieron para mi combate europeo superó todo lo que esperaba. Sin MYRAL ese momento no habría tenido el impacto que tuvo.»",
    name: "Antonio Barrul",
    label: "Boxeador profesional",
  },
  {
    quote:
      "«Por fin alguien que entiende el deporte de élite y sabe cómo contarlo. El contenido que producen habla por sí solo.»",
    name: "Itziar Martínez",
    label: "Escaladora · Top 20 Mundial",
  },
  {
    quote:
      "«En menos de un año pasamos de ser invisibles en redes a tener lista de espera los fines de semana. Los números lo dicen todo.»",
    name: "Cliente en hostelería",
    label: "León, España",
  },
] as const;

const whyMyral = [
  {
    num: "01",
    title: "IA real, no de adorno",
    desc: "Somos de las pocas agencias en España que automatizan procesos reales. Leads, propuestas y reportes en piloto automático.",
  },
  {
    num: "02",
    title: "Producción propia",
    desc: "No subcontratamos. El equipo que habla contigo es el que graba, edita y publica. Sin intermediarios, sin sorpresas.",
  },
  {
    num: "03",
    title: "Datos antes que intuición",
    desc: "Cada decisión tiene un número detrás. Sabemos exactamente qué funciona y qué no antes de invertir un euro.",
  },
  {
    num: "04",
    title: "Sin permanencias",
    desc: "Contratos mensuales. Si en algún momento no estás satisfecho, te vas. Así de simple.",
  },
] as const;

function ServiceTitle({ title }: { title: string }) {
  return (
    <span className="service-title-wrap">
      {title}
      <span className="service-line" aria-hidden />
    </span>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="reveal-section relative flex min-h-screen w-full flex-col justify-end overflow-hidden px-6 pb-[68px] pt-[100px] md:px-[52px]">
        <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 58% 52% at 72% 44%, rgba(245,230,20,.06) 0%, transparent 62%)" }} />
        <div className="hero-text-wrap relative w-full overflow-visible">
        <div className="reveal-item relative mb-[18px] flex items-center gap-2">
          <span className="h-[7px] w-[7px] rounded-full bg-[#F5E614] [animation:pulse_2s_ease-in-out_infinite]" />
          <span className="text-[9px] uppercase tracking-[0.2em] text-white/40">Disponible para nuevos proyectos</span>
        </div>
        <p className="reveal-item mb-5 text-[9px] uppercase tracking-[0.26em] text-[#F5E614]">Branding · IA · Webs · Marketing</p>
        <HeroWordReveal text="Tu marca," as="h1" className="title-display font-[var(--font-syne)]" />
        <HeroWordReveal text="sin excusas." as="p" className="title-display font-[var(--font-instrument)] italic text-[#F5E614]" />
        <div className="reveal-item mt-11 flex flex-wrap items-end justify-between gap-6">
          <p className="max-w-xs text-[13px] leading-[1.82] text-[var(--muted)]">Hacemos que tu negocio crezca online. Redes sociales, publicidad, webs y automatización con IA. Todo en una sola agencia.</p>
          <div className="flex flex-col items-start gap-5 sm:items-end">
            <HeroMiniStats />
            <Link href="#trabajos" className="border border-white/20 px-7 py-3.5 text-[9px] uppercase tracking-[0.16em] text-white/65 transition-colors hover:border-[#F5E614] hover:text-[#F5E614]">Ver nuestro trabajo →</Link>
          </div>
        </div>
        </div>
      </section>

      <div className="ticker-wrap overflow-hidden border-y border-[#F5E614]/10 bg-[var(--bg2)] py-3">
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={`${item}-${i}`} className="mx-6 shrink-0 text-[9px] uppercase tracking-[0.22em] text-[#F5E614]/40">{item} ·</span>
          ))}
        </div>
      </div>

      <section className="section-pad reveal-section">
        <h2 className="reveal-item title-display">Todo lo que necesitas<br /><em className="font-[var(--font-instrument)] font-normal italic text-[#F5E614]">en un sitio.</em></h2>
        <div className="mt-12 grid grid-cols-1 items-stretch overflow-visible md:grid-cols-2">
          {services.map((service, i) => {
            const inner = (
              <>
                <span className={`min-w-6 shrink-0 overflow-visible font-[var(--font-syne)] text-[10px] font-bold ${i >= 6 ? "text-[#F5E614]/50" : "text-[#F5E614]/25"}`}>{service.num}</span>
                <div>
                  <h3 className="font-[var(--font-syne)] text-sm font-semibold transition-colors group-hover:text-[#F5E614]">
                    <ServiceTitle title={service.title} />
                  </h3>
                  <p className="mt-1.5 text-[11px] leading-[1.7] text-[var(--muted)]">{service.desc}</p>
                </div>
              </>
            );
            const className = `hover-card group flex h-full w-full gap-4 overflow-visible py-7 transition-all duration-[400ms] ease-out hover:pl-2.5 md:odd:pr-10 md:even:pl-10 md:even:hover:pl-12 ${
              i >= 6
                ? "border border-[#F5E614]/15 bg-[#F5E614]/[0.04] pl-1"
                : "border-b border-[var(--border)] md:odd:border-r"
            }`;
            return (
              <Link key={service.num} href={service.href} className={className}>
                {inner}
              </Link>
            );
          })}
        </div>
      </section>

      <section id="trabajos" className="section-pad section-alt reveal-section">
        <h2 className="reveal-item title-display">Con quién<br /><em className="font-[var(--font-instrument)] font-normal italic text-[#F5E614]">trabajamos.</em></h2>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredWorks.map((work) => (
            <MagneticLink key={work.href} href={work.href} className="group">
              <article className="hover-card border border-[var(--border)] bg-[var(--bg)]">
                <div className="relative h-[200px] overflow-hidden md:h-[280px]">
                  <WorkCardMedia work={work} />
                </div>
                <div className="p-4">
                  <span className="mb-2 inline-block bg-[#F5E614]/10 px-2 py-0.5 text-[7px] uppercase tracking-[0.14em] text-[#F5E614]">{work.badge}</span>
                  <h3 className="font-[var(--font-syne)] text-base font-semibold text-white transition-colors group-hover:text-[#F5E614]">{work.name}</h3>
                  <p className="mt-1.5 text-xs leading-[1.65] text-[var(--muted)]">{work.desc}</p>
                  <p className="mt-3 text-[8px] uppercase tracking-[0.12em] text-[#F5E614]/70">Ver proyecto →</p>
                </div>
              </article>
            </MagneticLink>
          ))}
        </div>
        <Link href="/trabajos" className="mt-12 inline-block border border-white/20 px-8 py-3.5 text-[9px] uppercase tracking-[0.16em] text-white/65 transition-colors hover:border-[#F5E614] hover:text-[#F5E614]">Ver todos los trabajos →</Link>
      </section>

      <AnimatedStats />

      <section className="reveal-section bg-[#07070f] px-6 py-28 md:px-[52px]">
        <p className="reveal-item mb-6 text-[9px] uppercase tracking-[0.26em] text-[#F5E614]">Lo que dicen</p>
        <h2
          className="reveal-item font-[var(--font-syne)] font-extrabold leading-[1] pb-[0.1em] overflow-visible tracking-[-0.025em] text-white"
          style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
        >
          Clientes que
          <br />
          <em className="font-[var(--font-instrument)] font-normal italic text-[#F5E614]">hablan por nosotros.</em>
        </h2>
        <div className="reveal-item mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map(({ quote, name, label }) => (
            <article
              key={name}
              className="rounded-[12px] border border-[rgba(240,237,232,0.07)] bg-[#0a0a0a] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(245,230,20,0.15)]"
            >
              <span
                className="block font-[var(--font-syne)] text-[48px] font-extrabold leading-none text-[#F5E614] opacity-40"
                aria-hidden
              >
                &ldquo;
              </span>
              <p className="mt-2 text-[15px] italic leading-[1.7] text-[var(--muted)]">{quote}</p>
              <div className="my-6 h-px bg-[rgba(240,237,232,0.07)]" />
              <p className="font-[var(--font-syne)] text-[14px] font-semibold text-white">{name}</p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-[var(--muted)]">{label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad section-alt reveal-section">
        <h2 className="reveal-item title-display">
          No solo creamos.
          <br />
          <em className="font-[var(--font-instrument)] font-normal italic text-[#F5E614]">Lo automatizamos.</em>
        </h2>
        <p className="reveal-item mt-6 max-w-xl text-[13px] leading-[1.82] text-[var(--muted)]">
          Somos de las pocas agencias en España que integran IA real. No como tendencia — como ventaja competitiva.
        </p>
        <div className="reveal-item mt-8 flex flex-wrap gap-8 border-t border-[var(--border)] pt-8">
          {["< 2 min respuesta leads", "100% reportes automáticos", "−72% trabajo manual"].map((s) => (
            <div key={s} className="text-[11px] text-white/70">
              {s}
            </div>
          ))}
        </div>
        <Link
          href="/servicios/ia"
          className="reveal-item mt-10 inline-block text-[9px] uppercase tracking-[0.16em] text-[#F5E614] hover:opacity-70"
        >
          Ver todas las automatizaciones →
        </Link>

        <div className="reveal-item mt-16 grid grid-cols-1 gap-px bg-[var(--border)] md:grid-cols-3">
          {(
            [
              ["01", "Captación de leads", "Respuesta personalizada en menos de 2 minutos."],
              ["02", "Propuestas automáticas", "PDF a medida sin trabajo manual."],
              ["03", "Reportes mensuales", "Día 1 de cada mes, automático."],
            ] as const
          ).map(([n, t, d]) => (
            <article
              key={n}
              className="group relative bg-[var(--bg)] p-7 transition-colors hover:bg-[#F5E614]/[0.02]"
            >
              <div className="absolute left-0 right-0 top-0 h-0.5 origin-left scale-x-0 bg-[#F5E614] transition-transform duration-500 group-hover:scale-x-100" />
              <div className="mb-3 font-[var(--font-syne)] text-[10px] font-bold text-[#F5E614]/25">{n}</div>
              <h3 className="font-[var(--font-syne)] text-[15px] font-semibold">{t}</h3>
              <p className="mt-2 text-[12px] leading-[1.6] text-[var(--muted)]">{d}</p>
            </article>
          ))}
        </div>

        <FlowAnimation />
      </section>

      <section className="reveal-section bg-[#05050b] px-6 py-28 md:px-[52px]">
        <p className="reveal-item mb-6 text-[9px] uppercase tracking-[0.26em] text-[#F5E614]">Por qué nosotros</p>
        <h2
          className="reveal-item font-[var(--font-syne)] font-extrabold leading-[1] pb-[0.1em] overflow-visible tracking-[-0.025em] text-white"
          style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
        >
          Lo que nos hace
          <br />
          <em className="font-[var(--font-instrument)] font-normal italic text-[#F5E614]">diferentes.</em>
        </h2>
        <div className="reveal-item mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
          {whyMyral.map(({ num, title, desc }) => (
            <article
              key={num}
              className="rounded-[12px] border border-[rgba(240,237,232,0.07)] bg-[#07070f] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(245,230,20,0.2)]"
            >
              <span className="font-[var(--font-syne)] text-[48px] font-extrabold leading-none text-[#F5E614] opacity-20">
                {num}
              </span>
              <h3 className="mt-2 font-[var(--font-syne)] text-[18px] font-bold text-white">{title}</h3>
              <p className="mt-3 text-[13px] leading-[1.7] text-[var(--muted)]">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad reveal-section">
        <h2 className="reveal-item title-display cta-heading">¿Listo para crecer?</h2>
        <div className="reveal-item mt-8 flex flex-wrap gap-4">
          <button type="button" data-cal-link="myralagency/diagnostico" data-cal-namespace="diagnostico" data-cal-config='{"layout":"month_view"}' className="btn-yellow bg-[#F5E614] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-black">Reservar llamada gratuita</button>
          <Link href="mailto:info@myralagency.com" className="inline-flex items-center border border-white/20 px-8 py-4 text-[10px] uppercase tracking-[0.16em] text-white/65 hover:border-[#F5E614] hover:text-[#F5E614]">info@myralagency.com</Link>
        </div>
      </section>
    </>
  );
}
