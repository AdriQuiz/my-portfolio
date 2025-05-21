import React from 'react'
import my_image3 from "../assets/my_image3.jpg";
import Button from './Button';

function About() {
    return (
        <div id='about' className='bg-white lg:flex lg:items-center lg:justify-center lg:p-40 px-10 py-16 min-h-[100vh]'>
            <div className='flex items-center justify-center'>
                <img src={my_image3} alt="my image" className='lg:h-96 lg:w-96 sm:h-60 sm:w-60 rounded-full object-cover flex-shrink-0' />
            </div>
            <div className='mx-10'>
                <h2 className='text-4xl font-bold text-color-6 mt-10 lg:my-4'>Sobre mí</h2>
                <h3 className='font-bold lg:my-4 my-5 text-blue-400 text-xl'>Full-Stack Developer</h3>
                <p className='text-blue-950 mb-5 text-justify'>
                    Soy una Desarrolladora Full-Stack en formación con enfoque en Front-End orientada al detalle con una base sólida en desarrollo de software y desarrollo
                    web.
                </p>
                <p className='text-blue-950 mb-10 text-justify'>Con habilidades en Laravel, React, NodeJS, Git, entre otras tecnologías y con experiencia sólida
                    en maquetación de interfaces de usuario a partir de diseños con precisión.</p>
                <div className='flex justify-center md:justify-start'>
                    <Button type="blue" content="Experiencia" href="#experience" />
                </div>
            </div>
        </div>
    )
}

export default About