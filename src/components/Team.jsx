import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const teamMembers = [
  {
    name: 'Jean Dupont',
    role: 'CEO & Fondateur',
    image: '👨‍💼',
    description: 'Expert en stratégie digitale avec 15 ans d\'expérience'
  },
  {
    name: 'Marie Martin',
    role: 'Directrice Technique',
    image: '👩‍💻',
    description: 'Spécialiste en architecture logicielle'
  },
  {
    name: 'Pierre Bernard',
    role: 'Lead Développeur',
    image: '👨‍💻',
    description: 'Expert en développement full-stack'
  },
  {
    name: 'Sophie Leroy',
    role: 'UX/UI Designer',
    image: '👩‍🎨',
    description: 'Créatrice d\'expériences utilisateur exceptionnelles'
  }
];

const Team = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-secondary-50">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary-900 mb-4">
            Notre Équipe
          </h2>
          <p className="text-xl text-secondary-700 max-w-2xl mx-auto">
            Rencontrez les experts passionnés qui font la force de Technoit
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full transform transition-all duration-300 group-hover:shadow-xl">
                <div className="aspect-square bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center text-8xl p-8">
                  {member.image}
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-primary-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <div className="text-primary-600 font-medium mb-4">
                    {member.role}
                  </div>
                  <p className="text-secondary-600 mb-6">
                    {member.description}
                  </p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-secondary-400 hover:text-primary-600 transition-colors duration-300">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="text-secondary-400 hover:text-primary-600 transition-colors duration-300">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
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
          <Link to="/about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 text-white py-3 px-8 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-300"
            >
              En Savoir Plus sur Notre Équipe
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Team; 