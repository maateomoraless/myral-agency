import Link from "next/link";
import WorkCardMedia from "@/components/WorkCardMedia";
import { featuredWorks } from "@/lib/works";

const services = [
  { num: "01", title: "Gestión de Redes Sociales", desc: "Estrategia, calendarios y gestión completa de Instagram, TikTok y LinkedIn.", href: "/servicios/gestion-redes-sociales" },
  { num: "02", title: "Producción de Contenido", desc: "Fotografía, vídeo y reels de nivel profesional." },
  { num: "03", title: "Publicidad Digital", desc: "Campañas Meta Ads y Google Ads. Cada euro con retorno medible." },
  { num: "04", title: "Branding e Identidad Visual", desc: "Nombre, logo, colores, tono." },
  { num: "05", title: "Gestión y Producción de Eventos", desc: "Desde la conceptualización hasta la cobertura audiovisual." },
  { num: "06", title: "Influencer Marketing", desc: "Alcance real, no vanity metrics." },
  { num: "07", title: "Automatización con IA ★", desc: "Tu negocio trabajando 24/7 sin intervención manual." },
  { num: "08", title: "Creación de Webs & Apps ★", desc: "Rápidas, bonitas y conectadas con IA desde el primer día." },
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

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-screen flex-col justify-end overflow-hidden px-6 pb-[68px] pt-[100px] md:px-[52px]">
        <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 58% 52% at 72% 44%, rgba(245,230,20,.06) 0%, transparent 62%)" }} />
        <div className="reveal relative mb-[18px] flex items-center gap-2">
          <span className="h-[7px] w-[7px] rounded-full bg-[#F5E614] [animation:pulse_2s_ease-in-out_infinite]" />
          <span className="text-[9px] uppercase tracking-[0.2em] text-white/40">Disponible para nuevos proyectos</span>
        </div>
        <p className="reveal mb-5 text-[9px] uppercase tracking-[0.26em] text-[#F5E614]">Branding · IA · Webs · Marketing</p>
        <h1 className="reveal title-display font-[var(--font-syne)]">Tu marca,</h1>
        <p className="reveal title-display font-[var(--font-instrument)] italic text-[#F5E614]">sin excusas.</p>
        <div className="reveal mt-11 flex flex-wrap items-end justify-between gap-6">
          <p className="max-w-xs text-[13px] leading-[1.82] text-[var(--muted)]">Hacemos que tu negocio crezca online. Redes sociales, publicidad, webs y automatización con IA. Todo en una sola agencia.</p>
          <div className="flex flex-col items-start gap-5 sm:items-end">
            <div className="flex gap-9">
              {[["20+","Proyectos activos"],["+900%","Crecimiento medio en redes"],["16.000","Asistentes en un solo evento"]].map(([v,l]) => (
                <div key={l}>
                  <div className="font-[var(--font-syne)] text-[28px] font-bold leading-none">{v}</div>
                  <div className="mt-1 text-[8px] uppercase tracking-[0.2em] text-white/25">{l}</div>
                </div>
              ))}
            </div>
            <Link href="#trabajos" className="border border-white/20 px-7 py-3.5 text-[9px] uppercase tracking-[0.16em] text-white/65 transition-colors hover:border-[#F5E614] hover:text-[#F5E614]">Ver nuestro trabajo →</Link>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-[#F5E614]/10 bg-[var(--bg2)] py-3">
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={`${item}-${i}`} className="mx-6 shrink-0 text-[9px] uppercase tracking-[0.22em] text-[#F5E614]/40">{item} ·</span>
          ))}
        </div>
      </div>

      <section className="section-pad reveal">
        <h2 className="title-display">Todo lo que necesitas<br /><em className="font-[var(--font-instrument)] font-normal italic text-[#F5E614]">en un sitio.</em></h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2">
          {services.map((service, i) => {
            const inner = (
              <>
                <span className={`min-w-6 font-[var(--font-syne)] text-[10px] font-bold ${i >= 6 ? "text-[#F5E614]/50" : "text-[#F5E614]/25"}`}>{service.num}</span>
                <div>
                  <h3 className="font-[var(--font-syne)] text-sm font-semibold transition-colors group-hover:text-[#F5E614]">{service.title}</h3>
                  <p className="mt-1.5 text-[11px] leading-[1.7] text-[var(--muted)]">{service.desc}</p>
                </div>
              </>
            );
            const className = `group flex gap-4 border-b border-[var(--border)] py-7 transition-all duration-[400ms] ease-out hover:pl-2.5 md:odd:border-r md:odd:pr-10 md:even:pl-10 md:even:hover:pl-12 ${i >= 6 ? "border border-[#F5E614]/15 bg-[#F5E614]/[0.04] px-5" : ""}`;
            if ("href" in service && service.href) {
              return (
                <Link key={service.num} href={service.href} className={className}>
                  {inner}
                </Link>
              );
            }
            return (
              <article key={service.num} className={className}>
                {inner}
              </article>
            );
          })}
        </div>
      </section>

      <section id="trabajos" className="section-pad section-alt reveal">
        <h2 className="title-display">Con quién<br /><em className="font-[var(--font-instrument)] font-normal italic text-[#F5E614]">trabajamos.</em></h2>
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {featuredWorks.map((work) => (
            <Link key={work.href} href={work.href} className="group block">
              <article className="border border-[var(--border)] bg-[var(--bg)]">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <WorkCardMedia work={work} />
                </div>
                <div className="p-4">
                  <span className="mb-2 inline-block bg-[#F5E614]/10 px-2 py-0.5 text-[7px] uppercase tracking-[0.14em] text-[#F5E614]">{work.badge}</span>
                  <h3 className="font-[var(--font-syne)] text-base font-semibold text-white transition-colors group-hover:text-[#F5E614]">{work.name}</h3>
                  <p className="mt-1.5 text-xs leading-[1.65] text-[var(--muted)]">{work.desc}</p>
                  <p className="mt-3 text-[8px] uppercase tracking-[0.12em] text-[#F5E614]/70">Ver proyecto →</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
        <Link href="/trabajos" className="mt-12 inline-block border border-white/20 px-8 py-3.5 text-[9px] uppercase tracking-[0.16em] text-white/65 transition-colors hover:border-[#F5E614] hover:text-[#F5E614]">Ver todos los trabajos →</Link>
      </section>

      <section className="section-pad reveal">
        <div className="grid grid-cols-1 gap-px bg-[var(--border)] md:grid-cols-3">
          {[
            ["20+", "Proyectos activos"],
            ["+900%", "Crecimiento medio en redes"],
            ["16.000", "Asistentes en un solo evento"],
          ].map(([value, label]) => (
            <div key={label} className="bg-[var(--bg)] p-8 md:p-10">
              <div className="font-[var(--font-syne)] text-[clamp(52px,8vw,80px)] font-extrabold leading-none text-[#F5E614]">{value}</div>
              <div className="mt-3 text-[9px] uppercase tracking-[0.16em] text-[#F5E614]/50">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad section-alt reveal">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="title-display">No solo creamos.<br /><em className="font-[var(--font-instrument)] font-normal italic text-[#F5E614]">Lo automatizamos.</em></h2>
            <p className="mt-6 max-w-xl text-[13px] leading-[1.82] text-[var(--muted)]">Somos de las pocas agencias en España que integra IA real. No como tendencia — como ventaja competitiva.</p>
            <div className="mt-8 flex flex-wrap gap-8 border-t border-[var(--border)] pt-8">
              {["< 2 min respuesta leads", "100% reportes automáticos", "−72% trabajo manual"].map((s) => (
                <div key={s} className="text-[11px] text-white/70">{s}</div>
              ))}
            </div>
            <Link href="/ia" className="mt-10 inline-block text-[9px] uppercase tracking-[0.16em] text-[#F5E614] hover:opacity-70">Ver todas las automatizaciones →</Link>
          </div>
          <div className="flex flex-col gap-px bg-[var(--border)]">
            {[["01","Captación leads"],["02","Propuestas automáticas"],["03","Reportes mensuales"]].map(([n,t]) => (
              <article key={n} className="group relative bg-[var(--bg)] p-7 transition-colors hover:bg-[#F5E614]/[0.02]">
                <div className="absolute left-0 right-0 top-0 h-0.5 origin-left scale-x-0 bg-[#F5E614] transition-transform duration-500 group-hover:scale-x-100" />
                <div className="mb-3 font-[var(--font-syne)] text-[10px] font-bold text-[#F5E614]/25">{n}</div>
                <h3 className="font-[var(--font-syne)] text-[15px] font-semibold">{t}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad reveal">
        <h2 className="title-display">¿Listo para crecer?</h2>
        <div className="mt-8 flex flex-wrap gap-4">
          <button type="button" data-cal-link="myralagency/diagnostico" data-cal-namespace="diagnostico" data-cal-config='{"layout":"month_view"}' className="bg-[#F5E614] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-black">Reservar llamada gratuita</button>
          <Link href="mailto:info@myralagency.com" className="inline-flex items-center border border-white/20 px-8 py-4 text-[10px] uppercase tracking-[0.16em] text-white/65 hover:border-[#F5E614] hover:text-[#F5E614]">info@myralagency.com</Link>
        </div>
      </section>
    </>
  );
}
