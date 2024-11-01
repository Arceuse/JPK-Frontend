import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="titulo">
                    <h3>Siguenos</h3>
                </div>
                <div className="iconos">
                    <FontAwesomeIcon icon={faTwitter} className="icon" />
                    <FontAwesomeIcon icon={faInstagram} className="icon" />
                    <FontAwesomeIcon icon={faFacebook} className="icon" />
                </div>
                <div className="info">
                    <p>
                        Creador de la página: ethansarredondo@gmail.com<br/>
                        Link personal del creador
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Footer;