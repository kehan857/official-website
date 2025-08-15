import React, { useMemo } from 'react'
import { BookOpen, Brain, FileText, Globe, Palette, Shield } from 'lucide-react'
import { translations } from '../../i18n/translations'
import { useApp } from '../../context/AppContext'

const Features = () => {
  const { lang } = useApp()
  const t = useMemo(() => translations[lang], [lang])
  const features = [
    { icon: <FileText className="w-8 h-8" />, title: t.features.items[0].title, description: t.features.items[0].desc, color: "from-blue-500 to-cyan-500" },
    { icon: <Brain className="w-8 h-8" />, title: t.features.items[1].title, description: t.features.items[1].desc, color: "from-purple-500 to-pink-500" },
    { icon: <Palette className="w-8 h-8" />, title: t.features.items[2].title, description: t.features.items[2].desc, color: "from-green-500 to-emerald-500" },
    { icon: <Globe className="w-8 h-8" />, title: t.features.items[3].title, description: t.features.items[3].desc, color: "from-orange-500 to-red-500" },
    { icon: <BookOpen className="w-8 h-8" />, title: t.features.items[4].title, description: t.features.items[4].desc, color: "from-indigo-500 to-purple-500" },
    { icon: <Shield className="w-8 h-8" />, title: t.features.items[5].title, description: t.features.items[5].desc, color: "from-gray-500 to-slate-500" }
  ]

  return (
    <section id="features" className="section-spacing bg-gray-50">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="heading-section">
            {t.features.header1}
            <span className="block text-black">{t.features.header2}</span>
          </h2>
          <p className="text-section max-w-3xl mx-auto">{t.features.desc}</p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card-base card-hover group cursor-pointer">
              {/* Icon */}
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-105 transition-all duration-300">
                {feature.icon}
              </div>
              
              {/* Content */}
              <h3 className="heading-card group-hover:text-black transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-body">
                {feature.description}
              </p>
              
              {/* Learn More Link */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <div className="flex items-center text-primary font-medium">
                  <span className="text-sm">了解更多</span>
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action Section */}
        <div className="mt-32">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 border border-gray-200 shadow-sm">
            <div className="text-center max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t.features.bottomCtaTitle}</h3>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">{t.features.bottomCtaDesc}</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="btn-primary text-lg">{t.features.bottomPrimary}</button>
                <button className="btn-secondary text-lg">{t.features.bottomSecondary}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features