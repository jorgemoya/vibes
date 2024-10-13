'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { Chip } from '@/vibes/soul/components/chip'

interface Props {
  label: string
  value: string
  name: string
}

const createUrl = (pathname: string, params: URLSearchParams) => {
  const paramsString = params.toString()
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`

  return `${pathname}${queryString}`
}

export function FilterCheckboxOption({ label, value, name }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const activeOptions = searchParams.getAll(name)
  const active = activeOptions.includes(value)
  const currentParams = Array.from(searchParams.entries())
  const newParams = active
    ? currentParams.filter(([k, v]) => k !== name || v !== value)
    : [...currentParams, [name, value]]

  const href = createUrl(pathname, new URLSearchParams(newParams))

  return (
    <Chip label={label} onClick={() => router.push(href, { scroll: false })} selected={active} />
  )
}
