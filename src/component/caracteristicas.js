import { useState } from 'react';

const CaracteristicasDestacadas = () => {
  const [activeTab, setActiveTab] = useState(1);
  
  const caracteristicas = [
    {
      id: 1,
      icon: "🔒",
      title: "Seguridad Garantizada",
      description: "Monitoreo satelital 24/7 y protocolos de seguridad avanzados para el transporte de tu carga.",
    },
    {
      id: 2,
      icon: "⏱️",
      title: "Entregas Puntuales",
      description: "Nuestra red logística optimizada asegura el cumplimiento de los tiempos de entrega acordados.",
    },
    {
      id: 3,
      icon: "📱",
      title: "Seguimiento en Tiempo Real",
      description: "Accede a información actualizada sobre el estado de tu carga desde cualquier dispositivo.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">¿Por Qué Elegirnos?</h2>
          <div className="w-20 h-1 bg-[#af5661] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre las ventajas que nos hacen ser la mejor opción para tus necesidades de transporte
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div className="bg-gray-100 rounded-2xl p-4 relative overflow-hidden h-96">
              <div className="absolute inset-0 flex items-center justify-center">
                {activeTab === 1 && (
                  <div className="animate-fade-in-up text-center">
                    <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                      🔒
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Sistema de Seguridad</h3>
                    <p className="text-gray-600">Monitoreo constante y protocolos de seguridad avanzados</p>
                  </div>
                )}
                {activeTab === 2 && (
                  <div className="animate-fade-in-up text-center">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                      ⏱️
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Puntualidad Garantizada</h3>
                    <p className="text-gray-600">Control preciso de rutas y tiempos de entrega</p>
                  </div>
                )}
                {activeTab === 3 && (
                  <div className="animate-fade-in-up text-center">
                    <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                      📱
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Plataforma Digital</h3>
                    <p className="text-gray-600">Acceso en tiempo real al estado de tu carga</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="space-y-6">
              {caracteristicas.map((item) => (
                <div 
                  key={item.id}
                  className={`p-6 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-md ${activeTab === item.id ? 'bg-[#126491] text-white shadow-lg' : 'bg-gray-50'}`}
                  onClick={() => setActiveTab(item.id)}
                >
                  <div className="flex items-start">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl mr-4 ${activeTab === item.id ? 'bg-white text-[#126491]' : 'bg-[#126491] bg-opacity-10 text-[#126491]'}`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className={activeTab === item.id ? 'text-white text-opacity-90' : 'text-gray-600'}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaracteristicasDestacadas;