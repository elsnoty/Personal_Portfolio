import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import docCV from "../../public/icons8-document.gif"
import githup from "../../public/icons8-github.gif"
import linkedin from "../../public/icons8-linkedin-2.gif"
import TypeEffect from './TypeEffect';
import Reveal from '@/util/Reveal';
import styles from "./hero.module.css"

const Hero = () => {
  
  return (
    <div className='w-full mt-56 max-md:mt-32 max-xl:px-20 max-lg:px-5 max-sm:px-[10px] px-32'>
      <TypeEffect />
      <div className=''>
        <Reveal>
          <h1 className='text-6xl py-5 font-BlackOps font-bold max-sm:text-4xl text-[#E2E2B6]'>Mostafa Shawky</h1>
          </Reveal>
        <Reveal>
          <h1 className='text-5xl py-5 font-Algera font-bold max-sm:text-3xl text-[#E2E2B6]'>FRONT-END DEVELOPER</h1>
          </Reveal>
        <Reveal>
        <p className='text-2xl font-Exo font-bold'>
        A passionate and creative Front-end developer is adept at bringing any design concept to life.
        </p>
        </Reveal>
        <div className='mt-8 flex flex-wrap gap-5 justify-start items-start'>
          <Link href="https://github.com/elsnoty" target='_blank' 
          className={`shadow-lg shadow-gray-600 before:bg-gray-800 ${styles.btns} ${styles.hoverBg}`}>
          <Image 
            src={githup}
            alt='docsGif'
            className='rounded-2xl w-8 h-8'/>
            <p>View My Work</p>
          </Link>
          <Link
          href="https://www.linkedin.com/in/mostafa-shawky-a58053263/"
          className={`shadow-lg shadow-blue-700 before:bg-blue-700 ${styles.btns} ${styles.hoverBg}`}
          target="_blank">
            <Image 
            src={linkedin}
            alt='docsGif'
            className='rounded-2xl w-[34px] h-[34px]'/>
            <p>LINKEDIN</p>
          </Link>
          <Link
          href="https://drive.google.com/file/d/1AK4M9O8COsh9Xq52-J7uSuvCzLVInNje/view?usp=sharing"
          className={`shadow-lg shadow-green-700 before:bg-green-700 ${styles.btns} ${styles.hoverBg}`} 
          target="_blank">
            <Image 
            src={docCV}
            alt='docsGif'
            className='rounded-2xl w-8 h-8'/>
            <p>CV</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
