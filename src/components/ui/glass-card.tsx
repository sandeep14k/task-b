import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        'backdrop-blur-xl bg-white/30 dark:bg-slate-900/30 border border-white/20 dark:border-slate-700/50 rounded-2xl shadow-xl',
        className
      )}
    >
      {children}
    </div>
  )
}
