const trendingTools = [
  { rank: "01", logo: "🧹", name: "JSON Formatter", desc: "Format, validate and beautify JSON data instantly with syntax highlighting and error detection.", tags: ["json", "formatter", "validator"], clicks: "24.3k", growth: "↑ 38%", rating: "4.9", barClass: "bg-[#f6fa1a]", leftBorder: "bg-[#f6fa1a]" },
  { rank: "02", logo: "🎨", name: "Color Palette",  desc: "Generate stunning color palettes from a single hex code. Export to CSS, Tailwind, Figma tokens.", tags: ["color", "design", "css"],          clicks: "18.1k", growth: "↑ 21%", rating: "4.7", barClass: "bg-[#f6fa1a]/40", leftBorder: "bg-[#f6fa1a]/30" },
  { rank: "03", logo: "🔐", name: "Base64 Encoder", desc: "Encode and decode Base64 strings, files and images in your browser. Zero server calls.",          tags: ["encoder", "security", "utils"],     clicks: "11.8k", growth: "↑ 14%", rating: "4.8", barClass: "bg-[#f6fa1a]/15", leftBorder: "bg-[#f6fa1a]/10" },
]

export const TrendingSection = () => {
  return (
    <section className="w-full px-6 sm:px-10 md:px-24 py-16 md:py-24 bg-(--color-bg)">
      <div className="max-w-7xl mx-auto">

        {/* header */}
        <div className="flex justify-between items-end mb-10 md:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-(--color-accent) animate-pulse" />
              <span className="font-mono text-[9px] tracking-[2.5px] uppercase text-[#f6fa1a]">
                This week
              </span>
            </div>
            <h2 className="font-syne text-3xl md:text-[42px] font-extrabold text-[#f5f0ff] tracking-[-2px] leading-none">
              Trending Tools
            </h2>
          </div>
          <span className="font-mono text-[9px] tracking-[2px] uppercase text-(--color-muted) border-b border-(--color-border) pb-0.5 cursor-pointer hover:text-[#f6fa1a] hover:border-[#f6fa1a] transition-colors hidden sm:block">
            View all tools →
          </span>
        </div>

        {/* cards */}
        <div className="flex flex-col gap-px bg-[#1a1624] rounded-xl overflow-hidden">
          {trendingTools.map((tool, i) => (
            <div
              key={i}
              className="group relative bg-(--color-bg) hover:bg-[#0f0c18] transition-colors duration-200 cursor-pointer"
            >
              {/* left accent bar */}
              <div className={`absolute left-0 top-0 bottom-0 w-0.5 ${tool.leftBorder}`} />

              {/* mobile layout */}
              <div className="flex flex-col gap-4 px-6 py-6 md:hidden">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-syne text-3xl font-extrabold text-transparent [-webkit-text-stroke:1px_#6b5f8a] group-hover:[-webkit-text-stroke-color:#f6fa1a] transition-all leading-none tracking-[-2px]">
                      {tool.rank}
                    </span>
                    <span className="text-xl">{tool.logo}</span>
                    <span className="font-syne text-lg font-extrabold text-[#f5f0ff] tracking-tight">
                      {tool.name}
                    </span>
                  </div>
                  <span className="font-mono text-[9px] text-[#f6fa1a] tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-200">
                    →
                  </span>
                </div>

                <p className="text-xs text-(--color-muted) leading-relaxed font-light">
                  {tool.desc}
                </p>

                <div className="flex justify-between items-end">
                  <div className="flex gap-3">
                    {tool.tags.map(tag => (
                      <span key={tag} className="font-mono text-[9px] text-(--color-muted) before:content-['#']">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-end gap-0.5">
                      <span className="font-syne text-sm font-bold text-[#f6fa1a]">{tool.growth}</span>
                      <span className="font-mono text-[8px] tracking-[1.5px] uppercase text-[#2a2238]">This week</span>
                    </div>
                    <div className="flex flex-col items-end gap-0.5">
                      <span className="font-syne text-sm font-bold text-[#f5f0ff]">{tool.clicks}</span>
                      <span className="font-mono text-[8px] tracking-[1.5px] uppercase text-[#2a2238]">Clicks</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* desktop layout */}
              <div className="hidden md:grid grid-cols-[80px_1fr_auto] items-center gap-8 px-8 py-7">

                {/* rank */}
                <div className="flex flex-col items-center gap-2">
                  <span className="font-syne text-[52px] font-extrabold text-transparent [-webkit-text-stroke:1px_#6b5f8a] group-hover:[-webkit-text-stroke-color:#f6fa1a] transition-all leading-none tracking-[-3px]">
                    {tool.rank}
                  </span>
                  <div className={`w-0.5 h-8 rounded-full ${tool.barClass}`} />
                </div>

                {/* content */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{tool.logo}</span>
                    <span className="font-syne text-xl font-extrabold text-[#f5f0ff] tracking-[-0.5px]">
                      {tool.name}
                    </span>
                  </div>
                  <p className="text-xs text-(--color-muted) leading-relaxed font-light max-w-lg">
                    {tool.desc}
                  </p>
                  <div className="flex gap-4">
                    {tool.tags.map(tag => (
                      <span key={tag} className="font-mono text-[9px] text-(--color-muted) before:content-['#']">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* stats */}
                <div className="flex flex-col items-end gap-4">
                  <div className="flex flex-col items-end gap-2">
                    {[
                      { val: tool.clicks,         key: "Clicks",    yellow: false },
                      { val: tool.growth,         key: "This week", yellow: true  },
                      { val: `★ ${tool.rating}`,  key: "Rating",    yellow: false },
                    ].map((s) => (
                      <div key={s.key} className="flex flex-col items-end gap-0.5">
                        <span className={`font-syne text-lg font-bold tracking-tight ${s.yellow ? "text-[#f6fa1a]" : "text-[#f5f0ff]"}`}>
                          {s.val}
                        </span>
                        <span className="font-mono text-[8px] tracking-[1.5px] uppercase text-[#2a2238]">
                          {s.key}
                        </span>
                      </div>
                    ))}
                  </div>
                  <span className="font-mono text-[9px] text-[#f6fa1a] tracking-wide opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200">
                    Open →
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* mobile view all — shown only on small screens */}
        <div className="mt-6 flex justify-center sm:hidden">
          <span className="font-mono text-[9px] tracking-[2px] uppercase text-(--color-muted) border-b border-(--color-border) pb-0.5 cursor-pointer hover:text-[#f6fa1a] hover:border-[#f6fa1a] transition-colors">
            View all tools →
          </span>
        </div>

      </div>
    </section>
  )
}