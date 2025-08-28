import React, { useMemo, useState, useRef } from 'react'
import { Check, Star, ArrowRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react'
import { translations } from '../../i18n/translations'
import { useApp } from '../../context/AppContext'

const Pricing = () => {
  const { lang, setLeadForm } = useApp()
  const t = useMemo(() => translations[lang], [lang])
  const [isAnnual, setIsAnnual] = useState(true)
  const scrollContainerRef = useRef(null)
  
  const plans = t.pricing.plans
  const features = t.pricing.features

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' })
    }
  }

  return (
    <section id="pricing" className="section-spacing bg-white">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="heading-section">
            {t.pricing.title1}
            <span className="block text-black">{t.pricing.title2}</span>
          </h2>
          <p className="text-section max-w-3xl mx-auto">
            {t.pricing.subtitle}
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center mb-16">
          <div className="bg-gray-100 rounded-2xl p-2 flex items-center">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
                !isAnnual 
                  ? 'bg-white text-black shadow-md' 
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              {t.pricing.billing.monthly}
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 relative ${
                isAnnual 
                  ? 'bg-white text-black shadow-md' 
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              {t.pricing.billing.yearly}
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                {t.pricing.billing.save}
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Container */}
        <div className="relative mb-20 mt-8">
          {/* Navigation Buttons */}
          <div className="hidden md:block">
            <button 
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button 
              onClick={scrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          
          {/* Scrollable Cards Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitScrollbar: { display: 'none' }
            }}
          >
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-3xl shadow-lg border-2 p-6 hover:shadow-2xl hover:-translate-y-2 card-glow group transition-all duration-500 flex-shrink-0 w-80 snap-center ${
                plan.popular 
                  ? 'shadow-2xl border-blue-500 ring-2 ring-blue-200 ring-opacity-50 transform scale-105' 
                  : plan.color
              }`}
            >
              {/* Popular Card Background Decoration */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 rounded-3xl opacity-30"></div>
              )}
              
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 shadow-lg whitespace-nowrap">
                    <Star className="w-4 h-4 flex-shrink-0" />
                    <span>{t.pricing.mostPopular}</span>
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8 relative z-10">
                <h3 className="text-xl font-bold text-black mb-4">{plan.name}</h3>
                
                {/* Discount Badge for VIP */}
                {plan.discount && isAnnual && (
                  <div className="mb-2">
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      {plan.discount}
                    </span>
                  </div>
                )}
                
                <div className="mb-4">
                  {/* Handle different price types */}
                  {typeof (isAnnual ? plan.price.annual : plan.price.monthly) === 'string' ? (
                    <span className="text-3xl font-bold text-black">
                      {isAnnual ? plan.price.annual : plan.price.monthly}
                    </span>
                  ) : (
                    <div>
                      {/* Show original price with strikethrough for VIP annual */}
                      {plan.originalPrice && isAnnual && (
                        <div className="text-sm text-gray-400 line-through mb-1">
                          ¥{plan.originalPrice.annual}
                        </div>
                      )}
                      <span className="text-4xl font-bold text-black">
                        {plan.pricePrefix || '¥'}{isAnnual ? plan.price.annual : plan.price.monthly}
                      </span>
                      <span className="text-gray-600 ml-2">
                        {plan.priceSuffix || (isAnnual ? '/年' : '/月')}
                      </span>
                    </div>
                  )}
                </div>
                <p className="text-gray-600 text-sm">{plan.description}</p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8 relative z-10">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
                {plan.limitations.map((limitation, i) => (
                  <div key={i} className="flex items-center space-x-3 opacity-60">
                    <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                      <div className="w-3 h-0.5 bg-gray-400"></div>
                    </div>
                    <span className="text-gray-500">{limitation}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button 
                onClick={() => setLeadForm({ 
                  open: true, 
                  title: plan.name === "7天免费体验版" ? "申请免费体验" : 
                         plan.name === "VIP版本" ? "购买VIP版本" :
                         "获取定制方案",
                  subtitle: plan.name === "7天免费体验版" ? "立即体验六大核心能力" : 
                           plan.name === "VIP版本" ? "升级VIP享受完整功能" :
                           "专业顾问为您定制解决方案" 
                })}
                className={`w-full py-3 rounded-2xl font-medium text-sm transition-all duration-500 transform hover:scale-105 relative overflow-hidden group z-10 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl'
                    : plan.name === "7天免费体验版"
                      ? 'border-2 border-red-300 text-red-600 hover:bg-red-500 hover:text-white'
                      : 'border-2 border-black text-black hover:bg-black hover:text-white'
                }`}
                onMouseEnter={(e) => e.target.classList.add('fast-bounce')}
                onAnimationEnd={(e) => e.target.classList.remove('fast-bounce')}
              >
                <span className="relative z-10">{plan.buttonText}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
            </div>
          ))}
          </div>
        </div>

        {/* All Plans Include */}
        <div className="bg-gray-50 rounded-3xl p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-black mb-4">{t.pricing.allPlansInclude}</h3>
            <p className="text-xl text-gray-600">{t.pricing.allPlansDesc}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white rounded-xl p-4 shadow-sm">
                <Sparkles className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <span className="font-medium text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  )
}

export default Pricing
