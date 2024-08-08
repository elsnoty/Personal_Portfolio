import Link from 'next/link'
import React from 'react'

interface NavkLinksProp{
    text: string,
    className?: string,
    path: string,
}
const NavkLinksprop = (props: NavkLinksProp) => {

  return (
    <Link href={props.path} className={props.className}>
      {props.text}
    </Link>
  )
}

export default NavkLinksprop;
