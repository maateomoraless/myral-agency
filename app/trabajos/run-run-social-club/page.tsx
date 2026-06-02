import Link from "next/link";

export default function RunRunPage() {
  return (
    <>
      <section className="relative min-h-[85vh] overflow-hidden bg-[linear-gradient(135deg,#05050b_0%,#0a0a14_45%,#12121f_100%)]">
        <div className="absolute inset-0 bg-black/35" />
        <div className="section-pad relative z-10 flex min-h-[85vh] flex-col justify-end">
          <div className="mb-8 flex flex-1 items-center justify-center"><span className="font-[var(--font-syne)] text-center text-[clamp(1.8rem,5vw,4rem)] font-extrabold uppercase tracking-[0.22em]">RUN RUN × SANTA MADRE</span></div>
          <span className="mb-4 inline-block border border-[#F5E614]/30 bg-[#F5E614]/10 px-3 py-1 text-[9px] uppercase tracking-[0.18em] text-[#F5E614]">Influencer Marketing · Marca · 2024</span>
          <h1 className="title-display">Run Run Social Club × Santa Madre</h1>
          <p className="mt-4 font-[var(--font-instrument)] text-[clamp(1.25rem,3vw,2rem)] italic text-[#F5E614]">Cuando una comunidad se convierte en canal.</p>
        </div>
      </section>

      <section className="section-pad"><p className="max-w-3xl text-[14px] leading-[1.85] text-[var(--muted)]">Run Run Social Club es una comunidad de runners con identidad de marca muy definida. Santa Madre es una marca de suplementos que quería llegar a ese público de forma auténtica. MYRAL coordinó la colaboración.</p></section>
      <section className="section-pad section-alt"><h2 className="mb-8 font-[var(--font-syne)] text-3xl font-bold">Lo que hicimos</h2><ul className="max-w-3xl space-y-4">{["Concepto creativo de la colaboración","Producción del contenido audiovisual","Estrategia de publicación y timing","Adaptación para Instagram Reels"].map((it)=> <li key={it} className="flex gap-4 border-b border-[var(--border)] pb-4 text-[14px] text-white/80"><span className="text-[#F5E614]">→</span>{it}</li>)}</ul></section>
      <section className="section-pad"><h2 className="mb-6 font-[var(--font-syne)] text-3xl font-bold">El resultado</h2><p className="max-w-3xl text-[14px] leading-[1.85] text-[var(--muted)]">Contenido que no parecía publicidad. Eso es lo más difícil de conseguir y lo que más convierte.</p><Link href="https://www.instagram.com/reel/DOqJdh6jJPJ/" target="_blank" className="mt-8 inline-block text-[11px] uppercase tracking-[0.16em] text-[#F5E614]">Ver el reel →</Link></section>
      <section className="section-pad text-center"><button type="button" data-cal-link="myralagency/diagnostico" data-cal-namespace="diagnostico" data-cal-config='{"layout":"month_view"}' className="bg-[#F5E614] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-black">Reservar llamada gratuita →</button></section>
    </>
  );
}
