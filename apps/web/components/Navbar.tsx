"use client"

import { Menu, X } from "lucide-react"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react"
import { useState } from "react"
import { navVariants } from "@/lib/framer/variants"

const navItems = [
  { label: "HOME",      num: "01" },
  { label: "TOOLS",     num: "02" },
  { label: "POPULAR",   num: "03" },
  { label: "RECOMMEND", num: "04" },
]

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useScroll()
  const [navState, setNavState] = useState("full")

  useMotionValueEvent(scrollY, "change", (latest) => {
    setNavState(latest < 100 ? "full" : "hidden")
  })

  return (
    <>
      {/* ── NAV BAR ── */}
      <motion.nav
        initial="full"
        variants={navVariants}
        animate={navState}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="fixed top-0 z-50 w-full px-8"
      >
        <div className="flex items-center justify-between border border-(--color-border) backdrop-blur-xl px-6 py-3.5 rounded-lg">
          
          {/* logo */}
          <span className="font-syne text-[17px] font-extrabold tracking-tight text-[#f5f2ff]">
            Dev<span className="">B</span>in.
          </span>

          {/* right side */}
          <div className="flex items-center gap-5">
            <span className="font-mono text-[9px] tracking-[2px] uppercase text-(--color-text)">
              Menu
            </span>
            <motion.button
              whileHover={{ borderColor: "#f6fa1a", backgroundColor: "#6D28D910" }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(true)}
              className="w-9 h-9 flex items-center justify-center border border-(--color-border) rounded cursor-pointer bg-transparent"
            >
              <Menu size={15} className="text-(--color-text)" />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* ── FULLSCREEN OVERLAY ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-100 bg-(--color-bg) flex flex-col p-10"
          >
            {/* top row */}
            <div className="flex justify-between items-center mb-16">
              <span className="font-syne text-[17px] font-extrabold text-(--color-text)">
                Dev<span className="">B</span>in.
              </span>
              <motion.button
                whileHover={{ borderColor: "#f6fa1a" }}
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 flex items-center justify-center border border-(--color-border) rounded bg-transparent cursor-pointer"
              >
                <X size={16} className="text-(--color-text)" />
              </motion.button>
            </div>

            {/* nav items */}
            <ul className="flex-1 flex flex-col justify-center gap-0">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.35, delay: i * 0.07, ease: "easeOut" }}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-baseline gap-4 py-4 border-b border-(--color-border) cursor-pointer hover:pl-3 transition-all duration-300"
                >
                  <span className="font-mono text-[10px] tracking-[1.5px] text-(--color-muted)">
                    {item.num}
                  </span>
                  <span className="font-syne text-5xl font-extrabold tracking-[-2px] text-(--color-text) group-hover:text-(--color-accent) transition-colors duration-200 leading-none">
                    {item.label}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* footer */}
            <div className="flex justify-between items-end mt-10">
              <span className="font-mono text-[9px] tracking-[2px] uppercase text-(--color-muted)">
                DevBin © 2026
              </span>
              <span className="font-mono text-[9px] tracking-[2px] uppercase text-(--color-muted)">
                Most useful dev tools
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}