import React from "react";
import faqData from "../../data/faq";

const FAQSection = () => (
  <section id="faq" className="py-24">
    <div className="max-w-4xl mx-auto px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-12">FAQ</h2>
      <div className="space-y-6">
        {faqData.map((item, index) => (
          <details key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <summary className="cursor-pointer font-semibold text-gray-900">{item.question}</summary>
            <p className="mt-2 text-gray-600">{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default FAQSection;
