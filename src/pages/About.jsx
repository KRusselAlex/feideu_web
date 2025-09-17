/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import albertImage from '../assets/albert.jpg';

const teamMembers = [
  {
    name: "Mr WOMGA ALBERT",
    role: "CEO",
    bio: "Fondateur et dirigeant de FEIDEU SERVICES, expert en solutions technologiques pour l'éducation.",
    image: albertImage
  }
];

const valeurs = [
  {
    title: "Excellence",
    description: "Nous nous engageons à fournir des services de la plus haute qualité.",
    icon: "⭐"
  },
  {
    title: "Innovation",
    description: "Nous développons constamment de nouvelles solutions pour répondre aux besoins de nos clients.",
    icon: "💡"
  },
  {
    title: "Fiabilité",
    description: "Nos services sont stables, sécurisés et disponibles en permanence.",
    icon: "🔒"
  },
  {
    title: "Service Client",
    description: "Nous mettons nos clients au centre de toutes nos décisions.",
    icon: "🤝"
  }
];

const statistiques = [
  {
    title: "Clients Satisfaits",
    value: "200+",
    description: "Établissements éducatifs"
  },
  {
    title: "Années d'Expérience",
    value: "10+",
    description: "Dans le domaine"
  },
  {
    title: "Taux de Satisfaction",
    value: "98%",
    description: "Clients satisfaits"
  },
  {
    title: "Interventions",
    value: "1000+",
    description: "Réalisées avec succès"
  }
];

const About = () => {
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
              À Propos de Nous
            </h1>
            <p className="text-xl text-secondary-700">
              Votre partenaire de confiance pour des solutions technologiques innovantes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Mission et Vision */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-primary-900 mb-4">
                Notre Mission
              </h2>
              <p className="text-secondary-700">
                Fournir des solutions technologiques innovantes et fiables pour améliorer l'efficacité des établissements éducatifs et des entreprises.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-primary-900 mb-4">
                Notre Vision
              </h2>
              <p className="text-secondary-700">
                Devenir le leader des solutions technologiques en Afrique, en offrant des services de qualité supérieure et en contribuant au développement numérique du continent.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Notre Équipe */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary-900 mb-4">
              Notre Équipe
            </h2>
            <p className="text-xl text-secondary-700">
              Des professionnels dévoués à votre succès
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="p-8 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-primary-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-secondary-700">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Valeurs */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary-900 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-secondary-700">
              Les principes qui guident notre action
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valeurs.map((valeur, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center"
              >
                <div className="text-4xl mb-4">{valeur.icon}</div>
                <h3 className="text-xl font-bold text-primary-900 mb-2">
                  {valeur.title}
                </h3>
                <p className="text-secondary-700">
                  {valeur.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Statistiques */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistiques.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center"
              >
                <p className="text-4xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </p>
                <h3 className="text-xl font-bold text-primary-900 mb-2">
                  {stat.title}
                </h3>
                <p className="text-secondary-700">
                  {stat.description}
                </p>
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

export default About; 