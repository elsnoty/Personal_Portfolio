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
    <div className='md:hidden'>
      <div>
        <div onClick={() => {setIsActive(!isActive)}} className={styles.button}>
          <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
        </div>
    </div>
    <AnimatePresence mode="wait">
      {isActive && <NavLinks 
      className='fixed flex items- text-center flex-col right-0 top-0 z-[50] gap-y-4 w-[60%] bg-[#292929] h-screen p-28'/>}
    </AnimatePresence>
    </div>
  )
}

export default BurgerMenu;