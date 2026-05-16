import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-[clamp(1rem,4vw,3rem)] py-32 text-center">
      <div className="font-mono text-xs uppercase tracking-[0.3em] text-ink-900/70">404 · no mirror here</div>
      <h1 className="mt-4 font-display text-5xl text-ink-950">
        <span className="lang-en">This pair has not been drawn yet.</span>
        <span className="lang-zh han-display">这一对，尚未绘出。</span>
      </h1>
      <Link
        href="/"
        className="inline-block mt-8 rounded-full bg-ink-950 px-5 py-2.5 text-parchment-50 text-xs font-mono uppercase tracking-[0.18em]"
      >
        <span className="lang-en">Back to atlas →</span><span className="lang-zh">回到图谱 →</span>
      </Link>
    </section>
  );
}
