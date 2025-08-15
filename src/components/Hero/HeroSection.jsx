import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const HeroSection = () => {
  const { currentLang, translations } = useContext(AppContext);
  const t = translations[currentLang];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accentLight/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="text-center max-w-5xl mx-auto px-6">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight">
            {t.hero.title}
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="btn-primary text-lg px-10 py-5">
              {t.hero.ctaPrimary}
            </button>
            <button className="btn-secondary text-lg px-10 py-5">
              {t.hero.ctaSecondary}
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                {t.hero.stats.users}
              </div>
              <div className="text-gray-600 font-medium">
                {t.hero.stats.usersLabel}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                {t.hero.stats.projects}
              </div>
              <div className="text-gray-600 font-medium">
                {t.hero.stats.projectsLabel}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                {t.hero.stats.satisfaction}
              </div>
              <div className="text-gray-600 font-medium">
                {t.hero.stats.satisfactionLabel}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;