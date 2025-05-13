import React from 'react';

const KiddaNavbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-blue-800">Kidda</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('benefits')} className="text-blue-600 hover:text-orange-500 transition">
              Beneficios
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-blue-600 hover:text-orange-500 transition">
              ¿Cómo funciona?
            </button>
            <button onClick={() => scrollToSection('plans')} className="text-blue-600 hover:text-orange-500 transition">
              Planes
            </button>
            <button onClick={() => scrollToSection('partner')} className="text-blue-600 hover:text-orange-500 transition">
              Ser aliado
            </button>
            <button 
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdCOiV9xQATm9XXOE-ymWzE1GHpdWah54NFNUxtu72lAZMzpA/viewform?usp=dialog', '_blank')}
              className="text-blue-600 hover:text-orange-500 transition"
            >
              Lista de espera
            </button>
          </div>
          <button className="md:hidden text-blue-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default KiddaNavbar;