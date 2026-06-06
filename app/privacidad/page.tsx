export const metadata = {
  title: "Política de Privacidad — MYRAL Agency",
  description: "Información sobre el tratamiento de datos personales en MYRAL Agency.",
};

export default function PrivacidadPage() {
  return (
    <>
      <section className="reveal bg-[#05050b] px-6 py-32 md:px-[52px]">
        <p className="mb-6 text-[9px] uppercase tracking-[0.26em] text-[#F5E614]">Legal</p>
        <h1
          className="font-[var(--font-syne)] font-extrabold leading-[1] pb-[0.1em] overflow-visible tracking-[-0.025em] text-white"
          style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
        >
          Política de Privacidad
        </h1>
      </section>

      <section className="reveal bg-[#07070f] px-6 py-20 md:px-[52px]">
        <div className="mx-auto max-w-3xl space-y-10 text-[14px] leading-[1.85] text-[var(--muted)]">
          <div>
            <h2 className="mb-4 font-[var(--font-syne)] text-[20px] font-bold text-white">Responsable del tratamiento</h2>
            <p>
              Mateo Morales Tascón · MYRAL Agency
              <br />
              <a href="mailto:info@myralagency.com" className="text-[#F5E614] hover:opacity-70">
                info@myralagency.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-[var(--font-syne)] text-[20px] font-bold text-white">Datos que recogemos</h2>
            <p>
              Recogemos nombre, email y teléfono a través de formularios de contacto y de la plataforma de reservas
              Cal.com cuando solicitas un diagnóstico gratuito o te pones en contacto con nosotros.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-[var(--font-syne)] text-[20px] font-bold text-white">Finalidad</h2>
            <p>
              Gestionar consultas comerciales, responder a solicitudes de información y organizar diagnósticos
              gratuitos con potenciales clientes.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-[var(--font-syne)] text-[20px] font-bold text-white">Base legal</h2>
            <p>El tratamiento de tus datos se basa en el consentimiento que nos otorgas al enviar un formulario o reservar una llamada.</p>
          </div>

          <div>
            <h2 className="mb-4 font-[var(--font-syne)] text-[20px] font-bold text-white">Conservación</h2>
            <p>Conservamos tus datos mientras dure la relación comercial o hasta que solicites su supresión.</p>
          </div>

          <div>
            <h2 className="mb-4 font-[var(--font-syne)] text-[20px] font-bold text-white">Tus derechos</h2>
            <p>
              Puedes ejercer los derechos de acceso, rectificación, supresión y oposición escribiendo a{" "}
              <a href="mailto:info@myralagency.com" className="text-[#F5E614] hover:opacity-70">
                info@myralagency.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-[var(--font-syne)] text-[20px] font-bold text-white">Cesión a terceros</h2>
            <p>
              No cedemos tus datos a terceros salvo a los proveedores necesarios para prestar el servicio: Cal.com
              (gestión de reservas) y Google Analytics (análisis anónimo de navegación).
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-[var(--font-syne)] text-[20px] font-bold text-white">Google Analytics</h2>
            <p>
              Utilizamos Google Analytics para recoger datos anónimos de navegación y entender cómo se utiliza la web.
              Estos datos no permiten identificarte personalmente.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
