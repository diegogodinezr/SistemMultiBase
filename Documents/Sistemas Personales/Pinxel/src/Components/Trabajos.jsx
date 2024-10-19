import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useRef } from 'react'; // Importar useRef para manejar la instancia de Swiper
import '../css/Trabajos.css';
import "swiper/css";
import "swiper/css/pagination";

import image1 from '../assets/1.jfif';
import image2 from '../assets/2.jfif';
import image3 from '../assets/3.jfif';
import image4 from '../assets/4.jfif';
import image5 from '../assets/5.jfif';
import image6 from '../assets/6.jfif';
import image7 from '../assets/7.jfif';
import image8 from '../assets/8.jfif';
import image9 from '../assets/9.jfif';
import image10 from '../assets/10.jfif';
import image11 from '../assets/11.jfif';

const slides = [
    { id: 1, src: image1 },
    { id: 2, src: image2 },
    { id: 3, src: image3 },
    { id: 4, src: image4 },
    { id: 5, src: image5 },
    { id: 6, src: image6 },
    { id: 7, src: image7 },
    { id: 8, src: image8 },
    { id: 9, src: image9 },
    { id: 10, src: image10 },
    { id: 11, src: image11 },
];

function Trabajos() {
    const swiperRef = useRef(null); // Creamos una referencia para Swiper

    return (
        <div className="trabajos">
            <h1 className="titulo2 antonioNav">ÚLTIMOS TRABAJOS</h1>
            <div className="linea2"></div>
            <div className="carrousel">
                <Swiper
                    grabCursor
                    centeredSlides
                    slidesPerView={2}
                    loop
                    pagination={{ clickable: true }}
                    effect={'coverflow'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 3,
                        slideShadows: true,
                    }}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper; // Guardamos la instancia de Swiper en la referencia
                    }}
                    initialSlide={1} // Inicia el carrusel en la segunda imagen
                    modules={[EffectCoverflow, Pagination]}
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <img className="slide-image" src={slide.src} alt={`Slide ${slide.id}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {/* Botones de navegación personalizados */}
            <button
                className="custom-button-prev round"
                onClick={() => swiperRef.current.slidePrev()} // Usamos la referencia para controlar Swiper
            >
                {'<'}
            </button>
            <button
                className="custom-button-next round"
                onClick={() => swiperRef.current.slideNext()} // Usamos la referencia para controlar Swiper
            >
                {'>'}
            </button>

            <div className="fondobtn1">
                <button className="antonioNav1" onClick={() => console.log('Cotizar Clicked!')}>
                    CONOCE MÁS
                </button>
            </div>
            <h2 className='antonioText1'>
                Cotiza con nosotros
            </h2>
        </div>
    );
}

export default Trabajos;
