import React, { useMemo } from 'react'
import { ArrowRight, TrendingUp, Users, Target, Shield } from 'lucide-react'
import { useApp } from '../../context/AppContext'
import { translations } from '../../i18n/translations'

const CaseStudies = () => {
  const { lang } = useApp()
  const t = useMemo(() => translations[lang], [lang])

  const caseStudies = [
    {
      id: 'sales-ai-ecosystem',
      title: '销售AI助手生态系统',
      subtitle: '科技服务企业 - 转化率提升300%',
      challenge: '传统销售过程效率低下，客户响应慢，无法实现个性化服务',
      solution: '部署基于五大核心能力的销售AI助手生态系统',
      capabilities: [
        '长程上下文对话引擎',
        '顾问式营销话术模型',
        '动态知识库与智能检索',
        '客户画像与超个性化服务',
        '自动化营销触达',
        '微信生态深度集成'
      ],
      results: [
        { metric: '转化率提升', value: '300%', icon: TrendingUp },
        { metric: '响应时间缩短', value: '80%', icon: Target },
        { metric: '客户满意度', value: '95%', icon: Users }
      ],
      quote: '"销售AI助手的顾问式对话让我们的转化率提升了3倍，客户画像系统实现了真正的千人千面服务。"',
      author: '张总 - 销售总监'
    },
    {
      id: 'video-creation-platform',
      title: 'AI视频创作平台',
      subtitle: '内容营销公司 - 生产效率提升500%',
      challenge: '大规模视频内容生产成本高，质量不稳定，存在平台风险',
      solution: '采用感知-决策-执行三层架构的AI视频创作平台',
      capabilities: [
        '智能素材分析与切片',
        'AI驱动的创意编排',
        '同质化检测风险管理',
        '批量视频智能合成',
        '多平台分发适配',
        '可持续运营保障'
      ],
      results: [
        { metric: '生产效率提升', value: '500%', icon: TrendingUp },
        { metric: '制作成本降低', value: '70%', icon: Target },
        { metric: '内容安全保障', value: '100%', icon: Shield }
      ],
      quote: '"AI视频创作平台的同质化风险管理让我们敢于大规模生产内容，业务安全得到完全保障。"',
      author: '李经理 - 市场营销负责人'
    },
    {
      id: 'enterprise-rag-system',
      title: '企业级RAG知识体系',
      subtitle: '电商企业 - 知识检索效率提升400%',
      challenge: '企业知识分散，员工查找信息困难，知识资产利用率低',
      solution: '构建动态知识库管理的企业级RAG系统',
      capabilities: [
        '动态知识库管理',
        '高精度信息检索',
        '个性化风格合成',
        '引用可追溯核验',
        '多源数据整合',
        '知识关联智能补充'
      ],
      results: [
        { metric: '检索效率提升', value: '400%', icon: TrendingUp },
        { metric: '知识利用率', value: '85%', icon: Target },
        { metric: '员工满意度', value: '92%', icon: Users }
      ],
      quote: '"企业级RAG系统让我们的知识资产活了起来，员工能快速获取准确信息，工作效率提升显著。"',
      author: '王主管 - 运营主管'
    }
  ]

  return (
    <section id="case-studies" className="section-spacing bg-gray-50">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="heading-section text-black">
            客户成功案例
          </h2>
          <p className="text-section text-gray-600 max-w-3xl mx-auto">
            深入了解熵变智元五大核心能力如何为不同行业客户创造可衡量的业务价值
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-24">
          {caseStudies.map((study, index) => (
            <div key={study.id} className={`grid lg:grid-cols-2 gap-16 items-center ${
              index % 2 === 1 ? 'lg:grid-cols-2 lg:flex-row-reverse' : ''
            }`}>
              {/* Content Side */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="bg-white rounded-3xl p-8 shadow-lg">
                  <div className="mb-6">
                    <h3 className="heading-card text-black mb-2">{study.title}</h3>
                    <p className="text-lg font-medium text-blue-600 mb-4">{study.subtitle}</p>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">挑战</h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">解决方案</h4>
                      <p className="text-gray-600 mb-4">{study.solution}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {study.capabilities.map((capability, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                            <span className="text-sm text-gray-700">{capability}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                    <p className="text-gray-700 italic mb-3">"{study.quote}"</p>
                    <p className="text-sm font-medium text-gray-900">— {study.author}</p>
                  </div>

                  {/* CTA */}
                  <button className="btn-secondary text-sm px-6 py-3 inline-flex items-center space-x-2">
                    <span>了解详情</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Results Side */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold text-black mb-8">关键成果指标</h4>
                  {study.results.map((result, i) => {
                    const IconComponent = result.icon
                    return (
                      <div key={i} className="bg-white rounded-2xl p-6 shadow-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <div className="text-3xl font-bold text-black">{result.value}</div>
                            <div className="text-gray-600">{result.metric}</div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <h3 className="text-2xl font-bold text-black mb-4">
            准备开启您的AI转型之旅？
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            联系我们的解决方案专家，了解熵变智元如何为您的企业创造可衡量的价值
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              免费咨询
            </button>
            <button className="btn-secondary">
              预约演示
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
