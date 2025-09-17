import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Thomas Laurent',
    role: 'CEO, TechStart',
    image: '👨‍💼',
    content: 'Technoit a transformé notre présence en ligne. Leur expertise et leur professionnalisme ont dépassé nos attentes.'
  },
  {
    name: 'Sarah Dubois',
    role: 'Directrice Marketing, InnovCorp',
    image: '👩‍💼',
    content: 'Une équipe exceptionnelle qui a su comprendre nos besoins et les traduire en solutions concrètes. Je recommande vivement !'
  },
  {
    name: 'Marc Bernard',
    role: 'CTO, Digital Solutions',
    image: '👨‍💻',
    content: 'Leur approche méthodique et leur expertise technique ont été déterminantes pour le succès de notre projet.'
  }
];

const Testimonials = () => {
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
            Ce Que Disent Nos Clients
          </h2>
          <p className="text-xl text-secondary-700 max-w-2xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 h-full transform transition-all duration-300 group-hover:shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-full flex items-center justify-center text-4xl mr-4">
                    {testimonial.image}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-primary-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-secondary-600 italic">
                  "{testimonial.content}"
                </p>
                <div className="mt-6 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
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
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-600 text-white py-3 px-8 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-300"
          >
            Voir Plus de Témoignages
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 