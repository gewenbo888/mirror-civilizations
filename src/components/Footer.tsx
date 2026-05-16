import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-ink-950/10 bg-parchment-50/60">
      <div className="mx-auto max-w-7xl px-[clamp(1rem,4vw,3rem)] py-12 grid gap-10 md:grid-cols-3 text-sm text-ink-900/80">
        <div>
          <div className="font-display text-xl text-ink-950">Mirror Civilizations</div>
          <div className="font-han text-ink-900/70">镜像文明</div>
          <p className="mt-4 max-w-sm">
            <span className="lang-en">A bilingual atlas mapping the cities and regions of China to their structural counterparts in Europe.</span>
            <span className="lang-zh">一张双语图谱——把中国的城市与地区映射到它们在欧洲的结构对应物。</span>
          </p>
        </div>
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-ink-900">
            <span className="lang-en">Sections</span><span className="lang-zh">分区</span>
          </div>
          <ul className="mt-3 space-y-2">
            <li><Link href="/" className="hover:text-ink-950"><span className="lang-en">All pairs</span><span className="lang-zh">全部配对</span></Link></li>
            <li><Link href="/thesis" className="hover:text-ink-950"><span className="lang-en">The three axes</span><span className="lang-zh">三条主轴</span></Link></li>
            <li><Link href="/#latin-baiyue" className="hover:text-ink-950"><span className="lang-en">BaiYue ↔ Latin</span><span className="lang-zh">百越 ↔ 拉丁</span></Link></li>
            <li><Link href="/#germanic-northern" className="hover:text-ink-950"><span className="lang-en">Germanic ↔ Northern</span><span className="lang-zh">日耳曼 ↔ 北方</span></Link></li>
          </ul>
        </div>
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-ink-900">
            <span className="lang-en">Portfolio</span><span className="lang-zh">系列</span>
          </div>
          <ul className="mt-3 space-y-2">
            <li><a href="https://psyverse.fun" className="hover:text-ink-950">psyverse.fun</a></li>
            <li><a href="https://psyverse.fun/atlas.html" className="hover:text-ink-950">Psyverse Atlas</a></li>
            <li><a href="https://16-frontiers.psyverse.fun" className="hover:text-ink-950">16 Frontiers</a></li>
            <li><a href="https://five-worlds.psyverse.fun" className="hover:text-ink-950">Five Worlds</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-950/5 mx-auto max-w-7xl px-[clamp(1rem,4vw,3rem)] py-6 text-xs text-ink-900/60 font-mono flex flex-wrap items-center justify-between gap-3">
        <span>© {new Date().getFullYear()} Mirror Civilizations · part of the Psyverse</span>
        <span><span className="lang-en">Made by Gewenbo</span><span className="lang-zh">作者 · 葛文博</span></span>
      </div>
    </footer>
  );
}
