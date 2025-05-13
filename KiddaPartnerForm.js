const KiddaPartnerForm = () => {
  return (
    <section id="partner" className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">¿Quieres ser aliado de Kidda?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Si eres una academia, empresa o institución educativa, únete a nuestra red y lleva tus experiencias a más familias.
        </p>
        <button 
          onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSe9slpNBZvW47FOhZoilZS26MfpvgzHWfmu6wgJlnEJoJyUdw/viewform?usp=dialog', '_blank')}
          className="bg-white text-blue-800 hover:bg-blue-100 font-semibold py-3 px-8 rounded-full shadow-md transition duration-300"
        >
          Quiero ser aliado
        </button>
      </div>
    </section>
  );
};

export default KiddaPartnerForm;