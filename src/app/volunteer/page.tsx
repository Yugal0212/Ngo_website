'use client'

import React, { Suspense } from 'react'
import { PageShell } from '@/components/common/PageShell'
import { PageHero } from '@/components/common/PageHero'
import { ContactHub } from '@/components/contact/ContactHub'
import { IMAGES } from '@/lib/images'
import { useLanguage } from '@/context/LanguageContext'

export default function VolunteerPage() {
  const { t, isGu } = useLanguage()

  return (
    <PageShell active="contact">
      <PageHero
        crumb={t.volunteerPage.crumb}
        eyebrow={t.volunteerPage.eyebrow}
        title={
          isGu ? (
            <>
              અબોલ જીવોની સેવામાં <span className="text-rust-600">સહભાગી બનો</span>
            </>
          ) : (
            <>
              Be part of our daily <span className="text-rust-600">acts of kindness</span>
            </>
          )
        }
        lead={t.volunteerPage.lead}
        image={IMAGES.volunteers}
      />
      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center text-ink-500">Loading form...</div>}>
        <ContactHub defaultTab="volunteer" />
      </Suspense>
    </PageShell>
  )
}
