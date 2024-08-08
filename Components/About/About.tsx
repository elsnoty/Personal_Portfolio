import React from 'react'
import Skills from './Skills'
import Reveal from '@/util/Reveal'

const About = () => {
  return (
    <div className='text-white max-xl:px-20 max-lg:px-5 px-32 flex text-start flex-col bg-gradient-to-t from-[#042B4E] to-[#021526] py-10'>
      <Reveal>
      <h1 className='text-6xl py-5 font-BlackOps font-bold w-fit'>About</h1>
      </Reveal>
      <Reveal>
      <h3 className='font-Algera text-2xl'>Hi, I&apos;m Mostafa Shawky, a creative front-end developer from Giza, Egypt, who is dedicated to transforming design concepts into interactive, user-friendly web experiences. Currently advancing towards a degree in Computer Science, I’ve built a diverse portfolio that
includes e-commerce sites, food delivery platforms, and dynamic web applications.
My expertise lies in crafting seamless  interfaces and integrating modern animations to create engaging user experiences. I’m always on the lookout for the latest trends in front-end technologies,
 ensuring that my work stays at the cutting edge.
When I&apos;m not coding, you&apos;ll find me either immersed in video games or catching up on sleep.
 I&apos;m always eager to take on new challenges and bring fresh, innovative ideas to life. Feel free to explore my portfolio, 
 and don&apos;t hesitate to reach out if you have any questions or want to collaborate.</h3>
 </Reveal>
    </div>
  )
}

export default About
