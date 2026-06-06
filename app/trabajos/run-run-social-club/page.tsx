import Link from "next/link";
import FinalCta from "@/components/FinalCta";
import RunRunResultsStats from "@/components/case-study/RunRunResultsStats";

export const metadata = {
  title: "Run Run Social Club × Santa Madre × MYRAL Agency",
  description:
    "Campaña de influencer marketing entre comunidad de runners y marca de suplementos deportivos. Roberto Alaiz como protagonista.",
};

const VIDEO_SRC =
  "https://pub-b4af313647b6409d962b89eaf287e84c.r2.dev/2025-09-16-video-runrun-x-santamadre_DXwzauWq.mp4";

const whatWeDid = [
  "Concepto creativo de la colaboración",
  "Producción del contenido audiovisual",
  "Estrategia de publicación y timing",
  "Adaptación para Instagram Reels",
  "Gestión de la relación entre ambas marcas",
] as const;

const videoBaseClass =
  "no-media-hover pointer-events-none h-full w-full cursor-default object-cover";

const videoHeroCropClass = `${videoBaseClass} [clip-path:inset(12%_0_12%_0)]`;
const videoIntroCropClass = `${videoBaseClass} [clip-path:inset(0_0_15%_0)]`;

export default function RunRunPage() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden no-media-hover-wrap">
        <div className="absolute inset-0 overflow-hidden no-media-hover-wrap pointer-events-none">
          <video
            autoPlay
            muted
            loop
            playsInline
            className={videoHeroCropClass}
            aria-label="Run Run Social Club × Santa Madre"
          >
            <source src={VIDEO_SRC} type="video/mp4" />
          </video>
        </div>
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "rgba(5,5,11,0.6)" }}
        />
        <div className="relative z-10 flex min-h-screen flex-col justify-center px-6 py-20 md:px-[52px]">
          <p className="mb-6 flex items-center gap-2 text-[9px] uppercase tracking-[0.26em] text-[#F5E614]">
            <span className="badge-pulse-dot h-[7px] w-[7px] shrink-0 rounded-full bg-[#F5E614]" />
            Influencer Marketing · Marca · 2024
          </p>
          <h1
            className="font-[var(--font-syne)] font-extrabold leading-[0.88] tracking-[-0.025em] text-white"
            style={{ fontSize: "clamp(52px, 8vw, 96px)" }}
          >
            Run Run Social Club
          </h1>
          <p
            className="font-[var(--font-instrument)] italic text-[#F5E614]"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.1 }}
          >
            × Santa Madre
          </p>
          <p className="mt-6 max-w-md text-[13px] leading-[1.82] text-[var(--muted)]">
            Cuando una comunidad se convierte en canal.
          </p>
        </div>
      </section>

      <section className="reveal bg-[#07070f] px-6 py-28 md:px-[52px]">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4 text-[9px] uppercase tracking-[0.26em] text-[#F5E614]">El proyecto</p>
            <h2 className="font-[var(--font-syne)] text-[28px] font-extrabold leading-tight text-white">
              Contenido que no parecía publicidad.
            </h2>
            <p className="mt-6 text-[13px] leading-[1.85] text-[var(--muted)]">
              Run Run Social Club es una comunidad de runners con identidad de marca muy definida. Santa Madre es una
              marca de suplementos deportivos que quería llegar a ese público de forma auténtica. MYRAL coordinó la
              colaboración: desde el concepto hasta la producción del contenido.
            </p>
            <div className="mt-10 border-t border-[var(--border)] pt-8">
              <p className="text-[9px] uppercase tracking-[0.18em] text-[var(--muted)]">Atleta protagonista</p>
              <h3 className="mt-2 font-[var(--font-syne)] text-[18px] font-semibold text-white">Roberto Alaiz</h3>
              <p className="mt-3 text-[12px] leading-[1.75] text-[var(--muted)]">
                Uno de los mejores fondistas españoles. Especialista en trail running y ultra distancia. Su comunidad y
                credibilidad fueron clave para que la colaboración funcionara.
              </p>
              <Link
                href="https://www.instagram.com/roberalaiz/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-[11px] uppercase tracking-[0.16em] text-[#F5E614] transition-opacity hover:opacity-70"
              >
                Ver perfil →
              </Link>
            </div>
          </div>
          <div className="no-media-hover-wrap pointer-events-none aspect-video cursor-default overflow-hidden rounded-lg">
            <video
              autoPlay
              muted
              loop
              playsInline
              className={videoIntroCropClass}
              aria-label="Vídeo de la colaboración Run Run × Santa Madre"
            >
              <source src={VIDEO_SRC} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="reveal bg-[#05050b] px-6 py-24 md:px-[52px]">
        <h2 className="font-[var(--font-syne)] text-[36px] font-extrabold text-white">Lo que hicimos.</h2>
        <div className="mt-12 grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <ul className="space-y-4">
            {whatWeDid.map((item) => (
              <li key={item} className="flex gap-4 text-[14px] leading-[1.7] text-white/85">
                <span className="shrink-0 text-[#F5E614]">→</span>
                {item}
              </li>
            ))}
          </ul>
          <RunRunResultsStats />
        </div>
      </section>

      <section className="reveal bg-[#07070f] px-6 py-24 text-center md:px-[52px]">
        <p
          className="mx-auto max-w-2xl font-[var(--font-syne)] font-semibold leading-[1.45] text-white"
          style={{ fontSize: "clamp(20px, 2.5vw, 28px)" }}
        >
          Contenido que no parecía publicidad. Eso es lo más difícil de conseguir y lo que más convierte. La
          colaboración generó engagement real de una comunidad que confía en las marcas que Run Run recomienda.
        </p>
        <Link
          href="https://www.instagram.com/reel/DOqJdh6jJPJ/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block text-[11px] uppercase tracking-[0.16em] text-[#F5E614] transition-opacity hover:opacity-70"
        >
          Ver el reel →
        </Link>
      </section>

      <FinalCta title="¿Quieres una colaboración así para tu marca?" />
    </>
  );
}
