'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import clsx from 'clsx'

import Button from '@/vibes/soul/components/button'
import ProgressSection from '@/vibes/soul/components/slideshow/progress-section'

interface Link {
  label: string
  href: string
}

interface Image {
  altText: string
  blurDataUrl?: string
  src: string
}

export interface Slide {
  title: string
  description?: string
  image?: Image
  cta?: Link
}
interface Props {
  slides: Slide[]
  className?: string
}

export const Slideshow = function Slideshow({ slides, className }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = (currentIndex + 1) % slides.length
      setCurrentIndex(nextIndex)
    }, 5000)

    return () => clearTimeout(timer)
  }, [currentIndex, slides.length, setCurrentIndex])

  return (
    <header
      className={clsx('relative h-dvh max-h-[880px] bg-primary-shadow @container', className)}
    >
      {slides?.map(({ title, description, image, cta }, idx) => {
        return (
          <div
            key={idx}
            className={clsx(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentIndex === idx ? 'z-10 opacity-100' : 'z-0 opacity-0'
            )}
          >
            <div className="absolute bottom-0 left-1/2 z-10 w-full -translate-x-1/2 bg-gradient-to-t from-foreground to-transparent pt-20 text-background">
              <div className="mx-auto max-w-screen-2xl px-3 @xl:px-6 @5xl:px-20">
                <h1 className="mb-1 font-heading text-5xl font-medium leading-none @2xl:text-8xl">
                  {title}
                </h1>
                {description && <p className="max-w-xl">{description}</p>}
                {cta?.href && (
                  <Button variant="tertiary" className="mt-4">
                    {cta.label}
                  </Button>
                )}

                <ProgressSection
                  currentIndex={currentIndex}
                  slides={slides}
                  setCurrentIndex={setCurrentIndex}
                  className="z-10 w-full pb-2 pt-4 @lg:pb-8 @lg:pt-10"
                />
              </div>
            </div>

            {/* TODO: Implement progressive loading with blurDataUrl */}
            {image?.src && (
              <Image
                src={image.src}
                placeholder={image.blurDataUrl ? 'blur' : 'empty'}
                blurDataURL={image.blurDataUrl}
                alt={image.altText}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            )}
          </div>
        )
      })}
    </header>
  )
}

export default Slideshow
