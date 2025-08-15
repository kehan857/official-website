import React, { useMemo } from 'react'
import { ArrowRight, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import { translations } from '../../i18n/translations'
import { useApp } from '../../context/AppContext'

const Footer = () => {
  const { lang } = useApp()
  const t = useMemo(() => translations[lang], [lang])
  const footerLinks = {
    product: [
      { name: t.footer.links.features, href: "#features" },
      { name: t.footer.links.pricing, href: "#pricing" },
      { name: t.footer.links.templates, href: "#templates" },
      { name: t.footer.links.integrations, href: "#integrations" }
    ],
    company: [
      { name: t.footer.links.about, href: "#about" },
      { name: t.footer.links.careers, href: "#careers" },
      { name: t.footer.links.press, href: "#press" },
      { name: t.footer.links.contact, href: "#contact" }
    ],
    resources: [
      { name: t.footer.links.blog, href: "#blog" },
      { name: t.footer.links.help, href: "#help" },
      { name: t.footer.links.community, href: "#community" },
      { name: t.footer.links.api, href: "#api" }
    ],
    legal: [
      { name: t.footer.links.privacy, href: "#privacy" },
      { name: t.footer.links.terms, href: "#terms" },
      { name: t.footer.links.cookies, href: "#cookies" },
      { name: t.footer.links.gdpr, href: "#gdpr" }
    ]
  }

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", name: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", name: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", name: "LinkedIn" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", name: "Instagram" }
  ]

  return (
    <footer className="bg-primary text-white">
      {/* Main CTA Section */}
      <div className="bg-gradient-to-r from-primary to-secondary">
        <div className="container-max section-padding">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t.footer.topTitle1}
              <span className="block text-accent">{t.footer.topTitle2}</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">{t.footer.topDesc}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center group shadow-sm hover:shadow-md">
                {t.footer.topPrimary}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">{t.footer.topSecondary}</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Links */}
      <div className="container-max">
        <div className="py-20 px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <span className="text-2xl font-bold text-accent">{t.brand.name}</span>
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed">{t.hero.subtitle}</p>
              
              {/* Contact Info */}
              <div className="space-y-4 text-sm text-gray-300">
                <div className="flex items-center space-x-3"><Mail className="w-4 h-4" /><span>{t.footer.contact.email}</span></div>
                <div className="flex items-center space-x-3"><Phone className="w-4 h-4" /><span>{t.footer.contact.phone}</span></div>
                <div className="flex items-center space-x-3"><MapPin className="w-4 h-4" /><span>{t.footer.contact.address}</span></div>
              </div>
            </div>
            
            {/* Product Links */}
            <div>
              <h3 className="font-semibold text-white mb-6">{t.footer.product}</h3>
              <ul className="space-y-4">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-300 hover:text-accent transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Company Links */}
            <div>
              <h3 className="font-semibold text-white mb-6">{t.footer.company}</h3>
              <ul className="space-y-4">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-300 hover:text-accent transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Resources Links */}
            <div>
              <h3 className="font-semibold text-white mb-6">{t.footer.resources}</h3>
              <ul className="space-y-4">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-300 hover:text-accent transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Legal Links */}
            <div>
              <h3 className="font-semibold text-white mb-6">{t.footer.legal}</h3>
              <ul className="space-y-4">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-300 hover:text-accent transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-gray-700 mt-16 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-300 text-sm mb-4 md:mb-0">
                © 2024 {t.brand.name}. {t.footer.copyright}
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 hover:bg-accent hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer