import type { ReactNode } from "react";

type CaseHeroProps = {
  badge: string;
  title: string;
  subtitle: string;
  children: ReactNode;
};

export function CaseHero({ badge, title, subtitle, children }: CaseHeroProps) {
  return (
    <section className="relative min-h-[70vh] overflow-hidden md:min-h-[85vh]">
      {children}
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/20" />
      <div className="absolute bottom-0 left-0 right-0 section-pad !pb-16 !pt-32">
        <span className="mb-4 inline-block border border-yellow/30 bg-yellow/10 px-3 py-1 text-[9px] uppercase tracking-[0.18em] text-yellow">
          {badge}
        </span>
        <h1 className="heading-display max-w-4xl">{title}</h1>
        <p className="mt-4 max-w-xl font-instrument text-[clamp(1.25rem,3vw,2rem)] italic text-yellow">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

export function CaseHeroImage({ src, alt }: { src: string; alt: string }) {
  return (
    <>
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-bg/50" />
    </>
  );
}

export function CaseHeroDark({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#111111]">
      <span className="font-syne text-[clamp(3rem,12vw,8rem)] font-extrabold text-white opacity-[0.08]">
        {title}
      </span>
      {subtitle && (
        <span className="mt-4 text-[9px] uppercase tracking-[0.2em] text-cream/30">
          {subtitle}
        </span>
      )}
      <div className="absolute inset-0 bg-bg/60" />
    </div>
  );
}

export function CaseHeroGradient({ label }: { label: string }) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{
        background:
          "linear-gradient(135deg, #05050b 0%, #0a0a14 45%, #12121f 100%)",
      }}
    >
      <p className="text-center font-syne text-2xl font-bold uppercase tracking-[0.22em] text-white md:text-4xl">
        {label}
      </p>
      <div className="absolute inset-0 bg-bg/40" />
    </div>
  );
}
