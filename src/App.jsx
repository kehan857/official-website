import React from 'react'
import Header from './components/Header/Header'
import ProductShowcase from './components/ProductShowcase/ProductShowcase'
import Workflow from './components/Workflow/Workflow'
import Features from './components/Features/Features'
import UseCases from './components/UseCases/UseCases'
import CaseStudies from './components/CaseStudies/CaseStudies'
import Pricing from './components/Pricing/Pricing'
import Resources from './components/Resources/Resources'
import Footer from './components/Footer/Footer'
import AuthModal from './components/Auth/AuthModal'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ProductShowcase />
        <Workflow />
        <Features />
        <UseCases />
        <CaseStudies />
        <Pricing />
        <Resources />
      </main>
      <Footer />
      <AuthModal />
    </div>
  )
}

export default App