import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faUsers, faAward, faHandshake, faLightbulb } from '@fortawesome/free-solid-svg-icons';

const features = [
  {
    icon: faUsers,
    title: 'Expert Team',
    description: 'Our team consists of highly skilled IT professionals with years of industry experience.'
  },
  {
    icon: faAward,
    title: 'Quality Assurance',
    description: 'We follow strict quality control processes to deliver exceptional solutions.'
  },
  {
    icon: faHandshake,
    title: 'Customer Support',
    description: 'Dedicated support team available to assist you with any issues or questions.'
  },
  {
    icon: faLightbulb,
    title: 'Innovative Solutions',
    description: 'We stay at the forefront of technology to provide innovative solutions.'
  }
];

const About = () => {
  const stats = [
    { number: '10+', label: 'Années d\'expérience' },
    { number: '100+', label: 'Projets réalisés' },
    { number: '50+', label: 'Clients satisfaits' },
    { number: '15+', label: 'Experts dédiés' }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-secondary-50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-6">
              À Propos de <span className="text-primary-600">Technoit</span>
            </h2>
            <p className="text-xl text-secondary-700 mb-8">
              Nous sommes une équipe passionnée d'experts en technologie, dédiée à
              transformer vos idées en solutions digitales innovantes.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-secondary-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-600 text-white py-3 px-8 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-300"
              >
                En Savoir Plus
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-2xl transform rotate-6"></div>
              <div className="relative bg-white rounded-2xl shadow-xl p-6">
                <div className="aspect-video bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg flex items-center justify-center">
                  <svg className="w-24 h-24 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-primary-900 mb-4">
                    Notre Mission
                  </h3>
                  <p className="text-secondary-600">
                    Accompagner les entreprises dans leur transformation digitale
                    avec des solutions innovantes et sur mesure.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 