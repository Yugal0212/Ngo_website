'use client'

import React, { useEffect, useState } from 'react'
import { AnimatePresence, m, useReducedMotion } from 'framer-motion'

import { CowHead } from '@/components/common/Icons'
import { BRAND } from '@/config/site'

const KEY = 'gauseva-splash-seen'

/** First visit per session only: the logo draws itself, then the screen slides up. ≤ 900ms. */
export function Splash() {
  const reduce = useReducedMotion()
  const [show, setShow] = useState(() => {
    try {
      return !sessionStorage.getItem(KEY)
    } catch {
      return true
    }
  })

  useEffect(() => {
    if (!show) return
    try {
      sessionStorage.setItem(KEY, '1')
    } catch {}
    const t = setTimeout(() => setShow(false), reduce ? 200 : 650)
    return () => clearTimeout(t)
  }, [show, reduce])

  return (
    <AnimatePresence>
      {show && (
        <m.div
          aria-hidden
          exit={{ y: '-100%' }}
          transition={{ duration: 0.25, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[90] grid place-items-center bg-cream-50"
        >
          <div className="flex flex-col items-center gap-3">
            <CowHead size={88} draw={!reduce} className="text-rust-600" />
            <m.span
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.35 }}
              className="font-display text-2xl font-bold text-ink-900"
            >
              {BRAND.name}
            </m.span>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  )
}
