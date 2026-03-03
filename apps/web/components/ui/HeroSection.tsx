import {motion} from "motion/react";
import { useState, useEffect } from "react";
import {Code, Zap, Cpu, Cloud} from "lucide-react";
import { delay } from "motion";
import { section } from "motion/react-client";

const floatingPoints = [
    {
        Icon:Code, delay: 0, x: '20%', y: '30%'
    },
    {
        Icon:Zap, delay: 0.2, x: '70%', y: '20%'
    },
    {
        Icon:Cpu, delay: 0.4, x: '80%', y: '60%'
    },
    {
        Icon:Cloud, delay: 0.6, x: '15%', y: '70%'
    }

]

const typewriteTexts = [
    'AI tools', 'Dev Frameworks', 'CLI Magic', 'Cloud Platforms'
]
export const HeroSection = ({onExplore}: {onExplore: () => void}) => {

    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(()=>{
        const currentFullText = typewriteTexts[currentTextIndex]
        const typingSpeed = isDeleting ? 50 : 100;

        const timeout = setTimeout(()=>{
            if(isDeleting){
                if(displayText.length < currentFullText.length){
                    setDisplayText(currentFullText.slice(0,displayText.length+1))
                }
                else{
                    setTimeout(()=>setIsDeleting(true), 2000);
                }
            }else{
                if(displayText.length > 0){
                    setDisplayText(displayText.slice(0,-1))
                }
                else{
                    setIsDeleting(false)
                    setCurrentTextIndex((prev) => (prev + 1)%typewriteTexts.length)
                }
            }
        },typingSpeed)
        return () => clearTimeout(timeout)
    },[displayText,isDeleting,currentTextIndex])

return (
    <section>
        
    </section>
)
}