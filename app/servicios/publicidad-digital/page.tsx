import type { ReactNode } from "react";
import MetaAdsDashboardMockup from "@/components/services/MetaAdsDashboardMockup";
import PublicidadComparisonStats from "@/components/services/PublicidadComparisonStats";
import LiveCampaignDashboard from "@/components/services/LiveCampaignDashboard";

const includes = [
  "Segmentación quirúrgica por edad, intereses y localización",
  "Creatividades optimizadas para conversión",
  "Seguimiento de resultados en tiempo real",
  "Optimización continua semana a semana",
  "Reportes mensuales con métricas reales",
] as const;

const platforms = [
  {
    num: "01",
    title: "Meta Ads",
    desc: "Facebook e Instagram. La plataforma con mayor capacidad de segmentación del mundo. Llegamos exactamente a quien tiene que ver tu anuncio.",
    items: [
      "Campañas de tráfico y conversión",
      "Retargeting a visitantes",
      "Audiencias similares",
      "Campañas de reconocimiento de marca",
    ],
  },
  {
    num: "02",
    title: "Google Ads",
    desc: "Captura a quien ya está buscando lo que ofreces. El momento de mayor intención de compra.",
    items: [
      "Búsqueda con palabras clave",
      "Display y remarketing",
      "Google Shopping",
      "Campañas locales",
    ],
  },
] as const;

const steps = [
  ["01", "Análisis", "Estudiamos tu mercado, competencia y público objetivo antes de invertir un euro."],
  ["02", "Estrategia", "Definimos presupuesto, plataformas, segmentación y objetivos medibles."],
  ["03", "Lanzamiento", "Creamos las creatividades, configuramos el pixel y lanzamos la campaña."],
  ["04", "Optimización", "Revisamos los datos cada semana y ajustamos lo que no rinde."],
] as const;

const adExamples = [
  { type: "image" as const, src: "/images/ads-plato.png", badge: "Hostelería · Meta Ads", alt: "Anuncio hostelería Meta Ads" },
  { type: "video" as const, src: "/images/ads-reel.mp4", badge: "Contenido · Reel", alt: "Reel publicitario" },
  { type: "image" as const, src: "/images/ads-decoracion.png", badge: "Restauración · Campaña", alt: "Campaña restauración" },
] as const;

function AdExampleCard({ badge, children }: { badge: string; children: ReactNode }) {
  return (
    <article className="media-hover-wrap relative h-[420px] overflow-hidden rounded-lg">
      {children}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/15" />
      <span className="absolute left-3 top-3 z-10 border border-[#F5E614]/30 bg-[#F5E614]/15 px-2.5 py-1 text-[8px] uppercase tracking-[0.16em] text-[#F5E614]">
        {badge}
      </span>
    </article>
  );
}

export default function PublicidadDigitalPage() {
  return (
    <>
      <section className="reveal flex min-h-screen flex-col justify-end bg-[#05050b] px-6 pb-16 pt-[120px] md:px-[52px]">
        <p className="mb-6 text-[9px] uppercase tracking-[0.26em] text-[#F5E614]">
          Servicios · Publicidad Digital
        </p>
        <h1
          className="font-[var(--font-syne)] font-extrabold leading-[0.88] tracking-[-0.025em] text-white"
          style={{ fontSize: "clamp(52px, 8vw, 96px)" }}
        >
          Publicidad que
        </h1>
        <p
          className="font-[var(--font-instrument)] italic text-[#F5E614]"
          style={{ fontSize: "clamp(52px, 8vw, 96px)", lineHeight: 0.88 }}
        >
          convierte de verdad.
        </p>
        <p className="mt-8 max-w-lg text-[13px] leading-[1.82] text-[var(--muted)]">
          Meta Ads y Google Ads optimizados por resultados reales. Cada euro invertido tiene un retorno medible.
        </p>
      </section>

      <section className="reveal bg-[#07070f] px-6 py-28 md:px-[52px]">
        <h2 className="text-center font-[var(--font-syne)] text-[36px] font-extrabold text-white">
          Por encima de la media. Siempre.
        </h2>
        <div className="mt-12">
          <PublicidadComparisonStats />
        </div>
        <p className="mx-auto mt-10 max-w-xl text-center text-[10px] leading-[1.7] text-[var(--muted)]">
          Datos comparativos basados en medias del sector. Resultados variables según campaña y mercado.
        </p>
      </section>

      <section className="reveal bg-[#07070f] px-6 py-24 md:px-[52px]">
        <h2 className="title-display">
          Así se ven nuestros anuncios
          <br />
          <em className="font-[var(--font-instrument)] font-normal italic text-[#F5E614]">en el feed.</em>
        </h2>
        <p className="mt-4 max-w-xl text-[13px] leading-[1.82] text-[var(--muted)]">
          Creatividades que detienen el scroll y generan conversión.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {adExamples.map((item) =>
            item.type === "video" ? (
              <AdExampleCard key={item.src} badge={item.badge}>
                <video autoPlay muted loop playsInline className="h-full w-full object-cover" aria-label={item.alt}>
                  <source src={item.src} type="video/mp4" />
                </video>
              </AdExampleCard>
            ) : (
              <AdExampleCard key={item.src} badge={item.badge}>
                <img src={item.src} alt={item.alt} loading="lazy" className="h-full w-full object-cover" />
              </AdExampleCard>
            ),
          )}
        </div>
      </section>

      <section className="reveal bg-[#05050b] px-6 py-28 md:px-[52px]">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="flex justify-center lg:justify-start">
            <MetaAdsDashboardMockup />
          </div>
          <div>
            <p className="mb-8 text-[15px] leading-[1.75] text-white/90 md:text-base">
              No gestionamos campañas. Gestionamos resultados. Cada euro tiene que tener un retorno medible antes de
              que lo inviertas.
            </p>
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

      <section className="reveal bg-[#07070f] px-6 py-24 md:px-[52px]">
        <div className="grid grid-cols-1 gap-px bg-[var(--border)] md:grid-cols-2">
          {platforms.map((platform) => (
            <article key={platform.num} className="hover-card bg-[#07070f] p-10">
              <span className="font-[var(--font-syne)] text-[clamp(40px,6vw,56px)] font-extrabold leading-none text-[#F5E614]">
                {platform.num}
              </span>
              <h3 className="mt-4 font-[var(--font-syne)] text-2xl font-bold text-white">{platform.title}</h3>
              <p className="mt-4 text-[13px] leading-[1.8] text-[var(--muted)]">{platform.desc}</p>
              <ul className="mt-6 space-y-3">
                {platform.items.map((item) => (
                  <li key={item} className="flex gap-3 text-[13px] leading-[1.65] text-white/85">
                    <span className="shrink-0 text-[#F5E614]">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="reveal bg-[#05050b] px-6 py-24 md:px-[52px]">
        <h2 className="title-display mb-12">Cómo lanzamos una campaña.</h2>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
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
          <LiveCampaignDashboard />
        </div>
      </section>

      <section className="reveal bg-[#05050b] px-6 py-24 text-center md:px-[52px]">
        <h2 className="title-display mx-auto max-w-3xl">¿Listo para que tu publicidad funcione de verdad?</h2>
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
