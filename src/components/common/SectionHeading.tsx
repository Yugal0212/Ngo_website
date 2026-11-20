import React from 'react'
import { Eyebrow } from './Eyebrow'

/** Eyebrow + H2 (+ optional lead). `light` for brown sections. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  light = false,
  center = false,
  id,
}: {
  eyebrow: string
  title: React.ReactNode
  lead?: string
  light?: boolean
  center?: boolean
  id?: string
}) {
  return (
    <div className={center ? 'mx-auto flex max-w-[720px] flex-col items-center text-center' : 'max-w-[720px]'}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2
        id={id}
        className={`mt-3 font-display text-[28px] font-bold leading-[1.15] tracking-[-0.01em] md:text-[40px] ${
          light ? 'text-cream-50' : 'text-ink-900'
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p className={`mt-4 text-base leading-[1.65] md:text-lg ${light ? 'text-peach-200' : 'text-ink-700'}`}>{lead}</p>
      )}
    </div>
  )
}

/** Shared page container. */
export function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-[1500px] px-5 md:px-10 xl:px-[90px] ${className}`}>{children}</div>
}
