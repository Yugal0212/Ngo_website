'use client'

import React from 'react'
import { m } from 'framer-motion'
import { Quote } from 'lucide-react'

import { Eyebrow } from '@/components/common/Eyebrow'
import { fadeUp, inView, stagger } from '@/lib/motion'
import { useLanguage } from '@/context/LanguageContext'

/** One featured voice, two supporting ones. Mobile friendly layout. */
export function Testimonials() {
  const { t } = useLanguage()
  const [lead, ...rest] = t.testimonials.items

  return (
    <section aria-labelledby="voices-title" className="py-14 md:py-24">
      <m.div
        initial="hidden"
        whileInView="show"
        viewport={inView}
        variants={stagger}
        className="mx-auto max-w-[1500px] px-5 md:px-10 xl:px-[90px]"
      >
        <m.div variants={fadeUp}>
          <Eyebrow>{t.testimonials.eyebrow}</Eyebrow>
          <h2
            id="voices-title"
            className="mt-2.5 sm:mt-3 font-display text-2xl sm:text-[30px] font-bold leading-[1.2] sm:leading-[1.15] tracking-[-0.01em] text-ink-900 md:text-[44px]"
          >
            {t.testimonials.title}
          </h2>
        </m.div>

        <div className="mt-8 sm:mt-10 grid gap-8 sm:gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          <m.figure variants={fadeUp} className="rounded-2xl sm:rounded-3xl bg-peach-100 p-6 sm:p-7 md:p-10 shadow-soft">
            <Quote className="h-8 w-8 sm:h-9 sm:w-9 fill-rust-600 text-rust-600" aria-hidden />
            <blockquote className="mt-4 sm:mt-5 font-display text-lg sm:text-[22px] md:text-[26px] font-semibold leading-[1.45] sm:leading-[1.4] text-ink-900">
              “{lead.quote}”
            </blockquote>
            <figcaption className="mt-5 sm:mt-7">
              <span className="block font-display text-base font-bold text-ink-900">{lead.name}</span>
              <span className="text-xs sm:text-sm text-ink-600">{lead.role}</span>
            </figcaption>
          </m.figure>

          <div className="flex flex-col divide-y divide-line">
            {rest.map((item) => (
              <m.figure key={item.name} variants={fadeUp} className="py-5 sm:py-7 first:pt-0 last:pb-0 lg:first:pt-4">
                <blockquote className="text-base sm:text-lg leading-[1.65] text-ink-800">“{item.quote}”</blockquote>
                <figcaption className="mt-3 sm:mt-4">
                  <span className="block font-display text-sm sm:text-base font-bold text-ink-900">{item.name}</span>
                  <span className="text-xs sm:text-sm text-ink-600">{item.role}</span>
                </figcaption>
              </m.figure>
            ))}
          </div>
        </div>
      </m.div>
    </section>
  )
}
