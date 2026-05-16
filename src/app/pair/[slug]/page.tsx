import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { PAIRS, AXES, getPair, getNextPrevPair } from "@/data/pairs";

export async function generateStaticParams() {
  return PAIRS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const p = getPair(params.slug);
  if (!p) return {};
  const title = `${p.china.en} ↔ ${p.europe.en} · ${p.china.zh} ↔ ${p.europe.zh} — Mirror Civilizations`;
  const description = p.tagline.en;
  return {
    title,
    description,
    alternates: { canonical: `/pair/${p.slug}` },
    openGraph: {
      title,
      description,
      url: `https://mirror-civilizations.psyverse.fun/pair/${p.slug}`,
      siteName: "Mirror Civilizations",
      type: "article",
      locale: "en_US",
      alternateLocale: ["zh_CN"],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default function PairPage({ params }: { params: { slug: string } }) {
  const p = getPair(params.slug);
  if (!p) notFound();
  const axis = AXES[p.axis];
  const { prev, next } = getNextPrevPair(p.slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${p.china.en} ↔ ${p.europe.en}`,
    description: p.tagline.en,
    inLanguage: ["en", "zh-CN"],
    author: { "@type": "Person", name: "Gewenbo", url: "https://psyverse.fun/" },
    publisher: { "@type": "Organization", name: "Mirror Civilizations", url: "https://mirror-civilizations.psyverse.fun/" },
    mainEntityOfPage: `https://mirror-civilizations.psyverse.fun/pair/${p.slug}`,
  };

  return (
    <article className="relative">
      {/* Mirror hero */}
      <div className="border-b border-ink-950/10">
        <div className="grid md:grid-cols-[1fr_auto_1fr]">
          <div className="china-side px-[clamp(1rem,4vw,3rem)] py-14 md:py-20">
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-china-deep/80">CN · 中国</div>
            <div className="mt-4 font-display han-display text-6xl md:text-7xl text-ink-950 leading-none">{p.china.zh}</div>
            <div className="mt-2 font-display text-3xl text-ink-900 italic">{p.china.en}</div>
          </div>
          <div className="hidden md:flex items-center justify-center px-3">
            <div className="medallion text-2xl">↔</div>
          </div>
          <div className="europe-side px-[clamp(1rem,4vw,3rem)] py-14 md:py-20 md:text-right">
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-europe-deep/80">EU · 欧洲</div>
            <div className="mt-4 font-display han-display text-6xl md:text-7xl text-ink-950 leading-none">{p.europe.zh}</div>
            <div className="mt-2 font-display text-3xl text-ink-900 italic">{p.europe.en}</div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-[clamp(1rem,4vw,3rem)] py-12 space-y-14">
        {/* meta strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-[0.22em] text-ink-900/70">
          <span style={{ color: axis.color }}>
            <span className="lang-en">Axis · {axis.label.en}</span>
            <span className="lang-zh">主轴 · {axis.label.zh}</span>
          </span>
          <span>#{String(p.id).padStart(2, "0")} / {PAIRS.length}</span>
        </div>

        <p className="font-display text-3xl md:text-4xl text-ink-950 italic leading-snug">
          <span className="lang-en">&ldquo;{p.tagline.en}&rdquo;</span>
          <span className="lang-zh han-display">「{p.tagline.zh}」</span>
        </p>

        <section>
          <SectionHeader en="The pair" zh="配对" accent={axis.color} />
          <p className="mt-5 text-lg leading-relaxed text-ink-900">
            <span className="lang-en">{p.intro.en}</span>
            <span className="lang-zh han-display">{p.intro.zh}</span>
          </p>
        </section>

        <section>
          <SectionHeader en="Parallels" zh="平行处" accent={axis.color} />
          <ul className="mt-5 space-y-3">
            {p.parallels.map((x, i) => (
              <li key={i} className="flex items-baseline gap-3">
                <span className="font-display text-base" style={{ color: axis.color }}>◆</span>
                <p className="text-ink-900 leading-relaxed">
                  <span className="lang-en">{x.en}</span>
                  <span className="lang-zh han-display">{x.zh}</span>
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <SectionHeader en="Where the mirror cracks" zh="镜面的裂缝" accent={axis.color} />
          <ul className="mt-5 space-y-3">
            {p.divergences.map((x, i) => (
              <li key={i} className="flex items-baseline gap-3">
                <span className="font-display text-base text-ink-900/40">◇</span>
                <p className="text-ink-900 leading-relaxed">
                  <span className="lang-en">{x.en}</span>
                  <span className="lang-zh han-display">{x.zh}</span>
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <SectionHeader en="Through history" zh="贯穿历史" accent={axis.color} />
          <ol className="mt-6 space-y-6">
            {p.history.map((row, i) => (
              <li key={i} className="grid md:grid-cols-[140px_1fr_1fr] gap-3 md:gap-5 items-baseline">
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-ink-900/70">
                  <span className="lang-en">{row.era.en}</span>
                  <span className="lang-zh">{row.era.zh}</span>
                </div>
                <div className="rounded-xl bg-parchment-100/70 p-3 border-l-2 border-china">
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-china-deep/80 mb-1">CN</div>
                  <p className="text-sm text-ink-900">
                    <span className="lang-en">{row.china.en}</span>
                    <span className="lang-zh han-display">{row.china.zh}</span>
                  </p>
                </div>
                <div className="rounded-xl bg-parchment-100/70 p-3 border-l-2 border-europe">
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-europe-deep/80 mb-1">EU</div>
                  <p className="text-sm text-ink-900">
                    <span className="lang-en">{row.europe.en}</span>
                    <span className="lang-zh han-display">{row.europe.zh}</span>
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <SectionHeader en="Today" zh="今天" accent={axis.color} />
          <p className="mt-5 text-lg leading-relaxed text-ink-900">
            <span className="lang-en">{p.modern.en}</span>
            <span className="lang-zh han-display">{p.modern.zh}</span>
          </p>
        </section>

        <section>
          <SectionHeader en="Further reading" zh="延伸阅读" accent={axis.color} />
          <ul className="mt-5 space-y-3">
            {p.reading.map((r, i) => (
              <li key={i} className="border-l-2 pl-4 border-ink-950/15 text-ink-900">
                <div className="font-display text-lg">{r.title}</div>
                <div className="text-sm text-ink-900/70">
                  {r.author && <span>{r.author}</span>}
                  {r.author && r.year ? " · " : ""}
                  {r.year && <span>{r.year}</span>}
                </div>
              </li>
            ))}
          </ul>
        </section>

        <hr className="rule" />

        <nav className="grid gap-3 sm:grid-cols-2">
          {prev && (
            <Link href={`/pair/${prev.slug}`} className="rounded-xl border border-ink-950/10 bg-parchment-50 p-5 hover:border-ink-950/30">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-900/70">
                <span className="lang-en">← Previous pair</span><span className="lang-zh">← 上一对</span>
              </div>
              <div className="mt-2 font-display text-xl text-ink-950">
                <span className="lang-en">{prev.china.en} ↔ {prev.europe.en}</span>
                <span className="lang-zh han-display">{prev.china.zh} ↔ {prev.europe.zh}</span>
              </div>
            </Link>
          )}
          {next && (
            <Link href={`/pair/${next.slug}`} className="rounded-xl border border-ink-950/10 bg-parchment-50 p-5 hover:border-ink-950/30 sm:text-right">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-900/70">
                <span className="lang-en">Next pair →</span><span className="lang-zh">下一对 →</span>
              </div>
              <div className="mt-2 font-display text-xl text-ink-950">
                <span className="lang-en">{next.china.en} ↔ {next.europe.en}</span>
                <span className="lang-zh han-display">{next.china.zh} ↔ {next.europe.zh}</span>
              </div>
            </Link>
          )}
        </nav>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    </article>
  );
}

function SectionHeader({ en, zh, accent }: { en: string; zh: string; accent: string }) {
  return (
    <div className="flex items-baseline gap-3">
      <span aria-hidden className="font-mono text-[11px] uppercase tracking-[0.3em]" style={{ color: accent }}>·</span>
      <h2 className="font-display text-2xl md:text-3xl text-ink-950">
        <span className="lang-en">{en}</span>
        <span className="lang-zh han-display">{zh}</span>
      </h2>
    </div>
  );
}
