export default function LeyendasPage() {
  return (
    <>
      <section className="relative min-h-[85vh] overflow-hidden bg-[#111]">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-[var(--font-syne)] text-[clamp(4rem,13vw,10rem)] font-extrabold text-white/10">MYRAL.</span>
        </div>
        <div className="absolute inset-0 bg-black/45" />
        <div className="section-pad relative z-10 flex min-h-[85vh] flex-col justify-end">
          <span className="mb-4 inline-block border border-[#F5E614]/30 bg-[#F5E614]/10 px-3 py-1 text-[9px] uppercase tracking-[0.18em] text-[#F5E614]">Gestión Integral de Evento · 2025</span>
          <h1 className="title-display">Leyendas del Vallenato</h1>
          <p className="mt-4 font-[var(--font-instrument)] text-[clamp(1.25rem,3vw,2rem)] italic text-[#F5E614]">2.500 personas. 1.788 kilómetros. Un festival.</p>
        </div>
      </section>

      <section className="section-pad"><p className="max-w-3xl text-[14px] leading-[1.85] text-[var(--muted)]">Festival de música latina en León, España. MYRAL asumió la dirección y gestión integral — desde la estrategia de comunicación y venta de entradas hasta la logística de transporte. Todo coordinado de forma 100% remota desde Innsbruck, Austria, a 1.788 kilómetros.</p></section>
      <section className="section-pad section-alt"><h2 className="mb-6 font-[var(--font-syne)] text-3xl font-bold">El reto</h2><p className="max-w-3xl text-[14px] leading-[1.85] text-[var(--muted)]">Organizar un evento de 2.500 personas mientras el equipo director está en Austria no es un problema de logística. Es un problema de sistemas.</p></section>
      <section className="section-pad"><h2 className="mb-8 font-[var(--font-syne)] text-3xl font-bold">Lo que hicimos</h2><ul className="max-w-3xl space-y-4">{["Estrategia de comunicación y campañas Meta Ads segmentadas por provincia","Sistema de venta con pricing dinámico — General, VIP, Mesa Reservada","Red de 3 nodos de transporte desde Asturias, Castilla y El Bierzo","Validación de acceso con tecnología Fourvenues — menos de 2 segundos por asistente","Monitorización en tiempo real del flujo de asistentes desde Innsbruck","Gestión de RRPP con sistema de comisiones y seguimiento automático"].map((it)=> <li key={it} className="flex gap-4 border-b border-[var(--border)] pb-4 text-[14px] text-white/80"><span className="text-[#F5E614]">→</span>{it}</li>)}</ul></section>
      <section className="section-pad section-alt"><h2 className="mb-8 font-[var(--font-syne)] text-3xl font-bold">El resultado</h2><div className="mb-8 grid grid-cols-1 gap-px bg-[var(--border)] sm:grid-cols-3">{[["2.500 pax","aforo completo"],["25%","tasa de conversión vs 2-3% industria"],["3 nodos","red territorial"]].map(([v,l])=><div key={l} className="bg-[var(--bg)] p-6"><div className="font-[var(--font-syne)] text-4xl font-extrabold text-[#F5E614]">{v}</div><div className="mt-2 text-[9px] uppercase tracking-[0.16em] text-[var(--muted)]">{l}</div></div>)}</div></section>
      <section className="section-pad text-center"><button type="button" data-cal-link="myralagency/diagnostico" data-cal-namespace="diagnostico" data-cal-config='{"layout":"month_view"}' className="bg-[#F5E614] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-black">Reservar llamada gratuita →</button></section>
    </>
  );
}
