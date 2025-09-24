import React, { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const QuoteRequestSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    alert("Devis envoyé avec succès !");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="devis"
      className="py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-400 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-400 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Mail className="w-4 h-4" />
              Devis Gratuit
            </div>

            <h2 className="text-5xl md:text-6xl font-heading font-bold mb-8 leading-tight">
              Transformons Votre
              <span className="block bg-gradient-to-r from-accent-400 to-accent-300 bg-clip-text text-transparent">
                Vision en Réalité
              </span>
            </h2>

            <p className="text-xl text-primary-100 mb-10 leading-relaxed">
              Obtenez un devis personnalisé en moins de 24h. Notre équipe
              d'experts analyse vos besoins pour vous proposer la solution
              parfaite.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-10">
              {[
                "Consultation gratuite de 30 minutes",
                "Devis détaillé sous 24h",
                "Accompagnement personnalisé",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                  <span className="text-primary-100">{feature}</span>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-4 text-primary-200">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent-400" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent-400" />
                <span>contact@votreentreprise.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent-400" />
                <span>Paris, France</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white/10 backdrop-blur-xl p-10 rounded-4xl border border-white/20 shadow-large"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    required
                    className="w-full bg-white/10 border border-white/20 text-white placeholder-white/60 p-4 rounded-2xl backdrop-blur-sm focus:bg-white/20 focus:border-accent-400 focus:outline-none transition-all duration-300"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Votre email"
                    required
                    className="w-full bg-white/10 border border-white/20 text-white placeholder-white/60 p-4 rounded-2xl backdrop-blur-sm focus:bg-white/20 focus:border-accent-400 focus:outline-none transition-all duration-300"
                  />
                </div>
              </div>

              <div className="mb-6">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Objet de votre projet"
                  required
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-white/60 p-4 rounded-2xl backdrop-blur-sm focus:bg-white/20 focus:border-accent-400 focus:outline-none transition-all duration-300"
                />
              </div>

              <div className="mb-8">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décrivez-nous votre projet en détail..."
                  rows="5"
                  required
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-white/60 p-4 rounded-2xl backdrop-blur-sm focus:bg-white/20 focus:border-accent-400 focus:outline-none transition-all duration-300 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-accent-500 to-accent-400 hover:from-accent-400 hover:to-accent-300 text-black font-bold py-5 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-glow-blue disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none group"
              >
                <span className="flex items-center justify-center gap-3">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Obtenir Mon Devis Gratuit
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </span>
              </button>

              <p className="text-center text-white/60 text-sm mt-4">
                Réponse garantie sous 24h • Sans engagement
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteRequestSection;
