'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

const Skills = () => {
  const { scrollYProgress } = useViewportScroll();
  const [sectionHeight, setSectionHeight] = useState(0);
  
  // Explicitly type the ref as HTMLDivElement or null
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (sectionRef.current) {
      setSectionHeight(sectionRef.current.scrollWidth - window.innerWidth);
    }
  }, []);

  const translateX = useTransform(scrollYProgress, [0, 1], [0, -sectionHeight]);

  return (
    <section className="scroll-section-outer" ref={sectionRef}>
      <motion.div
        className="scroll-section-inner"
        style={{ x: translateX }}
      >
        <div className="scroll-section">
          <h3>Section 1</h3>
        </div>
        <div className="scroll-section">
          <h3>Section 2</h3>
        </div>
        <div className="scroll-section">
          <h3>Section 3</h3>
        </div>
        <div className="scroll-section">
          <h3>Section 4</h3>
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
