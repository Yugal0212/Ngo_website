'use client'

import React, { Suspense } from 'react'
import { PageShell } from '@/components/common/PageShell'
import { PageHero } from '@/components/common/PageHero'
import { ContactHub } from '@/components/contact/ContactHub'
import { IMAGES } from '@/lib/images'
import { useLanguage } from '@/context/LanguageContext'

export default function ContactPage() {
  const { t, isGu } = useLanguage()

  return (
    <PageShell active="contact">
      <PageHero
        crumb={t.contactPage.crumb}
        eyebrow={t.contactPage.eyebrow}
        title={
          isGu ? (
            <>
              ગૌસેવા ટીમ સાથે <span className="text-rust-600">સંપર્ક કરો</span>
            </>
          ) : (
            <>
              Connect with our team <span className="text-rust-600">at GauSeva</span>
            </>
          )
        }
        lead={t.contactPage.lead}
        image={IMAGES.founder}
      />
      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center text-ink-500">Loading form...</div>}>
        <ContactHub defaultTab="contact" />
      </Suspense>
    </PageShell>
  )
}
