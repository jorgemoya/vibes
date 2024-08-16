import Image from 'next/image'
import Link from 'next/link'
import { ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'
import { ArrowUpRight } from 'lucide-react'

export type CardProps = {
  title: string
  image: {
    src: string
    altText: string
  }
  href: string
  textContrast?: 'light' | 'dark'
}

export const Card = function Card({
  title,
  image,
  href,
  textContrast = 'dark',
  ...props
}: CardProps & ComponentPropsWithoutRef<'a'>) {
  return (
    <Link
      href={href}
      className="group relative flex aspect-[3/4] w-full min-w-56 max-w-md flex-col gap-2 rounded-xl ring-primary focus:outline-0 focus:ring-2 @4xl:min-w-72"
      {...props}
    >
      <ArrowUpRight
        strokeWidth={1.5}
        className={clsx(
          'absolute right-2.5 top-2.5 z-10 transition-transform duration-300 ease-out group-hover:-translate-y-1.5 group-hover:translate-x-1.5 @4xl:right-5 @4xl:top-5',
          textContrast === 'light' ? 'text-background' : 'text-foreground'
        )}
      />
      <div className="relative h-full w-full overflow-hidden rounded-lg @4xl:rounded-xl">
        <Image
          src={image.src}
          fill
          alt={image.altText}
          className="w-full select-none bg-contrast-100 object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </div>
      <span
        className={clsx(
          'line-clamp-1 text-lg font-medium text-foreground @4xl:absolute @4xl:bottom-5 @4xl:left-5',
          textContrast === 'light' ? '@4xl:text-background' : '@4xl:text-foreground'
        )}
      >
        {title}
      </span>
    </Link>
  )
}

export default Card