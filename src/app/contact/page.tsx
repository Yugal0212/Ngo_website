import React, { Suspense } from 'react'
import { PageShell } from '@/components/common/PageShell'
import { PageHero } from '@/components/common/PageHero'
import { ContactHub } from '@/components/contact/ContactHub'
import { IMAGES } from '@/lib/images'

export default function ContactPage() {
  return (
    <PageShell active="contact">
      <PageHero
        crumb="Connect"
        eyebrow="Open Doors & Open Hearts"
        title={
          <>
            Connect with our team <span className="text-rust-600">at GauSeva</span>
          </>
        }
        lead="Visit our sanctuary, sponsor a cow, join as a volunteer, or partner on our compassion and education initiatives."
        image={IMAGES.founder}
      />
      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center text-ink-500">Loading form...</div>}>
        <ContactHub defaultTab="contact" />
      </Suspense>
    </PageShell>
  )
}
