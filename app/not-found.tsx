import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="fixed inset-0 z-[100] flex min-h-screen flex-col items-center justify-center bg-[#05050b] px-6"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(245,230,20,0.07) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    >
      <span
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none font-[var(--font-syne)] font-extrabold leading-none"
        style={{
          fontSize: "clamp(120px, 20vw, 200px)",
          color: "rgba(240,237,232,0.05)",
        }}
        aria-hidden
      >
        404
      </span>

      <div className="relative z-10 flex flex-col items-center text-center">
        <Image
          src="/images/logo_myral_sin_fondo.png"
          alt="MYRAL Agency"
          width={120}
          height={120}
          priority
        />
        <h1 className="mt-8 font-[var(--font-syne)] text-[28px] font-extrabold text-white">
          Página no encontrada.
        </h1>
        <p className="mt-4 max-w-sm text-[14px] text-[var(--muted)]">
          Esta página no existe o ha sido movida. Vuelve al inicio.
        </p>
        <Link
          href="/"
          className="mt-8 bg-[#F5E614] px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#05050b] transition-opacity hover:opacity-90"
        >
          Volver al inicio →
        </Link>
      </div>
    </div>
  );
}
