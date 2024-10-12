import { unstable_cache } from 'next/cache'

import { CartLineItem } from '@/vibes/soul/components/cart'

export let productsLuxury: CartLineItem[] = [
  {
    id: '1',
    title: 'DARYA LUG SOLE FISHERMAN',
    subtitle: 'Cuoro Embossed Snake',
    price: '$40',
    image: {
      src: 'https://rstr.in/monogram/vibes/18bzcr01WWx',
      altText: 'DARYA LUG SOLE FISHERMAN',
    },
    quantity: 1,
  },
  {
    id: '2',
    title: 'ROMA ROUND TOE BALLET FLAT',
    subtitle: 'Rust Closed Woven Calf',
    price: '$42',
    image: {
      src: 'https://rstr.in/monogram/vibes/yzjuCwK-5tz',
      altText: 'ROMA ROUND TOE BALLET FLAT',
    },
    quantity: 2,
  },
]

// eslint-disable-next-line @typescript-eslint/require-await
export const getProducts = unstable_cache(async () => productsLuxury, ['products-luxury'])

export function removeProduct(id: string) {
  productsLuxury = productsLuxury.filter(product => product.id !== id)
}

export function updateProductQuantity(id: string, quantity: number) {
  const productToUpdate = productsLuxury.find(product => product.id === id)
  if (productToUpdate) {
    productToUpdate.quantity = quantity
  }
}
