type FinalCtaProps = {
  title: string;
  className?: string;
};

export default function FinalCta({ title, className = "" }: FinalCtaProps) {
  return (
    <section
      className={`border-t border-[var(--border)] bg-[#05050b] px-6 py-24 text-center md:px-[52px] ${className}`.trim()}
    >
      <p className="mb-6 text-[9px] uppercase tracking-widest text-[#F5E614]">— MYRAL Agency</p>
      <h2
        className="cta-heading mx-auto max-w-xl font-[var(--font-syne)] font-extrabold text-white"
        style={{ fontSize: "clamp(28px, 3.5vw, 42px)" }}
      >
        {title}
      </h2>
      <button
        type="button"
        data-cal-link="myralagency/diagnostico"
        data-cal-namespace="diagnostico"
        data-cal-config='{"layout":"month_view"}'
        className="mt-10 bg-[#F5E614] px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#05050b] transition-opacity hover:opacity-90"
      >
        Reservar llamada gratuita →
      </button>
    </section>
  );
}
