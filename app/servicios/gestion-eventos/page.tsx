import Link from "next/link";
import FinalCta from "@/components/FinalCta";
import GestionEventosStats from "@/components/services/GestionEventosStats";
import LeyendasCaseStats from "@/components/services/LeyendasCaseStats";

export const metadata = {
  title: "Gestión y Producción de Eventos — MYRAL Agency",
  description:
    "Gestión integral de eventos de cualquier escala. 16.000 asistentes en el mayor evento gestionado por MYRAL.",
};

const includes = [
  "Conceptualización y planificación estratégica",
  "Gestión de artistas y proveedores",
  "Venta de entradas con pricing dinámico",
  "Campañas de comunicación y Meta Ads",
  "Logística de transporte y acceso",
  "Cobertura audiovisual en directo",
  "Gestión de RRPP y red de embajadores",
  "Monitorización en tiempo real",
] as const;

const monoLocoPhotos = [
  "/images/monoloco-1.png",
  "/images/monoloco-2.png",
  "/images/monoloco-3.png",
  "/images/monoloco-4.png",
] as const;

const steps = [
  [
    "01",
    "Briefing y viabilidad",
    "Analizamos tu proyecto, el aforo, la localización y el presupuesto. Si no es viable te lo decimos antes de empezar.",
  ],
  [
    "02",
    "Planificación",
    "Calendario de producción, contratos con artistas y proveedores, sistema de venta de entradas.",
  ],
  [
    "03",
    "Comunicación",
    "Estrategia de redes sociales, campañas Meta Ads, red de RRPP y embajadores.",
  ],
  [
    "04",
    "Día del evento",
    "Coordinación en tiempo real, validación de acceso, cobertura audiovisual en directo.",
  ],
  [
    "05",
    "Post-evento",
    "Informe de resultados, contenido post-evento y análisis para futuras ediciones.",
  ],
] as const;

const eventTypes = [
  "Festivales de música",
  "Eventos gastronómicos",
  "Tardeos y noches de club",
  "Eventos corporativos",
  "Lanzamientos de producto",
  "Eventos deportivos",
] as const;

export default function GestionEventosPage() {
  return (
    <>
      <section className="no-reveal relative flex min-h-screen flex-col justify-end overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          aria-label="Eventos MYRAL"
        >
          <source
            src="https://pub-b4af313647b6409d962b89eaf287e84c.r2.dev/evento-fondo.mp4"
            type="video/mp4"
          />
        </video>
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{ background: "rgba(5,5,11,0.55)" }}
          aria-hidden
        />
        <div className="relative z-[2] px-6 pb-20 pt-[120px] md:px-[52px]">
          <p className="mb-6 text-[9px] uppercase tracking-[0.26em] text-[#F5E614]">
            Servicios · Gestión y Producción de Eventos
          </p>
          <h1
            className="hero-title-96 font-[var(--font-syne)] font-extrabold tracking-[-0.025em] text-white"
          >
            Eventos que
          </h1>
          <p
            className="hero-subtitle-96 font-[var(--font-instrument)] italic text-[#F5E614]"
          >
            dejan huella.
          </p>
          <p className="mt-8 max-w-lg text-[13px] leading-[1.82] text-[var(--muted)]">
            Desde la conceptualización hasta la cobertura audiovisual en directo. Gestionamos eventos de cualquier
            escala con sistemas profesionales y tecnología de alto nivel.
          </p>
        </div>
      </section>

      <section className="reveal bg-[#05050b] px-6 py-20 md:px-[52px]">
        <GestionEventosStats />
      </section>

      <section className="reveal bg-[#07070f] px-6 py-28 md:px-[52px]">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="font-[var(--font-syne)] text-[36px] font-extrabold leading-tight text-white">
              Todo bajo control.
              <br />
              <em className="font-[var(--font-instrument)] font-normal italic text-[#F5E614]">
                Desde el primer día.
              </em>
            </h2>
            <p className="mt-6 text-[13px] leading-[1.82] text-[var(--muted)]">
              Gestionar un evento no es organizar una fiesta. Es coordinar equipos, presupuestos, logística,
              comunicación y tecnología al mismo tiempo. Nosotros lo hacemos por ti.
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
          <div className="grid grid-cols-2 gap-3">
            {monoLocoPhotos.map((src) => (
              <div key={src} className="aspect-[4/3] overflow-hidden rounded">
                <img
                  src={src}
                  alt="Mono Loco Festival"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 ease-out hover:scale-[1.03]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="reveal bg-[#05050b] px-6 py-28 md:px-[52px]">
        <p className="mb-4 text-[9px] uppercase tracking-[0.26em] text-[#F5E614]">
          Caso real · Leyendas del Vallenato
        </p>
        <h2
          className="font-[var(--font-syne)] font-extrabold leading-tight text-white"
          style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
        >
          2.500 personas. Un festival en León.
        </h2>
        <div className="mt-12 grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-[14px] leading-[1.8] text-[var(--muted)]">
              Festival de música latina en León. Estrategia de comunicación completa, venta de entradas con pricing
              dinámico, red de transporte territorial con 3 nodos y validación de acceso con tecnología Fourvenues. Una
              producción integral de principio a fin.
            </p>
            <p className="mt-6 text-[14px] leading-[1.8] text-[var(--muted)]">
              Tasa de conversión del 25% en landing page frente al 2-3% de media de la industria. Un modelo de gestión
              profesional que demostró que los festivales pueden gestionarse con sistemas y datos, no con improvisación.
            </p>
            <Link
              href="/trabajos/leyendas-del-vallenato"
              className="mt-8 inline-block border border-white/20 px-7 py-3.5 text-[9px] uppercase tracking-[0.16em] text-white/65 transition-colors hover:border-[#F5E614] hover:text-[#F5E614]"
            >
              Ver el case study completo →
            </Link>
          </div>
          <LeyendasCaseStats />
        </div>
      </section>

      <section className="reveal bg-[#07070f] px-6 py-24 md:px-[52px]">
        <h2 className="title-display mb-12">Cómo gestionamos tu evento.</h2>
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
        <h2 className="title-display mb-12">¿Qué tipo de evento gestionamos?</h2>
        <div className="grid grid-cols-1 gap-px bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-3">
          {eventTypes.map((type) => (
            <article
              key={type}
              className="hover-card border border-transparent bg-[#05050b] p-8 transition-colors hover:border-[#F5E614]/25"
            >
              <h3 className="font-[var(--font-syne)] text-base font-semibold text-white transition-colors hover:text-[#F5E614]">
                {type}
              </h3>
            </article>
          ))}
        </div>
      </section>

      <FinalCta title="¿Tienes un evento en mente?" />
    </>
  );
}
