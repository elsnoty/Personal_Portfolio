import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import docCV from "../../public/icons8-document.gif"
import githup from "../../public/icons8-github.gif"
import linkedin from "../../public/icons8-linkedin-2.gif"
import TypeEffect from './TypeEffect';
import Reveal from '@/util/Reveal';
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
          className='bg-gradient-to-t from-[#2b3137] to-[#24292e] text-black font-bold px-6 py-3 rounded-lg flex items-center gap-2'>
          <Image 
            src={githup}
            alt='docsGif'
            className='rounded-2xl w-8 h-8'/>
            <p>View My Work</p>
          </Link>
          <Link
          href="https://drive.google.com/file/d/1PgLiFrxnXWWtc0GgYbJ90af4ldbeWtSy/view?usp=sharing"
          className='text-white px-6 py-3 rounded-lg bg-blue-600 flex items-center gap-2' 
          target="_blank">
            <Image 
            src={linkedin}
            alt='docsGif'
            className='rounded-2xl w-[34px] h-[34px]'/>
            <p>LINKEDIN</p>
          </Link>
          <Link
          href="https://drive.google.com/file/d/1PgLiFrxnXWWtc0GgYbJ90af4ldbeWtSy/view?usp=sharing"
          className='text-white px-6 py-3 rounded-lg bg-green-600 flex items-center gap-2' 
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
