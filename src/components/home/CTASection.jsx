import React from "react";
import { motion } from 'framer-motion';

const CTASection = () => (
 <section className="py-24 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-2 md:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Prêt à transformer votre établissement ?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Contactez notre équipe d'experts pour discuter de vos besoins et découvrir 
              comment nous pouvons vous accompagner dans votre transformation numérique.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Contactez-nous maintenant
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Voir nos réalisations
              </motion.button>
            </div>

            <div className="flex flex-col md:flex-row justify-center  items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl mb-2">📞</div>
                <div className="text-white font-medium">Appelez-nous</div>
                <div className="text-blue-200 text-sm">+237 XX XX XX XX</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">✉️</div>
                <div className="text-white font-medium">Email</div>
                <div className="text-blue-200 text-sm">contact@feideu.com</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">📍</div>
                <div className="text-white font-medium">Localisation</div>
                <div className="text-blue-200 text-sm">Yaounde, Cameroun</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
);

export default CTASection;
