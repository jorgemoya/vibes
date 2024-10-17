import { getProducts } from '@/vibes/soul/data'
import { breadcrumbs } from '@/vibes/soul/examples/primitives/breadcrumbs/warm'
import { copyright, footerLinks, logo } from '@/vibes/soul/examples/sections/footer/warm'
import { headerLinks } from '@/vibes/soul/examples/sections/header/warm'
import { ProductsPage } from '@/vibes/soul/pages/products'

export default function Preview() {
  const products = getProducts('Warm')
  return (
    <ProductsPage
      headerLinks={headerLinks}
      logo={logo}
      title="All Bags"
      breadcrumbs={breadcrumbs}
      products={products}
      footerLinks={footerLinks}
      copyright={copyright}
    />
  )
}
