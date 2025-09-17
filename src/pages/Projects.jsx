import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const projects = [
  {
    title: "Plateforme E-commerce",
    description: "Une solution e-commerce complète avec gestion des stocks, paiements sécurisés et analyse des données.",
    category: "Développement Web",
    image: "🛒",
    stats: {
      clients: "500+",
      revenus: "+200%",
      satisfaction: "95%"
    },
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    gallery: ["📱", "💳", "📊", "📦"],
    testimonial: {
      name: "Marie Dubois",
      role: "Directrice Marketing",
      content: "La plateforme a transformé notre façon de faire du commerce en ligne. Les résultats sont exceptionnels !"
    }
  },
  {
    title: "Application Mobile de Fitness",
    description: "Une application mobile pour suivre ses entraînements, nutrition et progrès avec des coachs personnels.",
    category: "Développement Mobile",
    image: "🏋️",
    stats: {
      utilisateurs: "10K+",
      téléchargements: "50K+",
      satisfaction: "98%"
    },
    technologies: ["React Native", "Firebase", "Redux"],
    gallery: ["🏃", "🥗", "📈", "👥"],
    testimonial: {
      name: "Thomas Martin",
      role: "CEO FitLife",
      content: "L'application a révolutionné l'expérience fitness de nos utilisateurs. Un succès retentissant !"
    }
  },
  {
    title: "Système de Gestion Cloud",
    description: "Une plateforme cloud pour la gestion des ressources et l'automatisation des processus métier.",
    category: "Cloud Computing",
    image: "☁️",
    stats: {
      entreprises: "100+",
      économies: "40%",
      satisfaction: "97%"
    },
    technologies: ["AWS", "Docker", "Kubernetes"],
    gallery: ["⚡", "🔧", "📈", "🔐"],
    testimonial: {
      name: "Sophie Lambert",
      role: "CTO TechCorp",
      content: "La migration vers le cloud a été un véritable succès. Nos processus sont maintenant plus efficaces que jamais."
    }
  },
  {
    title: "Solution de Sécurité",
    description: "Un système complet de protection des données et de prévention des cyberattaques.",
    category: "Cybersécurité",
    image: "🔒",
    stats: {
      clients: "200+",
      incidents: "0",
      satisfaction: "100%"
    },
    technologies: ["SIEM", "IDS/IPS", "Firewall"],
    gallery: ["🛡️", "🔍", "📊", "✅"],
    testimonial: {
      name: "Pierre Durand",
      role: "Directeur Sécurité",
      content: "Notre infrastructure est maintenant impénétrable. Un niveau de sécurité exceptionnel !"
    }
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeGallery, setActiveGallery] = useState(0);

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
              Nos Projets
            </h1>
            <p className="text-xl text-secondary-700">
              Découvrez nos réalisations et l'impact de nos solutions sur nos clients
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Projets */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 gap-16">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Partie gauche - Galerie */}
                  <div className="relative h-96 bg-primary-50 p-8">
                    <div className="absolute inset-0 flex items-center justify-center text-8xl">
                      {project.gallery[activeGallery]}
                    </div>
                    <div className="absolute bottom-8 left-8 right-8 flex justify-center space-x-2">
                      {project.gallery.map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveGallery(idx)}
                          className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                            activeGallery === idx ? 'bg-primary-600' : 'bg-primary-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Partie droite - Contenu */}
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center text-3xl mr-4">
                        {project.image}
                      </div>
                      <div>
                        <div className="inline-block bg-primary-100 text-primary-600 text-sm font-medium px-3 py-1 rounded-full mb-2">
                          {project.category}
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-900">
                          {project.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-secondary-700 mb-6">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="bg-primary-50 rounded-xl p-4 text-center">
                          <div className="text-2xl font-bold text-primary-600">
                            {value}
                          </div>
                          <div className="text-sm text-secondary-600 capitalize">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                        Technologies utilisées
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Témoignage */}
                    <div className="bg-primary-50 rounded-xl p-6 mb-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-xl mr-4">
                          👤
                        </div>
                        <div>
                          <h4 className="font-semibold text-secondary-900">
                            {project.testimonial.name}
                          </h4>
                          <p className="text-sm text-primary-600">
                            {project.testimonial.role}
                          </p>
                        </div>
                      </div>
                      <p className="text-secondary-700 italic">
                        "{project.testimonial.content}"
                      </p>
                    </div>

                    <Link to={`/contact?project=${project.title}`}>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-300"
                      >
                        En savoir plus
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-primary-900 mb-6">
              Prêt à Lancer Votre Projet ?
            </h2>
            <p className="text-xl text-secondary-700 mb-8 max-w-2xl mx-auto">
              Découvrez comment nous pouvons transformer vos idées en solutions innovantes.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-600 text-white py-3 px-8 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-300"
              >
                Contactez-Nous
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects; 