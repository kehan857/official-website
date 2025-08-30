import React, { useMemo, useState } from 'react'
import { ArrowRight, TrendingUp, Users, Target, Shield } from 'lucide-react'
import { useApp } from '../../context/AppContext'
import { translations } from '../../i18n/translations'

const CaseStudies = () => {
  const { lang } = useApp()
  const t = useMemo(() => translations[lang], [lang])
  const [activeTab, setActiveTab] = useState(2) // 默认选中"企业级RAG知识体系"

  const caseStudies = t.caseStudies.studies

  return (
    <section id="case-studies" className="section-spacing bg-gray-50">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="heading-section text-black">
            {t.caseStudies.title}
          </h2>
          <p className="text-section text-gray-600 max-w-3xl mx-auto">
            {t.caseStudies.subtitle}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-16">
          {caseStudies.map((study, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`
                px-8 py-4 rounded-full font-medium transition-all duration-300 border-2
                ${activeTab === index 
                  ? 'bg-black text-white border-black shadow-lg' 
                  : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }
              `}
            >
              {study.title}
            </button>
          ))}
        </div>

        {/* Active Case Study */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-16">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Content Side */}
            <div>
              <div className="mb-6">
                <h3 className="heading-card text-black mb-2">{caseStudies[activeTab].title}</h3>
                <p className="text-lg font-medium text-blue-600 mb-4">{caseStudies[activeTab].subtitle}</p>
              </div>

              {/* Challenge & Solution */}
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{lang === 'zh' ? '挑战' : 'Challenge'}</h4>
                  <p className="text-gray-600">{caseStudies[activeTab].challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{lang === 'zh' ? '解决方案' : 'Solution'}</h4>
                  <p className="text-gray-600 mb-4">{caseStudies[activeTab].solution}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {caseStudies[activeTab].capabilities.map((capability, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                <p className="text-gray-700 italic mb-3">"{caseStudies[activeTab].quote}"</p>
                <p className="text-sm font-medium text-gray-900">— {caseStudies[activeTab].author}</p>
              </div>

              {/* CTA */}
              <button className="btn-secondary text-sm px-6 py-3 inline-flex items-center space-x-2">
                <span>{lang === 'zh' ? '了解详情' : 'Learn More'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Results Side */}
            <div>
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-black mb-8">{lang === 'zh' ? '关键成果指标' : 'Key Performance Indicators'}</h4>
                {caseStudies[activeTab].results.map((result, i) => {
                  const icons = [TrendingUp, Target, Users, Shield]
                  const IconComponent = icons[i % icons.length]
                  return (
                    <div key={i} className="bg-gray-50 rounded-2xl p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-black">{result.value}</div>
                          <div className="text-gray-600">{result.metric}</div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}

export default CaseStudies
