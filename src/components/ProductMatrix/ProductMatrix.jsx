import React, { useMemo, useState } from 'react'
import { Building2, MessageSquare, BarChart3, Users } from 'lucide-react'
import { useApp } from '../../context/AppContext'
import { translations } from '../../i18n/translations'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const ProductMatrix = () => {
  const { lang, setLeadForm } = useApp()
  const t = useMemo(() => translations[lang], [lang])
  const [titleRef, titleVisible] = useScrollAnimation({ delay: 200 })
  const [activeProduct, setActiveProduct] = useState('ai-service')

  const products = [
    {
      id: 'ai-service',
      title: 'AI客服系统',
      icon: <Building2 className="w-6 h-6" />,
      isActive: true
    },
    {
      id: 'smart-marketing',
      title: '智能营销平台',
      icon: <MessageSquare className="w-6 h-6" />,
      isActive: false
    },
    {
      id: 'data-analysis',
      title: '数据分析工具',
      icon: <BarChart3 className="w-6 h-6" />,
      isActive: false
    },
    {
      id: 'enterprise-management',
      title: '企业管理系统',
      icon: <Users className="w-6 h-6" />,
      isActive: false
    }
  ]

  return (
    <section className="section-spacing bg-gray-50">
      <div className="container-section">
        {/* 标题区域 */}
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI智能营销
            <span className="block text-blue-600">产品应用矩阵</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            覆盖客服、营销、分析、管理等多个场景，为企业提供全方位的AI智能化解决方案
          </p>
        </div>

        {/* 产品标签矩阵 */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-16">
          {products.map((product, index) => (
            <button
              key={product.id}
              onClick={() => setActiveProduct(product.id)}
              className={`
                flex items-center space-x-3 px-8 py-4 rounded-full transition-all duration-300 border-2
                ${activeProduct === product.id 
                  ? 'bg-black text-white border-black shadow-lg scale-105' 
                  : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }
              `}
            >
              <div className={`
                ${activeProduct === product.id ? 'text-white' : 'text-gray-500'}
              `}>
                {product.icon}
              </div>
              <span className="font-medium text-lg">{product.title}</span>
            </button>
          ))}
        </div>

        {/* 产品详情展示区域 */}
        <div className="bg-white rounded-3xl p-12 shadow-lg border border-gray-100">
          {/* AI客服系统 */}
          {activeProduct === 'ai-service' && (
            <div className="animate-fadeIn">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">AI客服系统</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    智能客户服务解决方案，通过AI技术提升客户服务效率和满意度，实现24/7全天候智能响应。
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">智能对话</h4>
                      <p className="text-gray-600 text-sm">自然语言理解与多轮对话</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">多渠道集成</h4>
                      <p className="text-gray-600 text-sm">支持网站、微信、APP等渠道</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">知识库检索</h4>
                      <p className="text-gray-600 text-sm">智能知识匹配与推荐</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">情绪识别</h4>
                      <p className="text-gray-600 text-sm">客户情绪分析与处理</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setLeadForm({ 
                      open: true, 
                      title: "体验AI客服系统", 
                      subtitle: "了解智能客服如何提升您的服务效率" 
                    })}
                    className="btn-primary"
                  >
                    立即体验
                  </button>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                    <div className="bg-white rounded-xl p-6 shadow-lg mb-4">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="font-medium">AI客服在线</span>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-blue-500 text-white p-3 rounded-lg rounded-bl-none">
                          您好！我是AI智能客服，有什么可以帮助您的吗？
                        </div>
                        <div className="bg-gray-100 p-3 rounded-lg rounded-br-none">
                          我想了解你们的营销解决方案
                        </div>
                        <div className="bg-blue-500 text-white p-3 rounded-lg rounded-bl-none">
                          我为您推荐几个热门的营销解决方案...
                        </div>
                      </div>
                    </div>
                    <div className="text-center text-gray-500 text-sm">
                      平均响应时间 < 1秒 | 问题解决率 98%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 智能营销平台 */}
          {activeProduct === 'smart-marketing' && (
            <div className="animate-fadeIn">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">智能营销平台</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    AI驱动的精准营销解决方案，通过智能算法实现个性化客户触达和营销转化优化。
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">客户画像</h4>
                      <p className="text-gray-600 text-sm">智能用户分析与标签管理</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">内容生成</h4>
                      <p className="text-gray-600 text-sm">AI营销文案与素材创作</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">精准投放</h4>
                      <p className="text-gray-600 text-sm">智能投放策略与优化</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">效果监控</h4>
                      <p className="text-gray-600 text-sm">实时转化数据追踪</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setLeadForm({ 
                      open: true, 
                      title: "体验智能营销平台", 
                      subtitle: "了解AI如何提升您的营销效果" 
                    })}
                    className="btn-primary"
                  >
                    立即体验
                  </button>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
                    <div className="space-y-4">
                      <div className="bg-white rounded-xl p-4 shadow-lg">
                        <h4 className="font-semibold mb-2">营销活动分析</h4>
                        <div className="flex items-center justify-between text-sm">
                          <span>转化率</span>
                          <span className="text-green-600 font-semibold">+35%</span>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-lg">
                        <h4 className="font-semibold mb-2">客户画像</h4>
                        <div className="flex space-x-2">
                          <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs">高价值客户</span>
                          <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs">活跃用户</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 数据分析工具 */}
          {activeProduct === 'data-analysis' && (
            <div className="animate-fadeIn">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">数据分析工具</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    智能数据分析与洞察工具，为企业业务决策提供科学的数据支撑和预测分析。
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">多维可视化</h4>
                      <p className="text-gray-600 text-sm">智能图表与仪表盘展示</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">趋势预测</h4>
                      <p className="text-gray-600 text-sm">AI算法驱动的趋势分析</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">异常检测</h4>
                      <p className="text-gray-600 text-sm">实时异常监控与告警</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">报表生成</h4>
                      <p className="text-gray-600 text-sm">自动化报表与洞察总结</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setLeadForm({ 
                      open: true, 
                      title: "体验数据分析工具", 
                      subtitle: "了解AI如何助力您的数据分析" 
                    })}
                    className="btn-primary"
                  >
                    立即体验
                  </button>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <h4 className="font-semibold mb-4">实时数据仪表盘</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span>销售转化率</span>
                          <div className="w-24 h-2 bg-gray-200 rounded-full">
                            <div className="w-16 h-2 bg-green-500 rounded-full"></div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>客户满意度</span>
                          <div className="w-24 h-2 bg-gray-200 rounded-full">
                            <div className="w-20 h-2 bg-blue-500 rounded-full"></div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>业务增长率</span>
                          <div className="w-24 h-2 bg-gray-200 rounded-full">
                            <div className="w-18 h-2 bg-purple-500 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 企业管理系统 */}
          {activeProduct === 'enterprise-management' && (
            <div className="animate-fadeIn">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">企业管理系统</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    AI驱动的企业管理解决方案，通过智能化工具提升企业运营效率和管理水平。
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">流程优化</h4>
                      <p className="text-gray-600 text-sm">智能工作流程设计与优化</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">绩效分析</h4>
                      <p className="text-gray-600 text-sm">员工绩效智能评估</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">风险预警</h4>
                      <p className="text-gray-600 text-sm">业务风险智能识别</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">资源配置</h4>
                      <p className="text-gray-600 text-sm">智能资源分配与调度</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setLeadForm({ 
                      open: true, 
                      title: "体验企业管理系统", 
                      subtitle: "了解AI如何优化您的企业管理" 
                    })}
                    className="btn-primary"
                  >
                    立即体验
                  </button>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8">
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <h4 className="font-semibold mb-4">管理控制台</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <span>团队效率</span>
                          <span className="text-green-600 font-semibold">优秀</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <span>项目进度</span>
                          <span className="text-blue-600 font-semibold">正常</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <span>风险等级</span>
                          <span className="text-yellow-600 font-semibold">低</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ProductMatrix
