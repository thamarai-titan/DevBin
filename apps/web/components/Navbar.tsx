"use client"

import { Menu, X } from "lucide-react"
import { motion,useScroll,useMotionValueEvent,AnimatePresence } from "motion/react";
import { useEffect,useState } from "react";
import { navVariants } from "@/lib/framer/variants";



export const Navbar = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const navItems = ["HOME","TOOLS", "POPULAR", "RECOMMAND"]

    const {scrollY} = useScroll();
    const [navState,setNavState] = useState("full");

    useMotionValueEvent(scrollY,"change",(latest)=>{
        if(latest < 100){
            setNavState("full")
        }
        else {
            setNavState("hidden")
        }
    })

    return (
        <div>
            <motion.nav 
            initial="full"
            variants={navVariants}
            animate={navState}
            transition={{duration: 0.6,ease: "easeInOut"}}
            
            className=" z-50 p-10 top-0 fixed">
                <motion.div
                
                    className="max-w-7xl mx-auto rounded-md border border-gray-300 p-3 flex justify-between items-center shadow-(--shadow-card)">
                    <div className="text-md font-bold">
                        Dev<span className="">B</span>in.
                    </div>
                    <motion.div
                    whileHover= {{rotate: 270}}
                    transition={{duration: 0.3}}
                    >
                        <Menu className="w-5" onClick={() => setIsOpen(!isOpen)} />
                    </motion.div>
                </motion.div>

            </motion.nav>
            <AnimatePresence>
            {isOpen && (
                <div className="w-full z-50 top-0 left-0 fixed">
                    <motion.div
                        initial={{ y: -1000, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -1000, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut"  }}
                        className="max-w-full h-screen bg-(--color-primary) p-12">
                        <div className="flex justify-between text-white">
                            <div className="text-xl font-bold">

                            </div>
                            <motion.div
                            whileHover={{rotate: 180}}
                            transition={{duration: 0.5}}
                            >
                                <X
                                    className="w-10 rounded  h-10"
                                    onClick={() => setIsOpen(!isOpen)}
                                />
                            </motion.div>
                        </div>
                        <div className="text-white flex items-center justify-center h-full">
                            <motion.ul
                                className="text-3xl font-bold">
                                {
                                    navItems.map((item, index) => (
                                        <motion.li key={index}
                                            initial={{opacity: 0, y: -300, color: "white"}}
                                            whileInView={{opacity: 1, y: 0}}
                                            transition={{duration: 0.4, ease: "easeInOut"}}
                                            whileHover={{color: "#6D28D9"}}
                                            animate={{opacity: 1}}
                                            exit={{opacity:0, y: -300, color: "white"}}
                                        >
                                            {item}
                                        </motion.li>
                                    ))
                                }
                            </motion.ul>
                        </div>

                    </motion.div>
                </div>
            )}
            </AnimatePresence>
        </div>
    )
}