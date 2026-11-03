"use client";

import { useLang } from "@/lib/i18n";

const PHONE = "34672126363";

export default function WhatsAppButton() {
  const { lang } = useLang();
  const text =
    lang === "en"
      ? "Hi MYRAL! I found you on your website and I'd like to talk about a project."
      : "¡Hola MYRAL! Vengo de vuestra web y me gustaría hablar de un proyecto.";

  return (
    <a
      href={`https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="wa-float fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:scale-110 md:bottom-7 md:right-7"
    >
      <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor" aria-hidden>
        <path d="M16.04 3C9.4 3 4 8.33 4 14.9c0 2.3.66 4.45 1.82 6.28L4 29l8.04-2.1a12.2 12.2 0 0 0 4 .68c6.64 0 12.04-5.33 12.04-11.9C28.08 8.33 22.68 3 16.04 3Zm0 21.6c-1.3 0-2.58-.24-3.78-.7l-.27-.1-4.77 1.25 1.27-4.6-.18-.28a9.6 9.6 0 0 1-1.52-5.27c0-5.33 4.06-9.66 9.25-9.66s9.4 4.33 9.4 9.66-4.21 9.7-9.4 9.7Zm5.17-7.24c-.28-.14-1.68-.82-1.94-.92-.26-.1-.45-.14-.64.14-.19.28-.73.92-.9 1.1-.16.19-.33.21-.61.07-.28-.14-1.2-.44-2.28-1.4a8.5 8.5 0 0 1-1.58-1.94c-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.16.19-.28.28-.47.1-.19.05-.35-.02-.5-.07-.14-.64-1.53-.88-2.1-.23-.55-.47-.47-.64-.48h-.55c-.19 0-.5.07-.75.35-.26.28-.99.96-.99 2.34s1.01 2.72 1.15 2.9c.14.19 1.99 3 4.82 4.2.67.29 1.2.46 1.6.59.68.21 1.29.18 1.78.11.54-.08 1.68-.68 1.92-1.34.24-.66.24-1.22.17-1.34-.07-.12-.26-.19-.54-.33Z" />
      </svg>
    </a>
  );
}
