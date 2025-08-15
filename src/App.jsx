import React from 'react'
import Header from './components/Header/Header'
import HeroSection from './components/Hero/HeroSection'
import ProductShowcase from './components/ProductShowcase/ProductShowcase'
import Workflow from './components/Workflow/Workflow'
import Features from './components/Features/Features'
import UseCases from './components/UseCases/UseCases'

import Pricing from './components/Pricing/Pricing'
import Testimonials from './components/Testimonials/Testimonials'
import Resources from './components/Resources/Resources'
import Footer from './components/Footer/Footer'
import AuthModal from './components/Auth/AuthModal'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProductShowcase />
        <Workflow />
        <Features />
        <UseCases />

        <Pricing />
        <Testimonials />
        <Resources />
      </main>
      <Footer />
      <AuthModal />
    </div>
  )
}

export default App