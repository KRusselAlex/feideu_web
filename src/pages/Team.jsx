import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Jean Dupont",
    role: "CEO & Fondateur",
    image: "/team/jean.jpg",
    description: "Expert en stratégie digitale avec plus de 15 ans d'expérience."
  },
  {
    name: "Marie Martin",
    role: "Directrice Technique",
    image: "/team/marie.jpg",
    description: "Spécialiste en développement web et architecture cloud."
  },
  {
    name: "Pierre Dubois",
    role: "Responsable Marketing",
    image: "/team/pierre.jpg",
    description: "Expert en marketing digital et stratégie de contenu."
  },
  {
    name: "Sophie Lambert",
    role: "Designer UI/UX",
    image: "/team/sophie.jpg",
    description: "Passionnée par la création d'interfaces utilisateur intuitives."
  }
];

const Team = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-primary-50 to-primary-100 p-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold text-primary-900 text-center mb-12"
        >
          Notre Équipe
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-700 max-w-2xl mx-auto mb-16"
        >
          Rencontrez notre équipe d'experts passionnés qui travaillent ensemble pour
          créer des solutions innovantes et apporter une valeur exceptionnelle à nos clients.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-64 bg-gray-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-800 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-white rounded-xl shadow-lg p-8 text-center"
        >
          <h2 className="text-2xl font-semibold text-primary-800 mb-4">Rejoignez Notre Équipe</h2>
          <p className="text-gray-700 mb-6">
            Nous sommes toujours à la recherche de talents passionnés pour rejoindre notre équipe.
            Si vous souhaitez faire partie de notre aventure, n'hésitez pas à nous contacter.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-300"
          >
            Postuler Maintenant
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Team; 