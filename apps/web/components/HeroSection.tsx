"use client"

import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";



export const HeroSection = () => {

   
    return <>
        <section className="w-full min-h-screen flex items-center px-6 sm:px-10 md:px-16 bg-[url('/bg-1.jpg')]">
            <div className="max-w-7xl mx-auto">
                <div className="p-2 rounded inline-block my-2 font-light text-(--color-muted)"># Most Usefull Tools</div>
                <h1 className="text-6xl md:text-7xl font-bold max-w-4xl">
                    Discover the
                    <span className="marker text-(--color-accent)"> tools </span>
                    that power the
                    <span className="marker text-(--color-accent)"> internet </span>
                </h1>
                <p className="my-4 sm:my-4 md:my-10 text-sm sm:text-base md:text-md text-(--color-muted) max-w-xl leading-relaxed">
                    Ever wondered what's really powering your favorite websites?
                    Dive into the tools, technologies, and platforms
                    that make the internet work.
                </p>
                <div className="border border-gray-200 p-2 mt-10 flex w-xs justify-between rounded ">
                    <p>scroll to view</p>
                    <motion.div
                        initial={{ y: -2 }}
                        animate={{ y: 2 }}
                        transition={{
                            repeat: Infinity,
                            duration: 2,
                            repeatType: "reverse",
                            ease: "easeInOut",
                        }}
                        exit={{ y: -2 }}
                    >
                        <ArrowDown className="w-5 text-(--color-accent)"

                        />
                    </motion.div>
                </div>
            </div>
        </section>
    </>
}