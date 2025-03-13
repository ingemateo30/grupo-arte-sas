"use client";
import Image from 'next/image';
import Link from 'next/link';
import Nabvar from '@/component/navbar';
import Boton from "@/component/boton";
import Equipo from "@/component/equipo";
import Hero from "@/component/hero";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { Leaf, Recycle, Sun, Truck, CloudLightning } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Nabvar />


      <div className="flex flex-col min-h-screen">
      <Hero />
        
        {/* Quienes Somos - Versión mejorada sin animaciones */}
        <section id="quienes-somos" className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="md:w-1/2 z-10">
                <div className="relative mb-8">
                  <h2 className="text-5xl font-bold text-[#126491] mb-2">Quiénes Somos</h2>
                  <div className="w-32 h-1 bg-[#af5661] mt-2"></div>
                  <div className="w-20 h-1 bg-[#af5661] mt-2 ml-6"></div>
                </div>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Somos una empresa Santandereana de transporte de carga, con <span className="font-bold text-[#126491]">5 años de trayectoria</span>,
                  ofreciendo soluciones de acuerdo a la necesidad de cada cliente en los diferentes sectores.
                </p>
                <p className="text-xl text-gray-700 mb-10 leading-relaxed">
                  Movilizamos carga en todo el territorio colombiano y nos destacamos por la agilidad
                  en los procesos y el compromiso con nuestros clientes.
                </p>
                <div className="mt-10">
                  <Link
                    href="#vision-mision"
                    className="bg-[#126491] text-white font-bold py-3 px-8 rounded-full inline-flex items-center transform transition-transform hover:scale-105 hover:bg-[#0a507a] group"
                  >
                    Conoce más sobre nosotros
                    <svg className="w-5 h-5 ml-2 transition-transform transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Contenedor de imagen con altura ajustada para móviles */}
              <div className="md:w-1/2 w-full relative h-[300px] md:h-[500px] z-10">
                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl transform transition-all hover:scale-102 group">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#126491]/40 to-transparent z-10"></div>
                  <Image
                    src="/camioneros2.webp"
                    alt="Nuestra empresa"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    priority
                  />
                  <div className="absolute bottom-6 right-6 z-20">
                    <div className="px-4 py-2 bg-white/90 rounded-lg text-[#126491] font-bold shadow-lg">
                      5 años de experiencia
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Visión y Misión - Versión mejorada sin animaciones */}
        <section id="vision-mision" className="py-12 bg-gray-50 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 relative">
              <h2 className="text-5xl font-bold text-[#126491] mb-3">Nuestra Filosofía</h2>
              <div className="w-24 h-1 bg-[#af5661] mx-auto"></div>
              <div className="w-16 h-1 bg-[#af5661] mx-auto mt-2"></div>
            </div>

            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2 bg-white p-10 rounded-xl shadow-xl transform transition-all hover:-translate-y-3 hover:shadow-2xl">
                <div className="w-20 h-20 bg-gradient-to-br from-[#126491] to-[#0a507a] text-white rounded-full flex items-center justify-center mb-6 shadow-lg transform transition-all hover:rotate-12">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-[#126491] mb-4">Nuestra Visión</h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Ofrecer el servicio más eficaz y confiable del transporte de carga masiva en el ámbito Nacional,
                  generando siempre un mayor grado de satisfacción de nuestros Clientes.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mt-4 font-medium">
                  Transportamos de manera segura y eficiente su carga a cualquier destino del territorio nacional.
                </p>
                <div className="mt-6 h-1 w-full bg-gradient-to-r from-[#126491] to-transparent"></div>
              </div>

              <div className="md:w-1/2 bg-white p-10 rounded-xl shadow-xl transform transition-all hover:-translate-y-3 hover:shadow-2xl">
                <div className="w-20 h-20 bg-gradient-to-br from-[#126491] to-[#0a507a] text-white rounded-full flex items-center justify-center mb-6 shadow-lg transform transition-all hover:rotate-12">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-[#126491] mb-4">Nuestra Misión</h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Ser la empresa de transporte líder en el mercado nacional, optimizando la efectividad
                  de nuestro servicio para exceder las expectativas de nuestros clientes.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mt-4 font-medium">
                  Nos dedicamos a mejorar continuamente la calidad de vida de nuestros colaboradores
                  y la experiencia de servicio para cada cliente.
                </p>
                <div className="mt-6 h-1 w-full bg-gradient-to-r from-[#126491] to-transparent"></div>
              </div>
            </div>
          </div>
        </section>


        <section id="servicios" className="py-20 bg-[#126491]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-2">Nuestros Servicios</h2>
              <div className="w-20 h-1 bg-[#af5661] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl transform hover:-translate-y-2">
                <div className="h-48 relative">
                  <Image
                    src="/s11.jpg"
                    alt="Transporte Nacional"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#126491] mb-3">Transporte Nacional</h3>
                  <p className="text-gray-700 mb-4">
                    Cubrimos todas las rutas nacionales con una flota moderna y personal capacitado
                    para garantizar la seguridad de su carga.
                  </p>
                  <Link href="#contacto" className="text-[#af5661] font-semibold hover:text-[#126491] transition-colors">
                    Solicitar servicio →
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl transform hover:-translate-y-2">
                <div className="h-48 relative">
                  <Image
                    src="/s21.jpg"
                    alt="Carga Especializada"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#126491] mb-3">Carga Especializada</h3>
                  <p className="text-gray-700 mb-4">
                    Contamos con vehículos adaptados para transportar mercancías especiales
                    que requieren condiciones particulares.
                  </p>
                  <Link href="#contacto" className="text-[#af5661] font-semibold hover:text-[#126491] transition-colors">
                    Solicitar servicio →
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl transform hover:-translate-y-2">
                <div className="h-48 relative">
                  <Image
                    src="/s3.jpg"
                    alt="Seguimiento en Tiempo Real"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#126491] mb-3">Seguimiento en Tiempo Real</h3>
                  <p className="text-gray-700 mb-4">
                    Ofrecemos seguimiento satelital de su carga las 24 horas del día,
                    brindando tranquilidad y control sobre sus envíos.
                  </p>
                  <Link href="#contacto" className="text-[#af5661] font-semibold hover:text-[#126491] transition-colors">
                    Solicitar servicio →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Equipo />

        {/* Sostenibilidad */}
        <section id="sostenibilidad" className="py-10 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full opacity-20 -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100 rounded-full opacity-20 translate-y-1/2 -translate-x-1/4"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-[#126491] mb-4">Sostenibilidad Ambiental</h2>
          <div className="w-16 h-1 bg-[#af5661] mx-auto mb-6"></div>
          <p className="text-gray-600">Nuestra contribución a un futuro más sostenible para Colombia y el planeta</p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Imagen con efectos mejorados */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative h-[350px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl transform md:rotate-1 transition-all duration-500 hover:rotate-0 hover:scale-[1.02]">
              <Image
                src="/paneles1.jpeg"
                alt="Sostenibilidad Ambiental"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#126491]/60 to-transparent"></div>
        
            </div>
          </div>

          <div className="md:w-1/2 w-full mt-8 md:mt-0">
            <h3 className="text-2xl font-semibold text-[#126491] mb-6 flex items-center">
              Nuestra Visión Sostenible
            </h3>
            
            <p className="text-lg text-gray-700 mb-6">
              Creemos firmemente en la necesidad de impulsar la transición energética y apostamos por las energías renovables como pilar de nuestro futuro.
            </p>
            
            <div className="bg-white p-6 rounded-xl shadow-md mb-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <h4 className="font-semibold text-lg mb-3 flex items-center text-gray-800">
                <CloudLightning className="w-5 h-5 mr-2 text-[#af5661]" />
                Energía Solar
              </h4>
              <p className="text-gray-600">
                Con la instalación de paneles solares en nuestra sede principal, aportamos significativamente a la reducción de emisiones de CO₂, disminuyendo nuestra huella de carbono en el transporte de carga colombiano.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <h4 className="font-semibold text-lg mb-3 flex items-center text-gray-800">
                <Recycle className="w-5 h-5 mr-2 text-[#af5661]" />
                Digitalización Verde
              </h4>
              <p className="text-gray-600">
                Adoptamos políticas de reducción en el uso de papel implementando trámites digitales, facturación electrónica y comunicación digital para minimizar nuestro impacto ambiental en todas nuestras operaciones logísticas.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center bg-green-50 py-2 px-4 rounded-full">
                <Leaf className="w-4 h-4 text-green-600 mr-2" />
                <span className="text-green-800 text-sm">Reducción de emisiones</span>
              </div>
              <div className="flex items-center bg-blue-50 py-2 px-4 rounded-full">
                <Truck className="w-4 h-4 text-blue-600 mr-2" />
                <span className="text-blue-800 text-sm">Logística sostenible</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


        {/* Contacto */}
        <section id="contacto" className="py-20 bg-[#126491]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-4xl font-bold text-white mb-6">Contáctanos</h2>
                <p className="text-lg text-white mb-8">
                  Estamos listos para atender tus necesidades de transporte.
                  Completa el formulario y uno de nuestros asesores se pondrá en contacto contigo.
                </p>

                <div className="bg-white rounded-lg p-6 mb-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#126491] text-white rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-700">Teléfono</h3>
                      <p className="text-gray-600">+57 315-364-6739</p>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#126491] text-white rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-700">Email</h3>
                      <p className="text-gray-600">gerencia@grupoarte.co</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#126491] text-white rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-700">Dirección</h3>
                      <p className="text-gray-600">Cra 14a # 29a - 27 San Gil - Santander</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2">
                <form className="bg-white rounded-lg p-8 shadow-lg">
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nombre Completo</label>
                    <input type="text" id="name" className="w-full px-4 py-3 text-gray-400 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#126491]" placeholder="Tu nombre" />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Correo Electrónico</label>
                    <input type="email" id="email" className="w-full px-4 text-gray-400 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#126491]" placeholder="Tu correo" />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Teléfono</label>
                    <input type="tel" id="phone" className="w-full px-4 text-gray-400 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#126491]" placeholder="Tu teléfono" />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Servicio que necesitas</label>
                    <select id="service" className="w-full px-4 text-gray-400 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#126491]">
                      <option value="">Selecciona un servicio</option>
                      <option value="transporte-nacional">Transporte Nacional</option>
                      <option value="carga-especializada">Carga Especializada</option>
                      <option value="seguimiento">Seguimiento en Tiempo Real</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensaje</label>
                    <textarea id="message" rows="4" className="w-full px-4 text-gray-400 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#126491]" placeholder="Cuéntanos más sobre tus necesidades de transporte"></textarea>
                  </div>

                  <button type="submit" className="w-full bg-[#126491] hover:bg-[#0e5377] text-white font-bold py-3 px-8 rounded-lg transition-all">
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Grupo Arte SAS</h3>
                <p className="mb-4 text-gray-400">
                  Tu solución confiable en transporte de carga en Colombia.
                </p>
                <p className="mb-4 text-gray-400">
                  Movilizamos carga en todo el territorio colombiano con agilidad y compromiso.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Inicio</Link></li>
                  <li><Link href="#quienes-somos" className="text-gray-400 hover:text-white transition-colors">Quiénes Somos</Link></li>
                  <li><Link href="#servicios" className="text-gray-400 hover:text-white transition-colors">Servicios</Link></li>
                  <li><Link href="#contacto" className="text-gray-400 hover:text-white transition-colors">Contacto</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Servicios</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Transporte Nacional</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Carga Especializada</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Seguimiento en Tiempo Real</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Contacto</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    +57315-364-6739
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    gerencia@grupoarte.co
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    Cra 14a # 29a - 27 San Gil - Santander
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-col md:flex-row justify-center items-center">
                <p>© 2025 Grupo Arte SAS. Todos los derechos reservados.</p>
              </div>
            </div>
          </div>
        </footer>
        <Boton />
        <div className="fixed bottom-5 right-5 flex flex-col space-y-3 z-50">
          {/* Botón de WhatsApp */}
          <FloatingWhatsApp
            phoneNumber="+573153646739"
            accountName="grupo arte sas"
            avatar="/logo.png"
            darkMode={true}
            statusMessage="Normalmente responde en 1 hora"
            chatMessage="¡Hola!, ¿en qué te podemos ayudar?"
            placeholder="Escribe un mensaje"
            notification={true}
            chatboxHeight={340}
          />
        </div>
      </div>
    </>
  )
} 