'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, animate } from 'framer-motion';
import styles from '../Components/NavBAr/nav.module.css';

const CustomCursor: React.FC = () => {
  const cursor = useRef<HTMLDivElement>(null);
  const cursorSize = 25;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const scale = {
    x: useMotionValue(1),
    y: useMotionValue(1),
  };

  // Smooth out the mouse values
  const smoothOptions = { damping: 30, stiffness: 400, mass: 0.8 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;

    // Move custom cursor to the mouse position
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  useEffect(() => {
    window.addEventListener('mousemove', manageMouseMove);
    return () => {
      window.removeEventListener('mousemove', manageMouseMove);
    };
  }, []);

  const template = ({ rotate, scaleX, scaleY }: { rotate: number; scaleX: number; scaleY: number }) => {
    return `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`;
  };

  return (
    <div>
      <motion.div
        transformTemplate={template}
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
          scaleX: scale.x,
          scaleY: scale.y,
        }}
        animate={{
          width: cursorSize,
          height: cursorSize,
        }}
        className={styles.cursor}
        ref={cursor}
      ></motion.div>
    </div>
  );
};

export default CustomCursor;
