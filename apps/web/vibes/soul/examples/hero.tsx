import Hero from '@/vibes/soul/components/hero'

export const heroSlides = [
  {
    heading: 'Slide 1',
    image: {
      url: 'https://rstr.in/monogram/vibes/vgdjHDINE6V',
      dimensions: {
        width: 3200,
        height: 1840,
      },
      alt: 'alt',
    },
    link: {
      href: '/',
      target: '_self',
    },
  },
  {
    heading: 'Slide 2',
    image: {
      url: 'https://rstr.in/monogram/vibes/YOD5DuBfoFM',
      dimensions: {
        width: 701,
        height: 900,
      },
      alt: 'alt',
    },
    link: {
      href: '/',
      target: '_self',
    },
  },
  {
    heading: 'Slide 3',
    image: {
      url: 'https://rstr.in/monogram/vibes/6GmqnHGoquY',
      dimensions: {
        width: 1600,
        height: 880,
      },
      alt: 'alt',
    },
    link: {
      href: '/',
      target: '_self',
    },
  },
]

export default function Preview() {
  return (
    <div className="flex flex-col gap-3">
      <Hero slides={heroSlides} />
    </div>
  )
}
