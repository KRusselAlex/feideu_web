import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const offers = [
  {
    name: "FREE",
    price: "0$/mois",
    features: [
      "Formation réseau",
      "15GB Email",
      "Sans Internet illimité",
      "Sans espace"
    ],
    color: "bg-gray-100",
    textColor: "text-gray-800"
  },
  {
    name: "STANDARD",
    price: "10$/mois",
    features: [
      "Formation réseau",
      "Internet illimité",
      "5 GB espace",
      "15GB Email"
    ],
    color: "bg-primary-100",
    textColor: "text-primary-800"
  },
  {
    name: "PREMIUM",
    price: "15$/mois",
    features: [
      "Formation réseau",
      "Internet illimité",
      "Sans 5 GB espace",
      "Sans 15GB Email"
    ],
    color: "bg-secondary-100",
    textColor: "text-secondary-800"
  }
];

const Offers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary-50">
      {/* Section Hero */}
      <section className="py-24 bg-primary-50">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              Nos Offres
            </h1>
            <p className="text-xl text-secondary-700">
              Choisissez l'offre qui correspond le mieux à vos besoins
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Fiche de Renseignement */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-primary-900 mb-4">
              Fiche de Renseignement
            </h2>
            <p className="text-secondary-700 mb-6">
              Téléchargez notre fiche de renseignement pour en savoir plus sur nos services
            </p>
            <motion.a
              href="/demo.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-300"
            >
              Télécharger la fiche
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Section Offres */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${offer.color} rounded-2xl shadow-lg overflow-hidden`}
              >
                <div className="p-8">
                  <h3 className={`text-2xl font-bold ${offer.textColor} mb-2`}>
                    {offer.name}
                  </h3>
                  <p className="text-3xl font-bold text-primary-900 mb-6">
                    {offer.price}
                  </p>
                  <ul className="space-y-4 mb-8">
                    {offer.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <svg
                          className="w-5 h-5 text-primary-600 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-secondary-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-300"
                  >
                    Souscrire
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-primary-900 mb-6">
              Vous avez des questions ?
            </h2>
            <p className="text-xl text-secondary-700 mb-8 max-w-2xl mx-auto">
              Notre équipe est là pour vous aider à choisir la meilleure offre pour vos besoins.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 text-white py-3 px-8 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-300"
            >
              <Link to="/contact">Contactez-nous</Link>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Offers; 