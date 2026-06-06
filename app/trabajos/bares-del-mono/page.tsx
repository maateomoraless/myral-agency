import Link from "next/link";

const whatWeDid = [
  "Gestión de redes sociales para Deseo del Mono y Leña al Mono",
  "Producción de carteles animados para eventos y tardeos",
  "Contenido de producto para Instagram y TikTok",
  "Comunicación de eventos semanales",
  "Campañas de Meta Ads para eventos especiales",
  "Cobertura de la inauguración de Deseo del Mono",
] as const;

const flyers = [
  {
    src: "/images/mono-flyer-1.mp4",
    label: "Deseo del Mono · Tardeo",
  },
  {
    src: "/images/mono-flyer-2.mp4",
    label: "Leña al Mono · Evento",
  },
] as const;

const videoClass =
  "no-media-hover pointer-events-none h-full w-full cursor-default object-cover";

export default function BaresDelMonoPage() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden no-media-hover-wrap">
        <div className="pointer-events-none absolute inset-0 overflow-hidden no-media-hover-wrap">
          <video
            autoPlay
            muted
            loop
            playsInline
            className={videoClass}
            aria-label="Bares del Mono"
          >
            <source src="/images/mono-inauguracion.mp4" type="video/mp4" />
          </video>
        </div>
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "rgba(5,5,11,0.6)" }}
        />
        <div className="relative z-10 flex min-h-screen flex-col justify-center px-6 py-20 md:px-[52px]">
          <p className="mb-6 flex items-center gap-2 text-[9px] uppercase tracking-[0.26em] text-[#F5E614]">
            <span className="badge-pulse-dot h-[7px] w-[7px] shrink-0 rounded-full bg-[#F5E614]" />
            Social Media &amp; Eventos · León
          </p>
          <h1
            className="font-[var(--font-syne)] font-extrabold leading-[0.88] tracking-[-0.025em] text-white"
            style={{ fontSize: "clamp(52px, 8vw, 96px)" }}
          >
            Bares del Mono
          </h1>
          <p
            className="font-[var(--font-instrument)] italic text-[#F5E614]"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.1 }}
          >
            Deseo del Mono. Leña al Mono. Llenos.
          </p>
        </div>
      </section>

      <section className="reveal bg-[#07070f] px-6 py-28 md:px-[52px]">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4 text-[9px] uppercase tracking-[0.26em] text-[#F5E614]">El proyecto</p>
            <h2 className="font-[var(--font-syne)] text-[28px] font-extrabold leading-tight text-white">
              Dos locales. Una sola estrategia.
            </h2>
            <p className="mt-6 text-[13px] leading-[1.85] text-[var(--muted)]">
              Bares del Mono gestiona dos locales en León con personalidades distintas pero un mismo objetivo: estar
              llenos cada fin de semana. MYRAL se encargó de la gestión de redes sociales y la comunicación de sus
              eventos de tardeo.
            </p>
          </div>
          <div className="no-media-hover-wrap overflow-hidden rounded-lg">
            <img
              src="/images/mono-burger.png"
              alt="Bares del Mono"
              loading="lazy"
              className="no-media-hover aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
          </div>
        </div>
      </section>

      <section className="reveal bg-[#05050b] px-6 py-24 md:px-[52px]">
        <h2 className="text-center font-[var(--font-syne)] text-[32px] font-extrabold leading-tight text-white">
          Contenido que
          <br />
          <em className="font-[var(--font-instrument)] font-normal italic text-[#F5E614]">llena locales.</em>
        </h2>
        <div className="mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8">
          {flyers.map(({ src, label }) => (
            <div key={label} className="flex flex-col items-center">
              <div className="no-media-hover-wrap w-full overflow-hidden rounded-lg">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className={`${videoClass} aspect-[9/16] w-full rounded-lg`}
                  aria-label={label}
                >
                  <source src={src} type="video/mp4" />
                </video>
              </div>
              <p className="mt-4 text-center text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="reveal grid grid-cols-1 bg-[#07070f] lg:grid-cols-2">
        <div className="h-[500px] overflow-hidden no-media-hover-wrap">
          <video
            autoPlay
            muted
            loop
            playsInline
            className={videoClass}
            aria-label="La Súpermona — concurso de tapas"
          >
            <source src="/images/mono-tapa.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="flex flex-col justify-center px-6 py-16 md:px-[80px] lg:py-0">
          <p className="mb-4 text-[9px] uppercase tracking-[0.26em] text-[#F5E614]">Contenido de producto</p>
          <h2 className="font-[var(--font-syne)] text-[28px] font-extrabold leading-tight text-white">
            La Súpermona.
          </h2>
          <p className="mt-6 text-[13px] leading-[1.85] text-[var(--muted)]">
            Contenido de producto para el concurso de tapas de León. La tapa más viral del local, grabada y editada por
            MYRAL para maximizar el alcance en redes sociales.
          </p>
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
          <div className="no-media-hover-wrap overflow-hidden rounded-lg">
            <img
              src="/images/ads-decoracion.png"
              alt="Contenido Bares del Mono"
              loading="lazy"
              className="no-media-hover aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="reveal bg-[#07070f] px-6 py-24 text-center md:px-[52px]">
        <p
          className="mx-auto max-w-2xl font-[var(--font-syne)] font-semibold leading-[1.45] text-white"
          style={{ fontSize: "clamp(18px, 2.5vw, 26px)" }}
        >
          Tardeos con lista de espera y una comunidad online que espera cada semana el siguiente evento. El contenido
          de Bares del Mono se convirtió en referencia de ocio nocturno en León.
        </p>
        <Link
          href="https://www.instagram.com/baresdelmono/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block text-[11px] uppercase tracking-[0.16em] text-[#F5E614] transition-opacity hover:opacity-70"
        >
          Ver Instagram →
        </Link>
      </section>

      <section className="reveal bg-[#05050b] px-6 py-24 text-center md:px-[52px]">
        <h2 className="title-display mx-auto max-w-3xl">¿Quieres que tu local esté siempre lleno?</h2>
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
