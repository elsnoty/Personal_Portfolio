import React from 'react';
import ProjectsProp from './ProjectsProp';
import Btn from '@/util/Btn';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import githup from "@/public/icons8-github.svg";
import Demo from "@/public/demoIcon.png";
import Reveal from '@/util/Reveal';

interface Project {
    title: string;
    description: string;
    demoLink: string;
    githubLink: string;
    heightClass: string;
    skills: StaticImageData[];
    imageCard: StaticImageData;
}

const ProjectCard = ({ title, description, demoLink, githubLink, heightClass, skills, imageCard }: Project) => (
    <ProjectsProp 
    className={`${heightClass} lg:max-w-[600px] bg-[#84c1f10d] backdrop-blur-[15px]
    shadow-xl sticky top-0 md:my-10 lg:my-20 rounded-md p-5`}>
        <Reveal>
        <h3 className='text-3xl'>{title}</h3>
        </Reveal>
        <Reveal>
        <p className='py-5'>{description}</p>
        </Reveal>
        <div className='flex flex-wrap gap-4 mt-auto'>
            {skills.map((skill, index) => (
                <Image key={index} src={skill} alt="Skill icon" className='w-8 h-8' />
            ))}
        </div>
        <div className='flex items-center flex-wrap gap-2 my-4'>
            <Link href={demoLink} target='_blank'>
                <Btn 
                    className='flex gap-2 bg-red-500 items-center px-2 py-1 rounded-lg'
                    text='Live Demo'
                    icon={<Image src={Demo} alt='Demo' />}
                />
            </Link>
            <Link href={githubLink} target='_blank'>
                <Btn 
                    className='flex gap-2 bg-red-500 items-center px-2 py-1 rounded-lg'
                    text='GitHub'
                    icon={<Image src={githup} alt='GitHub' />}
                />
            </Link>
        </div>
            <Image src={imageCard} alt='data' className='rounded-xl md:hidden '/>
    </ProjectsProp>
);

export default ProjectCard;
