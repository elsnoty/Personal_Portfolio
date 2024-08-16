import { motion } from 'framer-motion';
import React from 'react';
import { slide } from './animation';
import Link from 'next/link';
import Magnetics from '../../util/testMagntic';

interface Data {
  children: React.ReactNode;
  href: string;
  index: number;
  className?: string;
  onClick?: () => void;
}
const LinksData = (data: Data) => {
  return (
    <Magnetics>
      <motion.div
        custom={data.index}
        variants={slide}
        animate="enter"
        exit="exit"
        initial="initial"
        className='w-fit'
      >
        <Link href={data.href} className={data.className} onClick={data.onClick}>
          {data.children}
        </Link>
      </motion.div>
    </Magnetics>
  );
}

export default LinksData;
