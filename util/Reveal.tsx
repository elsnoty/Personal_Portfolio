"use client"
import { motion, useAnimation, useInView } from 'framer-motion';
import React, { ReactNode, useEffect, useRef } from 'react'

interface RevealContent {
    children: ReactNode;
    width?: "fit-content" | "100%";
}

const Reveal = ({children, width= "fit-content"}: RevealContent) => {
    const RefReveal = useRef(null);
    const inView = useInView(RefReveal, {once:true})
    const animationControl = useAnimation();
    const colorControl = useAnimation();

    useEffect(()=>{
        if (inView) {
            //start animation
            animationControl.start("visiable")
            colorControl.start("visiable")
        }
    }, [inView])
  return (
    <div ref={RefReveal} className={`relative overflow-hidden`} style={{width}}>
        <motion.div 
        variants={{
            hidden: {opacity:0, y:75},
            visiable: {opacity:1, y:0},
        }}
        initial= "hidden"
        animate={animationControl}
        transition={{duration:0.5, delay:0.25}}
        >
        {children}
        </motion.div>
        <motion.div
                variants={{
            hidden: {left: 0},
            visiable: {left: "100%"},
        }}
        initial= "hidden"
        animate={colorControl}
        transition={{duration:0.5, ease:"easeIn"}}
        style={{
            position:"absolute",
            top:4,
            bottom: 4,
            left:0,
            right:0,
            background:"#17153B",
            zIndex:20,
        }}
        >
        
        </motion.div>
    </div>
  )
}

export default Reveal
