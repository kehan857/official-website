import React, { useMemo } from 'react'
import { ArrowRight, PenTool, Sparkles } from 'lucide-react'
import { useApp } from '../../context/AppContext'
import { translations } from '../../i18n/translations'

const HeroSection = () => {
  const { lang, setAuthModal } = useApp()
  const t = useMemo(() => translations[lang], [lang])
  return (
    <section id="hero" className="section-padding-lg bg-gradient-to-br from-muted to-white relative overflow-hidden">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                {t.hero.badge}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8 leading-tight">
              {t.hero.title1}
              <span className="block text-gradient">{t.hero.title2}</span>
            </h1>
            
            <p className="text-xl text-text-secondary mb-10 max-w-2xl leading-relaxed">
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button onClick={()=>setAuthModal({ open: true, mode: 'register' })} className="btn-primary inline-flex items-center justify-center group">
                {t.hero.ctaPrimary}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary">
                {t.hero.ctaSecondary}
              </button>
            </div>
            
            {/* Stats - 简化显示 */}
            <div className="flex items-center justify-center lg:justify-start space-x-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{t.hero.stats1.value}</div>
                <div className="text-sm text-text-muted mt-1">{t.hero.stats1.label}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{t.hero.stats2.value}</div>
                <div className="text-sm text-text-muted mt-1">{t.hero.stats2.label}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{t.hero.stats3.value}</div>
                <div className="text-sm text-text-muted mt-1">{t.hero.stats3.label}</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - 简化插图 */}
          <div className="relative">
            <div className="relative z-10">
              {/* 简化的界面模拟 */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-8 bg-accent/20 rounded w-2/3"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                </div>
              </div>
              
              {/* 装饰元素 */}
              <div className="absolute -top-6 -right-6 bg-accent text-white p-4 rounded-full shadow-lg">
                <PenTool className="w-6 h-6" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-4 rounded-full shadow-lg">
                <Sparkles className="w-6 h-6" />
              </div>
            </div>
            
            {/* 背景装饰 */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5 rounded-3xl transform -rotate-3 scale-105"></div>
          </div>
        </div>
      </div>
      
      {/* 背景装饰 - 简化 */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  )
}

export default HeroSection