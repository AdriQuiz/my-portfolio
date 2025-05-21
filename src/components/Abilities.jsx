import React from 'react'
import { stackItems } from '../constants'

function Abilities() {
    return (
        <div id='abilities' className='px-10 py-16 lg:p-40 lg:px-0 min-h-[100vh]'>
            <div className='flex justify-center items-center text-center p-0 m-10'>
                <h2 className='text-4xl text-blue-400 font-bold'>Habilidades técnicas</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 
            lg:grid-cols-3 gap-6 bg-color-6 m-2 lg:px-32 lg:py-10'>
                {stackItems.map((item) => (
                    <div key={item.id} className='bg-white rounded-lg py-5 flex items-center justify-center h-[150px] outline-none
                    hover:ring-4 hover:ring-blue-400 transform hover:-translate-y-2 transition duration-300'>
                        <img src={item.photo} alt="photo" width={70} height={70} className='mx-4' />
                        <p className='text-color-6 font-bold'>{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Abilities