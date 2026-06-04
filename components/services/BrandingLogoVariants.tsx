const logoVariants = [
  { bg: "bg-black", label: "Sobre negro", invert: false, yellowShadow: false },
  { bg: "bg-white", label: "Sobre blanco", invert: true, yellowShadow: false },
  { bg: "bg-[#F5E614]", label: "Sobre amarillo", invert: true, yellowShadow: true },
] as const;

export default function BrandingLogoVariants() {
  return (
    <div className="mt-12 flex flex-col items-center justify-center gap-8 md:flex-row md:gap-10">
      {logoVariants.map((variant) => (
        <div key={variant.label} className="flex flex-col items-center">
          <div
            className={`flex items-center justify-center rounded-lg p-10 transition-all duration-300 ease-out hover:scale-105 ${
              variant.yellowShadow
                ? "hover:shadow-[0_20px_60px_rgba(245,230,20,0.3)]"
                : "hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
            } ${variant.bg}`}
          >
            <img
              src="/images/logo_myral_sin_fondo.png"
              alt="MYRAL"
              width={200}
              height={80}
              className="h-auto w-[200px] object-contain"
              style={variant.invert ? { filter: "invert(1)" } : undefined}
            />
          </div>
          <p className="mt-4 text-[9px] uppercase tracking-[0.14em] text-[var(--muted)]">
            {variant.label}
          </p>
        </div>
      ))}
    </div>
  );
}
