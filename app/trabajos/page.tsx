import { Reveal } from "@/components/Reveal";
import { WorksGrid } from "@/components/WorksGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trabajos",
  description:
    "Portfolio MYRAL Agency: producción audiovisual, redes sociales, eventos y branding.",
};

export default function TrabajosPage() {
  return (
    <>
      <section className="section-pad border-b border-border bg-bg2 !pb-16">
        <Reveal>
          <div className="eyebrow mb-3">
            <span>Portfolio</span>
          </div>
        </Reveal>
        <Reveal delay={1}>
          <h1 className="heading-display">Nuestro trabajo.</h1>
          <p className="mt-6 max-w-xl text-[14px] leading-[1.85] text-muted">
            Producción audiovisual, gestión de redes, eventos y branding para
            marcas y deportistas.
          </p>
        </Reveal>
      </section>
      <section className="section-pad border-t border-border">
        <WorksGrid large layout="full" />
      </section>
    </>
  );
}
