import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar el formulario
        // o realizar cualquier otra acción que desees con los datos del formulario
        console.log('Form submitted:', { name, email, message });
        // Limpia los campos del formulario después de enviarlo
        setName('');
        setEmail('');
        setMessage('');
    };

    return (

        <section id="contact">
        <div className="mx-2">
            <h1 className="text-3xl md:text-4xl font-bold mt-20 text-center tracking-tighter"><span className="text-white bg-black inline-block">Contact</span>.</h1>
            <form className="mt-8 max-w-sm mx-auto" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-800">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-800">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-800">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        rows={4}
                        required
                    />
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-black text-white rounded-lg px-3 py-2 text-sm font-medium"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
        </section>
    );
};

export default Contact;

