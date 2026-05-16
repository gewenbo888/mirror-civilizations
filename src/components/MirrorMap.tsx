/**
 * Side-by-side schematic map: China and Europe with their pair-cities marked.
 * No external dependencies — pure SVG paths.
 */
export default function MirrorMap() {
  const cn = [
    { x: 380, y: 245, label: "HK / 香港", lblEU: "Venice" },
    { x: 365, y: 230, label: "SZ / 深圳", lblEU: "Florence" },
    { x: 355, y: 235, label: "GZ / 广州", lblEU: "Rome" },
    { x: 350, y: 220, label: "Shanghai / 上海", lblEU: "Paris" },
    { x: 305, y: 175, label: "Xi'an / 西安", lblEU: "Vienna" },
    { x: 340, y: 145, label: "Beijing / 北京", lblEU: "Brussels" },
    { x: 320, y: 200, label: "Wuhan / 武汉", lblEU: "Alexandria" },
    { x: 270, y: 200, label: "CQ / 重庆", lblEU: "Constantinople" },
    { x: 305, y: 195, label: "Luoyang / 洛阳", lblEU: "Athens" },
    { x: 350, y: 170, label: "Tianjin / 天津", lblEU: "Switzerland" },
  ];
  const eu = [
    { x: 700, y: 250, label: "Venice" },
    { x: 695, y: 245, label: "Florence" },
    { x: 700, y: 260, label: "Rome" },
    { x: 660, y: 180, label: "Paris" },
    { x: 715, y: 200, label: "Vienna" },
    { x: 685, y: 175, label: "Brussels" },
    { x: 760, y: 290, label: "Alexandria" },
    { x: 745, y: 235, label: "Constantinople" },
    { x: 735, y: 270, label: "Athens" },
    { x: 690, y: 200, label: "Switzerland" },
  ];

  return (
    <div className="rounded-3xl border border-ink-950/10 bg-parchment-50/80 p-4 sm:p-6 backdrop-blur-sm">
      <svg viewBox="0 0 900 380" className="w-full h-auto" role="img" aria-label="China and Europe paired cities">
        <defs>
          <linearGradient id="thread" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#d04632" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#c9a14a" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#2c5e8f" stopOpacity="0.7" />
          </linearGradient>
        </defs>

        {/* labels */}
        <text x="200" y="40" textAnchor="middle" className="font-display" fontSize="22" fill="#d04632">中国 · China</text>
        <text x="700" y="40" textAnchor="middle" className="font-display" fontSize="22" fill="#2c5e8f">欧洲 · Europe</text>

        {/* China outline (schematic) */}
        <path
          d="M 250 120 Q 320 95 380 110 Q 430 130 440 200 Q 430 270 380 290 Q 340 310 290 305 Q 240 295 230 240 Q 220 180 250 120 Z"
          fill="#fef1ea"
          stroke="#d04632"
          strokeWidth="1.2"
          opacity="0.85"
        />
        {/* Yangtze line */}
        <path d="M 250 220 Q 290 215 330 210 Q 380 200 410 200" fill="none" stroke="#c9a14a" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />
        <text x="260" y="240" fontSize="9" fill="#c9a14a">长江 Yangtze</text>

        {/* Europe outline (schematic) */}
        <path
          d="M 580 130 Q 640 110 700 110 Q 760 115 800 150 Q 820 200 800 250 Q 770 300 720 305 Q 670 310 620 290 Q 580 270 575 220 Q 570 170 580 130 Z"
          fill="#eaf1f7"
          stroke="#2c5e8f"
          strokeWidth="1.2"
          opacity="0.85"
        />
        {/* Mediterranean line */}
        <path d="M 600 280 Q 680 290 740 285 Q 790 280 810 270" fill="none" stroke="#c9a14a" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />
        <text x="610" y="305" fontSize="9" fill="#c9a14a">地中海 Mediterranean</text>

        {/* pair threads */}
        {cn.map((c, i) => {
          const e = eu[i];
          return (
            <g key={i}>
              <line x1={c.x} y1={c.y} x2={e.x} y2={e.y} stroke="url(#thread)" strokeWidth="0.6" opacity="0.55" />
              <circle cx={c.x} cy={c.y} r="3.5" fill="#d04632" />
              <circle cx={e.x} cy={e.y} r="3.5" fill="#2c5e8f" />
              <text x={c.x - 6} y={c.y + 3} textAnchor="end" fontSize="8.5" fill="#15120e">{c.label}</text>
              <text x={e.x + 6} y={e.y + 3} fontSize="8.5" fill="#15120e">{e.label}</text>
            </g>
          );
        })}

        {/* center medallion */}
        <g transform="translate(450 190)">
          <circle r="22" fill="#15120e" />
          <text textAnchor="middle" y="6" fontSize="20" fill="#c9a14a" className="font-display">↔</text>
        </g>
      </svg>
      <p className="mt-3 text-xs text-ink-900/70 font-mono uppercase tracking-[0.15em]">
        <span className="lang-en">Schematic — not to scale. Each thread is one pair from the atlas.</span>
        <span className="lang-zh">示意——非按比例。每一根线，是图谱中的一对配对。</span>
      </p>
    </div>
  );
}
