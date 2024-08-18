import React from 'react'
import Reveal from '@/util/Reveal'
import Magnetics from '../../util/testMagntic'
import styles from "./about.module.css"

const About = () => {
  return (
<div className='text-white max-xl:px-20 max-lg:px-5 px-32 flex flex-col bg-gradient-to-b from-black to-[#021526] py-10' id='About'>
  <Reveal>
    <h1 className='text-6xl py-5 font-BlackOps font-bold w-fit'>About</h1>
  </Reveal>
  <Reveal>
    <h3 className='font-Algera text-2xl max-sm:text-xl'>
 Hi, I&apos;m Mostafa Shawky, a passionate and creative Front-end Developer from Giza, Egypt. I specialize in transforming design concepts into interactive, user-friendly web experiences. Currently pursuing a degree in Computer Science, I have built a diverse portfolio that includes food delivery platforms, e-commerce sites,and dynamic web applications.
My expertise lies in crafting seamless interfaces and integrating modern animations to create engaging user experiences. I am always eager to stay at the forefront of front-end technologies, ensuring my work remains cutting-edge.
When I&apos;m not coding, you&apos;ll likely find me immersed in video games or catching up on sleep. I&apos;m always excited to take on new challenges and bring innovative ideas to life. Feel free to explore my portfolio, and don&apos;t hesitate to reach out if you have any questions or would like to collaborate.
    </h3>
  </Reveal>
  <div className='flex justify-end mt-8'> 
    <Magnetics>
      <div className={`relative overflow-hidden bg-white text-black font-bold p-20 rounded-full w-fit ${styles.hoverBg}`}>
        About
      </div>
    </Magnetics>
  </div>
</div>

  )
}

export default About
