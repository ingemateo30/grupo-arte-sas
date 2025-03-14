import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Truck, Package, Bus } from "lucide-react";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Imágenes de fondo para el slider
  const backgroundImages = [
    "/1.jpeg",
    "/255.jpg",  
    "/ca.webp", 
  ];
  
  // Textos para cada slide
  const slideContent = [
    {
      title: "Soluciones de Transporte",
      description: "Tu socio confiable en transporte de carga en Colombia"
    },
    {
      title: "Logística Integral",
      description: "Optimizamos cada eslabón de tu cadena de suministro"
    },
    {
      title: "Flotas Dedicadas",
      description: "Vehículos exclusivos para tus necesidades específicas"
    }
  ];

  // Cambiar slide automáticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Marcar como cargado después de un breve retraso para las animaciones
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo con efecto de parallax y fade entre slides */}
      {backgroundImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out transform scale-105 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={img}
            alt={`Transporte de carga - ${index + 1}`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#126491]/80 via-[#126491]/70 to-[#126491]/90"></div>
        </div>
      ))}

      {/* Contenido principal */}
      <div className="container mx-auto z-10 text-white text-center px-4">
        <div className={`transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white relative">
              Grupo Arte SAS
              <span className="absolute -bottom-4 left-0 w-full h-1 bg-[#af5661] transform origin-left scale-x-0 transition-transform duration-1000 ease-out"></span>
            </span>
          </h1>
          
          <div className="h-20 overflow-hidden relative">
            {slideContent.map((content, index) => (
              <p
                key={index}
                className={`text-2xl md:text-3xl mb-8 max-w-3xl mx-auto absolute inset-0 transition-all duration-700 ease-in-out ${
                  currentSlide === index 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-8'
                }`}
              >
                {content.description}
              </p>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-24">
            <Link 
              href="#servicios" 
              className="group relative bg-[#af5661] overflow-hidden text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:bg-[#af5661]/90"
            >
              <span className="relative z-10">Nuestros Servicios</span>
              <span className="absolute inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              <span className="absolute inset-0 bg-[#9a4a54] transform scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:delay-100"></span>
            </Link>
            
            <Link 
              href="#contacto" 
              className="group relative bg-white overflow-hidden text-[#126491] font-bold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300 delay-100">Contáctanos</span>
              <span className="absolute inset-0 bg-[#126491] transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </Link>
          </div>
        </div>
      </div>

      {/* Indicadores de slide */}
      <div className="absolute bottom-32 left-0 right-0 flex justify-center gap-2 z-10">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white scale-110' : 'bg-white/50'
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Servicios destacados */}
      <div className="absolute -bottom-1 left-0 right-0 hidden md:flex justify-center z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full max-w-6xl">
        {/* Transporte terrestre */}
        <div className="group relative bg-[#126491]/90 backdrop-blur-sm h-24 md:h-32 flex items-center justify-center text-white border-r border-white/10 transition-all duration-300 hover:bg-[#126491] hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#af5661] transform origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
          <div className="flex items-center">
            <Truck className="w-10 h-10 text-white mr-4" />
            <div className="text-lg md:text-xl font-medium">Transporte terrestre</div>
          </div>
        </div>

        {/* Servicios Logísticos */}
        <div className="group relative bg-[#126491]/90 backdrop-blur-sm h-24 md:h-32 flex items-center justify-center text-white border-r border-white/10 transition-all duration-300 hover:bg-[#126491] hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#af5661] transform origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
          <div className="flex items-center">
            <Package className="w-10 h-10 text-white mr-4" />
            <div className="text-lg md:text-xl font-medium">Servicios Logísticos</div>
          </div>
        </div>

        {/* Flotas Dedicadas */}
        <div className="group relative bg-[#126491]/90 backdrop-blur-sm h-24 md:h-32 flex items-center justify-center text-white transition-all duration-300 hover:bg-[#126491] hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#af5661] transform origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
          <div className="flex items-center">
            <Bus className="w-10 h-10 text-white mr-4" />
            <div className="text-lg md:text-xl font-medium">Flotas Dedicadas</div>
          </div>
        </div>
      </div>
    </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <Link href="#quienes-somos" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;