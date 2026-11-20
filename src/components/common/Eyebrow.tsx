import React from 'react'

/** Rust eyebrow with a 22px line prefix. */
export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`flex items-center gap-2.5 font-display text-[15px] font-semibold ${
        light ? 'text-peach-200' : 'text-rust-600'
      }`}
    >
      <span aria-hidden className={`h-0.5 w-[22px] rounded-full ${light ? 'bg-peach-200' : 'bg-rust-600'}`} />
      {children}
    </p>
  )
}
