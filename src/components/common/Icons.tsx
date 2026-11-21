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

/**
 * Sacred, gentle Indian Gau Mata (Desi Gir Cow) line art.
 * Features:
 * - Peaceful pendulous drooping ears (maternal and calm, NOT upright aggressive bull ears)
 * - Soft, small curved feminine horns (NOT sharp long bull horns)
 * - Sacred Tilak / Chandlo on forehead
 * - Gentle kind eyes and smiling muzzle
 */
const COW_HEAD_PATHS = [
  // Sacred Tilak / Chandlo on forehead
  'M32 17 C30.8 19.2 29.5 21.2 29.5 23 A2.5 2.5 0 0 0 34.5 23 C34.5 21.2 33.2 19.2 32 17 Z',
  // Small, soft curved horns (gentle and rounded, NOT sharp bull spikes)
  'M26 15 C23 11 20 10 19 11.5 C18.2 13 21 15 24 17',
  'M38 15 C41 11 44 10 45 11.5 C45.8 13 43 15 40 17',
  // Gir cow soft pendulous drooping ears (peaceful, motherly)
  'M24 18 C17 19 10 24 8 29 C7.5 31.5 9 33 11.5 32 C16 30 20 26 23 23',
  'M40 18 C47 19 54 24 56 29 C56.5 31.5 55 33 52.5 32 C48 30 44 26 41 23',
  // Crown between ears
  'M24 17 C28 15.5 36 15.5 40 17',
  // Gentle cheek curves tapering to muzzle
  'M23 23 C22 28 23 35 24 40 L25 46',
  'M41 23 C42 28 41 35 40 40 L39 46',
  // Soft, sweet rounded muzzle & chin
  'M25 46 C24 52.5 27.5 56.5 32 56.5 C36.5 56.5 40 52.5 39 46 C37 44.5 27 44.5 25 46 Z',
  // Peaceful gentle smile
  'M29.5 52.5 Q32 54.5 34.5 52.5',
  // Soft nostrils
  'M29 49.5 h0.01 M35 49.5 h0.01',
  // Kind, gentle eyes with soft gaze
  'M24.5 31 C26.5 29.5 28.5 30 29.5 32',
  'M39.5 31 C37.5 29.5 35.5 30 34.5 32',
]

/** Line-art sacred Gau Mata head used in the logo. `draw` animates the strokes in (splash). */
export function CowHead({ size = 56, draw = false, ...rest }: IconProps & { draw?: boolean }) {
  return (
    <svg viewBox="0 0 64 64" strokeWidth={2} {...base(size)} {...rest}>
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
      <path d="M12 20 C12 16 14 13 18 12 L22 11 L25 7 C26 5 28 5 29 6 L30 10 L34 10 L35 6 C36 5 38 5 39 7 L42 11 L46 12 C50 13 52 16 52 20 L51 32 C51 36 48 38 45 38 L19 38 C16 38 13 36 13 32 Z" />
      <path d="M18 38 L18 44" />
      <path d="M46 38 L46 44" />
      <circle cx="24" cy="22" r="1.5" />
      <circle cx="40" cy="22" r="1.5" />
      <path d="M28 28 C30 30 34 30 36 28" />
    </svg>
  )
}

export function LeafSprig(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 60 120" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M30 115 C30 80 32 40 30 5 C29 40 27 80 30 115 Z" />
      <path d="M30 95 C18 90 12 78 14 68 C22 70 28 82 30 95 Z" />
      <path d="M30 80 C42 75 48 63 46 53 C38 55 32 67 30 80 Z" />
      <path d="M30 60 C18 55 12 43 14 33 C22 35 28 47 30 60 Z" />
      <path d="M30 45 C42 40 48 28 46 18 C38 20 32 32 30 45 Z" />
      <path d="M30 25 C22 20 18 12 20 4 C25 6 29 14 30 25 Z" />
    </svg>
  )
}
