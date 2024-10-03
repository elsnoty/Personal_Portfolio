import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import b1o from "../../public/ProjectImage4.jpg";
import b2o from "../../public/PojectImage2.jpg";
import b3o from "../../public/ProjectImage3.jpg";
import b4o from "../../public/ProjectImage1.jpg"; 
import Pr5o from "@/public/E-commerce.png"

interface AdditionalContentProps {
    scrollPosition: number;
    containerHeight: number;
    numberOfBoxes: number;
}

const images = [
    { id: 5, src: Pr5o, alt: 'Project5' },
    { id: 1, src: b1o, alt: 'Project1' },
    { id: 4, src: b4o, alt: 'Project4' },
    { id: 2, src: b2o, alt: 'Project2' },
    { id: 3, src: b3o, alt: 'Project3' },
];

const AdditionalContent= ({ scrollPosition, containerHeight, numberOfBoxes }: AdditionalContentProps) => {
    const boxHeight = containerHeight / numberOfBoxes;
    let currentImage = null;

    for (let i = numberOfBoxes - 1; i >= 0; i--) {
        if (scrollPosition > boxHeight * i - 200) {
            currentImage = images[i];
            break;
        }
    }

    return (
        <div className='relative top-48 rounded-2xl'>
            <AnimatePresence>
                {currentImage && (
                    <motion.div
                        key={currentImage.alt}
                        initial={{ translateY: 0, opacity: 0 }}
                        animate={{ scale: 1, translateY: -100, opacity: 1 }}
                        exit={{ opacity: 0, rotate: 0, scale: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            duration: 0.5,
                            delay: 0.1,
                        }}
                        className="absolute inset-0 flex justify-center items-center "
                    >
                        <div className="relative max-w-[550px] min-w-[320px] mx-8 min-h-[300px]">
                            <Image
                                src={currentImage.src}
                                alt={currentImage.alt}
                                className=' rounded-2xl min-h-[200px]'
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AdditionalContent;
