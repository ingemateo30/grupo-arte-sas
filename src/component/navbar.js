"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const GrupoArteNavbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Colores corporativos
    const colors = {
        primary: '#126491', // Azul corporativo (90%)
        secondary: '#af5661', // Rojo/Rosa corporativo (5%)
        white: '#ffffff' // Blanco
    };

    return (
        <header className="fixed w-full z-50 bg-white shadow-lg transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center py-3">
                    {/* Logo y nombre de la empresa */}
                    <div className="flex items-center">
                        {/* Contenedor del Logo - Ahora más grande */}
                        <div className="relative h-16 w-16 mr-3">
                            <img src="/logo.png" alt="Logo Grupo Arte SAS" 
                                className="h-full w-auto object-contain scale-200 transition-transform duration-300 hover:scale-250" />
                        </div>
                    </div>

                    {/* Enlaces de navegación - Versión escritorio */}
                    <nav className="hidden md:flex space-x-1">
                        {[
                            { name: 'Inicio', href: '/' },
                            { name: 'Nosotros', href: '#quienes-somos' },
                            { name: 'Servicios', href: '#servicios' },
                            { name: 'Sostenibilidad', href: '#sostenibilidad' },
                            { name: 'Contacto', href: '#contacto' }
                        ].map(({ name, href }) => (
                            <Link
                                href={href}
                                key={name}
                                className="group relative px-4 py-2 text-lg font-medium text-gray-800 hover:text-gray-900 transition-all duration-300"
                            >
                                <span className="relative z-10">{name}</span>
                                <span className="absolute bottom-0 left-0 w-full h-1 bg-gray-800 scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left"></span>
                            </Link>
                        ))}
                        <Link
                            href="#contacto"
                            className="bg-[#af5661] hover:bg-blue-800 text-white px-6 py-2 rounded-md font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                        >
                            Cotizar
                        </Link>
                    </nav>

                    {/* Botón menú móvil */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 rounded-md text-gray-800 focus:outline-none"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {mobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Menú móvil */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 px-2 bg-white rounded-lg shadow-xl mb-4 transition-all duration-300">
                        {[
                            { name: 'Inicio', href: '/' },
                            { name: 'Servicios', href: '#servicios' },
                            { name: 'Nosotros', href: '#quienes-somos' },
                            { name: 'Sostenibilidad', href: '#sostenibilidad' },
                            { name: 'Contacto', href: '#contacto' }
                        ].map(({ name, href }) => (
                            <Link
                                href={href}
                                key={name}
                                className="block py-2 px-4 text-gray-800 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {name}
                            </Link>
                        ))}
                        <div className="mt-4 pt-4 border-t">
                            <Link
                                href="#contacto"
                                className="w-full text-white px-4 py-2 rounded-md font-bold transition-all duration-300"
                                style={{ backgroundColor: colors.primary }}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Cotizar
                            </Link>
                        </div>
                    </div>
                )}
            </div>

            {/* Línea decorativa con degradado de colores corporativos */}
            <div className="h-1 w-full bg-gradient-to-r from-white via-secondary to-primary"
                style={{
                    background: `linear-gradient(to right, ${colors.white}, ${colors.secondary}, ${colors.primary})`
                }}>
            </div>
        </header>
    );
};

export default GrupoArteNavbar;

