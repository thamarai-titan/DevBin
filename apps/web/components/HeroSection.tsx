"use client"

import { motion } from "motion/react";

export const HeroSection = () => {
    return (
        <section className="w-full min-h-screen h-screen flex flex-col justify-center px-6 sm:px-10 md:px-24 relative overflow-hidden">

            <div
                className="hero-bg absolute inset-0 -z-10"
                style={{
                    backgroundImage: "url('/bg-1.jpg')",
                    backgroundSize: "160% 160%",
                    backgroundPosition: "0% 50%",
                }}
            />

            {/* dark overlay so text stays readable */}
            <div className="absolute inset-0 -z-10 bg-[#0d0b0f]/60" />

            {/* subtle grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(#6D28D905_1px,transparent_1px),linear-gradient(90deg,#6D28D905_1px,transparent_1px)] bg-size-80px_80px] pointer-events-none" />

            {/* purple glow top left */}
            <div className="absolute -top-32 -left-32 w-125 h-125 rounded-full bg-[#6D28D915] blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full relative z-10">

                {/* eyebrow */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-2 mb-7"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-(--color-accent) animate-pulse" />
                    <span className="font-mono text-[10px] tracking-[2.5px] uppercase text-(--color-muted)">
                        Most useful dev tools
                    </span>
                </motion.div>

                {/* headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="font-syne text-[clamp(48px,8vw,88px)] font-extrabold leading-none tracking-[-3px] text-(--color-text) mb-7"
                >
                    Discover the<br />
                    <span className="italic text-transparent [-webkit-text-stroke:1.5px_#f6fa1a]">tools</span> that<br />
                    power the web
                </motion.h1>

                {/* description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-(--color-muted) text-sm leading-relaxed max-w-md font-light mb-12"
                >
                    Ever wondered what's really powering your favorite websites?
                    Dive into the tools, technologies, and platforms
                    that make the internet work.
                </motion.p>

                {/* count strip */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex gap-10 mb-12"
                >
                    {[
                        { val: "320+", label: "Tools" },
                        { val: "12", label: "Categories" },
                        { val: "48k", label: "Uses today" },
                    ].map((s, i) => (
                        <div key={i} className="flex items-stretch gap-10">
                            {i !== 0 && <div className="w-px bg-(--color-muted)" />}
                            <div className="flex flex-col gap-1">
                                <span className="font-syne text-2xl font-bold text-(--color-text) tracking-tight">{s.val}</span>
                                <span className="font-mono text-[9px] tracking-[1.5px] uppercase text-(--color-muted)">{s.label}</span>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* CTA + scroll */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-center gap-8"
                >
                    <button className="font-mono text-[11px] tracking-[1.5px] uppercase bg-[#c8cc00] text-(--color-border) px-7 py-3.5 rounded hover:opacity-85 transition-opacity">
                        Explore Tools →
                    </button>
                    <div className="flex items-center gap-3 font-mono text-[10px] tracking-[1.5px] uppercase text-(--color-text)">
                        <div className="w-8 h-px bg-[#2e2a3a]" />
                        Scroll to explore
                    </div>
                </motion.div>

            </div>

            {/* corner watermark */}
            <span className="absolute bottom-10 right-10 font-mono text-[10px] tracking-widest text-(--color-muted) [writing-mode:vertical-rl] uppercase">
                DevBin © 2026
            </span>
        </section>
    )
}