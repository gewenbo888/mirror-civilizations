"use client";

import { useEffect, useState, useCallback } from "react";

export type Lang = "en" | "zh";
const KEY = "mc.lang";

function detect(): Lang {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(KEY);
  if (stored === "en" || stored === "zh") return stored;
  const nav = (navigator.language || "").toLowerCase();
  return nav.startsWith("zh") ? "zh" : "en";
}

export function useLang(): [Lang, (l: Lang) => void] {
  const [lang, setLangState] = useState<Lang>("en");
  useEffect(() => {
    const n = detect();
    setLangState(n);
    document.documentElement.setAttribute("data-lang", n);
  }, []);
  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(KEY, l);
      document.documentElement.setAttribute("data-lang", l);
    }
  }, []);
  return [lang, setLang];
}

export function LangToggle({ className = "" }: { className?: string }) {
  const [lang, setLang] = useLang();
  return (
    <div className={`inline-flex items-center gap-1 rounded-full border border-ink-950/15 bg-parchment-50/80 backdrop-blur px-1 py-1 text-xs font-mono uppercase tracking-widest ${className}`}>
      <button
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`px-2 py-0.5 rounded-full transition ${lang === "en" ? "bg-ink-950 text-parchment-50" : "text-ink-900 hover:text-ink-950"}`}
      >EN</button>
      <button
        onClick={() => setLang("zh")}
        aria-pressed={lang === "zh"}
        className={`px-2 py-0.5 rounded-full transition font-han ${lang === "zh" ? "bg-ink-950 text-parchment-50" : "text-ink-900 hover:text-ink-950"}`}
      >中</button>
    </div>
  );
}
