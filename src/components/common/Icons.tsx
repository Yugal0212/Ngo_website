'use client'

import React from 'react'
import { m } from 'framer-motion'

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number }

const base = (size: number) => ({
  width: size,
  height: size,
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
})

const COW_HEAD_PATHS = [
  'M24 17 C17 16 11 12 10 4 C14 9 19 11 25 12',
  'M40 17 C47 16 53 12 54 4 C50 9 45 11 39 12',
  'M23 22 C17 21 11 19 6 17 C9 23 15 27 23 27',
  'M41 22 C47 21 53 19 58 17 C55 23 49 27 41 27',
  'M23 18 C24 14 28 13 32 13 C36 13 40 14 41 18 L40 37 C40 42 41 45 40 48',
  'M23 18 L24 37 C24 42 23 45 24 48',
  'M24 48 C24 54 27 58 32 58 C37 58 40 54 40 48 C38 46 26 46 24 48 Z',
  'M29 52 h0.01 M35 52 h0.01',
  'M26 31 q2 1.6 4 0 M34 31 q2 1.6 4 0',
  'M29 17 q3 3 6 0',
]

/** Line-art cow head used in the logo. `draw` animates the strokes in (splash). */
export function CowHead({ size = 56, draw = false, ...rest }: IconProps & { draw?: boolean }) {
  return (
    <svg viewBox="0 0 64 64" strokeWidth={2.2} {...base(size)} {...rest}>
      {COW_HEAD_PATHS.map((d, i) =>
        draw ? (
          <m.path
            key={i}
            d={d}
            initial={{ pathLength: 0 } as Record<string, number>}
            animate={{ pathLength: 1 } as Record<string, number>}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.02 }}
          />
        ) : (
          <path key={i} d={d} />
        ),
      )}
    </svg>
  )
}

export function HouseIcon({ size = 44, ...rest }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" strokeWidth={2} {...base(size)} {...rest}>
      <path d="M5 23 L24 6 L43 23" />
      <path d="M10 19 V42 H38 V19" />
      <path d="M19 42 V29 C19 27 20.5 26 24 26 C27.5 26 29 27 29 29 V42" />
    </svg>
  )
}

export function MedicalIcon({ size = 44, ...rest }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" strokeWidth={2} {...base(size)} {...rest}>
      <path d="M18 7 H30 V18 H41 V30 H30 V41 H18 V30 H7 V18 H18 Z" />
    </svg>
  )
}

export function BowlIcon({ size = 44, ...rest }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" strokeWidth={2} {...base(size)} {...rest}>
      <path d="M5 24 H43 C43 34 35 40 24 40 C13 40 5 34 5 24 Z" />
      <path d="M9 30 H39" />
      <path d="M17 40 V43 H31 V40" />
      <circle cx="16" cy="19" r="1.6" />
      <circle cx="22" cy="15" r="1.6" />
      <circle cx="28" cy="17" r="1.6" />
      <circle cx="33" cy="20" r="1.6" />
      <circle cx="24" cy="9" r="1.6" />
      <circle cx="19" cy="11" r="1.2" />
    </svg>
  )
}

export function HandsHeartIcon({ size = 44, ...rest }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" strokeWidth={2} {...base(size)} {...rest}>
      <path d="M24 22 C19 18 15 15 15 11 C15 8 17 6 19.5 6 C21.5 6 23 7.2 24 9 C25 7.2 26.5 6 28.5 6 C31 6 33 8 33 11 C33 15 29 18 24 22 Z" />
      <path d="M6 18 V30 C6 33 8 35 11 37 L17 42 H22 V34 C22 31 20 29 18 27 L12 21" />
      <path d="M12 21 C11 19 9 18 8 19" />
      <path d="M42 18 V30 C42 33 40 35 37 37 L31 42 H26 V34 C26 31 28 29 30 27 L36 21" />
      <path d="M36 21 C37 19 39 18 40 19" />
    </svg>
  )
}

export function CowIcon({ size = 64, ...rest }: IconProps) {
  return (
    <svg viewBox="0 0 64 48" strokeWidth={2} {...base(size)} {...rest}>
      <path d="M8 20 C9 16 12 15 16 15 H42 C45 15 47 13 49 10" />
      <path d="M49 10 L47 5 M52 10 L55 6" />
      <path d="M48 11 L44 9" />
      <path d="M49 10 C53 11 57 14 58 17 C58 19 56 20 54 20 L51 20 C50 23 48 25 46 26" />
      <path d="M46 26 V42 M41 28 V42" />
      <path d="M13 28 V42 M18 30 V42" />
      <path d="M13 28 C10 26 8 23 8 20" />
      <path d="M18 30 C26 31 34 30 41 28" />
      <path d="M8 20 C6 24 6 30 7 34" />
    </svg>
  )
}

export function LeafSprig({ className = '', ...rest }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 80 120" fill="currentColor" aria-hidden className={className} {...rest}>
      <path d="M8 118 C20 90 34 62 52 30" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M50 34 C44 22 46 10 54 2 C60 12 58 26 50 34 Z" />
      <path d="M38 58 C24 56 16 48 14 38 C26 38 36 46 38 58 Z" />
      <path d="M41 56 C52 50 64 52 72 58 C62 66 50 64 41 56 Z" opacity="0.8" />
      <path d="M26 84 C16 78 12 68 14 60 C22 64 27 74 26 84 Z" opacity="0.85" />
      <path d="M29 82 C38 76 50 78 56 84 C46 90 36 88 29 82 Z" opacity="0.7" />
    </svg>
  )
}
