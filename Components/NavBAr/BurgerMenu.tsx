'use client'
import styles from './nav.module.css'
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import NavLinks from './NavLinks';

const BurgerMenu = () =>{

  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect( () => {
    if(isActive) setIsActive(false)
  }, [pathname])

  return (
    <div className='relative h-screen w-full max-md:hidden'>
    <div className={styles.main}>

      <div className={styles.header}>
        <div onClick={() => {setIsActive(!isActive)}} className={styles.button}>
          <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
        </div>
      </div>

    </div>
    <AnimatePresence mode="wait">
      {isActive && <NavLinks className='hidden'/>}
      dsfsd
    </AnimatePresence>
    </div>
  )
}

export default BurgerMenu;