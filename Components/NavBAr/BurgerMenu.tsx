'use client';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import NavLinks from './NavLinks';
import Magnetics from '../../util/testMagntic';
import Social from '../Footer/Social';
import { menuSlide } from './animation';
import Curve from './Curve';
import styles from './nav.module.css';

const BurgerMenu = () => {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current && !menuRef.current.contains(event.target as Node) &&
      buttonRef.current && !buttonRef.current.contains(event.target as Node)
    ) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    // Use capture phase to catch the event early
    document.addEventListener('click', handleClickOutside, { capture: true });

    return () => {
      document.removeEventListener('click', handleClickOutside, { capture: true });
    };
  }, []);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  const handleLinkClick = () => {
    setIsActive(false);
  };

  return (
    <div className='md:hidden'>
      <Magnetics>
      <div
        ref={buttonRef}
        onClick={() => setIsActive(!isActive)}
        className={`overflow-hidden ${styles.button}`}
      >
        <div className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}></div>
      </div>
      </Magnetics>
      <AnimatePresence mode='wait'>
        {isActive && (
          <motion.div
            key="menu"
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className='fixed right-0 top-0 z-[50] w-[60%] max-sm:w-full h-screen bg-[#292929] py-24 max-sm:px-14 px-12 flex flex-col justify-between'
            ref={menuRef}
          >
            <NavLinks className='flex-1 text-start flex flex-col gap-y-4 text-6xl font-bold max-sm:text-4xl' onLinkClick={handleLinkClick} />
            <Social className='mt-4' />
            <Curve />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BurgerMenu;
