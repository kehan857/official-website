import React, { useMemo } from 'react'
import { ArrowRight } from 'lucide-react'
import { useApp } from '../../context/AppContext'
import { translations } from '../../i18n/translations'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const HeroWithBanner = () => {
  const { lang, setLeadForm } = useApp()
  const t = useMemo(() => translations[lang], [lang])
  const [titleRef, titleVisible] = useScrollAnimation({ delay: 200 })
  const [subtitleRef, subtitleVisible] = useScrollAnimation({ delay: 400 })
  const [ctaRef, ctaVisible] = useScrollAnimation({ delay: 600 })
  
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Banner背景图片 */}
      <div className="absolute inset-0 w-full h-full">
        {/* 响应式背景图片 */}
        <picture>
          <source 
            media="(min-width: 1920px)" 
            srcSet="/images/hero-banner-2560.webp 2560w, /images/hero-banner-1920.webp 1920w"
            sizes="100vw"
          />
          <source 
            media="(min-width: 1024px)" 
            srcSet="/images/hero-banner-1920.webp 1920w, /images/hero-banner-1024.webp 1024w"
            sizes="100vw"
          />
          <source 
            media="(min-width: 768px)" 
            srcSet="/images/hero-banner-1024.webp 1024w, /images/hero-banner-768.webp 768w"
            sizes="100vw"
          />
          <img 
            src="/images/hero-banner-1920.jpg" 
            alt="熵变智元AI智能营销解决方案"
            className="w-full h-full object-cover object-center"
            loading="eager"
            width="1920"
            height="800"
          />
        </picture>
        
        {/* 渐变遮罩层 - 确保文字可读性 */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>
      </div>
      
      {/* Hero内容 */}
      <div className="relative z-10 section-spacing-lg">
        <div className="container-hero text-center">
          {/* 主标题 */}
          <h1 
            ref={titleRef}
            className={`heading-hero text-white drop-shadow-lg transition-all duration-1000 ${
              titleVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
            }`}
          >
            <span className="inline-block">{t.hero.title1}</span>
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t.hero.title2}
            </span>
          </h1>
          
          {/* 副标题 */}
          <p 
            ref={subtitleRef}
            className={`text-hero text-white/90 max-w-3xl mx-auto drop-shadow transition-all duration-1000 ${
              subtitleVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
            }`}
          >
            {t.hero.subtitle}
          </p>
          
          {/* CTA按钮 */}
          <div 
            ref={ctaRef}
            className={`mb-24 transition-all duration-1000 ${
              ctaVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
            }`}
          >
            <button 
              onClick={() => setLeadForm({ 
                open: true, 
                title: "申请免费试用", 
                subtitle: "填写信息，立即获取产品试用权限" 
              })} 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-5 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/20"
            >
              <span className="flex items-center space-x-2">
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="w-5 h-5" />
              </span>
            </button>
          </div>
          
          {/* 统计数据 - 半透明卡片 */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 text-center border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">{t.hero.stats1.value}</div>
              <div className="text-white/80">{t.hero.stats1.label}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 text-center border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">{t.hero.stats2.value}</div>
              <div className="text-white/80">{t.hero.stats2.label}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 text-center border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">{t.hero.stats3.value}</div>
              <div className="text-white/80">{t.hero.stats3.label}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroWithBanner
