// Services.jsx
import React from 'react';
import '../css/Services.css';
import clasificacion from '../assets/clasificacion.png';
import diseño from '../assets/diseño.png';
import impresion from '../assets/impresion.png';


const Services = () => {
    return (
        <>
            <div className="servicios">
                <div className="title">
                    <h2 className='antonioNav'>NUESTROS SERVICIOS</h2>
                </div>
                <div className="servicios-container">
                    <div className="servicio">
                        <div className="titulo antonioNav">
                            <h3>IMPRESIÓN</h3>
                            <h3 className='resaltado'>GRAN FORMATO</h3>
                            <div className="lista">
                                <ul className='antonioText'>
                                    <li>Lonas</li>
                                    <li>Viniles</li>
                                    <li>Tela Canvas</li>
                                </ul>
                            </div>
                        </div>
                        <div className="img impresion">
                            <img src={ impresion } alt="Impresión Gran Formato" />
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="servicio">
                        <div className="titulo antonioNav">
                            <h3 className='titulo3'>DISEÑO</h3>
                            <h3 className='resaltado'>GRÁFICO</h3>
                            <div className="lista">
                                <ul className='antonioText'>
                                    <li>Logotipos</li>
                                    <li>Manual de Identidad</li>
                                    <li>Publicidad en General</li>
                                </ul>
                            </div>
                        </div>
                        <div className="img design">
                            <img src={ diseño } alt="Diseño Gráfico" />
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="servicio">
                        <div className="titulo antonioNav">
                            <h3>INSTALACIÓN</h3>
                            <h3 className='resaltado'>Y FABRICACIÓN</h3>
                            <div className="lista">
                                <ul className='antonioText'>
                                    <li>Instalaciones en General</li>
                                    <li>Toldos</li>
                                    <li>Anuncios</li>
                                </ul>
                            </div>
                        </div>
                        <div className="img instalacion">
                            <img src={clasificacion} alt="Instalación y Fabricación" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;

