'use client'

import React from 'react'
import { m } from 'framer-motion'
import { Quote } from 'lucide-react'

import { Eyebrow } from '@/components/common/Eyebrow'
import { TESTIMONIALS } from '@/lib/data'
import { fadeUp, inView, stagger } from '@/lib/motion'

/** One featured voice, two supporting ones. */
export function Testimonials() {
  const [lead, ...rest] = TESTIMONIALS
  return (
    <section aria-labelledby="voices-title" className="py-16 md:py-24">
      <m.div
        initial="hidden"
        whileInView="show"
        viewport={inView}
        variants={stagger}
        className="mx-auto max-w-[1500px] px-5 md:px-10 xl:px-[90px]"
      >
        <m.div variants={fadeUp}>
          <Eyebrow>Voices of Kindness</Eyebrow>
          <h2
            id="voices-title"
            className="mt-3 font-display text-[30px] font-bold leading-[1.15] tracking-[-0.01em] text-ink-900 md:text-[44px]"
          >
            Why people give
          </h2>
        </m.div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          <m.figure variants={fadeUp} className="rounded-3xl bg-peach-100 p-7 md:p-10">
            <Quote className="h-9 w-9 fill-rust-600 text-rust-600" aria-hidden />
            <blockquote className="mt-5 font-display text-[22px] font-semibold leading-[1.4] text-ink-900 md:text-[28px]">
              {lead.quote}
            </blockquote>
            <figcaption className="mt-7">
              <span className="block font-display font-semibold text-ink-900">{lead.name}</span>
              <span className="text-sm text-ink-500">{lead.role}</span>
            </figcaption>
          </m.figure>

          <div className="flex flex-col divide-y divide-line">
            {rest.map((t) => (
              <m.figure key={t.name} variants={fadeUp} className="py-7 first:pt-0 last:pb-0 lg:first:pt-4">
                <blockquote className="text-lg leading-[1.6] text-ink-700">“{t.quote}”</blockquote>
                <figcaption className="mt-4">
                  <span className="block font-display font-semibold text-ink-900">{t.name}</span>
                  <span className="text-sm text-ink-500">{t.role}</span>
                </figcaption>
              </m.figure>
            ))}
          </div>
        </div>
      </m.div>
    </section>
  )
}
