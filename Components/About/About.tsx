import React from 'react'
import Reveal from '@/util/Reveal'
import Magnetics from '../../util/testMagntic'

const About = () => {
  return (
    <div className='text-white max-xl:px-20 max-lg:px-5 px-32 flex flex-col bg-[#03346E] py-10'>
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
    <Magnetics>
    <div className='text-end bg-black px-14 py-16 rounded-full w-fit'>About</div>
    </Magnetics>
    </div>
  )
}

export default About
