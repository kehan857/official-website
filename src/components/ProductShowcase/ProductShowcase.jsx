import React, { useMemo } from 'react'
import { Check, Star, Users, Zap } from 'lucide-react'
import { translations } from '../../i18n/translations'
import { useApp } from '../../context/AppContext'

const ProductShowcase = () => {
  const { lang } = useApp()
  const t = useMemo(() => translations[lang], [lang])
  const features = [
    { icon: <Zap className="w-5 h-5" />, title: t.product.features[0].title, description: t.product.features[0].desc },
    { icon: <Users className="w-5 h-5" />, title: t.product.features[1].title, description: t.product.features[1].desc },
    { icon: <Star className="w-5 h-5" />, title: t.product.features[2].title, description: t.product.features[2].desc }
  ]

  return (
    <section className="section-padding-lg bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left - Product Screenshot */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Product Interface */}
              <div className="bg-gray-50 rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                {/* Header */}
                <div className="bg-white px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">Y</span>
                    </div>
                    <span className="font-semibold text-gray-800">My Document</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-gray-500">Saved</span>
                  </div>
                </div>
                
                {/* Toolbar */}
                <div className="bg-white px-6 py-3 border-b border-gray-100 flex items-center space-x-4">
                  <button className="px-3 py-1 bg-primary text-white rounded text-sm font-medium">B</button>
                  <button className="px-3 py-1 border border-gray-200 rounded text-sm">I</button>
                  <button className="px-3 py-1 border border-gray-200 rounded text-sm">U</button>
                  <div className="w-px h-6 bg-gray-200"></div>
                  <button className="px-3 py-1 border border-gray-200 rounded text-sm">H1</button>
                  <button className="px-3 py-1 border border-gray-200 rounded text-sm">H2</button>
                </div>
                
                {/* Content Area */}
                <div className="p-8 space-y-4">
                  <h2 className="text-xl font-bold text-gray-800">Chapter 1: Getting Started</h2>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                  </div>
                  
                  <div className="bg-accent/10 border-l-4 border-accent p-4 rounded">
                    <div className="h-3 bg-accent/30 rounded w-3/4"></div>
                    <div className="h-3 bg-accent/30 rounded w-1/2 mt-2"></div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                </div>
              </div>
              
              {/* AI Suggestion Popup */}
              <div className="absolute top-32 -right-8 bg-white rounded-lg shadow-lg p-4 border border-gray-100 max-w-xs">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">AI Suggestion</p>
                    <p className="text-xs text-gray-600 mt-1">Consider adding a compelling hook to engage your readers...</p>
                    <div className="flex space-x-2 mt-2">
                      <button className="text-xs bg-primary text-white px-2 py-1 rounded">Apply</button>
                      <button className="text-xs text-gray-500">Dismiss</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl transform rotate-1"></div>
          </div>
          
          {/* Right - Content */}
          <div>
            <div className="mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                {t.product.title1}
                <span className="block text-gradient">{t.product.title2}</span>
              </h2>
              <p className="text-xl text-text-secondary leading-relaxed">{t.product.subtitle}</p>
            </div>
            
            {/* Features List */}
            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-accent">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">{feature.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">开始使用</button>
              <button className="btn-secondary">了解更多</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase