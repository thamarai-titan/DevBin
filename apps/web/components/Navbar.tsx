"use client"

import { Menu } from "lucide-react"
import { motion } from "motion/react"

export const Navbar = () => {
    return (
        <nav className="w-full p-10 z-50 top-0 fixed"> 
            <motion.div 
            initial={{scale: 0}}
            animate={{scale: 1}}
            whileHover={{scale: 1.1}}
            className="max-w-7xl mx-auto rounded-md border border-gray-300 w-40 p-3 flex justify-between items-center shadow-(--shadow-card)">
                <div className="text-md font-bold">
                    DevBin.
                </div>
                <div>
                    <Menu className="w-5"/>
                </div>
            </motion.div>
        </nav>
    )
}