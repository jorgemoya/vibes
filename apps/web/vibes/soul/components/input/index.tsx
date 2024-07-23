'use client'

import { Ref, forwardRef } from 'react'

import clsx from 'clsx'

import Arrow from '@/vibes/soul/components/icon/Arrow'

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
  variant?: 'default' | 'price' | 'large'
}

export const Input = forwardRef(function Input(
  { className, variant = 'default', ...rest }: Props,
  ref: Ref<HTMLInputElement>
) {
  return (
    <div
      className={clsx(
        className,
        'relative w-full shrink-0 rounded-lg border border-contrast-100 bg-foreground font-medium transition-colors duration-200 focus-within:border-black focus:outline-none'
      )}
    >
      {variant === 'price' && (
        <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2">$</span>
      )}

      <input
        ref={ref}
        {...rest}
        className={clsx(
          'placeholder-contrast-gray-500 w-full bg-transparent placeholder:font-normal focus:outline-none',
          {
            'px-6 py-3': variant === 'default',
            'py-3 pl-12 pr-6': variant === 'price',
            'py-5 pl-5 pr-16': variant === 'large',
          }
        )}
      />

      {variant === 'large' && (
        <button className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg bg-black text-white transition-transform duration-300 hover:scale-95 focus:outline-none focus:ring-1">
          <Arrow />
        </button>
      )}
    </div>
  )
})

export default Input
