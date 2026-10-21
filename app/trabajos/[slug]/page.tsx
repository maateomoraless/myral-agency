import { notFound } from "next/navigation";
import Link from "next/link";
import FinalCta from "@/components/FinalCta";
import CaseGalleryVideo from "@/components/case-study/CaseGalleryVideo";
import { cases, getCase } from "@/lib/cases";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) return {};
  return {
    title: `${c.title} — MYRAL Agency`,
    description: c.intro.slice(0, 155),
    openGraph: { images: [{ url: c.heroPoster }] },
  };
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) notFound();

  return (
    <>
      <section className="no-reveal relative min-h-[100svh] overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={c.heroVideo}
          poster={c.heroPoster}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05050b] via-[#05050b]/40 to-[#05050b]/20" />
        <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-6 pb-16 md:px-[52px] md:pb-24">
          <p className="mb-5 flex items-center gap-2 text-[9px] uppercase tracking-[0.26em] text-[#F5E614]">
            <span className="h-[6px] w-[6px] rounded-full bg-[#F5E614]" />
            {c.eyebrow}
          </p>
          <h1 className="hero-title-96 font-[var(--font-syne)] font-extrabold tracking-[-0.025em] text-white">{c.title}</h1>
          <p
            className="mt-2 font-[var(--font-instrument)] italic text-[#F5E614]"
            style={{ fontSize: "clamp(26px, 3.6vw, 44px)", lineHeight: 1.1 }}
          >
            {c.tagline}
          </p>
        </div>
      </section>

      <section className="section-pad reveal-section">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <p className="reveal-item max-w-2xl text-[15px] leading-[1.9] text-white/75">{c.intro}</p>
          <dl className="reveal-item grid grid-cols-1 gap-6 border-t border-[var(--border)] pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            {c.facts.map((f) => (
              <div key={f.label}>
                <dt className="text-[9px] uppercase tracking-[0.22em] text-[var(--muted)]">{f.label}</dt>
                <dd className="mt-1.5 font-[var(--font-syne)] text-[17px] font-semibold text-white">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="reveal bg-[#05050b] px-6 pb-24 md:px-[52px]">
        <div
          className={`grid gap-3 ${
            c.gallery.length === 1
              ? "grid-cols-1 sm:mx-auto sm:max-w-md"
              : c.gallery.length === 2
                ? "grid-cols-2"
                : "grid-cols-2 lg:grid-cols-4"
          }`}
        >
          {c.gallery.map((v) => (
            <CaseGalleryVideo key={v.src} {...v} />
          ))}
        </div>
      </section>

      <section className="section-pad section-alt reveal-section">
        <h2 className="reveal-item font-[var(--font-syne)] text-[32px] font-extrabold text-white">Lo que hicimos.</h2>
        <ul className="reveal-item mt-10 max-w-3xl">
          {c.whatWeDid.map((item, i) => (
            <li key={item} className="flex gap-6 border-b border-[var(--border)] py-5 text-[14px] text-white/80">
              <span className="w-6 shrink-0 font-[var(--font-syne)] text-[11px] font-bold text-[#F5E614]/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {c.extra && (
        <section id={c.extra.id} className="section-pad reveal-section scroll-mt-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="reveal-item">
              <p className="mb-4 text-[9px] uppercase tracking-[0.26em] text-[#F5E614]">También</p>
              <h2 className="font-[var(--font-syne)] text-[32px] font-extrabold text-white">{c.extra.title}</h2>
              <p className="mt-5 max-w-md text-[14px] leading-[1.85] text-[var(--muted)]">{c.extra.text}</p>
            </div>
            <div className="reveal-item sm:max-w-sm">
              <CaseGalleryVideo {...c.extra.video} />
            </div>
          </div>
        </section>
      )}

      <section className="no-reveal border-t border-[var(--border)] px-6 py-10 md:px-[52px]">
        <Link
          href="/trabajos"
          className="text-[10px] uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-[#F5E614]"
        >
          ← Todo el trabajo
        </Link>
      </section>

      <FinalCta title={c.cta} />
    </>
  );
}
