import Link from "next/link";
import FinalCta from "@/components/FinalCta";

const whatWeDid = [
  "Desarrollo de identidad visual para redes sociales",
  "Estrategia de contenido orientada a viajeros",
  "Fotografía de instalaciones y espacios",
  "Gestión mensual de Instagram",
  "Respuesta a reseñas y gestión de reputación online",
  "Campañas de Meta Ads para captación de reservas",
] as const;

export default function CamaroteHotelPage() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden no-media-hover-wrap">
        <div className="pointer-events-none absolute inset-0 overflow-hidden no-media-hover-wrap">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="no-media-hover pointer-events-none h-full w-full cursor-default object-cover"
            aria-label="Camarote Hotel"
          >
            <source src="/images/camarote-reel.mp4" type="video/mp4" />
          </video>
        </div>
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "rgba(5,5,11,0.6)" }}
        />
        <div className="relative z-10 flex min-h-screen flex-col justify-center px-6 py-20 md:px-[52px]">
          <p className="mb-6 flex items-center gap-2 text-[9px] uppercase tracking-[0.26em] text-[#F5E614]">
            <span className="badge-pulse-dot h-[7px] w-[7px] shrink-0 rounded-full bg-[#F5E614]" />
            Branding &amp; Social Media · León
          </p>
          <h1
            className="hero-title-96 font-[var(--font-syne)] font-extrabold tracking-[-0.025em] text-white"
          >
            Camarote Hotel
          </h1>
          <p
            className="font-[var(--font-instrument)] italic text-[#F5E614]"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.1 }}
          >
            Una identidad visual que se recuerda.
          </p>
        </div>
      </section>

      <section className="reveal bg-[#07070f] px-6 py-28 md:px-[52px]">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4 text-[9px] uppercase tracking-[0.26em] text-[#F5E614]">El proyecto</p>
            <h2 className="font-[var(--font-syne)] text-[28px] font-extrabold leading-tight text-white">
              Presencia online a la altura del hotel.
            </h2>
            <p className="mt-6 text-[13px] leading-[1.85] text-[var(--muted)]">
              Camarote Hotel es un hotel boutique en León con una personalidad única. Cuando llegaron a MYRAL
              necesitaban que su presencia online reflejara la calidad y el carácter de su propuesta. No era solo
              gestionar redes — era construir una identidad visual coherente y atractiva.
            </p>
          </div>
          <div className="no-media-hover-wrap overflow-hidden rounded-lg">
            <img
              src="/images/camarote-hab.png"
              alt="Habitación Camarote Hotel"
              loading="lazy"
              className="no-media-hover aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
          </div>
        </div>
      </section>

      <section className="reveal grid grid-cols-1 bg-[#05050b] lg:grid-cols-2">
        <div className="h-[500px] overflow-hidden">
          <img
            src="/images/camarote-foto.png"
            alt="Camarote Hotel"
            loading="lazy"
            className="no-media-hover h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-6 py-16 md:px-[80px] lg:py-0">
          <p className="mb-4 text-[9px] uppercase tracking-[0.26em] text-[#F5E614]">El reto</p>
          <h2 className="font-[var(--font-syne)] text-[28px] font-extrabold leading-tight text-white">
            El sector hotelero se decide online.
          </h2>
          <p className="mt-6 text-[13px] leading-[1.85] text-[var(--muted)]">
            Los viajeros deciden dónde alojarse basándose en lo que ven en Instagram y Google. La imagen tenía que
            transmitir experiencia, no solo habitaciones. Cada publicación tenía que hacer que el visitante quisiera
            estar ahí.
          </p>
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
              src="/images/camarote-mesa.png"
              alt="Espacio Camarote Hotel"
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
          Una presencia online coherente y atractiva que convierte visitas en reservas. El hotel pasó de tener una
          cuenta abandonada a publicar contenido de nivel que refleja exactamente lo que ofrece.
        </p>
        <Link
          href="https://www.instagram.com/camarotehotel/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block text-[11px] uppercase tracking-[0.16em] text-[#F5E614] transition-opacity hover:opacity-70"
        >
          Ver Instagram →
        </Link>
      </section>

      <FinalCta title="¿Quieres que tu negocio tenga la presencia que merece?" />
    </>
  );
}
