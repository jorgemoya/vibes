import { lazy } from 'react'

import { Components } from '@/vibes/schema'

export const components = [
  {
    name: 'accordions',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/accordions/index.tsx'],
    component: lazy(() => import('./components/accordions')),
  },
  {
    name: 'announcement-bar',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/announcement-bar/index.tsx'],
    component: lazy(() => import('./components/announcement-bar')),
  },
  {
    name: 'blog-post-card',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/blog-post-card/index.tsx'],
    component: lazy(() => import('./components/blog-post-card')),
  },
  {
    name: 'button',
    dependencies: [],
    registryDependencies: [],
    files: ['components/button/index.tsx'],
    component: lazy(() => import('./components/button')),
  },
  {
    name: 'categories',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/categories/index.tsx'],
    component: lazy(() => import('./components/categories')),
  },
  {
    name: 'category-card',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/category-card/index.tsx'],
    component: lazy(() => import('./components/category-card')),
  },
  {
    name: 'checkbox',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/checkbox/index.tsx'],
    component: lazy(() => import('./components/checkbox')),
  },
  {
    name: 'compare',
    dependencies: ['checkbox'],
    registryDependencies: [],
    files: ['./components/compare/index.tsx'],
    component: lazy(() => import('./components/compare')),
  },
  {
    name: 'compare-bar',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/compare-bar/index.tsx'],
    component: lazy(() => import('./components/compare-bar')),
  },
  {
    name: 'favorite',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/favorite/index.tsx'],
    component: lazy(() => import('./components/favorite')),
  },
  {
    name: 'feature',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/feature/index.tsx'],
    component: lazy(() => import('./components/feature')),
  },
  {
    name: 'featured-product-list',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/featured-product-list/index.tsx'],
    component: lazy(() => import('./components/featured-product-list')),
  },
  {
    name: 'footer',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/footer/index.tsx'],
    component: lazy(() => import('./components/footer')),
  },
  {
    name: 'hero',
    dependencies: ['./components/hero/ProgressBar.tsx'],
    registryDependencies: [],
    files: ['./components/hero/index.tsx'],
    component: lazy(() => import('./components/hero')),
  },
  {
    name: 'hero-category',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/hero-category/index.tsx'],
    component: lazy(() => import('./components/hero-category')),
  },
  {
    name: 'icon-block',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/icon-block/index.tsx'],
    component: lazy(() => import('./components/icon-block')),
  },
  {
    name: 'input',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/input/index.tsx'],
    component: lazy(() => import('./components/input')),
  },
  {
    name: 'navigation',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/navigation/index.tsx'],
    component: lazy(() => import('./components/navigation')),
  },
  {
    name: 'newsletter',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/newsletter/index.tsx'],
    component: lazy(() => import('./components/newsletter')),
  },
  {
    name: 'product-card',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/product-card/index.tsx'],
    component: lazy(() => import('./components/product-card')),
  },
  {
    name: 'product-chip',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/product-chip/index.tsx'],
    component: lazy(() => import('./components/product-chip')),
  },
  {
    name: 'product-list',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/product-list/index.tsx'],
    component: lazy(() => import('./components/product-list')),
  },
  {
    name: 'product-list-carousel',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/product-list-carousel/index.tsx'],
    component: lazy(() => import('./components/product-list-carousel')),
  },
  {
    name: 'product-description',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/product-description/index.tsx'],
    component: lazy(() => import('./components/product-description')),
  },
  {
    name: 'rating',
    dependencies: [],
    registryDependencies: [],
    files: ['./components/rating/index.tsx'],
    component: lazy(() => import('./components/rating')),
  },
] satisfies Components
