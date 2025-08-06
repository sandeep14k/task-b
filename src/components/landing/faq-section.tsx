'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { ChevronDown } from 'lucide-react'
import { GlassCard } from '@/components/ui/glass-card'

const faqs = [
  {
    question: 'How does ADmyBRAND AI generate marketing content?',
    answer: 'Our AI uses advanced natural language processing and machine learning models trained on millions of high-performing marketing campaigns. It analyzes your brand voice, target audience, and campaign objectives to generate personalized content that resonates with your customers.'
  },
  {
    question: 'Can I integrate ADmyBRAND with my existing marketing tools?',
    answer: 'Yes! We offer seamless integrations with 50+ popular marketing platforms including Google Ads, Facebook Ads Manager, HubSpot, Mailchimp, Salesforce, and many more. Our API also allows for custom integrations with your existing tech stack.'
  },
  {
    question: 'Is my data secure with ADmyBRAND AI?',
    answer: 'Absolutely. We take data security seriously with SOC 2 Type II compliance, end-to-end encryption, and enterprise-grade security measures. Your data is never shared with third parties and you maintain full ownership of all your content and campaigns.'
  },
  {
    question: 'How accurate are the AI-generated insights and predictions?',
    answer: 'Our AI models achieve 95%+ accuracy in campaign performance predictions based on historical data analysis. The system continuously learns from your campaigns to improve accuracy over time, and we provide confidence scores for all predictions.'
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We provide comprehensive support including 24/7 chat support for Pro and Enterprise plans, extensive documentation, video tutorials, and dedicated account managers for Enterprise customers. Our team is committed to your success.'
  },
  {
    question: 'Can I cancel my subscription at any time?',
    answer: 'Yes, you can cancel your subscription at any time with no cancellation fees. Your account will remain active until the end of your current billing period, and you\'ll retain access to all your data and campaigns.'
  },
  {
    question: 'Do you offer custom AI model training for Enterprise clients?',
    answer: 'Yes, Enterprise clients can work with our team to train custom AI models on their specific industry data, brand guidelines, and performance metrics. This ensures even more personalized and effective campaign generation.'
  },
  {
    question: 'How long does it take to see results with ADmyBRAND AI?',
    answer: 'Most customers see improvements in campaign performance within the first week of using our platform. Significant results like increased conversion rates and reduced acquisition costs typically become apparent within 2-4 weeks as the AI learns your audience preferences.'
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/30 to-transparent dark:via-slate-900/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-animate>
          <Badge variant="secondary" className="mb-4 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 border-0">
            FAQ
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Everything you need to know about ADmyBRAND AI. Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4" data-animate>
          {faqs.map((faq, index) => (
            <GlassCard 
              key={index}
              className="overflow-hidden bg-white/60 dark:bg-slate-800/60 hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-slate-50/50 dark:hover:bg-slate-700/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white pr-4">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-slate-500 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="text-center mt-12" data-animate>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Still have questions?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-medium">
              Contact Support
            </button>
            <button className="px-6 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 font-medium">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
