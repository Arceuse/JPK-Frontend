import React from 'react';
import './Inicio.css';

const Inicio = () => {
    return (
        <div>
            <div>
                <div className='inicio-container'>
                    <div className='header'>
                        <div className="navbar">
                            <div className="logo">
                                <img src="logo.jpg" alt="Logo de la empresa"></img>
                            </div>
                            <div className="opciones">
                                <ul>
                                    <li>Inicio</li>
                                    <li>Nosotros</li>
                                    <li>Servicios</li>
                                    <li>Contactanos</li>
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
                    <div className="nosotros">
                        <div className='info'>
                            <h3>¿Quienes somos?</h3>
                            <p>En JPK ofrecemos servicios de traducción de español a inglés y viceversa, especializados en la traducción de documentos y en la enseñanza de ambos idiomas. Nuestro equipo de traductores y profesores trabaja con precisión y profesionalismo para ayudar a personas y empresas a comunicarse de forma efectiva, confiable y sin barreras lingüísticas.</p>
                        </div>
                    </div>
                    <div className='servicios'>
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
                    <div className='contacto'>
                        <div className='titulo'>
                            <h3>Contáctenos</h3>
                        </div>
                        <form>
                            <div>
                                <label for="nombre">Nombre:</label>
                                <input></input>
                            </div>
                            <div>
                                <label for="correo">Correo:</label>
                                <input></input>
                            </div>
                            <div>
                                <label for="mensaje">Mensaje:</label>
                                <input></input>
                            </div>
                            <div>
                                <button>Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inicio;