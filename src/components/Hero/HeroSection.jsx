import React, { useMemo } from 'react'
import { ArrowRight, PenTool, Sparkles } from 'lucide-react'
import { useApp } from '../../context/AppContext'
import { translations } from '../../i18n/translations'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const HeroSection = () => {
  const { lang, setLeadForm } = useApp()
  const t = useMemo(() => translations[lang], [lang])
  const [titleRef, titleVisible] = useScrollAnimation({ delay: 200 })
  const [subtitleRef, subtitleVisible] = useScrollAnimation({ delay: 400 })
  const [ctaRef, ctaVisible] = useScrollAnimation({ delay: 600 })
  
  return (
    <section id="hero" className="relative overflow-hidden gradient-bg-hero">
      {/* 动态背景装饰 - 参考YouMind */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-100 rounded-full floating-element opacity-60"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-100 rounded-full floating-element opacity-40" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-100 rounded-full floating-element opacity-50" style={{animationDelay: '4s'}}></div>
      </div>
      
      {/* Hero Content */}
      <div className="section-spacing-lg relative z-10">
        <div className="container-hero text-center">
          {/* Main Headline */}
          <h1 
            ref={titleRef}
            className={`heading-hero transition-all duration-1000 ${
              titleVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
            }`}
          >
            <span className="inline-block">{t.hero.title1}</span>
            <span className="block gradient-text">{t.hero.title2}</span>
          </h1>
          
          {/* Subtitle */}
          <p 
            ref={subtitleRef}
            className={`text-hero max-w-3xl mx-auto transition-all duration-1000 ${
              subtitleVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
            }`}
          >
            {t.hero.subtitle}
          </p>
          
          {/* Single CTA */}
          <div 
            ref={ctaRef}
            className={`mb-24 transition-all duration-1000 ${
              ctaVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
            }`}
          >
            <button 
              onClick={() => setLeadForm({ 
                open: true, 
                title: "申请免费试用", 
                subtitle: "填写信息，立即获取产品试用权限" 
              })} 
              className="btn-primary text-lg px-12 py-5 hover-lift relative group"
              onMouseEnter={(e) => e.target.classList.add('fast-bounce')}
              onAnimationEnd={(e) => e.target.classList.remove('fast-bounce')}
            >
              <span className="relative z-10">{t.hero.ctaPrimary}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Visual Demo Section */}
      <div className="section-spacing bg-gray-50">
        <div className="container-section">
          {/* Section Title */}
          <div className="text-center mb-20">
            <h2 className="heading-section text-black">
              {t.hero.demoTitle}
            </h2>
            <p className="text-section text-gray-600 max-w-3xl mx-auto">
              {t.hero.demoSubtitle}
            </p>
          </div>

          {/* Interface Preview */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-2 shadow-2xl">
              {/* Browser Chrome */}
              <div className="bg-gray-100 rounded-t-2xl px-6 py-4 flex items-center space-x-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 bg-white rounded-lg px-4 py-2 text-sm text-gray-600">
                  entropy-ai.com
                </div>
              </div>
              
              {/* Main Interface */}
              <div className="bg-white rounded-b-2xl p-8">
                <div className="grid lg:grid-cols-4 gap-8 min-h-[500px]">
                  {/* Sidebar */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-6">{t.hero.projectPanel}</h3>
                    <div className="space-y-4">
                      {t.hero.projectItems.map((item, i) => (
                        <div key={i} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Main Content Area */}
                  <div className="lg:col-span-3 space-y-6">
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-gray-900">{t.hero.aiAssistant}</h4>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-500">{t.hero.online}</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="h-4 bg-gray-200 rounded w-full"></div>
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-500 text-white rounded-2xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <Sparkles className="w-6 h-6" />
                        <span className="font-semibold">{t.hero.aiSuggestion}</span>
                      </div>
                      <p className="text-gray-300">{t.hero.aiSuggestionText}</p>
                      <div className="flex space-x-3 mt-4">
                        <button className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">{t.hero.adoptSuggestion}</button>
                        <button className="border border-gray-400 text-gray-200 hover:text-white px-4 py-2 rounded-lg text-sm transition-colors">{t.hero.processLater}</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center space-x-3">
                <PenTool className="w-6 h-6 text-blue-500" />
                <div>
                  <div className="font-semibold text-gray-900">{t.hero.smartEditor}</div>
                  <div className="text-sm text-gray-500">{t.hero.realTimeOptimization}</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="bg-white rounded-3xl p-8 text-center border border-gray-200 shadow-lg">
              <div className="text-4xl font-bold text-black mb-2">{t.hero.stats1.value}</div>
              <div className="text-gray-600">{t.hero.stats1.label}</div>
            </div>
            <div className="bg-white rounded-3xl p-8 text-center border border-gray-200 shadow-lg">
              <div className="text-4xl font-bold text-black mb-2">{t.hero.stats2.value}</div>
              <div className="text-gray-600">{t.hero.stats2.label}</div>
            </div>
            <div className="bg-white rounded-3xl p-8 text-center border border-gray-200 shadow-lg">
              <div className="text-4xl font-bold text-black mb-2">{t.hero.stats3.value}</div>
              <div className="text-gray-600">{t.hero.stats3.label}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection