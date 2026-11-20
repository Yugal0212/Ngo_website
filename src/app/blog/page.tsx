import React, { Suspense } from 'react'
import { PageShell } from '@/components/common/PageShell'
import { PageHero } from '@/components/common/PageHero'
import { BlogList } from '@/components/blog/BlogList'
import { IMAGES } from '@/lib/images'

export default function BlogPage() {
  return (
    <PageShell active="gallery">
      <PageHero
        crumb="Journal"
        eyebrow="Stories & Updates"
        title={
          <>
            Stories of care, hope & <span className="text-rust-600">honest progress</span>
          </>
        }
        lead="Read reflections from our daily rounds, updates from families who keep their cows at home, and stories of children enrolled in Shiksha."
        image={IMAGES.gallery[1]}
      />
      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center text-ink-500">Loading stories...</div>}>
        <BlogList />
      </Suspense>
    </PageShell>
  )
}
