'use client'

import React, { useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { Check } from 'lucide-react'

import { CowHead, LeafSprig } from '@/components/common/Icons'
import { IMAGES } from '@/lib/images'
import { fadeUp, inView, stagger } from '@/lib/motion'
import { useLanguage } from '@/context/LanguageContext'

type TabId = 'history' | 'mission' | 'vision'

/** Founder story: layered photo collage on the left, tabbed History / Mission / Vision on the right. Mobile optimized. */
export function OurStory() {
  const { t } = useLanguage()
  const [tab, setTab] = useState<TabId>('history')
  const current = t.ourStory.tabs.find((item) => item.id === tab) || t.ourStory.tabs[0]

  return (
    <section id="story" aria-labelledby="story-title" className="scroll-mt-24 overflow-hidden py-14 md:py-28">
      <m.div
        initial="hidden"
        whileInView="show"
        viewport={inView}
        variants={stagger}
        className="mx-auto grid max-w-[1500px] items-center gap-10 px-5 md:px-10 lg:grid-cols-2 lg:gap-20 xl:px-[90px]"
      >
        {/* Collage */}
        <m.div variants={fadeUp} className="relative mx-auto w-full max-w-[460px] sm:max-w-[560px]">
          <div className="relative w-[74%]">
            <div className="aspect-[4/5] overflow-hidden rounded-[80px_24px_24px_24px] sm:rounded-[120px_28px_28px_28px] shadow-soft">
              <img
                src={IMAGES.founder.src}
                alt={IMAGES.founder.alt}
                width={IMAGES.founder.w}
                height={IMAGES.founder.h}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            {/* years badge */}
            <div className="absolute -right-4 sm:-right-8 top-6 sm:top-8 flex items-center gap-2 rounded-2xl bg-peach-100 px-3.5 py-2.5 sm:px-5 sm:py-3.5 shadow-soft ring-4 ring-cream-50">
              <span className="font-display text-2xl sm:text-[38px] font-extrabold leading-none text-rust-600">
                {t.ourStory.yearsBadgeNum}
              </span>
              <span className="font-display text-[11px] sm:text-xs font-bold leading-tight text-ink-900 whitespace-pre-line">
                {t.ourStory.yearsBadgeText}
              </span>
            </div>
            {/* origin badge */}
            <div className="absolute -left-2 bottom-6 sm:bottom-10 max-w-[150px] sm:max-w-[170px] rounded-2xl bg-brown-900 p-3 sm:p-4 text-cream-50 shadow-lift">
              <CowHead size={26} className="text-peach-200" />
              <p className="mt-1.5 text-xs sm:text-[13px] leading-snug">
                {t.ourStory.originBadge}
              </p>
            </div>
          </div>
          {/* arch photo overlapping bottom-right */}
          <div className="absolute -bottom-6 sm:-bottom-8 right-0 w-[45%]">
            <div className="aspect-[3/4] overflow-hidden rounded-t-full rounded-b-[24px] shadow-lift ring-4 sm:ring-8 ring-cream-50">
              <img
                src={IMAGES.calfBottle.src}
                alt={IMAGES.calfBottle.alt}
                width={IMAGES.calfBottle.w}
                height={IMAGES.calfBottle.h}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <LeafSprig className="absolute -bottom-10 left-[44%] w-12 sm:w-14 text-sand-300" />
        </m.div>

        {/* Copy + tabs */}
        <m.div variants={fadeUp} className="min-w-0 pt-4 lg:pt-0">
          <p className="flex items-center gap-2 font-display text-xs sm:text-sm font-bold text-rust-600 uppercase tracking-wider">
            {t.ourStory.eyebrow}
          </p>
          <h2
            id="story-title"
            className="mt-2.5 font-display text-2xl sm:text-[32px] font-bold leading-[1.2] text-ink-900 md:text-[40px]"
          >
            {t.ourStory.title}
          </h2>
          <p className="mt-3.5 text-sm sm:text-base leading-[1.7] text-ink-700">
            {t.ourStory.lead}
          </p>

          {/* Tab buttons: mobile friendly pills */}
          <div role="tablist" aria-label="Our Story" className="mt-6 flex gap-2 border-b border-line pb-3 overflow-x-auto no-scrollbar">
            {t.ourStory.tabs.map((tabItem) => (
              <button
                key={tabItem.id}
                type="button"
                role="tab"
                aria-selected={tab === tabItem.id}
                onClick={() => setTab(tabItem.id)}
                className={`relative shrink-0 rounded-full px-4 py-2 text-xs sm:text-sm font-bold transition-all ${
                  tab === tabItem.id
                    ? 'bg-rust-600 text-white shadow-xs'
                    : 'bg-peach-100/60 text-ink-700 hover:bg-peach-100 hover:text-ink-900'
                }`}
              >
                {tabItem.label}
              </button>
            ))}
          </div>

          {/* Active tab content */}
          <AnimatePresence mode="wait">
            <m.div
              key={current.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="mt-5 space-y-4"
            >
              <p className="text-sm sm:text-base leading-[1.7] text-ink-700">
                {current.body}
              </p>
              <ul className="space-y-2 pt-1">
                {current.points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-xs sm:text-sm text-ink-800">
                    <Check className="h-4 w-4 shrink-0 text-rust-600" aria-hidden />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </m.div>
          </AnimatePresence>
        </m.div>
      </m.div>
    </section>
  )
}
