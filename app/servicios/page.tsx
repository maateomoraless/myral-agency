import Link from "next/link";

const services = [
  { num: "01", title: "Gestión de Redes Sociales", desc: "Estrategia, calendarios y gestión completa de Instagram, TikTok y LinkedIn.", href: "/servicios/gestion-redes-sociales" },
  { num: "02", title: "Producción de Contenido", desc: "Fotografía, vídeo y reels de nivel profesional." },
  { num: "03", title: "Publicidad Digital", desc: "Campañas Meta Ads y Google Ads. Cada euro con retorno medible." },
  { num: "04", title: "Branding e Identidad Visual", desc: "Nombre, logo, colores, tono." },
  { num: "05", title: "Gestión y Producción de Eventos", desc: "Desde la conceptualización hasta la cobertura audiovisual." },
  { num: "06", title: "Influencer Marketing", desc: "Alcance real, no vanity metrics." },
  { num: "07", title: "Automatización con IA ★", desc: "Tu negocio trabajando 24/7 sin intervención manual." },
  { num: "08", title: "Creación de Webs & Apps ★", desc: "Rápidas, bonitas y conectadas con IA desde el primer día." },
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
                  {"href" in service && service.href && (
                    <p className="mt-3 text-[9px] uppercase tracking-[0.14em] text-[#F5E614]/60 opacity-0 transition-opacity group-hover:opacity-100">
                      Ver servicio →
                    </p>
                  )}
                </div>
              </>
            );

            const className = `group flex gap-4 border-b border-[var(--border)] py-7 transition-all duration-[400ms] ease-out hover:pl-2.5 md:odd:border-r md:odd:pr-10 md:even:pl-10 md:even:hover:pl-12 ${i >= 6 ? "border border-[#F5E614]/15 bg-[#F5E614]/[0.04] px-5" : ""}`;

            if ("href" in service && service.href) {
              return (
                <Link key={service.num} href={service.href} className={className}>
                  {inner}
                </Link>
              );
            }

            return (
              <article key={service.num} className={className}>
                {inner}
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
