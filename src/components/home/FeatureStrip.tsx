'use client'

import React from 'react'
import { BowlIcon, HandsHeartIcon, HouseIcon, MedicalIcon } from '@/components/common/Icons'
import { useLanguage } from '@/context/LanguageContext'

const ICONS = [HouseIcon, MedicalIcon, BowlIcon, HandsHeartIcon]

/** Four promises, in a cream bar that overlaps the bottom of the hero with fast entrance. */
export function FeatureStrip() {
  const { t } = useLanguage()

  return (
    <div className="relative z-10 mx-auto -mt-4 sm:-mt-6 max-w-[1500px] px-4 sm:px-6 md:px-10 xl:px-[56px]">
      <ul
        className="anim-fast-fade-up anim-delay-3 grid grid-cols-2 rounded-2xl sm:rounded-3xl bg-cream-100 shadow-soft lg:grid-cols-4 border border-line/50"
      >
        {t.featureStrip.map((item, i) => {
          const Icon = ICONS[i] || HouseIcon
          return (
            <li
              key={item.title}
              className={`relative flex flex-col items-start gap-2.5 sm:gap-3 p-4 sm:p-5 sm:flex-row sm:items-center sm:gap-4 lg:justify-center lg:px-6 lg:py-7 ${
                i % 2 === 1 ? 'border-l border-line' : ''
              } ${i >= 2 ? 'border-t border-line lg:border-t-0' : ''} ${i === 2 ? 'lg:border-l' : ''}`}
            >
              <Icon size={38} className="shrink-0 text-rust-600 sm:h-11 sm:w-11" />
              <div className="min-w-0">
                <p className="font-display text-sm sm:text-[15px] font-bold text-ink-900 md:text-base leading-tight">
                  {item.title}
                </p>
                <p className="mt-0.5 text-xs sm:text-sm text-ink-500 leading-snug">
                  {item.caption}
                </p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
