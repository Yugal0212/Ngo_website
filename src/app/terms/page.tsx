import React from 'react'
import { PageShell } from '@/components/common/PageShell'
import { PolicyContent } from '@/components/policies/PolicyContent'

export default function TermsPage() {
  return (
    <PageShell>
      <PolicyContent activeDoc="terms" />
    </PageShell>
  )
}
