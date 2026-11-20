import React, { Suspense } from 'react'
import { PageShell } from '@/components/common/PageShell'
import { PageHero } from '@/components/common/PageHero'
import { GalleryView } from '@/components/gallery/GalleryView'
import { IMAGES } from '@/lib/images'

export default function GalleryPage() {
  return (
    <PageShell active="gallery">
      <PageHero
        crumb="Gallery"
        eyebrow="Gushala Memories"
        title={
          <>
            Life, care and kindness <span className="text-rust-600">in every frame</span>
          </>
        }
        lead="See real moments from our sanctuary, the families keeping their cows at home, and the children learning through Shiksha."
        image={IMAGES.gallery[0]}
      />
      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center text-ink-500">Loading gallery...</div>}>
        <GalleryView />
      </Suspense>
    </PageShell>
  )
}
