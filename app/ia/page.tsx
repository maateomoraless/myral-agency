import { CalButton } from "@/components/CalButton";
import { Reveal } from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IA y Automatización",
  description:
    "Automatización con IA real para leads, propuestas, contenido, reportes y más.",
};

const automations = [
  {
    n: "01",
    title: "Captación de leads automática",
    desc: "Cada lead que llega a tu web recibe una respuesta personalizada en menos de 2 minutos, generada con IA y adaptada a su sector y necesidades. Sin que toques nada.",
    tag: "Lead automation",
  },
  {
    n: "02",
    title: "Propuestas sin trabajo manual",
    desc: "Detectamos el perfil del cliente, generamos una propuesta a medida con IA y la enviamos en PDF automáticamente. El cliente recibe algo que parece escrito a mano — porque el contenido es real, solo el proceso es automático.",
    tag: "Proposal automation",
  },
  {
    n: "03",
    title: "Contenido en piloto automático",
    desc: "Sube el material bruto, la IA genera los textos para cada red social adaptados al tono de tu marca, y se publican solos en el horario óptimo. Tú solo apruebas.",
    tag: "Content automation",
  },
  {
    n: "04",
    title: "Reportes mensuales sin esfuerzo",
    desc: "El día 1 de cada mes, cada cliente recibe su informe completo con métricas, análisis de rendimiento y recomendaciones para el mes siguiente. Sin intervención humana.",
    tag: "Reporting automation",
  },
  {
    n: "05",
    title: "Webs que trabajan solas",
    desc: "Formularios que cualifican leads automáticamente, seguimiento sin esfuerzo, scoring de clientes potenciales. Tu web no es un folleto — es tu comercial que nunca duerme.",
    tag: "Web intelligence",
  },
  {
    n: "06",
    title: "Reputación bajo control",
    desc: "Alertas inmediatas cuando alguien deja una reseña negativa, con un borrador de respuesta generado automáticamente y listo para revisar. Tu reputación, protegida 24/7.",
    tag: "Reputation automation",
  },
];

const sectors = [
  "Hostelería y restauración",
  "Eventos y festivales",
  "Marcas y comercio",
  "Deporte y fitness",
  "Servicios profesionales",
  "Cualquier negocio con leads",
];

export default function IAPage() {
  return (
    <>
      <section className="section-pad border-b border-border">
        <Reveal>
          <div className="eyebrow mb-3">
            <span>Inteligencia Artificial</span>
          </div>
        </Reveal>
        <Reveal delay={1}>
          <h1 className="heading-display">No solo creamos.</h1>
          <p className="heading-display font-instrument italic text-yellow">
            Lo automatizamos todo.
          </p>
          <p className="mt-8 max-w-2xl text-[14px] leading-[1.85] text-muted">
            La mayoría de agencias hacen lo mismo de siempre pero con una IA
            encima. En MYRAL la IA no es un añadido — es la columna vertebral de
            cómo trabajamos. Menos tiempo en tareas repetitivas. Más tiempo en lo
            que importa.
          </p>
        </Reveal>
      </section>

      <section className="section-pad border-t border-border bg-bg2">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="mb-6 font-syne text-2xl font-bold md:text-3xl">
              Por qué la IA cambia todo
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="text-[14px] leading-[1.85] text-muted">
              Un negocio que no automatiza en 2025 está compitiendo en
              desventaja. Cada lead que espera más de 5 minutos tiene un 80% menos
              de probabilidades de convertir. Cada reporte que se hace a mano es
              una hora que podría estar generando resultados. Nosotros lo
              automatizamos todo.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad border-t border-border">
        <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {automations.map((a, i) => (
            <Reveal
              key={a.n}
              delay={((i % 3) + 1) as 1 | 2 | 3}
              className="group relative overflow-hidden bg-bg p-8 transition-colors hover:bg-yellow/[0.02]"
            >
              <div className="absolute left-0 right-0 top-0 h-0.5 origin-left scale-x-0 bg-yellow transition-transform duration-500 group-hover:scale-x-100" />
              <div className="mb-4 font-syne text-[10px] font-bold text-yellow/25">
                {a.n}
              </div>
              <h3 className="mb-3 font-syne text-base font-semibold">{a.title}</h3>
              <p className="mb-4 text-[11px] leading-[1.72] text-muted">
                {a.desc}
              </p>
              <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.13em] text-yellow/45">
                <span className="h-px w-3.5 bg-yellow" />
                {a.tag}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad border-t border-border bg-bg2">
        <Reveal>
          <h2 className="heading-section mb-10">
            ¿Para qué tipo de negocio?
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s, i) => (
            <Reveal
              key={s}
              delay={((i % 3) + 1) as 1 | 2 | 3}
              className="bg-bg2 p-6 text-[13px] text-cream/80"
            >
              {s}
            </Reveal>
          ))}
        </div>
        <Reveal delay={2}>
          <p className="mt-10 text-center text-[14px] text-muted">
            Si tienes clientes, tienes algo que automatizar.
          </p>
        </Reveal>
      </section>

      <section className="section-pad border-t border-border text-center">
        <Reveal>
          <CalButton className="cursor-pointer bg-yellow px-8 py-4 font-syne text-[10px] font-bold uppercase tracking-[0.18em] text-bg transition-opacity hover:opacity-85">
            Reservar llamada gratuita →
          </CalButton>
        </Reveal>
      </section>
    </>
  );
}
