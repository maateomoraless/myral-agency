import Link from "next/link";
import FinalCta from "@/components/FinalCta";
import FlowAnimation from "@/components/FlowAnimation";
import WebsAppsHeroStats from "@/components/services/WebsAppsHeroStats";
import WhatNextBrowserMockup from "@/components/services/WhatNextBrowserMockup";

export const metadata = {
  title: "Creación de Webs & Apps — MYRAL Agency",
  description:
    "Webs rápidas, bonitas y conectadas con IA desde el primer día. Next.js, TypeScript y las mejores herramientas del mercado.",
};

const whatNextStack = [
  "Next.js 14 App Router",
  "Supabase para autenticación y base de datos",
  "Claude AI para recomendaciones personalizadas",
  "Diseño responsive mobile-first",
  "Deploy en Vercel con CI/CD automático",
] as const;

const techStack = [
  { name: "Next.js 14", desc: "El framework más usado del mundo" },
  { name: "TypeScript", desc: "Código robusto sin errores" },
  { name: "Tailwind CSS", desc: "Diseño rápido y consistente" },
  { name: "Supabase", desc: "Base de datos y auth en segundos" },
  { name: "Vercel", desc: "Deploy automático en cada commit" },
  { name: "Claude AI", desc: "IA integrada nativamente" },
  { name: "React", desc: "UI modular y escalable" },
  { name: "Node.js", desc: "Backend potente y flexible" },
] as const;

const buildTypes = [
  "Webs corporativas y de agencia",
  "Apps web con IA",
  "E-commerce y tiendas online",
  "Portfolios y webs personales",
  "Dashboards y herramientas internas",
  "Landing pages de alta conversión",
] as const;

const processSteps = [
  ["01", "Briefing", "Entendemos qué necesitas, para quién es y qué tiene que conseguir."],
  ["02", "Diseño", "Wireframes y diseño visual antes de escribir una línea de código."],
  ["03", "Desarrollo", "Next.js, TypeScript y las mejores herramientas del mercado."],
  ["04", "Testing", "Pruebas en todos los dispositivos antes de publicar."],
  ["05", "Deploy y mantenimiento", "Publicación en Vercel con actualizaciones automáticas."],
] as const;

const iaFeatures = [
  "Chatbots con Claude AI",
  "Formularios inteligentes con scoring de leads",
  "Recomendaciones personalizadas",
  "Análisis de comportamiento del usuario",
  "Automatización de respuestas y seguimiento",
] as const;

