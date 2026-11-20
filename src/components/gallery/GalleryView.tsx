'use client'

import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { AnimatePresence, m } from 'framer-motion'
import { Check, Copy, Share2, X } from 'lucide-react'

import { IMAGES } from '@/lib/images'
import { fadeUp, inView, stagger } from '@/lib/motion'

const CATEGORIES = ['All', 'Cow care', 'Volunteers', 'Shiksha', 'Medical', 'Family support']

export function GalleryView() {
  const searchParams = useSearchParams()
  const initialCat = searchParams.get('cat') || 'All'
  const isShareOpen = searchParams.get('share') === '1'

  const [activeCategory, setActiveCategory] = useState(initialCat)
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; alt: string; cat: string } | null>(null)
  const [showShareModal, setShowShareModal] = useState(isShareOpen)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (searchParams.get('cat')) {
      setActiveCategory(searchParams.get('cat')!)
    }
    if (searchParams.get('share') === '1') {
      setShowShareModal(true)
    }
  }, [searchParams])

  const allItems = [
    ...IMAGES.gallery,
    { src: IMAGES.shelter.src, alt: IMAGES.shelter.alt, cat: 'Cow care', w: IMAGES.shelter.w, h: IMAGES.shelter.h },
    { src: IMAGES.kidsMeal.src, alt: IMAGES.kidsMeal.alt, cat: 'Shiksha', w: IMAGES.kidsMeal.w, h: IMAGES.kidsMeal.h },
    { src: IMAGES.about.src, alt: IMAGES.about.alt, cat: 'Cow care', w: IMAGES.about.w, h: IMAGES.about.h },
  ]

  const filteredItems = activeCategory === 'All'
    ? allItems
    : allItems.filter((item) => item.cat.toLowerCase() === activeCategory.toLowerCase())

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="mx-auto max-w-[1500px] px-5 py-10 md:px-10 md:py-16 xl:px-[90px]">
      {/* Categories Bar & Share Action */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap gap-2 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const active = activeCategory === cat
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`h-9 sm:h-11 shrink-0 rounded-full px-4 sm:px-5 font-display text-xs sm:text-sm font-semibold transition-[background-color,color] duration-150 ${
                  active ? 'bg-rust-600 text-white' : 'border border-line bg-cream-50 text-ink-700 hover:bg-peach-100'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>

        <button
          type="button"
          onClick={() => setShowShareModal(true)}
          className="inline-flex h-9 sm:h-11 items-center gap-2 rounded-full border border-rust-600/40 px-4 sm:px-5 font-display text-xs sm:text-sm font-semibold text-ink-900 hover:bg-peach-100 hover:border-rust-600 self-start sm:self-auto"
        >
          <Share2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-rust-600" />
          Share the Cause
        </button>
      </div>

      {/* Grid: 2 columns on mobile, 3 on lg */}
      <m.div
        initial="hidden"
        animate="show"
        variants={stagger}
        className="mt-6 sm:mt-10 columns-2 sm:columns-2 lg:columns-3 gap-3 sm:gap-5"
      >
        {filteredItems.map((item, idx) => (
          <m.div
            key={item.src + idx}
            variants={fadeUp}
            className="mb-3 sm:mb-5 break-inside-avoid"
          >
            <div
              onClick={() => setSelectedPhoto(item)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl bg-cream-100 shadow-soft transition-all duration-200 hover:shadow-lift active:scale-[0.98]"
              style={{ aspectRatio: `${item.w} / ${item.h}` }}
            >
              <img
                src={item.src}
                alt={item.alt}
                width={item.w}
                height={item.h}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10 flex items-center gap-1.5 rounded-full bg-cream-50/90 px-2 py-0.5 sm:px-3 sm:py-1 backdrop-blur-sm">
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-wide text-ink-900">
                  ▷ {item.cat}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brown-900/60 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100 flex items-end p-2.5 sm:p-5">
                <p className="text-xs sm:text-sm font-medium text-cream-50 leading-snug line-clamp-2">{item.alt}</p>
              </div>
            </div>
          </m.div>
        ))}
      </m.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-brown-900/85 p-3 sm:p-4 backdrop-blur-sm"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-2xl sm:rounded-3xl bg-cream-50 shadow-lift border border-line"
            >
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close"
                className="absolute right-3 top-3 z-10 grid h-8 w-8 sm:h-10 sm:w-10 place-items-center rounded-full bg-cream-50/90 text-ink-900 hover:bg-peach-100 shadow-md"
              >
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <div className="max-h-[50vh] sm:max-h-[72vh] w-full bg-ink-900 flex items-center justify-center overflow-hidden">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  className="max-h-[50vh] sm:max-h-[72vh] w-full object-contain"
                />
              </div>
              <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 border-t border-line">
                <div>
                  <span className="text-[10px] sm:text-xs font-bold text-rust-600 uppercase tracking-wider">{selectedPhoto.cat}</span>
                  <p className="mt-0.5 text-xs sm:text-base font-medium text-ink-900 leading-snug">{selectedPhoto.alt}</p>
                </div>
                <a
                  href="/donate"
                  className="inline-flex h-9 sm:h-10 items-center justify-center gap-2 rounded-full bg-rust-600 px-4 sm:px-5 text-xs sm:text-sm font-semibold text-white hover:bg-rust-500 shrink-0"
                >
                  Support This Seva
                </a>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>

      {/* Share Modal */}
      <AnimatePresence>
        {showShareModal && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowShareModal(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-brown-900/60 p-4 backdrop-blur-sm"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-3xl bg-cream-50 p-6 sm:p-8 shadow-lift border border-line"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-bold text-ink-900">Spread Compassion</h3>
                <button
                  type="button"
                  onClick={() => setShowShareModal(false)}
                  className="grid h-9 w-9 place-items-center rounded-full text-ink-700 hover:bg-peach-100"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <p className="mt-3 text-sm text-ink-700 leading-relaxed">
                Sharing our work brings new donors, volunteers, and protection to cows in need. Copy our website link to share on WhatsApp or social media.
              </p>
              <div className="mt-5 flex items-center gap-2 rounded-2xl border border-line bg-cream-100 p-2">
                <input
                  type="text"
                  readOnly
                  value={typeof window !== 'undefined' ? window.location.origin : 'https://gauseva.org'}
                  className="w-full bg-transparent px-3 text-sm text-ink-900 outline-none"
                />
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-xl bg-rust-600 px-3.5 text-xs font-semibold text-white hover:bg-rust-500"
                >
                  {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  )
}
