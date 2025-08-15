import React, { useMemo } from 'react'
import { ArrowRight, BookOpen, Play, Download } from 'lucide-react'
import { translations } from '../../i18n/translations'
import { useApp } from '../../context/AppContext'

const Resources = () => {
  const { lang } = useApp()
  const t = useMemo(() => translations[lang], [lang])
  const resources = [
    { type: t.resources.list.guide.type, title: t.resources.list.guide.title, description: t.resources.list.guide.desc, image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20content%20writing%20guide%20book%20cover%20design%20clean%20professional%20blue%20theme&image_size=landscape_4_3", icon: <BookOpen className="w-5 h-5" />, readTime: t.resources.list.guide.read, category: t.resources.list.guide.category },
    { type: t.resources.list.video.type, title: t.resources.list.video.title, description: t.resources.list.video.desc, image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=video%20tutorial%20youmind%20interface%20modern%20clean%20design%20play%20button&image_size=landscape_4_3", icon: <Play className="w-5 h-5" />, readTime: t.resources.list.video.read, category: t.resources.list.video.category },
    { type: t.resources.list.template.type, title: t.resources.list.template.title, description: t.resources.list.template.desc, image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=blog%20post%20template%20design%20layout%20modern%20typography%20clean%20professional&image_size=landscape_4_3", icon: <Download className="w-5 h-5" />, readTime: t.resources.list.template.read, category: t.resources.list.template.category }
  ]

  const categories = [
    { name: t.resources.categories.all, count: 24, active: true },
    { name: t.resources.categories.tips, count: 8, active: false },
    { name: t.resources.categories.tutorials, count: 6, active: false },
    { name: t.resources.categories.templates, count: 10, active: false }
  ]

  return (
    <section id="resources" className="section-padding bg-white">
      <div className="container-content">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            {t.resources.header1}
            <span className="block text-accent mt-2">{t.resources.header2}</span>
          </h2>
          <p className="section-subtitle">{t.resources.desc}</p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-6 mb-20">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-8 py-4 rounded-2xl font-medium transition-all duration-200 text-lg ${
                category.active
                  ? 'bg-accent text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200'
              }`}
            >
              {category.name}
              <span className="ml-3 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>
        
        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          {resources.map((resource, index) => (
            <article key={index} className="group cursor-pointer">
              {/* Card */}
              <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-300">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={resource.image} 
                    alt={resource.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-6 left-6">
                    <span className={`inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium shadow-lg ${
                      resource.type === 'Guide' ? 'bg-blue-600 text-white' :
                      resource.type === 'Video' ? 'bg-red-600 text-white' :
                      'bg-green-600 text-white'
                    }`}>
                      {resource.icon}
                      <span className="ml-2">{resource.type}</span>
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between text-sm mb-4">
                    <span className="text-accent font-semibold bg-accent/10 px-3 py-1 rounded-lg">{resource.category}</span>
                    <span className="text-gray-500">{resource.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-accent transition-colors leading-tight">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center text-accent font-semibold group-hover:translate-x-1 transition-transform">
                    <span>{t.resources.list.readmore}</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* Newsletter Signup */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 border border-gray-200 shadow-sm">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t.resources.list.newsletterTitle}</h3>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">{t.resources.list.newsletterDesc}</p>
            
            <div className="flex flex-col sm:flex-row gap-6 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="输入您的邮箱地址"
                className="flex-1 px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-lg"
              />
              <button className="btn-accent text-lg whitespace-nowrap">{t.resources.list.subscribe}</button>
            </div>
            
            <p className="text-sm text-gray-500 mt-6">{t.resources.list.privacy}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resources