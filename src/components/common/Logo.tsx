import React from 'react'
import { BRAND } from '@/config/site'
import { CowHead } from './Icons'

/** Line-art cow head + wordmark + tagline. `light` for dark backgrounds. */
export function Logo({ compact = false, light = false }: { compact?: boolean; light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <CowHead
        size={compact ? 44 : 56}
        className={`shrink-0 transition-[width,height] duration-200 ease-out ${light ? 'text-peach-200' : 'text-rust-600'}`}
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[26px] font-bold tracking-[-0.01em] sm:text-[30px] ${light ? 'text-cream-50' : 'text-ink-900'}`}
        >
          {BRAND.name}
        </span>
        <span className={`mt-1 whitespace-nowrap text-[11px] font-medium sm:text-xs ${light ? 'text-peach-200' : 'text-ink-700'}`}>
          {BRAND.tagline}
        </span>
      </span>
    </span>
  )
}
