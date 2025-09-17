import { motion } from 'framer-motion';

const features = [
  {
    title: "Développement Frontend",
    description: "Création d'interfaces utilisateur modernes et réactives avec les dernières technologies.",
    icon: "💻"
  },
  {
    title: "Développement Backend",
    description: "Architecture robuste et scalable pour gérer vos données et votre logique métier.",
    icon: "⚙️"
  },
  {
    title: "E-commerce",
    description: "Solutions complètes pour vos boutiques en ligne avec intégration de paiement.",
    icon: "🛒"
  },
  {
    title: "Optimisation SEO",
    description: "Amélioration de votre visibilité sur les moteurs de recherche.",
    icon: "🔍"
  }
];

const WebDevelopment = () => {
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
          Développement Web
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-700 max-w-2xl mx-auto mb-16"
        >
          Nous créons des sites web modernes, performants et adaptés à vos besoins.
          Notre expertise couvre tous les aspects du développement web, du frontend au backend.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-primary-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-semibold text-primary-800 mb-4">Notre Processus</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">1</div>
              <h3 className="font-medium text-primary-700 mb-2">Analyse</h3>
              <p className="text-gray-600">Étude de vos besoins et objectifs</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">2</div>
              <h3 className="font-medium text-primary-700 mb-2">Conception</h3>
              <p className="text-gray-600">Création des maquettes et architecture</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">3</div>
              <h3 className="font-medium text-primary-700 mb-2">Développement</h3>
              <p className="text-gray-600">Implémentation et tests</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">4</div>
              <h3 className="font-medium text-primary-700 mb-2">Livraison</h3>
              <p className="text-gray-600">Déploiement et support</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-white rounded-xl shadow-lg p-8 text-center"
        >
          <h2 className="text-2xl font-semibold text-primary-800 mb-4">Prêt à Démarrer Votre Projet ?</h2>
          <p className="text-gray-700 mb-6">
            Contactez-nous pour discuter de votre projet de développement web
            et découvrir comment nous pouvons vous aider à atteindre vos objectifs.
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

export default WebDevelopment; 