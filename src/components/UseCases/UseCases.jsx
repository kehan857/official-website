import React, { useMemo, useState } from 'react'
import { ArrowRight, FileText, Briefcase, GraduationCap, Building2, Users, Target } from 'lucide-react'
import { translations } from '../../i18n/translations'
import { useApp } from '../../context/AppContext'

const UseCases = () => {
  const { lang } = useApp()
  const t = useMemo(() => translations[lang], [lang])
  const [activeTab, setActiveTab] = useState(0)
  
  const useCases = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "企业内容营销",
      description: "助力企业打造专业的品牌内容体系",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      features: [
        "品牌故事创作",
        "产品介绍文案",
        "社交媒体内容",
        "营销邮件文案",
        "白皮书制作",
        "案例研究报告"
      ],
      results: {
        efficiency: "80%",
        quality: "95%",
        time: "70%"
      }
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "教育培训",
      description: "为教育机构提供课程内容和培训材料制作",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      features: [
        "课程大纲设计",
        "教学材料制作",
        "练习题生成",
        "培训手册编写",
        "学习评估报告",
        "在线课程内容"
      ],
      results: {
        efficiency: "75%",
        quality: "90%",
        time: "65%"
      }
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "企业报告",
      description: "快速生成各类企业报告和分析文档",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      features: [
        "财务分析报告",
        "市场调研报告",
        "项目总结报告",
        "年度工作总结",
        "竞品分析报告",
        "投资建议书"
      ],
      results: {
        efficiency: "85%",
        quality: "92%",
        time: "75%"
      }
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "团队协作",
      description: "提升团队协作效率，统一内容标准",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
      features: [
        "团队知识库",
        "协作文档编写",
        "内容审核流程",
        "版本控制管理",
        "模板标准化",
        "团队培训材料"
      ],
      results: {
        efficiency: "70%",
        quality: "88%",
        time: "60%"
      }
    }
  ]

  return (
    <section className="section-spacing bg-white">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="heading-section text-black">
            {t.useCases.title1}
            <span className="block text-black">{t.useCases.title2}</span>
          </h2>
          <p className="text-section text-gray-600 max-w-3xl mx-auto">
            {t.useCases.subtitle}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {useCases.map((useCase, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === index
                  ? 'bg-black text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-black border border-gray-200'
              }`}
            >
              {useCase.icon}
              <span>{useCase.title}</span>
            </button>
          ))}
        </div>

        {/* Active Use Case Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={useCases[activeTab].image} 
                alt={useCases[activeTab].title}
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl transform rotate-3"></div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-4xl font-bold text-black mb-6">
                {useCases[activeTab].title}
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                {useCases[activeTab].description}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {useCases[activeTab].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 bg-gray-50 rounded-xl p-4">
                  <Target className="w-5 h-5 text-gray-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Results */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
              <h4 className="text-xl font-bold text-black mb-6">{t.useCases.applicationResults}</h4>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">
                    +{useCases[activeTab].results.efficiency}
                  </div>
                  <div className="text-gray-600">{t.useCases.efficiencyImprovement}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">
                    {useCases[activeTab].results.quality}
                  </div>
                  <div className="text-gray-600">{t.useCases.qualitySatisfaction}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">
                    -{useCases[activeTab].results.time}
                  </div>
                  <div className="text-gray-600">{t.useCases.timeSaved}</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex space-x-4">
              <button className="btn-accent text-lg inline-flex items-center space-x-3">
                <span>{t.useCases.experienceScenario}</span>
                <ArrowRight className="w-6 h-6" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-medium hover:bg-white hover:text-primary transition-all duration-300 text-lg">
                {t.useCases.learnMore}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UseCases
