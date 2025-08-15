import React, { useMemo } from 'react'
import { ArrowRight, PenTool, Sparkles } from 'lucide-react'
import { useApp } from '../../context/AppContext'
import { translations } from '../../i18n/translations'

const HeroSection = () => {
  const { lang, setAuthModal } = useApp()
  const t = useMemo(() => translations[lang], [lang])
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Hero Content */}
      <div className="section-spacing-lg bg-white">
        <div className="container-hero text-center">
          {/* Main Headline */}
          <h1 className="heading-hero">
            {t.hero.title1}
            <span className="block">{t.hero.title2}</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-hero max-w-3xl mx-auto">
            {t.hero.subtitle}
          </p>
          
          {/* Single CTA */}
          <div className="mb-24">
            <button 
              onClick={()=>setAuthModal({ open: true, mode: 'register' })} 
              className="btn-primary text-lg px-12 py-5"
            >
              {t.hero.ctaPrimary}
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
              AI驱动的智能创作平台
            </h2>
            <p className="text-section text-gray-600 max-w-3xl mx-auto">
              体验全新的智能创作流程，从想法到成品，一站式解决方案
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
                    <h3 className="font-semibold text-gray-900 mb-6">项目面板</h3>
                    <div className="space-y-4">
                      {['企业知识库', 'AI助手编排', '内容生成器', '数据分析'].map((item, i) => (
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
                        <h4 className="font-semibold text-gray-900">AI创作助手</h4>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-500">在线</span>
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
                        <span className="font-semibold">AI建议</span>
                      </div>
                      <p className="text-gray-300">基于您的内容，建议添加相关案例研究以增强说服力...</p>
                      <div className="flex space-x-3 mt-4">
                        <button className="bg-white text-primary px-4 py-2 rounded-lg text-sm font-medium">采纳建议</button>
                        <button className="border border-gray-400 text-gray-300 px-4 py-2 rounded-lg text-sm">稍后处理</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center space-x-3">
                <PenTool className="w-6 h-6 text-primary" />
                <div>
                  <div className="font-semibold text-gray-900">智能编辑</div>
                  <div className="text-sm text-gray-500">实时优化建议</div>
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