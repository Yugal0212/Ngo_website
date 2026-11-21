'use client'

import React from 'react'
import Link from 'next/link'
import { m } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import { Eyebrow } from '@/components/common/Eyebrow'
import { POSTS } from '@/lib/data'
import { fadeUp, inView, stagger } from '@/lib/motion'
import { useLanguage } from '@/context/LanguageContext'

const GU_POST_TRANSLATIONS: Record<string, { title: string; excerpt: string; cat: string; read: string }> = {
  'why-families-abandon-cows': {
    title: 'ગરીબ પરિવારો મજબૂરીમાં ગાય કેમ છોડે છે — અને થોડો ઘાસચારો કેવી રીતે જીવન બદલે છે',
    excerpt: 'કોઈ પણ પરિવાર પોતાની વહાલી ગાયને તરછોડવા માંગતો નથી. દૂધ બંધ થતાં તેઓ ઘાસચારાનો ખર્ચ ઉઠાવી શકતા નથી.',
    cat: 'ગૌસેવા',
    read: '૫ મિનિટ વાંચન',
  },
  'first-school-bags': {
    title: 'વીસ નવા સ્કૂલ બેગ, વીસ બાળકોનો પ્રથમ શાળા પ્રવેશ',
    excerpt: 'આ સત્રમાં ૨૦ જરૂરિયાતમંદ બાળકો નવા પુસ્તકો, ગણવેશ અને દૈનિક પૌષ્ટિક ભોજન સાથે શાળાએ પહોંચ્યા.',
    cat: 'શિક્ષા',
    read: '૪ મિનિટ વાંચન',
  },
  'a-morning-at-the-gushala': {
    title: 'ગૌશાળામાં પ્રભાત: સવારે ૫ વાગ્યાના ઘાસચારાથી સાંજની આરતી સુધી',
    excerpt: 'અમારી ગૌશાળામાં અબોલ જીવો અને સેવાભાવી કાર્યકરોનો એક આખો દિવસ કેવો પસાર થાય છે.',
    cat: 'સેવા દર્શન',
    read: '૬ મિનિટ વાંચન',
  },
}

/** Three latest stories. Cards share a grid so dates and titles sit on the same lines. Mobile optimized. */
export function LatestBlog() {
  const { t, isGu } = useLanguage()

  return (
    <section aria-labelledby="blog-title" className="pb-14 md:pb-24">
      <m.div
        initial="hidden"
        whileInView="show"
        viewport={inView}
        variants={stagger}
        className="mx-auto max-w-[1500px] px-5 md:px-10 xl:px-[90px]"
      >
        <m.div variants={fadeUp} className="flex items-end justify-between gap-4 border-t border-line pt-10 sm:pt-14">
          <div>
            <Eyebrow>{t.latestBlog.eyebrow}</Eyebrow>
            <h2
              id="blog-title"
              className="mt-2.5 sm:mt-3 font-display text-2xl sm:text-[30px] font-bold leading-[1.2] sm:leading-[1.15] tracking-[-0.01em] text-ink-900 md:text-[44px]"
            >
              {t.latestBlog.title}
            </h2>
          </div>
          <Link
            href="/blog"
            className="group hidden h-11 items-center gap-2 whitespace-nowrap font-display font-semibold text-rust-600 sm:inline-flex"
          >
            {t.latestBlog.allStories}
            <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" aria-hidden />
          </Link>
        </m.div>

        <div className="mt-8 sm:mt-10 grid gap-6 sm:gap-8 md:grid-cols-3">
          {POSTS.slice(0, 3).map((p) => {
            const tr = isGu ? GU_POST_TRANSLATIONS[p.slug] : null
            const title = tr ? tr.title : p.title
            const cat = tr ? tr.cat : p.cat
            const read = tr ? tr.read : p.read

            return (
              <m.div key={p.slug} variants={fadeUp}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group grid grid-rows-[auto_auto_1fr_auto] h-full rounded-2xl p-2 sm:p-0 transition-colors"
                >
                  <div className="aspect-video overflow-hidden rounded-2xl shadow-xs">
                    <img
                      src={p.img.src}
                      alt={title}
                      width={p.img.w}
                      height={p.img.h}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <p className="mt-4 text-xs sm:text-sm text-ink-500">
                    <span className="font-semibold text-rust-600">{cat}</span> · {p.date} · {read}
                  </p>
                  <h3 className="mt-1.5 font-display text-base sm:text-lg font-bold leading-[1.35] text-ink-900 group-hover:text-rust-700">
                    {title}
                  </h3>
                  <span className="mt-3.5 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-rust-600 group-hover:text-rust-700">
                    {t.latestBlog.readStory}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:translate-x-1" aria-hidden />
                  </span>
                </Link>
              </m.div>
            )
          })}
        </div>

        {/* Mobile View All Link */}
        <div className="mt-6 text-center sm:hidden">
          <Link
            href="/blog"
            className="inline-flex h-11 items-center justify-center rounded-full border border-line bg-cream-100 px-6 text-xs font-bold text-rust-600 active:scale-95 transition-transform"
          >
            {t.latestBlog.allStories} →
          </Link>
        </div>
      </m.div>
    </section>
  )
}
