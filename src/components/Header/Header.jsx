import React, { useMemo, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useApp } from '../../context/AppContext'
import { translations } from '../../i18n/translations'
import Logo from '../Logo/Logo'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { lang, setLang, user, setUser, setAuthModal } = useApp()
  const t = useMemo(() => translations[lang], [lang])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/90">
      <div className="container-section">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Logo className="h-10 w-auto" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="flex items-center space-x-12">
              <a href="#hero" className="text-gray-600 hover:text-black transition-colors duration-200" style={{fontSize: 'var(--text-base)'}}>
                {t.nav.home}
              </a>
              <a href="#features" className="text-gray-600 hover:text-black transition-colors duration-200" style={{fontSize: 'var(--text-base)'}}>
                {t.nav.features}
              </a>
              <a href="#useCases" className="text-gray-600 hover:text-black transition-colors duration-200" style={{fontSize: 'var(--text-base)'}}>
                {t.nav.solutions}
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-black transition-colors duration-200" style={{fontSize: 'var(--text-base)'}}>
                {t.nav.pricing}
              </a>
              <button 
                onClick={()=>setLang(lang==='zh'?'en':'zh')} 
                className="text-gray-600 hover:text-black px-3 py-1 border border-gray-200 rounded-full transition-colors duration-200"
                style={{fontSize: 'var(--text-sm)'}}
              >
                {lang==='zh'? t.lang.en : t.lang.zh}
              </button>
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <>
                <span className="text-gray-600" style={{fontSize: 'var(--text-sm)'}}>{user.email}</span>
                <button onClick={()=>setUser(null)} className="btn-secondary">{t.auth.logout}</button>
              </>
            ) : (
              <>
                <button onClick={()=>setAuthModal({ open: true, mode: 'login' })} className="text-gray-600 hover:text-black transition-colors duration-200" style={{fontSize: 'var(--text-base)'}}>
                  {t.auth.login}
                </button>
                <button onClick={()=>setAuthModal({ open: true, mode: 'register' })} className="btn-primary">
                  {t.auth.register}
                </button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-black p-2 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#hero" className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium">
                {t.nav.home}
              </a>
              <a href="#features" className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium">
                {t.nav.features}
              </a>
              <a href="#useCases" className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium">
                {t.nav.solutions}
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium">
                {t.nav.pricing}
              </a>
              <button onClick={()=>setLang(lang==='zh'?'en':'zh')} className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium border rounded-lg">
                {lang==='zh'? t.lang.en : t.lang.zh}
              </button>
              <div className="px-3 py-2">
                {user ? (
                  <button onClick={()=>setUser(null)} className="btn-primary w-full">{t.auth.logout}</button>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
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