import clsx from 'clsx'
import { CodeToHastOptions, ShikiTransformer, codeToHtml } from 'shiki'

import { transformers } from '@/lib/shiki'

import { CopyButton } from './copy-button'

interface Props {
  children: string
  hideCopyButton?: boolean
  lang?: CodeToHastOptions['lang']
  showLineNumbers?: boolean
}

export async function CodeBlock({
  children,
  lang = 'javascript',
  showLineNumbers = false,
  hideCopyButton = false,
}: Props) {
  const __html = await codeToHtml(children, {
    lang,
    themes: {
      light: 'github-light',
      dark: 'github-dark',
    },
    transformers: [
      ...transformers,
      {
        name: 'transformers:pre',
        pre(node) {
          if (showLineNumbers) {
            this.addClassToHast(node, 'relative')
            this.addClassToHast(node, 'show-line-numbers')
          }
        },
      } as ShikiTransformer,
    ],
  })

  return (
    <div className="my-5 bg-contrast-100 only:my-0 md:my-6">
      {!hideCopyButton && (
        <div className="pointer-events-none sticky top-0 z-10 flex w-full justify-end p-2">
          <CopyButton className="pointer-events-auto" clipboard={children} />
        </div>
      )}
      <div dangerouslySetInnerHTML={{ __html }} className={clsx(!hideCopyButton && '-mt-10')} />
    </div>
  )
}
