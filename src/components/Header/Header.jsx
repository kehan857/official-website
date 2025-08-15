import React, { useMemo, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useApp } from '../../context/AppContext'
import { translations } from '../../i18n/translations'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { lang, setLang, user, setUser, setAuthModal } = useApp()
  const t = useMemo(() => translations[lang], [lang])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container-max">
        <div className="flex items-center justify-between h-20 px-6 sm:px-8 lg:px-12">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-gradient">{t.brand.name}</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-12 flex items-baseline space-x-10">
              <a href="#hero" className="text-text-secondary hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                {t.nav.home}
              </a>
              <a href="#features" className="text-text-secondary hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                {t.nav.features}
              </a>
              <a href="#testimonials" className="text-text-secondary hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                {t.nav.reviews}
              </a>
              <a href="#resources" className="text-text-secondary hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
                {t.nav.resources}
              </a>
              <div className="ml-6">
                <button onClick={()=>setLang(lang==='zh'?'en':'zh')} className="text-text-secondary hover:text-primary px-4 py-2 text-sm font-medium border border-gray-200 rounded-lg hover:border-accent transition-colors">
                  {lang==='zh'? t.lang.en : t.lang.zh}
                </button>
              </div>
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <>
                <span className="text-sm text-text-muted">{user.email}</span>
                <button onClick={()=>setUser(null)} className="btn-secondary">{t.auth.logout}</button>
              </>
            ) : (
              <>
                <button onClick={()=>setAuthModal({ open: true, mode: 'login' })} className="btn-secondary">{t.auth.login}</button>
                <button onClick={()=>setAuthModal({ open: true, mode: 'register' })} className="btn-primary">{t.auth.register}</button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-text-secondary hover:text-primary p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-6 space-y-2 sm:px-6 bg-white border-t border-gray-100">
              <a href="#hero" className="text-text-secondary hover:text-primary block px-3 py-3 text-base font-medium rounded-lg hover:bg-gray-50">
                {t.nav.home}
              </a>
              <a href="#features" className="text-text-secondary hover:text-primary block px-3 py-3 text-base font-medium rounded-lg hover:bg-gray-50">
                {t.nav.features}
              </a>
              <a href="#testimonials" className="text-text-secondary hover:text-primary block px-3 py-3 text-base font-medium rounded-lg hover:bg-gray-50">
                {t.nav.reviews}
              </a>
              <a href="#resources" className="text-text-secondary hover:text-primary block px-3 py-3 text-base font-medium rounded-lg hover:bg-gray-50">
                {t.nav.resources}
              </a>
              <button onClick={()=>setLang(lang==='zh'?'en':'zh')} className="text-text-secondary hover:text-primary block px-3 py-3 text-base font-medium border border-gray-200 rounded-lg hover:border-accent w-full text-left">
                {lang==='zh'? t.lang.en : t.lang.zh}
              </button>
              <div className="px-3 py-4 border-t border-gray-100">
                {user ? (
                  <button onClick={()=>setUser(null)} className="btn-primary w-full">{t.auth.logout}</button>
                ) : (
                  <div className="grid grid-cols-2 gap-4">
                    <button onClick={()=>setAuthModal({ open: true, mode: 'login' })} className="btn-secondary w-full">{t.auth.login}</button>
                    <button onClick={()=>setAuthModal({ open: true, mode: 'register' })} className="btn-primary w-full">{t.auth.register}</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header