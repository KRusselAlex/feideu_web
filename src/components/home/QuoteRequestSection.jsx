import React from "react";

const QuoteRequestSection = () => (
  <section id="devis" className="py-24 bg-blue-50">
    <div className="max-w-4xl mx-auto px-2 md:px-6 lg:px-8 text-center">
      <h2 className="text-4xl font-bold mb-6">Demandez un Devis Gratuit</h2>
      <p className="text-gray-600 mb-8">
        Contactez-nous pour obtenir un devis personnalisé adapté à vos besoins et vos projets.
      </p>
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white p-8 rounded-2xl shadow-lg">
        <input type="text" placeholder="Nom" className="border border-gray-200 p-4 rounded-lg" />
        <input type="email" placeholder="Email" className="border border-gray-200 p-4 rounded-lg" />
        <input type="text" placeholder="Objet du projet" className="border border-gray-200 p-4 rounded-lg sm:col-span-2" />
        <textarea placeholder="Votre message" className="border border-gray-200 p-4 rounded-lg sm:col-span-2"></textarea>
        <button type="submit" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 rounded-2xl font-semibold sm:col-span-2">
          Envoyer
        </button>
      </form>
    </div>
  </section>
);

export default QuoteRequestSection;
