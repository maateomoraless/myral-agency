import { notFound } from "next/navigation";
import type { Metadata } from "next";
import HeroWordReveal from "@/components/effects/HeroWordReveal";
import { CaseStudyIntro, CaseStudyWhatWeDid, CaseStudyCta } from "@/components/case-study/CaseStudySections";
import Link from "next/link";
import { cases, getCase } from "@/lib/cases";

export const dynamicParams = false;

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) return {};
  return { title: `${c.title} × MYRAL Agency`, description: c.metaDescription };
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) notFound();
  const wide = (c.films ?? []).filter((f) => !f.vertical);
  const tall = (c.films ?? []).filter((f) => f.vertical);

  return (
    <>
      <section className="relative min-h-screen overflow-hidden no-media-hover-wrap">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={c.heroPoster}
          aria-label={c.title}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={c.heroVideo} type="video/mp4" />
        </video>
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(5,5,11,0.2) 0%, transparent 35%, rgba(5,5,11,0.9) 100%)" }}
        />
        <div className="relative z-10 flex min-h-screen flex-col justify-end px-6 pb-20 pt-32 md:px-[52px]">
          <span className="mb-4 text-[9px] uppercase tracking-[0.18em] text-[#F5E614]">{c.badge}</span>
          <HeroWordReveal
            text={c.title}
            as="h1"
            className="hero-title-96 font-[var(--font-syne)] font-extrabold tracking-[-0.025em] text-white"
          />
          <HeroWordReveal
            text={c.subtitle}
            as="p"
            className="mt-4 font-[var(--font-instrument)] text-[clamp(1.25rem,3vw,2rem)] italic text-[#F5E614]"
          />
        </div>
      </section>

      <CaseStudyIntro>{c.intro}</CaseStudyIntro>

      {wide.length > 0 && (
        <section className="border-t border-[var(--border)] bg-[#05050b] px-6 py-24 md:px-[52px]">
          <h2 className="mb-10 font-[var(--font-syne)] text-4xl font-extrabold text-white">
            {wide.length > 1 ? "Los vídeos." : "El vídeo."}
          </h2>
          <div className="space-y-12">
            {wide.map((f) => (
              <figure key={f.src} className="w-full">
                <video controls playsInline preload="none" poster={f.poster} className="aspect-video w-full rounded-sm bg-black object-cover">
                  <source src={f.src} type="video/mp4" />
                </video>
                <figcaption className="mt-3 text-[9px] uppercase tracking-[0.16em] text-[var(--muted)]">{f.title}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {tall.length > 0 && (
        <section className="border-t border-[var(--border)] bg-[#05050b] px-6 py-24 md:px-[52px]">
          <h2 className="mb-10 font-[var(--font-syne)] text-4xl font-extrabold text-white">
            {tall.length > 1 ? "Reels." : "El reel."}
          </h2>
          <div
            className={
              tall.length === 1
                ? "mx-auto max-w-[380px]"
                : "grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
            }
          >
            {tall.map((f) => (
              <figure key={f.src}>
                <video controls playsInline preload="none" poster={f.poster} className="aspect-[9/16] w-full rounded-sm bg-black object-cover">
                  <source src={f.src} type="video/mp4" />
                </video>
                <figcaption className="mt-3 text-[9px] uppercase tracking-[0.16em] text-[var(--muted)]">{f.title}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <CaseStudyWhatWeDid items={c.whatWeDid} />

      {c.gallery.length > 0 && (
      <section className="border-t border-[var(--border)] bg-[#07070f] px-6 py-24 md:px-[52px]">
        <h2 className="mb-10 font-[var(--font-syne)] text-4xl font-extrabold text-white">
          {c.galleryTitle ?? "El trabajo."}
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {c.gallery.map((m) => (
            <figure key={m.src} className="overflow-hidden rounded-sm">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#111]">
                {m.type === "video" ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={m.poster}
                    className="absolute inset-0 h-full w-full object-cover"
                  >
                    <source src={m.src} type="video/mp4" />
                  </video>
                ) : (
                  <img src={m.src} alt={c.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                )}
              </div>
              {m.label && (
                <figcaption className="mt-3 text-[9px] uppercase tracking-[0.16em] text-[var(--muted)]">{m.label}</figcaption>
              )}
            </figure>
          ))}
        </div>
        {c.link && (
          <Link
            href={c.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-block text-[11px] uppercase tracking-[0.16em] text-[#F5E614] transition-opacity hover:opacity-70"
          >
            {c.link.label}
          </Link>
        )}
      </section>
      )}

      <CaseStudyCta title={c.cta} />
    </>
  );
}
