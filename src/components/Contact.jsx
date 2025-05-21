import React from 'react'
import Swal from 'sweetalert2';

function Contact() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "52b7ddf3-2fd4-47d9-933d-3218c6bad80b");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Éxito!",
                text: "Tu mensaje se ha enviado exitosamente.",
                icon: "success"
            });
        }
    };
    return (
        <div id='contact' className='bg-white flex justify-center items-center min-h-[100vh] py-20'>
            <form onSubmit={onSubmit} className='max-w-[600px] w-full bg-color-6 p-10 rounded-lg text-white my-5 mx-10'>
                <h2 className='font-bold text-4xl text-center'>Contáctame</h2>
                <div className='mt-5 mb-5'>
                    <label className='inline-block mb-3'>Nombre completo</label>
                    <input type="text" name='name' className='w-full h-12 bg-transparent border rounded-lg p-3' placeholder='Ingresa tu nombre' required />
                </div>
                <div className='mb-5'>
                    <label className='inline-block mb-3'>Dirección de correo</label>
                    <input type="text" name='email' className='w-full h-12 bg-transparent border rounded-lg p-3' placeholder='Ingresa tu correo' required />
                </div>
                <div className='mb-5'>
                    <label className='inline-block mb-3'>Tu mensaje</label>
                    <textarea name='message' placeholder='Ingresa tu mensaje' className='w-full h-[200px] resize-none bg-transparent border rounded-lg p-3' required></textarea>
                </div>
                <button className='w-full h-[55px] bg-blue-400 
                text-white rounded-lg font-semibold hover:bg-blue-700 transition' type='submit'>
                    Enviar mensaje
                </button>
            </form>
        </div>
    )
}

export default Contact