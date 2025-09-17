import { motion } from 'framer-motion';

const services = [
  {
    title: "Audit de Sécurité",
    description: "Évaluation complète de votre infrastructure et identification des vulnérabilités.",
    icon: "🔍"
  },
  {
    title: "Protection des Données",
    description: "Solutions avancées pour la protection et le chiffrement de vos données sensibles.",
    icon: "🔒"
  },
  {
    title: "Sécurité des Applications",
    description: "Tests de pénétration et sécurisation de vos applications web et mobiles.",
    icon: "🛡️"
  },
  {
    title: "Formation & Sensibilisation",
    description: "Programmes de formation pour renforcer la sécurité au sein de votre organisation.",
    icon: "📚"
  }
];

const Cybersecurity = () => {
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
          Cybersécurité
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-700 max-w-2xl mx-auto mb-16"
        >
          Protégez votre entreprise contre les cybermenaces avec nos solutions de sécurité
          complètes et personnalisées.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-primary-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
        >
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">Notre Approche</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🔄</div>
              <h3 className="font-medium text-primary-700 mb-2">Évaluation Continue</h3>
              <p className="text-gray-600">Surveillance et amélioration constante</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="font-medium text-primary-700 mb-2">Solutions Sur Mesure</h3>
              <p className="text-gray-600">Adaptées à vos besoins spécifiques</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🤝</div>
              <h3 className="font-medium text-primary-700 mb-2">Support 24/7</h3>
              <p className="text-gray-600">Assistance technique permanente</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-xl shadow-lg p-8 text-center"
        >
          <h2 className="text-2xl font-semibold text-primary-800 mb-4">Protégez Votre Entreprise</h2>
          <p className="text-gray-700 mb-6">
            Contactez-nous pour une évaluation de sécurité gratuite
            et découvrez comment nous pouvons renforcer votre cybersécurité.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-300"
          >
            Demander une Évaluation
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Cybersecurity; 