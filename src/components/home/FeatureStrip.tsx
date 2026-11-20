'use client'

import React from 'react'
import { BowlIcon, HandsHeartIcon, HouseIcon, MedicalIcon } from '@/components/common/Icons'

const FEATURES = [
  { Icon: HouseIcon, title: 'Safe Shelter', caption: 'For Cows' },
  { Icon: MedicalIcon, title: 'Medical Care', caption: 'For Better Health' },
  { Icon: BowlIcon, title: 'Nutritious Food', caption: 'For a Healthy Life' },
  { Icon: HandsHeartIcon, title: 'Compassion', caption: 'In Every Act' },
]

/** Four promises, in a cream bar that overlaps the bottom of the hero with fast entrance. */
export function FeatureStrip() {
  return (
    <div className="relative z-10 mx-auto -mt-6 max-w-[1500px] px-5 md:px-10 xl:px-[56px]">
      <ul
        className="anim-fast-fade-up anim-delay-3 grid grid-cols-2 rounded-3xl bg-cream-100 shadow-soft lg:grid-cols-4"
      >
        {FEATURES.map(({ Icon, title, caption }, i) => (
          <li
            key={title}
            className={`relative flex flex-col items-start gap-3 px-5 py-5 sm:flex-row sm:items-center sm:gap-5 lg:justify-center lg:px-6 lg:py-7 ${
              i % 2 === 1 ? 'border-l border-line' : ''
            } ${i >= 2 ? 'border-t border-line lg:border-t-0' : ''} ${i === 2 ? 'lg:border-l' : ''}`}
          >
            <Icon size={44} className="shrink-0 text-rust-600" />
            <div className="min-w-0">
              <p className="font-display text-[15px] font-semibold text-ink-900 md:text-base">{title}</p>
              <p className="mt-0.5 text-sm text-ink-500">{caption}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
