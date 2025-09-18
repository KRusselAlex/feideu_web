  import React from "react";
  import stats from "../../data/stats";
  import { motion } from 'framer-motion';

  const AboutSection = () => (
   <section id="apropos" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop"
                alt="Équipe FEIDEU SERVICES"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">A</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Mr WOMGA ALBERT</div>
                    <div className="text-sm text-gray-600">Fondateur & CEO</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                  👨‍💼 À Propos de Nous
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Une expertise <span className="text-blue-600">reconnue</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Fondée par Mr WOMGA ALBERT, FEIDEU SERVICES est une entreprise spécialisée 
                  dans les solutions technologiques pour l'éducation. Notre mission est de 
                  moderniser les établissements éducatifs avec des technologies innovantes.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Nous nous engageons à fournir des services de qualité supérieure, 
                  un support technique réactif et des solutions personnalisées qui 
                  répondent aux défis spécifiques de chaque établissement.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {stats.slice(2, 4).map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 text-center"
                  >
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Découvrir notre histoire
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
  );
  
  export default AboutSection;
  

  