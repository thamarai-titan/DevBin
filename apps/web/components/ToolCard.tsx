import { ToolCardProps } from "@/types"
import { Sparkles, Star, TrendingUp } from "lucide-react"
import {motion} from "motion/react"

export const ToolCard = ({tool,index}: ToolCardProps) => {
    return (
       <motion.div className="bg-(--color-card) border-r border-b border-(--color-border) p-6 hover:bg-[#111018] transition-colors duration-200 cursor-pointer">
  
  {/* top row */}
  <div className="flex justify-between items-start mb-5">
    <span className="text-2xl">{tool.logo}</span>
    <div className="flex flex-col items-end gap-1">
      {tool.isNew && (
        <span className="text-[9px] tracking-[1.2px] uppercase font-semibold text-(--color-accent) border border-(--color-accent) px-2 py-0.5 rounded-sm">
          New
        </span>
      )}
      {tool.isTrending && (
        <span className="text-[9px] tracking-[1.2px] uppercase font-semibold text-[#2d9e6b] border border-[#2d9e6b] px-2 py-0.5 rounded-sm">
          Trending
        </span>
      )}
    </div>
  </div>

  {/* name & desc */}
  <h3 className="text-base font-bold text-(--color-text) tracking-tight mb-2">{tool.name}</h3>
  <p className="text-xs text-(--color-muted) leading-relaxed mb-4 line-clamp-2">{tool.description}</p>

  {/* tags */}
  <div className="flex gap-3 flex-wrap mb-5">
    {tool.tags.map((tag) => (
      <span key={tag} className="text-[10px] text-(--color-muted) font-mono tracking-wide before:content-['#']">
        {tag}
      </span>
    ))}
  </div>

  {/* footer */}
  <div className="flex justify-between items-center pt-4 border-t border-[#1a1820]">
    <span className="text-xs font-semibold text-(--color-accent)">★ {tool.rating}</span>
    <span className="text-[9px] tracking-[1.5px] uppercase text-(--color-muted) font-mono">{tool.category}</span>
  </div>

</motion.div>
    )
}