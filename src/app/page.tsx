'use client'

import { useEffect } from 'react'
import { HeroSection } from '@/components/landing/hero-section'
import { FeaturesSection } from '@/components/landing/features-section'
import { PricingSection } from '@/components/landing/pricing-section'
import { TestimonialsSection } from '@/components/landing/testimonials-section'
import { FAQSection } from '@/components/landing/faq-section'
import { BlogSection } from '@/components/landing/blog-section'
import { Footer } from '@/components/landing/footer'
import { Navbar } from '@/components/landing/navbar'

export default function LandingPage() {
  useEffect(() => {
    // Smooth scroll behavior
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-animate]')
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0
        
        if (isVisible) {
          element.classList.add('animate-in')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  )
}
