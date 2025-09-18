import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaLinkedin, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-xl" />,
      url: "#"
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="text-xl" />,
      url: "#"
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="text-xl" />,
      url: "#"
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-xl" />,
      url: "#"
    }
  ];

  const footerLinks = [
    {
      title: "Entreprise",
      links: [
        { name: "À Propos", url: "/about" },
        { name: "Services", url: "/services" },
        { name: "Projets", url: "/projects" },
        { name: "Contact", url: "/contact" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Développement Web", url: "/services#web" },
        { name: "Applications Mobiles", url: "/services#mobile" },
        { name: "UI/UX Design", url: "/services#design" },
        { name: "Consulting", url: "/services#consulting" }
      ]
    },
    {
      title: "Ressources",
      links: [
        { name: "Blog", url: "/blog" },
        { name: "Documentation", url: "/docs" },
        { name: "Support", url: "/support" },
        { name: "FAQ", url: "/faq" }
      ]
    }
  ];

  return (
    <>
     <footer className="bg-white text-secondary-900">
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et Description */}
          <div className="col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/LOGO2.jpg"
                alt="FEIDEU SERVICES"
                className="h-16 w-auto mb-4"
              />
              <p className="text-secondary-600">
                Solutions technologiques innovantes pour les établissements éducatifs.
              </p>
            </motion.div>
          </div>

          {/* Liens Rapides */}
          <div className="col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-secondary-900">Liens Rapides</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-secondary-600 hover:text-primary-600 transition-colors">
                    Accueil
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-secondary-600 hover:text-primary-600 transition-colors">
                    À Propos
                  </a>
                </li>
                <li>
                  <a href="/services" className="text-secondary-600 hover:text-primary-600 transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/offers" className="text-secondary-600 hover:text-primary-600 transition-colors">
                    Offres
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-secondary-600 hover:text-primary-600 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-secondary-900">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/services" className="text-secondary-600 hover:text-primary-600 transition-colors">
                    Maintenance Informatique
                  </a>
                </li>
                <li>
                  <a href="/services" className="text-secondary-600 hover:text-primary-600 transition-colors">
                    Logiciels de Gestion d'École
                  </a>
                </li>
                <li>
                  <a href="/services" className="text-secondary-600 hover:text-primary-600 transition-colors">
                    Réseaux Informatiques
                  </a>
                </li>
                <li>
                  <a href="/services" className="text-secondary-600 hover:text-primary-600 transition-colors">
                    Laboratoires de Sciences
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-secondary-900">Contact</h3>
              <ul className="space-y-2">
                <li className="text-secondary-600">
                  Yaoundé, Cameroun
                </li>
                <li className="text-secondary-600">
                  +237 6 99 99 99 99
                </li>
                <li className="text-secondary-600">
                  contact@feideuservices.com
                </li>
                <li className="text-secondary-600">
                  Lun - Ven: 8h - 18h
                </li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-secondary-600 hover:text-primary-600 transition-colors">
                  <FaLinkedin size={24} />
                </a>
                <a href="#" className="text-secondary-600 hover:text-primary-600 transition-colors">
                  <FaTwitter size={24} />
                </a>
                <a href="#" className="text-secondary-600 hover:text-primary-600 transition-colors">
                  <FaInstagram size={24} />
                </a>
                <a href="#" className="text-secondary-600 hover:text-primary-600 transition-colors">
                  <FaGithub size={24} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-secondary-200 mt-12 pt-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center text-secondary-600"
          >
            <p>&copy; {currentYear} FEIDEU SERVICES. Tous droits réservés.</p>
          </motion.div>
        </div>
        
      </div>

    </footer>
     {/* Footer */}
      <foot className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-bold">FEIDEU SERVICES</span>
            </div>
            <div className="text-gray-400">
              © 2024 FEIDEU SERVICES. Tous droits réservés.
            </div>
          </div>
        </div>
      </foot>
    </>
   
  );
};

export default Footer; 