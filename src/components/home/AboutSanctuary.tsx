'use client'

import React from 'react'
import { m } from 'framer-motion'
import { Heart, Users } from 'lucide-react'

import { Button } from '@/components/common/Button'
import { Eyebrow } from '@/components/common/Eyebrow'
import { CountUp } from '@/components/common/CountUp'
import { CowIcon, LeafSprig } from '@/components/common/Icons'
import { IMAGES } from '@/lib/images'
import { fadeUp, inView, stagger } from '@/lib/motion'
import { useLanguage } from '@/context/LanguageContext'

const ICONS = {
  cow: () => <CowIcon size={48} className="h-9 w-10 text-rust-600 sm:h-12 sm:w-14 md:h-14 md:w-16" />,
  people: () => <Users strokeWidth={1.5} className="h-9 w-9 text-rust-600 sm:h-12 sm:w-12 md:h-14 md:w-14" aria-hidden />,
  heart: () => <Heart strokeWidth={1.5} className="h-9 w-9 text-rust-600 sm:h-12 sm:w-12 md:h-14 md:w-14" aria-hidden />,
}

/** "About Our Gushala": photo, story and the stats card — three columns at xl. */
export function AboutSanctuary() {
  const { t, isGu } = useLanguage()

  return (
    <section id="sanctuary" aria-labelledby="sanctuary-title" className="scroll-mt-24 pb-16 pt-12 md:pb-24 md:pt-20">
      <m.div
        initial="hidden"
        whileInView="show"
        viewport={inView}
        variants={stagger}
        className="mx-auto grid max-w-[1500px] items-center gap-8 sm:gap-10 px-5 md:px-10 lg:grid-cols-2 xl:grid-cols-[1fr_0.95fr_1.1fr] xl:gap-12 xl:px-[56px]"
      >
        {/* Photo over offset sand block */}
        <m.div variants={fadeUp} className="relative pl-2 sm:pl-3 pt-3 md:pl-6">
          <div aria-hidden className="absolute bottom-8 left-0 top-0 w-1/2 rounded-[28px] sm:rounded-[36px] bg-sand-200" />
          <div className="relative aspect-[16/10] overflow-hidden shadow-soft rounded-2xl" style={{ clipPath: 'url(#about-shape)' }}>
            <img
              src={IMAGES.about.src}
              alt={isGu ? 'ગૌશાળામાં ગૌમાતાની પ્રેમપૂર્વક સેવા' : IMAGES.about.alt}
              width={IMAGES.about.w}
              height={IMAGES.about.h}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </m.div>

        {/* Copy */}
        <m.div variants={fadeUp} className="min-w-0">
          <Eyebrow>{t.aboutSanctuary.eyebrow}</Eyebrow>
          <h2
            id="sanctuary-title"
            className="mt-2.5 sm:mt-3 font-display text-2xl sm:text-[30px] font-bold leading-[1.2] sm:leading-[1.15] tracking-[-0.01em] text-ink-900 md:text-4xl xl:text-[length:clamp(1.75rem,2.2vw,2.5rem)]"
          >
            {t.aboutSanctuary.title1}{' '}
            <span className="text-rust-600">{t.aboutSanctuary.titleHighlight}</span>
          </h2>
          <p className="mt-3 sm:mt-4 max-w-[440px] text-sm sm:text-base leading-[1.65] text-ink-700">
            {t.aboutSanctuary.lead}
          </p>
          <div className="mt-5 sm:mt-7">
            <Button href="/about#sanctuary" className="!h-11 sm:!h-12 !px-5 text-sm sm:text-base">
              {t.aboutSanctuary.cta}
            </Button>
          </div>
        </m.div>

        {/* Stats card: mobile optimized grid */}
        <m.div variants={fadeUp} className="relative lg:col-span-2 xl:col-span-1">
          <dl className="relative z-10 grid grid-cols-3 rounded-2xl sm:rounded-3xl bg-peach-100 px-2 py-5 sm:px-4 sm:py-7 md:py-9 shadow-soft">
            {t.aboutSanctuary.stats.map((s, i) => {
              const Icon = ICONS[s.icon]
              return (
                <div
                  key={s.label}
                  className={`flex flex-col items-center text-center px-1 ${
                    i > 0 ? 'border-l border-rust-600/20' : ''
                  }`}
                >
                  <Icon />
                  <dd
                    aria-label={s.aria}
                    className="mt-2 sm:mt-3 font-display text-xl sm:text-[28px] md:text-[40px] font-extrabold leading-none text-rust-600 xl:text-[length:clamp(1.75rem,2.2vw,2.5rem)]"
                  >
                    <CountUp value={s.value} suffix={s.suffix} />
                  </dd>
                  <dt className="mt-1.5 sm:mt-2 text-[11px] sm:text-sm font-medium text-ink-800 leading-tight">
                    {s.label}
                  </dt>
                </div>
              )
            })}
          </dl>
          <LeafSprig className="absolute -bottom-8 -right-2 z-20 w-12 sm:w-16 text-sand-300 md:w-20" />
        </m.div>
      </m.div>
    </section>
  )
}
