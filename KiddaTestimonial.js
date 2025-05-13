const KiddaTestimonial = () => {
  return (
    <section className="py-16 px-4 bg-blue-50">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-8">
          <svg className="w-12 h-12 mx-auto text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <blockquote className="text-xl italic text-blue-800 mb-6">
          "Antes gastábamos una fortuna en clases que al final mis hijos dejaban a las dos semanas. Con Kidda pueden probar diferentes actividades hasta encontrar lo que realmente les apasiona, ¡y ahorramos dinero!"
        </blockquote>
        <div className="font-semibold text-blue-600">
          <p>María G., madre de Lucas (7) y Sofía (5)</p>
        </div>
      </div>
    </section>
  );
};

export default KiddaTestimonial;