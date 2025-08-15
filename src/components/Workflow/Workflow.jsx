import React, { useMemo } from 'react'
import { ArrowRight, Upload, Brain, Edit, Share2, CheckCircle } from 'lucide-react'
import { translations } from '../../i18n/translations'
import { useApp } from '../../context/AppContext'

const Workflow = () => {
  const { lang } = useApp()
  const t = useMemo(() => translations[lang], [lang])
  
  const steps = [
    {
      icon: <Upload className="w-8 h-8" />,
      title: "导入素材",
      description: "支持文档、图片、音频等多种格式，一键批量导入",
      details: ["PDF、Word、Excel文档", "图片、视频素材", "音频文件转录", "网页内容抓取"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI智能分析",
      description: "深度理解内容结构，提取关键信息和洞察",
      details: ["内容结构分析", "关键信息提取", "情感倾向识别", "主题标签生成"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Edit className="w-8 h-8" />,
      title: "协作创作",
      description: "人机协作，实时优化和调整内容质量",
      details: ["实时编辑建议", "语法风格优化", "逻辑结构调整", "多人协作编辑"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "发布分享",
      description: "一键生成多种格式，支持多平台发布",
      details: ["多格式导出", "社交媒体适配", "SEO优化", "版权水印添加"],
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <section className="section-spacing bg-white">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="heading-section">
            创作流程
            <span className="block text-black">四步完成专业内容</span>
          </h2>
          <p className="text-section max-w-3xl mx-auto">
            从素材导入到内容发布，熵变AI为您提供完整的创作流程支持，让每一步都更高效
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 transform -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Number */}
                <div className="flex items-center justify-center w-16 h-16 bg-white border-4 border-gray-200 rounded-full mx-auto mb-8 relative z-10">
                  <span className="text-2xl font-bold text-primary">{index + 1}</span>
                </div>
                
                {/* Step Content */}
                <div className="text-center">
                  {/* Icon */}
                  <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg`}>
                    {step.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-primary mb-4">{step.title}</h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                  
                  {/* Details */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <ul className="space-y-3 text-left">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
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
            <h3 className="text-3xl font-bold text-primary mb-6">体验完整创作流程</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              立即开始您的第一个项目，感受AI驱动的创作体验
            </p>
            <button className="btn-primary text-lg inline-flex items-center space-x-3">
              <span>开始创作</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Workflow
