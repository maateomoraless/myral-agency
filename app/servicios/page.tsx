import Link from "next/link";

const services = [
  { num: "01", title: "Producción Audiovisual", desc: "Vídeo, foto y reels con acabado de cine. Aftermovies, anuncios y cobertura de eventos con entrega en horas.", href: "/servicios/produccion-contenido" },
  { num: "02", title: "Redes Sociales y Publicidad", desc: "Estrategia, contenido y gestión de Instagram y TikTok, con campañas Meta Ads que se miden.", href: "/servicios/gestion-redes-sociales" },
  { num: "03", title: "Eventos", desc: "Producción, venta de entradas y cobertura de festivales, conciertos y actos. De la idea al último reel.", href: "/servicios/gestion-eventos" },
  { num: "04", title: "IA y Webs ★", desc: "Webs rápidas y automatizaciones que trabajan por tu negocio 24/7.", href: "/servicios/ia" },
] as const;

export default function ServiciosPage() {
  return (
    <>
      <section className="reveal section-pad !border-t-0">
        <h1 className="title-display">Servicios</h1>
        <p className="mt-6 max-w-xl text-[13px] leading-[1.82] text-[var(--muted)]">
          Todo lo que necesitas para crecer online, en una sola agencia.
        </p>
      </section>

      <section className="reveal section-pad section-alt !pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {services.map((service, i) => {
            const inner = (
              <>
                <span className={`min-w-6 font-[var(--font-syne)] text-[10px] font-bold ${i >= 6 ? "text-[#F5E614]/50" : "text-[#F5E614]/25"}`}>
                  {service.num}
                </span>
                <div>
                  <h2 className="font-[var(--font-syne)] text-sm font-semibold transition-colors group-hover:text-[#F5E614]">
                    {service.title}
                  </h2>
                  <p className="mt-1.5 text-[11px] leading-[1.7] text-[var(--muted)]">{service.desc}</p>
                  <p className="mt-3 text-[9px] uppercase tracking-[0.14em] text-[#F5E614]/60 opacity-0 transition-opacity group-hover:opacity-100">
                    Ver servicio →
                  </p>
                </div>
              </>
            );

            const className = `hover-card group flex gap-4 border-b border-[var(--border)] py-7 transition-all duration-[400ms] ease-out hover:pl-2.5 md:odd:border-r md:odd:pr-10 md:even:pl-10 md:even:hover:pl-12 ${i === 3 ? "bg-[#F5E614]/[0.04]" : ""}`;

            return (
              <Link key={service.num} href={service.href} className={className}>
                {inner}
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
