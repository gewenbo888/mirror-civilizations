import Link from "next/link";
import { LangToggle } from "@/lib/lang";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-ink-950/10 bg-parchment-50/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-[clamp(1rem,4vw,3rem)] py-3">
        <Link href="/" className="group flex items-baseline gap-3">
          <span className="font-display text-2xl font-medium tracking-tight text-ink-950">
            Mirror <span className="text-china">Civilizations</span>
          </span>
          <span className="hidden sm:inline font-han text-sm text-ink-900/70">镜像文明</span>
        </Link>
        <nav className="flex items-center gap-5 text-xs font-mono uppercase tracking-[0.18em] text-ink-900/80">
          <Link href="/" className="hover:text-ink-950">
            <span className="lang-en">Pairs</span><span className="lang-zh">配对</span>
          </Link>
          <Link href="/thesis" className="hover:text-ink-950">
            <span className="lang-en">Thesis</span><span className="lang-zh">论纲</span>
          </Link>
          <LangToggle />
        </nav>
      </div>
    </header>
  );
}
