import React from 'react';
import { motion } from 'framer-motion';
import stats from '../../data/stats';

const HeroSection = () => (
  <section id="accueil" className="pt-32 md:pt-48 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
          <div className="max-w-7xl mx-auto px-3 md:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center " >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="text-center md:text-start space-y-6 ">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full  text-sm font-medium"
                  >
                    🚀 Solutions Technologiques Innovantes
                  </motion.div>
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
                    Transformez votre{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      établissement
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
                    FEIDEU SERVICES vous accompagne dans la modernisation de votre établissement 
                    avec des solutions technologiques sur mesure, fiables et performantes.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    Démarrer un projet
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white/80 backdrop-blur text-gray-800 px-8 py-4 rounded-2xl font-semibold text-lg border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-lg"
                  >
                    Découvrir nos services
                  </motion.button>
                </div>
  
                <div className="grid grid-cols-2 gap-6 pt-8">
                  {stats.slice(0, 2).map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-2xl mb-1">{stat.icon}</div>
                      <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
  
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative"
              >
                <div className="relative z-10">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
                    alt="Solutions technologiques pour l'éducation"
                    className="w-full h-auto rounded-3xl shadow-2xl"
                  />
                  <div className="absolute -top-6  -right-1 md:-right-4 lg:-right-6 w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-xl">
                    <span className="text-3xl">💻</span>
                  </div>
                  <div className="absolute -bottom-6 -left-1 md:-left-4 lg:-left-6 w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-xl">
                    <span className="text-3xl">🎓</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-3xl blur-3xl -z-10"></div>
              </motion.div>
            </div>
          </div>
        </section>
);

export default HeroSection;
