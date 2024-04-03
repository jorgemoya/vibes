import { Suspense, lazy } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import Card from '@/components/ui/card'
import { CodeFromFile } from '@/components/ui/code-from-file'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface Props {
  path: string
}

export default function Viewer({ path }: Props) {
  const Component = lazy(() => import(`@/components/vibes/${path}/preview`))

  return (
    <Tabs defaultValue="preview">
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="preview">
        <Card>
          <ErrorBoundary
            fallback={<div className="flex justify-center p-5">Preview not found at {path}</div>}
          >
            <Suspense>
              <Component />
            </Suspense>
          </ErrorBoundary>
        </Card>
      </TabsContent>
      <TabsContent value="code">
        <Card>
          <ErrorBoundary
            fallback={<div className="flex justify-center p-5">Code not found at {path}</div>}
          >
            <CodeFromFile pathname={`/components/vibes/${path}/index.tsx`} />
          </ErrorBoundary>
        </Card>
      </TabsContent>
    </Tabs>
  )
}