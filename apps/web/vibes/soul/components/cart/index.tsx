'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { clsx } from 'clsx'
import { Trash2 } from 'lucide-react'

import { Button } from '@/vibes/soul/components/button'
import { Counter } from '@/vibes/soul/components/counter'
import { Dropdown } from '@/vibes/soul/components/dropdown'
import { Input } from '@/vibes/soul/components/input'
import { Modal } from '@/vibes/soul/components/modal'
import { Product } from '@/vibes/soul/components/product-card'

interface Image {
  altText: string
  src: string
}

export interface CartProduct extends Product {
  price: string
  quantity: number
}

interface CartProps {
  products: CartProduct[]
}

export const Cart = function Cart({ products }: CartProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [removeItemModalIsOpen, setRemoveItemModalIsOpen] = useState(false)
  const [addressModalIsOpen, setAddressModalIsOpen] = useState(false)

  // TODO: Remove this when we have a real API
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="mx-auto max-w-screen-2xl @container">
      <div className="flex w-full flex-col gap-10 px-3 pb-10 pt-24 @xl:px-6 @4xl:flex-row @4xl:gap-20 @4xl:pb-20 @4xl:pt-32 @5xl:px-20">
        {/* Cart Side */}
        <div className={clsx(products.length > 0 && '@4xl:w-2/3', 'w-full')}>
          <h1 className="mb-10 font-heading text-4xl font-medium leading-none @xl:text-5xl">
            Your Cart
            {!isLoading && products.length > 0 && (
              <span className="ml-4 text-contrast-200">{products.length}</span>
            )}
          </h1>

          {/* Cart Items */}
          <ul className="flex flex-col gap-5 gap-y-10">
            {isLoading
              ? Array.from({ length: 2 }).map((_, index) => {
                  // Skeleton Loader
                  return (
                    <div key={index} className="flex animate-pulse items-center gap-x-5">
                      <div className="h-56 w-full rounded-lg bg-contrast-100" />
                    </div>
                  )
                })
              : // Cart Items
                products.map(({ id, name, href, image, price, subtitle, quantity }) => (
                  <li
                    className="flex flex-col items-start gap-x-5 gap-y-6 @sm:flex-row @sm:items-center @sm:gap-y-4"
                    key={id}
                  >
                    {image && (
                      <Link
                        href={href}
                        className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-contrast-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 @sm:max-w-36"
                      >
                        <Image fill src={image.src} alt={image.altText} className="object-cover" />
                      </Link>
                    )}
                    <div className="flex flex-grow flex-wrap justify-between gap-y-2">
                      <div className="flex flex-col @xl:w-1/2 @xl:pr-4">
                        <span className="font-medium">{name}</span>
                        <span className="text-contrast-300">{subtitle}</span>
                      </div>
                      <div className="flex w-full flex-wrap items-center justify-between gap-x-5 gap-y-2 @sm:justify-start @xl:w-1/2 @xl:flex-nowrap">
                        <span className="font-medium @xl:ml-auto">{price}</span>
                        <Counter current={quantity} />
                        {/* Remove Item Button & Confirmation Modal */}
                        <Modal
                          isOpen={removeItemModalIsOpen}
                          setOpen={setRemoveItemModalIsOpen}
                          trigger={
                            <button className="-ml-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 hover:bg-contrast-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4">
                              <Trash2 strokeWidth={1} size={18} />
                            </button>
                          }
                          content={
                            <div className="max-w-xs">
                              <h2 className="text-center font-heading text-2xl font-medium">
                                Remove Item From Cart?
                              </h2>
                              <p className="mt-2 text-center text-sm text-contrast-400">
                                Are you sure you want to remove this item from your cart? Once
                                removed, you cannot undo it.
                              </p>
                              <Button
                                variant="primary"
                                className="mt-6 w-full !bg-error [&>div]:text-white"
                                onClick={() => {
                                  // TODO: Remove Item from Cart
                                  setRemoveItemModalIsOpen(false)
                                }}
                              >
                                Remove From Cart
                              </Button>
                              <Button
                                variant="secondary"
                                className="mt-2 w-full"
                                onClick={() => setRemoveItemModalIsOpen(false)}
                              >
                                Cancel
                              </Button>
                            </div>
                          }
                        />
                      </div>
                    </div>
                  </li>
                ))}

            {products.length === 0 && (
              <div>
                <h2 className="mb-2 text-center text-3xl font-medium text-contrast-300">
                  Your cart is empty
                </h2>
                <p className="mx-auto max-w-sm text-center text-contrast-300">Go ahead & explore</p>
              </div>
            )}
          </ul>
        </div>

        {/* Summary Side */}
        {/* TODO: Need API structure to generate dynamically */}
        {isLoading ? (
          // Skeleton Loader
          <div className="mt-1 animate-pulse @4xl:w-1/3">
            <div className="mt-20 h-96 w-full rounded bg-contrast-100" />
          </div>
        ) : (
          products.length > 0 && (
            <div className="@4xl:w-1/3">
              <h2 className="mb-10 font-heading text-4xl font-medium leading-none @xl:text-5xl">
                Summary
              </h2>
              <table aria-label="Receipt Summary" className="w-full">
                <caption className="sr-only">Receipt Summary</caption>
                <tbody>
                  <tr className="border-b border-contrast-100">
                    <td>Subtotal</td>
                    <td className="py-4 text-right">$50.00</td>
                  </tr>
                  <tr className="border-b border-contrast-100">
                    <td>Shipping</td>
                    <td className="py-4 text-right">
                      {/* Add Address Button and Modal Form */}
                      <Modal
                        isOpen={addressModalIsOpen}
                        setOpen={setAddressModalIsOpen}
                        trigger={
                          <button className="rounded-lg font-medium ring-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                            Add Address
                          </button>
                        }
                        content={
                          <div className="w-full max-w-md">
                            <h2 className="font-heading text-3xl font-medium">Add Address</h2>
                            <form className="mt-10 grid w-full grid-cols-1 gap-5 @sm:grid-cols-2">
                              <Input type="text" label="Address Line 1" />
                              <Input type="text" label="Address Line 2" />
                              <Input type="text" label="Suburb/City" />
                              <Dropdown
                                label="State/Provence"
                                labelOnTop
                                items={['Alabama', 'California', 'Georgia', 'Florida', 'Texas']}
                              />
                              <Dropdown
                                label="Country"
                                labelOnTop
                                items={['USA', 'England', 'Brazil']}
                              />
                              <Input type="text" label="ZIP/Postcode" />
                              <div className="grid w-full grid-cols-1 gap-5 @sm:col-span-2 @sm:mt-10 @md:grid-cols-2">
                                <Button variant="secondary" className="order-2 w-full @md:order-1">
                                  Cancel
                                </Button>
                                {/* TODO: disbale until form is complete */}
                                <Button disabled variant="primary" className="w-full">
                                  Add Address
                                </Button>
                              </div>
                            </form>
                          </div>
                        }
                      />
                    </td>
                  </tr>
                  <tr className="border-b border-contrast-100">
                    <td>Tax</td>
                    <td className="py-4 text-right">$4.50</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="text-xl">
                    <th scope="row" className="text-left">
                      Grand Total
                    </th>
                    <td className="py-10 text-right">$59.50</td>
                  </tr>
                </tfoot>
              </table>
              <Button className="w-full">Checkout</Button>
            </div>
          )
        )}
      </div>
    </div>
  )
}
