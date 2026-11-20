import React, { Suspense } from 'react'
import { PageShell } from '@/components/common/PageShell'
import { PageHero } from '@/components/common/PageHero'
import { DonateForm } from '@/components/donate/DonateForm'
import { IMAGES } from '@/lib/images'

export default function DonatePage() {
  return (
    <PageShell active="get involved" hideDonate>
      <PageHero
        crumb="Donate"
        eyebrow="Direct & Transparent Care"
        title={
          <>
            Be the reason a cow is <span className="text-rust-600">fed & loved</span>
          </>
        }
        lead="Every rupee goes directly to fresh fodder, medicines and schooling supplies. Choose a one-time gift or monthly pledge."
        image={IMAGES.missionCow}
      />
      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center text-ink-500">Loading donation form...</div>}>
        <DonateForm />
      </Suspense>
    </PageShell>
  )
}
