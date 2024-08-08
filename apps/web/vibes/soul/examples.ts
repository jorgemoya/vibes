import { lazy } from 'react'

import { Components } from '@/vibes/schema'

export const examples = [
  {
    name: 'accordions-example',
    dependencies: [],
    registryDependencies: ['accordions'],
    files: ['examples/accordions.tsx'],
    component: lazy(() => import('./examples/accordions')),
  },
  {
    name: 'announcement-bar-example',
    dependencies: [],
    registryDependencies: ['announcement-bar'],
    files: ['examples/announcement-bar.tsx'],
    component: lazy(() => import('./examples/announcement-bar')),
  },
  {
    name: 'badge-example',
    dependencies: [],
    registryDependencies: [],
    files: ['examples/badge.tsx'],
    component: lazy(() => import('./examples/badge')),
  },
  {
    name: 'blog-post-card-example',
    dependencies: [],
    registryDependencies: ['blog-post-card'],
    files: ['examples/blog-post-card.tsx'],
    component: lazy(() => import('./examples/blog-post-card')),
  },
  {
    name: 'button-example',
    dependencies: [],
    registryDependencies: ['button'],
    files: ['examples/button.tsx'],
    component: lazy(() => import('./examples/button')),
  },
  {
    name: 'card-carousel-example',
    dependencies: [],
    registryDependencies: ['categories'],
    files: ['examples/card-carousel.tsx'],
    component: lazy(() => import('./examples/card-carousel')),
  },
  {
    name: 'carousel-example',
    dependencies: [],
    registryDependencies: ['categories'],
    files: ['examples/carousel.tsx'],
    component: lazy(() => import('./examples/carousel')),
  },
  {
    name: 'category-card-example',
    dependencies: [],
    registryDependencies: ['category-card'],
    files: ['examples/category-card.tsx'],
    component: lazy(() => import('./examples/category-card')),
  },
  {
    name: 'checkbox-example',
    dependencies: [],
    registryDependencies: ['checkbox'],
    files: ['examples/checkbox.tsx'],
    component: lazy(() => import('./examples/checkbox')),
  },
  {
    name: 'compare-drawer-example',
    dependencies: [],
    registryDependencies: ['compare-drawer'],
    files: ['examples/compare-drawer.tsx'],
    component: lazy(() => import('./examples/compare-drawer')),
  },
  {
    name: 'dropdown-example',
    dependencies: [],
    registryDependencies: ['dropdown'],
    files: ['examples/dropdown.tsx'],
    component: lazy(() => import('./examples/dropdown')),
  },
  {
    name: 'favorite-example',
    dependencies: [],
    registryDependencies: ['favorite'],
    files: ['examples/favorite.tsx'],
    component: lazy(() => import('./examples/favorite')),
  },
  {
    name: 'feature-example',
    dependencies: [],
    registryDependencies: [],
    files: ['examples/feature.tsx'],
    component: lazy(() => import('./examples/feature')),
  },
  {
    name: 'featured-product-list-example',
    dependencies: [],
    registryDependencies: ['featured-product-list'],
    files: ['examples/featured-product-list.tsx'],
    component: lazy(() => import('./examples/featured-product-list')),
  },
  {
    name: 'footer-example',
    dependencies: [],
    registryDependencies: [],
    files: ['examples/footer.tsx'],
    component: lazy(() => import('./examples/footer')),
  },
  {
    name: 'header-example',
    dependencies: [],
    registryDependencies: ['header'],
    files: ['examples/header.tsx'],
    component: lazy(() => import('./examples/header')),
  },
  {
    name: 'icon-block-example',
    dependencies: [],
    registryDependencies: [],
    files: ['examples/icon-block.tsx'],
    component: lazy(() => import('./examples/icon-block')),
  },
  {
    name: 'input-example',
    dependencies: [],
    registryDependencies: ['input'],
    files: ['examples/input.tsx'],
    component: lazy(() => import('./examples/input')),
  },

  {
    name: 'media-section-example',
    dependencies: [],
    registryDependencies: [],
    files: ['examples/media-section.tsx'],
    component: lazy(() => import('./examples/media-section')),
  },
  {
    name: 'newsletter-example',
    dependencies: [],
    registryDependencies: [],
    files: ['examples/newsletter.tsx'],
    component: lazy(() => import('./examples/newsletter')),
  },
  {
    name: 'page-home-blue-example',
    dependencies: [],
    registryDependencies: [],
    files: ['examples/page-home-blue.tsx'],
    component: lazy(() => import('./examples/page-home-blue')),
  },
  {
    name: 'page-home-electric-example',
    dependencies: [],
    registryDependencies: [],
    files: ['examples/page-home-electric.tsx'],
    component: lazy(() => import('./examples/page-home-electric')),
  },
  {
    name: 'page-home-warm-example',
    dependencies: [],
    registryDependencies: [],
    files: ['examples/page-home-warm.tsx'],
    component: lazy(() => import('./examples/page-home-warm')),
  },
  {
    name: 'page-home-luxury-example',
    dependencies: [],
    registryDependencies: [],
    files: ['examples/page-home-luxury.tsx'],
    component: lazy(() => import('./examples/page-home-luxury')),
  },
  {
    name: 'page-product-example',
    dependencies: [],
    registryDependencies: [],
    files: ['examples/page-product.tsx'],
    component: lazy(() => import('./examples/page-product')),
  },
  {
    name: 'page-products-example',
    dependencies: [],
    registryDependencies: [],
    files: ['examples/page-products.tsx'],
    component: lazy(() => import('./examples/page-products')),
  },
  {
    name: 'pagination-example',
    dependencies: [],
    registryDependencies: ['pagination'],
    files: ['examples/pagination.tsx'],
    component: lazy(() => import('./examples/pagination')),
  },
  {
    name: 'product-card-example',
    dependencies: [],
    registryDependencies: ['product-card'],
    files: ['examples/product-card.tsx'],
    component: lazy(() => import('./examples/product-card')),
  },
  {
    name: 'product-detail-example',
    dependencies: [],
    registryDependencies: ['product-detail'],
    files: ['examples/product-detail.tsx'],
    component: lazy(() => import('./examples/product-detail')),
  },
  {
    name: 'product-list-example',
    dependencies: [],
    registryDependencies: ['product-list'],
    files: ['examples/product-list.tsx'],
    component: lazy(() => import('./examples/product-list')),
  },
  {
    name: 'product-description-example',
    dependencies: [],
    registryDependencies: ['product-description'],
    files: ['examples/product-description.tsx'],
    component: lazy(() => import('./examples/product-description')),
  },
  {
    name: 'products-header-example',
    dependencies: [],
    registryDependencies: [],
    files: ['examples/products-header.tsx'],
    component: lazy(() => import('./examples/products-header')),
  },
  {
    name: 'rating-example',
    dependencies: [],
    registryDependencies: ['rating'],
    files: ['examples/rating.tsx'],
    component: lazy(() => import('./examples/rating')),
  },
  {
    name: 'slideshow-example',
    dependencies: [],
    registryDependencies: ['slideshow'],
    files: ['examples/slideshow.tsx'],
    component: lazy(() => import('./examples/slideshow')),
  },
] satisfies Components
