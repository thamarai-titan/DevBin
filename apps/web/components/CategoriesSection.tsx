const categories = [
  { icon: "🧹", name: "Formatters",  desc: "Clean up JSON, HTML, CSS and more with instant formatting tools.",           count: 24, id: "formatters"  },
  { icon: "🎨", name: "Design",      desc: "Color palettes, gradients, shadows and visual design utilities.",            count: 18, id: "design"      },
  { icon: "🔐", name: "Security",    desc: "Encoders, decoders, hash generators and encryption utilities.",              count: 31, id: "security"    },
  { icon: "⚙️", name: "Generators",  desc: "UUID, password, Lorem Ipsum and data generators for any use case.",         count: 16, id: "generators"  },
  { icon: "📦", name: "Converters",  desc: "Convert between units, file types, formats and data structures.",           count: 28, id: "converters"  },
  { icon: "📝", name: "Text Tools",  desc: "Word count, case converter, diff checker and text manipulation.",           count: 22, id: "text"        },
  { icon: "🌐", name: "Network",     desc: "IP lookup, DNS checker, URL parser and network diagnostic tools.",          count: 14, id: "network"     },
  { icon: "🧮", name: "Calculators", desc: "Math, percentage, date difference and developer calculators.",              count: 19, id: "calculators" },
  { icon: "🔗", name: "Encoders",    desc: "Base64, URL encode, JWT decoder and string encoding tools.",                count: 11, id: "encoders"    },
]

export const CategoriesSection = () => {
  return (
    <section className="w-full px-6 sm:px-10 md:px-24 py-16 md:py-24 bg-(--color-bg)">
      <div className="max-w-7xl mx-auto">

        {/* header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-(--color-accent) animate-pulse" />
          <span className="font-mono text-[9px] tracking-[2.5px] uppercase text-(--color-accent)">
            Explore
          </span>
        </div>
        <h2 className="font-syne text-3xl md:text-[42px] font-extrabold text-(--color-text) tracking-[-2px] leading-none mb-10 md:mb-12">
          Browse by Category
        </h2>

        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-(--color-border) rounded-xl overflow-hidden">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group relative bg-(--color-bg) hover:bg-[#0f0c18] transition-colors duration-250 cursor-pointer flex flex-col gap-4 p-6 md:p-7"
            >
              {/* bottom glow line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#f6fa1a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* top row */}
              <div className="flex justify-between items-start">
                <div className="w-11 h-11 border border-[#1a1624] group-hover:border-[#f6fa1a]/20 rounded-lg flex items-center justify-center text-xl bg-[#0f0c18] transition-colors duration-200">
                  {cat.icon}
                </div>
                <span className="font-mono text-xs text-[#2a2238] group-hover:text-[#f6fa1a] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200">
                  ↗
                </span>
              </div>

              {/* text */}
              <div className="flex flex-col gap-2">
                <h3 className="font-syne text-[17px] font-extrabold text-[#f5f0ff] tracking-tight">
                  {cat.name}
                </h3>
                <p className="text-[11px] text-(--color-muted) leading-relaxed font-light">
                  {cat.desc}
                </p>
              </div>

              {/* footer */}
              <div className="flex justify-between items-center border-t border-[#1a1624] pt-4 mt-auto">
                <span className="font-mono text-[8px] tracking-[1.5px] uppercase text-(--color-muted) group-hover:text-[#f6fa1a]/30 transition-colors">
                  Tools available
                </span>
                <span className="font-syne text-2xl font-extrabold text-(--color-accent) group-hover:text-[#f6fa1a]/20 tracking-[-1px] transition-colors duration-200">
                  {cat.count}
                </span>
              </div>
            </div>
          ))}
        </div>
          <div>
          </div>
      </div>
    </section>
  )
}