import React from 'react';
import ProjectCard from './ProjectCard';
import nextjs from "@/public/icons8-nextjs.svg";
import reactjs from "@/public/icons8-react-js.svg";
import tailwind from "@/public/icons8-tailwind-css.svg";
import gsap from "@/public/gsap-greensock.svg";
import framer from "@/public/icons8-framer.png";
import redux from "@/public/icons8-redux.svg";
import Pr1o from "@/public/ProjectImage4.jpg"
import Pr2o from "@/public/PojectImage2.jpg"
import Pr3o from "@/public/ProjectImage3.jpg"
import Pr4o from "@/public/ProjectImage1.jpg"

const ProjectDetails = () => {
    const projects = [
        {
            title: 'Food Delivery',
            description: 'I developed a dynamic food delivery website using Next.js, incorporating advanced GSAP and Framer Motion animations to enrich user interaction. Utilizing Tailwind CSS for a polished UI and Redux for seamless state management.',
            demoLink: 'https://food-delivery-vert.vercel.app/',
            githubLink: 'https://github.com/elsnoty/Food-Delivery',
            heightClass: 'h-[full] max-md:h-[700px] lg:h-[500px]',
            skills: [nextjs, tailwind, framer, redux, gsap],
            imageCard: Pr1o,
        },
        {
            title: 'RealEstate',
            description: 'This website offers a seamless experience for finding your dream property. With advanced filtering options for price, location, and property type Responsive design ensures a smooth browsing experience across all devices.',
            demoLink: 'https://real-estate-nu-amber.vercel.app/',
            githubLink: 'https://github.com/elsnoty/RealEstate',
            heightClass: 'h-[full] md:h-[700px] lg:h-[500px]',
            skills: [reactjs, tailwind, framer],
            imageCard: Pr2o,
        },
        {
            title: 'NFT Landing Page',
            description: 'This page was Transformed from Figma design and implemented with Lenis Scroll and GSAP, as well as Framer Motion. The design is fully responsive to enhance user experience.',
            demoLink: 'https://nft-liart-rho.vercel.app/',
            githubLink: 'https://github.com/elsnoty/nft',
            heightClass: 'h-[full] md:h-[700px] lg:h-[500px]',
            skills: [reactjs, tailwind, framer],
            imageCard: Pr3o,
        },
        {
            title: 'UNO Landing Page',
            description: 'This page was Transformed from Figma design and implemented with Lenis Scroll and GSAP, as well as Framer Motion. The design is fully responsive to enhance user experience.',
            demoLink: 'https://uno-theta.vercel.app/',
            githubLink: 'https://github.com/elsnoty/UNO',
            heightClass: 'h-[full] md:h-[700px] lg:h-[500px]',
            skills: [nextjs, tailwind],
            imageCard: Pr4o,
        },
    ];

    return (
        //get data
        <div className='flex-col flex gap-5 text-white'>
            {projects.map((project, index) => (
                <ProjectCard 
                    key={index}
                    title={project.title}
                    description={project.description}
                    demoLink={project.demoLink}
                    githubLink={project.githubLink}
                    heightClass={project.heightClass}
                    skills={project.skills}
                    imageCard={project.imageCard}
                />
            ))}
        </div>
    );
};

export default ProjectDetails;
