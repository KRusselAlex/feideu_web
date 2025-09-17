import { motion } from 'framer-motion';

const solutions = [
  {
    title: "Migration Cloud",
    description: "Transfert sécurisé de vos applications et données vers le cloud.",
    icon: "☁️"
  },
  {
    title: "Infrastructure Cloud",
    description: "Mise en place et gestion d'infrastructures cloud scalables.",
    icon: "🖥️"
  },
  {
    title: "Sauvegarde Cloud",
    description: "Solutions de sauvegarde et de récupération de données dans le cloud.",
    icon: "💾"
  },
  {
    title: "Sécurité Cloud",
    description: "Protection avancée de vos données et applications cloud.",
    icon: "🔒"
  }
];

const CloudSolutions = () => {
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
          Solutions Cloud
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-700 max-w-2xl mx-auto mb-16"
        >
          Nous vous accompagnons dans votre transformation digitale avec des solutions cloud
          performantes, sécurisées et adaptées à vos besoins.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold text-primary-800 mb-3">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
        >
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">Nos Partenaires Cloud</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">AWS</div>
              <p className="text-gray-600">Amazon Web Services</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">Azure</div>
              <p className="text-gray-600">Microsoft Azure</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">GCP</div>
              <p className="text-gray-600">Google Cloud Platform</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-xl shadow-lg p-8 text-center"
        >
          <h2 className="text-2xl font-semibold text-primary-800 mb-4">Prêt à Migrer Vers le Cloud ?</h2>
          <p className="text-gray-700 mb-6">
            Contactez-nous pour discuter de votre projet de migration cloud
            et découvrir comment nous pouvons vous aider à optimiser votre infrastructure.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-300"
          >
            Discutons de Votre Projet
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CloudSolutions; 