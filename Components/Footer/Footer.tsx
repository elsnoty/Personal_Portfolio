import Link from 'next/link'
import React from 'react'
import Social from './Social'

const Footer = () => {
  return (
    <div className='flex justify-between flex-wrap items-center font-bold gap-y-5  bg-[#021526] text-white max-xl:px-20 max-lg:px-5 py-5 px-32'>
        <div className='flex flex-wrap gap-5'>
      <div>
        <p className='font-Exo pb-4 text-xl'>Version</p>
        <h3 className=''>2024 &copy; Edition</h3>
      </div>
      <div >
        <p className='text-xl font-Exo pb-4'>Contact</p>
        <ul className='flex flex-wrap gap-3  w-fit'>
            <li><Link href={""}>mostafashawky399@gmil.com</Link></li>
            <li><Link href={""}>+20 1092926578</Link></li>
        </ul>
      </div>
        </div>
        <Social />
    </div>
  )
}

export default Footer
