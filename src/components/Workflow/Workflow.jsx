import React, { useMemo } from 'react'
import { ArrowRight, Upload, Brain, Edit, Share2, CheckCircle } from 'lucide-react'
import { translations } from '../../i18n/translations'
import { useApp } from '../../context/AppContext'

const Workflow = () => {
  const { lang } = useApp()
  const t = useMemo(() => translations[lang], [lang])
  
  const steps = t.workflow?.steps ? [
    {
      icon: <Upload className="w-8 h-8" />,
      title: t.workflow.steps[0].title,
      description: t.workflow.steps[0].description,
      details: t.workflow.steps[0].details,
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: t.workflow.steps[1].title,
      description: t.workflow.steps[1].description,
      details: t.workflow.steps[1].details,
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Edit className="w-8 h-8" />,
      title: t.workflow.steps[2].title,
      description: t.workflow.steps[2].description,
      details: t.workflow.steps[2].details,
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: t.workflow.steps[3].title,
      description: t.workflow.steps[3].description,
      details: t.workflow.steps[3].details,
      color: "from-orange-500 to-red-500"
    }
  ] : []

  return (
    <section className="section-spacing bg-white">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="heading-section">
            {t.workflow?.title1 || "创作流程"}
            <span className="block text-black">{t.workflow?.title2 || "四步完成专业内容"}</span>
          </h2>
          <p className="text-section max-w-3xl mx-auto">
            {t.workflow?.subtitle || "从素材导入到内容发布，熵变AI为您提供完整的创作流程支持，让每一步都更高效"}
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="relative">
          {/* Connection Lines - 优化位置 */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"></div>
          
          <div className="grid lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col h-full">
                {/* Step Number - 顶部对齐 */}
                <div className="flex items-center justify-center w-16 h-16 bg-white border-4 border-gray-200 rounded-full mx-auto mb-8 relative z-10 flex-shrink-0">
                  <span className="text-2xl font-bold text-black">{index + 1}</span>
                </div>
                
                {/* Step Content - 统一高度 */}
                <div className="text-center flex flex-col flex-grow">
                  {/* Icon */}
                  <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-700 mx-auto mb-6 flex-shrink-0">
                    {step.icon}
                  </div>
                  
                  {/* Title - 固定高度区域 */}
                  <div className="mb-4 min-h-[3rem] flex items-center justify-center">
                    <h3 className="text-xl font-bold text-black">{step.title}</h3>
                  </div>
                  
                  {/* Description - 固定高度区域 */}
                  <div className="mb-6 min-h-[4rem] flex items-start justify-center">
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                  
                  {/* Details - 自适应高度，底部对齐 */}
                  <div className="bg-gray-50 rounded-2xl p-6 flex-grow flex flex-col justify-start">
                    <ul className="space-y-3 text-left">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 border border-gray-200">
            <h3 className="text-3xl font-bold text-black mb-6">{t.workflow?.ctaTitle || "体验完整创作流程"}</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t.workflow?.ctaDesc || "立即开始您的第一个项目，感受AI驱动的创作体验"}
            </p>
            <button className="btn-primary text-lg inline-flex items-center space-x-3">
              <span>{t.workflow?.ctaPrimary || "开始创作"}</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Workflow
