import Image from 'next/image'

import clsx from 'clsx'

import InlineEmailForm from '@/vibes/soul/components/inline-email-form'

interface Props {
  image?: {
    src: string
    altText: string
  }
  title: string
  description: string
  theme?: 'brand-highlight' | 'brand-shadow' | 'light' | 'neutral'
}

export const Subscribe = function Subscribe({ image, title, description, theme }: Props) {
  return (
    <section
      className={clsx('@container', {
        ['bg-primary-shadow']: theme === 'brand-shadow',
        ['bg-primary-highlight']: theme === 'brand-highlight',
        ['bg-contrast-100']: theme === 'neutral',
        ['bg-background']: theme === 'light',
      })}
    >
      <div className="flex flex-col items-center @2xl:flex-row">
        {image && (
          <div className="relative aspect-square h-full w-full overflow-hidden @2xl:aspect-[9/12] @2xl:w-3/4 @4xl:aspect-square">
            <Image src={image.src} alt={image.altText} fill className="object-cover" />
          </div>
        )}

        <div
          className={clsx(
            'flex w-full items-center gap-y-12 px-3 @xl:px-6 @5xl:px-20',
            !image ? 'flex-col gap-x-10 py-20 @2xl:flex-row' : 'flex-col py-10 @3xl:gap-y-16',
            theme == 'brand-shadow' ? 'text-background' : 'text-foreground'
          )}
        >
          <div className="w-full">
            <h2 className="mb-2 text-4xl font-medium leading-none @7xl:text-5xl">{title}</h2>
            <p className="text-[15px] opacity-50">{description}</p>
          </div>

          <InlineEmailForm />
        </div>
      </div>
    </section>
  )
}

export default Subscribe
