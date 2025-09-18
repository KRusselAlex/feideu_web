// TeamSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const team = [
  {
    name: "M. WOMGA ALBERT",
    position: "Fondateur & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    speciality: "Direction & Stratégie"
  },
  {
    name: "M. KOFFI TECH",
    position: "Ingénieur Réseau",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop",
    speciality: "Infrastructure & Sécurité"
  },
  {
    name: "Mme ADJOUA DEV",
    position: "Développeuse Logiciels",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=300&auto=format&fit=crop",
    speciality: "Développement & Formation"
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="py-24 bg-white/50 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            👥 Notre Équipe
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Rencontrez <span className="text-blue-600">nos experts</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une équipe passionnée, expérimentée et dédiée à votre réussite.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-6 shadow-md"
              />
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <div className="text-blue-600 font-medium mb-2">{member.position}</div>
              <p className="text-gray-600">{member.speciality}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
