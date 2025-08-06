'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { Check, Sparkles, Crown, Rocket } from 'lucide-react'
import { GlassCard } from '@/components/ui/glass-card'
import { PricingCalculator } from '@/components/ui/pricing-calculator'

const plans = [
  {
    name: 'Starter',
    icon: Sparkles,
    description: 'Perfect for small businesses and startups',
    monthlyPrice: 29,
    yearlyPrice: 290,
    features: [
      '5 AI-generated campaigns per month',
      'Basic analytics and reporting',
      '2 team members',
      'Email support',
      '10GB storage',
      'Standard templates'
    ],
    popular: false,
    color: 'from-blue-500 to-blue-600'
  },
  {
    name: 'Professional',
    icon: Crown,
    description: 'Ideal for growing businesses and agencies',
    monthlyPrice: 79,
    yearlyPrice: 790,
    features: [
      'Unlimited AI campaigns',
      'Advanced analytics & insights',
      '10 team members',
      'Priority support',
      '100GB storage',
      'Custom templates',
      'A/B testing',
      'API access'
    ],
    popular: true,
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Enterprise',
    icon: Rocket,
    description: 'For large organizations with custom needs',
    monthlyPrice: 199,
    yearlyPrice: 1990,
    features: [
      'Everything in Professional',
      'Unlimited team members',
      'Custom AI model training',
      'Dedicated account manager',
      'Unlimited storage',
      'White-label solution',
      'Advanced security features',
      'Custom integrations'
    ],
    popular: false,
    color: 'from-orange-500 to-red-500'
  }
]

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)
  const [showCalculator, setShowCalculator] = useState(false)

  return (
    <section id="pricing" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-transparent to-pink-50/30 dark:from-purple-950/20 dark:to-pink-950/20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-animate>
          <Badge variant="secondary" className="mb-4 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 border-0">
            Pricing
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
            Start free and scale as you grow. All plans include our core AI features with no hidden fees.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-sm ${!isYearly ? 'text-slate-900 dark:text-white font-medium' : 'text-slate-500'}`}>
              Monthly
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-purple-600 data-[state=checked]:to-pink-600"
            />
            <span className={`text-sm ${isYearly ? 'text-slate-900 dark:text-white font-medium' : 'text-slate-500'}`}>
              Yearly
            </span>
            {isYearly && (
              <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300">
                Save 17%
              </Badge>
            )}
          </div>

          <Button 
            variant="outline" 
            onClick={() => setShowCalculator(!showCalculator)}
            className="mb-8"
          >
            {showCalculator ? 'Hide' : 'Show'} Pricing Calculator
          </Button>
        </div>

        {showCalculator && (
          <div className="mb-16" data-animate>
            <PricingCalculator />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto" data-animate>
          {plans.map((plan, index) => (
            <GlassCard 
              key={index}
              className={`relative p-8 ${
                plan.popular 
                  ? 'ring-2 ring-purple-500/50 bg-gradient-to-br from-white/80 to-purple-50/50 dark:from-slate-800/80 dark:to-purple-900/20 scale-105' 
                  : 'bg-white/60 dark:bg-slate-800/60'
              } hover:scale-105 transition-all duration-300`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
                  Most Popular
                </Badge>
              )}

              <div className="text-center mb-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center mx-auto mb-4`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  {plan.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-slate-900 dark:text-white">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-slate-500 ml-2">
                      /{isYearly ? 'year' : 'month'}
                    </span>
                  </div>
                  {isYearly && (
                    <div className="text-sm text-green-600 dark:text-green-400 mt-1">
                      Save ${(plan.monthlyPrice * 12) - plan.yearlyPrice} per year
                    </div>
                  )}
                </div>

                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' 
                      : 'bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100'
                  }`}
                  size="lg"
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                </Button>
              </div>

              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600 dark:text-slate-300 text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="text-center mt-12" data-animate>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <Button variant="outline" size="lg">
            Compare All Features
          </Button>
        </div>
      </div>
    </section>
  )
}
