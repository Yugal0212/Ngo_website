'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { m, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, ChevronRight, Heart, X, Maximize2 } from 'lucide-react'

import { Button } from '@/components/common/Button'
import { IMAGES } from '@/lib/images'

type CollageItem = {
  id: string
  title: string
  tag: string
  cat: string
  description: string
  src: string
  alt: string
  w: number
  h: number
  mobileSpan: string
  desktopSpan: string
  aspect: string
}

const COLLAGE_ITEMS: CollageItem[] = [
  {
    id: 'shelter-dawn',
    title: 'Sunrise Sanctuary Awakenings',
    tag: '▷ Vrindavan Sanctuary · Dawn',
    cat: 'Cow care',
    description: 'At sunrise, over 350 rescued cows rest peacefully under airy tiled roofs before morning grazing.',
    src: IMAGES.shelter.src,
    alt: IMAGES.shelter.alt,
    w: IMAGES.shelter.w,
    h: IMAGES.shelter.h,
    mobileSpan: 'col-span-2',
    desktopSpan: 'md:col-span-7',
    aspect: 'aspect-[16/10]',
  },
  {
    id: 'feeding-trough',
    title: 'Fresh Green Fodder Feeding',
    tag: '▷ Daily Nutrition · Organic Feed',
    cat: 'Cow care',
    description: 'Fresh seasonal green grass, jaggery, and crushed grain served twice daily across clean covered troughs.',
    src: IMAGES.about.src,
    alt: IMAGES.about.alt,
    w: IMAGES.about.w,
    h: IMAGES.about.h,
    mobileSpan: 'col-span-1',
    desktopSpan: 'md:col-span-5',
    aspect: 'aspect-square sm:aspect-[4/3]',
  },
  {
    id: 'founder-touch',
    title: 'Sacred Bonds of Trust',
    tag: '▷ Affection & Dignity',
    cat: 'Cow care',
    description: 'Every desi cow is known by name, receiving daily gentle strokes, respectful care, and lifelong sanctuary.',
    src: IMAGES.founder.src,
    alt: IMAGES.founder.alt,
    w: IMAGES.founder.w,
    h: IMAGES.founder.h,
    mobileSpan: 'col-span-1',
    desktopSpan: 'md:col-span-4',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 'calf-bottle',
    title: 'Nurturing Rescued Calves',
    tag: '▷ Calf Nursery · Loving Seva',
    cat: 'Cow care',
    description: 'Orphaned and vulnerable calves receive round-the-clock warmth, vet checks, and bottle feedings.',
    src: IMAGES.calfBottle.src,
    alt: IMAGES.calfBottle.alt,
    w: IMAGES.calfBottle.w,
    h: IMAGES.calfBottle.h,
    mobileSpan: 'col-span-1',
    desktopSpan: 'md:col-span-4',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 'pasture-sunset',
    title: 'Free Range Open Pastures',
    tag: '▷ Natural Habitat · Sunset',
    cat: 'Cow care',
    description: 'Cows freely roam protected open meadows with freshwater ponds, natural trees, and safe fencing.',
    src: IMAGES.gallery[2].src,
    alt: IMAGES.gallery[2].alt,
    w: IMAGES.gallery[2].w,
    h: IMAGES.gallery[2].h,
    mobileSpan: 'col-span-2',
    desktopSpan: 'md:col-span-7',
    aspect: 'aspect-[16/10]',
  },
  {
    id: 'young-calf',
    title: 'Gentle Innocence',
    tag: '▷ Born into Freedom',
    cat: 'Cow care',
    description: 'Calves born at our sanctuary never know fear or abandonment, spending joyful days beside their mothers.',
    src: IMAGES.gallery[0].src,
    alt: IMAGES.gallery[0].alt,
    w: IMAGES.gallery[0].w,
    h: IMAGES.gallery[0].h,
    mobileSpan: 'col-span-1',
    desktopSpan: 'md:col-span-5',
    aspect: 'aspect-square',
  },
  {
    id: 'midday-meal',
    title: 'Shiksha Vidyalaya Meals',
    tag: '▷ Village Students · Shiksha',
    cat: 'Shiksha',
    description: 'Hot, nutritious vegetarian meals provided daily to rural students to ensure no child studies on an empty stomach.',
    src: IMAGES.kidsMeal.src,
    alt: IMAGES.kidsMeal.alt,
    w: IMAGES.kidsMeal.w,
    h: IMAGES.kidsMeal.h,
    mobileSpan: 'col-span-1',
    desktopSpan: 'md:col-span-6',
    aspect: 'aspect-square sm:aspect-[4/3]',
  },
  {
    id: 'volunteers-feed',
    title: 'Community Hands in Seva',
    tag: '▷ Dedicated Sevadars',
    cat: 'Volunteers',
    description: 'Volunteers from across India visit weekly to prepare fodder, clean sheds, and spend mindful hours with the herd.',
    src: IMAGES.volunteers.src,
    alt: IMAGES.volunteers.alt,
    w: IMAGES.volunteers.w,
    h: IMAGES.volunteers.h,
    mobileSpan: 'col-span-2',
    desktopSpan: 'md:col-span-6',
    aspect: 'aspect-[16/10]',
  },
]

