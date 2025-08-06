# ADmyBRAND AI Suite - Technical Documentation

## Table of Contents
1. [Architecture Overview](#architecture-overview)
2. [Component Documentation](#component-documentation)
3. [Styling System](#styling-system)
4. [Animation System](#animation-system)
5. [State Management](#state-management)
6. [Performance Optimizations](#performance-optimizations)
7. [Accessibility](#accessibility)
8. [Development Guidelines](#development-guidelines)

## Architecture Overview

### Tech Stack
- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Build Tool**: Next.js built-in bundler

### Project Structure
\`\`\`
├── app/                     # Next.js App Router
│   ├── globals.css         # Global styles and animations
│   ├── layout.tsx          # Root layout with providers
│   └── page.tsx            # Main landing page
├── components/
│   ├── landing/            # Landing page specific components
│   │   ├── navbar.tsx      # Navigation with scroll effects
│   │   ├── hero-section.tsx # Hero with animated counters
│   │   ├── features-section.tsx # Feature grid with hover effects
│   │   ├── pricing-section.tsx # Pricing cards with calculator
│   │   ├── testimonials-section.tsx # Auto-rotating carousel
│   │   ├── faq-section.tsx # Collapsible FAQ items
│   │   ├── blog-section.tsx # Resource cards
│   │   └── footer.tsx      # Footer with newsletter signup
│   └── ui/                 # Reusable UI components
│       ├── glass-card.tsx  # Glassmorphism card component
│       ├── animated-counter.tsx # Number animation component
│       ├── pricing-calculator.tsx # Interactive ROI calculator
│       └── [shadcn-ui]/    # shadcn/ui components
└── lib/
    └── utils.ts            # Utility functions (cn, etc.)
\`\`\`

## Component Documentation

### Core Components

#### GlassCard
\`\`\`typescript
interface GlassCardProps {
  children: ReactNode
  className?: string
}
\`\`\`
**Purpose**: Creates glassmorphism effect with backdrop blur
**Usage**: Wrap content that needs glass-like appearance
**Features**: 
- Backdrop blur with transparency
- Responsive border effects
- Dark mode support

#### AnimatedCounter
\`\`\`typescript
interface AnimatedCounterProps {
  end: number
  duration?: number
  decimals?: number
  suffix?: string
  prefix?: string
}
\`\`\`
**Purpose**: Smooth number counting animations
**Usage**: Statistics, metrics, and dynamic numbers
**Features**:
- Easing animation (ease-out-quart)
- Customizable duration and formatting
- Performance optimized with requestAnimationFrame

#### PricingCalculator
\`\`\`typescript
// No props - self-contained component
\`\`\`
**Purpose**: Interactive ROI calculator with sliders
**Features**:
- Real-time calculations
- Multiple input parameters
- Visual feedback with color-coded results
- Responsive design

### Landing Page Sections

#### Navbar
**Features**:
- Scroll-based transparency changes
- Mobile hamburger menu
- Smooth scroll navigation
- Glass effect on scroll

#### HeroSection
**Features**:
- Gradient text effects
- Animated background elements
- Email capture form
- Interactive demo area
- Animated statistics counters

#### FeaturesSection
**Features**:
- 8-feature grid layout
- Hover animations
- Icon integration
- Badge system for feature highlighting

#### PricingSection
**Features**:
- 3-tier pricing structure
- Annual/monthly toggle
- Popular plan highlighting
- Integrated pricing calculator
- Feature comparison lists

#### TestimonialsSection
**Features**:
- Auto-rotating carousel (5-second intervals)
- Manual navigation controls
- Customer photos and ratings
- Results metrics display

#### FAQSection
**Features**:
- Collapsible accordion interface
- Smooth expand/collapse animations
- Search-friendly content structure

## Styling System

### Design Tokens
\`\`\`css
:root {
  /* Primary Colors */
  --purple-gradient: linear-gradient(135deg, #7C3AED, #EC4899);
  
  /* Glass Effects */
  --glass-bg: rgba(255, 255, 255, 0.1);
  --glass-border: rgba(255, 255, 255, 0.2);
  --glass-blur: blur(16px);
  
  /* Animations */
  --ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
  --duration-normal: 300ms;
  --duration-slow: 600ms;
}
\`\`\`

### Glassmorphism Implementation
\`\`\`css
.glass-effect {
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
\`\`\`

### Responsive Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large**: 1440px+

## Animation System

### Scroll-Triggered Animations
\`\`\`typescript
// Implementation in page.tsx
useEffect(() => {
  const handleScroll = () => {
    const elements = document.querySelectorAll('[data-animate]')
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect()
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0
      
      if (isVisible) {
        element.classList.add('animate-in')
      }
    })
  }
  
  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])
\`\`\`

### CSS Animations
\`\`\`css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

[data-animate] {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

[data-animate].animate-in {
  opacity: 1;
  transform: translateY(0);
}
\`\`\`

## State Management

### Local State Patterns
- **useState**: Component-level state (form inputs, toggles)
- **useEffect**: Side effects (scroll listeners, timers)
- **useCallback**: Performance optimization for event handlers

### Example: Testimonials Carousel
\`\`\`typescript
const [currentIndex, setCurrentIndex] = useState(0)
const [isAutoPlaying, setIsAutoPlaying] = useState(true)

useEffect(() => {
  if (!isAutoPlaying) return
  
  const interval = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, 5000)
  
  return () => clearInterval(interval)
}, [isAutoPlaying])
\`\`\`

## Performance Optimizations

### Image Optimization
- Next.js automatic image optimization
- Lazy loading for below-fold images
- WebP format support
- Responsive image sizing

### Code Splitting
- Automatic with Next.js App Router
- Component-level splitting
- Dynamic imports for heavy components

### CSS Optimizations
- Tailwind CSS purging
- Critical CSS inlining
- Minimal custom CSS

### JavaScript Optimizations
- Tree shaking
- Bundle analysis
- Minimal third-party dependencies

## Accessibility

### ARIA Implementation
\`\`\`typescript
// Example: FAQ Section
<button
  onClick={() => toggleFAQ(index)}
  aria-expanded={openIndex === index}
  aria-controls={`faq-content-${index}`}
>
  {faq.question}
</button>

<div
  id={`faq-content-${index}`}
  role="region"
  aria-labelledby={`faq-button-${index}`}
>
  {faq.answer}
</div>
\`\`\`

### Keyboard Navigation
- Tab order optimization
- Focus management
- Keyboard shortcuts (Cmd/Ctrl + B for sidebar toggle)

### Screen Reader Support
- Semantic HTML structure
- Alt text for images
- Live regions for dynamic content
- Skip links for navigation

### Color Contrast
- WCAG AA compliance
- High contrast mode support
- Color-blind friendly palette

## Development Guidelines

### Code Style
\`\`\`typescript
// Use TypeScript interfaces for props
interface ComponentProps {
  title: string
  description?: string
  children: ReactNode
}

// Use const assertions for arrays
const features = [
  { title: 'Feature 1', icon: Icon1 },
  { title: 'Feature 2', icon: Icon2 },
] as const

// Use proper error boundaries
export default function Component({ title }: ComponentProps) {
  if (!title) {
    throw new Error('Title is required')
  }
  
  return <div>{title}</div>
}
\`\`\`

### Component Patterns
1. **Composition over inheritance**
2. **Props drilling avoidance**
3. **Single responsibility principle**
4. **Consistent naming conventions**

### Testing Strategy
\`\`\`typescript
// Component testing with React Testing Library
import { render, screen } from '@testing-library/react'
import { AnimatedCounter } from './animated-counter'

test('renders counter with correct end value', () => {
  render(<AnimatedCounter end={100} />)
  expect(screen.getByText('100')).toBeInTheDocument()
})
\`\`\`

### Performance Monitoring
- Core Web Vitals tracking
- Lighthouse CI integration
- Bundle size monitoring
- Runtime performance profiling

### Deployment Checklist
- [ ] TypeScript compilation passes
- [ ] ESLint passes without errors
- [ ] Responsive design tested
- [ ] Accessibility audit completed
- [ ] Performance benchmarks met
- [ ] Cross-browser testing completed
- [ ] SEO meta tags configured
- [ ] Analytics integration verified

## API Integration Points

### Future Enhancements
\`\`\`typescript
// Newsletter signup
interface NewsletterData {
  email: string
  preferences?: string[]
}

// Contact form
interface ContactFormData {
  name: string
  email: string
  company?: string
  message: string
}

// Pricing calculator data
interface CalculatorResult {
  monthlySavings: number
  yearlySavings: number
  timeHours: number
  roi: number
}
\`\`\`

### Environment Variables
\`\`\`bash
# Analytics
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_HOTJAR_ID=

# API Endpoints
NEXT_PUBLIC_API_URL=
NEWSLETTER_API_KEY=
CONTACT_FORM_WEBHOOK=

# Feature Flags
NEXT_PUBLIC_ENABLE_CALCULATOR=true
NEXT_PUBLIC_ENABLE_CHAT=false
\`\`\`

This documentation provides a comprehensive guide for developers working on the ADmyBRAND AI Suite landing page, covering architecture, implementation details, and best practices for maintenance and extension.
