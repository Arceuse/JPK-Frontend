import React from 'react';
import './Servicio.css';

const Servicio1 = () => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <div className='servicio_traduccion'>
                <div id='inicio' className='header'>
                    <div className="navbar">
                        <div className="opciones">
                            <ul>
                                <li>Volver al inicio</li>
                                <li>Tarifas</li>
                            </ul>
                        </div>
                    </div>
                    <div className="info">
                        <div>
                            <h1>Traducción</h1>
                            <p>Traducción de textos en documentos u imagenes de ingles a español o español a ingles</p>
                        </div>
                        <div>
                            <button>Solicitar servicios</button>
                        </div>
                    </div>
                    <div className="fondo"></div>
                </div>
            </div>
        </div>
    )
}

export default Servicio1