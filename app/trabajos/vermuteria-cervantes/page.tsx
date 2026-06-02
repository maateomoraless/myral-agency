import Link from "next/link";

export default function CervantesPage() {
  return (
    <>
      <section className="relative min-h-[85vh] overflow-hidden">
        <img src="/images/cervantes-despues.png" alt="Vermutería Cervantes" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="section-pad relative z-10 flex min-h-[85vh] flex-col justify-end">
          <span className="mb-4 inline-block border border-[#F5E614]/30 bg-[#F5E614]/10 px-3 py-1 text-[9px] uppercase tracking-[0.18em] text-[#F5E614]">Social Media · León · 2023-2024</span>
          <h1 className="title-display">Vermutería Cervantes</h1>
          <p className="mt-4 font-[var(--font-instrument)] text-[clamp(1.25rem,3vw,2rem)] italic text-[#F5E614]">De 200 a 2.000. En menos de un año.</p>
        </div>
      </section>

      <section className="section-pad"><p className="max-w-3xl text-[14px] leading-[1.85] text-[var(--muted)]">Vermutería Cervantes es uno de los locales más emblemáticos de León. Cuando llegaron a MYRAL, su presencia en redes no reflejaba la calidad de lo que ofrecían. 200 seguidores, sin estrategia, sin contenido propio.</p></section>
      <section className="section-pad section-alt"><h2 className="mb-6 font-[var(--font-syne)] text-3xl font-bold">El reto</h2><p className="max-w-3xl text-[14px] leading-[1.85] text-[var(--muted)]">El sector de la hostelería en León es competitivo. La diferencia entre un local lleno y otro que no, muchas veces la marcan las redes sociales.</p></section>
      <section className="section-pad"><h2 className="mb-8 font-[var(--font-syne)] text-3xl font-bold">Lo que hicimos</h2><ul className="max-w-3xl space-y-4">{["Estrategia de contenido mensual","Fotografía gastronómica profesional","Producción de vídeo y reels para Instagram","Diseño de campañas especiales: Día del Padre, catas de vermut, menús de grupo","Gestión diaria de la cuenta"].map((it)=> <li key={it} className="flex gap-4 border-b border-[var(--border)] pb-4 text-[14px] text-white/80"><span className="text-[#F5E614]">→</span>{it}</li>)}</ul></section>
      <section className="section-pad section-alt"><h2 className="mb-8 font-[var(--font-syne)] text-3xl font-bold">Antes y después</h2><div className="grid grid-cols-1 gap-px bg-[var(--border)] sm:grid-cols-2"><div className="relative aspect-[3/4] overflow-hidden bg-[var(--bg)]"><img src="/images/cervantes-antes.png" alt="Antes" loading="lazy" className="h-full w-full object-cover object-top" /><span className="absolute left-4 top-4 bg-black/85 px-2.5 py-1 text-[8px] uppercase tracking-[0.18em] text-white/50">Antes</span></div><div className="relative aspect-[3/4] overflow-hidden bg-[var(--bg)]"><img src="/images/cervantes-despues.png" alt="Después" loading="lazy" className="h-full w-full object-cover object-top" /><span className="absolute left-4 top-4 border border-[#F5E614]/30 bg-[#F5E614]/15 px-2.5 py-1 text-[8px] uppercase tracking-[0.18em] text-[#F5E614]">Después</span></div></div></section>
      <section className="section-pad"><h2 className="mb-8 font-[var(--font-syne)] text-3xl font-bold">El resultado</h2><div className="mb-8 grid grid-cols-1 gap-px bg-[var(--border)] sm:grid-cols-3">{[["200 → 2.000","seguidores en 12 meses"],["+900%","crecimiento"],["85K","alcance mensual"]].map(([v,l])=><div key={l} className="bg-[var(--bg)] p-6"><div className="font-[var(--font-syne)] text-4xl font-extrabold text-[#F5E614]">{v}</div><div className="mt-2 text-[9px] uppercase tracking-[0.16em] text-[var(--muted)]">{l}</div></div>)}</div><p className="max-w-3xl text-[14px] leading-[1.85] text-[var(--muted)]">Las redes pasaron de ser una cuenta olvidada a ser el principal canal de captación de clientes nuevos.</p><Link href="https://www.instagram.com/cervantes10vermuteria/" target="_blank" className="mt-8 inline-block text-[11px] uppercase tracking-[0.16em] text-[#F5E614]">Ver Instagram →</Link></section>
      <section className="section-pad text-center"><button type="button" data-cal-link="myralagency/diagnostico" data-cal-namespace="diagnostico" data-cal-config='{"layout":"month_view"}' className="bg-[#F5E614] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-black">Reservar llamada gratuita →</button></section>
    </>
  );
}
