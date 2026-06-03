import MagneticLink from "@/components/effects/MagneticLink";
import HeroWordReveal from "@/components/effects/HeroWordReveal";
import WorkCardMedia from "@/components/WorkCardMedia";
import { works } from "@/lib/works";

export default function TrabajosPage() {
  return (
    <section className="section-pad reveal-section">
      <HeroWordReveal text="Nuestro trabajo." as="h1" className="title-display reveal-item" />
      <p className="reveal-item mt-6 max-w-2xl text-[14px] leading-[1.85] text-[var(--muted)]">
        Producción audiovisual, gestión de redes, eventos y branding para marcas y deportistas.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {works.map((work) => (
          <MagneticLink key={work.href} href={work.href} className="group">
            <article className="hover-card border border-[var(--border)] bg-[var(--bg)]">
              <div className="relative aspect-[3/2] overflow-hidden">
                <WorkCardMedia work={work} />
              </div>
              <div className="p-4">
                <span className="mb-2 inline-block bg-[#F5E614]/10 px-2 py-0.5 text-[7px] uppercase tracking-[0.14em] text-[#F5E614]">
                  {work.badge}
                </span>
                <h3 className="font-[var(--font-syne)] text-base font-semibold text-white transition-colors group-hover:text-[#F5E614]">
                  {work.name}
                </h3>
                <p className="mt-1.5 text-xs leading-[1.65] text-[var(--muted)]">{work.desc}</p>
                <p className="mt-3 text-[8px] uppercase tracking-[0.12em] text-[#F5E614]/70">Ver proyecto →</p>
              </div>
            </article>
          </MagneticLink>
        ))}
      </div>
    </section>
  );
}
