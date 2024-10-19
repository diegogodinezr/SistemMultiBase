import React from 'react';
import '../css/Follow.css';
import Whatsapp from '../assets/whatsapp.svg';
import Facebook from '../assets/facebook-f.svg';
import Instagram from '../assets/instagram.svg';

function Follow() {
    return (
        <>
            <div className="social-media">
                <h3 className="antonioText1 fondot">Síguenos en nuestras redes sociales:</h3>
                <div className="linea1"></div>
                <div className="icons">
                    <a href="https://www.whatsapp.com/" className="icon whatsapp-icon">
                        <img src={Whatsapp} alt="Whatsapp" className="colorIcon" />
                    </a>
                    <a href="https://www.facebook.com/" className="icon facebook-icon">
                        <img src={Facebook} alt="Facebook" className="colorIcon" />
                    </a>
                    <a href="https://www.instagram.com/" className="icon instagram-icon">
                        <img src={Instagram} alt="Instagram" className="colorIcon" />
                    </a>
                </div>
            </div>
        </>
    );
}

export default Follow;
