import Link from "next/link";
import FinalCta from "@/components/FinalCta";
import InfluencerMarketingStats from "@/components/services/InfluencerMarketingStats";
import InfluencerMetricsDashboard from "@/components/services/InfluencerMetricsDashboard";

export const metadata = {
  title: "Influencer Marketing — MYRAL Agency",
  description:
    "Identificamos, negociamos y gestionamos colaboraciones con influencers que convierten de verdad. Sin vanity metrics.",
};

const cases = [
  {
    href: "/trabajos/antonio-barrul",
    image: "/images/barrul-campeon.png",
    badge: "Boxeo · 300K seguidores",
    title: "Antonio Barrul",
    desc: "Anuncio cinematográfico de su primer combate europeo. 300K+ impresiones orgánicas sin publicidad pagada.",
  },
  {
    href: "/trabajos/ichi",
    image: "/images/ichi-roca.png",
    badge: "Escalada · Top 20 Mundial",
    title: "Itziar Martínez",
    desc: "Cobertura audiovisual de competiciones internacionales. Contenido que circula en medios especializados de todo el mundo.",
  },
  {
    href: "/trabajos/run-run-social-club",
    image: null,
    badge: "Running · Marca de suplementos",
    title: "Run Run x Santa Madre",
    desc: "Colaboración entre comunidad de runners y marca de suplementos. Contenido que no parecía publicidad.",
    placeholder: "RUN RUN × SANTA MADRE",
  },
] as const;

const includes = [
  "Análisis de audiencia y engagement real",
  "Negociación de condiciones y contratos",
  "Briefing creativo y supervisión del contenido",
  "Gestión de la relación con el influencer",
  "Seguimiento de métricas y resultados",
  "Informe final de campaña",
] as const;

const creatorTypes = [
  "Deportistas y atletas",
  "Creadores de lifestyle",
  "Influencers gastronómicos",
  "Artistas y músicos",
  "Micro-influencers locales",
  "Embajadores de marca",
] as const;

const othersDo = [
  "Buscar por número de seguidores",
  "Sin análisis de audiencia",
  "Sin seguimiento de resultados",
  "Vanity metrics como KPI",
] as const;

const myralDoes = [
  "Análisis de engagement real",
  "Audiencia segmentada y verificada",
  "Resultados medibles en ventas",
  "ROI como único KPI",
] as const;

