import FinalCta from "@/components/FinalCta";

const whatWeDid = [
  "Estrategia y gestión mensual de Instagram",
  "Fotografía gastronómica de producto",
  "Producción de reels y contenido dinámico",
  "Gestión de la comunidad y respuesta a comentarios",
] as const;

const photoGrid = [
  "/images/pizza-masa.png",
  "/images/pizza-chorizo.png",
  "/images/pizza-otra.png",
  "/images/pizza-champinones.png",
] as const;

const videoClass =
  "no-media-hover pointer-events-none h-full w-full cursor-default object-cover";

const gridImageClass =
  "no-media-hover h-[300px] w-full rounded-lg object-cover transition-transform duration-500 hover:scale-[1.03]";

export default function PizzeriaYComaPage() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden no-media-hover-wrap">
        <div className="pointer-events-none absolute inset-0 overflow-hidden no-media-hover-wrap">
          <video autoPlay muted loop playsInline className={videoClass} aria-label="Pizzería y Coma">
            <source src="/images/pizza-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="pointer-events-none absolute inset-0" style={{ background: "rgba(5,5,11,0.6)" }} />
        <div className="relative z-10 flex min-h-screen flex-col justify-center px-6 py-20 md:px-[52px]">
          <p className="mb-6 flex items-center gap-2 text-[9px] uppercase tracking-[0.26em] text-[#F5E614]">
            <span className="badge-pulse-dot h-[7px] w-[7px] shrink-0 rounded-full bg-[#F5E614]" />
            Social Media · León
          </p>
          <h1
            className="font-[var(--font-syne)] font-extrabold leading-[0.88] tracking-[-0.025em] text-white"
            style={{ fontSize: "clamp(52px, 8vw, 96px)" }}
          >
            Pizzería y Coma
          </h1>
          <p
            className="font-[var(--font-instrument)] italic text-[#F5E614]"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.1 }}
          >
            Buena pizza. Mejor presencia online.
          </p>
        </div>
      </section>

      <section className="reveal bg-[#07070f] px-6 py-28 md:px-[52px]">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4 text-[9px] uppercase tracking-[0.26em] text-[#F5E614]">El proyecto</p>
            <h2 className="font-[var(--font-syne)] text-[28px] font-extrabold leading-tight text-white">
              Una pizzería con producto de nivel que necesitaba visibilidad.
            </h2>
            <p className="mt-6 text-[13px] leading-[1.85] text-[var(--muted)]">
              Pizzería y Coma es un local de León con una propuesta gastronómica sólida que necesitaba una presencia en
              redes a la altura. MYRAL se encargó de construir su comunidad online y atraer nuevos clientes.
            </p>
          </div>
          <div className="no-media-hover-wrap overflow-hidden rounded-lg">
            <img
              src="/images/pizza-champinones.png"
              alt="Pizza Pizzería y Coma"
              loading="lazy"
              className="no-media-hover aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
          </div>
        </div>
      </section>

      <section className="reveal bg-[#05050b] px-6 py-24 md:px-[52px]">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {photoGrid.map((src) => (
            <div key={src} className="no-media-hover-wrap overflow-hidden rounded-lg">
              <img src={src} alt="Pizzería y Coma" loading="lazy" className={gridImageClass} />
            </div>
          ))}
        </div>
      </section>

      <section className="reveal bg-[#07070f] px-6 py-24 md:px-[52px]">
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
          <div className="no-media-hover-wrap overflow-hidden rounded-lg">
            <img
              src="/images/pizza-masa.png"
              alt="Masa Pizzería y Coma"
              loading="lazy"
              className="no-media-hover aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="reveal bg-[#05050b] px-6 py-24 text-center md:px-[52px]">
        <p
          className="mx-auto max-w-2xl font-[var(--font-syne)] font-semibold leading-[1.45] text-white"
          style={{ fontSize: "clamp(18px, 2.5vw, 26px)" }}
        >
          Más visibilidad, más reservas y una comunidad que recomienda el local.
        </p>
      </section>

      <FinalCta title="¿Quieres más visibilidad para tu local?" />
    </>
  );
}
