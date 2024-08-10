'use client';
import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ProjectsProp from './ProjectsProp';
import AdditionalContent from './AdditionalContent';
import ProjectDeatails from './ProjectDeatails';

const Projects = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [containerHeight, setContainerHeight] = useState(0);
    const RefTarget = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (RefTarget.current) {
                const rect = RefTarget.current.getBoundingClientRect();
                const scrollTop = window.scrollY || document.documentElement.scrollTop;
                const elementTop = rect.top + scrollTop;
                const currentScrollPosition = scrollTop - elementTop;
                setScrollPosition(currentScrollPosition);
                setContainerHeight(rect.height);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Set initial values

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div id='Projects' className='bg-gradient-to-b from-[#042B4E] to-[#064174] max-xl:px-20 max-lg:px-5 px-32 py-10' ref={RefTarget}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-md:grid-cols-1'>
                <ProjectDeatails/>
                <div className='bg-white/45 sticky top-72 max-w-[550px] h-[250px] rounded-2xl my-20 max-md:hidden'>
                    <div className='relative'>
                        <AnimatePresence>
                            <AdditionalContent
                                scrollPosition={scrollPosition}
                                containerHeight={containerHeight}
                                numberOfBoxes={4}
                            />
                        </AnimatePresence>  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
