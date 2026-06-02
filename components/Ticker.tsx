const items = [
  "Branding",
  "Social Media",
  "Webs & Apps",
  "Automatización IA",
  "Meta Ads",
  "Contenido Visual",
  "Influencer Marketing",
  "Gestión de Eventos",
];

function Row() {
  return (
    <>
      {items.map((item) => (
        <span key={item} className="flex shrink-0 items-center">
          <span className="mx-6 text-[9px] uppercase tracking-[0.22em] text-yellow/40">
            {item}
          </span>
          <span className="text-[9px] text-yellow/40">·</span>
        </span>
      ))}
    </>
  );
}

export function Ticker() {
  return (
    <div className="overflow-hidden border-y border-[rgba(226,255,93,0.1)] bg-bg2 py-3">
      <div className="ticker-track flex w-max whitespace-nowrap">
        <div className="flex">
          <Row />
        </div>
        <div className="flex" aria-hidden>
          <Row />
        </div>
      </div>
    </div>
  );
}
