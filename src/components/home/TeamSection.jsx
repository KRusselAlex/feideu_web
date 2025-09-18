import React from "react";
import team from "../../data/team";

const TeamSection = () => (
  <section id="equipe" className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-3 md:px-6 lg:px-8">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Notre Équipe</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
            <img src={member.photo} alt={member.name} className="w-full h-64 object-cover" />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
