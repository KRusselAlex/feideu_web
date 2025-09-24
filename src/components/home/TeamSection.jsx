import React from "react";
import { Star, ArrowRight, Users, Award, Clock } from "lucide-react";
import team from "../../data/team";

const TeamSection = () => (
  <section
    id="equipe"
    className="py-32 bg-gradient-to-br from-secondary-50 via-white to-primary-50 relative overflow-hidden"
  >
    {/* Background decorations */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-400 rounded-full blur-3xl animate-pulse-soft"></div>
    </div>

    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
      {/* Header */}
      <div className="text-center mb-20 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Users className="w-4 h-4" />
          Notre Équipe d'Experts
        </div>
        <h2 className="text-5xl md:text-7xl font-heading font-bold bg-gradient-to-r from-primary-900 via-primary-700 to-secondary-800 bg-clip-text text-transparent mb-6">
          Rencontrez Notre
          <span className="block text-accent-600">Équipe Talentueuse</span>
        </h2>
        <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
          Des professionnels passionnés qui donnent vie à vos projets avec
          expertise et créativité
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Card Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Image Container */}
            <div className="relative overflow-hidden">
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Floating badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-primary-700 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                {member.speciality}
              </div>
            </div>

            {/* Content */}
            <div className="relative p-8 text-center">
              <h3 className="text-2xl font-heading font-bold text-secondary-900 mb-2 group-hover:text-primary-700 transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-primary-600 font-medium mb-3">{member.role}</p>
              <p className="text-secondary-500 text-sm mb-4">{member.bio}</p>

              {/* Rating stars */}
              <div className="flex justify-center gap-1 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 fill-accent-400 text-accent-400"
                  />
                ))}
              </div>

              {/* Connect button */}
              <button className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <span>Se connecter</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Decorative corner */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-accent-400/20 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-fade-in-up">
        {[
          { icon: Award, number: "50+", label: "Projets Réalisés" },
          { icon: Users, number: "20+", label: "Clients Satisfaits" },
          { icon: Clock, number: "5+", label: "Années d'Expérience" },
        ].map((stat, index) => (
          <div key={index} className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-colored-blue">
              <stat.icon className="w-8 h-8" />
            </div>
            <div className="text-4xl font-bold text-primary-900 mb-2">
              {stat.number}
            </div>
            <div className="text-secondary-600 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
