import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaLinkedin, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "LinkedIn", icon: <FaLinkedin />, url: "#" },
    { name: "Twitter", icon: <FaTwitter />, url: "#" },
    { name: "Instagram", icon: <FaInstagram />, url: "#" },
    { name: "GitHub", icon: <FaGithub />, url: "#" }
  ];

  const footerLinks = [
    { title: "Entreprise", links: [ { name: "À Propos", url: "/about" }, { name: "Services", url: "/services" }, { name: "Projets", url: "/projects" }, { name: "Contact", url: "/contact" } ] },
    { title: "Services", links: [ { name: "Développement Web", url: "/services#web" }, { name: "Applications Mobiles", url: "/services#mobile" }, { name: "UI/UX Design", url: "/services#design" }, { name: "Consulting", url: "/services#consulting" } ] },
    { title: "Ressources", links: [ { name: "Blog", url: "/blog" }, { name: "Documentation", url: "/docs" }, { name: "Support", url: "/support" }, { name: "FAQ", url: "/faq" } ] }
  ];

  return (
    <footer className="bg-gradient-to-r from-primary-900 to-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <img src="/LOGO2.jpg" alt="FEIDEU SERVICES" className="h-16 w-auto" />
            <p className="text-gray-300">
              Solutions technologiques innovantes pour les établissements éducatifs.
            </p>
            <div className="flex space-x-4 mt-2">
              {socialLinks.map((link, idx) => (
                <a key={idx} href={link.url} className="text-gray-300 hover:text-primary-500 transition-colors text-xl">
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          {footerLinks.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
            >
              <h3 className="text-lg text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link to={link.url} className="hover:text-primary-500 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="font-semibold text-white">FEIDEU SERVICES</span>
          </div>
          <span>© {currentYear} FEIDEU SERVICES. Tous droits réservés.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
