import { CalButton } from "@/components/CalButton";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";
import type { ReactNode } from "react";

export function CaseSection({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <section className="section-pad border-t border-border">
      <div className="mx-auto max-w-3xl">
        {title && (
          <Reveal>
            <h2 className="mb-6 font-syne text-2xl font-bold text-cream md:text-3xl">
              {title}
            </h2>
          </Reveal>
        )}
        <Reveal delay={1}>
          <div className="space-y-4 text-[14px] leading-[1.85] text-muted">
            {children}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function CaseList({ items }: { items: string[] }) {
  return (
    <section className="section-pad border-t border-border bg-bg2">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="mb-8 font-syne text-2xl font-bold text-cream md:text-3xl">
            Lo que hicimos
          </h2>
        </Reveal>
        <ul className="space-y-4">
          {items.map((item, i) => (
            <Reveal key={item} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <li className="flex gap-4 border-b border-border pb-4 text-[14px] leading-[1.7] text-cream/80">
                <span className="text-yellow">→</span>
                {item}
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function CaseStats({
  stats,
  children,
}: {
  stats: { value: string; label: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="section-pad border-t border-border">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="mb-10 font-syne text-2xl font-bold text-cream md:text-3xl">
            El resultado
          </h2>
        </Reveal>
        <div className="mb-10 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="bg-bg p-6">
                <div className="font-syne text-3xl font-extrabold text-yellow md:text-4xl">
                  {s.value}
                </div>
                <div className="mt-2 text-[9px] uppercase tracking-[0.16em] text-muted">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        {children && (
          <Reveal delay={2}>
            <p className="text-[14px] leading-[1.85] text-muted">{children}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

export function CaseLink({ href, label }: { href: string; label: string }) {
  return (
    <section className="section-pad border-t border-border bg-bg2">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] uppercase tracking-[0.16em] text-yellow transition-opacity hover:opacity-70"
          >
            {label}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function CaseCTA() {
  return (
    <section className="section-pad border-t border-border">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="mb-6 text-[13px] text-muted">
            ¿Quieres resultados como estos para tu negocio?
          </p>
          <CalButton className="cursor-pointer bg-yellow px-8 py-4 font-syne text-[10px] font-bold uppercase tracking-[0.18em] text-bg transition-opacity hover:opacity-85">
            Reservar llamada gratuita →
          </CalButton>
        </Reveal>
      </div>
    </section>
  );
}

export function CaseBeforeAfter() {
  return (
    <section className="section-pad border-t border-border bg-bg2">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="mb-8 font-syne text-2xl font-bold text-cream md:text-3xl">
            Antes y después
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">
          <Reveal delay={1}>
            <div className="relative aspect-[4/5] overflow-hidden bg-bg sm:aspect-[3/4]">
              <img
                src="/images/cervantes-antes.png"
                alt="Antes"
                loading="lazy"
                className="h-full w-full object-cover object-top"
              />
              <span className="absolute left-4 top-4 bg-bg/85 px-2.5 py-1 text-[8px] uppercase tracking-[0.18em] text-cream/50">
                Antes
              </span>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <div className="relative aspect-[4/5] overflow-hidden bg-bg sm:aspect-[3/4]">
              <img
                src="/images/cervantes-despues.png"
                alt="Después"
                loading="lazy"
                className="h-full w-full object-cover object-top"
              />
              <span className="absolute left-4 top-4 border border-yellow/30 bg-yellow/15 px-2.5 py-1 text-[8px] uppercase tracking-[0.18em] text-yellow">
                Después
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
