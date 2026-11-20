'use client'

import React, { useEffect, useState } from 'react'
import { AnimatePresence, LazyMotion, MotionConfig, domAnimation, m } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

import { ClipPaths } from './ClipPaths'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

type Props = {
  /** Lower-case nav label to mark active: 'home', 'about', 'our work', 'gallery', 'get involved', 'contact'. */
  active?: string
  /** Hide the Donate CTAs (on the donate flow itself). */
  hideDonate?: boolean
  children: React.ReactNode
}

/** Every page: skip link, sticky nav, mobile bottom nav, footer, and back-to-top button. */
export function PageShell({ active, hideDonate = false, children }: Props) {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sy = window.scrollY
          const overTop = sy > 600
          setShowBackToTop((prev) => (prev !== overTop ? overTop : prev))
          ticking = false
        })
        ticking = true
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">
        <div className="min-h-full bg-cream-50 font-sans text-ink-700 pb-16 lg:pb-0">
          <ClipPaths />
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-rust-600 focus:px-5 focus:py-3 focus:text-white"
          >
            Skip to content
          </a>
          <Navbar active={active} hideDonate={hideDonate} />
          <main id="main" className="anim-fast-fade-up">
            {children}
          </main>
          <Footer />

          {/* Back to top button - sits above mobile bottom nav */}
          <AnimatePresence>
            {showBackToTop && (
              <m.button
                type="button"
                aria-label="Back to top"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                initial={{ opacity: 0, scale: 0.96, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 8 }}
                transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="fixed bottom-20 right-4 z-30 grid h-11 w-11 place-items-center rounded-full bg-cream-50 text-rust-600 shadow-lift ring-1 ring-line hover:bg-peach-100 active:scale-95 md:right-8 lg:bottom-8"
              >
                <ArrowUp className="h-5 w-5" aria-hidden />
              </m.button>
            )}
          </AnimatePresence>
        </div>
      </MotionConfig>
    </LazyMotion>
  )
}
