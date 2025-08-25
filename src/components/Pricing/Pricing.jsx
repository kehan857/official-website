import React, { useMemo, useState } from 'react'
import { Check, Star, ArrowRight, Sparkles } from 'lucide-react'
import { translations } from '../../i18n/translations'
import { useApp } from '../../context/AppContext'

const Pricing = () => {
  const { lang } = useApp()
  const t = useMemo(() => translations[lang], [lang])
  const [isAnnual, setIsAnnual] = useState(true)
  
  const plans = t.pricing.plans
  const features = t.pricing.features

  return (
    <section className="section-spacing bg-white">
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

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20 mt-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-3xl shadow-lg border-2 p-8 hover:shadow-2xl hover:-translate-y-2 card-glow group transition-all duration-500 ${
                plan.popular 
                  ? 'scale-105 shadow-2xl border-blue-500 ring-2 ring-blue-200 ring-opacity-50' 
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
                <h3 className="text-2xl font-bold text-black mb-4">{plan.name}</h3>
                <div className="mb-4">
                  {plan.name === "企业版" || plan.name === "企业旗舰版" ? (
                    <span className="text-4xl font-bold text-black">
                      {plan.name === "企业版" ? "定制开发" : "定制报价"}
                    </span>
                  ) : (
                    <>
                      <span className="text-5xl font-bold text-black">
                        ¥{isAnnual ? plan.price.annual : plan.price.monthly}
                      </span>
                      <span className="text-gray-600 ml-2">
                        /{isAnnual ? '年' : '月'}
                      </span>
                    </>
                  )}
                </div>
                <p className="text-gray-600">{plan.description}</p>
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
                className={`w-full py-4 rounded-2xl font-medium text-lg transition-all duration-500 transform hover:scale-105 relative overflow-hidden group z-10 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl'
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

        {/* FAQ Preview */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-black mb-6">{t.pricing.haveQuestions}</h3>
          <p className="text-xl text-gray-600 mb-8">
            {t.pricing.salesTeam}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg inline-flex items-center space-x-3">
              <span>{t.pricing.contactSales}</span>
              <ArrowRight className="w-6 h-6" />
            </button>
            <button className="btn-secondary text-lg">
              {t.pricing.viewFAQ}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
