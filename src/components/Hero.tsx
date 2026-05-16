import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-[clamp(1rem,4vw,3rem)] pt-20 md:pt-28 pb-12">
        <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink-900/70">
          <span className="lang-en">A bilingual atlas · 25 paired civilizations · 3 axes</span>
          <span className="lang-zh">双语图谱 · 25 对配对 · 3 条主轴</span>
        </div>
        <h1 className="mt-5 font-display text-5xl md:text-7xl xl:text-8xl font-medium leading-[0.95] tracking-tight text-ink-950">
          <span className="lang-en">
            China and Europe<br />
            are the <span className="text-china italic">same essay</span><br />
            written twice.
          </span>
          <span className="lang-zh han-display">
            中国与欧洲，<br />
            是 <span className="text-china italic">同一篇文章</span><br />
            被书写了两遍。
          </span>
        </h1>
        <p className="mt-7 max-w-3xl text-lg md:text-xl leading-relaxed text-ink-900">
          <span className="lang-en">
            Hong Kong is Venice. Shenzhen is Florence. Luoyang is Athens. Wuhan is Alexandria. Behind these pairings is a deeper claim:
            the BaiYue peoples are the Latins; the Northern Mandarin world is the Germanic; the Yangtze is the Mediterranean.
            Step through 25 carefully drawn parallels — and the three deep axes that hold them together.
          </span>
          <span className="lang-zh han-display">
            香港是威尼斯，深圳是弗洛伦萨，洛阳是雅典，武汉是亚历山大港。这些配对的背后，是一个更深的主张：百越族群是拉丁人，北方官话世界是日耳曼，长江是地中海。
            穿过 25 处精心绘制的平行——以及把它们扣在一起的三条主轴。
          </span>
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-[0.18em]">
          <a href="#pairs" className="rounded-full bg-ink-950 px-5 py-2.5 text-parchment-50 transition hover:bg-china">
            <span className="lang-en">Enter the atlas →</span><span className="lang-zh">进入图谱 →</span>
          </a>
          <Link href="/thesis" className="rounded-full border border-ink-950/25 px-5 py-2.5 text-ink-900 transition hover:border-ink-950">
            <span className="lang-en">Read the three axes</span><span className="lang-zh">阅读三条主轴</span>
          </Link>
        </div>

        {/* The three axes preview */}
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {[
            { c: "#d04632", t_en: "BaiYue ↔ Latin", t_zh: "百越 ↔ 拉丁", d_en: "Southern, maritime, mercantile.", d_zh: "南方、海洋、商业。", h: "#latin-baiyue" },
            { c: "#2c5e8f", t_en: "Germanic ↔ Northern", t_zh: "日耳曼 ↔ 北方官话", d_en: "Continental, industrial, bureaucratic.", d_zh: "大陆、工业、官僚。", h: "#germanic-northern" },
            { c: "#c9a14a", t_en: "Mediterranean ↔ Yangtze", t_zh: "地中海 ↔ 长江", d_en: "The river that is the spine.", d_zh: "作为文明脊柱的那条水。", h: "#mediterranean-yangtze" },
          ].map((a) => (
            <a key={a.h} href={a.h} className="group rounded-2xl border border-ink-950/10 bg-parchment-50/70 p-6 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-ink-950/30">
              <div className="h-1 w-12 rounded-full" style={{ background: a.c }} />
              <div className="mt-3 font-display text-2xl text-ink-950">
                <span className="lang-en">{a.t_en}</span><span className="lang-zh han-display">{a.t_zh}</span>
              </div>
              <div className="mt-1 text-sm text-ink-900/80">
                <span className="lang-en">{a.d_en}</span><span className="lang-zh han-display">{a.d_zh}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
