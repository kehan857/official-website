import React, { useMemo, useState } from 'react'
import { Check, Star, ArrowRight, Sparkles } from 'lucide-react'
import { translations } from '../../i18n/translations'
import { useApp } from '../../context/AppContext'

const Pricing = () => {
  const { lang } = useApp()
  const t = useMemo(() => translations[lang], [lang])
  const [isAnnual, setIsAnnual] = useState(true)
  
  const plans = [
    {
      name: "免费体验",
      price: { monthly: 0, annual: 0 },
      description: "适合个人用户试用体验",
      features: [
        "每月5次AI创作",
        "基础模板库",
        "标准导出格式",
        "社区支持",
        "基础教程"
      ],
      limitations: [
        "功能限制较多",
        "无法商用"
      ],
      buttonText: "免费开始",
      popular: false,
      color: "border-gray-200"
    },
    {
      name: "专业版",
      price: { monthly: 299, annual: 2399 },
      description: "适合中小企业和团队使用",
      features: [
        "无限AI创作次数",
        "高级模板库",
        "多格式导出",
        "团队协作功能",
        "优先技术支持",
        "自定义品牌",
        "API接口访问",
        "数据分析报告"
      ],
      limitations: [],
      buttonText: "立即购买",
      popular: true,
      color: "border-primary"
    },
    {
      name: "企业版",
      price: { monthly: 999, annual: 9999 },
      description: "适合大型企业定制化需求",
      features: [
        "所有专业版功能",
        "私有化部署",
        "定制化开发",
        "专属客户经理",
        "SLA服务保障",
        "企业级安全",
        "无限用户数",
        "培训与咨询"
      ],
      limitations: [],
      buttonText: "联系销售",
      popular: false,
      color: "border-gray-800"
    }
  ]

  const features = [
    "AI智能创作引擎",
    "多模态内容支持",
    "企业级安全保障",
    "24/7技术支持",
    "数据隐私保护",
    "云端同步备份"
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-content">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            定价方案
            <span className="block text-primary mt-4">选择最适合您的计划</span>
          </h2>
          <p className="section-subtitle">
            从个人体验到企业级解决方案，我们为不同规模的用户提供灵活的定价选项
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center mb-16">
          <div className="bg-gray-100 rounded-2xl p-2 flex items-center">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
                !isAnnual 
                  ? 'bg-white text-primary shadow-md' 
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              按月付费
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 relative ${
                isAnnual 
                  ? 'bg-white text-primary shadow-md' 
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              按年付费
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                省20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-3xl shadow-lg border-2 ${plan.color} p-8 hover:shadow-2xl transition-all duration-500 ${
                plan.popular ? 'scale-105 shadow-2xl' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium flex items-center space-x-2">
                    <Star className="w-4 h-4" />
                    <span>最受欢迎</span>
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-primary mb-4">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-primary">
                    ¥{isAnnual ? plan.price.annual : plan.price.monthly}
                  </span>
                  <span className="text-gray-600 ml-2">
                    /{isAnnual ? '年' : '月'}
                  </span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
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
                className={`w-full py-4 rounded-2xl font-medium text-lg transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-primary text-white hover:bg-gray-900 shadow-lg hover:shadow-xl'
                    : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* All Plans Include */}
        <div className="bg-gray-50 rounded-3xl p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-primary mb-4">所有计划均包含</h3>
            <p className="text-xl text-gray-600">核心功能保障您的使用体验</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white rounded-xl p-4 shadow-sm">
                <Sparkles className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="font-medium text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-primary mb-6">还有疑问？</h3>
          <p className="text-xl text-gray-600 mb-8">
            我们的销售团队随时为您答疑解惑
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg inline-flex items-center space-x-3">
              <span>联系销售</span>
              <ArrowRight className="w-6 h-6" />
            </button>
            <button className="btn-secondary text-lg">
              查看常见问题
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
