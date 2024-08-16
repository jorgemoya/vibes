import Link from 'next/link'

import Button from '@/vibes/soul/components/button'
import { Product } from '@/vibes/soul/components/product-card'

import ProductList from '../products-list'

interface Link {
  label: string
  href: string
}

interface Props {
  title: string
  description?: string
  cta?: Link
  products: Product[]
}

export const FeaturedProductsList = function FeaturedProductsList({
  title,
  description,
  cta,
  products,
}: Props) {
  return (
    <section className="bg-background @container">
      <div className="relative mx-auto flex max-w-screen-2xl flex-col gap-6 py-10 @4xl:flex-row @4xl:py-24 @5xl:px-20">
        <div
          className="4xl:w-1/2 top-28 flex items-end justify-between gap-4 self-start px-3 
            @xl:px-6 @4xl:sticky @4xl:max-w-md @4xl:flex-col @4xl:items-start @4xl:justify-start @5xl:px-0 @6xl:w-4/12
          "
        >
          {title && (
            <h2 className="text-lg font-semibold leading-none text-foreground @4xl:text-6xl @4xl:font-medium">
              {title}
            </h2>
          )}
          {description && <p className="hidden pb-2 text-foreground @4xl:block">{description}</p>}
          {cta && (
            <Button
              className="h-5 bg-transparent !px-0 text-sm @4xl:h-12 @4xl:bg-primary @4xl:!px-6"
              asChild
            >
              <Link href={cta.href}>{cta.label}</Link>
            </Button>
          )}
        </div>

        {products && <ProductList products={products} className="4xl:w-1/2 @6xl:w-8/12" />}
      </div>
    </section>
  )
}

export default FeaturedProductsList