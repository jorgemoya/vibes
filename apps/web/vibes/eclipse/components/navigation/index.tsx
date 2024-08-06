'use client'

import Image from 'next/image'
import Link from 'next/link'
import { forwardRef, useEffect, useState } from 'react'
import ReactHeadroom from 'react-headroom'

import * as Accordion from '@radix-ui/react-accordion'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import clsx from 'clsx'
import { ChevronDown } from 'lucide-react'

import Button from '../button'

type SecondaryMenuItem = {
  title: string
  href: string
}

type InnerMenuItem = {
  title: string
  content: string
  href: string
  icon?: React.ReactNode
}

type SubMenuItem = {
  title?: string
  content?: string
  innerMenuItems?: InnerMenuItem[]
}

type imageContainer = {
  title: string
  description: string
  img: string
  alt: string
}

type MenuItem = {
  id: string
  title: string
  description: string
  href?: string
  subMenuItems: SubMenuItem[]
  img?: imageContainer[]
}

type NavigationProps = {
  logoImage: string
  mainMenuItems: MenuItem[]
  secondaryMenuItems: SecondaryMenuItem[]
  fixed?: boolean
  logoLink?: string
  ctaText?: string
  ctaLink?: string
}

const Navigation = ({
  logoImage,
  logoLink = '/',
  mainMenuItems,
  secondaryMenuItems,
  fixed,
  ctaText,
  ctaLink,
  ...rest
}: NavigationProps) => {
  const [innerItems, setInnerItems] = useState<InnerMenuItem[]>([])
  const [activeTitle, setActiveTitle] = useState<string>('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleMouseEnter = (menuItem: MenuItem) => {
    setActiveTitle(menuItem.subMenuItems[0].title || '')
    setInnerItems(menuItem.subMenuItems[0].innerMenuItems || [])
  }

  const handleClick = (title: string) => {
    setActiveTitle(title)
    const selectedMenuItem = mainMenuItems.find(item =>
      item.subMenuItems.some(subItem => subItem.title === title)
    )
    if (selectedMenuItem) {
      const selectedSubMenu = selectedMenuItem.subMenuItems.find(subItem => subItem.title === title)
      if (selectedSubMenu) {
        setInnerItems(selectedSubMenu.innerMenuItems || [])
      }
    }
  }

  return (
    <ReactHeadroom className="!h-24 w-full [&>div]:px-5 [&>div]:pt-5">
      <NavigationMenu.Root
        delayDuration={0}
        className="mx-auto max-w-6xl rounded-[32px] border border-contrast-400 bg-contrast-500/50 backdrop-blur-xl @container @5xl:rounded-full"
      >
        <div className="flex items-stretch p-2">
          <div className="flex-1 shrink-0 place-content-center">
            <Link href={logoLink}>
              <Image src={logoImage} alt="Logo" width={88} height={24} />
            </Link>
          </div>

          <NavigationMenu.List className="hidden h-full items-stretch @5xl:flex" asChild>
            <div className="relative">
              {mainMenuItems.map((menuItem, index) => (
                <NavigationMenu.Item value={menuItem.id} key={index} asChild>
                  <>
                    {menuItem.href ? (
                      <NavigationMenu.Trigger>
                        <a
                          className="select-none px-3 py-2 text-sm font-normal leading-none text-foreground/70 outline-none transition-colors hover:text-foreground"
                          href={menuItem.href}
                        >
                          {menuItem.title}
                        </a>
                      </NavigationMenu.Trigger>
                    ) : (
                      <NavigationMenu.Trigger
                        onMouseEnter={() => handleMouseEnter(menuItem)}
                        className={`group flex select-none items-center justify-between gap-0.5 rounded-[4px] px-3 py-2 text-sm font-normal leading-none text-foreground/70 outline-none transition-colors hover:text-foreground ${menuItem.id}`}
                      >
                        {menuItem.title}
                        <ChevronDown
                          size={16}
                          className="relative top-[1px] transition-transform duration-200 ease-in group-data-[state=open]:-rotate-180"
                          aria-hidden
                        />
                      </NavigationMenu.Trigger>
                    )}

                    {menuItem.subMenuItems.length > 0 && (
                      <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromRight data-[motion=from-end]:animate-enterFromLeft data-[motion=to-start]:animate-exitToRight data-[motion=to-end]:animate-exitToLeft pointer-events-auto absolute left-0 top-0 w-full rounded-2xl bg-contrast-500/50 backdrop-blur @2xl:w-auto">
                        <div
                          className={`content-container grid list-none rounded-2xl border border-contrast-400 ${
                            menuItem.subMenuItems[0].title && menuItem.img
                              ? 'grid-cols-[250px_1fr_300px]'
                              : menuItem.subMenuItems[0].title
                                ? 'grid-cols-[250px_1fr]'
                                : menuItem.img
                                  ? 'grid-cols-[1fr_300px]'
                                  : 'grid-cols-[1fr]'
                          }`}
                        >
                          <div
                            className={`${
                              menuItem.subMenuItems[0].title ? '' : 'hidden'
                            } z-10 h-full rounded-l-2xl bg-[#13171E] backdrop-blur-xl`}
                          >
                            <ul
                              className={clsx(
                                'list group m-0 grid w-full list-none gap-2 p-2',
                                'data-[enhanced=true]:after:opacity-[var(--opacity,0)] data-[enhanced=true]:after:[transition:opacity_0.025s,inset_0.025s_0.025s] data-[enhanced=true]:hover:after:opacity-[1] data-[enhanced=true]:hover:after:[transition:opacity_0.2s_0.2s,inset_0.2s]',
                                "after:pointer-events-none after:absolute after:bottom-[var(--bottom)] after:left-[var(--left)] after:right-[var(--right)] after:top-[var(--top)] after:z-[1] after:h-[var(--height)] after:w-[var(--width)] after:rounded-[0.5rem] after:bg-[#39415050] after:content-[''] after:[transition:inset_0.2s]"
                              )}
                            >
                              {menuItem.subMenuItems.map((subMenuItem, subIndex) => (
                                <ListItem
                                  key={subIndex}
                                  title={subMenuItem.title || ''}
                                  content={subMenuItem.content || ''}
                                  href="#"
                                  isActive={activeTitle === subMenuItem.title}
                                  onClick={() => handleClick(subMenuItem.title || '')}
                                />
                              ))}
                            </ul>
                          </div>
                          <ul
                            className={clsx(
                              `group grid ${
                                innerItems.length < 4 ? 'grid-cols-1' : 'grid-cols-1 xl:grid-cols-2'
                              } m-0 h-full w-full min-w-[400px] list-none items-start justify-between gap-2 p-2 xl:min-w-[500px]`,
                              'data-[enhanced=true]:after:opacity-[var(--opacity,0)] data-[enhanced=true]:after:[transition:opacity_0.025s,inset_0.025s_0.025s] data-[enhanced=true]:hover:after:opacity-[1] data-[enhanced=true]:hover:after:[transition:opacity_0.2s_0.2s,inset_0.2s]',
                              "after:pointer-events-none after:absolute after:bottom-[var(--bottom)] after:left-[var(--left)] after:right-[var(--right)] after:top-[var(--top)] after:z-[1] after:h-[var(--height)] after:w-[var(--width)] after:rounded-[0.5rem] after:bg-[#39415050] after:content-[''] after:[transition:inset_0.2s]"
                            )}
                          >
                            {innerItems.map((item, innerIndex) => (
                              <ListItem
                                key={innerIndex}
                                title={item.title}
                                content={item.content}
                                href={item.href}
                                isActive={false}
                                onClick={() => {}}
                                isInnerMenuItem={true}
                                icon={item.icon}
                              />
                            ))}
                          </ul>

                          {menuItem.img && menuItem.img.length > 0 && (
                            <div className="relative m-2 ml-0 max-h-[250px] min-h-[200px] overflow-hidden rounded-lg bg-[#5F49F4]/25 p-3.5">
                              <div className="absolute left-1/2 right-1/2 top-32 h-full w-full rounded-full bg-[#5F49F4] opacity-70 blur-[120px]" />
                              <p className="text-foreground">{menuItem.img[0].title}</p>
                              <p className="text-foreground/50">{menuItem.img[0].description}</p>
                              <img
                                className="absolute left-20 top-32"
                                src={menuItem.img[0].img}
                                alt={menuItem.img[0].alt}
                              />
                            </div>
                          )}
                        </div>
                      </NavigationMenu.Content>
                    )}
                  </>
                </NavigationMenu.Item>
              ))}

              <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[1px] bg-gradient-to-r from-primary/0 via-primary to-primary/0 transition-all duration-200" />
            </div>
          </NavigationMenu.List>

          <div className="flex flex-1 items-center justify-end gap-4">
            <div className="hidden gap-5 @5xl:flex">
              {secondaryMenuItems.map((menuItem, index) => (
                <Link
                  className="text-sm text-foreground/70 transition-colors hover:text-foreground"
                  href={menuItem.href}
                >
                  {menuItem.title}
                </Link>
              ))}
            </div>

            <div
              className="group relative flex h-8 w-5 cursor-pointer items-center justify-center rounded-md @5xl:hidden"
              onClick={handleMobileMenuToggle}
            >
              <span
                className={`absolute top-1/2 h-0.5 w-full bg-foreground ${
                  isMobileMenuOpen ? 'translate-y-0 rotate-45 ' : '-translate-y-1'
                } transition-all duration-150`}
              ></span>
              <span
                className={`absolute top-1/2 h-0.5 w-full -translate-y-1/2 bg-foreground transition-all duration-150 ${
                  isMobileMenuOpen ? 'translate-y-0 -rotate-45' : 'translate-y-0.5'
                }`}
              ></span>
            </div>

            <Button variant="primary" size="small" className="hidden @2xl:inline-flex">
              Book a demo
            </Button>
          </div>
        </div>

        <div
          className={`flex w-full flex-col overflow-hidden transition-all duration-300 ease-in-out @5xl:hidden ${
            isMobileMenuOpen ? 'max-h-[calc(100svh-6rem)]' : 'max-h-0'
          }`}
        >
          <div
            className={`max-h-[calc(100svh-1.25rem)] overflow-y-scroll [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
              isMobileMenuOpen ? 'border-t border-foreground/10' : 'border-none'
            }`}
          >
            <MobileMenu mainMenuItems={mainMenuItems} />
          </div>
          <div className="w-full flex-col items-start gap-3.5 border-t border-foreground/10 p-4">
            <Button variant="primary" size="small" borderGlow={false}>
              Book a Demo
            </Button>
          </div>
        </div>

        <div className="perspective-[2000px] absolute left-0 top-full flex w-full justify-center">
          <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] transition-[width,_height] duration-300 @2xl:w-[var(--radix-navigation-menu-viewport-width)]" />
        </div>
      </NavigationMenu.Root>
    </ReactHeadroom>
  )
}

