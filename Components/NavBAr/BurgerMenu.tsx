'use client';
import styles from './nav.module.css';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import NavLinks from './NavLinks';
import Magnetics from '../../util/testMagntic';
import Social from '../Footer/Social';
import { menuSlide } from './animation';
import Curve from './Curve';

const BurgerMenu = () => {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  return (
    <div className='md:hidden'>
      <Magnetics>
        <div onClick={() => setIsActive(!isActive)} className={styles.button}>
          <div className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}></div>
        </div>
      </Magnetics>
      <AnimatePresence mode='wait'>
        {isActive && (
          <motion.div
            key="Add" // Add a unique key to ensure Framer Motion handles the element correctly
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className='fixed right-0 top-0 z-[50] w-[60%] max-sm:w-full h-screen bg-[#292929] py-24 px-12 flex flex-col justify-between'
          >
            <NavLinks className='flex-1 text-start flex flex-col gap-y-4' />
            <Social className='mt-4' />
            <Curve />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BurgerMenu;
