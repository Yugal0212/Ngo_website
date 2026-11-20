'use client'

import React from 'react'
import { Leaf } from 'lucide-react'

import { Button } from '@/components/common/Button'
import { LeafSprig } from '@/components/common/Icons'
import { IMAGES } from '@/lib/images'

/** Hero: fast entrance transitions with immediate arrival time. */
export function Hero({ onDonate }: { onDonate?: () => void }) {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative -mt-20 flex flex-col pt-20 lg:-mt-[96px] lg:block lg:min-h-[640px] lg:pt-[96px] xl:min-h-[680px]"
    >
      {/* Image block — below the copy on mobile (bleeds right, compact), absolute on the right from lg */}
      <div className="relative order-2 ml-8 aspect-[16/10] max-h-[260px] sm:ml-24 sm:max-h-[380px] md:ml-32 lg:absolute lg:max-h-none lg:bottom-0 lg:right-0 lg:top-[64px] lg:m-0 lg:aspect-auto lg:w-[53%] anim-fast-scale-in">
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
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: 'url(#hero-blob)' }}
        >
          <img
            src={IMAGES.hero.src}
            alt={IMAGES.hero.alt}
            width={IMAGES.hero.w}
            height={IMAGES.hero.h}
            loading="eager"
            fetchPriority="high"
            sizes="(min-width:1024px) 53vw, 100vw"
            className="anim-kenburns h-full w-full object-cover object-[60%_55%]"
          />
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
      <div className="relative order-1 mx-auto w-full max-w-[1500px] px-5 pb-6 pt-4 md:px-10 md:pb-10 lg:pb-28 lg:pt-10 xl:px-[90px] xl:pt-12">
        <div className="lg:w-[50%]">
          <p
            className="anim-fast-fade-up inline-flex items-center gap-2 rounded-full bg-peach-100 px-3.5 py-1.5 text-[13px] font-medium text-ink-900 md:px-4 md:py-2 md:text-[15px]"
          >
            <Leaf className="h-4 w-4 fill-rust-600/20 text-rust-600" aria-hidden />
            Together for a Kinder World
          </p>

          <h1
            id="hero-title"
            className="anim-fast-fade-up anim-delay-1 mt-4 font-display font-bold md:mt-5 leading-[1.05] tracking-[-0.02em] text-[length:clamp(2.25rem,3.6vw+0.9rem,4.5rem)]"
          >
            <span className="block whitespace-nowrap text-ink-900">
              Serve Gau Mata,
            </span>
            <span className="block whitespace-nowrap pb-1 text-rust-600">
              Serve Humanity
            </span>
          </h1>

          <p className="anim-fast-fade-up anim-delay-2 mt-3 max-w-[520px] text-[15px] leading-[1.6] text-ink-700 md:mt-5 md:text-lg md:leading-[1.65]">
            Our Gushala is dedicated to the care, protection and welfare of cows, because every life matters.
          </p>

          <div className="anim-fast-fade-up anim-delay-3 mt-6 flex gap-3 md:mt-8 sm:gap-6">
            <Button heart size="lg" href="/donate" onClick={onDonate} className="!h-12 flex-[1.25] !gap-2 !px-4 !text-[15px] sm:!h-[52px] sm:flex-none sm:!px-7 sm:!text-[17px]">
              Donate Now
            </Button>
            <Button variant="outline" size="lg" href="/about" className="!h-12 flex-1 !px-4 !text-[15px] sm:!h-[52px] sm:min-w-[186px] sm:flex-none sm:!px-7 sm:!text-[17px]">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
