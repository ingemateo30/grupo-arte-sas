import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Truck, Package, Bus, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const backgroundImages = ["/1.jpeg", "/255.jpg", "/ca.webp"];

  const slideContent = [
    {
      title: "Soluciones de Transporte",
      description: "Tu socio confiable en transporte de carga en Colombia",
      icon: <Truck className="w-12 h-12 text-white mx-auto" />,
    },
    {
      title: "Logística Integral",
      description: "Optimizamos cada eslabón de tu cadena de suministro",
      icon: <Package className="w-12 h-12 text-white mx-auto" />,
    },
    {
      title: "Flotas Dedicadas",
      description: "Vehículos exclusivos para tus necesidades específicas",
      icon: <Bus className="w-12 h-12 text-white mx-auto" />,
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Fondo con imágenes cambiantes */}
      {backgroundImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === index ? 'opacity-100 scale-105' : 'opacity-0'
          }`}
        >
          <Image src={img} alt="Fondo de transporte" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d6efd]/50 via-[#0d6efd]/30 to-[#0d6efd]/60"></div>
        </div>
      ))}

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center px-6">
        {/* Título principal */}
        <h1 className="text-5xl md:text-7xl font-bold text-white relative">
          Grupo Arte SAS
          <span className="block w-full h-1 bg-[#ff4d6d] mt-2"></span>
        </h1>

        {/* Descripción debajo del título */}
        <p className="text-xl text-white mt-4 max-w-3xl">
          {slideContent[currentSlide].description}
        </p>

        {/* Botones de acción */}
        <div className="mt-6 flex gap-4">
          <Link href="#servicios" className="px-6 py-3 rounded-full bg-[#ff4d6d] text-white text-lg font-bold flex items-center gap-2 hover:bg-[#e9445d]">
            Nuestros Servicios <ArrowRight className="w-5 h-5" />
          </Link>

          <Link href="#contacto" className="px-6 py-3 rounded-full bg-white text-[#0d6efd] text-lg font-bold hover:bg-gray-200">
            Contáctanos
          </Link>
        </div>

        {/* Tarjetas con icono y texto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-5xl">
          {slideContent.map((content, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl flex flex-col items-center text-white shadow-lg transition-all duration-300 hover:scale-105">
              {content.icon}
              <h3 className="text-lg font-semibold mt-2">{content.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