export function GalleryPreview() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null)

  const activeItem = activeIdx !== null ? COLLAGE_ITEMS[activeIdx] : null

  const handleNext = useCallback(() => {
    setActiveIdx((prev) => (prev !== null ? (prev + 1) % COLLAGE_ITEMS.length : null))
  }, [])

  const handlePrev = useCallback(() => {
    setActiveIdx((prev) => (prev !== null ? (prev - 1 + COLLAGE_ITEMS.length) % COLLAGE_ITEMS.length : null))
  }, [])

  useEffect(() => {
    if (activeIdx === null) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveIdx(null)
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'ArrowLeft') handlePrev()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeIdx, handleNext, handlePrev])

  return (
    <section aria-labelledby="gallery-heading" className="relative overflow-hidden bg-cream-100 py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 md:px-10 xl:px-[72px]">
        {/* Architectural Header Bar */}
        <div className="flex flex-col border-b border-line pb-6 sm:pb-8 md:flex-row md:items-end md:justify-between gap-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="font-display text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-rust-600">
                Moments From The Sanctuary · गौसेवा दर्शन
              </span>
              <span className="hidden h-px w-14 bg-rust-600/30 sm:inline-block" />
            </div>
            <p className="mt-1 text-[11px] sm:text-xs tracking-wider text-ink-500 uppercase">
              GauSeva Compassion Archive
            </p>
          </div>

          <div className="flex items-center justify-between md:justify-end gap-3">
            <span className="text-[11px] sm:text-xs font-medium text-ink-500">Tap any photo to preview</span>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-1 font-display text-xs sm:text-sm font-semibold text-rust-600 hover:text-rust-700 active:scale-95 transition-transform"
            >
              All 15+ Photos
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Main Collage Layout */}
        <div className="mt-8 sm:mt-10 grid grid-cols-12 gap-5 lg:gap-6 items-start">
          {/* Left Column: Bold Typography & Wireframe Accent */}
          <div className="col-span-12 lg:col-span-3 flex flex-col justify-between">
            <div>
              {/* Wireframe Diamond Vector Motif */}
              <div className="mb-4 sm:mb-6 inline-block">
                <svg
                  viewBox="0 0 100 70"
                  className="h-10 w-14 sm:h-12 sm:w-16 text-rust-600/70"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polygon points="50,4 96,24 80,66 20,66 4,24" />
                  <line x1="4" y1="24" x2="96" y2="24" />
                  <line x1="50" y1="4" x2="28" y2="24" />
                  <line x1="50" y1="4" x2="72" y2="24" />
                  <line x1="28" y1="24" x2="20" y2="66" />
                  <line x1="28" y1="24" x2="50" y2="66" />
                  <line x1="72" y1="24" x2="50" y2="66" />
                  <line x1="72" y1="24" x2="80" y2="66" />
                  <line x1="50" y1="4" x2="50" y2="66" />
                </svg>
              </div>

              {/* Bold Editorial Headline */}
              <h2
                id="gallery-heading"
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase leading-[1.05] tracking-tight text-ink-900"
              >
                LIFE,<br />
                EVERY DAY.<br />
                <span className="text-rust-600">STORIES</span>
              </h2>

              <p className="mt-3 sm:mt-5 text-xs sm:text-sm leading-relaxed text-ink-700">
                A daily rhythm of devotion at our Vrindavan sanctuary: dawn gau-puja, nutritious green fodder distribution,
                specialized veterinary care, and peaceful lifetime sanctuary.
              </p>

              {/* Solid Accent Color Swatch Block */}
              <div className="mt-5 sm:mt-8 rounded-2xl bg-sand-300/85 p-4 sm:p-5 border border-sand-300">
                <div className="flex items-center justify-between text-[11px] sm:text-xs font-bold uppercase tracking-wider text-brown-900">
                  <span>Sanctuary Care</span>
                  <span>350+ Desi Cows</span>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-700 font-medium">
                  Zero slaughter, zero commercial use, 100% unconditional seva and protection.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-6 sm:mt-8 grid grid-cols-2 lg:grid-cols-1 gap-2.5 sm:gap-3">
              <Button href="/gallery" variant="outline" size="sm" className="w-full justify-center text-xs sm:text-sm">
                Full Gallery
              </Button>
              <Button href="/donate" heart size="sm" className="w-full justify-center text-xs sm:text-sm">
                Sponsor a Cow
              </Button>
            </div>
          </div>

          {/* Right Area: Dynamic 2-column on mobile, 12-column on desktop */}
          <div className="col-span-12 lg:col-span-9 grid grid-cols-2 md:grid-cols-12 gap-2.5 sm:gap-4 lg:gap-5">
            {/* Photo 1: Shelter Dawn (Full 2-col on mobile, 7-col on md) */}
            <div className="col-span-2 md:col-span-7">
              <PhotoCard item={COLLAGE_ITEMS[0]} onClick={() => setActiveIdx(0)} />
            </div>

            {/* Photo 2: Feeding Trough (1-col on mobile, 5-col on md) */}
            <div className="col-span-1 md:col-span-5">
              <PhotoCard item={COLLAGE_ITEMS[1]} onClick={() => setActiveIdx(1)} />
            </div>

            {/* Photo 3: Founder Touch (1-col on mobile, 4-col on md) */}
            <div className="col-span-1 md:col-span-4">
              <PhotoCard item={COLLAGE_ITEMS[2]} onClick={() => setActiveIdx(2)} />
            </div>

            {/* Photo 4: Calf Bottle Feeding (1-col on mobile, 4-col on md) */}
            <div className="col-span-1 md:col-span-4">
              <PhotoCard item={COLLAGE_ITEMS[3]} onClick={() => setActiveIdx(3)} />
            </div>

            {/* Solid Accent Block: Terracotta Geometry (1-col on mobile, 4-col on md) */}
            <div className="col-span-1 md:col-span-4 flex flex-col justify-between rounded-2xl bg-[#dfbe95] p-3.5 sm:p-5 lg:p-6 text-brown-900 shadow-soft aspect-[3/4] sm:aspect-auto">
              <div>
                <span className="font-display text-[10px] sm:text-xs font-bold tracking-widest uppercase text-brown-800">
                  Daily Seva
                </span>
                <h3 className="mt-1.5 sm:mt-2 font-display text-sm sm:text-base lg:text-lg font-bold leading-snug text-ink-900">
                  5:00 AM Dawn Fodder & Morning Aarti
                </h3>
                <p className="mt-1.5 text-[11px] sm:text-xs leading-relaxed text-ink-700 hidden sm:block">
                  Fresh grass and pure water served with reverence across peaceful open sheds.
                </p>
              </div>
              <div className="pt-2 sm:pt-4 border-t border-brown-900/10 flex items-center justify-between">
                <span className="text-[10px] sm:text-[11px] font-semibold text-ink-500">Vrindavan Dham</span>
                <span className="text-[10px] sm:text-[11px] font-bold text-rust-700">24/7 Seva</span>
              </div>
            </div>

            {/* Photo 5: Pasture Sunset (Full 2-col on mobile, 7-col on md) */}
            <div className="col-span-2 md:col-span-7">
              <PhotoCard item={COLLAGE_ITEMS[4]} onClick={() => setActiveIdx(4)} />
            </div>

            {/* Photo 6: Young Calf (1-col on mobile, 5-col on md) */}
            <div className="col-span-1 md:col-span-5">
              <PhotoCard item={COLLAGE_ITEMS[5]} onClick={() => setActiveIdx(5)} />
            </div>

            {/* Photo 7: Midday Meal (1-col on mobile, 6-col on md) */}
            <div className="col-span-1 md:col-span-6">
              <PhotoCard item={COLLAGE_ITEMS[6]} onClick={() => setActiveIdx(6)} />
            </div>

            {/* Photo 8: Volunteers Feed (Full 2-col on mobile, 6-col on md) */}
            <div className="col-span-2 md:col-span-6">
              <PhotoCard item={COLLAGE_ITEMS[7]} onClick={() => setActiveIdx(7)} />
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal on Click - Highly Optimized for Mobile & Desktop */}
      <AnimatePresence>
        {activeItem && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.16 }}
            onClick={() => setActiveIdx(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-brown-900/85 p-3 sm:p-4 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label={activeItem.title}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative flex w-full max-w-4xl max-h-[92vh] flex-col overflow-hidden rounded-2xl sm:rounded-3xl bg-cream-50 shadow-lift border border-line"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveIdx(null)}
                aria-label="Close dialog"
                className="absolute right-3 top-3 z-30 grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full bg-cream-50/90 text-ink-900 shadow-md transition-colors hover:bg-peach-100 active:scale-95"
              >
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>

              {/* Prev / Next Floating Navigation */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous photo"
                className="absolute left-2.5 sm:left-4 top-[24vh] sm:top-1/2 -translate-y-1/2 z-20 grid h-8 w-8 sm:h-10 sm:w-10 place-items-center rounded-full bg-cream-50/90 text-ink-900 shadow-md transition-colors hover:bg-peach-100 active:scale-95"
              >
                <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next photo"
                className="absolute right-2.5 sm:right-4 top-[24vh] sm:top-1/2 -translate-y-1/2 z-20 grid h-8 w-8 sm:h-10 sm:w-10 place-items-center rounded-full bg-cream-50/90 text-ink-900 shadow-md transition-colors hover:bg-peach-100 active:scale-95"
              >
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>

              {/* Image View */}
              <div className="relative max-h-[48vh] sm:max-h-[62vh] w-full overflow-hidden bg-ink-900 flex items-center justify-center">
                <img
                  src={activeItem.src}
                  alt={activeItem.alt}
                  width={activeItem.w}
                  height={activeItem.h}
                  className="max-h-[48vh] sm:max-h-[62vh] w-full object-contain"
                />
                <span className="absolute top-3 left-3 rounded-full bg-brown-900/80 px-2.5 py-1 text-[10px] sm:text-xs font-semibold text-cream-50 backdrop-blur-sm">
                  {activeItem.tag}
                </span>
              </div>

              {/* Details & Action Bar */}
              <div className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-5 border-t border-line overflow-y-auto">
                <div className="max-w-xl">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-peach-100 px-2 py-0.5 text-[10px] sm:text-xs font-bold text-rust-700 uppercase tracking-wide">
                      {activeItem.cat}
                    </span>
                    <span className="text-[11px] sm:text-xs text-ink-500">
                      {activeIdx !== null ? activeIdx + 1 : 1} of {COLLAGE_ITEMS.length}
                    </span>
                  </div>
                  <h3 className="mt-1 font-display text-base sm:text-xl font-bold text-ink-900 leading-snug">
                    {activeItem.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-ink-700 leading-relaxed line-clamp-2 sm:line-clamp-none">
                    {activeItem.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 shrink-0 pt-1 sm:pt-0">
                  <Button href="/gallery" variant="outline" size="sm" className="text-xs sm:text-sm h-9 sm:h-10">
                    Full Gallery
                  </Button>
                  <Button href="/donate" heart size="sm" className="text-xs sm:text-sm h-9 sm:h-10">
                    Donate
                  </Button>
                </div>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </section>
  )
}

function PhotoCard({ item, onClick }: { item: CollageItem; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick()
        }
      }}
      className={`group relative cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl bg-cream-50 shadow-soft transition-all duration-200 hover:shadow-lift active:scale-[0.98] ${item.aspect}`}
    >
      <img
        src={item.src}
        alt={item.alt}
        width={item.w}
        height={item.h}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
      />

      {/* Floating ▷ Tag Badge matching the reference image */}
      <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10 flex items-center gap-1 rounded-full bg-cream-50/90 px-2 py-0.5 sm:px-3 sm:py-1 backdrop-blur-sm transition-transform duration-200 group-hover:scale-105 max-w-[90%]">
        <span className="text-[10px] sm:text-[11px] font-semibold tracking-wide text-ink-900 truncate">
          {item.tag}
        </span>
      </div>

      {/* Hover Overlay with expand hint */}
      <div className="absolute inset-0 bg-gradient-to-t from-brown-900/60 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100 flex items-end justify-between p-2.5 sm:p-4">
        <p className="text-[11px] sm:text-xs font-semibold text-cream-50 line-clamp-1">{item.title}</p>
        <span className="grid h-6 w-6 sm:h-7 sm:w-7 place-items-center rounded-full bg-cream-50/90 text-rust-600">
          <Maximize2 className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
        </span>
      </div>
    </div>
  )
}
