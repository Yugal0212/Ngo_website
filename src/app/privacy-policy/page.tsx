import React from 'react'
import { PageShell } from '@/components/common/PageShell'
import { PolicyContent } from '@/components/policies/PolicyContent'

export default function PrivacyPolicyPage() {
  return (
    <PageShell>
      <PolicyContent activeDoc="privacy" />
    </PageShell>
  )
}
