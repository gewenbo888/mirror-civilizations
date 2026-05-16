import Link from "next/link";
import type { Pair } from "@/data/pairs";
import { AXES } from "@/data/pairs";

export default function PairCard({ p }: { p: Pair }) {
  const axis = AXES[p.axis];
  return (
    <Link
      href={`/pair/${p.slug}`}
      className="group block rounded-2xl border border-ink-950/10 bg-parchment-50/80 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-ink-950/30 overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${axis.color}66, transparent)` }} />
      {/* Mirror panel */}
      <div className="grid grid-cols-[1fr_auto_1fr] items-stretch min-h-[100px]">
        <div className="china-side p-4 sm:p-5 flex flex-col justify-between">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-china-deep/80">CN</div>
          <div className="mt-1">
            <div className="font-display han-display text-2xl text-ink-950 leading-tight">{p.china.zh}</div>
            <div className="font-display text-base text-ink-900/80 italic">{p.china.en}</div>
          </div>
        </div>
        <div className="flex items-center justify-center px-2 bg-parchment-100/60 border-x border-ink-950/10">
          <span className="medallion text-base">↔</span>
        </div>
        <div className="europe-side p-4 sm:p-5 flex flex-col justify-between text-right">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-europe-deep/80">EU</div>
          <div className="mt-1">
            <div className="font-display han-display text-2xl text-ink-950 leading-tight">{p.europe.zh}</div>
            <div className="font-display text-base text-ink-900/80 italic">{p.europe.en}</div>
          </div>
        </div>
      </div>
      <div className="p-4 sm:p-5 border-t border-ink-950/10">
        <div className="flex items-center justify-between gap-2 text-[10px] font-mono uppercase tracking-[0.18em]">
          <span style={{ color: axis.color }}>
            <span className="lang-en">{axis.label.en}</span>
            <span className="lang-zh">{axis.label.zh}</span>
          </span>
          <span className="text-ink-900/50">#{String(p.id).padStart(2, "0")}</span>
        </div>
        <p className="mt-2 text-sm text-ink-900 italic leading-snug">
          <span className="lang-en">{p.tagline.en}</span>
          <span className="lang-zh han-display">{p.tagline.zh}</span>
        </p>
        <div className="mt-2 text-xs text-ink-900/70">
          <span className="lang-en">{p.trait.en}</span>
          <span className="lang-zh han-display">{p.trait.zh}</span>
        </div>
      </div>
    </Link>
  );
}
