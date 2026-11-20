'use client'

import React from 'react'
import Link from 'next/link'
import { m } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'

import { Eyebrow } from '@/components/common/Eyebrow'
import { IMAGES } from '@/lib/images'
import { fadeUp, inView, stagger } from '@/lib/motion'

const MISSIONS = [
  {
    tag: 'Gau Seva',
    title: 'Food that keeps a cow at home',
    body: 'For seven years our founder has fed cows that families could no longer afford. Today we deliver fresh fodder so no cow is turned out for being “unproductive”.',
    points: ['Daily green fodder', 'Medical check-ups', 'Shelter for strays', 'Support for families'],
    cta: 'Support Gau Seva',
    href: '/donate?cause=cow',
    img: IMAGES.missionCow,
  },
  {
    tag: 'Shiksha',
    title: 'A full stomach and a school bag',
    body: 'Some parents simply cannot afford school. We cover food, stay, books and stationery so their children can keep learning.',
    points: ['Meals and stay', 'Books and uniform', 'Stationery kits', 'Mentoring'],
    cta: 'Support Shiksha',
    href: '/donate?cause=education',
    img: IMAGES.missionEdu,
  },
]

/** Two missions side by side — cow care and children’s education. */
export function Missions() {
  return (
    <section id="missions" aria-labelledby="missions-title" className="py-16 md:py-24">
      <m.div
        initial="hidden"
        whileInView="show"
        viewport={inView}
        variants={stagger}
        className="mx-auto max-w-[1500px] px-5 md:px-10 xl:px-[90px]"
      >
        <m.div variants={fadeUp} className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <Eyebrow>Two Missions, One Heart</Eyebrow>
            <h2
              id="missions-title"
              className="mt-3 max-w-[640px] font-display text-[30px] font-bold leading-[1.15] tracking-[-0.01em] text-ink-900 md:text-[44px]"
            >
              Compassion for cows. <span className="text-rust-600">Hope for children.</span>
            </h2>
          </div>
          <p className="max-w-[380px] text-base leading-[1.65] text-ink-500">
            Every small act of giving counts — a day of fodder, a box of pencils, a month of meals.
          </p>
        </m.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:gap-10">
          {MISSIONS.map((mi) => (
            <m.div key={mi.title} variants={fadeUp}>
              <Link
                href={mi.href}
                className="group flex h-full flex-col rounded-3xl bg-cream-100 p-3 shadow-soft transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-lift md:p-4"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[20px]">
                  <img
                    src={mi.img.src}
                    alt={mi.img.alt}
                    width={mi.img.w}
                    height={mi.img.h}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-cream-50 px-3.5 py-1.5 font-display text-sm font-semibold text-rust-700">
                    {mi.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col px-3 pb-3 pt-6 md:px-5 md:pb-5">
                  <h3 className="font-display text-2xl font-semibold leading-[1.25] text-ink-900">{mi.title}</h3>
                  <p className="mt-3 text-base leading-[1.65] text-ink-700">{mi.body}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {mi.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-[15px] text-ink-700">
                        <Check className="h-4 w-4 shrink-0 text-leaf-600" aria-hidden />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto inline-flex items-center gap-2 pt-7 font-display font-semibold text-rust-600">
                    {mi.cta}
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" aria-hidden />
                  </span>
                </div>
              </Link>
            </m.div>
          ))}
        </div>
      </m.div>
    </section>
  )
}
