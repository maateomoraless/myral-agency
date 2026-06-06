import Link from "next/link";

const whatWeDid = [
  "Gestión de redes sociales",
  "Fotografía de tapas y ambiente",
  "Contenido para Instagram y TikTok",
  "Promoción de menús y eventos especiales",
] as const;

const videoClass =
  "no-media-hover pointer-events-none h-full w-full cursor-default object-cover";

export default function ElPuntazoPage() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden no-media-hover-wrap">
        <div className="pointer-events-none absolute inset-0 overflow-hidden no-media-hover-wrap">
          <video autoPlay muted loop playsInline className={videoClass} aria-label="El Puntazo">
            <source src="/images/puntazo-cafe.mp4" type="video/mp4" />
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
            El Puntazo
          </h1>
          <p
            className="font-[var(--font-instrument)] italic text-[#F5E614]"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.1 }}
          >
            El bar de tapas que León tenía que conocer.
          </p>
        </div>
      </section>

      <section className="reveal bg-[#07070f] px-6 py-28 md:px-[52px]">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4 text-[9px] uppercase tracking-[0.26em] text-[#F5E614]">El proyecto</p>
            <h2 className="font-[var(--font-syne)] text-[28px] font-extrabold leading-tight text-white">
              Un local con producto de calidad que necesitaba que la gente lo descubriera.
            </h2>
            <p className="mt-6 text-[13px] leading-[1.85] text-[var(--muted)]">
              El Puntazo es un bar de tapas en León con una carta y un ambiente que merece ser conocido más allá de su
              barrio. MYRAL se encargó de darle la visibilidad que merecía.
            </p>
          </div>
          <div className="no-media-hover-wrap overflow-hidden rounded-lg">
            <img
              src="/images/puntazo-terraza.png"
              alt="Terraza El Puntazo"
              loading="lazy"
              className="no-media-hover aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
          </div>
        </div>
      </section>

      <section className="reveal bg-[#05050b] px-6 py-24 md:px-[52px]">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="no-media-hover-wrap overflow-hidden rounded-lg">
            <img
              src="/images/puntazo-tapas.png"
              alt="Tapas El Puntazo"
              loading="lazy"
              className="no-media-hover aspect-[4/3] w-full object-cover md:aspect-auto md:h-full md:min-h-[280px]"
            />
          </div>
          <div className="no-media-hover-wrap overflow-hidden rounded-lg">
            <img
              src="/images/puntazo-banos.png"
              alt="El Puntazo"
              loading="lazy"
              className="no-media-hover aspect-[4/3] w-full object-cover md:aspect-auto md:h-full md:min-h-[280px]"
            />
          </div>
          <div className="no-media-hover-wrap overflow-hidden rounded-lg">
            <video autoPlay muted loop playsInline className={`${videoClass} aspect-[4/3] md:min-h-[280px]`} aria-label="El Puntazo">
              <source src="/images/puntazo-cana.mp4" type="video/mp4" />
            </video>
          </div>
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
              src="/images/puntazo-tapas.png"
              alt="Tapas El Puntazo"
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
          Un local con presencia digital sólida y nuevos clientes que llegan por redes.
        </p>
        <Link
          href="https://www.instagram.com/elpuntazoleon/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block text-[11px] uppercase tracking-[0.16em] text-[#F5E614] transition-opacity hover:opacity-70"
        >
          Ver Instagram →
        </Link>
      </section>

      <section className="reveal bg-[#07070f] px-6 py-24 text-center md:px-[52px]">
        <h2 className="title-display mx-auto max-w-3xl">¿Quieres estos resultados para tu negocio?</h2>
        <button
          type="button"
          data-cal-link="myralagency/diagnostico"
          data-cal-namespace="diagnostico"
          data-cal-config='{"layout":"month_view"}'
          className="mt-10 bg-[#F5E614] px-10 py-5 text-[10px] font-bold uppercase tracking-[0.18em] text-black transition-opacity hover:opacity-90"
        >
          Reservar llamada gratuita →
        </button>
      </section>
    </>
  );
}
