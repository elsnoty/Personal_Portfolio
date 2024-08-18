import Link from 'next/link'
import React from 'react'
import Social from './Social'

const Footer = () => {
  return (
    <div className='flex justify-between flex-wrap items-center font-bold gap-y-5  bg-[#021526] text-white max-xl:px-20 max-lg:px-5 py-5 px-32'>
        <div className='flex flex-wrap gap-5'>
      <div>
        <p className='font-Exo pb-4 text-xl'>Version</p>
        <h3 className='font-Exo text-gray-500'>&copy; Mostafa Shawky</h3>
      </div>
      <div >
        <p className='text-xl font-Exo pb-4'>Contact</p>
        <ul className='flex flex-wrap gap-3  w-fit'>
        <Link href="mailto:mostafashawky399@gmail.com" passHref>
          mostafashawky399@gmail.com
        </Link>
        <Link href="tel:+201092926578" passHref>
          +20 109 292 6578
        </Link>
        </ul>
      </div>
        </div>
        <Social />
    </div>
  )
}

export default Footer
