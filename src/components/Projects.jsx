import React from 'react'
import photo1 from "../assets/photo1.png"
import photo2 from "../assets/photo2.png"
import photo3 from "../assets/photo3.png"
import asknicely from "../assets/asknicely.png"
import task_manager1 from "../assets/task_manager1.png"
import task_manager2 from "../assets/task_manager2.png"
import task_manager3 from "../assets/task_manager3.png"
import vr_1 from "../assets/vr_1.png";
import res_1 from "../assets/res_1.png";
import appsalon3 from "../assets/appsalon3.png";
import appsalon4 from "../assets/appsalon4.png";

function Projects() {
    return (
        <div id='projects' className='bg-white min-h-[100vh] px-10 py-16 lg:p-40'>
            <h2 className='text-4xl font-bold text-center text-color-6 mb-16'>Mis proyectos</h2>
            <div className='bg-color-6 rounded-lg p-8 lg:p-14 mb-10'>
                <h3 className='text-white text-2xl font-bold text-center mb-3'>Asistente Conversacional implementado con Búsqueda Híbrida <span className='
        bg-gradient-to-r from-slate-500 to-emerald-500 text-transparent bg-clip-text'> Graph RAG</span></h3>
                <h5 className='text-center text-blue-400 font-semibold mb-8'>MongoDB &bull; ExpressJS &bull; ReactJS &bull; NodeJS &bull; Tailwind CSS &bull; FastAPI &bull; Neo4j &bull; LangChain</h5>
                <ul className="list-disc list-inside marker:text-blue-500 text-white space-y-2 text-left lg:mx-20">
                    <li className=''>
                        Proyecto de Grado para el Museo Catedralicio de la Catedral Metropolitana de Santa Cruz,
                        Bolivia, bajo la metodología ICONIX.
                    </li>
                    <li className=''>
                        Desarrollé un pipeline para método RAG potenciado con grafos para la mejora de búsquedas.
                    </li>
                    <li className=''>
                        Diseñé y prototipé interfaces amigables para interactuar con el asistente.
                    </li>
                    <li className=''>
                        Implementación de una API con FastAPI para conectar con el modelo GPT-4o-mini y recibir
                        respuestas en base al contexto de museología y piezas artísticas.
                    </li>
                </ul>
                <div className='flex flex-col items-center space-y-6 mt-8'>
                    <img src={photo1} height={400} width={700} className='rounded-lg border' alt="" />
                    <img src={photo2} height={400} width={700} className='rounded-lg border' alt="" />
                    <img src={photo3} height={400} width={700} className='rounded-lg border' alt="" />
                </div>
            </div>
            <div className='bg-color-6 rounded-lg p-8 lg:p-14 mb-10'>
                <h3 className='text-white text-2xl font-bold text-center mb-3'>Landing Page para la marca<span className='text-orange-400'>{" "}AskNicely</span></h3>
                <h5 className='text-center text-blue-400 font-semibold mb-8'>ReactJS &bull; Tailwind CSS</h5>
                <ul className="list-disc list-inside marker:text-blue-500 text-white space-y-2 text-left lg:mx-20">
                    <li className=''>
                        Landing page para una empresa ficticia de servicios de retroalimentación de clientes, llamada AskNicely.
                    </li>
                    <li className=''>
                        Desarrollada con ReactJS y Tailwind CSS.
                    </li>
                    <li className=''>
                        Link demo:{" "}
                        <a href="https://survey-landing-page-iota.vercel.app/" target='_blank' className='text-blue-400 hover:text-blue-700'>
                            Survey Landing Page
                        </a>
                    </li>
                </ul>
                <div className='flex flex-col items-center space-y-6 mt-8'>
                    <img src={asknicely} height={400} width={700} className='rounded-lg border' alt="" />
                </div>
            </div>
            <div className='bg-color-6 rounded-lg p-8 lg:p-14 mb-10'>
                <h3 className='text-white text-2xl font-bold text-center mb-3'>Landing Page <span className='bg-gradient-to-r from-blue-400 
            to-green-600 text-transparent bg-clip-text'>Restaura</span></h3>
                <h5 className='text-center text-blue-400 font-semibold mb-8'>ReactJS &bull; Tailwind CSS</h5>
                <ul className="list-disc list-inside marker:text-blue-500 text-white space-y-2 text-left lg:mx-20">
                    <li className=''>
                        Landing page con temática de restaurante.
                    </li>
                    <li className=''>
                        Diseño y layout hechos con Tailwind CSS y ReactJS.
                    </li>
                    <li className=''>
                        Link demo:{" "}
                        <a href="https://landing-page-restaurant-alpha.vercel.app/" target='_blank' className='text-blue-400 hover:text-blue-700'>
                            Restaurante Landing Page
                        </a>
                    </li>
                </ul>
                <div className='flex flex-col items-center space-y-6 mt-8'>
                    <img src={res_1} height={400} width={700} className='rounded-lg border' alt="" />
                </div>
            </div>
            <div className='bg-color-6 rounded-lg p-8 lg:p-14 mb-10'>
                <h3 className='text-white text-2xl font-bold text-center mb-3'>App de Notas</h3>
                <h5 className='text-center text-blue-400 font-semibold mb-8'>MongoDB &bull; ExpressJS &bull; ReactJS &bull; NodeJS &bull; Tailwind CSS</h5>
                <ul className="list-disc list-inside marker:text-blue-500 text-white space-y-2 text-left lg:mx-20">
                    <li className=''>
                        App de Notas desarrollada con el stack MERN.
                    </li>
                    <li className=''>
                        Diseño y layout hechos con Tailwind CSS.
                    </li>
                    <li className=''>
                        Funciones: crear, leer, actualizar y eliminar notas personales.
                    </li>
                    <li className=''>
                        Búsqueda de notas por texto y filtro de tareas por usuario autenticado.
                    </li>
                </ul>
                <div className='flex flex-col items-center space-y-6 mt-8'>
                    <img src={task_manager3} height={400} width={700} className='rounded-lg border' alt="" />
                    <img src={task_manager2} height={400} width={700} className='rounded-lg border' alt="" />
                    <img src={task_manager1} height={400} width={700} className='rounded-lg border' alt="" />
                </div>
            </div>
            <div className='bg-color-6 rounded-lg p-8 lg:p-14 mb-10'>
                <h3 className='text-white text-2xl font-bold text-center mb-3'>Landing Page <span className='bg-gradient-to-r from-yellow-400 
            to-orange-700 text-transparent bg-clip-text'>Realidad Virtual</span></h3>
                <h5 className='text-center text-blue-400 font-semibold mb-8'>ReactJS &bull; Tailwind CSS</h5>
                <ul className="list-disc list-inside marker:text-blue-500 text-white space-y-2 text-left lg:mx-20">
                    <li className=''>
                        Landing page con temática de servicios de Realidad Virtual.
                    </li>
                    <li className=''>
                        Diseño y layout hechos con Tailwind CSS y ReactJS.
                    </li>
                    <li className=''>
                        Link demo:{" "}
                        <a href="https://virtualr-green.vercel.app/" target='_blank' className='text-blue-400 hover:text-blue-700'>
                            Virtual Reality Landing Page
                        </a>
                    </li>
                </ul>
                <div className='flex flex-col items-center space-y-6 mt-8'>
                    <img src={vr_1} height={400} width={700} className='rounded-lg border' alt="" />
                </div>
            </div>
            <div className='bg-color-6 rounded-lg p-8 lg:p-14 mb-10'>
                <h3 className='text-white text-2xl font-bold text-center mb-3'><span className='bg-gradient-to-r from-blue-200 
            to-cyan-600 text-transparent bg-clip-text'>Salon{" "}</span>App</h3>
                <h5 className='text-center text-blue-400 font-semibold mb-8'>HTML &bull; CSS &bull; JavaScript &bull; PHP &bull; MySQLi</h5>
                <ul className="list-disc list-inside marker:text-blue-500 text-white space-y-2 text-left lg:mx-20">
                    <li className=''>
                        Sitio web funcional con temática de Salón de Belleza.
                    </li>
                    <li className=''>
                        Diseño e interactividad hechos con CSS y JavaScript.
                    </li>
                    <li className=''>
                        Creación y confirmación de cuenta personal con PHP.
                    </li>
                    <li className=''>
                        Agenda citas con fecha, hora y servicios específicos de belleza.
                    </li>
                </ul>
                <div className='flex flex-col items-center space-y-6 mt-8'>
                    <img src={appsalon3} height={400} width={700} className='rounded-lg border' alt="" />
                    <img src={appsalon4} height={400} width={700} className='rounded-lg border' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Projects