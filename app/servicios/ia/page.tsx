import FlowAnimation from "@/components/FlowAnimation";
import IaHeroStats from "@/components/services/IaHeroStats";
import IaProposalDemo from "@/components/services/IaProposalDemo";
import IaWhyStats from "@/components/services/IaWhyStats";

const automations = [
  [
    "01",
    "Captación de leads",
    "Cada lead recibe respuesta personalizada en menos de 2 minutos generada con IA.",
  ],
  [
    "02",
    "Propuestas automáticas",
    "Detectamos el perfil, generamos propuesta a medida y la enviamos en PDF.",
  ],
  [
    "03",
    "Contenido en piloto",
    "La IA genera textos para cada red y se publican solos. Tú solo apruebas.",
  ],
  [
    "04",
    "Reportes mensuales",
    "El día 1 de cada mes cada cliente recibe su informe completo automáticamente.",
  ],
  [
    "05",
    "Webs inteligentes",
    "Formularios que cualifican leads, scoring automático, seguimiento sin esfuerzo.",
  ],
  [
    "06",
    "Reputación 24/7",
    "Alertas ante reseñas negativas con borrador de respuesta automático.",
  ],
] as const;

const businessTypes = [
  "Hostelería y restauración",
  "Eventos y festivales",
  "Marcas y comercio",
  "Deporte y fitness",
  "Servicios profesionales",
  "Cualquier negocio con leads",
] as const;

export default function ServiciosIaPage() {
  return (
    <>
      <section className="no-reveal relative flex min-h-screen flex-col justify-end overflow-hidden bg-[#05050b]">
        <div className="ia-hero-grid pointer-events-none absolute inset-0" aria-hidden />
        <div className="relative z-[1] px-6 pb-20 pt-[120px] md:px-[52px]">
          <p className="mb-6 flex items-center gap-2 text-[9px] uppercase tracking-[0.26em] text-[#F5E614]">
            <span className="badge-pulse-dot h-[7px] w-[7px] shrink-0 rounded-full bg-[#F5E614]" />
            Inteligencia Artificial · Automatización
          </p>
          <h1
            className="font-[var(--font-syne)] font-extrabold leading-[0.88] tracking-[-0.025em] text-white"
            style={{ fontSize: "clamp(52px, 9vw, 110px)" }}
          >
            No solo creamos.
          </h1>
          <p
            className="font-[var(--font-instrument)] italic text-[#F5E614]"
            style={{ fontSize: "clamp(52px, 9vw, 110px)", lineHeight: 0.88 }}
          >
            Lo automatizamos todo.
          </p>
          <p className="mt-8 max-w-xl text-[13px] leading-[1.82] text-[var(--muted)]">
            Somos de las pocas agencias en España que integra IA real en los procesos de sus clientes. No como
            tendencia — como ventaja competitiva que ahorra tiempo y multiplica resultados.
          </p>
          <IaHeroStats />
          <a
            href="#demo"
            className="mt-10 inline-block border border-white/20 px-7 py-3.5 text-[9px] uppercase tracking-[0.16em] text-white/65 transition-colors hover:border-[#F5E614] hover:text-[#F5E614]"
          >
            Ver cómo funciona →
          </a>
        </div>
      </section>

      <section id="demo" className="reveal scroll-mt-24 bg-[#07070f] px-6 py-28 md:px-[52px]">
        <p className="mb-6 flex items-center justify-center gap-2 text-center text-[9px] uppercase tracking-[0.22em] text-[#F5E614]">
          <span className="badge-pulse-dot h-[7px] w-[7px] shrink-0 rounded-full bg-[#F5E614]" />
          Demo en vivo — powered by Claude AI
        </p>
        <h2 className="text-center font-[var(--font-syne)] text-[40px] font-extrabold leading-tight text-white">
          Genera tu propuesta
          <br />
          <em className="font-[var(--font-instrument)] font-normal italic text-[#F5E614]">
            en tiempo real.
          </em>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-[13px] leading-[1.82] text-[var(--muted)]">
          Escribe el nombre y tipo de tu negocio y Claude generará una propuesta personalizada en segundos. Así de
          rápido trabajamos.
        </p>
        <div className="mt-14">
          <IaProposalDemo />
        </div>
      </section>

      <section className="reveal bg-[#05050b] px-6 py-28 md:px-[52px]">
        <div className="mx-auto flex max-w-2xl justify-center">
          <FlowAnimation />
        </div>
        <h2 className="title-display mt-16 text-center">Qué automatizamos.</h2>
        <div className="mt-12 grid grid-cols-1 gap-px bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-3">
          {automations.map(([num, title, desc]) => (
            <article
              key={num}
              className="group relative bg-[#07070f] p-8 transition-colors hover:bg-[#F5E614]/[0.02]"
            >
              <div className="absolute left-0 right-0 top-0 h-0.5 origin-left scale-x-0 bg-[#F5E614] transition-transform duration-500 group-hover:scale-x-100" />
              <div className="mb-4 font-[var(--font-syne)] text-[10px] font-bold text-[#F5E614]/50">
                {num}
              </div>
              <h3 className="font-[var(--font-syne)] text-base font-semibold text-white">{title}</h3>
              <p className="mt-3 text-[12px] leading-[1.72] text-[var(--muted)]">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="reveal bg-[#07070f] px-6 py-24 md:px-[52px]">
        <h2 className="font-[var(--font-syne)] text-[36px] font-extrabold leading-tight text-white">
          Un negocio que no automatiza
          <br />
          <em className="font-[var(--font-instrument)] font-normal italic text-[#F5E614]">
            está compitiendo en desventaja.
          </em>
        </h2>
        <IaWhyStats />
      </section>

      <section className="reveal bg-[#05050b] px-6 py-20 md:px-[52px]">
        <h2 className="title-display mb-12 text-center">¿Para qué tipo de negocio?</h2>
        <div className="grid grid-cols-1 gap-px bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-3">
          {businessTypes.map((type) => (
            <article
              key={type}
              className="hover-card border border-transparent bg-[#05050b] p-8 text-center transition-colors hover:border-[#F5E614]/25"
            >
              <h3 className="font-[var(--font-syne)] text-sm font-semibold text-white">{type}</h3>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-lg text-center text-[13px] text-[var(--muted)]">
          Si tienes clientes, tienes algo que automatizar.
        </p>
      </section>

      <section className="reveal bg-[#07070f] px-6 py-32 text-center md:px-[52px]">
        <h2
          className="font-[var(--font-syne)] font-extrabold leading-tight text-white"
          style={{ fontSize: "clamp(32px, 5vw, 56px)" }}
        >
          ¿Quieres que tu negocio
          <br />
          <em className="font-[var(--font-instrument)] font-normal italic text-[#F5E614]">
            trabaje mientras duermes?
          </em>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-[13px] leading-[1.82] text-[var(--muted)]">
          Reserva una llamada de 20 minutos y te explicamos qué automatizaríamos en tu caso concreto.
        </p>
        <button
          type="button"
          data-cal-link="myralagency/diagnostico"
          data-cal-namespace="diagnostico"
          data-cal-config='{"layout":"month_view"}'
          className="mt-10 bg-[#F5E614] px-12 py-5 text-[11px] font-bold uppercase tracking-[0.18em] text-black transition-opacity hover:opacity-90"
        >
          Reservar llamada gratuita →
        </button>
      </section>
    </>
  );
}
