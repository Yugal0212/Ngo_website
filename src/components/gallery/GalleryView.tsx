'use client'

import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { AnimatePresence, m } from 'framer-motion'
import { Check, Copy, Share2, X } from 'lucide-react'

import { IMAGES } from '@/lib/images'
import { fadeUp, stagger } from '@/lib/motion'
import { useLanguage } from '@/context/LanguageContext'

const CATEGORIES_EN = [
  { id: 'All', label: 'All' },
  { id: 'Cow care', label: 'Cow care' },
  { id: 'Volunteers', label: 'Volunteers' },
  { id: 'Shiksha', label: 'Shiksha' },
  { id: 'Medical', label: 'Medical' },
  { id: 'Family support', label: 'Family support' },
]

const CATEGORIES_GU = [
  { id: 'All', label: 'તમામ' },
  { id: 'Cow care', label: 'ગૌસેવા' },
  { id: 'Volunteers', label: 'સ્વયંસેવકો' },
  { id: 'Shiksha', label: 'શિક્ષા' },
  { id: 'Medical', label: 'સારવાર' },
  { id: 'Family support', label: 'પરિવાર સહાય' },
]

export function GalleryView() {
  const searchParams = useSearchParams()
  const { isGu } = useLanguage()

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

  const categories = isGu ? CATEGORIES_GU : CATEGORIES_EN

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
    <div className="mx-auto max-w-[1500px] px-4 sm:px-6 md:px-10 py-8 md:py-16 xl:px-[90px]">
      {/* Categories Bar & Share Action */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap gap-2 no-scrollbar">
          {categories.map((c) => {
            const active = activeCategory === c.id
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveCategory(c.id)}
                className={`h-9 sm:h-11 shrink-0 rounded-full px-4 sm:px-5 font-display text-xs sm:text-sm font-bold transition-all active:scale-95 ${
                  active ? 'bg-rust-600 text-white shadow-xs' : 'border border-line bg-cream-50 text-ink-700 hover:bg-peach-100'
                }`}
              >
                {c.label}
              </button>
            )
          })}
        </div>

        <button
          type="button"
          onClick={() => setShowShareModal(true)}
          className="inline-flex h-9 sm:h-11 items-center gap-2 rounded-full border border-rust-600/40 px-4 sm:px-5 font-display text-xs sm:text-sm font-bold text-ink-900 hover:bg-peach-100 hover:border-rust-600 self-start sm:self-auto active:scale-95 transition-all"
        >
          <Share2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-rust-600" />
          {isGu ? 'સેવા સંદેશ શેર કરો' : 'Share the Cause'}
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
              <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10 flex items-center gap-1.5 rounded-full bg-cream-50/90 px-2.5 py-0.5 sm:px-3 sm:py-1 backdrop-blur-sm shadow-xs">
                <span className="text-[10px] sm:text-[11px] font-bold text-ink-900">
                  {item.cat}
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
            <m.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-3xl overflow-hidden rounded-2xl sm:rounded-3xl bg-cream-50 p-2 sm:p-3 shadow-lift"
            >
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="absolute right-4 top-4 z-10 grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full bg-cream-50/80 text-ink-900 hover:bg-cream-50"
              >
                <X className="h-5 w-5" />
              </button>
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="max-h-[75vh] w-full rounded-xl sm:rounded-2xl object-cover"
              />
              <p className="p-3 text-center text-xs sm:text-sm font-medium text-ink-700">
                {selectedPhoto.alt}
              </p>
            </m.div>
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
            <m.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-3xl bg-cream-50 p-6 sm:p-8 shadow-lift border border-line"
            >
              <button
                type="button"
                onClick={() => setShowShareModal(false)}
                className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full text-ink-500 hover:bg-peach-100"
              >
                <X className="h-5 w-5" />
              </button>

              <Share2 className="h-10 w-10 text-rust-600" />
              <h3 className="mt-4 font-display text-xl font-bold text-ink-900">
                {isGu ? 'ગૌસેવાનો પવિત્ર સંદેશ શેર કરો' : 'Spread the Kindness'}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-ink-700 leading-relaxed">
                {isGu
                  ? 'આપની એક શેર કોઈ અબોલ ગાયને ભૂખ્યા રહેવાથી બચાવી શકે છે અને બાળકને શાળા સુધી પહોંચાડી શકે છે.'
                  : 'Every share brings a new donor, a volunteer, or a family that can now keep their cow safe.'}
              </p>

              <div className="mt-6 flex items-center justify-between rounded-2xl border border-line bg-cream-100 p-2.5">
                <span className="truncate text-xs text-ink-500 max-w-[200px] sm:max-w-[240px]">
                  {typeof window !== 'undefined' ? window.location.href : 'https://gauseva.org'}
                </span>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-rust-600 px-3 py-1.5 text-xs font-bold text-white shadow-xs hover:bg-rust-700 active:scale-95 transition-all"
                >
                  {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  {copied ? (isGu ? 'કોપી થઈ ગયું!' : 'Copied!') : (isGu ? 'લિંક કોપી' : 'Copy')}
                </button>
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  )
}
