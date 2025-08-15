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
    <section className="section-padding bg-gray-50">
      <div className="container-content">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            {t.product.title1}
            <span className="block text-accent mt-2">{t.product.title2}</span>
          </h2>
          <p className="section-subtitle">{t.product.subtitle}</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left - Visual Demo */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10">
              {/* Main Interface Mockup */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Browser Header */}
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-sm text-gray-600 bg-white px-4 py-1 rounded-full">熵变AI工作台</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-gray-500">在线</span>
                  </div>
                </div>
                
                {/* Content Area */}
                <div className="p-8 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Zap className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="font-semibold text-gray-900">智能创作助手</span>
                    </div>
                    <div className="space-y-3 ml-11">
                      <div className="h-4 bg-gray-200 rounded w-full"></div>
                      <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <Star className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-900">AI建议</span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-blue-200 rounded w-5/6"></div>
                      <div className="h-3 bg-blue-200 rounded w-2/3"></div>
                    </div>
                    <div className="flex space-x-2 mt-3">
                      <button className="text-xs bg-blue-600 text-white px-3 py-1 rounded-lg">采纳</button>
                      <button className="text-xs text-blue-600 border border-blue-200 px-3 py-1 rounded-lg">忽略</button>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl transform -rotate-2 opacity-50"></div>
          </div>
          
          {/* Right - Feature List */}
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA Section */}
            <div className="mt-12 p-8 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>{t.product.cta.note}</span>
                </div>
                <button className="btn-accent">{t.product.cta.primary}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase