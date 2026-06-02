export default function IAPage() {
  const cards = [
    ["01", "Captación de leads automática", "Cada lead recibe respuesta personalizada en menos de 2 minutos, generada con IA. Sin que toques nada."],
    ["02", "Propuestas sin trabajo manual", "Detectamos el perfil del cliente, generamos propuesta a medida y la enviamos en PDF automáticamente."],
    ["03", "Contenido en piloto automático", "Sube el material, la IA genera los textos para cada red y se publican solos. Tú solo apruebas."],
    ["04", "Reportes mensuales sin esfuerzo", "El día 1 de cada mes cada cliente recibe su informe completo. Sin intervención humana."],
    ["05", "Webs que trabajan solas", "Formularios inteligentes, scoring de leads, seguimiento automático."],
    ["06", "Reputación bajo control", "Alertas ante reseñas negativas con borrador de respuesta automático."],
  ] as const;

  return (
    <>
      <section className="section-pad reveal">
        <h1 className="title-display">No solo creamos.<br /><em className="font-[var(--font-instrument)] font-normal italic text-[#F5E614]">Lo automatizamos todo.</em></h1>
        <p className="mt-8 max-w-3xl text-[14px] leading-[1.85] text-[var(--muted)]">La mayoría de agencias hacen lo mismo de siempre pero con una IA encima. En MYRAL la IA no es un añadido — es la columna vertebral de cómo trabajamos.</p>
      </section>

      <section className="section-pad section-alt reveal">
        <h2 className="mb-6 font-[var(--font-syne)] text-3xl font-bold">Por qué importa</h2>
        <p className="max-w-3xl text-[14px] leading-[1.85] text-[var(--muted)]">Un negocio que no automatiza en 2025 está compitiendo en desventaja. Cada lead que espera más de 5 minutos tiene un 80% menos de probabilidades de convertir.</p>
      </section>

      <section className="section-pad reveal">
        <div className="grid grid-cols-1 gap-px bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(([n,t,d]) => (
            <article key={n} className="group relative bg-[var(--bg)] p-8 transition-colors hover:bg-[#F5E614]/[0.02]">
              <div className="absolute left-0 right-0 top-0 h-0.5 origin-left scale-x-0 bg-[#F5E614] transition-transform duration-500 group-hover:scale-x-100" />
              <div className="mb-4 font-[var(--font-syne)] text-[10px] font-bold text-[#F5E614]/25">{n}</div>
              <h3 className="mb-3 font-[var(--font-syne)] text-base font-semibold">{t}</h3>
              <p className="text-[11px] leading-[1.72] text-[var(--muted)]">{d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad section-alt reveal">
        <h2 className="mb-8 font-[var(--font-syne)] text-3xl font-bold">Para qué negocios</h2>
        <div className="grid grid-cols-1 gap-px bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-3">
          {["Hostelería","Eventos","Marcas","Deporte","Servicios","Cualquier negocio con leads"].map((s) => (
            <div key={s} className="bg-[var(--bg2)] p-6 text-[13px] text-white/80">{s}</div>
          ))}
        </div>
        <button type="button" data-cal-link="myralagency/diagnostico" data-cal-namespace="diagnostico" data-cal-config='{"layout":"month_view"}' className="mt-10 bg-[#F5E614] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-black">Reservar llamada gratuita →</button>
      </section>
    </>
  );
}
