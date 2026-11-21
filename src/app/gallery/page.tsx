'use client'

import React, { Suspense } from 'react'
import { PageShell } from '@/components/common/PageShell'
import { PageHero } from '@/components/common/PageHero'
import { GalleryView } from '@/components/gallery/GalleryView'
import { IMAGES } from '@/lib/images'
import { useLanguage } from '@/context/LanguageContext'

export default function GalleryPage() {
  const { isGu } = useLanguage()

  return (
    <PageShell active="gallery">
      <PageHero
        crumb={isGu ? 'ગેલેરી' : 'Gallery'}
        eyebrow={isGu ? 'ગૌશાળા દર્શન' : 'Gushala Memories'}
        title={
          isGu ? (
            <>
              જીવન, કરુણા અને સમર્પણની <span className="text-rust-600">જીવંત ક્ષણો</span>
            </>
          ) : (
            <>
              Life, care and kindness <span className="text-rust-600">in every frame</span>
            </>
          )
        }
        lead={
          isGu
            ? 'અમારી ગૌશાળા, પરિવારોના ઘરે સચવાતી ગાયો અને શિક્ષણ મેળવતા બાળકોના નિર્દોષ સ્મિતની વાસ્તવિક તસવીરો જુઓ.'
            : 'See real moments from our sanctuary, the families keeping their cows at home, and the children learning through Shiksha.'
        }
        image={IMAGES.gallery[0]}
      />
      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center text-ink-500">Loading gallery...</div>}>
        <GalleryView />
      </Suspense>
    </PageShell>
  )
}
