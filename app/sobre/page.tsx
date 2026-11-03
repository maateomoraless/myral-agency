import Link from "next/link";
import type { Metadata } from "next";
import FinalCta from "@/components/FinalCta";
import HeroWordReveal from "@/components/effects/HeroWordReveal";

export const metadata: Metadata = {
  title: "Historia — MYRAL Agency",
  description:
    "MYRAL nació en marzo de 2021 en León con una cámara y muchas ganas. Esta es la historia de Mateo Morales, fundador de la agencia.",
};

const milestones = [
  {
    year: "2021",
    title: "La primera cámara",
    text: "Con 16 años me compro mi primera cámara. Mi primer cliente es un conocido al que le hago una sesión de fotos por casi nada. Ese mismo marzo nace MYRAL.",
  },
  {
    year: "Formación",
    title: "Máster de foto y vídeo",
    text: "Me formo en la escuela RBG para pasar de grabar por intuición a dominar la técnica: cámara, luz, color y montaje.",
  },
  {
    year: "Redes",
    title: "De 200 a 2.000",
    text: "Vermutería Cervantes multiplica por diez sus seguidores en menos de un año. Ahí entiendo que el buen contenido, bien gestionado, llena locales.",
  },
  {
    year: "Eventos",
    title: "16.000 personas",
    text: "Llevamos la gestión integral de Mono Loco, el evento más grande de León. Producción, comunicación y cobertura de principio a fin.",
  },
  {
    year: "Deporte",
    title: "Élite mundial",
    text: "Edito contenido para el escalador Jakob Schubert y la escaladora Ichi, y firmo el vídeo del combate europeo del boxeador Antonio Barrul.",
  },
  {
    year: "2026",
    title: "Europa FM y las bodegas",
    text: "Cubrimos los conciertos de Europa FM en Castilla y León y producimos el contenido de cuatro bodegas. MYRAL ya trabaja para toda España.",
  },
] as const;

const stats = [
  ["2021", "Año de inicio"],
  ["+20", "Proyectos activos"],
  ["16.000", "Personas en nuestro mayor evento"],
] as const;

export default function SobrePage() {
  return (
    <>
      <section className="relative flex min-h-[85vh] items-end overflow-hidden px-6 pb-20 pt-32 md:px-[52px]">
        <img
          src="/hero/hero-poster.jpg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(5,5,11,0.4) 0%, rgba(5,5,11,0.6) 50%, #05050b 100%)" }}
        />
        <div className="relative z-10">
          <p className="mb-6 text-[9px] uppercase tracking-[0.26em] text-[#F5E614]">Historia · Desde 2021</p>
          <HeroWordReveal text="Empezó con" as="h1" className="title-display font-[var(--font-syne)] text-white" />
          <HeroWordReveal
            text="una cámara."
            as="p"
            className="title-display font-[var(--font-instrument)] italic text-[#F5E614]"
          />
        </div>
      </section>

      <section className="section-pad reveal">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-20">
          <p className="font-[var(--font-instrument)] text-[clamp(26px,3.2vw,40px)] italic leading-[1.2] text-white">
            «No subcontratamos. El que habla contigo es el que graba, edita y publica.»
          </p>
          <div className="space-y-6 text-[14px] leading-[1.9] text-[var(--muted)]">
            <p>
              Me llamo Mateo Morales y fundé MYRAL en León en marzo de 2021, con 16 años. Empecé con una cámara, un
              conocido que se dejó fotografiar y la obsesión de que cada imagen quedara mejor que la anterior.
            </p>
            <p>
              Cinco años después, MYRAL graba conciertos para Europa FM, produce el contenido de bodegas y restaurantes,
              organiza festivales y edita vídeos para deportistas de élite mundial. Todo con la misma idea del primer
              día: contar las cosas tan bien que se note.
            </p>
            <p>
              Me formé en foto y vídeo en la escuela RBG y he trabajado desde León y desde Innsbruck. Hoy combino la
              producción audiovisual con las redes sociales, los eventos y la inteligencia artificial, porque una marca
              no necesita cuatro proveedores: necesita a alguien que lo entienda todo.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[#05050b] px-6 py-16 md:px-[52px]">
        <div className="grid grid-cols-1 gap-px bg-[var(--border)] sm:grid-cols-3">
          {stats.map(([value, label]) => (
            <div key={label} className="bg-[#05050b] p-8 md:p-10">
              <div className="font-[var(--font-syne)] text-[clamp(40px,5vw,64px)] font-extrabold leading-none text-[#F5E614]">
                {value}
              </div>
              <div className="mt-3 text-[9px] uppercase tracking-[0.16em] text-[var(--muted)]">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad section-alt reveal-section">
        <h2 className="reveal-item title-display mb-14">
          Cómo hemos
          <br />
          <em className="font-[var(--font-instrument)] font-normal italic text-[#F5E614]">llegado aquí.</em>
        </h2>
        <ol className="max-w-4xl">
          {milestones.map((m) => (
            <li
              key={m.title}
              className="reveal-item grid grid-cols-1 gap-2 border-t border-[var(--border)] py-8 md:grid-cols-[160px_minmax(0,1fr)] md:gap-10"
            >
              <span className="font-[var(--font-syne)] text-[11px] font-bold uppercase tracking-[0.2em] text-[#F5E614]">
                {m.year}
              </span>
              <div>
                <h3 className="font-[var(--font-syne)] text-xl font-bold text-white">{m.title}</h3>
                <p className="mt-2 max-w-2xl text-[13px] leading-[1.85] text-[var(--muted)]">{m.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <Link
          href="/trabajos"
          className="mt-12 inline-block border border-white/20 px-8 py-3.5 text-[9px] uppercase tracking-[0.16em] text-white/65 transition-colors hover:border-[#F5E614] hover:text-[#F5E614]"
        >
          Ver los trabajos →
        </Link>
      </section>

      <FinalCta title="¿Escribimos el siguiente capítulo juntos?" />
    </>
  );
}
