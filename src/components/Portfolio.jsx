import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projets = [
  {
    id: 1,
    titre: 'Plateforme E-commerce',
    categorie: 'Développement Web',
    image: '/project-1.jpg',
    client: 'RetailTech Inc.',
    description: 'Solution e-commerce personnalisée avec des fonctionnalités avancées pour une entreprise de vente au détail.',
    stats: {
      revenus: '+45%',
      conversion: '32%'
    }
  },
  {
    id: 2,
    titre: 'Application Bancaire Mobile',
    categorie: 'Développement Mobile',
    image: '/project-2.jpg',
    client: 'FinanceHub',
    description: 'Application bancaire mobile sécurisée avec des fonctionnalités de transaction avancées.',
    stats: {
      utilisateurs: '50K+',
      note: '4.8/5'
    }
  },
  {
    id: 3,
    titre: 'Migration Cloud',
    categorie: 'Solutions Cloud',
    image: '/project-3.jpg',
    client: 'GlobalCorp',
    description: 'Stratégie et mise en œuvre complètes de migration cloud pour une entreprise.',
    stats: {
      cout: '-40%',
      performance: '+60%'
    }
  },
  {
    id: 4,
    titre: 'Sécurité Entreprise',
    categorie: 'Cybersécurité',
    image: '/project-4.jpg',
    client: 'SecureTech',
    description: 'Audit et mise en œuvre complets de la sécurité pour une grande entreprise.',
    stats: {
      menaces: '-90%',
      disponibilite: '99.99%'
    }
  },
  {
    id: 5,
    titre: 'Système CRM',
    categorie: 'Développement Web',
    image: '/project-5.jpg',
    client: 'SalesPro',
    description: 'Solution CRM personnalisée avec fonctionnalités d\'analyse et d\'automatisation.',
    stats: {
      ventes: '+35%',
      efficacite: '50%'
    }
  },
  {
    id: 6,
    titre: 'Plateforme d\'Analyse de Données',
    categorie: 'Business Intelligence',
    image: '/project-6.jpg',
    client: 'DataInsights',
    description: 'Plateforme d\'analyse de données avancée avec outils de visualisation et de reporting.',
    stats: {
      insights: '85%',
      precision: '98%'
    }
  }
];

const categories = [
  'Tous',
  'Développement Web',
  'Développement Mobile',
  'Solutions Cloud',
  'Cybersécurité',
  'Business Intelligence'
];

const Portfolio = () => {
  const [categorieActive, setCategorieActive] = useState('Tous');
  
  const projetsFiltres = categorieActive === 'Tous'
    ? projets
    : projets.filter(projet => projet.categorie === categorieActive);

  return (
    <section className="py-24 bg-gradient-to-b from-secondary-50 to-white">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold text-primary-900 mb-4">
            Notre Portfolio
          </h2>
          <p className="text-xl text-secondary-700">
            Découvrez nos projets récents et laissez-vous inspirer par notre expertise
          </p>
        </motion.div>

        {/* Filtres de Catégories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((categorie, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                categorieActive === categorie
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-secondary-700 hover:bg-secondary-50'
              }`}
              onClick={() => setCategorieActive(categorie)}
            >
              {categorie}
            </motion.button>
          ))}
        </motion.div>

        {/* Grille de Projets */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projetsFiltres.map((projet) => (
            <motion.div
              key={projet.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={projet.image}
                  alt={projet.titre}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary-600 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link
                    to={`/projets/${projet.id}`}
                    className="bg-white text-primary-600 hover:bg-secondary-50 px-5 py-3 rounded-lg font-medium transition-colors"
                  >
                    Voir les détails
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-primary-600 font-medium mb-2">
                  {projet.categorie}
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {projet.titre}
                </h3>
                <p className="text-secondary-600 mb-4">
                  {projet.description}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {Object.entries(projet.stats).map(([key, value]) => (
                    <div key={key} className="bg-secondary-50 rounded-xl p-3">
                      <div className="text-lg font-bold text-primary-600">{value}</div>
                      <div className="text-sm text-secondary-600 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
                <div className="text-sm text-secondary-500">
                  Client : {projet.client}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/projets"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-300"
          >
            Voir Tous Les Projets
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio; 