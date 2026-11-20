'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, m } from 'framer-motion'
import { ChevronDown, Heart, HeartHandshake, Home, Images, Menu, MessageCircle, Sparkles, X } from 'lucide-react'

import { NAV } from '@/config/site'
import { NavItem } from '@/types'
import { Logo } from './Logo'
import { Button } from './Button'

type Props = { active?: string; onDonate?: () => void; hideDonate?: boolean }

export function Navbar({ active = 'home', onDonate, hideDonate = false }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [sheet, setSheet] = useState(false)

  // Smart auto-hide for mobile bottom nav on scroll down, show on scroll up
  const [bottomNavVisible, setBottomNavVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY
          const isOver = currentY > 20
          setScrolled((prev) => (prev !== isOver ? isOver : prev))

          const diff = currentY - lastScrollY.current
          if (currentY <= 40) {
            setBottomNavVisible(true)
          } else if (diff > 8 && currentY > 60) {
            // Scrolling down -> hide bottom nav
            setBottomNavVisible(false)
          } else if (diff < -8) {
            // Scrolling up -> show bottom nav
            setBottomNavVisible(true)
          }
          lastScrollY.current = currentY
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
    <>
      <header
        className={`sticky top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-150 ease-out ${
          scrolled ? 'bg-cream-50/95 shadow-[0_1px_0_var(--color-line)] backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-5 transition-[height] duration-150 ease-out md:px-10 xl:px-[72px] ${
            scrolled ? 'h-[68px]' : 'h-20 lg:h-[96px]'
          }`}
        >
          <Link href="/" aria-label="GauSeva home" className="shrink-0">
            <Logo compact={scrolled} />
          </Link>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1 xl:gap-4">
              {NAV.map((item) => (
                <li key={item.label}>
                  {item.children ? (
                    <Dropdown item={item} active={item.label.toLowerCase() === active} />
                  ) : (
                    <NavLink item={item} active={item.label.toLowerCase() === active} />
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            {!hideDonate && (
              <>
                <div className="hidden sm:block">
                  <Button heart arrow={false} size="sm" href="/donate" onClick={onDonate} className="lg:h-12 lg:px-6 lg:text-base">
                    Donate Now
                  </Button>
                </div>
                <Link
                  href="/donate"
                  onClick={onDonate}
                  aria-label="Donate now"
                  className="grid h-10 w-10 place-items-center rounded-full bg-rust-600 text-white shadow-soft active:scale-95 sm:hidden"
                >
                  <Heart className="h-4 w-4 fill-current" aria-hidden />
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation Bar: Direct 5-Tab Navigation (No "More" popup) */}
      <nav
        aria-label="Mobile Navigation"
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-cream-50/95 px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))] backdrop-blur-md transition-transform duration-300 ease-out lg:hidden shadow-lift ${
          bottomNavVisible ? 'translate-y-0' : 'translate-y-[130%]'
        }`}
      >
        <div className="mx-auto flex max-w-md items-center justify-between">
          {/* 1. Home */}
          <Link
            href="/"
            className={`flex flex-col items-center gap-1 px-2.5 py-1 text-center transition-colors active:scale-95 ${
              active === 'home' ? 'text-rust-600 font-semibold' : 'text-ink-500 hover:text-ink-900'
            }`}
          >
            <Home className="h-5 w-5" aria-hidden />
            <span className="text-[11px] leading-none">Home</span>
          </Link>

          {/* 2. About & Missions */}
          <Link
            href="/about"
            className={`flex flex-col items-center gap-1 px-2.5 py-1 text-center transition-colors active:scale-95 ${
              active === 'about' || active === 'our work' ? 'text-rust-600 font-semibold' : 'text-ink-500 hover:text-ink-900'
            }`}
          >
            <Sparkles className="h-5 w-5" aria-hidden />
            <span className="text-[11px] leading-none">About</span>
          </Link>

          {/* 3. Donate (Center Highlighted Action) */}
          <Link
            href="/donate"
            onClick={onDonate}
            className="flex flex-col items-center -mt-2 px-1 text-center"
            aria-label="Donate now"
          >
            <div className="grid h-11 w-11 place-items-center rounded-full bg-rust-600 text-white shadow-lift active:scale-95 transition-transform">
              <Heart className="h-5 w-5 fill-current" aria-hidden />
            </div>
            <span className="mt-1 text-[11px] font-bold text-rust-600 leading-none">Donate</span>
          </Link>

          {/* 4. Gallery */}
          <Link
            href="/gallery"
            className={`flex flex-col items-center gap-1 px-2.5 py-1 text-center transition-colors active:scale-95 ${
              active === 'gallery' ? 'text-rust-600 font-semibold' : 'text-ink-500 hover:text-ink-900'
            }`}
          >
            <Images className="h-5 w-5" aria-hidden />
            <span className="text-[11px] leading-none">Gallery</span>
          </Link>

          {/* 5. Connect (Contact & Volunteer Hub) */}
          <Link
            href="/contact"
            className={`flex flex-col items-center gap-1 px-2.5 py-1 text-center transition-colors active:scale-95 ${
              active === 'contact' || active === 'get involved' ? 'text-rust-600 font-semibold' : 'text-ink-500 hover:text-ink-900'
            }`}
          >
            <MessageCircle className="h-5 w-5" aria-hidden />
            <span className="text-[11px] leading-none">Connect</span>
          </Link>
        </div>
      </nav>

      {/* Slide-out Menu Drawer for Mobile */}
      <AnimatePresence>
        {sheet && (
          <MobileSheet
            onClose={() => setSheet(false)}
            active={active}
            onDonate={onDonate}
          />
        )}
      </AnimatePresence>
    </>
  )
}

function NavLink({ item, active }: { item: NavItem; active?: boolean }) {
  return (
    <Link
      href={item.href}
      aria-current={active ? 'page' : undefined}
      className={`group relative flex h-11 items-center px-3 text-[15px] font-medium xl:text-base transition-colors ${
        active ? 'text-ink-900' : 'text-ink-900/85 hover:text-ink-900'
      }`}
    >
      {item.label}
      <span
        aria-hidden
        className={`absolute inset-x-3 bottom-2 h-0.5 rounded-full transition-transform duration-150 ease-out ${
          active
            ? 'scale-x-100 bg-rust-600'
            : 'scale-x-0 bg-rust-600/60 group-hover:scale-x-100'
        }`}
      />
    </Link>
  )
}

function Dropdown({ item, active }: { item: NavItem; active?: boolean }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [])

  return (
    <div ref={ref} className="relative" onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        className={`group relative flex h-11 items-center gap-1 px-3 text-[15px] font-medium xl:text-base transition-colors ${
          active ? 'text-ink-900' : 'text-ink-900/85 hover:text-ink-900'
        }`}
      >
        {item.label}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-150 ${open ? 'rotate-180 text-rust-600' : 'text-ink-500'}`}
          aria-hidden
        />
        <span
          aria-hidden
          className={`absolute inset-x-3 bottom-2 h-0.5 rounded-full transition-transform duration-150 ease-out ${
            active
              ? 'scale-x-100 bg-rust-600'
              : 'scale-x-0 bg-rust-600/60 group-hover:scale-x-100'
          }`}
        />
      </button>

      <AnimatePresence>
        {open && item.children && (
          <m.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-full z-50 w-56 rounded-2xl border border-line bg-cream-50 p-2 shadow-lift"
          >
            <ul className="flex flex-col">
              {item.children.map((child) => (
                <li key={child.label}>
                  <Link
                    href={child.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center rounded-xl px-3 py-2 text-sm text-ink-700 transition-colors hover:bg-peach-100 hover:text-rust-700"
                  >
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function MobileSheet({
  onClose,
  active,
  onDonate,
}: {
  onClose: () => void
  active?: string
  onDonate?: () => void
}) {
  return (
    <>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-brown-900/50 backdrop-blur-sm"
      />
      <m.div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-y-0 right-0 z-50 flex w-[86%] max-w-sm flex-col bg-cream-50 p-6 shadow-lift border-l border-line"
      >
        <div className="flex items-center justify-between border-b border-line pb-4">
          <Logo compact />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="grid h-10 w-10 place-items-center rounded-full text-ink-900 hover:bg-peach-100 active:scale-95"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>

        <nav
          aria-label="Mobile Drawer"
          className="mt-6 flex-1 overflow-y-auto"
          onClick={(e) => (e.target as HTMLElement).closest('a') && onClose()}
        >
          <ul className="divide-y divide-line">
            {NAV.map((item) => (
              <li key={item.label} className="py-2">
                <Link
                  href={item.href}
                  className={`flex h-11 items-center font-display text-lg font-semibold ${
                    item.label.toLowerCase() === active ? 'text-rust-600' : 'text-ink-900'
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mb-2 grid grid-cols-2 gap-x-2 gap-y-1">
                    {item.children.map((c) => (
                      <li key={c.label}>
                        <Link href={c.href} className="flex h-9 items-center text-sm text-ink-500 hover:text-rust-600">
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-4 pt-4 border-t border-line flex flex-col gap-3">
          <Button
            heart
            href="/donate"
            onClick={() => {
              onDonate?.()
              onClose()
            }}
            className="w-full justify-center"
            size="lg"
          >
            Donate Now
          </Button>
          <Button
            href="/volunteer"
            variant="outline"
            onClick={onClose}
            className="w-full justify-center"
            size="sm"
          >
            Volunteer With Us
          </Button>
        </div>
      </m.div>
    </>
  )
}
