"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const GrupoArteNavbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [activeSection, setActiveSection] = useState('inicio');

    // Colores corporativos
    const colors = {
        primary: '#126491', // Azul corporativo
        secondary: '#af5661', // Rojo/Rosa corporativo
        white: '#ffffff' // Blanco
    };

    // Controlar el scroll para efectos visuales
    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);

            // Detectar sección activa
            const sections = ['inicio', 'quienes-somos', 'servicios', 'sostenibilidad', 'contacto'];
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (!element) return false;
                const rect = element.getBoundingClientRect();
                return rect.top <= 100 && rect.bottom >= 100;
            });

            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Calcular valores basados en el scroll
    const isScrolled = scrollPosition > 50;
    const navbarHeight = isScrolled ? 70 : 90;
    const logoSize = isScrolled ? 70 : 90;

    const navItems = [
        { name: 'Inicio', href: '/', id: 'inicio' },
        { name: 'Nosotros', href: '#quienes-somos', id: 'quienes-somos' },
        { name: 'Servicios', href: '#servicios', id: 'servicios' },
        { name: 'Sostenibilidad', href: '#sostenibilidad', id: 'sostenibilidad' }
    ];

    return (
        <>
            {/* Navbar principal */}
            <header
                className="fixed w-full z-50 transition-all duration-500"
                style={{
                    height: `${navbarHeight}px`,
                    background: isScrolled
                        ? `rgba(255, 255, 255, 0.95)`
                        : `rgba(255, 255, 255, 1)`,
                    backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                    boxShadow: isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none'
                }}
            >
                {/* Línea de progreso interactiva en la parte superior */}
                <div
                    className="h-1 bg-gradient-to-r from-primary to-secondary transition-all duration-300"
                    style={{
                        width: `${Math.min((scrollPosition / (document.body.scrollHeight - window.innerHeight)) * 100, 100)}%`,
                        opacity: scrollPosition > 100 ? 1 : 0
                    }}
                ></div>

                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between h-full">
                        {/* Logo sin círculo */}
                        <div className="flex-shrink-0">
                            <Link href="/" className="block relative">
                                <div
                                    className="transition-all duration-500 flex items-center justify-center"
                                    style={{
                                        height: `${logoSize}px`,
                                        width: `${logoSize}px`
                                    }}
                                >
                                    <img
                                        src="/logo.png"
                                        alt="Logo Grupo Arte SAS"
                                        className="h-full w-full object-contain  scale-150 hover:scale-210 transition-transform duration-300"
                                    />
                                </div>
                                {/* Efecto de resplandor animado */}
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/20 to-secondary/20 filter blur-xl opacity-0 hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
                            </Link>
                        </div>

                        {/* Navegación central - solo desktop */}
                        <nav className="hidden lg:flex flex-grow justify-center mx-6">
                            <div className="relative bg-gray-100/80 backdrop-blur-sm rounded-full px-2 py-1 transition-all duration-500 hover:shadow-md">
                                <div className="flex space-x-1">
                                    {navItems.map(({ name, href, id }) => (
                                        <Link
                                            href={href}
                                            key={name}
                                            className={`relative px-5 py-2 text-sm font-bold transition-all duration-300 rounded-full ${activeSection === id
                                                    ? 'text-white'
                                                    : 'text-gray-700 hover:text-primary'
                                                }`}
                                            onClick={() => setActiveSection(id)}
                                        >
                                            <span className="relative z-10">{name}</span>
                                            {activeSection === id && (
                                                <span
                                                    className="absolute inset-0 rounded-full transition-all duration-500"
                                                    style={{
                                                        background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                                                        boxShadow: `0 4px 15px rgba(${colors.primary.replace('#', '').match(/.{1,2}/g).map(val => parseInt(val, 16)).join(', ')}, 0.3)`
                                                    }}
                                                ></span>
                                            )}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </nav>

                        {/* Botón de contacto más llamativo y menú móvil */}
                        <div className="flex items-center">
                            {/* Botón de contacto más llamativo - visible en todos los tamaños */}
                            <Link
                                href="#contacto"
                                className="relative overflow-hidden group bg-gradient-to-r from-[#126491] to-[#af5661] hover:from-[#af5661] hover:to-[#126491] text-white px-6 py-3 rounded-full text-base font-bold shadow-lg hover:shadow-xl transition-all duration-500 flex items-center transform hover:scale-105"
                                style={{
                                    boxShadow: '0 4px 20px rgba(18, 100, 145, 0.4)'
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                <span className="relative z-10">Contacto</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#126491]/20 to-[#af5661]/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
                            </Link>

                            {/* Botón menú móvil */}
                            <div className="lg:hidden ml-4">
                                <button
                                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                    className="inline-flex items-center justify-center p-2 rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none transition-colors duration-300"
                                    aria-expanded={mobileMenuOpen}
                                >
                                    <span className="sr-only">Abrir menú principal</span>
                                    <div className="relative w-6 h-6">
                                        <span
                                            className={`absolute h-0.5 w-full bg-gray-800 transform transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                                                }`}
                                        ></span>
                                        <span
                                            className={`absolute h-0.5 bg-gray-800 transform transition-all duration-300 ${mobileMenuOpen ? 'w-0 opacity-0' : 'w-full opacity-100'
                                                }`}
                                        ></span>
                                        <span
                                            className={`absolute h-0.5 w-full bg-gray-800 transform transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                                                }`}
                                        ></span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Menú móvil desplegable */}
                <div
                    className={`lg:hidden bg-white overflow-hidden transition-all duration-500 shadow-lg ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="px-4 py-5 border-t">
                        <nav className="grid gap-2">
                            {navItems.map(({ name, href, id }) => (
                                <Link
                                    href={href}
                                    key={name}
                                    className={`flex items-center px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${activeSection === id
                                            ? 'bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border-l-4 border-primary'
                                            : 'text-gray-700 hover:bg-gray-50'
                                        }`}
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setActiveSection(id);
                                    }}
                                >
                                    <span>{name}</span>
                                </Link>
                            ))}
                            <div className="mt-2 pt-2 border-t border-gray-200">
                                <Link
                                    href="#contacto"
                                    className="block w-full text-center bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary text-white px-4 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Contacto
                                </Link>
                            </div>
                        </nav>
                    </div>
                </div>

                {/* Decoración inferior con degradado */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/30 via-secondary/50 to-primary/30 transform"
                    style={{
                        opacity: isScrolled ? 1 : 0,
                        transition: 'opacity 500ms'
                    }}
                ></div>
            </header>

            {/* Espacio reservado para que el contenido no quede detrás del navbar */}
            <div style={{ height: `${navbarHeight}px` }}></div>
        </>
    );
};

export default GrupoArteNavbar;

