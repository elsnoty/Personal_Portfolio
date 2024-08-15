"use client"
import React, { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';

interface MagneticProps {
  children: React.ReactNode;
}

const Magnetics: React.FC<MagneticProps> = ({ children }) => {
  const magnetic = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (magnetic.current) {
      const xTo = gsap.quickTo(magnetic.current, 'x', { duration: 1, ease: 'elastic.out(1, 0.3)' });
      const yTo = gsap.quickTo(magnetic.current, 'y', { duration: 1, ease: 'elastic.out(1, 0.3)' });

      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = magnetic.current!.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        xTo(x);
        yTo(y);
      };

      const handleMouseLeave = () => {
        xTo(0);
        yTo(0);
      };

      magnetic.current.addEventListener('mousemove', handleMouseMove);
      magnetic.current.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        magnetic.current?.removeEventListener('mousemove', handleMouseMove);
        magnetic.current?.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return React.cloneElement(children as React.ReactElement, { ref: magnetic });
};

export default Magnetics;
