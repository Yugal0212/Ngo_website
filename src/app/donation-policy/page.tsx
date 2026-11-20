import React from 'react'
import { PageShell } from '@/components/common/PageShell'
import { PolicyContent } from '@/components/policies/PolicyContent'

export default function DonationPolicyPage() {
  return (
    <PageShell>
      <PolicyContent activeDoc="donation" />
    </PageShell>
  )
}
