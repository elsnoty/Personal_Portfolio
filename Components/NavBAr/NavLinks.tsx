'use client';

import React from 'react';
import { motion } from 'framer-motion';
import LinksData from './Links';

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

const NavLinks = ({ className = '', children, onLinkClick }: { className?: string, children?: React.ReactNode, onLinkClick?: () => void }) => {
  return (
    <motion.div className={`${className}`}>
      <div className='md:hidden'>
        <h3 className='text-xl'>Navigation</h3>
        <div className='h-1 w-full bg-slate-700 my-7'></div>
      </div>
      {children}
      {navLinks.map((data, index) => (
        <LinksData key={index} href={data.path} index={index} className='font-Algera' onClick={onLinkClick}>
          {data.text}
        </LinksData>
      ))}
    </motion.div>
  );
};

export default NavLinks;
