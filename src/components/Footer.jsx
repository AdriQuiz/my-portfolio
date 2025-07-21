import React from 'react'

function Footer() {
    return (
        <footer className="bg-color-6 text-white py-10 px-5 mt-10">
            <div className="max-w-6xl mx-auto grid md:grid-cols-1 gap-8 text-center md:text-left">
                <div className='text-center'>
                    <h3 className="text-2xl font-bold">Adriana Quiroz</h3>
                    <p className="text-blue-200 mt-2">Software Developer</p>
                </div>

            </div>
            <p className="text-center text-sm mt-10 text-blue-300">
                © {new Date().getFullYear()} Adriana Quiroz. Todos los derechos reservados.
            </p>
        </footer>
    )
}

export default Footer