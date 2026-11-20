import React from 'react'
import { PageShell } from '@/components/common/PageShell'
import { Hero } from '@/components/home/Hero'
import { FeatureStrip } from '@/components/home/FeatureStrip'
import { AboutSanctuary } from '@/components/home/AboutSanctuary'
import { HeartfeltIdea } from '@/components/home/HeartfeltIdea'
import { Missions } from '@/components/home/Missions'
import { OurStory } from '@/components/home/OurStory'
import { GalleryPreview } from '@/components/home/GalleryPreview'
import { Testimonials } from '@/components/home/Testimonials'
import { LatestBlog } from '@/components/home/LatestBlog'
import { QuickDonate } from '@/components/home/QuickDonate'

export default function HomePage() {
  return (
    <PageShell active="home">
      <Hero />
      <FeatureStrip />
      <AboutSanctuary />
      <HeartfeltIdea />
      <Missions />
      <OurStory />
      <GalleryPreview />
      <Testimonials />
      <LatestBlog />
      <QuickDonate initialCause="cow" />
    </PageShell>
  )
}
