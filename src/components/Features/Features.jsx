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
    <section id="features" className="section-padding-lg bg-muted">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {t.features.header1}
            <span className="block text-gradient">{t.features.header2}</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">{t.features.desc}</p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="card group hover:scale-105 transition-all duration-300">
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-primary mb-4">
                {feature.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA - 简化 */}
        <div className="text-center mt-20">
          <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">{t.features.bottomCtaTitle}</h3>
            <p className="text-text-secondary mb-8 leading-relaxed">{t.features.bottomCtaDesc}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">{t.features.bottomPrimary}</button>
              <button className="btn-secondary">{t.features.bottomSecondary}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features