'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Play, ArrowRight, Sparkles, Zap, Target } from 'lucide-react'
import { GlassCard } from '@/components/ui/glass-card'
import { AnimatedCounter } from '@/components/ui/animated-counter'

export function HeroSection() {
  const [email, setEmail] = useState('')

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-animate>
            <Badge variant="secondary" className="mb-6 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 border-0">
              <Sparkles className="w-4 h-4 mr-2" />
              New: AI-Powered Campaign Optimization
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-purple-800 to-pink-800 dark:from-white dark:via-purple-200 dark:to-pink-200 bg-clip-text text-transparent leading-tight">
              Transform Your Marketing with{' '}
              <span className="relative">
                AI Magic
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-lg rounded-lg" />
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Create stunning campaigns, optimize performance, and scale your brand with our comprehensive AI-powered marketing suite.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <div className="flex w-full sm:w-auto max-w-md">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-r-none border-r-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm"
                />
                <Button className="rounded-l-none bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <Button variant="outline" size="lg" className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center">
                <Zap className="w-4 h-4 mr-2 text-green-500" />
                No credit card required
              </div>
              <div className="flex items-center">
                <Target className="w-4 h-4 mr-2 text-blue-500" />
                14-day free trial
              </div>
              <div className="flex items-center">
                <Sparkles className="w-4 h-4 mr-2 text-purple-500" />
                Cancel anytime
              </div>
            </div>
          </div>

          {/* Hero Image/Demo */}
          <div className="relative" data-animate>
            <GlassCard className="p-8 bg-gradient-to-br from-white/60 to-white/30 dark:from-slate-800/60 dark:to-slate-900/30">
              <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10" />
                <div className="text-center z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 font-medium">
                    Watch ADmyBRAND AI in Action
                  </p>
                </div>
                
                {/* Floating UI Elements */}
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs font-medium">AI Optimizing</span>
                  </div>
                </div>
                
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="text-xs">
                    <div className="font-medium">Conversion Rate</div>
                    <div className="text-green-600 font-bold">+247%</div>
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="text-xs">
                    <div className="font-medium">Campaigns Active</div>
                    <div className="text-purple-600 font-bold">
                      <AnimatedCounter end={1247} duration={2000} />
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16" data-animate>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                <AnimatedCounter end={50000} duration={2000} suffix="+" />
              </div>
              <div className="text-slate-600 dark:text-slate-400">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                <AnimatedCounter end={2.5} duration={2000} suffix="M+" decimals={1} />
              </div>
              <div className="text-slate-600 dark:text-slate-400">Campaigns Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                <AnimatedCounter end={98} duration={2000} suffix="%" />
              </div>
              <div className="text-slate-600 dark:text-slate-400">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                <AnimatedCounter end={150} duration={2000} suffix="+" />
              </div>
              <div className="text-slate-600 dark:text-slate-400">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
