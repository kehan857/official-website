import React from 'react'
import Header from './components/Header/Header'
import HeroSection from './components/Hero/HeroSection'
import ProductShowcase from './components/ProductShowcase/ProductShowcase'
import Workflow from './components/Workflow/Workflow'
import Features from './components/Features/Features'
import UseCases from './components/UseCases/UseCases'
import CaseStudies from './components/CaseStudies/CaseStudies'
import Pricing from './components/Pricing/Pricing'
import Footer from './components/Footer/Footer'
import AuthModal from './components/Auth/AuthModal'
import LeadForm from './components/LeadForm/LeadForm'
import { useApp } from './context/AppContext'

function App() {
  const { leadForm, setLeadForm } = useApp()

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProductShowcase />
        <Workflow />
        <Features />
        <UseCases />
        <CaseStudies />
        <Pricing />
      </main>
      <Footer />
      <AuthModal />
      <LeadForm 
        isOpen={leadForm.open}
        onClose={() => setLeadForm({ ...leadForm, open: false })}
        title={leadForm.title}
        subtitle={leadForm.subtitle}
      />
    </div>
  )
}

export default App