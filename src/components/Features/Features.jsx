import React, { useMemo } from 'react'
import { MessageSquare, Database, Users, Sparkles, Zap, Shield } from 'lucide-react'
import { translations } from '../../i18n/translations'
import { useApp } from '../../context/AppContext'
import { useStaggeredAnimation } from '../../hooks/useScrollAnimation'

const Features = () => {
  const { lang } = useApp()
  const t = useMemo(() => translations[lang], [lang])
  const { getRef, isAnimated } = useStaggeredAnimation(6, 150)
  const features = [
    { icon: <MessageSquare className="w-8 h-8" />, title: t.features.items[0]?.title || "智能交互与对话系统", description: t.features.items[0]?.desc || "长程上下文对话引擎", color: "from-blue-500 to-cyan-500" },
    { icon: <Database className="w-8 h-8" />, title: t.features.items[1]?.title || "知识智能与RAG", description: t.features.items[1]?.desc || "动态知识库管理", color: "from-purple-500 to-pink-500" },
    { icon: <Users className="w-8 h-8" />, title: t.features.items[2]?.title || "客户数据智能", description: t.features.items[2]?.desc || "端到端客户画像系统", color: "from-green-500 to-emerald-500" },
    { icon: <Sparkles className="w-8 h-8" />, title: t.features.items[3]?.title || "生成式AI", description: t.features.items[3]?.desc || "AI驱动的创意编排", color: "from-orange-500 to-red-500" },
    { icon: <Zap className="w-8 h-8" />, title: t.features.items[4]?.title || "企业自动化", description: t.features.items[4]?.desc || "低代码AI工作流", color: "from-indigo-500 to-purple-500" },
    { icon: <Shield className="w-8 h-8" />, title: t.features.items[5]?.title || "安全与合规", description: t.features.items[5]?.desc || "企业级安全治理体系", color: "from-gray-500 to-slate-500" }
  ]

  return (
    <section id="features" className="section-spacing bg-gray-50">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="heading-section">
            {t.features.header1}
            <span className="block text-black">{t.features.header2}</span>
          </h2>
          <p className="text-section max-w-3xl mx-auto">{t.features.desc}</p>
        </div>
        
        {/* Features Grid - 参考Wispr Flow的错位动画 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              ref={getRef(index)}
              className={`card-base card-hover card-glow group cursor-pointer transform transition-all duration-800 ${
                isAnimated(index) 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
            >
              {/* Icon with gradient background */}
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 floating-element`}>
                {feature.icon}
              </div>
              
              {/* Content */}
              <h3 className="heading-card group-hover:text-black transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-body">
                {feature.description}
              </p>
              
              {/* Learn More Link with glow effect */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <div className="flex items-center text-black font-medium hover:text-blue-600 transition-colors duration-300 relative">
                  <span className="text-sm">了解更多</span>
                  <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                  <div className="absolute inset-0 bg-blue-100 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        

      </div>
    </section>
  )
}

export default Features