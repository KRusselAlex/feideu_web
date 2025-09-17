import { motion } from 'framer-motion';

const features = [
  {
    title: "Applications iOS",
    description: "Développement d'applications natives pour iPhone et iPad avec Swift.",
    icon: "📱"
  },
  {
    title: "Applications Android",
    description: "Création d'applications natives pour smartphones et tablettes Android.",
    icon: "📱"
  },
  {
    title: "Applications Cross-Platform",
    description: "Solutions multiplateformes avec React Native et Flutter.",
    icon: "🔄"
  },
  {
    title: "Applications PWA",
    description: "Applications web progressives pour une expérience native sur tous les appareils.",
    icon: "🌐"
  }
];

const AppDevelopment = () => {
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
          Développement d'Applications Mobiles
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-700 max-w-2xl mx-auto mb-16"
        >
          Nous créons des applications mobiles innovantes et performantes pour iOS et Android.
          Notre expertise couvre le développement natif et cross-platform.
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
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
        >
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">Notre Approche</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="font-medium text-primary-700 mb-2">Conception UX/UI</h3>
              <p className="text-gray-600">Interfaces intuitives et expérience utilisateur optimale</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🔒</div>
              <h3 className="font-medium text-primary-700 mb-2">Sécurité</h3>
              <p className="text-gray-600">Protection des données et respect de la vie privée</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📈</div>
              <h3 className="font-medium text-primary-700 mb-2">Performance</h3>
              <p className="text-gray-600">Applications rapides et optimisées</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-xl shadow-lg p-8 text-center"
        >
          <h2 className="text-2xl font-semibold text-primary-800 mb-4">Prêt à Créer Votre Application ?</h2>
          <p className="text-gray-700 mb-6">
            Contactez-nous pour discuter de votre projet d'application mobile
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

export default AppDevelopment; 