'use client'

import React from 'react'
import Link from 'next/link'
import { m } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'

import { Eyebrow } from '@/components/common/Eyebrow'
import { IMAGES } from '@/lib/images'
import { fadeUp, inView, stagger } from '@/lib/motion'
import { useLanguage } from '@/context/LanguageContext'

const MISSION_IMAGES = [IMAGES.missionCow, IMAGES.missionEdu]

/** Two missions side by side — cow care and children’s education. Optimized for mobile touch. */
export function Missions() {
  const { t } = useLanguage()

  return (
    <section id="missions" aria-labelledby="missions-title" className="py-14 md:py-24">
      <m.div
        initial="hidden"
        whileInView="show"
        viewport={inView}
        variants={stagger}
        className="mx-auto max-w-[1500px] px-5 md:px-10 xl:px-[90px]"
      >
        <m.div variants={fadeUp} className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <Eyebrow>{t.missions.eyebrow}</Eyebrow>
            <h2
              id="missions-title"
              className="mt-2.5 sm:mt-3 max-w-[640px] font-display text-2xl sm:text-[30px] font-bold leading-[1.2] sm:leading-[1.15] tracking-[-0.01em] text-ink-900 md:text-[44px]"
            >
              {t.missions.title1} <span className="text-rust-600">{t.missions.title2}</span>
            </h2>
          </div>
          <p className="max-w-[380px] text-sm sm:text-base leading-[1.65] text-ink-600">
            {t.missions.lead}
          </p>
        </m.div>

        <div className="mt-8 sm:mt-12 grid gap-6 sm:gap-8 md:grid-cols-2 lg:gap-10">
          {t.missions.items.map((mi, index) => {
            const img = MISSION_IMAGES[index] || IMAGES.missionCow
            return (
              <m.div key={mi.title} variants={fadeUp}>
                <Link
                  href={mi.href}
                  className="group flex h-full flex-col rounded-3xl bg-cream-100 p-3 sm:p-4 shadow-soft transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-lift border border-line/50"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <img
                      src={img.src}
                      alt={img.alt}
                      width={img.w}
                      height={img.h}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
                    />
                    <span className="absolute left-3.5 top-3.5 rounded-full bg-cream-50/95 px-3 py-1 font-display text-xs sm:text-sm font-bold text-rust-700 shadow-sm backdrop-blur-xs">
                      {mi.tag}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col px-2 pb-2 pt-5 sm:px-4 sm:pb-4 sm:pt-6">
                    <h3 className="font-display text-xl sm:text-2xl font-bold leading-[1.25] text-ink-900">
                      {mi.title}
                    </h3>
                    <p className="mt-2.5 text-sm sm:text-base leading-[1.65] text-ink-700">
                      {mi.body}
                    </p>
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                      {mi.points.map((p) => (
                        <li key={p} className="flex items-center gap-2 text-xs sm:text-[14px] text-ink-700">
                          <Check className="h-4 w-4 shrink-0 text-leaf-600" aria-hidden />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                    <span className="mt-auto inline-flex items-center gap-2 pt-6 font-display text-sm sm:text-base font-bold text-rust-600 group-hover:text-rust-700">
                      {mi.cta}
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" aria-hidden />
                    </span>
                  </div>
                </Link>
              </m.div>
            )
          })}
        </div>
      </m.div>
    </section>
  )
}
