import React from 'react';
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

const NavLinks = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`flex justify-between gap-5 items-center ${className}`}>
      {navLinks.map((data, index) => (
        <LinksData key={index} href={data.path} index={index}>
          {data.text}
        </LinksData>
      ))}
    </div>
  );
};

export default NavLinks;
