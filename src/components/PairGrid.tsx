import PairCard from "./PairCard";
import { PAIRS, AXES } from "@/data/pairs";

const ORDER: (keyof typeof AXES)[] = ["latin-baiyue", "germanic-northern", "mediterranean-yangtze", "other"];

export default function PairGrid() {
  return (
    <div id="pairs" className="space-y-20 scroll-mt-24">
      {ORDER.map((axis) => {
        const items = PAIRS.filter((p) => p.axis === axis);
        if (items.length === 0) return null;
        const a = AXES[axis];
        return (
          <section key={axis} id={axis} className="scroll-mt-24">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between mb-6">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.25em]" style={{ color: a.color }}>
                  Axis · {items.length} pair{items.length === 1 ? "" : "s"}
                </div>
                <h2 className="mt-1 font-display text-3xl md:text-4xl text-ink-950 leading-tight">
                  <span className="lang-en">{a.label.en}</span>
                  <span className="lang-zh han-display">{a.label.zh}</span>
                </h2>
              </div>
              <p className="md:max-w-xl text-sm text-ink-900/80 leading-relaxed">
                <span className="lang-en">{a.body.en}</span>
                <span className="lang-zh han-display">{a.body.zh}</span>
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {items.map((p) => (
                <PairCard key={p.slug} p={p} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
