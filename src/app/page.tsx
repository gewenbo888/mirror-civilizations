import Hero from "@/components/Hero";
import PairGrid from "@/components/PairGrid";
import MirrorMap from "@/components/MirrorMap";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-7xl px-[clamp(1rem,4vw,3rem)] mt-4 mb-16">
        <MirrorMap />
      </section>

      <section className="mx-auto max-w-7xl px-[clamp(1rem,4vw,3rem)] py-12">
        <PairGrid />
      </section>

      {/* Manifesto strip */}
      <section className="mx-auto mt-24 max-w-5xl px-[clamp(1rem,4vw,3rem)]">
        <div className="rounded-3xl border border-ink-950/10 bg-parchment-50/85 p-10 md:p-14 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-china/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-europe/15 blur-3xl pointer-events-none" />
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink-900/70 relative">
            <span className="lang-en">A reading frame</span><span className="lang-zh">一种阅读框架</span>
          </div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-ink-950 leading-tight relative">
            <span className="lang-en">Two empires, one civilizational grammar.</span>
            <span className="lang-zh han-display">两个帝国，同一份文明语法。</span>
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 text-ink-900 leading-relaxed relative">
            <p>
              <span className="lang-en">
                This atlas is not a list of resemblances. It is a thesis: that the way human civilization arranges itself on a
                large continental landmass — coastline merchant republics in the south, agrarian bureaucratic heartlands in the
                north, a long navigable corridor as the spine — repeats. Latin Europe and BaiYue China are not similar by
                coincidence. They are similar because the underlying geography forced similar institutions.
              </span>
              <span className="lang-zh han-display">
                这本图谱并非「相似清单」，而是一种主张：人类文明在巨大大陆体上的安排方式——南方海岸的商人共和国、北方农耕的官僚腹地、一条狭长可航的脊柱——在反复发生。拉丁欧洲与百越中国并不是因巧合而相似——而是因为底层地理迫使出相似的制度。
              </span>
            </p>
            <p>
              <span className="lang-en">
                Read it as a tool. If you understand what Venice was, you understand what Hong Kong is. If you understand what
                a 17th-century Dutch port did, you understand what a 21st-century Hebei port does. The map below is not a
                history — it is a way to read history twice.
              </span>
              <span className="lang-zh han-display">
                把它当作工具来读。理解威尼斯曾是什么，你就理解了香港是什么；理解 17 世纪荷兰港口在做什么，你就理解了 21 世纪河北港口在做什么。下面这张图不是历史——它是一种把历史读两遍的方法。
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
