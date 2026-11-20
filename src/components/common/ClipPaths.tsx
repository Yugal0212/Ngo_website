import React from 'react'

/** Reusable SVG clip paths. Render once per page; reference with clipPath: url(#id). */
export function ClipPaths() {
  return (
    <svg width="0" height="0" aria-hidden className="absolute pointer-events-none">
      <defs>
        {/* Hero: organic left edge, flat right/top/bottom (bleeds off screen) */}
        <clipPath id="hero-blob" clipPathUnits="objectBoundingBox">
          <path d="M0.30,0.12 C0.40,0.03 0.52,0 0.66,0 L1,0 L1,1 L0.09,1 C0.02,0.92 -0.01,0.74 0.03,0.6 C0.08,0.42 0.18,0.23 0.30,0.12 Z" />
        </clipPath>
        {/* About: soft rounded rect with a bigger top-left radius */}
        <clipPath id="about-shape" clipPathUnits="objectBoundingBox">
          <path d="M0.11,0 H0.93 Q1,0 1,0.08 V0.9 Q1,1 0.92,1 H0.07 Q0,1 0,0.9 V0.16 Q0,0.01 0.11,0 Z" />
        </clipPath>
      </defs>
    </svg>
  )
}
