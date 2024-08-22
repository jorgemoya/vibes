import { Courier_Prime, Inter } from 'next/font/google'
import localFont from 'next/font/local'

import { Brands } from '@/vibes/schema'

const inter = Inter({ subsets: ['latin'], display: 'swap' })
const courier = Courier_Prime({ subsets: ['latin'], display: 'swap', weight: '400' })
const sporting = localFont({
  src: 'fonts/SportingGrotesque-Regular.woff2',
  display: 'swap',
})

export const brands = [
  {
    name: 'Brand 1',
    logo: '',
    cssVars: {
      '--primary': '43	100%	73%',
      '--accent': '9 99% 61%',
      '--background': '0 255% 100%',
      '--foreground': '0 0% 0%',
      '--success': '126 100% 34%',
      '--error': '0 100% 50%',
      '--warning': '0 0% 0%',
      '--info': '0 0% 0%',
      '--contrast-100': '0 0% 96%',
      '--contrast-200': '0 0% 87%',
      '--contrast-300': '0 0% 67%',
      '--contrast-400': '0 0% 51%',
      '--contrast-500': '0 0% 27%',
      '--font-family-heading': inter.style.fontFamily,
      '--font-family-body': inter.style.fontFamily,
      '--font-family-mono': courier.style.fontFamily,
      '--font-size-xs': '1rem',
      '--font-size-sm': '1.125rem',
      '--font-size-base': '1.25rem',
      '--font-size-lg': '1.5rem',
      '--font-size-xl': '1.625rem',
      '--font-size-2xl': '1.75rem',
      '--font-size-3xl': '1.875rem',
      '--font-size-4xl': '2rem',
      '--font-size-5xl': '3rem',
      '--font-size-6xl': '3.375rem',
      '--font-size-7xl': '5rem',
      '--shadow-sm': '0px 2px 5px rgba(0, 0, 0, 0.05)',
      '--shadow-base': '0px 2px 5px rgba(0, 0, 0, 0.1)',
      '--shadow-md': '0px 2px 5px rgba(0, 0, 0, 0.15)',
      '--shadow-lg': '0px 2px 5px rgba(0, 0, 0, 0.2)',
      '--shadow-xl': '0px 2px 5px rgba(0, 0, 0, 0.25)',
    },
  },
  {
    name: 'Brand 2',
    logo: '',
    cssVars: {
      '--primary': '0 0% 100%',
      '--accent': '0 0% 83%',
      '--background': '0 0% 100%',
      '--foreground': '234 80% 35%',
      '--success': '126 100% 34%',
      '--error': '0 100% 50%',
      '--warning': '234 80% 35%',
      '--info': '234 80% 35%',
      '--contrast-100': '0 0% 96%',
      '--contrast-200': '0 0% 87%',
      '--contrast-300': '0 0% 67%',
      '--contrast-400': '0 0% 51%',
      '--contrast-500': '0 0% 27%',
      '--font-family-heading': sporting.style.fontFamily,
      '--font-family-body': 'Arial, system-ui, sans-serif',
      '--font-family-mono': 'Arial, system-ui, sans-serif',
      '--font-size-xs': '1rem',
      '--font-size-sm': '1.125rem',
      '--font-size-base': '1.25rem',
      '--font-size-lg': '1.5rem',
      '--font-size-xl': '1.625rem',
      '--font-size-2xl': '1.75rem',
      '--font-size-3xl': '1.875rem',
      '--font-size-4xl': '2rem',
      '--font-size-5xl': '3rem',
      '--font-size-6xl': '3.375rem',
      '--font-size-7xl': '5rem',
      '--shadow-sm': '0px 2px 5px rgba(0, 0, 0, 0.05)',
      '--shadow-base': '0px 2px 5px rgba(0, 0, 0, 0.1)',
      '--shadow-md': '0px 2px 5px rgba(0, 0, 0, 0.15)',
      '--shadow-lg': '0px 2px 5px rgba(0, 0, 0, 0.2)',
      '--shadow-xl': '0px 2px 5px rgba(0, 0, 0, 0.25)',
    },
  },
] satisfies Brands
