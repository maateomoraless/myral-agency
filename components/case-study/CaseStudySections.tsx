import Link from "next/link";
import CaseStudyResultsStats from "./CaseStudyResultsStats";
import type { AnimatedStatItem } from "@/components/effects/AnimatedCounter";

export function CaseStudyIntro({ children }: { children: React.ReactNode }) {
  return (
    <section className="section-pad reveal">
      <p className="max-w-3xl text-[14px] leading-[1.85] text-[var(--muted)]">{children}</p>
    </section>
  );
}

export function CaseStudyReto({ children }: { children: React.ReactNode }) {
  return (
    <section className="section-pad section-alt reveal">
      <h2 className="mb-6 font-[var(--font-syne)] text-3xl font-extrabold">El reto</h2>
      <p className="max-w-3xl text-[14px] leading-[1.85] text-[var(--muted)]">{children}</p>
    </section>
  );
}

export function CaseStudyWhatWeDid({ items }: { items: string[] }) {
  return (
    <section className="section-pad reveal">
      <h2 className="mb-8 font-[var(--font-syne)] text-3xl font-extrabold">Lo que hicimos</h2>
      <ul className="max-w-3xl space-y-4">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-4 border-b border-[var(--border)] pb-4 text-[14px] text-white/80"
          >
            <span className="text-[#F5E614]">→</span>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function CaseStudyResults({
  stats,
  quote,
  link,
}: {
  stats?: AnimatedStatItem[];
  quote?: string;
  link?: { href: string; label: string };
}) {
  return (
    <section className="section-pad section-alt reveal">
      <h2 className="mb-8 font-[var(--font-syne)] text-3xl font-extrabold">El resultado</h2>
      {stats && stats.length > 0 && (
        <CaseStudyResultsStats items={stats} className={quote ? "mb-8" : ""} />
      )}
      {quote && (
        <p className="max-w-3xl text-[14px] leading-[1.85] text-[var(--muted)]">{quote}</p>
      )}
      {link && (
        <Link
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          className="mt-8 inline-block text-[11px] uppercase tracking-[0.16em] text-[#F5E614]"
        >
          {link.label}
        </Link>
      )}
    </section>
  );
}

export function CaseStudyCta() {
  return (
    <section className="section-pad reveal text-center">
      <button
        type="button"
        data-cal-link="myralagency/diagnostico"
        data-cal-namespace="diagnostico"
        data-cal-config='{"layout":"month_view"}'
        className="btn-yellow bg-[#F5E614] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-black"
      >
        Reservar llamada gratuita →
      </button>
    </section>
  );
}

export function CaseStudyImageHero({
  src,
  alt,
  badge,
  title,
  subtitle,
  gradient = false,
}: {
  src: string;
  alt: string;
  badge: string;
  title: string;
  subtitle: string;
  gradient?: boolean;
}) {
  return (
    <section className="relative min-h-[85vh] overflow-hidden no-media-hover-wrap">
      <img src={src} alt={alt} loading="lazy" className="no-media-hover absolute inset-0 h-full w-full object-cover" />
      <div
        className={`absolute inset-0 ${gradient ? "bg-gradient-to-t from-black/80 via-black/50 to-black/30" : "bg-black/55"}`}
      />
      <div className="section-pad relative z-10 flex min-h-[85vh] flex-col justify-end">
        <span className="mb-4 inline-block border border-[#F5E614]/30 bg-[#F5E614]/10 px-3 py-1 text-[9px] uppercase tracking-[0.18em] text-[#F5E614]">
          {badge}
        </span>
        <h1 className="title-display">{title}</h1>
        <p className="mt-4 font-[var(--font-instrument)] text-[clamp(1.25rem,3vw,2rem)] italic text-[#F5E614]">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

export function CaseStudyTextHero({
  watermark,
  badge,
  title,
  subtitle,
}: {
  watermark: string;
  badge: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative min-h-[85vh] overflow-hidden no-media-hover-wrap bg-[#111]">
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <span className="text-center font-[var(--font-syne)] text-[clamp(1.5rem,6vw,5rem)] font-extrabold uppercase leading-tight tracking-[0.12em] text-white/[0.08]">
          {watermark}
        </span>
      </div>
      <div className="absolute inset-0 bg-black/45" />
      <div className="section-pad relative z-10 flex min-h-[85vh] flex-col justify-end">
        <span className="mb-4 inline-block border border-[#F5E614]/30 bg-[#F5E614]/10 px-3 py-1 text-[9px] uppercase tracking-[0.18em] text-[#F5E614]">
          {badge}
        </span>
        <h1 className="title-display">{title}</h1>
        <p className="mt-4 font-[var(--font-instrument)] text-[clamp(1.25rem,3vw,2rem)] italic text-[#F5E614]">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
