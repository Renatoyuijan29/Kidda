const KiddaTeam = () => {
  const teamMembers = [
    {
      name: "Ana Torres",
      role: "Fundadora",
      bio: "Educadora con 10 años de experiencia en desarrollo infantil.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Carlos Méndez",
      role: "Director de Alianzas",
      bio: "Especialista en conectar familias con experiencias educativas.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Lucía Fernández",
      role: "Coordinadora de Actividades",
      bio: "Diseña experiencias que inspiran creatividad en los niños.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
          Nuestro equipo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-yellow-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-white shadow-md">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-center text-blue-800 mb-1">{member.name}</h3>
              <p className="text-orange-500 text-center mb-3">{member.role}</p>
              <p className="text-blue-600 text-center">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KiddaTeam;