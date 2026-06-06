import BrandingApplications from "@/components/services/BrandingApplications";
import FinalCta from "@/components/FinalCta";
import BrandingColorCircles from "@/components/services/BrandingColorCircles";
import BrandingLogoVariants from "@/components/services/BrandingLogoVariants";
import BrandingNamingReveal from "@/components/services/BrandingNamingReveal";
import BrandingTimeline from "@/components/services/BrandingTimeline";
import BrandingTypographyPanel from "@/components/services/BrandingTypographyPanel";

export const metadata = {
  title: "Branding e Identidad Visual — MYRAL Agency",
  description:
    "Naming, logo, colores y tono. Una identidad visual que diferencia tu marca y que la gente recuerda.",
};

const includesLeft = [
  "Naming y propuesta de nombre",
  "Logotipo en todos los formatos (SVG, PNG, PDF)",
  "Paleta de colores con códigos HEX, RGB y CMYK",
  "Tipografías seleccionadas con licencia",
  "Manual de marca completo",
] as const;

const includesRight = [
  "Versiones del logo (positivo, negativo, monocromo)",
  "Aplicaciones: tarjeta de visita, firma email, perfil redes",
  "Guía de uso y ejemplos de aplicación incorrecta",
  "Archivos editables en formato AI o Figma",
  "Revisiones incluidas hasta aprobación final",
] as const;

export default function BrandingPage() {
  return (
    <>
      <section className="reveal flex min-h-screen flex-col justify-end bg-[#05050b] px-6 pb-16 pt-[120px] md:px-[52px]">
        <p className="mb-6 text-[9px] uppercase tracking-[0.26em] text-[#F5E614]">
          Servicios · Branding e Identidad Visual
        </p>
        <h1
          className="font-[var(--font-syne)] font-extrabold leading-[0.88] tracking-[-0.025em] text-white"
          style={{ fontSize: "clamp(52px, 8vw, 96px)" }}
        >
          Una marca que
        </h1>
        <p
          className="font-[var(--font-instrument)] italic text-[#F5E614]"
          style={{ fontSize: "clamp(52px, 8vw, 96px)", lineHeight: 0.88 }}
        >
          se recuerda.
        </p>
        <p className="mt-8 max-w-lg text-[13px] leading-[1.82] text-[var(--muted)]">
          Nombre, logo, colores y tono. Una identidad visual que diferencia tu marca del ruido y que la gente
          recuerda.
        </p>
      </section>

      <section className="reveal bg-[#07070f] px-6 py-28 md:px-[52px]">
        <h2 className="text-center font-[var(--font-syne)] text-[36px] font-extrabold text-white">
          Así construimos
          <br />
          <em className="font-[var(--font-instrument)] font-normal italic text-[#F5E614]">una marca.</em>
        </h2>
        <BrandingTimeline />
      </section>

      <section className="reveal bg-[#05050b] px-6 py-28 md:px-[52px]">
        <p className="mb-4 text-[9px] uppercase tracking-[0.26em] text-[#F5E614]">Caso real · MYRAL Agency</p>
        <h2
          className="font-[var(--font-syne)] font-extrabold leading-tight text-white"
          style={{ fontSize: "clamp(36px, 5vw, 48px)" }}
        >
          Así construimos nuestra propia marca.
        </h2>
        <p className="mt-4 max-w-2xl text-[13px] leading-[1.82] text-[var(--muted)]">
          El mejor ejemplo de lo que hacemos es nuestra propia identidad. Cada decisión tiene un porqué.
        </p>

        <div className="mt-20 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="font-[var(--font-syne)] text-2xl font-bold text-white">01 · El nombre</h3>
            <p className="mt-4 text-[13px] leading-[1.85] text-[var(--muted)]">
              MYRAL no es un acrónimo ni una palabra inventada al azar. Es una marca fonéticamente sólida — corta,
              memorable, fácil de pronunciar en cualquier idioma. Dos sílabas. Sin ambigüedad.
            </p>
          </div>
          <BrandingNamingReveal />
        </div>

        <div className="mt-20 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <BrandingTypographyPanel />
          <div className="order-1 lg:order-2">
            <h3 className="font-[var(--font-syne)] text-2xl font-bold text-white">02 · La tipografía</h3>
            <p className="mt-4 text-[13px] leading-[1.85] text-[var(--muted)]">
              Syne para los titulares — geométrica, moderna, con personalidad propia. Instrument Serif en cursiva
              para los momentos de énfasis — añade calidez y contraste sin perder sofisticación.
            </p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="font-[var(--font-syne)] text-2xl font-bold text-white">03 · El color</h3>
            <p className="mt-4 text-[13px] leading-[1.85] text-[var(--muted)]">
              El amarillo #F5E614 no es un amarillo cualquiera. Es energía sin agresividad, visibilidad sin
              estridencia. Sobre negro es imposible ignorarlo. Es el color que hace que te paren en el feed.
            </p>
          </div>
          <BrandingColorCircles />
        </div>

        <div className="mt-24 rounded-xl bg-[#07070f] px-6 py-20 md:px-12">
          <h3 className="text-center font-[var(--font-syne)] text-2xl font-bold text-white">04 · El logo</h3>
          <p className="mx-auto mt-4 max-w-xl text-center text-[13px] leading-[1.85] text-[var(--muted)]">
            El punto después de MYRAL no es decorativo. Es una afirmación. Una marca que no necesita explicarse. El
            logo funciona en negro sobre blanco, en blanco sobre negro, en cualquier tamaño desde un favicon hasta
            una valla publicitaria.
          </p>
          <BrandingLogoVariants />
        </div>

        <div className="mt-24">
          <h3 className="mb-12 text-center font-[var(--font-syne)] text-2xl font-bold text-white">
            05 · Aplicaciones
          </h3>
          <BrandingApplications />
        </div>
      </section>

      <section className="reveal bg-[#05050b] px-6 py-24 md:px-[52px]">
        <h2 className="title-display mb-12">Lo que recibes.</h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <ul className="space-y-4">
            {includesLeft.map((item) => (
              <li
                key={item}
                className="flex gap-4 border-b border-[var(--border)] pb-4 text-[14px] leading-[1.65] text-white/85"
              >
                <span className="shrink-0 text-[#F5E614]">→</span>
                {item}
              </li>
            ))}
          </ul>
          <ul className="space-y-4">
            {includesRight.map((item) => (
              <li
                key={item}
                className="flex gap-4 border-b border-[var(--border)] pb-4 text-[14px] leading-[1.65] text-white/85"
              >
                <span className="shrink-0 text-[#F5E614]">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCta title="¿Lista tu marca para diferenciarse de verdad?" />
    </>
  );
}
