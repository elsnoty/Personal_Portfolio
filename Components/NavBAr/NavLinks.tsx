import React from 'react'
import NavkLinksprop from './NavkLinksProp'

const NavLinks = () => {
  return (
    <div className='flex justify-between gap-5 items-center'>
      <NavkLinksprop text={'About'} path={'/#About'}/>
      <NavkLinksprop text={'Projects'} path={'/#Projects'}/>
      <NavkLinksprop text={'Contact'} path={'/#Contact'}/>
    </div>
  )
}

export default NavLinks;
