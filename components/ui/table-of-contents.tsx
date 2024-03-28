'use client'

import React from 'react'

import clsx from 'clsx'

type HeadingType = { id: string; text: string; level: number }
function useHeadings() {
  const [headings, setHeadings] = React.useState<HeadingType[]>([])
  React.useEffect(() => {
    const elements = Array.from(document.querySelectorAll('h2, h3, h4, h5, h6'))
      .filter(element => element.id)
      .map(element => ({
        id: element.id,
        text: element.textContent ?? '',
        level: Number(element.tagName.substring(1)),
      }))
    setHeadings(elements)
  }, [])
  return headings
}

function getId(children: string) {
  return children
    .split(' ')
    .map(word => word.toLowerCase())
    .join('-')
}

type HeadingProps = {
  children: string
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  id?: string
}

export function Heading({ children, id, as: Element, ...props }: HeadingProps) {
  const theId = id ?? getId(children)
  return (
    <Element id={theId} {...props}>
      {children}
    </Element>
  )
}

function useScrollSpy(ids: string[], options: IntersectionObserverInit) {
  const [activeId, setActiveId] = React.useState<string>()
  const observer = React.useRef<IntersectionObserver>()
  React.useEffect(() => {
    const elements = ids.map(id => document.getElementById(id))
    observer.current?.disconnect()
    observer.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.id)
        }
      })
    }, options)
    elements.forEach(el => {
      if (el) {
        observer.current?.observe(el)
      }
    })
    return () => observer.current?.disconnect()
  }, [ids, options])
  return activeId
}

// Now, the function that renders it all
export function TableOfContents() {
  const headings = useHeadings()
  const activeId = useScrollSpy(
    headings.map(({ id }) => id),
    { rootMargin: '0% 0% -25% 0%' }
  )
  return (
    <div className="not-prose hidden xl:block">
      <nav className="sticky top-24 w-full">
        <div className="mb-3 text-sm font-bold">On this page</div>
        <ul>
          {headings.map(heading => (
            <li key={heading.id} className="m-0 p-0">
              <a
                className={clsx(
                  'block py-1 text-sm !font-light leading-normal transition-opacity before:hidden',
                  activeId === heading.id
                    ? 'opacity-100'
                    : 'opacity-50 hover:!opacity-100 dark:opacity-70'
                )}
                style={{
                  marginLeft: `${heading.level - 2}em`,
                }}
                href={`#${heading.id}`}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
