import { CalInline } from "@/components/CalInline";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Reserva una llamada de diagnóstico gratuita de 20 minutos con MYRAL Agency.",
};

export default function ContactoPage() {
  return (
    <>
      <section className="section-pad border-b border-border bg-bg2 !pb-12">
        <Reveal>
          <div className="eyebrow mb-3">
            <span>Contacto</span>
          </div>
        </Reveal>
        <Reveal delay={1}>
          <h1 className="heading-display">Hablemos.</h1>
          <p className="mt-6 max-w-lg text-[14px] leading-[1.85] text-muted">
            Reserva una llamada de diagnóstico gratuita de 20 minutos. Sin
            compromiso.
          </p>
        </Reveal>
      </section>

      <section className="section-pad border-t border-border">
        <Reveal>
          <CalInline />
        </Reveal>
        <Reveal delay={2}>
          <div className="mx-auto mt-16 flex max-w-lg flex-col gap-4 border-t border-border pt-12">
            <div className="flex gap-4">
              <span className="w-20 text-[8px] uppercase tracking-[0.18em] text-cream/25">
                Email
              </span>
              <Link
                href="mailto:info@myralagency.com"
                className="text-[12px] text-cream hover:text-yellow"
              >
                info@myralagency.com
              </Link>
            </div>
            <div className="flex gap-4">
              <span className="w-20 text-[8px] uppercase tracking-[0.18em] text-cream/25">
                Teléfono
              </span>
              <Link
                href="tel:+34672126363"
                className="text-[12px] text-cream hover:text-yellow"
              >
                +34 672 12 63 63
              </Link>
            </div>
            <div className="flex gap-4">
              <span className="w-20 text-[8px] uppercase tracking-[0.18em] text-cream/25">
                Instagram
              </span>
              <Link
                href="https://instagram.com/myralagency"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] text-cream hover:text-yellow"
              >
                @myralagency
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
