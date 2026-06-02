import Link from "next/link";

export default function AntonioBarrulPage() {
  return (
    <>
      <section className="relative min-h-[85vh] overflow-hidden">
        <img src="/images/barrul.png" alt="Antonio Barrul" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="section-pad relative z-10 flex min-h-[85vh] flex-col justify-end">
          <span className="mb-4 inline-block border border-[#F5E614]/30 bg-[#F5E614]/10 px-3 py-1 text-[9px] uppercase tracking-[0.18em] text-[#F5E614]">Producción Audiovisual · 2024</span>
          <h1 className="title-display">Antonio Barrul</h1>
          <p className="mt-4 font-[var(--font-instrument)] text-[clamp(1.25rem,3vw,2rem)] italic text-[#F5E614]">El anuncio que lo cambió todo.</p>
        </div>
      </section>

      <section className="section-pad"><p className="max-w-3xl text-[14px] leading-[1.85] text-[var(--muted)]">Antonio Barrul es uno de los boxeadores más seguidos de España, con más de 300.000 seguidores en Instagram. Cuando llegó a MYRAL tenía un hito que anunciar: su primer combate a nivel europeo. Necesitaba algo que estuviera a la altura del momento.</p></section>
      <section className="section-pad section-alt"><h2 className="mb-6 font-[var(--font-syne)] text-3xl font-bold">El reto</h2><p className="max-w-3xl text-[14px] leading-[1.85] text-[var(--muted)]">No era un anuncio cualquiera. Tenía que transmitir la tensión, la preparación y la personalidad de Antonio sin caer en el tópico del vídeo de boxeo al uso. Teníamos que hacer algo cinematográfico.</p></section>
      <section className="section-pad"><h2 className="mb-8 font-[var(--font-syne)] text-3xl font-bold">Lo que hicimos</h2><ul className="max-w-3xl space-y-4">{["Desarrollo del concepto narrativo y guion visual","Dirección y producción completa del vídeo","Grabación en localizaciones reales de León","Edición cinematográfica con color grading premium","Adaptación para Instagram Reels y Stories"].map((it)=> <li key={it} className="flex gap-4 border-b border-[var(--border)] pb-4 text-[14px] text-white/80"><span className="text-[#F5E614]">→</span>{it}</li>)}</ul></section>
      <section className="section-pad section-alt"><h2 className="mb-8 font-[var(--font-syne)] text-3xl font-bold">El resultado</h2><div className="mb-8 grid grid-cols-1 gap-px bg-[var(--border)] sm:grid-cols-3">{[["300K+","impresiones orgánicas"],["Top","publicación del mes"],["Sold out","en primeras horas"]].map(([v,l])=><div key={l} className="bg-[var(--bg)] p-6"><div className="font-[var(--font-syne)] text-4xl font-extrabold text-[#F5E614]">{v}</div><div className="mt-2 text-[9px] uppercase tracking-[0.16em] text-[var(--muted)]">{l}</div></div>)}</div><p className="max-w-3xl text-[14px] leading-[1.85] text-[var(--muted)]">El vídeo se convirtió en la publicación con más alcance orgánico de su historia en Instagram. Sin publicidad pagada.</p><Link href="https://www.instagram.com/reel/DOoi8rWAk_V/" target="_blank" className="mt-8 inline-block text-[11px] uppercase tracking-[0.16em] text-[#F5E614]">Ver el proyecto en Instagram →</Link></section>
      <section className="section-pad text-center"><button type="button" data-cal-link="myralagency/diagnostico" data-cal-namespace="diagnostico" data-cal-config='{"layout":"month_view"}' className="bg-[#F5E614] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-black">Reservar llamada gratuita →</button></section>
    </>
  );
}
