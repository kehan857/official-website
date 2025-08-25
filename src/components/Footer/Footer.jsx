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
    <footer className="bg-white text-black border-t border-gray-200">
      {/* Main CTA Section */}
      <div className="section-spacing bg-gray-50">
        <div className="container-section">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              {t.footer.topTitle1}
              <span className="block text-black mt-2">{t.footer.topTitle2}</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">{t.footer.topDesc}</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn-accent text-lg inline-flex items-center justify-center group">
                {t.footer.topPrimary}
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200 text-lg">{t.footer.topSecondary}</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Links */}
      <div className="container-section">
        <div className="section-spacing border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <span className="text-3xl font-bold text-black">{t.brand.name}</span>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-4 text-gray-600">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-gray-600" />
                  </div>
                  <span>{t.footer.contact.email}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-gray-600" />
                  </div>
                  <span>{t.footer.contact.phone}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-gray-600" />
                  </div>
                  <span>{t.footer.contact.address}</span>
                </div>
              </div>
            </div>
            
            {/* Product Links */}
            <div>
              <h3 className="font-bold text-black mb-6 text-lg">{t.footer.product}</h3>
              <ul className="space-y-4">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-600 hover:text-black transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Company Links */}
            <div>
              <h3 className="font-bold text-black mb-6 text-lg">{t.footer.company}</h3>
              <ul className="space-y-4">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-600 hover:text-black transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Resources Links */}
            <div>
              <h3 className="font-bold text-black mb-6 text-lg">{t.footer.resources}</h3>
              <ul className="space-y-4">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-600 hover:text-black transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Legal Links */}
            <div>
              <h3 className="font-bold text-black mb-6 text-lg">{t.footer.legal}</h3>
              <ul className="space-y-4">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-600 hover:text-black transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-500">{t.footer.copyright}</div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:text-black hover:bg-gray-200 transition-all duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer