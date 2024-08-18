"use client"
import React from 'react';
import { ReactLenis, useLenis } from 'lenis/react'
interface SmoothScrollingProps {
  children: React.ReactNode;
}

function SmoothScrolling({ children }: SmoothScrollingProps) {
  return (
    <ReactLenis root options={{
      lerp: 0.059,
      // duration: 1.2,
    }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;