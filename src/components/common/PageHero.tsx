'use client'

import React from 'react'
import Link from 'next/link'
import { m } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

import { ease } from '@/lib/motion'
import { LeafSprig } from './Icons'
import { useLanguage } from '@/context/LanguageContext'

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
  const { isGu } = useLanguage()

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
        className={`relative mx-auto grid max-w-[1500px] items-center gap-6 sm:gap-8 px-4 sm:px-6 pb-10 pt-4 sm:pb-14 sm:pt-6 md:px-10 md:pb-20 lg:gap-16 xl:px-[90px] ${
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
            <ol className="flex items-center gap-1.5 text-xs sm:text-sm text-ink-500">
              <li>
                <Link href="/" className="hover:text-rust-600 transition-colors">
                  {isGu ? 'મુખ્ય પૃષ્ઠ' : 'Home'}
                </Link>
              </li>
              <li aria-hidden>
                <ChevronRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              </li>
              <li aria-current="page" className="font-semibold text-rust-600">
                {crumb}
              </li>
            </ol>
          </m.nav>
          {eyebrow && (
            <m.p variants={item} className="mt-4 sm:mt-6 inline-flex rounded-full bg-peach-100 px-3.5 py-1 text-xs sm:text-sm font-medium text-ink-900 shadow-xs">
              {eyebrow}
            </m.p>
          )}
          <m.h1
            variants={item}
            className="mt-3 font-display text-[length:clamp(1.85rem,2.8vw+0.8rem,3.75rem)] font-bold leading-[1.12] tracking-[-0.02em] text-ink-900"
          >
            {title}
          </m.h1>
          <m.p variants={item} className="mt-3.5 sm:mt-5 max-w-[560px] text-sm sm:text-base leading-[1.65] text-ink-700 md:text-lg">
            {lead}
          </m.p>
          {children && (
            <m.div variants={item} className="mt-6 sm:mt-8">
              {children}
            </m.div>
          )}
        </m.div>

        {image && (
          <m.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease }}
            className="relative order-first mx-auto w-full max-w-[460px] sm:max-w-none lg:order-last"
          >
            <div className="relative aspect-[16/11] overflow-hidden rounded-[24px_48px_24px_48px] sm:rounded-[40px_80px_40px_80px] shadow-soft ring-4 ring-cream-100">
              <img
                src={image.src}
                alt={image.alt}
                width={image.w}
                height={image.h}
                loading="eager"
                className="h-full w-full object-cover"
              />
            </div>
          </m.div>
        )}
      </div>
    </section>
  )
}
