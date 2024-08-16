import Link from 'next/link'
import React from 'react'
import style from './footer.module.css'

const Social = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`${className} items-center`}>
      <h3 className='text-2xl mb-4 text-start '>Social</h3>
      <div className='flex gap-3 items-start flex-wrap'>
        <Link href="https://www.instagram.com/mostafa_shawky_94/" target="_blank" className={`${style.underlineFill} z-50`}>
          Instagram
        </Link>
        <Link href="https://twitter.com/ElSNOTY_7" target="_blank" className={`${style.underlineFill}`}>
          Twitter
        </Link>
        <Link href="https://www.linkedin.com/in/mostafa-shawky-a58053263/" target="_blank" className={`${style.underlineFill}`}>
          LinkedIn
        </Link>
      </div>
    </div>
  )
}

export default Social
