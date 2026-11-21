'use client'

import React from 'react'
import { Leaf } from 'lucide-react'

import { Button } from '@/components/common/Button'
import { LeafSprig } from '@/components/common/Icons'
import { IMAGES } from '@/lib/images'
import { useLanguage } from '@/context/LanguageContext'

/** Hero: fast entrance transitions with immediate arrival time, optimized for mobile touch. */
export function Hero({ onDonate }: { onDonate?: () => void }) {
  const { t, isGu } = useLanguage()

  return (
    <section
      aria-labelledby="hero-title"
      className="relative -mt-20 flex flex-col pt-20 lg:-mt-[96px] lg:block lg:min-h-[640px] lg:pt-[96px] xl:min-h-[680px]"
    >
      {/* Image block — below the copy on mobile (bleeds right, compact), absolute on the right from lg */}
      <div className="relative order-2 mx-auto w-[92%] sm:w-auto sm:ml-24 sm:max-h-[380px] md:ml-32 lg:absolute lg:max-h-none lg:bottom-0 lg:right-0 lg:top-[64px] lg:m-0 lg:aspect-auto lg:w-[53%] anim-fast-scale-in">
        <div className="relative aspect-[16/11] max-h-[290px] sm:max-h-[380px] lg:h-full lg:max-h-none lg:w-full">
          {/* sand blob, offset bottom-left, drifting */}
          <div
            aria-hidden
            className="anim-drift absolute -left-[5%] bottom-[2%] h-[58%] w-[34%] rounded-[50%] bg-sand-300"
          />
          {/* thin arc line */}
          <svg
            aria-hidden
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full overflow-visible"
          >
            <path
              d="M-1,50 C6,28 26,6 58,-3"
              fill="none"
              stroke="var(--color-rust-600)"
              strokeOpacity="0.45"
              strokeWidth="1.2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          {/* blob-masked photo with instant-arrival fast scale */}
          <div
            className="absolute inset-0 overflow-hidden shadow-soft"
            style={{ clipPath: 'url(#hero-blob)' }}
          >
            <img
              src={IMAGES.hero.src}
              alt={isGu ? 'ગૌશાળામાં સુરક્ષિત અને પ્રસન્ન ગૌમાતા' : IMAGES.hero.alt}
              width={IMAGES.hero.w}
              height={IMAGES.hero.h}
              loading="eager"
              fetchPriority="high"
              sizes="(min-width:1024px) 53vw, 100vw"
              className="anim-kenburns h-full w-full object-cover object-[60%_55%]"
            />
          </div>
        </div>
      </div>

      {/* Cream curved blob under the nav's Donate button (desktop) */}
      <svg
        aria-hidden
        viewBox="0 0 380 110"
        preserveAspectRatio="none"
        className="pointer-events-none absolute right-0 top-0 hidden h-[128px] w-[27%] lg:block"
      >
        <path
          d="M0,0 C12,36 44,64 112,72 C190,81 262,100 318,100 C350,100 370,90 380,76 L380,0 Z"
          fill="var(--color-cream-100)"
        />
        <path
          d="M-10,0 C2,40 36,70 104,79"
          fill="none"
          stroke="var(--color-sand-300)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Leaf sprig on the far left edge */}
      <LeafSprig className="anim-sway absolute left-0 top-[170px] hidden w-14 text-rust-600/60 md:block lg:top-[190px] xl:w-16" />

      {/* Text: Fast entrance transition with immediate arrival */}
      <div className="relative order-1 mx-auto w-full max-w-[1500px] px-5 pb-6 pt-2 sm:pt-4 md:px-10 md:pb-10 lg:pb-28 lg:pt-10 xl:px-[90px] xl:pt-12">
        <div className="lg:w-[50%]">
          <p
            className="anim-fast-fade-up inline-flex items-center gap-2 rounded-full bg-peach-100 px-3.5 py-1.5 text-xs sm:text-[13px] md:text-[15px] font-medium text-ink-900 shadow-xs"
          >
            <Leaf className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-rust-600/20 text-rust-600 shrink-0" aria-hidden />
            <span>{t.hero.badge}</span>
          </p>

          <h1
            id="hero-title"
            className="anim-fast-fade-up anim-delay-1 mt-3 sm:mt-4 font-display font-bold leading-[1.12] sm:leading-[1.05] tracking-[-0.02em] text-[length:clamp(1.95rem,5.5vw+0.6rem,4.25rem)]"
          >
            <span className="block text-ink-900">
              {t.hero.title1}
            </span>
            <span className="block pb-1 text-rust-600">
              {t.hero.title2}
            </span>
          </h1>

          <p className="anim-fast-fade-up anim-delay-2 mt-3 max-w-[520px] text-sm sm:text-[15px] leading-[1.65] text-ink-700 md:mt-5 md:text-lg md:leading-[1.65]">
            {t.hero.lead}
          </p>

          <div className="anim-fast-fade-up anim-delay-3 mt-5 sm:mt-6 flex flex-row gap-2.5 sm:gap-4 md:mt-8">
            <Button
              heart
              size="lg"
              href="/donate"
              onClick={onDonate}
              className="!h-12 flex-[1.2] !gap-1.5 sm:!gap-2 !px-3 sm:!px-6 !text-sm sm:!text-[17px] justify-center"
            >
              {t.hero.donateCta}
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/about"
              className="!h-12 flex-1 !px-3 sm:!px-6 !text-sm sm:!text-[17px] justify-center"
            >
              {t.hero.learnCta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
