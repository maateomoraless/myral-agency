export const metadata = {
  title: "Aviso Legal — MYRAL Agency",
  description: "Información legal sobre el titular y condiciones de uso de myralagency.com.",
};

export default function AvisoLegalPage() {
  return (
    <>
      <section className="reveal bg-[#05050b] px-6 py-32 md:px-[52px]">
        <p className="mb-6 text-[9px] uppercase tracking-[0.26em] text-[#F5E614]">Legal</p>
        <h1
          className="font-[var(--font-syne)] font-extrabold leading-[1] pb-[0.1em] overflow-visible tracking-[-0.025em] text-white"
          style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
        >
          Aviso Legal
        </h1>
      </section>

      <section className="reveal bg-[#07070f] px-6 py-20 md:px-[52px]">
        <div className="mx-auto max-w-3xl space-y-10 text-[14px] leading-[1.85] text-[var(--muted)]">
          <div>
            <h2 className="mb-4 font-[var(--font-syne)] text-[20px] font-bold text-white">Datos identificativos</h2>
            <ul className="space-y-2">
              <li>
                <strong className="text-white">Titular:</strong> Mateo Morales Tascón · MYRAL Agency
              </li>
              <li>
                <strong className="text-white">Domicilio:</strong> León, España
              </li>
              <li>
                <strong className="text-white">Email:</strong>{" "}
                <a href="mailto:info@myralagency.com" className="text-[#F5E614] hover:opacity-70">
                  info@myralagency.com
                </a>
              </li>
              <li>
                <strong className="text-white">Web:</strong> myralagency.com
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 font-[var(--font-syne)] text-[20px] font-bold text-white">Objeto</h2>
            <p>
              El presente sitio web tiene por objeto informar sobre la prestación de servicios de marketing digital,
              branding y automatización con inteligencia artificial por parte de MYRAL Agency.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-[var(--font-syne)] text-[20px] font-bold text-white">Propiedad intelectual</h2>
            <p>
              Todos los contenidos de esta web — textos, imágenes, vídeos, logotipos y diseño — son propiedad de MYRAL
              Agency o de sus respectivos titulares. Queda prohibida su reproducción, distribución o modificación sin
              autorización expresa.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-[var(--font-syne)] text-[20px] font-bold text-white">Legislación aplicable</h2>
            <p>
              Este aviso legal se rige por la legislación española. Para cualquier controversia, las partes se someten
              a los juzgados y tribunales de León, salvo disposición legal en contrario.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
