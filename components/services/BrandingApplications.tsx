const mockupHover =
  "transition-all duration-[400ms] ease-out hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(0,0,0,0.5)]";

function BusinessCardMockup() {
  return (
    <div
      className={`mx-auto w-full max-w-[320px] overflow-hidden rounded-lg bg-white shadow-[0_12px_40px_rgba(0,0,0,0.35)] ${mockupHover}`}
    >
      <div className="flex h-[180px] flex-col p-5">
        <img
          src="/images/logo_myral_sin_fondo.png"
          alt="MYRAL"
          className="h-7 w-auto object-contain object-left [filter:invert(1)]"
        />
        <p className="mt-auto font-[var(--font-syne)] text-[13px] font-bold text-[#05050b]">
          Carlos Fernández
        </p>
        <p className="text-[11px] text-[#666]">Director Creativo</p>
        <p className="mt-1 text-[10px] text-[#888]">carlos@myralagency.com</p>
        <div className="mt-3 h-0.5 w-full bg-[#F5E614]" />
      </div>
    </div>
  );
}

function EmailSignatureMockup() {
  return (
    <div
      className={`mx-auto w-full max-w-[320px] overflow-hidden rounded-lg border border-[#222] bg-[#0a0a0a] p-5 shadow-[0_12px_40px_rgba(0,0,0,0.35)] ${mockupHover}`}
    >
      <div className="flex gap-4 border-l-2 border-[#F5E614] pl-4">
        <img
          src="/images/logo_myral_sin_fondo.png"
          alt="MYRAL"
          className="h-10 w-auto shrink-0 object-contain"
        />
        <div className="min-w-0">
          <p className="font-[var(--font-syne)] text-[13px] font-bold text-white">Laura Martínez</p>
          <p className="text-[11px] text-[var(--muted)]">Directora de Marketing · MYRAL Agency</p>
          <p className="mt-2 text-[10px] text-[#F5E614]">laura@myralagency.com</p>
          <p className="text-[10px] text-[var(--muted)]">+34 672 126 363</p>
        </div>
      </div>
    </div>
  );
}

function InstagramPostMockup() {
  return (
    <div
      className={`mx-auto flex h-[280px] w-[280px] flex-col items-center justify-center rounded-lg bg-black shadow-[0_12px_40px_rgba(0,0,0,0.35)] ${mockupHover}`}
    >
      <img
        src="/images/logo_myral_sin_fondo.png"
        alt="MYRAL"
        className="w-[140px] object-contain"
      />
      <div className="mt-6 h-0.5 w-16 bg-[#F5E614]" />
    </div>
  );
}

export default function BrandingApplications() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
      <article className="flex flex-col items-center">
        <BusinessCardMockup />
        <p className="mt-4 text-center text-[9px] uppercase tracking-[0.14em] text-[var(--muted)]">
          Tarjeta de visita
        </p>
      </article>
      <article className="flex flex-col items-center">
        <EmailSignatureMockup />
        <p className="mt-4 text-center text-[9px] uppercase tracking-[0.14em] text-[var(--muted)]">
          Firma de email
        </p>
      </article>
      <article className="flex flex-col items-center">
        <InstagramPostMockup />
        <p className="mt-4 text-center text-[9px] uppercase tracking-[0.14em] text-[var(--muted)]">
          Post Instagram
        </p>
      </article>
    </div>
  );
}
