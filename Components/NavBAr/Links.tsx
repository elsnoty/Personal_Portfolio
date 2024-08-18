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
<Link
  href={data.href}
  className={`${data.className} relative pl-5 hover:before:content-['•'] hover:before:absolute hover:before:left-0 hover:before:top-1/2 hover:before:translate-y-[-50%] hover:before:text-4xl
   hover:before:text-white before:opacity-0 hover:before:opacity-100 before:scale-50 hover:before:scale-100 before:transition before:duration-300`}
  onClick={data.onClick}
>
  {data.children}
</Link>
      </motion.div>
    </Magnetics>
  );
}

export default LinksData;
