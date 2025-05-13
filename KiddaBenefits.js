import React from 'react';

const KiddaBenefits = () => {
  return (
    <section id="benefits" className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
          Beneficios de Kidda
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-yellow-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
            <div className="mb-4">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Flexibilidad total</h3>
            <p className="text-blue-600">Cambia de actividad cada mes sin penalizaciones ni trámites</p>
          </div>
          
          <div className="bg-yellow-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
            <div className="mb-4">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Sin compromisos</h3>
            <p className="text-blue-600">Cancela cuando quieras sin letra pequeña ni preguntas</p>
          </div>
          
          <div className="bg-yellow-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
            <div className="mb-4">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Variedad de actividades</h3>
            <p className="text-blue-600">Diferentes opciones cada mes para mantener el interés</p>
          </div>
          
          <div className="bg-yellow-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
            <div className="mb-4">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Precio transparente</h3>
            <p className="text-blue-600">Un solo pago mensual sin costos ocultos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KiddaBenefits;