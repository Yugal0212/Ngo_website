'use client'

import React, { Suspense } from 'react'
import { PageShell } from '@/components/common/PageShell'
import { PageHero } from '@/components/common/PageHero'
import { BlogList } from '@/components/blog/BlogList'
import { IMAGES } from '@/lib/images'
import { useLanguage } from '@/context/LanguageContext'

export default function BlogPage() {
  const { isGu } = useLanguage()

  return (
    <PageShell active="gallery">
      <PageHero
        crumb={isGu ? 'સેવા ડાયરી' : 'Journal'}
        eyebrow={isGu ? 'વાસ્તવિક વાતો અને અપડેટ્સ' : 'Stories & Updates'}
        title={
          isGu ? (
            <>
              કરુણા, આશા અને <span className="text-rust-600">સેવા કાર્યોની વાતો</span>
            </>
          ) : (
            <>
              Stories of care, hope & <span className="text-rust-600">honest progress</span>
            </>
          )
        }
        lead={
          isGu
            ? 'અમારી દૈનિક ઘાસચારા વિતરણ સેવા, પરિવારોના ઘરે સુખી ગૌમાતાના સમાચાર અને શિક્ષણ પામતા બાળકોના જીવનની પ્રેરક વાતો વાંચો.'
            : 'Read reflections from our daily rounds, updates from families who keep their cows at home, and stories of children enrolled in Shiksha.'
        }
        image={IMAGES.gallery[1]}
      />
      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center text-ink-500">Loading stories...</div>}>
        <BlogList />
      </Suspense>
    </PageShell>
  )
}
