import Link from "next/link";

const includes = [
  "Estrategia de contenido mensual personalizada",
  "Calendario editorial con fechas y formatos",
  "Creación de contenido — foto, vídeo y copy",
  "Publicación y gestión diaria",
  "Análisis de métricas y optimización continua",
  "Atención a comentarios y DMs",
  "Informes mensuales de resultados",
] as const;

const stats = [
  ["+900%", "Crecimiento medio de seguidores"],
  ["85K", "Alcance mensual medio"],
  ["3×", "Más reservas o ventas"],
] as const;

const steps = [
  ["01", "Auditoría inicial", "Analizamos tu situación actual, tu competencia y tu público objetivo."],
  ["02", "Estrategia", "Definimos el tono, los formatos y el plan de contenido mes a mes."],
  ["03", "Producción y publicación", "Creamos y publicamos el contenido en el momento óptimo."],
  ["04", "Análisis y mejora", "Cada mes revisamos los datos y ajustamos la estrategia."],
] as const;

export default function GestionRedesSocialesPage() {
  return (
    <>
      <section className="reveal border-b border-[var(--border)] bg-[var(--bg)] px-6 pb-16 pt-[120px] md:px-[52px]">
        <p className="mb-6 text-[9px] uppercase tracking-[0.26em] text-[#F5E614]">
          Servicios · Gestión de Redes Sociales
        </p>
        <h1
          className="font-[var(--font-syne)] font-extrabold leading-[0.88] tracking-[-0.025em]"
          style={{ fontSize: "clamp(46px, 7vw, 80px)" }}
        >
          Tu marca online,
        </h1>
        <p
          className="font-[var(--font-instrument)] italic text-[#F5E614]"
          style={{ fontSize: "clamp(46px, 7vw, 80px)", lineHeight: 0.88 }}
        >
          every single day.
        </p>
        <p className="mt-8 max-w-lg text-[13px] leading-[1.82] text-[var(--muted)]">
          Nos encargamos de todo. Estrategia, calendario editorial, creación de contenido, publicación y
          análisis de resultados. Tú te centras en tu negocio, nosotros en que crezca.
        </p>
      </section>

      <section className="reveal section-pad section-alt !pt-28 !pb-28">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[300px]">
              <div className="rounded-[2.75rem] border border-white/[0.08] bg-[linear-gradient(165deg,#12121c_0%,#07070f_55%,#05050b_100%)] p-3 shadow-[0_40px_80px_rgba(0,0,0,0.55)]">
                <div className="pointer-events-none absolute left-1/2 top-5 z-20 h-[22px] w-[88px] -translate-x-1/2 rounded-full bg-black/90" />
                <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.15rem] bg-black">
                  <iframe
                    src="https://www.youtube.com/embed/3L0CEuJK_fI?autoplay=1&mute=1&loop=1&playlist=3L0CEuJK_fI&controls=0&showinfo=0&rel=0"
                    className="h-full w-full"
                    style={{ border: "none" }}
                    allow="autoplay"
                    allowFullScreen
                    title="Contenido de redes sociales MYRAL"
                  />
                </div>
              </div>
            </div>
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

      <section className="reveal border-t border-[var(--border)] bg-[var(--bg)] px-6 py-20 md:px-[52px]">
        <h2 className="title-display mb-12">Lo que consiguen nuestros clientes.</h2>
        <div className="mb-12 grid grid-cols-1 gap-px bg-[var(--border)] md:grid-cols-3">
          {stats.map(([value, label]) => (
            <div key={label} className="bg-[var(--bg)] p-8 md:p-10">
              <div className="font-[var(--font-syne)] text-[clamp(52px,8vw,80px)] font-extrabold leading-none text-[#F5E614]">
                {value}
              </div>
              <div className="mt-3 text-[9px] uppercase tracking-[0.16em] text-[#F5E614]/50">{label}</div>
            </div>
          ))}
        </div>

        <Link
          href="/trabajos/vermuteria-cervantes"
          className="group block max-w-2xl border border-[var(--border)] bg-[var(--bg2)] p-8 transition-colors hover:border-[#F5E614]/25"
        >
          <span className="mb-3 inline-block bg-[#F5E614]/10 px-2.5 py-1 text-[8px] uppercase tracking-[0.16em] text-[#F5E614]">
            Caso real
          </span>
          <h3 className="font-[var(--font-syne)] text-xl font-semibold text-white transition-colors group-hover:text-[#F5E614]">
            Vermutería Cervantes
          </h3>
          <p className="mt-3 text-[13px] leading-[1.75] text-[var(--muted)]">
            De 200 a 2.000 seguidores en menos de un año.
          </p>
          <p className="mt-5 text-[9px] uppercase tracking-[0.14em] text-[#F5E614]/70">Ver proyecto →</p>
        </Link>
      </section>

      <section className="reveal border-t border-[var(--border)] bg-[var(--bg2)] px-6 py-20 md:px-[52px]">
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

      <section className="reveal border-t border-[var(--border)] bg-[var(--bg)] px-6 py-20 text-center md:px-[52px]">
        <h2 className="title-display mx-auto max-w-3xl">¿Quieres resultados así para tu negocio?</h2>
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
