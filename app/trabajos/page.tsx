import Link from "next/link";
import HeroWordReveal from "@/components/effects/HeroWordReveal";
import WorkCardMedia from "@/components/WorkCardMedia";
import { featuredWorks, works } from "@/lib/works";

export const metadata = {
  title: "Trabajo — MYRAL Agency",
  description:
    "Producción audiovisual, contenido y redes para marcas, artistas y deportistas: Europa FM, Jakob Schubert, bodegas de Ribera del Duero, Verdiago Vive y más.",
};

export default function TrabajosPage() {
  return (
    <>
      <section className="section-pad reveal-section">
        <p className="reveal-item mb-6 text-[9px] uppercase tracking-[0.26em] text-[#F5E614]">Trabajo seleccionado</p>
        <HeroWordReveal text="Visuals for brands." as="h1" className="title-display reveal-item" />
        <p className="reveal-item mt-6 max-w-xl text-[14px] leading-[1.85] text-[var(--muted)]">
          Deporte, música, vino, turismo y eventos. Una selección de lo que hemos rodado, editado y publicado.
        </p>

        <div className="mt-14 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
          {featuredWorks.map((work) => (
            <Link key={work.href} href={work.href} className="group block">
              <article className="relative aspect-[4/5] overflow-hidden bg-[#0a0a0a]">
                <WorkCardMedia work={work} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[8px] uppercase tracking-[0.2em] text-[#F5E614]">{work.badge}</p>
                  <h2 className="mt-1.5 font-[var(--font-syne)] text-lg font-bold text-white">{work.name}</h2>
                  <p className="mt-1 max-h-0 overflow-hidden text-xs leading-[1.6] text-white/70 transition-all duration-500 group-hover:max-h-24">
                    {work.desc}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-pad section-alt reveal-section">
        <p className="reveal-item mb-6 text-[9px] uppercase tracking-[0.26em] text-[#F5E614]">Archivo</p>
        <h2 className="reveal-item title-display">
          Todo lo que
          <br />
          <em className="font-[var(--font-instrument)] font-normal italic text-[#F5E614]">hemos hecho.</em>
        </h2>
        <ul className="reveal-item mt-14 border-t border-[var(--border)]">
          {works.map((work) => (
            <li key={work.href}>
              <Link
                href={work.href}
                className="group grid grid-cols-[1fr_auto] items-center gap-4 border-b border-[var(--border)] py-5 transition-colors hover:bg-white/[0.02] md:grid-cols-[1.2fr_1fr_0.6fr_auto]"
              >
                <span className="font-[var(--font-syne)] text-[17px] font-semibold text-white transition-colors group-hover:text-[#F5E614] md:text-[20px]">
                  {work.name}
                </span>
                <span className="hidden text-[12px] text-[var(--muted)] md:block">{work.badge}</span>
                <span className="hidden text-[10px] uppercase tracking-[0.18em] text-white/35 md:block">{work.sector}</span>
                <span className="text-[#F5E614]/60 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