const ListItem = ({
  title,
  content,
  href,
  isActive,
  onClick,
  isInnerMenuItem,
  icon,
}: {
  title: string
  content: string
  href: string
  isActive: boolean
  onClick: () => void
  isInnerMenuItem?: boolean
  icon?: React.ReactNode
}) => {
  useEffect(() => {
    const LIST = document.querySelectorAll('.list') as NodeListOf<HTMLElement>
    LIST.forEach(list => {
      list.dataset.enhanced = 'true'
    })
    let current: HTMLElement | null = null
    const sync = () => {
      if (current) {
        const parents = document.querySelectorAll('.content-container')
        parents.forEach(parent => {
          const parentBounds = parent.getBoundingClientRect()
          if (current) {
            const currentBounds = current.getBoundingClientRect()

            const relativeTop = currentBounds.top - parentBounds.top
            const relativeLeft = currentBounds.left - parentBounds.left
            const relativeRight = parentBounds.right - currentBounds.right
            const relativeBottom = parentBounds.bottom - currentBounds.bottom

            const relativeHeight = currentBounds.height
            const relativeWidth = currentBounds.width

            LIST.forEach(list => {
              list.dataset.enhanced = 'true'
              list.style.setProperty('--top', `${relativeTop}px`)
              list.style.setProperty('--right', `${relativeRight}px`)
              list.style.setProperty('--bottom', `${relativeBottom}px`)
              list.style.setProperty('--left', `${relativeLeft}px`)
              list.style.setProperty('--height', `${relativeHeight}px`)
              list.style.setProperty('--width', `${relativeWidth}px`)
            })
          }
        })
      }
    }
    const UPDATE = ({ x, y }: { x: number; y: number }) => {
      const ARTICLE = document
        .elementFromPoint(x, y)
        ?.closest('.listitem')
        ?.querySelector('.list-item-container') as HTMLElement | null
      if (ARTICLE !== current) {
        current = ARTICLE
        sync()
      }
    }
    LIST.forEach(list => {
      list.addEventListener('pointermove', UPDATE)
    })
    window.addEventListener('resize', sync)
  }, [])

  return (
    <li
      className={`listitem relative z-10 h-full cursor-pointer list-none rounded-lg transition-all duration-150 hover:[--li-active:1] ${
        isActive ? 'bg-background/50 ' : ''
      }`}
      key={title}
    >
      <a
        href={href}
        onClick={onClick}
        className={clsx(
          'list-item-container relative flex items-start gap-x-2 p-3 py-2.5',
          "group-[&:not([data-enhanced])]:after:absolute group-[&:not([data-enhanced])]:after:inset-0 group-[&:not([data-enhanced])]:after:-z-[2] group-[&:not([data-enhanced])]:after:rounded-2xl group-[&:not([data-enhanced])]:after:bg-[hsl(0_0%_10%)]  group-[&:not([data-enhanced])]:after:opacity-[var(--li-active,0)] group-[&:not([data-enhanced])]:after:transition-opacity group-[&:not([data-enhanced])]:after:duration-200 group-[&:not([data-enhanced])]:after:content-['']"
        )}
      >
        {isInnerMenuItem && icon && <div className="mt-0.5 h-4 w-4">{icon}</div>}

        <div className="flex flex-col gap-y-0.5">
          <h3 className="text-sm text-foreground">{title}</h3>
          <p className="text-xs font-normal text-foreground/50">{content}</p>
        </div>

        {isActive && (
          <span
            className="absolute -right-4 top-1/2 h-4 w-4 -translate-y-1/2
         bg-[#13171E] shadow-[1.5px_0px_0px_rgba(255,255,255,0.2)]"
            style={{
              clipPath: 'polygon(45% 0%, 45% 100%, 100% 45%)',
            }}
          ></span>
        )}
      </a>
    </li>
  )
}

const AccordionItem = forwardRef<
  HTMLDivElement,
  { children: React.ReactNode; className?: string; value: string }
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Item
    className={clsx(
      'focus-within:shadow-mauve12 mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10',
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Accordion.Item>
))

const AccordionTrigger = forwardRef<
  HTMLButtonElement,
  { children: React.ReactNode; className?: string }
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="flex">
    <Accordion.Trigger
      className={clsx(
        'group flex h-12 flex-1 cursor-pointer items-center justify-between p-2 text-base leading-none text-foreground outline-none',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDown
        className="ease-[cubic-bezier(0.87,_0,_0.13,_1)] ml-5 text-foreground transition-transform duration-300 group-data-[state=open]:rotate-180"
        aria-hidden
      />
    </Accordion.Trigger>
  </Accordion.Header>
))

const AccordionContent = forwardRef<
  HTMLDivElement,
  { children: React.ReactNode; className?: string }
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={clsx(
      'data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px] text-foreground',
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    <div className="flex flex-col gap-y-2.5">{children}</div>
  </Accordion.Content>
))

const MobileMenu = ({ mainMenuItems }: { mainMenuItems: MenuItem[] }) => (
  <Accordion.Root className="w-full p-2" type="single" defaultValue="item-1" collapsible>
    <>
      {mainMenuItems.map((menuItem, index) => (
        <AccordionItem value={menuItem.id} key={index}>
          {menuItem.href ? (
            <a
              className="group flex h-11 flex-1 cursor-pointer items-center justify-between p-2 text-base leading-none text-foreground outline-none"
              href={menuItem.href}
            >
              {menuItem.title}
            </a>
          ) : (
            <AccordionTrigger>{menuItem.title}</AccordionTrigger>
          )}
          <AccordionContent>
            {menuItem.subMenuItems.map((subMenuItem, subIndex) => (
              <div key={subIndex}>
                {subMenuItem.innerMenuItems && (
                  <ul className="flex flex-col">
                    {subMenuItem.innerMenuItems.map((innerItem, innerIndex) => (
                      <li key={innerIndex} className="flex items-start gap-x-2 px-3 py-2.5">
                        {innerItem.icon && <div className="mt-0.5 h-4 w-4">{innerItem.icon}</div>}
                        <div className="flex flex-col gap-y-0.5">
                          <a className="text-sm text-foreground" href={innerItem.href}>
                            {innerItem.title}
                          </a>
                          <p className="text-xs font-normal text-foreground/50">
                            {innerItem.content}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
      <a
        className="flex h-11 flex-1 cursor-pointer items-start justify-start p-2 py-3 text-base text-foreground outline-none"
        href="#"
      >
        Log In
      </a>
    </>
  </Accordion.Root>
)

export default Navigation
