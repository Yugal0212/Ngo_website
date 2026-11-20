'use client'

import React, { useEffect, useState } from 'react'
import { m } from 'framer-motion'

/** Sticky section nav under the header with scroll-spy. */
export function InPageNav({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id)

  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter(Boolean) as HTMLElement[]
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-120px 0px -55% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [items])

  return (
    <div className="sticky top-[68px] z-30 border-y border-line bg-cream-50/95 backdrop-blur-md">
      <nav aria-label="Sections" className="mx-auto max-w-[1500px] overflow-x-auto px-5 md:px-10 xl:px-[90px]">
        <ul className="flex gap-1">
          {items.map((i) => (
            <li key={i.id}>
              <a
                href={`#${i.id}`}
                aria-current={active === i.id ? 'true' : undefined}
                className={`relative flex h-14 items-center whitespace-nowrap px-4 text-[15px] font-medium transition-[color] duration-150 ease-out ${
                  active === i.id ? 'text-rust-600' : 'text-ink-500 hover:text-ink-900'
                }`}
              >
                {i.label}
                {active === i.id && (
                  <m.span
                    layoutId="inpage-underline"
                    transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-rust-600"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
