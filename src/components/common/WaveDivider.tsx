import React from 'react'

/** Deep-brown wave that leads into a brown-900 section. */
export function WaveDivider({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 110"
      preserveAspectRatio="none"
      className={`block h-[56px] w-full md:h-[90px] ${className}`}
    >
      <path
        d="M0,62 C180,18 360,8 560,44 C720,72 880,74 1040,48 C1200,22 1330,24 1440,40 L1440,110 L0,110 Z"
        fill="var(--color-brown-900)"
      />
    </svg>
  )
}
