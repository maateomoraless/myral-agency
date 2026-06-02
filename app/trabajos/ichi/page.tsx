import Link from "next/link";

export default function IchiPage() {
  return (
    <>
      <section className="relative min-h-[85vh] overflow-hidden">
        <img src="/images/ichi.png" alt="Itziar Martínez" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="section-pad relative z-10 flex min-h-[85vh] flex-col justify-end">
          <span className="mb-4 inline-block border border-[#F5E614]/30 bg-[#F5E614]/10 px-3 py-1 text-[9px] uppercase tracking-[0.18em] text-[#F5E614]">Contenido Deportivo · 2024-2025</span>
          <h1 className="title-display">Itziar Martínez</h1>
          <p className="mt-4 font-[var(--font-instrument)] text-[clamp(1.25rem,3vw,2rem)] italic text-[#F5E614]">Top 20 del mundo. Contada como merece.</p>
        </div>
      </section>

      <section className="section-pad"><p className="max-w-3xl text-[14px] leading-[1.85] text-[var(--muted)]">Itziar Martínez, conocida como Ichi, es una de las mejores escaladoras españolas de la historia. Con presencia en Copas del Mundo y clasificaciones entre las 20 mejores del mundo, necesitaba un contenido visual que transmitiera tanto su nivel técnico como su personalidad fuera de la pared.</p></section>
      <section className="section-pad section-alt"><h2 className="mb-6 font-[var(--font-syne)] text-3xl font-bold">El reto</h2><p className="max-w-3xl text-[14px] leading-[1.85] text-[var(--muted)]">La escalada de competición es visualmente espectacular pero difícil de capturar bien. Trabajamos con Ichi en competiciones internacionales en Innsbruck y otros escenarios europeos.</p></section>
      <section className="section-pad"><h2 className="mb-8 font-[var(--font-syne)] text-3xl font-bold">Lo que hicimos</h2><ul className="max-w-3xl space-y-4">{["Cobertura fotográfica y audiovisual en competiciones internacionales","Contenido para redes sociales adaptado al formato de cada plataforma","Fotografía de acción en exterior en roca natural","Edición y postproducción de todos los assets"].map((it)=> <li key={it} className="flex gap-4 border-b border-[var(--border)] pb-4 text-[14px] text-white/80"><span className="text-[#F5E614]">→</span>{it}</li>)}</ul></section>
      <section className="section-pad section-alt"><h2 className="mb-6 font-[var(--font-syne)] text-3xl font-bold">El resultado</h2><p className="max-w-3xl text-[14px] leading-[1.85] text-[var(--muted)]">Una biblioteca de contenido que Ichi usa para su presencia online, con imágenes que han circulado en medios especializados de escalada internacionales.</p><Link href="https://www.instagram.com/ichiclimb/" target="_blank" className="mt-8 inline-block text-[11px] uppercase tracking-[0.16em] text-[#F5E614]">Ver perfil de Instagram →</Link></section>
      <section className="section-pad text-center"><button type="button" data-cal-link="myralagency/diagnostico" data-cal-namespace="diagnostico" data-cal-config='{"layout":"month_view"}' className="bg-[#F5E614] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-black">Reservar llamada gratuita →</button></section>
    </>
  );
}
