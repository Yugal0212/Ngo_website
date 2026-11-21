'use client'

import React, { Suspense } from 'react'
import { PageShell } from '@/components/common/PageShell'
import { PageHero } from '@/components/common/PageHero'
import { DonateForm } from '@/components/donate/DonateForm'
import { IMAGES } from '@/lib/images'
import { useLanguage } from '@/context/LanguageContext'

export default function DonatePage() {
  const { t } = useLanguage()

  return (
    <PageShell active="get involved" hideDonate>
      <PageHero
        crumb={t.donatePage.crumb}
        eyebrow={t.donatePage.eyebrow}
        title={
          <>
            {t.donatePage.title1} <span className="text-rust-600">{t.donatePage.titleHighlight}</span>
          </>
        }
        lead={t.donatePage.lead}
        image={IMAGES.missionCow}
      />
      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center text-ink-500">Loading donation form...</div>}>
        <DonateForm />
      </Suspense>
    </PageShell>
  )
}
