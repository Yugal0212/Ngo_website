'use client'

import React from 'react'
import { m } from 'framer-motion'

import { Eyebrow } from '@/components/common/Eyebrow'
import { WaveDivider } from '@/components/common/WaveDivider'
import { fadeUp, inView, stagger } from '@/lib/motion'

const STEPS = [
  {
    title: 'Family keeps the cow',
    body: 'The family agrees to keep her at home and care for her as one of their own.',
  },
  {
    title: 'We provide fresh food',
    body: 'Our team delivers green fodder and feed regularly, so the cost never falls on them.',
  },
  {
    title: 'Cow lives safe & loved',
    body: 'She stays with the people she knows — fed, healthy and never left alone.',
  },
]

/** The core idea, on deep brown: keep the cow at home by feeding her. */
export function HeartfeltIdea() {
  return (
    <section aria-labelledby="idea-title">
      <WaveDivider />
      <div className="bg-brown-900 pb-20 pt-10 text-cream-50 md:pb-28 md:pt-14">
        <m.div
          initial="hidden"
          whileInView="show"
          viewport={inView}
          variants={stagger}
          className="mx-auto grid max-w-[1500px] gap-12 px-5 md:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 xl:px-[90px]"
        >
          <m.div variants={fadeUp}>
            <Eyebrow light>Our Heartfelt Idea</Eyebrow>
            <h2
              id="idea-title"
              className="mt-3 font-display text-[30px] font-bold leading-[1.15] tracking-[-0.01em] md:text-[44px]"
            >
              When a cow stops giving milk, she shouldn’t lose her home.
            </h2>
            <p className="mt-5 max-w-[480px] text-base leading-[1.65] text-peach-200 md:text-lg">
              Many families can no longer afford to feed a cow that is not giving milk, and she ends up on the
              street. We step in with fresh food, so the family can keep her where she belongs.
            </p>
          </m.div>

          <ol className="relative grid gap-10 sm:grid-cols-3 sm:gap-6">
            <span
              aria-hidden
              className="absolute left-[22px] top-6 hidden h-px w-[calc(100%-44px)] border-t border-dashed border-peach-200/40 sm:block"
            />
            <span
              aria-hidden
              className="absolute bottom-6 left-[22px] top-6 w-px border-l border-dashed border-peach-200/40 sm:hidden"
            />
            {STEPS.map((s, i) => (
              <m.li key={s.title} variants={fadeUp} className="relative flex gap-5 sm:flex-col sm:gap-0">
                <span
                  className={`relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full font-display text-base font-bold ${
                    i === 2 ? 'bg-rust-600 text-white' : 'bg-cream-50 text-brown-900'
                  }`}
                >
                  {i + 1}
                </span>
                <div className="sm:mt-6">
                  <h3 className="font-display text-xl font-semibold leading-[1.25] md:text-2xl">{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-[1.6] text-peach-200">{s.body}</p>
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
