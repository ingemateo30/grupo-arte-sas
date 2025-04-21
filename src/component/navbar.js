"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Mail, Clock, MapPin, Truck, Users, Package, Leaf, MessageSquare, Menu, X } from 'lucide-react';

const GrupoArteNavbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [activeSection, setActiveSection] = useState('inicio');
    const [infoSlideIndex, setInfoSlideIndex] = useState(0);
    

    // Colores corporativos
    const colors = {
        primary: '#126491', // Azul corporativo
        secondary: '#af5661', // Rojo/Rosa corporativo
        white: '#ffffff' // Blanco
    };

    // Información rápida para la barra superior
    const infoSlides = [
        { icon: <Phone size={14} />, text: "Contáctanos: +57315-364-6739" },
        { icon: <Mail size={14} />, text: "contacto@grupoarte.com.co" },
        { icon: <Clock size={14} />, text: "Lunes a Viernes: 8:00 AM - 6:00 PM" },
        { icon: <MapPin size={14} />, text: "Bucaramanga, Santander - Colombia" }
    ];

    // Controlar el scroll para efectos visuales
    useEffect(() => {
        if (typeof window === "undefined") return;
    
        const sections = ['inicio', 'quienes-somos', 'servicios', 'sostenibilidad', 'contacto'];
    
        // Optimización con requestAnimationFrame
        const handleScroll = () => {
            requestAnimationFrame(() => {
                setScrollPosition(window.scrollY);
    
                const currentSection = sections.find(section => {
                    const element = document.getElementById(section);
                    if (!element) return false;
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                });
    
                if (currentSection) {
                    setActiveSection(currentSection);
                }
            });
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    

    // Efecto para slide de información
    useEffect(() => {
        const intervalId = setInterval(() => {
            setInfoSlideIndex((prevIndex) => (prevIndex + 1) % infoSlides.length);
        }, 5000);
        
        return () => clearInterval(intervalId);
    }, []);

    // Calcular valores basados en el scroll
    const isScrolled = scrollPosition > 50;
    const navbarHeight = isScrolled ? 70 : 90;
    const logoSize = isScrolled ? 70 : 90;

    const navItems = [
        { name: 'Inicio', href: '/', id: 'inicio', icon: <MapPin size={18} /> },
        { name: 'Nosotros', href: '#quienes-somos', id: 'quienes-somos', icon: <Users size={18} /> },
        { name: 'Servicios', href: '#servicios', id: 'servicios', icon: <Truck size={18} /> },
        { name: 'Sostenibilidad', href: '#sostenibilidad', id: 'sostenibilidad', icon: <Leaf size={18} /> }
    ];

    return (
        <>
            {/* Barra superior delgada */}
            <div className="bg-gradient-to-r from-[#126491] to-[#0e5075] text-white py-2 transition-all duration-300" 
                 style={{
                     transform: isScrolled ? 'translateY(-100%)' : 'translateY(0)',
                     position: 'fixed',
                     width: '100%',
                     zIndex: 51,
                     top: 0,
                 }}>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center">
                        {/* Información deslizante */}
                        <div className="flex items-center overflow-hidden h-6 relative w-full">
                            {infoSlides.map((slide, index) => (
                                <div 
                                    key={index} 
                                    className="flex items-center absolute w-full transition-all duration-500"
                                    style={{
                                        transform: `translateX(${(index - infoSlideIndex) * 100}%)`,
                                        opacity: index === infoSlideIndex ? 1 : 0
                                    }}
                                >
                                    <div className="flex items-center mr-2">
                                        {slide.icon}
                                    </div>
                                    <span className="text-sm">{slide.text}</span>
                                </div>
                            ))}
                        </div>
                        
                        {/* Redes sociales */}
                        <div className="hidden md:flex space-x-3">
                            <a href="#" className="text-white hover:text-gray-200 transition-colors" aria-label="Facebook">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-white hover:text-gray-200 transition-colors" aria-label="Twitter">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-white hover:text-gray-200 transition-colors" aria-label="Instagram">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428.247-.667.645-1.27 1.153-1.772A4.908 4.908 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.055-.059 1.37-.059 4.04 0 2.67.01 2.986.059 4.04.045.976.207 1.505.344 1.858.182.466.398.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.047 1.37.059 4.04.059 2.67 0 2.987-.01 4.04-.059.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.047-1.055.059-1.37.059-4.04 0-2.67-.01-2.986-.059-4.04-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.055-.047-1.37-.059-4.04-.059zm0 3.063a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 8.468a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666zm6.538-8.469a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navbar principal */}
            <header
                className="fixed w-full z-50 transition-all duration-500"
                style={{
                    height: `${navbarHeight}px`,
                    background: isScrolled
                        ? `rgba(255, 255, 255, 0.95)`
                        : `rgba(255, 255, 255, 1)`,
                    backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                    boxShadow: isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
                    top: isScrolled ? 0 : '30px', // Ajuste para la barra superior
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
                        {/* Logo */}
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
                                        className="h-full w-full object-contain scale-120 hover:scale-[1.6] transition-transform duration-300"
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
                                    {navItems.map(({ name, href, id, icon }) => (
                                        <Link
                                            href={href}
                                            key={name}
                                            className={`relative px-5 py-2 text-sm font-bold transition-all duration-300 rounded-full ${activeSection === id
                                                    ? 'text-white'
                                                    : 'text-gray-700 hover:text-primary'
                                                }`}
                                            onClick={() => setActiveSection(id)}
                                        >
                                            <span className="relative z-10 flex items-center">
                                                <span className="mr-2">{icon}</span>
                                                {name}
                                            </span>
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

                        {/* Botón de contacto y menú móvil */}
                        <div className="flex items-center">
                            {/* Botón de contacto */}
                            <Link
                                href="#contacto"
                                className="relative overflow-hidden group bg-gradient-to-r from-[#126491] to-[#af5661] hover:from-[#af5661] hover:to-[#126491] text-white px-6 py-3 rounded-full text-base font-bold shadow-lg hover:shadow-xl transition-all duration-500 flex items-center transform hover:scale-105"
                                style={{
                                    boxShadow: '0 4px 20px rgba(18, 100, 145, 0.4)'
                                }}
                            >
                                <MessageSquare className="h-5 w-5 mr-2" />
                                <span className="relative z-10">Contactanos</span>
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
                                    {mobileMenuOpen ? (
                                        <X className="w-6 h-6" />
                                    ) : (
                                        <Menu className="w-6 h-6" />
                                    )}
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
                            {navItems.map(({ name, href, id, icon }) => (
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
                                    <span className="mr-3">{icon}</span>
                                    <span>{name}</span>
                                </Link>
                            ))}
                            <div className="mt-4 pt-4 border-t border-gray-200 grid gap-3">
                                {infoSlides.map((slide, index) => (
                                    <div key={index} className="flex items-center text-sm text-gray-600">
                                        <span className="mr-2 text-primary">{slide.icon}</span>
                                        <span>{slide.text}</span>
                                    </div>
                                ))}
                                <div className="flex gap-3 mt-2">
                                    <a href="#" className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-primary hover:text-white transition-colors duration-300">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                                        </svg>
                                    </a>
                                    <a href="#" className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-primary hover:text-white transition-colors duration-300">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                                        </svg>
                                    </a>
                                    <a href="#" className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-primary hover:text-white transition-colors duration-300">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428.247-.667.645-1.27 1.153-1.772A4.908 4.908 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.055-.059 1.37-.059 4.04 0 2.67.01 2.986.059 4.04.045.976.207 1.505.344 1.858.182.466.398.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.047 1.37.059 4.04.059 2.67 0 2.987-.01 4.04-.059.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.047-1.055.059-1.37.059-4.04 0-2.67-.01-2.986-.059-4.04-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.055-.047-1.37-.059-4.04-.059zm0 3.063a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 8.468a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666zm6.538-8.469a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"/>
                                        </svg>
                                    </a>
                                </div>
                                <Link
                                    href="#contacto"
                                    className="block w-full text-center bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary text-white px-4 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg flex items-center justify-center"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <MessageSquare className="h-5 w-5 mr-2" />
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
            <div style={{ height: isScrolled ? `${navbarHeight}px` : `${navbarHeight + 30}px` }}></div>
        </>
    );
};

export default GrupoArteNavbar;

