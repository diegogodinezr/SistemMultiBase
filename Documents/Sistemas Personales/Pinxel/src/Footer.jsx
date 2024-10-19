import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './Footer.css';

export default function Footer() {
    return (
        <MDBFooter /* bgColor='light' */ className='text-center text-lg-start text-muted'>
            

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5 antonioText'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <MDBIcon icon="gem" className="me-3" />
                                Pinxel
                            </h6>
                            <p>
                                Diseño, impresión e instalación
                            </p>
                            <p>
                                Independientemente solucionan las necesidades requeridas por nuestros clientes
                            </p>
                            <p>
                                Trabajamos para empresas privadas, públicas y políticas en todo México
                            </p>
                            <p>
                                SOMOS FABRICANTES
                            </p>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Menú</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Inicio
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Servicios
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Nosotros
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Cotizar
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contacto</h6>
                            <p>
                                <MDBIcon icon="home" className="me-2" />
                                Av de los Insurgentes 590, Camino Real, 28040 Colima, Col.
                            </p>
                            <p>
                                <MDBIcon icon="envelope" className="me-3" />
                                hola@pinxel.mx
                            </p>
                            <p>
                                <MDBIcon icon="phone" className="me-3" /> + 52 312 312 5766
                            </p>
                            <p>
                                <MDBIcon fab icon="whatsapp" className="me-3 whats" /> + 52 312 228 3000
                            </p>

                        </MDBCol>

                        <MDBCol md="4" lg="4" xl="4" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Ubicación</h6>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15067.542171587831!2d-103.7118015!3d19.2438194!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84255a9e168fb431%3A0x17d983e66fa26c0f!2sPINXEL!5e0!3m2!1ses!2smx!4v1716396150643!5m2!1ses!2smx"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </MDBCol>


                    </MDBRow>
                </MDBContainer>
            </section>

            {/* <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2024 Copyright:
                <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                    Pinxel
                </a>
            </div> */}
        </MDBFooter>
    );
}



