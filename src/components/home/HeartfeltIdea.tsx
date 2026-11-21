'use client'

import React from 'react'
import { m } from 'framer-motion'

import { Eyebrow } from '@/components/common/Eyebrow'
import { WaveDivider } from '@/components/common/WaveDivider'
import { fadeUp, inView, stagger } from '@/lib/motion'
import { useLanguage } from '@/context/LanguageContext'

/** The core idea, on deep brown: keep the cow at home by feeding her. Optimized for mobile storytelling. */
export function HeartfeltIdea() {
  const { t } = useLanguage()

  return (
    <section aria-labelledby="idea-title">
      <WaveDivider />
      <div className="bg-brown-900 pb-16 pt-8 sm:pb-20 sm:pt-10 text-cream-50 md:pb-28 md:pt-14">
        <m.div
          initial="hidden"
          whileInView="show"
          viewport={inView}
          variants={stagger}
          className="mx-auto grid max-w-[1500px] gap-10 px-5 md:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 xl:px-[90px]"
        >
          <m.div variants={fadeUp}>
            <Eyebrow light>{t.heartfeltIdea.eyebrow}</Eyebrow>
            <h2
              id="idea-title"
              className="mt-3 font-display text-2xl sm:text-[30px] font-bold leading-[1.2] sm:leading-[1.15] tracking-[-0.01em] md:text-[44px]"
            >
              {t.heartfeltIdea.title}
            </h2>
            <p className="mt-4 sm:mt-5 max-w-[480px] text-sm sm:text-base leading-[1.65] text-peach-200 md:text-lg">
              {t.heartfeltIdea.lead}
            </p>
          </m.div>

          <ol className="relative grid gap-8 sm:grid-cols-3 sm:gap-6">
            {/* Desktop horizontal dashed line */}
            <span
              aria-hidden
              className="absolute left-[22px] top-5 hidden h-px w-[calc(100%-44px)] border-t border-dashed border-peach-200/40 sm:block"
            />
            {/* Mobile vertical dashed line */}
            <span
              aria-hidden
              className="absolute bottom-6 left-[21px] top-6 w-px border-l border-dashed border-peach-200/40 sm:hidden"
            />
            {t.heartfeltIdea.steps.map((s, i) => (
              <m.li key={s.title} variants={fadeUp} className="relative flex gap-4 sm:flex-col sm:gap-0">
                <span
                  className={`relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full font-display text-base font-bold shadow-sm ${
                    i === 2 ? 'bg-rust-600 text-white ring-4 ring-brown-900' : 'bg-cream-50 text-brown-900 ring-4 ring-brown-900'
                  }`}
                >
                  {i + 1}
                </span>
                <div className="sm:mt-5">
                  <h3 className="font-display text-lg sm:text-xl font-bold leading-[1.25] text-cream-50 md:text-2xl">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 sm:mt-2 text-sm leading-[1.6] text-peach-200/90 font-normal">
                    {s.body}
                  </p>
                </div>
              </m.li>
            ))}
          </ol>
        </m.div>
      </div>
      <WaveDivider className="-mt-px rotate-180" />
    </section>
  )
}
