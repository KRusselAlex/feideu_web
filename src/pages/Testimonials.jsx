import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Sophie Martin",
    role: "Directrice Marketing, TechCorp",
    image: "/testimonials/sophie.jpg",
    content: "Leur expertise en développement web a transformé notre présence en ligne. Le site est non seulement magnifique mais aussi très performant."
  },
  {
    name: "Thomas Dubois",
    role: "CEO, StartUpX",
    image: "/testimonials/thomas.jpg",
    content: "La migration vers le cloud a été réalisée sans interruption de service. Une équipe professionnelle et réactive."
  },
  {
    name: "Marie Laurent",
    role: "CTO, InnovTech",
    image: "/testimonials/marie.jpg",
    content: "Leur approche en cybersécurité nous a permis de renforcer significativement notre protection contre les cybermenaces."
  },
  {
    name: "Pierre Bernard",
    role: "Directeur Digital, RetailPlus",
    image: "/testimonials/pierre.jpg",
    content: "L'application mobile développée a dépassé nos attentes. L'expérience utilisateur est exceptionnelle."
  }
];

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-primary-50 to-primary-100 p-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold text-primary-900 text-center mb-12"
        >
          Témoignages
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-700 max-w-2xl mx-auto mb-16"
        >
          Découvrez ce que nos clients disent de notre travail et de notre collaboration.
          Leur satisfaction est notre meilleure récompense.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-800">{testimonial.name}</h3>
                  <p className="text-primary-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8 text-center"
        >
          <h2 className="text-2xl font-semibold text-primary-800 mb-4">Devenez Notre Prochain Client Satisfait</h2>
          <p className="text-gray-700 mb-6">
            Rejoignez nos clients satisfaits et découvrez comment nous pouvons
            transformer votre projet en succès.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-300"
          >
            Discutons de Votre Projet
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Testimonials; 