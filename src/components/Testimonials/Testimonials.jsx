import React, { useMemo } from 'react'
import { Star, Quote } from 'lucide-react'
import { translations } from '../../i18n/translations'
import { useApp } from '../../context/AppContext'

const Testimonials = () => {
  const { lang } = useApp()
  const t = useMemo(() => translations[lang], [lang])
  const testimonials = t.testimonials.items
  const stats = [
    { number: "10,000+", label: t.testimonials.stats.s1 },
    { number: "98%", label: t.testimonials.stats.s2 },
    { number: "99%", label: t.testimonials.stats.s3 },
    { number: "24/7", label: t.testimonials.stats.s4 }
  ]

  return (
    <section id="testimonials" className="section-spacing bg-gray-50">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="heading-section">
            {t.testimonials.header1}
            <span className="block text-black">{t.testimonials.header2}</span>
          </h2>
          <p className="text-section max-w-3xl mx-auto">{t.testimonials.subtitle}</p>
        </div>
        
        {/* Stats Section */}
        <div className="mb-24">
          <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium text-lg">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-10 mb-24">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-3xl p-10 shadow-sm border border-gray-200 relative group hover:shadow-lg transition-all duration-300">
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 text-gray-200 group-hover:text-primary/20 transition-colors duration-300">
                <Quote className="w-10 h-10" />
              </div>
              
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center space-x-5">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xl font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-lg">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.role} · {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust Indicators */}
        <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-200">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">{t.testimonials.trustTitle}</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t.testimonials.trustDesc}</p>
          </div>
          
          {/* Company Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center">
            {[
              { name: "中国移动", bg: "from-red-500 to-pink-500" },
              { name: "华为", bg: "from-blue-500 to-indigo-500" },
              { name: "阿里巴巴", bg: "from-orange-500 to-red-500" },
              { name: "腾讯", bg: "from-green-500 to-blue-500" }
            ].map((company, i) => (
              <div key={i} className={`bg-gradient-to-r ${company.bg} h-16 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                <span className="text-white font-bold text-lg">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials