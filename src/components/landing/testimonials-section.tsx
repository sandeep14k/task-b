'use client'

import { useState, useEffect } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { GlassCard } from '@/components/ui/glass-card'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Marketing Director',
    company: 'TechFlow Inc.',
    image: '/professional-woman-smiling.png',
    rating: 5,
    content: 'ADmyBRAND AI has completely transformed our marketing workflow. We\'ve seen a 300% increase in campaign performance and saved 20 hours per week on content creation.',
    results: '+300% Campaign Performance'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Founder & CEO',
    company: 'GrowthLab',
    image: '/professional-bearded-man.png',
    rating: 5,
    content: 'The AI-powered insights are incredible. We can now predict which campaigns will succeed before we even launch them. It\'s like having a crystal ball for marketing.',
    results: '95% Prediction Accuracy'
  },
  {
    name: 'Emily Watson',
    role: 'Digital Marketing Manager',
    company: 'BrandBoost',
    image: '/professional-woman-glasses.png',
    rating: 5,
    content: 'I was skeptical about AI marketing tools, but ADmyBRAND proved me wrong. The quality of generated content is indistinguishable from our best copywriters.',
    results: '50% Faster Content Creation'
  },
  {
    name: 'David Kim',
    role: 'VP of Marketing',
    company: 'ScaleUp Solutions',
    image: '/professional-asian-man.png',
    rating: 5,
    content: 'The ROI tracking and optimization features are game-changing. We\'ve reduced our customer acquisition cost by 40% while doubling our conversion rates.',
    results: '-40% Acquisition Cost'
  },
  {
    name: 'Lisa Thompson',
    role: 'Creative Director',
    company: 'Pixel Perfect',
    image: '/colorful-hair-woman.png',
    rating: 5,
    content: 'As a creative, I was worried AI would replace human creativity. Instead, it amplifies it. I can now focus on strategy while AI handles the execution.',
    results: '10x Creative Output'
  }
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 via-transparent to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-animate>
          <Badge variant="secondary" className="mb-4 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 border-0">
            Testimonials
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
            Loved by Marketing Teams Worldwide
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Join thousands of marketers who have transformed their campaigns with ADmyBRAND AI.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto" data-animate>
          <GlassCard className="p-8 md:p-12 bg-white/70 dark:bg-slate-800/70">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-slate-700 shadow-lg"
                  />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-lg md:text-xl text-slate-700 dark:text-slate-200 mb-6 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-slate-600 dark:text-slate-300">
                      {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                    </div>
                  </div>

                  <Badge variant="secondary" className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/50 dark:to-emerald-900/50 text-green-700 dark:text-green-300 border-0">
                    {testimonials[currentIndex].results}
                  </Badge>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsAutoPlaying(false)
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 scale-125'
                      : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center" data-animate>
          <p className="text-slate-600 dark:text-slate-300 mb-8">
            Trusted by leading companies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['TechFlow', 'GrowthLab', 'BrandBoost', 'ScaleUp', 'PixelPerfect'].map((company, index) => (
              <div key={index} className="text-2xl font-bold text-slate-400 dark:text-slate-500">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
