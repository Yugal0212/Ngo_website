'use client'

import React, { useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { Check, Leaf } from 'lucide-react'

import { Button } from '@/components/common/Button'
import { CowHead, LeafSprig } from '@/components/common/Icons'
import { IMAGES } from '@/lib/images'
import { BRAND } from '@/config/site'
import { fadeUp, inView, stagger } from '@/lib/motion'

type TabId = 'history' | 'mission' | 'vision'

const TABS: { id: TabId; label: string; body: string; points: string[] }[] = [
  {
    id: 'history',
    label: 'Our History',
    body: 'Eight years ago our founder saw a mother cow left at the roadside because she was “no longer useful”. He began with one bundle of fodder every morning — and never stopped.',
    points: [
      'Daily feeding rounds since the very first year',
      'A small Gushala built with neighbours’ help',
      'Families helped to keep their cows at home',
    ],
  },
  {
    id: 'mission',
    label: 'Our Mission',
    body: 'Keep every cow fed and loved — ideally in the home she already knows — and give children from struggling families the food and supplies to stay in school.',
    points: ['Fresh fodder delivered to families', 'Medical care for sick and injured cows', 'Meals, books and stationery for children'],
  },
  {
    id: 'vision',
    label: 'Our Vision',
    body: 'A village where no cow is abandoned for being old, and no child leaves school because of an empty stomach or an empty school bag.',
    points: ['A larger shelter with a medical bay', 'A study centre with daily meals', 'Transparent reports for every donor'],
  },
]

/** Founder story: layered photo collage on the left, tabbed History / Mission / Vision on the right. */
export function OurStory() {
  const [tab, setTab] = useState<TabId>('history')
  const current = TABS.find((t) => t.id === tab)!

  return (
    <section id="story" aria-labelledby="story-title" className="scroll-mt-24 overflow-hidden py-16 md:py-28">
      <m.div
        initial="hidden"
        whileInView="show"
        viewport={inView}
        variants={stagger}
        className="mx-auto grid max-w-[1500px] items-center gap-14 px-5 md:px-10 lg:grid-cols-2 lg:gap-20 xl:px-[90px]"
      >
        {/* Collage */}
        <m.div variants={fadeUp} className="relative mx-auto w-full max-w-[560px]">
          <div className="relative w-[72%]">
            <div className="aspect-[4/5] overflow-hidden rounded-[120px_28px_28px_28px] shadow-soft">
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
            <div className="absolute -right-6 top-8 flex items-center gap-2.5 rounded-2xl bg-peach-100 px-4 py-3 shadow-soft ring-4 ring-cream-50 sm:-right-10 sm:px-5 sm:py-4">
              <span className="font-display text-[34px] font-extrabold leading-none text-rust-600 sm:text-[44px]">8+</span>
              <span className="font-display text-[13px] font-semibold leading-tight text-ink-900 sm:text-sm">
                Years of
                <br />
                Gau Seva
              </span>
            </div>
            {/* origin badge */}
            <div className="absolute -left-2 bottom-10 max-w-[170px] rounded-2xl bg-brown-900 p-4 text-cream-50 shadow-lift sm:-left-6">
              <CowHead size={30} className="text-peach-200" />
              <p className="mt-2 text-[13px] leading-snug">Started with one bundle of fodder</p>
            </div>
          </div>
          {/* arch photo overlapping bottom-right */}
          <div className="absolute -bottom-8 right-0 w-[46%]">
            <div className="aspect-[3/4] overflow-hidden rounded-t-full rounded-b-[28px] shadow-lift ring-8 ring-cream-50">
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
          <LeafSprig className="absolute -bottom-10 left-[44%] w-14 text-sand-300" />
        </m.div>

        {/* Copy + tabs */}
        <m.div variants={fadeUp} className="min-w-0 pt-6 lg:pt-0">
          <p className="flex items-center gap-2 font-display text-[15px] font-semibold text-rust-600">
            <Leaf className="h-4 w-4 fill-rust-600/20" aria-hidden />
            Our Story
          </p>
          <h2
            id="story-title"
            className="mt-3 font-display text-[30px] font-bold leading-[1.15] tracking-[-0.01em] text-ink-900 md:text-[44px]"
          >
            From one bundle of fodder to <span className="text-rust-600">a family of hundreds</span>
          </h2>

          <div role="tablist" aria-label="Our story" className="mt-7 inline-flex rounded-full bg-cream-100 p-1">
            {TABS.map((t) => (
              <button
                key={t.id}
                role="tab"
                type="button"
                id={`tab-${t.id}`}
                aria-selected={tab === t.id}
                aria-controls="story-panel"
                onClick={() => setTab(t.id)}
                className="relative h-11 whitespace-nowrap rounded-full px-4 font-display text-sm font-semibold sm:px-6 sm:text-[15px]"
              >
                {tab === t.id && (
                  <m.span
                    layoutId="story-tab"
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 rounded-full bg-cream-50 shadow-soft ring-1 ring-line"
                  />
                )}
                <span className={`relative ${tab === t.id ? 'text-rust-700' : 'text-ink-500'}`}>{t.label}</span>
              </button>
            ))}
          </div>

          <div id="story-panel" role="tabpanel" aria-labelledby={`tab-${tab}`} className="mt-6 min-h-[210px]">
            <AnimatePresence mode="wait" initial={false}>
              <m.div
                key={tab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="max-w-[540px] text-base leading-[1.7] text-ink-700 md:text-lg">{current.body}</p>
                <ul className="mt-5 space-y-3">
                  {current.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-[15px] text-ink-700 md:text-base">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-peach-100">
                        <Check className="h-3 w-3 text-rust-600" strokeWidth={3} aria-hidden />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </m.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-line pt-7">
            <Button href="/about#story">Read Full Story</Button>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-sand-200 font-display font-bold text-rust-700">
                {BRAND.founder.replace(/[^A-Z]/g, '').slice(0, 2) || 'GS'}
              </span>
              <span className="leading-tight">
                <span className="block font-display text-[15px] font-semibold text-ink-900">{BRAND.founder}</span>
                <span className="text-sm text-ink-500">Founder, {BRAND.name}</span>
              </span>
            </div>
          </div>
        </m.div>
      </m.div>
    </section>
  )
}