export default function InfluencerMarketingPage() {
  return (
    <>
      <section className="no-reveal relative flex min-h-screen flex-col justify-end overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          aria-label="Antonio Barrul — contenido deportivo"
        >
          <source
            src="https://pub-b4af313647b6409d962b89eaf287e84c.r2.dev/barrul-video.mp4"
            type="video/mp4"
          />
        </video>
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{ background: "rgba(5,5,11,0.65)" }}
          aria-hidden
        />
        <div className="relative z-[2] px-6 pb-16 pt-[120px] md:px-[52px]">
          <p className="mb-6 text-[9px] uppercase tracking-[0.26em] text-[#F5E614]">
            Servicios · Influencer Marketing
          </p>
          <h1
            className="font-[var(--font-syne)] font-extrabold leading-[0.88] tracking-[-0.025em] text-white"
            style={{ fontSize: "clamp(52px, 8vw, 96px)" }}
          >
            Alcance real,
          </h1>
          <p
            className="font-[var(--font-instrument)] italic text-[#F5E614]"
            style={{ fontSize: "clamp(52px, 8vw, 96px)", lineHeight: 0.88 }}
          >
            no vanity metrics.
          </p>
          <p className="mt-8 max-w-lg text-[13px] leading-[1.82] text-[var(--muted)]">
            Identificamos, negociamos y gestionamos colaboraciones con creadores e influencers que convierten de
            verdad. Sin seguidores falsos, sin métricas vacías.
          </p>
        </div>
      </section>

      <section className="reveal bg-[#07070f] px-6 py-20 md:px-[52px]">
        <InfluencerMarketingStats />
      </section>

      <section className="reveal bg-[#05050b] px-6 py-28 md:px-[52px]">
        <h2 className="font-[var(--font-syne)] text-[36px] font-extrabold leading-tight text-white">
          Colaboraciones
          <br />
          <em className="font-[var(--font-instrument)] font-normal italic text-[#F5E614]">que funcionan.</em>
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cases.map((item) => (
            <Link key={item.href} href={item.href} className="group">
              <article className="hover-card border border-[var(--border)] bg-[#05050b] transition-colors hover:border-[#F5E614]/25">
                <div className="media-hover-wrap relative aspect-[3/2] overflow-hidden">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-[#111] px-4">
                      <span className="text-center font-[var(--font-syne)] text-[clamp(1rem,2.5vw,1.25rem)] font-extrabold uppercase tracking-[0.12em] text-white/15">
                        {item.placeholder}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <span className="mb-3 inline-block border border-[#F5E614]/30 bg-[#F5E614]/15 px-2.5 py-1 text-[8px] uppercase tracking-[0.16em] text-[#F5E614]">
                    {item.badge}
                  </span>
                  <h3 className="font-[var(--font-syne)] text-lg font-semibold text-white transition-colors group-hover:text-[#F5E614]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[12px] leading-[1.7] text-[var(--muted)]">{item.desc}</p>
                  <p className="mt-4 text-[9px] uppercase tracking-[0.14em] text-[#F5E614]/80">
                    Ver proyecto →
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section className="reveal bg-[#07070f] px-6 py-28 md:px-[52px]">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="font-[var(--font-syne)] text-[32px] font-extrabold leading-tight text-white">
              No buscamos influencers.
              <br />
              <em className="font-[var(--font-instrument)] font-normal italic text-[#F5E614]">
                Buscamos los correctos.
              </em>
            </h2>
            <p className="mt-6 text-[13px] leading-[1.82] text-[var(--muted)]">
              Cualquiera puede mandarte una lista de influencers con muchos seguidores. Nosotros encontramos los que
              tienen la audiencia exacta que necesita tu marca y que van a generar resultados reales.
            </p>
            <ul className="mt-8 space-y-4">
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
          <InfluencerMetricsDashboard />
        </div>
      </section>

      <section className="reveal bg-[#05050b] px-6 py-20 md:px-[52px]">
        <h2 className="title-display mb-12">¿Con qué tipo de creadores trabajamos?</h2>
        <div className="grid grid-cols-1 gap-px bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-3">
          {creatorTypes.map((type) => (
            <article
              key={type}
              className="hover-card border border-[var(--border)] bg-[#05050b] p-8 transition-colors hover:border-[#F5E614]/25"
            >
              <h3 className="font-[var(--font-syne)] text-base font-semibold text-white">{type}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="reveal bg-[#07070f] px-6 py-24 md:px-[52px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-[var(--font-syne)] text-[32px] font-extrabold leading-tight text-white">
              La diferencia entre seguidores
              <br />
              <em className="font-[var(--font-instrument)] font-normal italic text-[#F5E614]">y clientes.</em>
            </h2>
            <p className="mt-6 text-[13px] leading-[1.82] text-[var(--muted)]">
              Un influencer con 100K seguidores puede generar cero ventas. Un micro-influencer con 5K seguidores muy
              segmentados puede agotar tu stock. Nosotros sabemos la diferencia y trabajamos con los que convierten.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-px bg-[var(--border)] sm:grid-cols-2">
            <div className="bg-[#07070f] p-6 md:p-8">
              <p className="mb-6 text-[9px] uppercase tracking-[0.16em] text-[var(--muted)]">
                Lo que hacen todos
              </p>
              <ul className="space-y-4">
                {othersDo.map((item) => (
                  <li key={item} className="flex gap-3 text-[13px] leading-[1.6] text-white/70">
                    <span className="shrink-0 text-red-400/90">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#07070f] p-6 md:p-8">
              <p className="mb-6 text-[9px] uppercase tracking-[0.16em] text-[#F5E614]">Lo que hace MYRAL</p>
              <ul className="space-y-4">
                {myralDoes.map((item) => (
                  <li key={item} className="flex gap-3 text-[13px] leading-[1.6] text-white/85">
                    <span className="shrink-0 text-[#F5E614]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FinalCta title="¿Quieres colaboraciones que conviertan?" />
    </>
  );
}
