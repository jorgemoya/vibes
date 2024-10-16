import {
  accordions,
  productDescriptionImage,
} from '@/vibes/soul/examples/sections/product-description/warm'
import { product } from '@/vibes/soul/examples/sections/product-detail/warm'
import { ProductPage } from '@/vibes/soul/pages/product'

export default function Preview() {
  return (
    <ProductPage
      product={product}
      accordions={accordions}
      productDescriptionImage={productDescriptionImage}
    />
  )
}
