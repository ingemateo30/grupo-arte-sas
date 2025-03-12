"use client";
import Image from 'next/image';
import Link from 'next/link';
import Nabvar from '@/component/navbar';
import Boton from "@/component/boton";
import Equipo from "@/component/equipo";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Home() {
  return (
<>
      <Nabvar />


      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/fondo.jpg"
              alt="Transporte de carga"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[#126491] opacity-70"></div>
          </div>

          <div className="container z-10 text-white text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Grupo Arte SAS</span>
            </h1>
            <p className="text-2xl md:text-3xl mb-8 max-w-3xl mx-auto">
              Tu solución confiable en transporte de carga en Colombia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#servicios" className="bg-[#af5661] hover:bg-[#9a4a54] text-white font-bold py-3 px-8 rounded-full transition-all">
                Nuestros Servicios
              </Link>
              <Link href="#contacto" className="bg-white hover:bg-gray-100 text-[#126491] font-bold py-3 px-8 rounded-full transition-all">
                Contáctanos
              </Link>
            </div>
          </div>

          <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
            <Link href="#quienes-somos">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </Link>
          </div>
        </section>


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
      <div className="md:w-1/2 z-10">
        <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl transform transition-all hover:scale-102 group">
          <div className="absolute inset-0 bg-gradient-to-t from-[#126491]/40 to-transparent z-10"></div>
          <Image
        src="/camioneros2.webp"
        alt="Nuestra empresa"
        layout="fill" // Ajusta automáticamente el tamaño
        objectFit="cover" // Asegura que la imagen cubra el espacio
        className="transition-transform duration-500 group-hover:scale-110"
        priority // Carga la imagen más rápido
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
<section id="vision-mision" className="py-28 bg-gray-50 relative">
  <div className="container mx-auto px-4">
    <div className="text-center mb-20 relative">
      <h2 className="text-5xl font-bold text-[#126491] mb-3">Nuestra Filosofía</h2>
      <div className="w-24 h-1 bg-[#af5661] mx-auto"></div>
      <div className="w-16 h-1 bg-[#af5661] mx-auto mt-2"></div>
    </div>

    <div className="flex flex-col md:flex-row gap-14">
      <div className="md:w-1/2 bg-white p-10 rounded-xl shadow-xl transform transition-all hover:-translate-y-3 hover:shadow-2xl">
        <div className="w-20 h-20 bg-gradient-to-br from-[#126491] to-[#0a507a] text-white rounded-full flex items-center justify-center mb-8 shadow-lg transform transition-all hover:rotate-12">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
          </svg>
        </div>
        <h3 className="text-3xl font-bold text-[#126491] mb-6">Nuestra Visión</h3>
        <p className="text-xl text-gray-700 leading-relaxed">
          Ofrecer el servicio más eficaz y confiable del transporte de carga masiva en el ámbito Nacional,
          generando siempre un mayor grado de satisfacción de nuestros Clientes. 
        </p>
        <p className="text-xl text-gray-700 leading-relaxed mt-4 font-medium">
          Transportamos de manera segura y eficiente su carga a cualquier destino del territorio nacional.
        </p>
        <div className="mt-8 h-1 w-full bg-gradient-to-r from-[#126491] to-transparent"></div>
      </div>

      <div className="md:w-1/2 bg-white p-10 rounded-xl shadow-xl transform transition-all hover:-translate-y-3 hover:shadow-2xl">
        <div className="w-20 h-20 bg-gradient-to-br from-[#126491] to-[#0a507a] text-white rounded-full flex items-center justify-center mb-8 shadow-lg transform transition-all hover:rotate-12">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
          </svg>
        </div>
        <h3 className="text-3xl font-bold text-[#126491] mb-6">Nuestra Misión</h3>
        <p className="text-xl text-gray-700 leading-relaxed">
          Ser la empresa de transporte líder en el mercado nacional, optimizando la efectividad
          de nuestro servicio para exceder las expectativas de nuestros clientes.
        </p>
        <p className="text-xl text-gray-700 leading-relaxed mt-4 font-medium">
          Nos dedicamos a mejorar continuamente la calidad de vida de nuestros colaboradores
          y la experiencia de servicio para cada cliente.
        </p>
        <div className="mt-8 h-1 w-full bg-gradient-to-r from-[#126491] to-transparent"></div>
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
        <section id="sostenibilidad" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 relative h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/paneles1.jpeg"
                  alt="Sostenibilidad Ambiental"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-4xl font-bold text-[#126491] mb-6">Sostenibilidad Ambiental</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Creemos en la necesidad de la transición energética y le apostamos a las nuevas energías renovables,
                  de ahí que con la instalación de paneles solares en nuestra sede principal, aportamos un grano de arena
                  al cuidado del medio ambiente.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  De igual forma acogemos las políticas de reducción en el uso del papel, implementando los trámites digitales,
                  por medio de la facturación electrónica, uso de correos electrónicos y redes sociales, para la publicación
                  de contenidos informativos en el desarrollo de nuestras actividades.
                </p>
                <div className="flex mt-8">
                  <Link href="#contacto" className="bg-[#126491] hover:bg-[#0e5377] text-white font-bold py-3 px-8 rounded-full transition-all">
                    Conoce nuestras iniciativas
                  </Link>
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

                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-white text-[#126491] rounded-full flex items-center justify-center hover:bg-[#af5661] hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white text-[#126491] rounded-full flex items-center justify-center hover:bg-[#af5661] hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white text-[#126491] rounded-full flex items-center justify-center hover:bg-[#af5661] hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
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
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p>© 2025 Grupo Arte SAS. Todos los derechos reservados.</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                </div>
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