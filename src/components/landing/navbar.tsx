'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, Sparkles } from 'lucide-react'
import { GlassCard } from '@/components/ui/glass-card'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'py-2' : 'py-4'
    }`}>
      <div className="container mx-auto px-4">
        <GlassCard className={`transition-all duration-300 ${
          isScrolled ? 'backdrop-blur-xl bg-white/80 dark:bg-slate-900/80' : 'backdrop-blur-sm bg-white/60 dark:bg-slate-900/60'
        }`}>
          <div className="flex items-center justify-between h-16 px-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                ADmyBRAND AI
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
                Features
              </Link>
              <Link href="#pricing" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="#testimonials" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
                Testimonials
              </Link>
              <Link href="#blog" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
                Resources
              </Link>
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Start Free Trial
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden border-t border-slate-200 dark:border-slate-700 px-6 py-4 space-y-4">
              <Link href="#features" className="block text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                Features
              </Link>
              <Link href="#pricing" className="block text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                Pricing
              </Link>
              <Link href="#testimonials" className="block text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                Testimonials
              </Link>
              <Link href="#blog" className="block text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                Resources
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
                <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600">
                  Start Free Trial
                </Button>
              </div>
            </div>
          )}
        </GlassCard>
      </div>
    </nav>
  )
}
