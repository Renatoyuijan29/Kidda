import React from 'react';

const KiddaHeader = () => {
  return (
    <header className="bg-yellow-50 pt-24 pb-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800">
            Conectamos a niños con experiencias increíbles
          </h1>
          <p className="text-xl text-blue-600">
            Kidda permite que los niños descubran distintas actividades sin limitarse a una sola academia.
          </p>
          <button 
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdCOiV9xQATm9XXOE-ymWzE1GHpdWah54NFNUxtu72lAZMzpA/viewform?usp=dialog', '_blank')}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full shadow-md transition duration-300"
          >
            Únete a la lista de espera
          </button>
        </div>
        <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1542816417-09836749781e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
            alt="Niños haciendo diferentes actividades" 
            className="rounded-xl shadow-xl"
          />
        </div>
      </div>
    </header>
  );
};

export default KiddaHeader;