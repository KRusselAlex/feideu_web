import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Plateforme de vente en ligne complète avec paiement sécurisé et gestion des stocks avancée',
    category: 'Développement Web',
    image: '🛒',
    stats: {
      clients: '500+',
      satisfaction: '98%'
    }
  },
  {
    title: 'Application Mobile',
    description: 'Application de gestion de tâches cross-platform avec synchronisation en temps réel',
    category: 'Mobile',
    image: '📱',
    stats: {
      utilisateurs: '10K+',
      satisfaction: '95%'
    }
  },
  {
    title: 'Système Cloud',
    description: 'Migration et optimisation d\'infrastructure cloud avec réduction des coûts de 40%',
    category: 'Cloud',
    image: '☁️',
    stats: {
      performance: '+60%',
      économies: '40%'
    }
  },
  {
    title: 'Sécurité Réseau',
    description: 'Audit et renforcement de la sécurité réseau avec détection des menaces en temps réel',
    category: 'Cybersécurité',
    image: '🔒',
    stats: {
      incidents: '-90%',
      protection: '99.9%'
    }
  }
];

const Projects = () => {
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
            Nos Projets Récents
          </h2>
          <p className="text-xl text-secondary-700 max-w-2xl mx-auto">
            Découvrez nos réalisations et laissez-vous inspirer par notre expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full transform transition-all duration-300 group-hover:shadow-xl">
                <div className="aspect-video bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center text-6xl">
                  {project.image}
                </div>
                <div className="p-8">
                  <div className="inline-block bg-primary-100 text-primary-600 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-secondary-600 mb-6">
                    {project.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="bg-secondary-50 rounded-xl p-4">
                        <div className="text-2xl font-bold text-primary-600">{value}</div>
                        <div className="text-sm text-secondary-600 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  <Link 
                    to="/projects" 
                    className="inline-flex items-center text-primary-600 font-medium group-hover:translate-x-2 transition-transform duration-300"
                  >
                    Voir le projet
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
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
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 text-white py-3 px-8 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-300"
            >
              Voir Tous Nos Projets
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 