import React from 'react'

function Experience() {
    return (
        <div id='experience' className='py-16 px-10 lg:p-40 text-center min-h-[100vh]'>
            <h2 className='text-4xl mb-12 text-white font-bold'>Experiencia</h2>
            <div className='mb-20 border rounded-lg p-8 lg:p-14'>
                <h2 className='text-3xl text-blue-400 font-bold mb-10 mt-12 text-center'>Desarrolladora Web - Pasante &bull; trabajito</h2>
                <div className='my-8'>
                    <span className='font-semibold text-blue-400'>Marzo 2024 - Octubre 2024</span>
                </div>
                <ul className="list-disc list-inside marker:text-blue-500 text-white space-y-2 text-left lg:mx-20">
                    <li className="lg:mx-20">
                        Participé activamente en el rediseño de interfaces de usuario, implementando las vistas a partir de archivos PSD, cuidando la precisión visual y la usabilidad.
                    </li>
                    <li className="lg:mx-20">
                        Realicé la identificación en implementación de la lógica de backend del cálculo de una funcionalidad
                        de test LIFO en conjunto con el diseño de una interfaz amigable.
                    </li>
                    <li className="lg:mx-20">
                        Contribuí en el desarrollo de filtros avanzados para la búsqueda de empleos, permitiendo combinar múltiples criterios
                        de búsqueda.
                    </li>
                    <li className="lg:mx-20">
                        Trabajé bajo el marco de la metodología SCRUM.
                    </li>
                </ul>
                <div className='grid grid-cols-2 md:grid-cols-4 my-10 gap-6 lg:mx-20'>
                    <div className='bg-red-600 px-2 py-1 rounded-lg text-white font-semibold'>Laravel</div>
                    <div className='bg-sky-800 px-2 py-1 rounded-lg text-white font-semibold'>PHP</div>
                    <div className='bg-violet-500 px-2 py-1 rounded-lg text-white font-semibold'>Bootstrap</div>
                    <div className='bg-blue-500 px-2 py-1 rounded-lg text-white font-semibold'>MySQL</div>
                </div>
            </div>
            <div className='border rounded-lg p-8 lg:p-14'>
                <h2 className='text-3xl text-blue-400 font-bold mb-10 mt-12'>Desarrolladora de Software Junior &bull; SolverTIC SRL</h2>
                <div className='my-8'>
                    <span className='font-semibold text-blue-300'>Julio 2023 - Diciembre 2023</span>
                </div>
                <ul className="list-disc list-inside marker:text-blue-500 text-white space-y-2 text-left lg:mx-20">
                    <li className="lg:mx-20">
                        Desarrollé software orientado a la App Móvil y Web Empresarial.
                    </li>
                    <li className="lg:mx-20">
                        Implementé las interfaces de usuario y otras tareas de Frontend de un módulo de Bienes Raíces y el
                        consumo de servicios dentro de la aplicación.
                    </li>
                    <li className="lg:mx-20">
                        Colaboré con el equipo de backend para las integraciones.
                    </li>
                </ul>
                <div className='my-10 gap-6 lg:mx-20 flex place-content-center items-center justify-center'>
                    <div className='bg-blue-600 px-2 py-1 rounded-lg text-white font-semibold w-full lg:w-[200px]'>Flutter</div>
                    <div className='bg-orange-500 px-2 py-1 rounded-lg text-white font-semibold w-full lg:w-[200px]'>Firebase</div>
                </div>
            </div>
        </div>
    )
}

export default Experience