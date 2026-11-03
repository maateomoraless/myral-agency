"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

export type Lang = "es" | "en";

const STORAGE_KEY = "myral-lang";
const ATTRS = ["placeholder", "aria-label", "alt", "title"] as const;

type Dict = Record<string, string>;

type LangCtx = { lang: Lang; setLang: (l: Lang) => void; t: (s: string) => string };

const Ctx = createContext<LangCtx>({ lang: "es", setLang: () => {}, t: (s) => s });

export const useLang = () => useContext(Ctx);

const norm = (s: string) => s.replace(/\s+/g, " ").trim();

function readLang(): Lang {
  try {
    const q = new URLSearchParams(window.location.search).get("lang");
    if (q === "en" || q === "es") {
      localStorage.setItem(STORAGE_KEY, q);
      return q;
    }
    return localStorage.getItem(STORAGE_KEY) === "en" ? "en" : "es";
  } catch {
    return "es";
  }
}

function translateDom(dict: Dict) {
  const tr = (raw: string) => {
    const key = norm(raw);
    if (!key) return null;
    const v = dict[key];
    if (!v || v === key) return null;
    const lead = raw.match(/^\s*/)?.[0] ?? "";
    const trail = raw.match(/\s*$/)?.[0] ?? "";
    return lead + v + trail;
  };

  const doText = (node: Node) => {
    const p = node.parentElement;
    if (!p || p.closest("script,style,noscript,[data-no-translate]")) return;
    const v = tr(node.nodeValue ?? "");
    if (v !== null) node.nodeValue = v;
  };

  const doEl = (el: Element) => {
    for (const a of ATTRS) {
      const cur = el.getAttribute(a);
      if (cur) {
        const v = tr(cur);
        if (v !== null) el.setAttribute(a, v);
      }
    }
    if (el instanceof HTMLMetaElement && (el.name === "description" || el.getAttribute("property")?.startsWith("og:"))) {
      const v = tr(el.content);
      if (v !== null) el.content = v;
    }
  };

  const walk = (root: Node) => {
    if (root.nodeType === Node.TEXT_NODE) return doText(root);
    if (!(root instanceof Element)) return;
    doEl(root);
    root.querySelectorAll("*").forEach(doEl);
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let n: Node | null;
    while ((n = w.nextNode())) doText(n);
  };

  walk(document.head);
  walk(document.body);

  const mo = new MutationObserver((muts) => {
    for (const m of muts) {
      if (m.type === "characterData") doText(m.target);
      else if (m.type === "attributes" && m.target instanceof Element) doEl(m.target);
      else m.addedNodes.forEach(walk);
    }
  });
  mo.observe(document.documentElement, {
    subtree: true,
    childList: true,
    characterData: true,
    attributes: true,
    attributeFilter: [...ATTRS, "content"],
  });
  return () => mo.disconnect();
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");
  const [dict, setDict] = useState<Dict | null>(null);

  useEffect(() => {
    const l = readLang();
    if (l !== "en") {
      document.documentElement.classList.add("i18n-ready");
      return;
    }
    setLangState("en");
    document.documentElement.lang = "en";
    let stop: (() => void) | undefined;
    let cancelled = false;
    import("./i18n-en").then(({ en }) => {
      if (cancelled) return;
      setDict(en);
      stop = translateDom(en);
      document.documentElement.classList.add("i18n-ready");
    });
    return () => {
      cancelled = true;
      stop?.();
    };
  }, []);

  const setLang = useCallback((l: Lang) => {
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {}
    const url = new URL(window.location.href);
    url.searchParams.delete("lang");
    window.location.href = url.toString();
  }, []);

  const t = useCallback((s: string) => (dict && dict[norm(s)]) || s, [dict]);

  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
}

export function LangSwitch({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  const btn = (l: Lang) => (
    <button
      type="button"
      data-no-translate
      onClick={() => l !== lang && setLang(l)}
      aria-pressed={lang === l}
      className={`transition-colors ${lang === l ? "text-[#F5E614]" : "text-white/45 hover:text-white"}`}
    >
      {l.toUpperCase()}
    </button>
  );
  return (
    <div data-no-translate className={`flex items-center gap-1.5 text-[10px] tracking-[0.16em] ${className}`}>
      {btn("es")}
      <span className="text-white/20">/</span>
      {btn("en")}
    </div>
  );
}
