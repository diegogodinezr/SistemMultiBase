import React from 'react';
import '../css/VideoBackground.css'; // Asegúrate de crear este archivo CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap
import videoOficial from '../assets/videoOficial.mp4';
import Generando from '../assets//generandoSol.png'
import Sello from '../assets/sello.png'

const VideoBackground = () => {

    const handleCotizar = (e) => {
        e.preventDefault();
        const whatsappNumber = '523122283000'
        const message = '¡Hola! Me gustaría cotizar un servicio...'
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappLink, '_blank');

    };

    return (
        <div className="space">
            <div className="container-fluid video-background">
                <div className="embed-responsive embed-responsive-16by9">
                    <video autoPlay loop muted className="embed-responsive-item">
                        <source src={ videoOficial } type="video/mp4" className='vid' />
                    </video>
                </div>
                <div className="content">
                    <img src={Generando} alt="Generando Soluciones" />
                    <div className="fondobtn">
                        <button className="antonioNav" onClick={handleCotizar}>
                            Cotizar
                        </button>
                    </div>

                </div>
                <div className="sello">
                    <img src={Sello} alt="Sello Pinxel" />
                </div>
            </div>
        </div>
    );
};

export default VideoBackground;

