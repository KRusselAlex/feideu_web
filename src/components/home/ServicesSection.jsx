// import React from 'react';
// import { motion } from 'framer-motion';
// import services from "../../data/services";

// const ServicesSection = () => (
//     <section id="services" className="py-24 bg-white/50 backdrop-blur">
//           <div className="max-w-7xl mx-auto px-3 md:px-6 lg:px-8">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="text-center mb-20"
//             >
//               <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
//                 ⚡ Nos Expertises
//               </div>
//               <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
//                 Services <span className="text-blue-600">Professionnels</span>
//               </h2>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 Des solutions complètes et personnalisées pour répondre à tous vos besoins technologiques
//               </p>
//             </motion.div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {services.map((service, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   whileHover={{ y: -10, scale: 1.02 }}
//                   className="group relative"
//                 >
//                   <div className="h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
//                     <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
//                       {service.icon}
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
//                       {service.title}
//                     </h3>
//                     <p className="text-gray-600 leading-relaxed">
//                       {service.description}
//                     </p>
//                     <div className="mt-6">
//                       <span className="text-blue-600 font-medium text-sm group-hover:underline">
//                         En savoir plus →
//                       </span>
//                     </div>
//                   </div>
//                   <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>
// );

// export default ServicesSection;
import React, { useState } from "react";
import {
  X,
  Check,
  ArrowRight,
  Star,
  Clock,
  Users,
  Award,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  Play,
  Shield,
  Zap,
  Target,
} from "lucide-react";

// Mock services data with detailed information
import services from "../../data/services";

const ServiceModal = ({ service, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedPricing, setSelectedPricing] = useState("professional");

  if (!isOpen || !service) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % service.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + service.gallery.length) % service.gallery.length
    );
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl relative animate-fade-in-up">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-12 h-12 bg-secondary-100 hover:bg-secondary-200 rounded-full flex items-center justify-center transition-colors duration-200 z-10"
          >
            <X className="w-6 h-6 text-secondary-600" />
          </button>

          {/* Header Section */}
          <div className="relative overflow-hidden rounded-t-3xl">
            <div
              className={`bg-gradient-to-r ${service.gradient} p-12 text-white`}
            >
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-4xl">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                    {service.title}
                  </h1>
                  <p className="text-xl text-white/90 mb-6 max-w-2xl">
                    {service.detailedDescription}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {service.deliveryTime}
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      {service.clientsCount} clients
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      {service.supportIncluded} de support
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12">
            {/* Gallery Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-heading font-bold text-secondary-900 mb-6 flex items-center gap-3">
                <Play className="w-6 h-6 text-primary-600" />
                Nos Réalisations
              </h3>
              <div className="relative rounded-2xl overflow-hidden shadow-large">
                <img
                  src={service.gallery[currentImageIndex]}
                  alt="Réalisation"
                  className="w-full h-96 object-cover"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-medium transition-all duration-200"
                >
                  <ChevronLeft className="w-6 h-6 text-secondary-700" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-medium transition-all duration-200"
                >
                  <ChevronRight className="w-6 h-6 text-secondary-700" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {service.gallery.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                        index === currentImageIndex ? "bg-white" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Features & Technologies */}
              <div className="lg:col-span-2 space-y-8">
                {/* Features */}
                <div>
                  <h3 className="text-2xl font-heading font-bold text-secondary-900 mb-6 flex items-center gap-3">
                    <Zap className="w-6 h-6 text-primary-600" />
                    Ce qui est inclus
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-4 bg-primary-50 rounded-xl"
                      >
                        <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-secondary-700 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-2xl font-heading font-bold text-secondary-900 mb-6 flex items-center gap-3">
                    <Target className="w-6 h-6 text-primary-600" />
                    Technologies utilisées
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {service.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-secondary-100 to-secondary-50 text-secondary-700 rounded-full font-medium border border-secondary-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl border border-primary-100">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {service.testimonial.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        {[...Array(service.testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-accent-400 text-accent-400"
                          />
                        ))}
                      </div>
                      <p className="text-secondary-700 italic mb-4 text-lg">
                        "{service.testimonial.text}"
                      </p>
                      <div>
                        <div className="font-bold text-secondary-900">
                          {service.testimonial.name}
                        </div>
                        <div className="text-primary-600">
                          {service.testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="space-y-6">
                {/* Pricing */}
                <div className="bg-secondary-50 p-8 rounded-2xl border border-secondary-100">
                  <h3 className="text-2xl font-heading font-bold text-secondary-900 mb-6 text-center">
                    Nos Forfaits
                  </h3>
                  <div className="space-y-4">
                    {Object.entries(service.pricing).map(([key, plan]) => (
                      <div
                        key={key}
                        onClick={() => setSelectedPricing(key)}
                        className={`p-4 rounded-xl cursor-pointer transition-all duration-200 border-2 ${
                          selectedPricing === key
                            ? "border-primary-500 bg-primary-50"
                            : "border-secondary-200 bg-white hover:border-primary-300"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-bold text-secondary-900">
                            {plan.name}
                          </h4>
                          <div className="text-2xl font-bold text-primary-600">
                            {plan.price}
                          </div>
                        </div>
                        <div className="space-y-2">
                          {plan.features.map((feature, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2 text-sm text-secondary-600"
                            >
                              <Check className="w-4 h-4 text-primary-600 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-br from-primary-600 to-primary-700 p-8 rounded-2xl text-white text-center">
                  <h4 className="text-xl font-bold mb-4">Prêt à commencer ?</h4>
                  <p className="text-primary-100 mb-6 text-sm">
                    Discutons de votre projet et recevez un devis personnalisé
                  </p>
                  <button className="w-full bg-accent-400 hover:bg-accent-300 text-black font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 mb-4">
                    Obtenir un Devis Gratuit
                  </button>
                  <div className="space-y-2 text-sm text-primary-200">
                    <div className="flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      +33 1 23 45 67 89
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Mail className="w-4 h-4" />
                      contact@votreentreprise.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };

  return (
    <>
      <section
        id="services"
        className="py-32 bg-gradient-to-br from-secondary-50 via-white to-primary-50 relative overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary-500 rounded-full blur-3xl animate-pulse-soft"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent-400 rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Nos Expertises
            </div>
            <h2 className="text-5xl md:text-7xl font-heading font-bold bg-gradient-to-r from-primary-900 via-primary-700 to-secondary-800 bg-clip-text text-transparent mb-6">
              Services
              <span className="block text-accent-600">Professionnels</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Des solutions complètes et personnalisées pour répondre à tous vos
              besoins technologiques
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                onClick={() => handleServiceClick(service)}
                className="group relative h-full bg-white rounded-3xl p-8 shadow-soft hover:shadow-large transition-all duration-500 border border-secondary-100 cursor-pointer hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                {/* Icon */}
                <div
                  className={`relative w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-colored-blue`}
                >
                  {service.icon}
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-heading font-bold text-secondary-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-secondary-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-secondary-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {service.clientsCount}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {service.deliveryTime}
                    </span>
                  </div>
                  {/* <div className="flex items-center justify-between">
                    <span className="text-primary-600 font-bold text-lg"></span>
                    <ArrowRight className="w-5 h-5 text-primary-600 group-hover:translate-x-1 transition-transform duration-300" />
                  </div> */}
                </div>

                {/* Hover indicator */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center transform scale-75 group-hover:scale-100">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default ServicesSection;
