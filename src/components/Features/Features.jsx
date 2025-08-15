import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Brain, Shield, Zap, Users, BarChart3, Globe } from 'lucide-react';

const Features = () => {
  const { currentLang, translations } = useContext(AppContext);
  const t = translations[currentLang];

  const features = [
    {
      icon: Brain,
      title: t.features.feature1.title,
      description: t.features.feature1.description,
      color: 'text-blue-600'
    },
    {
      icon: Shield,
      title: t.features.feature2.title,
      description: t.features.feature2.description,
      color: 'text-green-600'
    },
    {
      icon: Zap,
      title: t.features.feature3.title,
      description: t.features.feature3.description,
      color: 'text-purple-600'
    },
    {
      icon: Users,
      title: t.features.feature4.title,
      description: t.features.feature4.description,
      color: 'text-orange-600'
    },
    {
      icon: BarChart3,
      title: t.features.feature5.title,
      description: t.features.feature5.description,
      color: 'text-red-600'
    },
    {
      icon: Globe,
      title: t.features.feature6.title,
      description: t.features.feature6.description,
      color: 'text-indigo-600'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="section-title">
            {t.features.title}
          </h2>
          <p className="section-subtitle">
            {t.features.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="feature-card group">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl bg-gray-50 group-hover:bg-accent/10 transition-colors duration-300 ${feature.color}`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="feature-title">
                      {feature.title}
                    </h3>
                    <p className="feature-description">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
              {t.features.ctaTitle}
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              {t.features.ctaDescription}
            </p>
            <button className="btn-primary">
              {t.features.ctaButton}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;