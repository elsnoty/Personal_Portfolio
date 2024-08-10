import React from 'react'
import NavLinks from './NavLinks'
import Link from 'next/link'
import BurgerMenu from './BurgerMenu'

const Nav = () => {
  return (
      <div className='flex justify-between gap-5 fixed border-blue-950 border-b-2 w-full py-3 backdrop:filter backdrop-blur-[1px]
      max-xl:px-20 max-lg:px-5 px-32 bg-blue-950/35 z-30 text-white '>
      <Link href='/#MS' className='font-BlackOps text-7xl '>MS</Link>    
      <NavLinks />
      </div>
  )
}

export default Nav
