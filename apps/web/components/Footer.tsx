const footerLinks = {
  Tools:   ["All Tools", "Formatters", "Converters", "Generators", "Trending"],
  Company: ["About", "Blog", "Submit a Tool", "Changelog"],
  Support: ["Contact", "Report a Bug", "Privacy Policy", "Terms of Use"],
}

export const Footer = () => {
  return (
    <footer className="w-full border-t border-(--color-border) relative overflow-hidden bg-(--color-bg)">

      {/* subtle yellow glow at bottom center */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-125 h-45 bg-[radial-gradient(ellipse,#f6fa1a08_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-24 pt-16 md:pt-20 pb-10">

        {/* top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 mb-16">

          {/* brand */}
          <div className="flex flex-col gap-4">
            <span className="font-syne text-[22px] font-extrabold text-(--color-text) tracking-tight">
              DevBin.
            </span>
            <p className="text-xs text-(--color-muted) leading-relaxed font-light max-w-55">
              The most useful collection of developer tools. Curated, fast and always free.
            </p>
            {/* socials */}
            <div className="flex gap-2 mt-2">
              {["𝕏", "⌥", "◈", "◎"].map((icon, i) => (
                <button
                  key={i}
                  className="w-8 h-8 border border-(--color-border) rounded-md flex items-center justify-center text-xs text-(--color-muted) hover:border-(--color-accent)/30 hover:bg-(--color-accent)/5 hover:text-(--color-text) transition-all duration-200 cursor-pointer bg-transparent"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="flex flex-col gap-5">
              <span className="font-mono text-[9px] tracking-[2px] uppercase text-(--color-accent)">
                {title}
              </span>
              <div className="flex flex-col gap-3">
                {links.map((link) => (
                  <button
                    key={link}
                    className="group flex items-center gap-2 text-xs text-(--color-muted) hover:text-(--color-text) transition-colors duration-200 cursor-pointer"
                  >
                    <span className="w-1 h-1 rounded-full bg-(--color-border) group-hover:bg-(--color-accent) transition-colors duration-200 shrink-0" />
                    {link}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* big wordmark */}
        <div className="font-syne text-[clamp(48px,10vw,96px)] font-extrabold text-transparent [-webkit-text-stroke:1px_#6b5f8a] tracking-[-6px] leading-none text-center mb-12 select-none">
          DEVBIN
        </div>

        {/* bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-(--color-border)">
          <span className="font-mono text-[9px] tracking-[1.5px] uppercase text-(--color-muted)">
            © 2026 DevBin. All rights reserved.
          </span>
          <div className="flex items-center gap-2 font-mono text-[9px] tracking-[1.5px] uppercase text-(--color-muted)">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            All systems operational
          </div>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Sitemap"].map((item) => (
              <span
                key={item}
                className="font-mono text-[9px] tracking-[1.5px] uppercase text-(--color-muted) hover:text-(--color-accent) transition-colors cursor-pointer"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}