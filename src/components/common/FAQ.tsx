'use client'

import React, { useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { Plus } from 'lucide-react'

/** Accordion — one open at a time, hairline-separated rather than boxed. */
export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <ul className="divide-y divide-line border-y border-line">
      {items.map((it, i) => {
        const isOpen = open === i
        return (
          <li key={it.q}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-5 text-left font-display text-base font-semibold text-ink-900 md:text-lg"
              >
                {it.q}
                <span
                  className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-[background-color,transform] duration-200 ease-out ${
                    isOpen ? 'rotate-45 bg-rust-600 text-white' : 'bg-peach-100 text-rust-600'
                  }`}
                >
                  <Plus className="h-4 w-4" aria-hidden />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <m.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-[680px] pb-6 pr-12 text-[15px] leading-[1.7] text-ink-700 md:text-base">{it.a}</p>
                </m.div>
              )}
            </AnimatePresence>
          </li>
        )
      })}
    </ul>
  )
}
