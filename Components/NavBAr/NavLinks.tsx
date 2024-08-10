"use client"
import React from 'react';
import LinksData from './Links';
import { motion } from 'framer-motion';
import { menuSlide } from './animation';
import Curve from './Curve';

interface NavLink {
  text: string;
  path: string;
  className?: string;
}

const navLinks: NavLink[] = [
  { text: 'About', path: '/#About' },
  { text: 'Projects', path: '/#Projects' },
  { text: 'Contact', path: '/#Contact' },
];

const NavLinks = ({ className = '' }: { className?: string }) => {
  return (
    <motion.div
    variants={menuSlide}
    animate="enter" 
    exit="exit" 
    initial="initial"
    className={`${className}`}>
      {navLinks.map((data, index) => (
        <LinksData key={index} href={data.path} index={index}>
          {data.text}
        </LinksData>
      ))}
      <Curve />
    </motion.div>
  );
};

export default NavLinks;