export default function WebsAppsPage() {
  return (
    <>
      <section className="reveal flex min-h-screen flex-col justify-end bg-[#05050b] px-6 pb-20 pt-[120px] md:px-[52px]">
        <p className="mb-6 flex items-center gap-2 text-[9px] uppercase tracking-[0.26em] text-[#F5E614]">
          <span className="badge-pulse-dot h-[7px] w-[7px] shrink-0 rounded-full bg-[#F5E614]" />
          Servicios · Creación de Webs &amp; Apps
        </p>
        <h1
          className="font-[var(--font-syne)] font-extrabold leading-[0.88] tracking-[-0.025em] text-white"
          style={{ fontSize: "clamp(52px, 8vw, 96px)" }}
        >
          Webs que no solo
        </h1>
        <p
          className="font-[var(--font-instrument)] italic text-[#F5E614]"
          style={{ fontSize: "clamp(52px, 8vw, 96px)", lineHeight: 0.88 }}
        >
          se ven. Convierten.
        </p>
        <p className="mt-8 max-w-lg text-[13px] leading-[1.82] text-[var(--muted)]">
          Next.js, React y las mejores herramientas del mercado. Rápidas, bonitas, optimizadas para SEO y
          conectadas con IA desde el primer día.
        </p>
        <WebsAppsHeroStats />
      </section>

      <section className="reveal bg-[#07070f] px-6 py-28 md:px-[52px]">
        <p className="mb-6 text-[9px] uppercase tracking-[0.26em] text-[#F5E614]">Caso real · WhatNext?</p>
        <h2 className="font-[var(--font-syne)] text-[40px] font-extrabold leading-tight text-white">
          Una app con IA construida
          <br />
          <em className="font-[var(--font-instrument)] font-normal italic text-[#F5E614]">
            desde cero.
          </em>
        </h2>

        <div className="mt-16 grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-[13px] leading-[1.85] text-[var(--muted)]">
              WhatNext? es una aplicación web que usa inteligencia artificial para recomendar películas y series
              personalizadas según tus plataformas de streaming, tu historial y tu estado de ánimo. Construida con
              Next.js 14, Supabase y Claude AI.
            </p>
            <ul className="mt-8 space-y-3">
              {whatNextStack.map((item) => (
                <li key={item} className="flex gap-3 text-[13px] leading-[1.7] text-white/80">
                  <span className="shrink-0 text-[#F5E614]">→</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="https://whatnext-gray.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block border border-white/20 px-7 py-3.5 text-[9px] uppercase tracking-[0.16em] text-white/65 transition-colors hover:border-[#F5E614] hover:text-[#F5E614]"
            >
              Ver la app en vivo →
            </Link>
          </div>
          <WhatNextBrowserMockup />
        </div>
      </section>

      <section className="reveal bg-[#05050b] px-6 py-24 md:px-[52px]">
        <h2 className="text-center font-[var(--font-syne)] text-[36px] font-extrabold text-white">
          Tecnología de primer nivel.
        </h2>
        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map(({ name, desc }) => (
            <article
              key={name}
              className="rounded-lg border border-[#222] bg-[#07070f] p-5 transition-colors hover:border-[#F5E614]/30"
            >
              <h3 className="font-[var(--font-syne)] text-sm font-semibold text-white">{name}</h3>
              <p className="mt-2 text-[11px] leading-[1.65] text-[var(--muted)]">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="reveal bg-[#07070f] px-6 py-24 md:px-[52px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="font-[var(--font-syne)] text-[36px] font-extrabold leading-tight text-white">
              ¿Qué tipo de webs
              <br />
              <em className="font-[var(--font-instrument)] font-normal italic text-[#F5E614]">
                y apps construimos?
              </em>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-px bg-[var(--border)] sm:grid-cols-2">
            {buildTypes.map((title) => (
              <article
                key={title}
                className="group relative border border-transparent bg-[#07070f] p-6 transition-colors hover:border-[#F5E614]/30 hover:bg-[#F5E614]/[0.02]"
              >
                <h3 className="font-[var(--font-syne)] text-[14px] font-semibold text-white transition-colors group-hover:text-[#F5E614]">
                  {title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="reveal bg-[#05050b] px-6 py-24 md:px-[52px]">
        <h2 className="font-[var(--font-syne)] text-[36px] font-extrabold text-white">De la idea al deploy.</h2>
        <div className="mt-12 grid grid-cols-1 gap-px bg-[var(--border)] md:grid-cols-2 lg:grid-cols-5">
          {processSteps.map(([num, title, desc]) => (
            <article
              key={num}
              className="group relative bg-[#07070f] p-6 transition-colors hover:bg-[#F5E614]/[0.02] lg:p-7"
            >
              <div className="absolute left-0 right-0 top-0 h-0.5 origin-left scale-x-0 bg-[#F5E614] transition-transform duration-500 group-hover:scale-x-100" />
              <div className="mb-4 font-[var(--font-syne)] text-[10px] font-bold text-[#F5E614]/50">{num}</div>
              <h3 className="font-[var(--font-syne)] text-[15px] font-semibold text-white">{title}</h3>
              <p className="mt-3 text-[11px] leading-[1.75] text-[var(--muted)]">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="reveal bg-[#07070f] px-6 py-24 md:px-[52px]">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="font-[var(--font-syne)] text-[36px] font-extrabold leading-tight text-white">
              IA integrada
              <br />
              <em className="font-[var(--font-instrument)] font-normal italic text-[#F5E614]">
                desde el primer día.
              </em>
            </h2>
            <p className="mt-6 text-[13px] leading-[1.85] text-[var(--muted)]">
              Todas las webs que construimos pueden tener IA integrada nativamente. Chatbots que responden
              preguntas, formularios que cualifican leads automáticamente, recomendaciones personalizadas para cada
              visitante.
            </p>
            <ul className="mt-8 space-y-3">
              {iaFeatures.map((item) => (
                <li key={item} className="flex gap-3 text-[13px] leading-[1.7] text-white/80">
                  <span className="shrink-0 text-[#F5E614]">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center lg:justify-end">
            <FlowAnimation />
          </div>
        </div>
      </section>

      <FinalCta title="¿Tienes una idea para una web o app?" />
    </>
  );
}
