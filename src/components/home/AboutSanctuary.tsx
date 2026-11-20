'use client'

import React from 'react'
import { m } from 'framer-motion'
import { Heart, Users } from 'lucide-react'

import { Button } from '@/components/common/Button'
import { Eyebrow } from '@/components/common/Eyebrow'
import { CountUp } from '@/components/common/CountUp'
import { CowIcon, LeafSprig } from '@/components/common/Icons'
import { IMAGES } from '@/lib/images'
import { STATS } from '@/config/site'
import { fadeUp, inView, stagger } from '@/lib/motion'

const ICONS = {
  cow: () => <CowIcon size={64} className="h-12 w-14 text-rust-600 md:h-14 md:w-16" />,
  people: () => <Users strokeWidth={1.5} className="h-12 w-12 text-rust-600 md:h-14 md:w-14" aria-hidden />,
  heart: () => <Heart strokeWidth={1.5} className="h-12 w-12 text-rust-600 md:h-14 md:w-14" aria-hidden />,
}

/** "About Our Gushala": photo, story and the stats card — three columns at xl. */
export function AboutSanctuary() {
  return (
    <section id="sanctuary" aria-labelledby="sanctuary-title" className="scroll-mt-24 pb-20 pt-14 md:pt-20 lg:pb-24">
      <m.div
        initial="hidden"
        whileInView="show"
        viewport={inView}
        variants={stagger}
        className="mx-auto grid max-w-[1500px] items-center gap-10 px-5 md:px-10 lg:grid-cols-2 xl:grid-cols-[1fr_0.95fr_1.1fr] xl:gap-12 xl:px-[56px]"
      >
        {/* Photo over offset sand block */}
        <m.div variants={fadeUp} className="relative pl-3 pt-3 md:pl-6">
          <div aria-hidden className="absolute bottom-10 left-0 top-0 w-1/2 rounded-[36px] bg-sand-200" />
          <div className="relative aspect-[16/10] overflow-hidden shadow-soft" style={{ clipPath: 'url(#about-shape)' }}>
            <img
              src={IMAGES.about.src}
              alt={IMAGES.about.alt}
              width={IMAGES.about.w}
              height={IMAGES.about.h}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </m.div>

        {/* Copy */}
        <m.div variants={fadeUp} className="min-w-0">
          <Eyebrow>About Our Gushala</Eyebrow>
          <h2
            id="sanctuary-title"
            className="mt-3 font-display text-[30px] font-bold leading-[1.15] tracking-[-0.01em] text-ink-900 md:text-4xl xl:text-[length:clamp(1.75rem,2.2vw,2.5rem)]"
          >
            A Sanctuary of Hope for the <span className="text-rust-600">Voiceless</span>
          </h2>
          <p className="mt-4 max-w-[440px] text-base leading-[1.6] text-ink-700">
            We provide shelter, care and love to cows, while promoting compassion and harmony in society.
          </p>
          <div className="mt-7">
            <Button href="/about#sanctuary">Know More</Button>
          </div>
        </m.div>

        {/* Stats card */}
        <m.div variants={fadeUp} className="relative lg:col-span-2 xl:col-span-1">
          <dl className="relative z-10 grid grid-cols-3 rounded-3xl bg-peach-100 px-2 py-7 shadow-soft sm:px-4 md:py-9">
            {STATS.map((s, i) => {
              const Icon = ICONS[s.icon]
              return (
                <div
                  key={s.label}
                  className={`flex flex-col items-center text-center ${i > 0 ? 'border-l border-rust-600/20' : ''}`}
                >
                  <Icon />
                  <dd
                    aria-label={s.aria}
                    className="mt-3 font-display text-[28px] font-extrabold leading-none text-rust-600 sm:text-[32px] md:text-[44px] xl:text-[length:clamp(2rem,2.5vw,2.75rem)]"
                  >
                    <CountUp value={s.value} suffix={s.suffix} />
                  </dd>
                  <dt className="mt-2 text-sm text-ink-700 sm:text-base">{s.label}</dt>
                </div>
              )
            })}
          </dl>
          <LeafSprig className="absolute -bottom-10 -right-3 z-20 w-16 text-sand-300 md:w-20" />
        </m.div>
      </m.div>
    </section>
  )
}
