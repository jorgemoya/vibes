import { Components } from '@/vibes/schema'

export const components = [
  {
    name: 'accordions',
    dependencies: ['clsx', '@radix-ui/react-accordion'],
    registryDependencies: [],
    files: ['primitives/accordions/index.tsx'],
  },
  {
    name: 'alert',
    dependencies: ['clsx', 'lucide-react'],
    registryDependencies: [],
    files: ['primitives/alert/index.tsx'],
  },
  {
    name: 'animated-link',
    dependencies: [],
    registryDependencies: [],
    files: ['primitives/animated-link/index.tsx'],
  },
  {
    name: 'announcement-bar',
    dependencies: ['clsx', 'lucide-react'],
    registryDependencies: [],
    files: ['primitives/announcement-bar/index.tsx'],
  },
  {
    name: 'badge',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: ['primitives/badge/index.tsx'],
  },
  {
    name: 'blog-post-card',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: ['primitives/blog-post-card/index.tsx'],
  },
  {
    name: 'blog-post-list',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: ['sections/blog-post-list/index.tsx'],
  },
  {
    name: 'breadcrumbs',
    dependencies: ['clsx', 'lucide-react'],
    registryDependencies: [],
    files: ['primitives/breadcrumbs/index.tsx'],
  },
  {
    name: 'button',
    dependencies: ['clsx', 'lucide-react', '@radix-ui/react-slot'],
    registryDependencies: [],
    files: ['primitives/button/index.tsx'],
  },
  {
    name: 'card',
    dependencies: ['clsx', 'lucide-react'],
    registryDependencies: [],
    files: ['primitives/card/index.tsx'],
  },
  {
    name: 'cart',
    dependencies: ['clsx'],
    registryDependencies: ['button', 'counter'],
    files: ['sections/cart/index.tsx'],
  },
  {
    name: 'card-carousel',
    dependencies: ['clsx', 'embla-carousel-react', 'lucide-react'],
    registryDependencies: [],
    files: ['primitives/carousel/index.tsx'],
  },
  {
    name: 'checkbox',
    dependencies: ['clsx', 'lucide-react', '@radix-ui/react-checkbox'],
    registryDependencies: [],
    files: ['primitives/checkbox/index.tsx'],
  },
  {
    name: 'checkout',
    dependencies: [],
    registryDependencies: [],
    files: ['sections/checkout/index.tsx'],
  },
  {
    name: 'counter',
    dependencies: ['lucide-react'],
    registryDependencies: [],
    files: ['primitives/counter/index.tsx'],
  },
  {
    name: 'create-account',
    dependencies: [],
    registryDependencies: ['input', 'dropdown', 'button'],
    files: ['sections/create-account/index.tsx'],
  },
  {
    name: 'discount',
    dependencies: ['clsx', 'lucide-react'],
    registryDependencies: [],
    files: ['sections/discount/index.tsx'],
  },
  {
    name: 'dropdown',
    dependencies: ['clsx', 'lucide-react', '@radix-ui/react-dropdown-menu'],
    registryDependencies: [],
    files: ['primitives/dropdown/index.tsx'],
  },
  {
    name: 'favorite',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: [
      'primitives/favorite/index.tsx',
      'primitives/favorite/heart.tsx',
      'primitives/favorite/styles.css',
    ],
  },
  {
    name: 'feature',
    dependencies: ['clsx', 'lucide-react'],
    registryDependencies: ['button'],
    files: ['sections/feature/index.tsx', 'primitives/icon/index.tsx'],
  },
  {
    name: 'featured-blog-post-list',
    dependencies: [],
    registryDependencies: ['button', 'blog-post-card'],
    files: ['sections/featured-blog-post-list/index.tsx'],
  },
  {
    name: 'featured-image',
    dependencies: [],
    registryDependencies: ['button'],
    files: ['sections/featured-image/index.tsx'],
  },
  {
    name: 'featured-products-carousel',
    dependencies: [],
    registryDependencies: ['products-carousel'],
    files: ['sections/featured-products-carousel/index.tsx'],
  },
  {
    name: 'featured-products-list',
    dependencies: [],
    registryDependencies: ['button', 'product-card'],
    files: ['sections/featured-products-list/index.tsx'],
  },
  {
    name: 'featured-video',
    dependencies: ['clsx'],
    registryDependencies: ['button'],
    files: ['sections/featured-video/index.tsx'],
  },
  {
    name: 'footer',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: ['sections/footer/index.tsx'],
  },
  {
    name: 'header',
    dependencies: ['clsx', 'lucide-react', 'react-headroom'],
    registryDependencies: [],
    files: ['sections/header/index.tsx'],
  },
  {
    name: 'icon-block',
    dependencies: ['clsx', 'lucide-react'],
    registryDependencies: [],
    files: ['sections/icon-block/index.tsx', 'primitives/icon/index.tsx'],
  },
  {
    name: 'input',
    dependencies: ['clsx', 'lucide-react'],
    registryDependencies: [],
    files: ['primitives/input/index.tsx'],
  },
  {
    name: 'log-in',
    dependencies: ['clsx'],
    registryDependencies: ['button', 'input'],
    files: ['sections/log-in/index.tsx'],
  },
  {
    name: 'pagination',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: ['primitives/pagination/index.tsx'],
  },
  {
    name: 'product-card',
    dependencies: ['clsx'],
    registryDependencies: ['badge', 'checkbox'],
    files: [
      'primitives/product-card/index.tsx',
      'primitives/product-card/compare.tsx',
      'primitives/product-card/price.tsx',
    ],
  },
  {
    name: 'products-carousel',
    dependencies: ['clsx'],
    registryDependencies: ['product-card', 'carousel'],
    files: ['primitives/products-carousel/index.tsx'],
  },
  {
    name: 'product-detail',
    dependencies: ['clsx', 'embla-carousel-react'],
    registryDependencies: ['button', 'favorite', 'product-card', 'rating'],
    files: [
      'sections/product-detail/index.tsx',
      'sections/product-detail/product-gallery.tsx',
      'primitives/product-card/price.tsx',
    ],
  },
  {
    name: 'products-list',
    dependencies: [],
    registryDependencies: ['product-card'],
    files: ['primitives/products-list/index.tsx'],
  },
  {
    name: 'product-description',
    dependencies: [],
    registryDependencies: ['accordions'],
    files: ['sections/product-description/index.tsx'],
  },
  {
    name: 'rating',
    dependencies: [],
    registryDependencies: [],
    files: ['primitives/rating/index.tsx'],
  },
  {
    name: 'reviews',
    dependencies: [],
    registryDependencies: [],
    files: ['sections/reviews/index.tsx'],
  },
  {
    name: 'slide-carousel',
    dependencies: ['clsx', 'embla-carousel-react', 'lucide-react'],
    registryDependencies: [],
    files: ['sections/slide-carousel/index.tsx'],
  },
  {
    name: 'slideshow',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: ['sections/slideshow/index.tsx'],
  },
  {
    name: 'spinner',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: ['primitives/spinner/index.tsx'],
  },
  {
    name: 'subscribe',
    dependencies: ['clsx'],
    registryDependencies: ['input'],
    files: ['sections/subscribe/index.tsx'],
  },
  {
    name: 'textarea',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: ['primitives/textarea/index.tsx'],
  },
] satisfies Components
