import React, { useState, useEffect } from 'react';
import '../css/ScrollToTopButton.css'; // Asegúrate de crear este archivo para los estilos

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    // Manejador para mostrar/ocultar el botón al hacer scroll
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Hacer scroll hasta arriba
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className="scroll-to-top">
            {isVisible && (
                <button onClick={scrollToTop} className="scroll-btn antonioNav">
                    Volver a inicio
                </button>
            )}
        </div>
    );
}

export default ScrollToTopButton;
