import LeonMarinoLocation from "@/components/case-study/LeonMarinoLocation";
import FinalCta from "@/components/FinalCta";

const whatWeDid = [
  "Estrategia de contenido para redes sociales",
  "Gestión de Instagram orientada a captar alumnos",
  "Producción de contenido visual aprovechando el entorno",
  "Posicionamiento en el sector del buceo y deportes acuáticos",
] as const;

export default function LeonMarinoPage() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-[#111] no-media-hover-wrap">
        <div className="pointer-events-none absolute inset-0 overflow-hidden no-media-hover-wrap">
          <img
            src="/images/marino-buzos.png"
            alt="León Marino"
            className="no-media-hover pointer-events-none h-full w-full object-cover"
          />
        </div>
        <div className="pointer-events-none absolute inset-0" style={{ background: "rgba(5,5,11,0.65)" }} />
        <div className="relative z-10 flex min-h-screen flex-col justify-center px-6 py-20 md:px-[52px]">
          <p className="mb-6 flex items-center gap-2 text-[9px] uppercase tracking-[0.26em] text-[#F5E614]">
            <span className="badge-pulse-dot h-[7px] w-[7px] shrink-0 rounded-full bg-[#F5E614]" />
            Branding &amp; Social Media · Tarifa
          </p>
          <h1
            className="font-[var(--font-syne)] font-extrabold leading-[0.88] tracking-[-0.025em] text-white"
            style={{ fontSize: "clamp(52px, 8vw, 96px)" }}
          >
            León Marino
          </h1>
          <p
            className="font-[var(--font-instrument)] italic text-[#F5E614]"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.1 }}
          >
            Buceo en Tarifa. Contado como merece.
          </p>
        </div>
      </section>

      <section className="reveal bg-[#07070f] px-6 py-28 md:px-[52px]">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4 text-[9px] uppercase tracking-[0.26em] text-[#F5E614]">El proyecto</p>
            <h2 className="font-[var(--font-syne)] text-[28px] font-extrabold leading-tight text-white">
              Una escuela de buceo en uno de los destinos más espectaculares de España.
            </h2>
            <p className="mt-6 text-[13px] leading-[1.85] text-[var(--muted)]">
              León Marino es una escuela de buceo en Tarifa con un entorno visual privilegiado. MYRAL desarrolló una
              estrategia de contenido que aprovechara al máximo el potencial visual del mar, la fauna submarina y la luz
              del sur.
            </p>
          </div>
          <div className="no-media-hover-wrap overflow-hidden rounded-lg">
            <img
              src="/images/marino-buzos.png"
              alt="Buzos León Marino"
              loading="lazy"
              className="no-media-hover aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
          </div>
        </div>
      </section>

      <section className="reveal bg-[#05050b] px-6 py-24 md:px-[52px]">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="font-[var(--font-syne)] text-[36px] font-extrabold text-white">Lo que hicimos.</h2>
            <ul className="mt-10 space-y-4">
              {whatWeDid.map((item) => (
                <li key={item} className="flex gap-4 text-[14px] leading-[1.7] text-white/85">
                  <span className="shrink-0 text-[#F5E614]">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <LeonMarinoLocation />
        </div>
      </section>

      <section className="reveal bg-[#07070f] px-6 py-24 text-center md:px-[52px]">
        <p
          className="mx-auto max-w-2xl font-[var(--font-syne)] font-semibold leading-[1.45] text-white"
          style={{ fontSize: "clamp(18px, 2.5vw, 26px)" }}
        >
          Una presencia online que transmite la experiencia del buceo en Tarifa y atrae a nuevos alumnos.
        </p>
      </section>

      <FinalCta title="¿Quieres este nivel de contenido para tu marca?" />
    </>
  );
}
