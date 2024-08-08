import { lazy } from 'react'

import { Components } from '@/vibes/schema'

export const components = [
  {
    name: 'dropdown',
    dependencies: [],
    registryDependencies: [],
    files: [
      './components/dropdown/index.tsx',
      './components/icons/ChevronDownIcon.tsx',
      '../../lib/utils.ts',
    ],
    component: lazy(() => import('./components/dropdown')),
  },
  {
    name: 'button',
    dependencies: ['@radix-ui/react-slot'],
    registryDependencies: [],
    files: [
      './components/button/index.tsx',
      '../../lib/utils.ts',
      './components/icons/LoadingIcon.tsx',
    ],
    component: lazy(() => import('./components/button')),
  },
  {
    name: 'file-uploader',
    dependencies: [],
    registryDependencies: [],
    files: [
      './components/file-uploader/index.tsx',
      '../../lib/utils.ts',
      './components/icons/CheckIcon.tsx',
      './components/icons/CrossIcon.tsx',
    ],
    component: lazy(() => import('./components/file-uploader')),
  },
  {
    name: 'input',
    dependencies: [],
    registryDependencies: [],
    files: [
      './components/input/index.tsx',
      '../../lib/utils.ts',
      './components/icons/CheckIcon.tsx',
      './components/icons/CrossIcon.tsx',
    ],
    component: lazy(() => import('./components/input')),
  },
  {
    name: 'radio-button',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/radio-button/index.tsx', '../../lib/utils.ts'],
    component: lazy(() => import('./components/radio-button')),
  },
  {
    name: 'accordions',
    dependencies: ['@radix-ui/react-accordion'],
    registryDependencies: [],
    files: [
      './components/accordions/index.tsx',
      '../../lib/utils.ts',
      './components/icons/ChevronDownIcon.tsx',
    ],
    component: lazy(() => import('./components/accordions')),
  },
  {
    name: 'rating',
    dependencies: [],
    registryDependencies: [],
    files: [
      './components/rating/index.tsx',
      '../../lib/utils.ts',
      './components/icons/StarEmptyIcon.tsx',
      './components/icons/StarFilledIcon.tsx',
      './components/icons/StarHalfIcon.tsx',
    ],
    component: lazy(() => import('./components/rating')),
  },
  {
    name: 'text-area',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/text-area/index.tsx', '../../lib/utils.ts'],
    component: lazy(() => import('./components/text-area')),
  },
  {
    name: 'skeleton',
    dependencies: [],
    registryDependencies: [],
    files: [
      './components/skeleton/index.tsx',
      '../../lib/utils.ts',
      './components/skeleton/index.module.css',
    ],
    component: lazy(() => import('./components/skeleton')),
  },
  {
    name: 'option-selector',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/option-selector/index.tsx', '../../lib/utils.ts'],
    component: lazy(() => import('./components/option-selector')),
  },
  {
    name: 'carousel-section',
    dependencies: ['react'],
    registryDependencies: [],
    files: [
      './components/carousel-section/index.tsx',
      './components/carousel-section/index.css',
      '../../lib/utils.ts',
      './components/icons/ChevronLeftIcon.tsx',
    ],
    component: lazy(() => import('./components/carousel-section')),
  },
  {
    name: 'checkbox',
    dependencies: [],
    registryDependencies: [],
    files: [
      './components/checkbox/index.tsx',
      '../../lib/utils.ts',
      './components/icons/CheckIcon.tsx',
    ],
    component: lazy(() => import('./components/checkbox')),
  },
  {
    name: 'alert-box',
    dependencies: [],
    registryDependencies: [],
    files: [
      './components/alert-box/index.tsx',
      './components/icons/AlertIcon.tsx',
      './components/icons/CheckIcon.tsx',
      './components/icons/CrossIcon.tsx',
      './components/icons/InfoIcon.tsx',
      '../../lib/utils.ts',
    ],
    component: lazy(() => import('./components/alert-box')),
  },
  {
    name: 'callout-section',
    dependencies: [],
    registryDependencies: ['button'],
    files: ['./components/callout-section/index.tsx'],
    component: lazy(() => import('./components/callout-section')),
  },
  {
    name: 'counter',
    dependencies: [],
    registryDependencies: [],
    files: [
      './components/counter/index.tsx',
      '../../lib/utils.ts',
      './components/icons/MinusDashedIcon.tsx',
      './components/icons/MinusSolidIcon.tsx',
      './components/icons/PlusDashedIcon.tsx',
      './components/icons/PlusSolidIcon.tsx',
    ],
    component: lazy(() => import('./components/counter')),
  },
  {
    name: 'calendar',
    dependencies: ['react-day-picker'],
    registryDependencies: [],
    files: [
      './components/calendar/index.tsx',
      '../../lib/utils.ts',
      './components/icons/ChevronLeftIcon.tsx',
    ],
    component: lazy(() => import('./components/calendar')),
  },
  {
    name: 'blog-list-section',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/blog-list-section/index.tsx', '../../lib/utils.ts'],
    component: lazy(() => import('./components/blog-list-section')),
  },
  {
    name: 'breadcrumbs',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/breadcrumbs/index.tsx', '../../lib/utils.ts'],
    component: lazy(() => import('./components/breadcrumbs')),
  },
  {
    name: 'media-and-text-section',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/media-and-text-section/index.tsx', '../../lib/utils.ts'],
    component: lazy(() => import('./components/media-and-text-section')),
  },
  {
    name: 'footer-section',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/footer-section/index.tsx', '../../lib/utils.ts'],
    component: lazy(() => import('./components/footer-section')),
  },
  {
    name: 'fullscreen-product-card-section',
    dependencies: [],
    registryDependencies: ['counter', 'button'],
    files: ['./components/fullscreen-product-card-section/index.tsx', '../../lib/utils.ts'],
    component: lazy(() => import('./components/fullscreen-product-card-section')),
  },
  {
    name: 'section-header',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/section-header/index.tsx', '../../lib/utils.ts'],
    component: lazy(() => import('./components/section-header')),
  },
  {
    name: 'hero-header',
    dependencies: [],
    registryDependencies: ['button'],
    files: ['./components/hero-header/index.tsx', '../../lib/utils.ts'],
    component: lazy(() => import('./components/hero-header')),
  },
  {
    name: 'blog-post-card',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/blog-post-card/index.tsx'],
    component: lazy(() => import('./components/blog-post-card')),
  },
  {
    name: 'faq-section',
    dependencies: [],
    registryDependencies: ['accordions'],
    files: ['./components/faq-section/index.tsx'],
    component: lazy(() => import('./components/faq-section')),
  },
  {
    name: 'tabs',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/tabs/index.tsx'],
    component: lazy(() => import('./components/tabs')),
  },
  {
    name: 'text-section',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/text-section/index.tsx'],
    component: lazy(() => import('./components/text-section')),
  },
  {
    name: 'badge',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/badge/index.tsx', '../../lib/utils.ts'],
    component: lazy(() => import('./components/badge')),
  },
  {
    name: 'swatch',
    dependencies: ['@radix-ui/react-tabs'],
    registryDependencies: [],
    files: ['./components/swatch/index.tsx', '../../lib/utils.ts'],
    component: lazy(() => import('./components/swatch')),
  },
  {
    name: 'product-card',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/product-card/index.tsx', '../../lib/utils.ts'],
    component: lazy(() => import('./components/product-card')),
  },
] satisfies Components
