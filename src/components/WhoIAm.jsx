import React from 'react'
import my_image_nbg from "../assets/my_image_nbg.png";
import Button from './Button';

function WhoIAm() {
    return (
        <div id='whoiam' className='pt-20 lg:pt-0 lg:flex items-center justify-around mx-10 min-h-[100vh]'>
            <div className='text-center mb-16 lg:mb-0'>
                <h4 className='text-lg text-white mb-5 font-semibold lg:text-left'>Hola, soy Adriana Quiroz</h4>
                <h2 className='text-5xl text-blue-400 font-bold mb-10 lg:text-left'>Full-Stack Developer</h2>
                <div className='flex justify-center items-center lg:justify-start space-x-4'>
                    <Button content={'Contáctame'} type={'blue'} href={'#contact'} />
                    <Button content={'Proyectos'} type={'white'} href={'#projects'} />
                </div>
            </div>
            <div className='flex items-center justify-center mb-20 lg:mb-0'>
                <img src={my_image_nbg} alt="my image" className='rounded-full ring-4 ring-blue-400 lg:h-96 lg:w-96' />
            </div>
        </div>
    )
}

export default WhoIAm