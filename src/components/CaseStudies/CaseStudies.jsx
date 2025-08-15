import React, { useMemo } from 'react'
import { ArrowRight, TrendingUp, Users, Clock, Award } from 'lucide-react'
import { translations } from '../../i18n/translations'
import { useApp } from '../../context/AppContext'

const CaseStudies = () => {
  const { lang } = useApp()
  const t = useMemo(() => translations[lang], [lang])
  
  const cases = [
    {
      company: "科技创新有限公司",
      industry: "科技行业",
      challenge: "内容产出效率低下，品牌传播缺乏一致性",
      solution: "部署熵变AI内容创作平台，建立统一的品牌内容体系",
      results: [
        { metric: "内容产出效率", value: "+180%", icon: <TrendingUp className="w-6 h-6" /> },
        { metric: "团队协作效率", value: "+120%", icon: <Users className="w-6 h-6" /> },
        { metric: "内容制作时间", value: "-70%", icon: <Clock className="w-6 h-6" /> },
        { metric: "品牌一致性", value: "+95%", icon: <Award className="w-6 h-6" /> }
      ],
      testimonial: "熵变AI让我们的内容团队效率提升了3倍，品牌内容质量和一致性都有显著提升。现在我们可以专注于更有创意的策略工作。",
      author: "张总监",
      position: "品牌营销总监",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=200&h=100&fit=crop"
    },
    {
      company: "教育科技集团",
      industry: "教育培训",
      challenge: "课程内容制作周期长，个性化程度不够",
      solution: "利用熵变AI快速生成个性化教学内容和评估材料",
      results: [
        { metric: "课程开发速度", value: "+250%", icon: <TrendingUp className="w-6 h-6" /> },
        { metric: "学员满意度", value: "+40%", icon: <Users className="w-6 h-6" /> },
        { metric: "内容制作成本", value: "-60%", icon: <Clock className="w-6 h-6" /> },
        { metric: "课程完成率", value: "+35%", icon: <Award className="w-6 h-6" /> }
      ],
      testimonial: "AI帮助我们快速创建个性化的学习内容，学员的参与度和完成率都有大幅提升。这是教育行业的一次革命性改变。",
      author: "李校长",
      position: "教学副校长",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop",
      logo: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=200&h=100&fit=crop"
    },
    {
      company: "金融服务公司",
      industry: "金融服务",
      challenge: "报告制作工作量大，数据分析深度不够",
      solution: "使用熵变AI自动生成分析报告和投资建议",
      results: [
        { metric: "报告生成速度", value: "+300%", icon: <TrendingUp className="w-6 h-6" /> },
        { metric: "分析准确度", value: "+85%", icon: <Users className="w-6 h-6" /> },
        { metric: "人力成本", value: "-50%", icon: <Clock className="w-6 h-6" /> },
        { metric: "客户满意度", value: "+45%", icon: <Award className="w-6 h-6" /> }
      ],
      testimonial: "AI生成的分析报告不仅速度快，质量也很高。我们的分析师现在可以将更多时间投入到战略思考和客户沟通上。",
      author: "王经理",
      position: "投资研究经理",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      logo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&h=100&fit=crop"
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-content">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            客户案例
            <span className="block text-primary mt-4">真实案例见证AI创作力量</span>
          </h2>
          <p className="section-subtitle">
            看看各行业的企业如何通过熵变AI实现内容创作的数字化转型
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-24">
          {cases.map((caseStudy, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative z-10">
                  <img 
                    src={caseStudy.image} 
                    alt={caseStudy.company}
                    className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                  />
                  {/* Company Logo Overlay */}
                  <div className="absolute bottom-6 left-6 bg-white rounded-2xl p-4 shadow-lg">
                    <img 
                      src={caseStudy.logo} 
                      alt={`${caseStudy.company} logo`}
                      className="h-12 w-auto"
                    />
                  </div>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl transform rotate-2"></div>
              </div>

              {/* Content */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                {/* Company Info */}
                <div>
                  <div className="text-sm text-primary font-medium mb-2">{caseStudy.industry}</div>
                  <h3 className="text-3xl font-bold text-primary mb-4">{caseStudy.company}</h3>
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">挑战</h4>
                    <p className="text-gray-600 leading-relaxed">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">解决方案</h4>
                    <p className="text-gray-600 leading-relaxed">{caseStudy.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-2 gap-4">
                  {caseStudy.results.map((result, i) => (
                    <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="text-primary">
                          {result.icon}
                        </div>
                        <div className="text-2xl font-bold text-primary">{result.value}</div>
                      </div>
                      <div className="text-sm text-gray-600">{result.metric}</div>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
                  <blockquote className="text-lg text-gray-700 leading-relaxed mb-6">
                    "{caseStudy.testimonial}"
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-gray-700 rounded-full flex items-center justify-center text-white font-bold">
                      {caseStudy.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{caseStudy.author}</div>
                      <div className="text-gray-600">{caseStudy.position}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-lg border border-gray-200">
            <h3 className="text-3xl font-bold text-primary mb-6">成为下一个成功案例</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              加入我们不断壮大的客户群体，体验AI驱动的内容创作革命
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn-primary text-lg inline-flex items-center space-x-3">
                <span>联系我们</span>
                <ArrowRight className="w-6 h-6" />
              </button>
              <button className="btn-secondary text-lg">
                下载案例详情
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
