import React, { useMemo } from 'react'
import { ArrowRight, PenTool, Sparkles } from 'lucide-react'
import { useApp } from '../../context/AppContext'
import { translations } from '../../i18n/translations'

const HeroSection = () => {
  const { lang, setAuthModal } = useApp()
  const t = useMemo(() => translations[lang], [lang])
  return (
    <section id="hero" className="gradient-bg relative overflow-hidden">
      {/* Hero Content */}
      <div className="section-padding">
        <div className="container-narrow text-center">
          {/* Badge */}
          <div className="mb-8">
            <span className="inline-flex items-center px-6 py-3 rounded-full bg-accent/10 text-accent font-medium text-sm border border-accent/20">
              <Sparkles className="w-4 h-4 mr-2" />
              {t.hero.badge}
            </span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-[1.1]">
            {t.hero.title1}
            <span className="block text-accent mt-2">{t.hero.title2}</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button 
              onClick={()=>setAuthModal({ open: true, mode: 'register' })} 
              className="btn-primary inline-flex items-center justify-center group text-lg"
            >
              {t.hero.ctaPrimary}
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary text-lg">
              {t.hero.ctaSecondary}
            </button>
          </div>
        </div>
      </div>

      {/* Visual Mockup Section */}
      <div className="section-padding-sm bg-white border-t border-gray-100">
        <div className="container-content">
          <div className="relative">
            {/* Main Interface Mockup */}
            <div className="bg-gray-50 rounded-3xl p-12 shadow-2xl border border-gray-200">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left Panel - Materials */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">素材收集</h3>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <PenTool className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">RAG知识库</div>
                          <div className="text-sm text-gray-500">企业知识管理</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <Sparkles className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">智能助手</div>
                          <div className="text-sm text-gray-500">AI对话系统</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Panel - Writing Area */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 min-h-[300px]">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-semibold text-gray-900">AI创作工作台</h3>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-6 bg-gray-200 rounded w-full"></div>
                      <div className="h-6 bg-gray-200 rounded w-5/6"></div>
                      <div className="h-12 bg-blue-50 border border-blue-200 rounded w-full flex items-center px-4">
                        <span className="text-blue-600 text-sm">AI正在协助创作...</span>
                      </div>
                      <div className="h-6 bg-gray-200 rounded w-full"></div>
                      <div className="h-6 bg-gray-200 rounded w-4/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-2xl">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                <div className="grid grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{t.hero.stats1.value}</div>
                    <div className="text-sm text-gray-600">{t.hero.stats1.label}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{t.hero.stats2.value}</div>
                    <div className="text-sm text-gray-600">{t.hero.stats2.label}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{t.hero.stats3.value}</div>
                    <div className="text-sm text-gray-600">{t.hero.stats3.label}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle Background Elements */}
      <div className="absolute top-32 left-20 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-2xl"></div>
      <div className="absolute bottom-32 right-20 w-40 h-40 bg-purple-100 rounded-full opacity-20 blur-2xl"></div>
    </section>
  )
}

export default HeroSection