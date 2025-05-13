import React from 'react';

const KiddaPlans = () => {
  return (
    <section id="plans" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
          Nuestros planes
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            {
              name: "Explorador",
              price: "S/69",
              classes: "6 clases (5 estándar + 1 premium)",
              features: [
                "Acceso a múltiples actividades",
                "Participación en academias aliadas",
                "Cuenta familiar compartida",
                "IGV incluido"
              ],
              color: "border-blue-300"
            },
            {
              name: "Aventurero",
              price: "S/119",
              classes: "8 clases (6 estándar + 2 premium)",
              features: [
                "Acceso a múltiples actividades",
                "Participación en academias aliadas",
                "Cuenta familiar compartida",
                "IGV incluido",
                "⭐ Más popular"
              ],
              color: "border-yellow-300"
            },
            {
              name: "Descubridor",
              price: "S/159",
              classes: "10 clases (8 estándar + 2 premium)",
              features: [
                "Acceso a múltiples actividades",
                "Participación en academias aliadas",
                "Cuenta familiar compartida",
                "IGV incluido"
              ],
              color: "border-orange-300"
            },
            {
              name: "Exploración Total",
              price: "S/249",
              classes: "12 clases (9 estándar + 3 premium)",
              features: [
                "Acceso a múltiples actividades",
                "Participación en academias aliadas",
                "Cuenta familiar compartida",
                "IGV incluido"
              ],
              color: "border-red-300"
            },
            {
              name: "Familiar",
              price: "S/349",
              classes: "20 clases presenciales (15 estándar + 5 premium)",
              features: [
                "Acceso a múltiples actividades",
                "Participación en academias aliadas",
                "Cuenta familiar compartida",
                "IGV incluido"
              ],
              color: "border-purple-500"
            }
          ].map((plan, index) => (
            <div 
              key={index} 
              className={`w-full md:w-[calc(33.333%-1.5rem)] lg:w-[calc(20%-1.5rem)] p-6 rounded-xl border-t-4 ${plan.color} shadow-md hover:shadow-lg transition duration-300`}
            >
              <h3 className="text-xl font-bold text-center text-blue-800 mb-2">{plan.name}</h3>
              <p className="text-2xl font-bold text-center text-blue-800 mb-1">{plan.price}</p>
              <p className="text-sm text-center text-blue-600 mb-4">{plan.classes}</p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    {feature.startsWith("⭐") ? (
                      <span className="text-yellow-500 text-sm">{feature}</span>
                    ) : (
                      <>
                        <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                        </svg>
                        <span className="text-sm text-blue-600">{feature}</span>
                      </>
                    )}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdCOiV9xQATm9XXOE-ymWzE1GHpdWah54NFNUxtu72lAZMzpA/viewform?usp=dialog', '_blank')}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
              >
                Elegir este plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KiddaPlans;