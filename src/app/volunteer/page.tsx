import React, { Suspense } from 'react'
import { PageShell } from '@/components/common/PageShell'
import { PageHero } from '@/components/common/PageHero'
import { ContactHub } from '@/components/contact/ContactHub'
import { IMAGES } from '@/lib/images'

export default function VolunteerPage() {
  return (
    <PageShell active="contact">
      <PageHero
        crumb="Volunteer"
        eyebrow="Hands & Hearts Together"
        title={
          <>
            Be part of our daily <span className="text-rust-600">acts of kindness</span>
          </>
        }
        lead="Spend a morning giving fodder, tutoring a child, or simply sitting in the presence of peaceful cows."
        image={IMAGES.volunteers}
      />
      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center text-ink-500">Loading form...</div>}>
        <ContactHub defaultTab="volunteer" />
      </Suspense>
    </PageShell>
  )
}
