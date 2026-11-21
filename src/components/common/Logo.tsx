'use client'

import React from 'react'
import { BRAND } from '@/config/site'
import { CowHead } from './Icons'
import { useLanguage } from '@/context/LanguageContext'

/** Line-art sacred Gau Mata + wordmark + tagline. `light` for dark backgrounds. */
export function Logo({
  compact = false,
  light = false,
  hideIcon = false,
}: {
  compact?: boolean
  light?: boolean
  hideIcon?: boolean
}) {
  const { t, isGu } = useLanguage()

  return (
    <span className="flex items-center gap-2 sm:gap-2.5 select-none">
      {!hideIcon && (
        <span
          className={`grid place-items-center rounded-2xl transition-all shadow-xs ${
            compact
              ? 'h-9 w-9 sm:h-10 sm:w-10'
              : 'h-10 w-10 sm:h-12 sm:w-12'
          } ${
            light
              ? 'bg-cream-50/15 text-peach-200 ring-1 ring-peach-200/20'
              : 'bg-peach-100 text-rust-600 ring-1 ring-rust-600/10'
          }`}
        >
          <CowHead
            size={compact ? 32 : 40}
            className="shrink-0 transition-transform duration-200"
          />
        </span>
      )}
      <span className="flex flex-col leading-none">
        <span
          className={`font-display font-extrabold tracking-tight transition-colors ${
            compact
              ? 'text-xl sm:text-2xl'
              : 'text-[22px] sm:text-[26px] md:text-[28px]'
          } ${light ? 'text-cream-50' : 'text-ink-900'}`}
        >
          {isGu ? t.brand.name : BRAND.name}
        </span>
        <span
          className={`mt-1 whitespace-nowrap font-medium tracking-tight ${
            compact ? 'text-[9.5px] sm:text-[10.5px]' : 'text-[10px] sm:text-xs'
          } ${light ? 'text-peach-200/90' : 'text-ink-600'}`}
        >
          {isGu ? t.brand.tagline : BRAND.tagline}
        </span>
      </span>
    </span>
  )
}
