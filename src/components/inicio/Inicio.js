import React, { useRef } from 'react';
import './Inicio.css';
import Footer from '../footer/Footer.js';
import emailjs from 'emailjs-com'


const Inicio = () => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault(); // Evita el comportamiento por defecto del formulario

        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            formRef.current,
            process.env.REACT_APP_EMAILJS_USER_ID
        ).then((result) => {
            alert('Correo enviado con éxito!');
            console.log(result.text);
        }, (error) => {
            alert('Error al enviar el correo, intenta nuevamente.');
            console.log(error.text);
        });
    };

    return (
        <div>
            <div className='inicio-container'>
                <div id='inicio' className='header'>
                    <div className="navbar">
                        <div className="logo">
                            <img src="logo.jpg" alt="Logo de la empresa"></img>
                        </div>
                        <div className="opciones">
                            <ul>
                                <li onClick={() => scrollToSection('inicio')}>Inicio</li>
                                <li onClick={() => scrollToSection('nosotros')}>Nosotros</li>
                                <li onClick={() => scrollToSection('servicios')}>Servicios</li>
                                <li onClick={() => scrollToSection('contacto')}>Contáctanos</li>
                            </ul>
                        </div>
                    </div>
                    <div className="info">
                        <div>
                            <h1>JPK enseñanza y servicios en traducción a Español</h1>
                        </div>
                        <div>
                            <button>Solicitar servicios</button>
                        </div>
                    </div>
                    <div className="fondo"></div>
                </div>
                <div id='nosotros' className="nosotros">
                    <div className='info'>
                        <h3>¿Quienes somos?</h3>
                        <p>En JPK ofrecemos servicios de traducción de español a inglés y viceversa, especializados en la traducción de documentos y en la enseñanza de ambos idiomas. Nuestro equipo de traductores y profesores trabaja con precisión y profesionalismo para ayudar a personas y empresas a comunicarse de forma efectiva, confiable y sin barreras lingüísticas.</p>
                    </div>
                </div>
                <div id='servicios' className='servicios'>
                    <div className='titulo'>
                        <h3>Nuestros servicios</h3>
                    </div>
                    <div className='list-cards'>
                        <div className='cards'>
                            <h5>Traducción</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei</p>
                        </div>
                        <div className='cards'>
                            <h5>Traducción</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei</p>
                        </div>
                        <div className='cards'>
                            <h5>Traducción</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei</p>
                        </div>
                        <div className='cards'>
                            <h5>Traducción</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei</p>
                        </div>
                    </div>
                </div>
                <div id='contacto' className='contacto'>
                    <div className='titulo'>
                        <h3>Contáctenos</h3>
                    </div>
                    <div className='formulario'>
                        <form ref={formRef} onSubmit={sendEmail}>
                            <div className='input'>
                                <label htmlFor="nombre">Nombre:</label>
                                <input type="text" name="nombre" required />
                            </div>
                            <div className='input'>
                                <label htmlFor="correo">Correo:</label>
                                <input type="email" name="correo" required />
                            </div>
                            <div className='input'>
                                <label htmlFor="mensaje">Mensaje:</label>
                                <textarea name="mensaje" required></textarea>
                            </div>
                            <div className='button'>
                                <button type="submit">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Inicio;