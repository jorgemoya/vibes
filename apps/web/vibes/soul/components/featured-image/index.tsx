import Image from 'next/image'

import { Button } from '@/vibes/soul/components/button'

type Props = {
  title: string
  description: string
  image: {
    src: string
    altText: string
  }
  cta: {
    href: string
    label: string
  }
}

export const FeaturedImage = function FeaturedImage({ title, description, image, cta }: Props) {
  return (
    <section className="relative h-[100dvh] max-h-[880px] bg-primary-shadow @container">
      <div className="flex h-full flex-col @3xl:flex-row">
        <div className="relative h-full w-full @3xl:w-1/2 @5xl:w-3/5">
          <Image src={image.src} alt={image.altText} fill className="object-cover" />
        </div>

        <div className="z-10 mx-auto flex w-full max-w-7xl flex-col items-start justify-end gap-4 px-3 py-10 text-background @xl:px-6 @3xl:w-1/2 @5xl:w-2/5 @5xl:p-20">
          <h1 className="max-w-xl text-[40px] font-medium">{title}</h1>
          <p className="max-w-xl pb-2">{description}</p>
          <Button link={{ href: cta.href }}>{cta.label}</Button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedImage
