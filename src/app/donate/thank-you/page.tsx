import React, { Suspense } from 'react'
import { PageShell } from '@/components/common/PageShell'
import { ThankYouView } from '@/components/donate/ThankYouView'

export default function ThankYouPage() {
  return (
    <PageShell active="get involved" hideDonate>
      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center text-ink-500">Loading donation confirmation...</div>}>
        <ThankYouView />
      </Suspense>
    </PageShell>
  )
}
