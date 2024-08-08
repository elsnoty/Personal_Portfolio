"use client"
import React from 'react';
import ReactLenis from '@studio-freight/react-lenis';

interface SmoothScrollingProps {
  children: React.ReactNode;
}

function SmoothScrolling({ children }: SmoothScrollingProps) {
  return (
    <ReactLenis root options={{
      lerp: 0.07,
      duration: 1.2,
    }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;