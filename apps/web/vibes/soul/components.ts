import { Components } from '@/vibes/schema'

export const components = [
  {
    name: 'accordions',
    dependencies: ['clsx', '@radix-ui/react-accordion'],
    registryDependencies: [],
    files: ['components/accordions/index.tsx'],
  },
  {
    name: 'announcement-bar',
    dependencies: ['clsx', 'lucide-react'],
    registryDependencies: [],
    files: ['components/announcement-bar/index.tsx'],
  },
  {
    name: 'badge',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: ['components/badge/index.tsx'],
  },
  {
    name: 'blog-post-card',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: ['components/blog-post-card/index.tsx'],
  },
  {
    name: 'blog-post-list',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: ['components/blog-post-list/index.tsx'],
  },
  {
    name: 'button',
    dependencies: ['clsx', 'lucide-react', '@radix-ui/react-slot'],
    registryDependencies: [],
    files: ['components/button/index.tsx'],
  },
  {
    name: 'card',
    dependencies: ['clsx', 'lucide-react'],
    registryDependencies: [],
    files: ['components/card/index.tsx'],
  },
  {
    name: 'card-carousel',
    dependencies: ['clsx', 'embla-carousel-react', 'lucide-react'],
    registryDependencies: [],
    files: ['components/carousel/index.tsx'],
  },
  {
    name: 'checkbox',
    dependencies: ['clsx', 'lucide-react', '@radix-ui/react-checkbox'],
    registryDependencies: [],
    files: ['components/checkbox/index.tsx'],
  },
  {
    name: 'discount',
    dependencies: ['clsx', 'lucide-react'],
    registryDependencies: [],
    files: ['components/discount/index.tsx'],
  },
  {
    name: 'dropdown',
    dependencies: ['clsx', 'lucide-react', '@radix-ui/react-dropdown-menu'],
    registryDependencies: [],
    files: ['components/dropdown/index.tsx'],
  },
  {
    name: 'favorite',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: [
      'components/favorite/index.tsx',
      'components/favorite/heart.tsx',
      'components/favorite/styles.css',
    ],
  },
  {
    name: 'feature',
    dependencies: ['clsx', 'lucide-react'],
    registryDependencies: ['button'],
    files: ['components/feature/index.tsx', 'components/icon/index.tsx'],
  },
  {
    name: 'featured-blog-post-list',
    dependencies: [],
    registryDependencies: ['button', 'blog-post-card'],
    files: ['components/featured-blog-post-list/index.tsx'],
  },
  {
    name: 'featured-image',
    dependencies: [],
    registryDependencies: ['button'],
    files: ['components/featured-image/index.tsx'],
  },
  {
    name: 'featured-products-carousel',
    dependencies: [],
    registryDependencies: ['products-carousel'],
    files: ['components/featured-products-carousel/index.tsx'],
  },
  {
    name: 'featured-products-list',
    dependencies: [],
    registryDependencies: ['button', 'product-card'],
    files: ['components/featured-products-list/index.tsx'],
  },
  {
    name: 'featured-video',
    dependencies: ['clsx'],
    registryDependencies: ['button'],
    files: ['components/featured-video/index.tsx'],
  },
  {
    name: 'footer',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: ['components/footer/index.tsx'],
  },
  {
    name: 'header',
    dependencies: ['clsx', 'lucide-react', 'react-headroom'],
    registryDependencies: [],
    files: ['components/header/index.tsx'],
  },
  {
    name: 'icon-block',
    dependencies: ['clsx', 'lucide-react'],
    registryDependencies: [],
    files: ['components/icon-block/index.tsx', 'components/icon/index.tsx'],
  },
  {
    name: 'input',
    dependencies: ['clsx', 'lucide-react'],
    registryDependencies: [],
    files: ['components/input/index.tsx'],
  },
  {
    name: 'pagination',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: ['components/pagination/index.tsx'],
  },
  {
    name: 'product-card',
    dependencies: ['clsx'],
    registryDependencies: ['badge', 'checkbox'],
    files: [
      'components/product-card/index.tsx',
      'components/product-card/compare.tsx',
      'components/product-card/price.tsx',
    ],
  },
  {
    name: 'products-carousel',
    dependencies: ['clsx'],
    registryDependencies: ['product-card', 'carousel'],
    files: ['components/products-carousel/index.tsx'],
  },
  {
    name: 'product-detail',
    dependencies: ['clsx', 'embla-carousel-react'],
    registryDependencies: ['button', 'favorite', 'product-card', 'rating'],
    files: [
      'components/product-detail/index.tsx',
      'components/product-detail/product-gallery.tsx',
      'components/product-card/price.tsx',
    ],
  },
  {
    name: 'products-list',
    dependencies: [],
    registryDependencies: ['product-card'],
    files: ['components/products-list/index.tsx'],
  },
  {
    name: 'product-description',
    dependencies: [],
    registryDependencies: ['accordions'],
    files: ['components/product-description/index.tsx'],
  },
  {
    name: 'products-header',
    dependencies: [],
    registryDependencies: ['accordions', 'button', 'dropdown'],
    files: ['components/products-header/index.tsx'],
  },
  {
    name: 'rating',
    dependencies: [],
    registryDependencies: [],
    files: ['components/rating/index.tsx'],
  },
  {
    name: 'slide-carousel',
    dependencies: ['clsx', 'embla-carousel-react', 'lucide-react'],
    registryDependencies: [],
    files: ['components/slide-carousel/index.tsx'],
  },
  {
    name: 'slideshow',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: ['components/slideshow/index.tsx'],
  },
  {
    name: 'subscribe',
    dependencies: ['clsx'],
    registryDependencies: ['input'],
    files: ['components/subscribe/index.tsx'],
  },
] satisfies Components
