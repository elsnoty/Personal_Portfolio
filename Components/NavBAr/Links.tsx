"use client"
import { motion } from 'framer-motion';
import React from 'react'
import { slide } from './animation';
import Link from 'next/link';

interface Data{
    children: React.ReactNode;
    href: string;
    index: number;
}
const LinksData = (data: Data) => {
  return (
    <motion.div custom={data.index} 
    variants={slide} 
    animate="enter" 
    exit="exit" 
    initial="initial"
    >
        <Link href={data.href}>
        {data.children}
        </Link>
    </motion.div>
  )
}

export default LinksData
