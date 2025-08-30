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


    </section>
  )
}

export default HeroSection