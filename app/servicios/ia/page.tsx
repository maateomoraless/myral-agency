import FlowAnimation from "@/components/FlowAnimation";
import FinalCta from "@/components/FinalCta";
import IaDiagnosticoQuiz from "@/components/services/IaDiagnosticoQuiz";
import IaHeroStats from "@/components/services/IaHeroStats";
import IaWhyStats from "@/components/services/IaWhyStats";

export const metadata = {
  title: "Automatización con IA — MYRAL Agency",
  description:
    "Tu negocio trabajando 24/7 sin intervención manual. Captación de leads, propuestas y reportes automatizados con IA.",
};

const automations = [
  ["01", "Captación de leads", "Respuesta personalizada en menos de 2 minutos."],
  ["02", "Propuestas automáticas", "PDF personalizado sin trabajo manual."],
  ["03", "Contenido en piloto", "La IA genera, tú apruebas."],
  ["04", "Reportes mensuales", "Día 1 de cada mes, automático."],
  ["05", "Webs inteligentes", "Formularios que cualifican leads solos."],
  ["06", "Reputación 24/7", "Alertas y respuestas automáticas."],
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
            className="hero-title-110 font-[var(--font-syne)] font-extrabold tracking-[-0.025em] text-white"
          >
            No solo creamos.
          </h1>
          <p
            className="hero-subtitle-110 font-[var(--font-instrument)] italic text-[#F5E614]"
          >
            Lo automatizamos todo.
          </p>
          <p className="mt-8 max-w-xl text-[13px] leading-[1.82] text-[var(--muted)]">
            Somos de las pocas agencias en España que integra IA real en los procesos de sus clientes. No como
            tendencia — como ventaja competitiva.
          </p>
          <IaHeroStats />
          <a
            href="#diagnostico"
            className="mt-10 inline-block border border-white/20 px-7 py-3.5 text-[9px] uppercase tracking-[0.16em] text-white/65 transition-colors hover:border-[#F5E614] hover:text-[#F5E614]"
          >
            Prueba el diagnóstico IA →
          </a>
        </div>
      </section>

      <section className="reveal bg-[#07070f] px-6 py-20 md:px-[52px]">
        <h2 className="text-center font-[var(--font-syne)] text-[36px] font-extrabold text-white">
          Así funciona la automatización.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-center text-[13px] leading-[1.82] text-[var(--muted)]">
          Cada lead que llega activa el flujo automáticamente. Sin intervención humana.
        </p>
        <div className="mx-auto mt-12 flex max-w-2xl justify-center">
          <FlowAnimation />
        </div>
      </section>

      <section id="diagnostico" className="reveal scroll-mt-24 bg-[#05050b] px-6 py-28 md:px-[52px]">
        <p className="mb-6 flex items-center justify-center gap-2 text-center text-[9px] uppercase tracking-[0.22em] text-[#F5E614]">
          <span className="badge-pulse-dot h-[7px] w-[7px] shrink-0 rounded-full bg-[#F5E614]" />
          Diagnóstico en vivo — powered by MYRAL AI
        </p>
        <h2 className="text-center font-[var(--font-syne)] text-[40px] font-extrabold leading-tight text-white">
          Descubre qué automatizaríamos
          <br />
          <em className="font-[var(--font-instrument)] font-normal italic text-[#F5E614]">
            en tu negocio.
          </em>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-[13px] leading-[1.82] text-[var(--muted)]">
          Responde 3 preguntas y nuestra IA generará un diagnóstico personalizado para tu caso concreto.
        </p>
        <div className="mt-14">
          <IaDiagnosticoQuiz />
        </div>
      </section>

      <section className="reveal bg-[#07070f] px-6 py-28 md:px-[52px]">
        <h2 className="title-display text-center">Qué automatizamos.</h2>
        <div className="mt-12 grid grid-cols-1 gap-px bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-3">
          {automations.map(([num, title, desc]) => (
            <article
              key={num}
              className="group relative bg-[#05050b] p-8 transition-colors hover:bg-[#F5E614]/[0.02]"
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

      <section className="reveal bg-[#05050b] px-6 py-24 md:px-[52px]">
        <h2 className="font-[var(--font-syne)] text-[36px] font-extrabold leading-tight text-white">
          Un negocio que no automatiza
          <br />
          <em className="font-[var(--font-instrument)] font-normal italic text-[#F5E614]">
            está compitiendo en desventaja.
          </em>
        </h2>
        <IaWhyStats />
      </section>

      <FinalCta title="¿Quieres que tu negocio trabaje mientras duermes?" />
    </>
  );
}
