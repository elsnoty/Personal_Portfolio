"use client"
import React from 'react';
import LinksData from './Links';
import { motion } from 'framer-motion';
import { menuSlide } from './animation';
import Curve from './Curve';
import Social from '../Footer/Social';

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

const NavLinks = ({ className = '', children }: { className?: string, children?: React.ReactNode} ) => {
  return (
    <motion.div
    className={`${className}`}>
      <div className='md:hidden'>
          <h3>Navigation</h3>
          <div className='h-1 w-full bg-slate-700 my-7'></div>
      </div>
      {children}
          {navLinks.map((data, index) => (
        <LinksData key={index} href={data.path} index={index} className='text-4xl font-Algera'>
          {data.text}
          </LinksData>
      ))}
    </motion.div>
  );
};

export default NavLinks;
