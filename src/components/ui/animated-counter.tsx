'use client'

import { useEffect, useState } from 'react'

interface AnimatedCounterProps {
  end: number
  duration?: number
  decimals?: number
  suffix?: string
  prefix?: string
}

export function AnimatedCounter({ 
  end, 
  duration = 2000, 
  decimals = 0, 
  suffix = '', 
  prefix = '' 
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(end * easeOutQuart)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration])

  return (
    <span>
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>
  )
}
