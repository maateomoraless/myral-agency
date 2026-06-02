"use client";

import { CalButton } from "@/components/CalButton";
import { HomeWorksPreview } from "@/components/HomeWorksPreview";
import { Reveal } from "@/components/Reveal";
import { Ticker } from "@/components/Ticker";
import Link from "next/link";

const services = [
  { n: "01", title: "Gestión de Redes Sociales", desc: "Estrategia y gestión de Instagram, TikTok y LinkedIn.", hi: false },
  { n: "02", title: "Producción de Contenido", desc: "Fotografía, vídeo y reels de nivel profesional.", hi: false },
  { n: "03", title: "Publicidad Digital", desc: "Meta Ads y Google Ads con retorno medible.", hi: false },
  { n: "04", title: "Branding e Identidad Visual", desc: "Logo, colores y tono que diferencian tu marca.", hi: false },
  { n: "05", title: "Gestión y Producción de Eventos", desc: "Conceptualización y cobertura audiovisual en directo.", hi: false },
  { n: "06", title: "Influencer Marketing", desc: "Colaboraciones con alcance real, no vanity metrics.", hi: false },
  { n: "07", title: "Automatización con IA", desc: "Leads, propuestas y reportes en piloto automático.", hi: true },
  { n: "08", title: "Creación de Webs & Apps", desc: "Webs rápidas conectadas con IA desde el primer día.", hi: true },
];

const aiCards = [
  { n: "01", title: "Captación de leads automática", desc: "Respuesta personalizada en menos de 2 minutos." },
  { n: "02", title: "Propuestas sin trabajo manual", desc: "Propuesta a medida en PDF, enviada sola." },
  { n: "03", title: "Reportes mensuales automáticos", desc: "Informe completo el día 1 de cada mes." },
];

const sectionTitle =
  "font-syne text-5xl font-extrabold leading-[0.92] tracking-[-0.02em] md:text-6xl";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-[72px] md:px-13">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 45% at 80% 20%, rgba(245,230,20,0.07) 0%, transparent 55%)",
          }}
        />
        <div className="relative mx-auto w-full max-w-[1400px]">
          <Reveal>
            <h1 className="font-syne font-extrabold leading-[0.88] tracking-[-0.03em] text-[clamp(64px,10vw,120px)]">
              Tu marca,{" "}
              <span className="font-instrument italic text-yellow">
                sin excusas.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={1}>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-white/40">
              Contenido, crecimiento e IA para marcas que quieren dominar su
              sector.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <CalButton className="mt-12 cursor-pointer bg-yellow px-8 py-4 font-syne text-xs font-bold uppercase tracking-widest text-bg transition-opacity hover:opacity-85">
              Reservar llamada gratuita
            </CalButton>
          </Reveal>
        </div>
      </section>

      <Ticker />

      {/* SERVICIOS */}
      <section className="border-t border-border px-6 py-32 md:px-13">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-16">
          <Reveal>
            <h2 className={sectionTitle}>
              Todo lo que necesitas{" "}
              <em className="font-instrument font-normal italic text-yellow">
                en un sitio.
              </em>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.n} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div
                  className={`group flex gap-4 border-b border-border py-8 transition-all duration-300 ease-out hover:pl-3 md:odd:border-r md:odd:pr-12 md:even:pl-12 ${
                    s.hi
                      ? "border border-yellow/15 bg-yellow/[0.04] px-4"
                      : ""
                  }`}
                >
                  <span
                    className={`min-w-8 font-syne text-sm font-bold ${
                      s.hi ? "text-yellow/50" : "text-yellow/25"
                    }`}
                  >
                    {s.n}
                  </span>
                  <div>
                    <h3 className="font-syne text-base font-semibold transition-colors group-hover:text-yellow">
                      {s.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-white/40">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TRABAJOS */}
      <section
        id="trabajos"
        className="border-t border-border bg-bg2 px-6 py-32 md:px-13"
      >
        <div className="mx-auto flex max-w-[1400px] flex-col gap-16">
          <Reveal>
            <h2 className={sectionTitle}>
              Con quién{" "}
              <em className="font-instrument font-normal italic text-yellow">
                trabajamos.
              </em>
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <HomeWorksPreview />
          </Reveal>
          <Reveal delay={2}>
            <Link
              href="/trabajos"
              className="inline-block text-xs uppercase tracking-widest text-yellow transition-opacity hover:opacity-70"
            >
              Ver todos los trabajos →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* NÚMEROS */}
      <section className="border-t border-border px-6 py-32 md:px-13">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 md:grid-cols-3">
          {[
            { v: "20+", l: "Proyectos activos" },
            { v: "+900%", l: "Crecimiento medio en redes" },
            { v: "3.2×", l: "ROI medio publicitario" },
          ].map((m, i) => (
            <Reveal
              key={m.l}
              delay={((i % 3) + 1) as 1 | 2 | 3}
              className="text-center"
            >
              <div className="font-syne font-extrabold leading-none text-[#F5E614] text-[clamp(72px,12vw,160px)]">
                {m.v}
              </div>
              <div className="mt-4 text-xs uppercase tracking-widest text-white/30">
                {m.l}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* IA */}
      <section className="border-t border-border bg-bg2 px-6 py-32 md:px-13">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-16">
          <Reveal>
            <h2 className={sectionTitle}>
              No solo creamos.{" "}
              <em className="font-instrument font-normal italic text-yellow">
                Lo automatizamos.
              </em>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
            {aiCards.map((card, i) => (
              <Reveal
                key={card.n}
                delay={((i % 3) + 1) as 1 | 2 | 3}
                className="border-t border-border pt-8"
              >
                <div className="font-syne text-4xl font-extrabold text-yellow md:text-5xl">
                  {card.n}
                </div>
                <h3 className="mt-6 font-syne text-lg font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-3 line-clamp-2 text-sm text-white/40">
                  {card.desc}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={2}>
            <Link
              href="/ia"
              className="inline-block text-xs uppercase tracking-widest text-yellow transition-opacity hover:opacity-70"
            >
              Ver todas las automatizaciones →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="border-t border-border px-6 py-32 md:px-13">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-16">
          <Reveal>
            <h2 className={sectionTitle}>¿Listo para crecer?</h2>
            <p className="mt-6 max-w-sm text-sm text-white/40">
              Diagnóstico gratuito de 20 minutos. Sin compromiso.
            </p>
          </Reveal>
          <Reveal delay={1}>
            <div className="flex flex-wrap gap-4">
              <CalButton className="cursor-pointer bg-yellow px-8 py-4 font-syne text-xs font-bold uppercase tracking-widest text-bg transition-opacity hover:opacity-85">
                Reservar llamada gratuita
              </CalButton>
              <Link
                href="mailto:info@myralagency.com"
                className="inline-flex items-center border border-white/20 px-8 py-4 text-xs uppercase tracking-widest text-white/40 transition-colors hover:border-yellow hover:text-yellow"
              >
                info@myralagency.com
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
