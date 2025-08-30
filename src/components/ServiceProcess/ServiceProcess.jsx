import React, { useMemo } from 'react'
import { CheckCircle, Clock, Target, Wrench } from 'lucide-react'
import { translations } from '../../i18n/translations'
import { useApp } from '../../context/AppContext'

const ServiceProcess = () => {
  const { lang, setLeadForm } = useApp()
  const t = useMemo(() => translations[lang], [lang])

  const processSteps = [
    {
      id: "01",
      icon: <CheckCircle className="w-8 h-8" />,
      title: "POC验证阶段",
      subtitle: "(可选)",
      description: "验证业务中的疑难问题是否可以解决",
      details: "本SOP涵盖POC验证、实施阶段、项目上线及后续维护工作，确保您的需求得到全面满足"
    },
    {
      id: "02", 
      icon: <Clock className="w-8 h-8" />,
      title: "正式实施阶段",
      subtitle: "",
      description: "进行系统开发与交付确保解决方案满足需求",
      details: "从POC验证到正式上线大约2-3个月，具体根据项目规模调整"
    },
    {
      id: "03",
      icon: <Target className="w-8 h-8" />,
      title: "上线及验收阶段", 
      subtitle: "",
      description: "确保项目交付符合预期收集，并顺利上线",
      details: "确保解决方案满足业务需求，顺利完成项目交付"
    },
    {
      id: "04",
      icon: <Wrench className="w-8 h-8" />,
      title: "后维护与优化阶段",
      subtitle: "",
      description: "持续监控与优化确保系统长期稳定",
      details: "提供持续的技术支持和系统优化，确保长期价值"
    }
  ]

  return (
    <section className="section-spacing bg-gradient-to-br from-blue-50 to-white">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="heading-section">
            {lang === 'zh' ? 'AI智能化部署' : 'AI Intelligent Deployment'}
            <span className="block text-blue-600">{lang === 'zh' ? '产品交付与实施流程' : 'Product Delivery & Implementation Process'}</span>
          </h2>
          <p className="text-section max-w-4xl mx-auto text-gray-600">
            {lang === 'zh' ? '专业的AI智能化部署服务流程，从POC验证到正式实施，确保每个项目都能成功落地并创造业务价值' : 'Professional AI intelligent deployment service process, from POC verification to formal implementation, ensuring every project can be successfully implemented and create business value'}
          </p>
        </div>

        {/* Implementation Details */}
        <div className="bg-white rounded-3xl p-8 mb-16 shadow-lg border border-gray-100">
          <div className="grid md:grid-cols-2 gap-8 text-gray-700">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">实施阶段：</h3>
              <p>本SOP涵盖POC验证、实施阶段、项目上线及后续维护工作，确保您的需求得到全面满足</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">实施周期：</h3>
              <p>从POC验证到正式上线大约2-3个月，具体根据项目规模调整。</p>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative z-10 h-full">
                {/* Step Number */}
                <div className="text-4xl font-bold text-blue-600 mb-4">{step.id}</div>
                
                {/* Icon */}
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                  {step.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                  {step.subtitle && (
                    <span className="text-sm text-gray-500 font-normal ml-2">{step.subtitle}</span>
                  )}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {step.description}
                </p>
                
                <div className="text-sm text-gray-500">
                  {step.details}
                </div>
              </div>

              {/* Connector Arrow */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white transform rotate-90"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">准备开始您的AI智能化部署？</h3>
            <p className="text-xl mb-8 opacity-90">
              我们的专业团队将为您提供从POC验证到正式实施的完整服务
            </p>
            <button 
              onClick={() => setLeadForm({ 
                open: true, 
                title: "咨询AI智能化部署方案", 
                subtitle: "专业顾问为您定制完整的部署实施计划" 
              })}
              className="bg-white text-blue-600 px-12 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300"
            >
              立即咨询部署方案
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceProcess
