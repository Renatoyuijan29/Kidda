const KiddaHowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Llena el formulario",
      description: "Cuéntanos cuántos hijos tienes, sus edades e intereses. Esto nos ayudará a conocerte mejor y saber qué tipo de actividades buscas."
    },
    {
      number: "2",
      title: "Suscríbete",
      description: "Elige el plan mensual que más te convenga y accede a una variedad de actividades sin pagar por cada una."
    },
    {
      number: "3",
      title: "Descubre y elige",
      description: "Revisa las clases y experiencias disponibles en tu ciudad. Puedes ver horarios, ubicaciones y reservar según lo que más te interese."
    },
    {
      number: "4",
      title: "Reserva y disfruta",
      description: "Selecciona la actividad, guarda tu cupo y deja que tus hijos vivan nuevas experiencias cada semana."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 px-4 bg-blue-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
          ¿Cómo funciona Kidda?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative bg-white p-6 rounded-xl">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2 mt-4">{step.title}</h3>
              <p className="text-blue-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KiddaHowItWorks;