import Link from "next/link";
export const metadata = { title: "Lab — MYRAL", robots: { index: false } };
const concepts = [
  ["/lab/a", "A", "Viewfinder", "La web es el visor de la cámara. REC, timecode, encuadre. Cada scroll, un clip."],
  ["/lab/b", "B", "Light table", "Una mesa de luz con fotogramas de todos los trabajos. Arrastras, miras, se mueven."],
  ["/lab/c", "C", "Channels", "Una tele. Cada scroll cambia de canal con ruido entre medias. Un canal por proyecto."],
  ["/", "0", "Index (actual)", "La versión de los nombres grandes, para comparar."],
];
export default function Lab() {
  return (
    <section className="no-reveal min-h-[100svh] bg-[#05050b] px-6 py-28 text-[#f0ede8] md:px-12">
      <p className="mono text-[10px] uppercase tracking-[0.2em] text-white/40">MYRAL lab — 3 conceptos</p>
      <ul className="mt-10 border-t border-white/10">
        {concepts.map(([href, n, name, desc]) => (
          <li key={href}>
            <Link href={href} data-cursor="focus" className="group grid grid-cols-[40px_1fr] gap-4 border-b border-white/10 py-8 md:grid-cols-[60px_1fr_1fr]">
              <span className="mono text-[#F5E614]">{n}</span>
              <span className="display text-[44px] leading-none transition-colors group-hover:text-[#F5E614] md:text-[64px]">{name}</span>
              <span className="mono col-start-2 text-[12px] leading-[1.6] text-white/60 md:col-start-3 md:self-center">{desc}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
