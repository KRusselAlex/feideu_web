import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-primary-100 to-secondary-50 py-24 overflow-hidden">
      {/* Formes décoratives */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl font-bold text-primary-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Transformez Vos Idées en <span className="text-primary-600">Réalité Digitale</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-secondary-700 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Nous créons des solutions web et mobiles innovantes pour propulser
              votre entreprise vers l'avenir. Expertise, innovation et excellence
              au service de votre succès.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-600 text-white py-3 px-8 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-300"
              >
                Découvrir Nos Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 py-3 px-8 rounded-lg font-medium hover:bg-secondary-50 transition-colors duration-300 border border-primary-600"
              >
                Nous Contacter
              </motion.button>
            </motion.div>

            <motion.div 
              className="mt-12 flex items-center gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full bg-white border-2 border-primary-100 flex items-center justify-center">
                    <span className="text-primary-600 font-bold">+{i}</span>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-secondary-700">Plus de 100 projets réalisés</p>
                <p className="text-sm text-secondary-500">Clients satisfaits</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-2xl transform rotate-6"></div>
              <div className="relative bg-white rounded-2xl shadow-xl p-6">
                <div className="aspect-video bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg flex items-center justify-center">
                  <svg className="w-24 h-24 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-primary-900">Solutions Digitales</h3>
                  <p className="text-secondary-600 mt-2">Des solutions sur mesure pour votre entreprise</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 