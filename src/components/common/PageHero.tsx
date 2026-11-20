'use client'

import React from 'react'
import Link from 'next/link'
import { m } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

import { ease } from '@/lib/motion'
import { LeafSprig } from './Icons'

type Props = {
  crumb: string
  eyebrow?: string
  title: React.ReactNode
  lead: string
  image?: { src: string; alt: string; w: number; h: number }
  children?: React.ReactNode
}

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease } },
}

/** Inner-page header: copy first, image in a soft arch-and-blob shape. Mobile shows copy first, compact image. */
export function PageHero({ crumb, eyebrow, title, lead, image, children }: Props) {
  return (
    <section className="relative -mt-20 overflow-hidden pt-20 lg:-mt-[96px] lg:pt-[96px]">
      {/* cream blob under the nav Donate button */}
      <svg
        aria-hidden
        viewBox="0 0 380 110"
        preserveAspectRatio="none"
        className="pointer-events-none absolute right-0 top-0 hidden h-[128px] w-[27%] lg:block"
      >
        <path d="M0,0 C12,36 44,64 112,72 C190,81 262,100 318,100 C350,100 370,90 380,76 L380,0 Z" fill="var(--color-cream-100)" />
      </svg>
      <LeafSprig className="anim-sway absolute left-0 top-[150px] hidden w-12 text-rust-600/50 md:block" />

      <div
        className={`relative mx-auto grid max-w-[1500px] items-center gap-8 px-5 pb-14 pt-6 md:px-10 md:pb-20 lg:gap-16 xl:px-[90px] ${
          image ? 'lg:grid-cols-[1.05fr_1fr]' : ''
        }`}
      >
        <m.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.07 }}
          className={image ? '' : 'max-w-[820px]'}
        >
          <m.nav variants={item} aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-sm text-ink-500">
              <li>
                <Link href="/" className="hover:text-rust-600">
                  Home
                </Link>
              </li>
              <li aria-hidden>
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li aria-current="page" className="font-medium text-rust-600">
                {crumb}
              </li>
            </ol>
          </m.nav>
          {eyebrow && (
            <m.p variants={item} className="mt-6 inline-flex rounded-full bg-peach-100 px-4 py-1.5 text-sm font-medium text-ink-900">
              {eyebrow}
            </m.p>
          )}
          <m.h1
            variants={item}
            className="mt-4 font-display text-[length:clamp(2.1rem,2.6vw+1rem,3.75rem)] font-bold leading-[1.08] tracking-[-0.02em] text-ink-900"
          >
            {title}
          </m.h1>
          <m.p variants={item} className="mt-5 max-w-[560px] text-base leading-[1.65] text-ink-700 md:text-lg">
            {lead}
          </m.p>
          {children && (
            <m.div variants={item} className="mt-8">
              {children}
            </m.div>
          )}
        </m.div>

        {image && (
          <m.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease, delay: 0.1 }}
            className="relative ml-8 sm:ml-20 lg:ml-0"
          >
            <div aria-hidden className="anim-drift absolute -bottom-4 -left-4 h-[70%] w-[55%] rounded-[48px] bg-sand-200 lg:-bottom-6 lg:-left-6" />
            <div className="relative aspect-[16/10] max-h-[240px] w-full overflow-hidden rounded-[120px_28px_28px_28px] shadow-soft sm:max-h-none lg:aspect-[5/4] lg:rounded-[180px_32px_32px_32px]">
              <img
                src={image.src}
                alt={image.alt}
                width={image.w}
                height={image.h}
                loading="eager"
                fetchPriority="high"
                className="h-full w-full object-cover"
              />
            </div>
          </m.div>
        )}
      </div>
    </section>
  )
}
