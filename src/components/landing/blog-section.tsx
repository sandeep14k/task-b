import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { GlassCard } from '@/components/ui/glass-card'

const blogPosts = [
  {
    title: '10 AI Marketing Trends That Will Dominate 2025',
    excerpt: 'Discover the cutting-edge AI marketing strategies that forward-thinking brands are using to stay ahead of the competition.',
    image: '/ai-marketing-dashboard.png',
    category: 'Trends',
    readTime: '5 min read',
    date: 'Dec 15, 2024',
    author: 'Sarah Chen'
  },
  {
    title: 'How to Increase ROI by 300% with AI-Powered Campaigns',
    excerpt: 'A comprehensive guide to leveraging artificial intelligence for maximum campaign performance and return on investment.',
    image: '/roi-growth-chart.png',
    category: 'Strategy',
    readTime: '8 min read',
    date: 'Dec 12, 2024',
    author: 'Marcus Rodriguez'
  },
  {
    title: 'The Complete Guide to AI Content Generation',
    excerpt: 'Learn how to create compelling, brand-consistent content at scale using advanced AI writing tools and techniques.',
    image: '/ai-content-creation.png',
    category: 'Guide',
    readTime: '12 min read',
    date: 'Dec 10, 2024',
    author: 'Emily Watson'
  }
]

export function BlogSection() {
  return (
    <section id="blog" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/20 via-transparent to-pink-50/20 dark:from-purple-950/10 dark:to-pink-950/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-animate>
          <Badge variant="secondary" className="mb-4 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 border-0">
            Resources
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
            Latest Insights & Resources
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Stay ahead of the curve with our expert insights, guides, and industry analysis on AI-powered marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12" data-animate>
          {blogPosts.map((post, index) => (
            <GlassCard 
              key={index}
              className="overflow-hidden bg-white/60 dark:bg-slate-800/60 hover:bg-white/80 dark:hover:bg-slate-800/80 hover:scale-105 transition-all duration-300 group cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 text-purple-700 dark:text-purple-300 border-0">
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-xs text-slate-500 space-x-2">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                  <div className="flex items-center text-xs text-slate-500">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.author}</span>
                  </div>
                  
                  <ArrowRight className="w-4 h-4 text-purple-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="text-center" data-animate>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-700"
          >
            View All Resources
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
