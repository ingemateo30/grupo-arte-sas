import React from 'react';
import { motion } from 'framer-motion';

const EquipoTrabajo = () => {
  const equipoData = [
    {
      id: 1,
      titulo: "Conductores",
      descripcion: "Contamos con un equipo de 500 conductores fidelizados como terceros que están altamente capacitados para prestar un servicio de transporte de forma segura.",
      icono: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
        </svg>
      )
    },
    {
      id: 2,
      titulo: "Vehículos",
      descripcion: "Todos los vehículos son revisados minuciosamente antes de cualquier viaje para garantizar el correcto funcionamiento y la seguridad de la carga y el conductor.",
      icono: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"></path>
        </svg>
      )
    },
    {
      id: 3,
      titulo: "Logística",
      descripcion: "Realizamos seguimiento a toda la actividad del transporte y garantizamos la eficiencia de cada uno de los procesos.",
      icono: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
        </svg>
      )
    },
    {
      id: 4,
      titulo: "Experiencia",
      descripcion: "Contamos con clientes como Agropecuaria Aliar, Cerámicas Italia, Sotrasur, Metalteco, Colombiana De Cereales Y Granos SAS, entre otras. Para el año 2024 se han despachado un promedio de 15 a 20 vehículos diarios.",
      icono: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      )
    },
    {
      id: 5,
      titulo: "Área Administrativa",
      descripcion: "Realizamos procesos organizados asegurando el cumplimiento de las normativas vigentes y el compromiso con los clientes y colaboradores.",
      icono: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
        </svg>
      )
    },
    {
      id: 6,
      titulo: "Seguridad en Carretera",
      descripcion: "Ofrecemos información del estado del vehículo las 24 horas del día, asistencia en carretera, carga asegurada y seguimiento satelital (GPS) en cada vehículo.",
      icono: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      )
    }
  ];

  // Nota: En un proyecto real, importarías framer-motion
  // Este es un componente de muestra que simula el comportamiento
  const MotionDiv = ({ children, ...props }) => (
    <div {...props}>
      {children}
    </div>
  );

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Elementos de fondo para efectos visuales */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#126491] opacity-5"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#af5661] opacity-5"></div>
      
      {/* Líneas decorativas con efecto de carretera */}
      <div className="absolute left-0 right-0 top-1/2 h-2 bg-gray-200">
        <div className="w-full h-full flex">
          {Array.from({ length: 20 }).map((_, index) => (
            <div 
              key={index} 
              className="h-full w-8 bg-[#126491] opacity-70 mx-6"
            ></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 inline-block relative">
            <span className="relative z-10 text-[#126491]">Nuestro Equipo de Trabajo</span>
            <div className="absolute -bottom-3 left-0 right-0 h-3 bg-[#af5661] opacity-20 transform -skew-x-12"></div>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Profesionales comprometidos con la excelencia en el transporte de carga
          </p>
          <div className="w-28 h-1 bg-[#af5661] mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {equipoData.map((item, index) => (
            <MotionDiv 
              key={item.id}
              className="group bg-white rounded-xl p-8 text-center shadow-xl transition-all duration-500 hover:shadow-2xl relative overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Fondo con efecto de hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#126491] to-[#0a4d75] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              
              {/* Círculo decorativo */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#af5661] rounded-full opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              
              {/* Icono y contenido */}
              <div className="relative flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-[#126491] text-white flex items-center justify-center mb-6 transform group-hover:scale-110 transition-all duration-500 shadow-lg">
                  {item.icono}
                </div>
                
                <h3 className="text-2xl font-bold text-[#126491] mb-4 flex items-center">
                  {item.titulo}
                  <div className="ml-2 w-6 h-0.5 bg-[#af5661] transform translate-y-0.5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </h3>
                
                <p className="text-gray-700 leading-relaxed">
                  {item.descripcion}
                </p>
                
                {/* Botón que aparece al hacer hover */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <button className="px-4 py-2 rounded-lg text-sm font-medium text-[#126491] border border-[#126491] hover:bg-[#126491] hover:text-white transition-colors duration-300">
                    Más información
                  </button>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
        
        {/* Contador de estadísticas */}
        <div className="mt-20 bg-gradient-to-r from-[#126491] to-[#0e5a84] rounded-2xl p-10 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-3">500+</div>
              <div className="text-lg opacity-80">Conductores</div>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-3">20+</div>
              <div className="text-lg opacity-80">Vehículos diarios</div>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-3">15+</div>
              <div className="text-lg opacity-80">Años de experiencia</div>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-3">24/7</div>
              <div className="text-lg opacity-80">Soporte y seguimiento</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipoTrabajo;