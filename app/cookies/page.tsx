export const metadata = {
  title: "Política de Cookies — MYRAL Agency",
  description: "Información sobre el uso de cookies en myralagency.com y cómo gestionar tus preferencias.",
};

export default function CookiesPage() {
  return (
    <>
      <section className="reveal bg-[#05050b] px-6 py-32 md:px-[52px]">
        <p className="mb-6 text-[9px] uppercase tracking-[0.26em] text-[#F5E614]">Legal</p>
        <h1
          className="font-[var(--font-syne)] font-extrabold leading-[1] pb-[0.1em] overflow-visible tracking-[-0.025em] text-white"
          style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
        >
          Política de Cookies
        </h1>
      </section>

      <section className="reveal bg-[#07070f] px-6 py-20 md:px-[52px]">
        <div className="mx-auto max-w-3xl space-y-10 text-[14px] leading-[1.85] text-[var(--muted)]">
          <div>
            <h2 className="mb-4 font-[var(--font-syne)] text-[20px] font-bold text-white">Cookies técnicas propias</h2>
            <p>
              Son necesarias para el funcionamiento básico de la web: recordar preferencias de cookies, mantener la
              sesión y garantizar la seguridad. No requieren consentimiento previo.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-[var(--font-syne)] text-[20px] font-bold text-white">Cookies de análisis</h2>
            <p>
              Utilizamos Google Analytics (GA4) para medir el tráfico de la web de forma anónima: páginas visitadas,
              tiempo de permanencia y origen de las visitas. Solo se activan si aceptas todas las cookies desde el
              banner.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-[var(--font-syne)] text-[20px] font-bold text-white">Cookies de terceros</h2>
            <p>
              Cal.com instala cookies propias cuando reservas una llamada de diagnóstico a través de su widget
              integrado en la web. Son necesarias para gestionar la reserva y el calendario.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-[var(--font-syne)] text-[20px] font-bold text-white">¿Cómo desactivarlas?</h2>
            <p className="mb-4">
              Puedes rechazar las cookies no técnicas desde el banner de cookies. También puedes configurar tu
              navegador:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-white">Chrome:</strong> Configuración → Privacidad y seguridad → Cookies y
                otros datos de sitios
              </li>
              <li>
                <strong className="text-white">Safari:</strong> Preferencias → Privacidad → Gestionar datos de sitios
                web
              </li>
              <li>
                <strong className="text-white">Firefox:</strong> Opciones → Privacidad y seguridad → Cookies y datos
                del sitio
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 font-[var(--font-syne)] text-[20px] font-bold text-white">Base legal</h2>
            <p>
              Las cookies técnicas se instalan por interés legítimo. Las cookies de análisis y de terceros no técnicas
              requieren tu consentimiento, que puedes retirar en cualquier momento eliminando las cookies o rechazándolas
              desde el banner.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
