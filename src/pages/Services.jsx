import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    name: "Maintenance Informatique",
    description: "Assistance technique complète pour vos équipements informatiques.",
    features: [
      "Assistance technique",
      "Gestion préventive",
      "Réparation"
    ],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    stats: {
      clients: "100+",
      satisfaction: "98%",
      temps: "< 24h"
    },
    details: {
      title: "Maintenance Proactive",
      description: "Notre service de maintenance informatique assure le bon fonctionnement de vos équipements grâce à une approche proactive. Nous intervenons rapidement pour résoudre les problèmes et mettons en place des solutions préventives pour éviter les pannes futures.",
      benefits: [
        "Diagnostic rapide et précis",
        "Intervention sur site ou à distance",
        "Maintenance préventive régulière",
        "Support technique 24/7"
      ]
    }
  },
  {
    name: "Logiciels de Gestion d'École",
    description: "Solutions logicielles complètes pour la gestion de votre établissement.",
    features: [
      "Gestion des élèves",
      "Gestion administrative",
      "Communication"
    ],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    stats: {
      clients: "50+",
      satisfaction: "95%",
      temps: "< 48h"
    },
    details: {
      title: "Gestion Scolaire Intelligente",
      description: "Nos logiciels de gestion d'école simplifient l'administration de votre établissement. Une solution tout-en-un pour gérer efficacement les inscriptions, les notes, les emplois du temps et la communication avec les parents.",
      benefits: [
        "Interface intuitive et facile à utiliser",
        "Rapports personnalisables",
        "Synchronisation en temps réel",
        "Sécurité des données garantie"
      ]
    }
  },
  {
    name: "Réseaux Informatiques",
    description: "Solutions réseau complètes pour votre entreprise ou établissement.",
    features: [
      "Installation",
      "Configuration",
      "Sécurité",
      "Maintenance"
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    stats: {
      clients: "75+",
      satisfaction: "97%",
      temps: "< 24h"
    },
    details: {
      title: "Réseaux Sécurisés et Performants",
      description: "Nous concevons et déployons des infrastructures réseau robustes et sécurisées. Nos solutions garantissent une connectivité optimale et une protection maximale contre les cybermenaces.",
      benefits: [
        "Audit réseau complet",
        "Installation de matériel haut de gamme",
        "Configuration de pare-feu et VPN",
        "Surveillance 24/7"
      ]
    }
  },
  {
    name: "Laboratoires de Sciences",
    description: "Installation et maintenance d'équipements scientifiques.",
    features: [
      "Installation d'équipements",
      "Maintenance",
      "Support technique"
    ],
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    stats: {
      clients: "30+",
      satisfaction: "96%",
      temps: "< 48h"
    },
    details: {
      title: "Laboratoires Modernes",
      description: "Nous équipons vos laboratoires avec du matériel scientifique de pointe et assurons leur maintenance régulière. Nos solutions permettent aux étudiants de bénéficier d'un environnement d'apprentissage optimal.",
      benefits: [
        "Équipements de dernière génération",
        "Formation du personnel",
        "Maintenance préventive",
        "Support technique dédié"
      ]
    }
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary-50">
      {/* Section Hero */}
      <section className="py-24 bg-primary-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-primary-900/10"></div>
        <div className="max-w-6xl mx-auto px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              Nos Services
            </h1>
            <p className="text-xl text-secondary-700">
              Des solutions technologiques complètes pour répondre à tous vos besoins
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Services */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image Section */}
                  <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-transparent"></div>
                  </div>

                  {/* Content Section */}
                  <div className="w-full md:w-1/2 p-8">
                    <h3 className="text-2xl font-bold text-primary-900 mb-2">
                      {service.name}
                    </h3>
                    <p className="text-secondary-700 mb-4">
                      {service.description}
                    </p>

                    <div className="mt-6 grid grid-cols-3 gap-4 text-center bg-primary-50 p-4 rounded-xl">
                      <div>
                        <p className="text-2xl font-bold text-primary-600">{service.stats.clients}</p>
                        <p className="text-sm text-secondary-600">Clients</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-primary-600">{service.stats.satisfaction}</p>
                        <p className="text-sm text-secondary-600">Satisfaction</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-primary-600">{service.stats.temps}</p>
                        <p className="text-sm text-secondary-600">Temps d'intervention</p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="text-lg font-semibold text-primary-900 mb-3">
                        Fonctionnalités
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-secondary-700">
                            <span className="text-primary-600 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6">
                      <h4 className="text-lg font-semibold text-primary-900 mb-3">
                        Avantages
                      </h4>
                      <ul className="space-y-2">
                        {service.details.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center text-secondary-700">
                            <span className="text-primary-600 mr-2">✓</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 text-center">
                      <Link
                        to="/contact"
                        className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
                      >
                        Demander un devis
                      </Link>
                    </div>
                  </div>
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
              Prêt à Démarrer ?
            </h2>
            <p className="text-xl text-secondary-700 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour discuter de vos besoins et découvrir comment nous pouvons vous aider.
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

export default Services; 