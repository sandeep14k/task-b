import { Brain, Target, BarChart3, Palette, Zap, Shield, Globe, Users } from 'lucide-react'
import { GlassCard } from '@/components/ui/glass-card'
import { Badge } from '@/components/ui/badge'

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Content Generation',
    description: 'Create compelling ad copy, social media posts, and email campaigns with our advanced AI that understands your brand voice.',
    badge: 'Most Popular',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Target,
    title: 'Smart Audience Targeting',
    description: 'Leverage machine learning to identify and reach your ideal customers across all platforms with precision targeting.',
    badge: 'New',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Get instant insights into campaign performance with detailed analytics and AI-driven recommendations for optimization.',
    badge: null,
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Palette,
    title: 'Brand Asset Management',
    description: 'Organize, manage, and deploy your brand assets consistently across all marketing channels with intelligent tagging.',
    badge: null,
    color: 'from-pink-500 to-pink-600'
  },
  {
    icon: Zap,
    title: 'Automated Workflows',
    description: 'Set up intelligent automation that handles routine tasks, schedules content, and optimizes campaigns while you sleep.',
    badge: 'Pro',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security with SOC 2 compliance, end-to-end encryption, and advanced access controls for your peace of mind.',
    badge: null,
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Globe,
    title: 'Multi-Platform Integration',
    description: 'Connect with 50+ marketing platforms including Google Ads, Facebook, Instagram, LinkedIn, and email providers.',
    badge: null,
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Work seamlessly with your team using real-time collaboration tools, approval workflows, and role-based permissions.',
    badge: null,
    color: 'from-teal-500 to-teal-600'
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/50 to-transparent dark:via-slate-900/50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-animate>
          <Badge variant="secondary" className="mb-4 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 border-0">
            Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
            Everything You Need to Scale Your Marketing
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Our comprehensive AI suite provides all the tools and insights you need to create, optimize, and scale your marketing campaigns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-animate>
          {features.map((feature, index) => (
            <GlassCard 
              key={index} 
              className="p-6 hover:scale-105 transition-all duration-300 group cursor-pointer bg-white/60 dark:bg-slate-800/60 hover:bg-white/80 dark:hover:bg-slate-800/80"
            >
              <div className="relative mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                {feature.badge && (
                  <Badge 
                    variant="secondary" 
                    className="absolute -top-2 -right-2 text-xs bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0"
                  >
                    {feature.badge}
                  </Badge>
                )}
              </div>
              
              <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
