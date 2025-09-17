import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Développement Web',
    description: 'Création de sites web modernes et performants',
    icon: '🌐',
    path: '/services/web-development'
  },
  {
    title: 'Applications Mobiles',
    description: 'Apps natives et cross-platform',
    icon: '📱',
    path: '/services/mobile-apps'
  },
  {
    title: 'Solutions Cloud',
    description: 'Migration et gestion cloud',
    icon: '☁️',
    path: '/services/cloud-solutions'
  },
  {
    title: 'Cybersécurité',
    description: 'Protection de vos données',
    icon: '🔒',
    path: '/services/cybersecurity'
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary-50 to-white">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary-900 mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-secondary-700 max-w-2xl mx-auto">
            Des solutions sur mesure pour répondre à tous vos besoins digitaux
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link to={service.path}>
                <div className="bg-white rounded-2xl shadow-lg p-8 h-full transform transition-all duration-300 group-hover:shadow-xl">
                  <div className="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:bg-primary-100 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-secondary-600 mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center text-primary-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                    En savoir plus
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 text-white py-3 px-8 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-300"
            >
              Voir Tous Nos Services
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 