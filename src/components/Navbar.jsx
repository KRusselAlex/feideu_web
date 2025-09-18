import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "À Propos", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Offres", path: "/offers" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 w-full z-50"
    >
      {/* Top Bar - Contact Info */}
      <div className="bg-gradient-to-r from-primary-900 to-primary-800 text-white py-2">
       <div className="max-w-7xl mx-auto px-3 md:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="hidden lg:flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span>+237 XX XX XX XX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} />
                <span>contact@feideu.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={14} />
                <span>yaounde, Cameroun</span>
              </div>
            </div>
            <div className="hidden lg:block text-primary-200">
              🚀 Solutions Technologiques pour l'Éducation
            </div>
            <div className="lg:hidden text-center w-full text-primary-200">
              🚀 FEIDEU SERVICES - Solutions Technologiques
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
            : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <Link to="/" className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">F</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-accent-400 to-accent-500 rounded-full"></div>
                </div>
                <div className="hidden sm:block">
                  <div className="text-xl font-bold text-gray-900">FEIDEU</div>
                  <div className="text-xs text-gray-600 font-medium">SERVICES</div>
                </div>
              </Link>
            </motion.div>

            {/* Navigation Desktop */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`relative text-lg font-medium transition-all duration-300 px-4 py-2 rounded-lg group ${
                      location.pathname === link.path
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                    }`}
                  >
                    {link.name}
                    {location.pathname === link.path && (
                      <motion.div
                        layoutId="activeNavLink"
                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
                >
                  <Phone size={16} />
                  <span>Contact</span>
                </Link>
              </motion.div>
            </div>

            {/* Menu Mobile Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="lg:hidden p-2 rounded-xl text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300"
              onClick={toggleMenu}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                onClick={toggleMenu}
              />
              
              {/* Mobile Menu */}
              <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden"
              >
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">F</span>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-gray-900">FEIDEU</div>
                        <div className="text-xs text-gray-600">SERVICES</div>
                      </div>
                    </div>
                    <button
                      onClick={toggleMenu}
                      className="p-2 text-gray-600 hover:text-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  {/* Mobile Navigation */}
                  <div className="flex-1 px-6 py-8">
                    <div className="space-y-2">
                      {navLinks.map((link, index) => (
                        <motion.div
                          key={link.path}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link
                            to={link.path}
                            className={`w-full text-left flex items-center px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300 ${
                              location.pathname === link.path
                                ? 'text-primary-600 bg-primary-50 border-l-4 border-primary-600'
                                : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                            }`}
                            onClick={toggleMenu}
                          >
                            {link.name}
                          </Link>
                        </motion.div>
                      ))}
                    </div>

                    {/* Mobile Contact Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="mt-8"
                    >
                      <Link
                        to="/contact"
                        className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-4 rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2"
                        onClick={toggleMenu}
                      >
                        <Phone size={18} />
                        <span>Contactez-nous</span>
                      </Link>
                    </motion.div>
                  </div>

                  {/* Mobile Footer Info */}
                  <div className="p-6 border-t border-gray-100 bg-gray-50">
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center space-x-3 text-gray-600">
                        <Phone size={16} />
                        <span>+229 XX XX XX XX</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-600">
                        <Mail size={16} />
                        <span>contact@feideu.com</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-600">
                        <MapPin size={16} />
                        <span>Cotonou, Bénin</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    
  );
};

export default Navbar;