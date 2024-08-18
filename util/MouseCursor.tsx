'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import styles from '../Components/NavBAr/nav.module.css';

const CustomCursor: React.FC = () => {
  const cursor = useRef<HTMLDivElement>(null);
  const cursorSize = 25;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  // Smooth out the mouse values
  const smoothOptions = { damping: 30, stiffness: 400, mass: 0.8 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const scale = useSpring(1, smoothOptions);

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  const handleMouseEnter = () => {
    scale.set(1.8); // Increase scale on hover
  };

  const handleMouseLeave = () => {
    scale.set(1); // Reset scale when not hovering
  };

  useEffect(() => {
    window.addEventListener('mousemove', manageMouseMove);

    // Add event listeners to buttons, links, and text elements
    document.querySelectorAll('button, a, .hover-target, h1, h2, h3, h4, h5, h6, p').forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', manageMouseMove);
      document.querySelectorAll('button, a, .hover-target, h1, h2, h3, h4, h5, h6, p').forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <motion.div
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
        scale: scale,
        width: cursorSize,
        height: cursorSize,
      }}
      className={styles.cursor}
      ref={cursor}
    />
  );
};

export default CustomCursor;
