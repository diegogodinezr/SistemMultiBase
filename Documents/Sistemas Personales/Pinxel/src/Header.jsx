import React, { useState, useEffect } from 'react';
import './Header.css';
import Logo from './assets/logoOficial.png';

function Header() {
    const [activeSection, setActiveSection] = useState('inicio'); // Estado para la sección activa
    const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar el menú hamburguesa

    // Función para cambiar la sección activa basado en el scroll
    const handleScroll = () => {
        const sections = ['inicio', 'servicios', 'trabajos', 'cotizar'];

        sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element) {
                const offsetTop = element.offsetTop;
                const offsetHeight = element.offsetHeight;
                const scrollPosition = window.scrollY;

                if (
                    scrollPosition >= offsetTop - 50 && // Un pequeño margen
                    scrollPosition < offsetTop + offsetHeight
                ) {
                    setActiveSection(section);
                }
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll); // Agregar el evento scroll
        return () => window.removeEventListener('scroll', handleScroll); // Limpiar el evento al desmontar
    }, []);

    // Función para manejar el click en el menú hamburguesa
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header id="inicio">
            <div className="logo">
                <a href="#inicio">
                    <img src={Logo} alt="Logo" className='logoSize' />
                </a>
            </div>
            <nav>
                {/* Botón de menú hamburguesa */}
                <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {/* Menú de navegación */}
                <ul className={menuOpen ? 'menu-open' : ''}>
                    <li>
                        <a
                            href="#inicio"
                            className={`antonioNav ${activeSection === 'inicio' ? 'active' : ''}`}
                            onClick={toggleMenu} // Cierra el menú al hacer clic
                        >
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a
                            href="#servicios"
                            className={`antonioNav ${activeSection === 'servicios' ? 'active' : ''}`}
                            onClick={toggleMenu}
                        >
                            Servicios
                        </a>
                    </li>
                    <li>
                        <a
                            href="#trabajos"
                            className={`antonioNav ${activeSection === 'trabajos' ? 'active' : ''}`}
                            onClick={toggleMenu}
                        >
                            Trabajos
                        </a>
                    </li>
                    <li>
                        <a
                            href="#cotizar"
                            className={`antonioNav ${activeSection === 'cotizar' ? 'active' : ''}`}
                            onClick={toggleMenu}
                        >
                            Cotizar
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;


