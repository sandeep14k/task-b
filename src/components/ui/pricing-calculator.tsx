'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Badge } from '@/components/ui/badge'
import { Calculator, TrendingUp, Users, Zap } from 'lucide-react'

export function PricingCalculator() {
  const [campaigns, setCampaigns] = useState([10])
  const [teamSize, setTeamSize] = useState([5])
  const [monthlySpend, setMonthlySpend] = useState([5000])

  const calculateSavings = () => {
    const baseCost = campaigns[0] * 50 + teamSize[0] * 100 + (monthlySpend[0] / 100)
    const aiSavings = baseCost * 0.4 // 40% savings with AI
    const timeSavings = teamSize[0] * 20 * 25 // 20 hours per person per month at $25/hour
    
    return {
      monthlySavings: Math.round(aiSavings + timeSavings),
      yearlySavings: Math.round((aiSavings + timeSavings) * 12),
      timeHours: teamSize[0] * 20
    }
  }

  const savings = calculateSavings()

  return (
    <Card className="max-w-4xl mx-auto bg-gradient-to-br from-white/80 to-purple-50/50 dark:from-slate-800/80 dark:to-purple-900/20 border-purple-200/50 dark:border-purple-700/50">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-2xl">
          <Calculator className="w-6 h-6 text-purple-600" />
          ROI Calculator
        </CardTitle>
        <p className="text-slate-600 dark:text-slate-300">
          See how much you could save with ADmyBRAND AI
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Input Controls */}
          <div className="space-y-6">
            <div>
              <Label className="text-base font-medium mb-3 block">
                Monthly Campaigns: {campaigns[0]}
              </Label>
              <Slider
                value={campaigns}
                onValueChange={setCampaigns}
                max={100}
                min={1}
                step={1}
                className="w-full"
              />
            </div>

            <div>
              <Label className="text-base font-medium mb-3 block">
                Team Size: {teamSize[0]} people
              </Label>
              <Slider
                value={teamSize}
                onValueChange={setTeamSize}
                max={50}
                min={1}
                step={1}
                className="w-full"
              />
            </div>

            <div>
              <Label className="text-base font-medium mb-3 block">
                Monthly Ad Spend: ${monthlySpend[0].toLocaleString()}
              </Label>
              <Slider
                value={monthlySpend}
                onValueChange={setMonthlySpend}
                max={50000}
                min={1000}
                step={500}
                className="w-full"
              />
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200/50 dark:border-green-700/50">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-green-800 dark:text-green-200">
                  Potential Monthly Savings
                </span>
              </div>
              <div className="text-3xl font-bold text-green-600 mb-1">
                ${savings.monthlySavings.toLocaleString()}
              </div>
              <div className="text-sm text-green-700 dark:text-green-300">
                ${savings.yearlySavings.toLocaleString()} per year
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200/50 dark:border-blue-700/50">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-blue-800 dark:text-blue-200">
                  Time Saved
                </span>
              </div>
              <div className="text-2xl font-bold text-blue-600 mb-1">
                {savings.timeHours} hours/month
              </div>
              <div className="text-sm text-blue-700 dark:text-blue-300">
                Focus on strategy, not execution
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200/50 dark:border-purple-700/50">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-purple-600" />
                <span className="font-semibold text-purple-800 dark:text-purple-200">
                  Performance Boost
                </span>
              </div>
              <div className="flex gap-2">
                <Badge variant="secondary" className="bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300">
                  +247% Conversion
                </Badge>
                <Badge variant="secondary" className="bg-pink-100 text-pink-700 dark:bg-pink-900/50 dark:text-pink-300">
                  -40% CAC
                </Badge>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-xl text-center">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            *Calculations based on average customer data and industry benchmarks. 
            Actual results may vary based on your specific use case and implementation.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
