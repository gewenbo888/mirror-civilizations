import type { Metadata } from "next";
import { AXES } from "@/data/pairs";

export const metadata: Metadata = {
  title: "The Three Axes · 三条主轴 — Mirror Civilizations",
  description:
    "The three deep parallels that hold the mirror together: BaiYue is to Latin as Northern Mandarin is to Germanic as the Yangtze is to the Mediterranean.",
  alternates: { canonical: "/thesis" },
};

export default function ThesisPage() {
  return (
    <article className="mx-auto max-w-3xl px-[clamp(1rem,4vw,3rem)] py-20 space-y-10">
      <header>
        <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink-900/70">
          <span className="lang-en">The thesis</span><span className="lang-zh">论纲</span>
        </div>
        <h1 className="mt-4 font-display text-5xl md:text-6xl text-ink-950 leading-tight">
          <span className="lang-en">One grammar. Two empires. Three axes.</span>
          <span className="lang-zh han-display">一份语法。两个帝国。三条主轴。</span>
        </h1>
      </header>

      <p className="text-lg leading-relaxed text-ink-900">
        <span className="lang-en">
          The atlas is built on a single hypothesis, expressed as three parallel equations. They are not a poetic flourish.
          They are a claim about civilizational geometry: when a large continent develops a literate, urbanised civilization
          along its eastern (or western) edge, the population distributes itself into the same three roles, no matter which
          languages it uses or which gods it prays to.
        </span>
        <span className="lang-zh han-display">
          这本图谱建立在一个假说之上，并以三条平行方程的形式表达。它们不是诗意装饰，而是关于「文明几何」的一个主张：当一片大陆在它的东端（或西端）发展出一个具有书写传统的城市化文明，无论它使用什么语言、敬拜什么神祇，人口都会被分配到同样的三种角色之中。
        </span>
      </p>

      {(["latin-baiyue", "germanic-northern", "mediterranean-yangtze"] as const).map((k, i) => {
        const a = AXES[k];
        return (
          <section key={k} className="rounded-2xl border border-ink-950/10 bg-parchment-50/80 p-8 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 h-44 w-44 rounded-full blur-3xl" style={{ background: `${a.color}33` }} />
            <div className="font-mono text-xs uppercase tracking-[0.22em]" style={{ color: a.color }}>Axis {i + 1}</div>
            <h2 className="mt-2 font-display text-3xl md:text-4xl text-ink-950 relative">
              <span className="lang-en">{a.label.en}</span>
              <span className="lang-zh han-display">{a.label.zh}</span>
            </h2>
            <p className="mt-4 text-ink-900 leading-relaxed relative">
              <span className="lang-en">{a.body.en}</span>
              <span className="lang-zh han-display">{a.body.zh}</span>
            </p>
          </section>
        );
      })}

      <section className="rounded-2xl border border-ink-950/10 bg-parchment-50/80 p-8">
        <h2 className="font-display text-3xl text-ink-950">
          <span className="lang-en">Why this works</span>
          <span className="lang-zh han-display">为何成立</span>
        </h2>
        <div className="mt-5 space-y-4 text-ink-900 leading-relaxed">
          <p>
            <span className="lang-en">
              Geography rhymes harder than people think. A peninsula with a Mediterranean climate, a navigable inland sea, a
              mountain chain a hundred kilometres from the coast — these features force similar institutions wherever they
              appear. A long, flat plain in the north with cold winters and a horse frontier — same thing. A great
              navigable river splitting a sub-continent into rich upstream and rich downstream — same thing.
            </span>
            <span className="lang-zh han-display">
              地理之间的押韵远比人们想象更狠。一座具地中海气候、可航行内海、海岸百公里外有山脉的半岛——这些特征会逼出相似的制度，无论在哪里出现。一片寒冬、马匹边疆的北方平原——一样的逻辑。一条把次大陆切成「富庶上游 + 富庶下游」的大江——一样的逻辑。
            </span>
          </p>
          <p>
            <span className="lang-en">
              The mirror does not claim that the cultures are identical, that the languages are related, or that the histories
              copy each other. It claims that the <em>structural roles</em> repeat — and that the institutions, dialect maps,
              cuisines and political quirks of one side are a useful key for reading the other.
            </span>
            <span className="lang-zh han-display">
              这面镜子并不主张两种文化相同、语言同源、历史互相抄写。它主张的是<em>结构角色</em>会重复——并主张一侧的制度、方言地图、饮食与政治怪癖，是阅读另一侧的有用钥匙。
            </span>
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-3xl text-ink-950">
          <span className="lang-en">Three uses for this lens</span>
          <span className="lang-zh han-display">三种用法</span>
        </h2>
        <ol className="mt-5 list-decimal pl-5 space-y-3 text-ink-900 leading-relaxed">
          <li>
            <span className="lang-en"><strong>Forecasting.</strong> What did Venice become? What did the Hanseatic League become? Use those long arcs to forecast Hong Kong, Shenzhen, Hebei.</span>
            <span className="lang-zh han-display"><strong>预测。</strong>威尼斯后来成了什么？汉萨同盟后来成了什么？用那些长弧线来预测香港、深圳、河北。</span>
          </li>
          <li>
            <span className="lang-en"><strong>Travel.</strong> Visit Suzhou with Paris in your head; visit Athens with Luoyang in your head. The pairs sharpen perception.</span>
            <span className="lang-zh han-display"><strong>旅行。</strong>带着巴黎去看苏州；带着洛阳去看雅典。配对会让感知锐利。</span>
          </li>
          <li>
            <span className="lang-en"><strong>Policy.</strong> If you are deciding how to revitalise the Northeast, look at what worked in the Ruhr. If you are deciding how to handle a maritime city-state, study Venice's slow decline.</span>
            <span className="lang-zh han-display"><strong>政策。</strong>若你在决定如何振兴东北，去看鲁尔做对了什么；若你在处理一个海上城邦，去研究威尼斯如何缓慢消逝。</span>
          </li>
        </ol>
      </section>

      <section className="rounded-2xl border border-ink-950/10 bg-parchment-50/80 p-8">
        <h2 className="font-display text-2xl text-ink-950">
          <span className="lang-en">Caveats</span>
          <span className="lang-zh han-display">注意</span>
        </h2>
        <p className="mt-3 text-ink-900 leading-relaxed">
          <span className="lang-en">
            The mirror is a thinking tool, not a science. Some pairs are tight (Hong Kong–Venice, Shenzhen–Florence, Luoyang–Athens
            are uncanny); others are looser (Tianjin–Switzerland, Hainan–Cyprus); a few stand outside the three axes entirely.
            Use it where it sharpens your understanding; abandon it where it dulls it.
          </span>
          <span className="lang-zh han-display">
            这面镜子是思考工具，不是科学。部分配对密合得令人发寒（香港—威尼斯、深圳—弗洛伦萨、洛阳—雅典）；部分较松（天津—瑞士、海南—塞浦路斯）；少数几对则全然在三轴之外。在它能让你看得更清的地方使用它；在它让你看得更糊的地方，抛弃它。
          </span>
        </p>
      </section>
    </article>
  );
}
