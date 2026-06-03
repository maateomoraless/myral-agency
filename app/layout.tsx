import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif, Syne } from "next/font/google";
import Script from "next/script";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CursorEffect from "@/components/effects/CursorEffect";
import RevealObserver from "@/components/effects/RevealObserver";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-instrument",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MYRAL Agency",
  description: "Agencia premium de crecimiento, contenido e inteligencia artificial.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${syne.variable} ${instrument.variable} ${dmSans.variable}`}>
        <Script id="cal-embed" strategy="afterInteractive">
          {`(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "diagnostico", {origin:"https://app.cal.com"});
Cal.ns.diagnostico("ui", {"hideEventTypeDetails":false,"layout":"month_view"});`}
        </Script>
        <CursorEffect />
        <RevealObserver />
        <Nav />
        <main style={{ paddingTop: 88 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
