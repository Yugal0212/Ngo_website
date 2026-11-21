'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { m } from 'framer-motion'
import { ArrowRight, Search } from 'lucide-react'

import { POSTS } from '@/lib/data'
import { PostCategory } from '@/types'
import { fadeUp, stagger } from '@/lib/motion'
import { useLanguage } from '@/context/LanguageContext'

const CATEGORIES_EN: ('All' | PostCategory)[] = ['All', 'Gau Seva', 'Shiksha', 'Stories', 'Updates']
const CATEGORIES_GU: { id: string; label: string }[] = [
  { id: 'All', label: 'તમામ' },
  { id: 'Gau Seva', label: 'ગૌસેવા' },
  { id: 'Shiksha', label: 'શિક્ષા' },
  { id: 'Stories', label: 'સેવા દર્શન' },
  { id: 'Updates', label: 'સમાચાર' },
]

const GU_POSTS_DATA: Record<string, { title: string; excerpt: string; cat: string; read: string }> = {
  'why-families-abandon-cows': {
    title: 'ગરીબ પરિવારો મજબૂરીમાં ગાય કેમ છોડે છે — અને થોડો ઘાસચારો કેવી રીતે જીવન બદલે છે',
    excerpt: 'કોઈ પણ પરિવાર પોતાની વહાલી ગાયને તરછોડવા માંગતો નથી. દૂધ બંધ થતાં તેઓ ₹૨૦૦ રોજના ઘાસચારાનો ખર્ચ ઉઠાવી શકતા નથી.',
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
    excerpt: 'અમારી ગૌશાળામાં અબોલ જીવો અને સેવાભાવી કાર્યકરોનો એક આખો દિવસ કેવો પવિત્ર પસાર થાય છે.',
    cat: 'સેવા દર્શન',
    read: '૬ મિનિટ વાંચન',
  },
  'what-200-rupees-does': {
    title: 'આપના ₹૨૦૦ નો સદ્ઉપયોગ: એક-એક રૂપિયાનો હિસાબ',
    excerpt: 'એક ગૌમાતાના દૈનિક પૌષ્ટિક લીલા ઘાસચારા અને સારસંભાળના વાસ્તવિક ખર્ચની સંપૂર્ણ પારદર્શિતા.',
    cat: 'સમાચાર',
    read: '૩ મિનિટ વાંચન',
  },
  'winter-care-for-older-cows': {
    title: 'શિયાળાની ઠંડીમાં વૃદ્ધ ગૌમાતાનું વિશેષ જતન',
    excerpt: 'કંતાનના કવર, સૂકી પથારી અને આહારમાં ગોળ — ઠંડીની ઋતુમાં ગૌમાતાને હૂંફ આપવા નાના પ્રયાસો.',
    cat: 'ગૌસેવા',
    read: '૪ મિનિટ વાંચન',
  },
  'meet-our-volunteers': {
    title: 'વીકેન્ડના સ્વયંસેવકો જે પોતાના હાથે ઘાસ નીરે છે',
    excerpt: 'વિદ્યાર્થીઓ, વડીલો અને પરિવારો જેઓ પોતાનો રવિવાર ગૌમાતાની સેવામાં સમર્પિત કરે છે.',
    cat: 'સેવા દર્શન',
    read: '૫ મિનિટ વાંચન',
  },
}

export function BlogList() {
  const searchParams = useSearchParams()
  const { isGu } = useLanguage()

  const initialCategory = searchParams.get('cat') || 'All'
  const initialQuery = searchParams.get('q') || ''

  const [category, setCategory] = useState(initialCategory)
  const [query, setQuery] = useState(initialQuery)

  useEffect(() => {
    if (searchParams.get('cat')) setCategory(searchParams.get('cat')!)
    if (searchParams.get('q')) setQuery(searchParams.get('q')!)
  }, [searchParams])

  const filteredPosts = POSTS.filter((post) => {
    const matchesCat = category === 'All' || post.cat.toLowerCase() === category.toLowerCase()
    const tr = isGu ? GU_POSTS_DATA[post.slug] : null
    const titleToSearch = tr ? tr.title : post.title
    const excerptToSearch = tr ? tr.excerpt : post.excerpt

    const matchesQuery =
      !query ||
      titleToSearch.toLowerCase().includes(query.toLowerCase()) ||
      excerptToSearch.toLowerCase().includes(query.toLowerCase())
    return matchesCat && matchesQuery
  })

  return (
    <div className="mx-auto max-w-[1500px] px-4 sm:px-6 md:px-10 py-8 md:py-16 xl:px-[90px]">
      {/* Search & Categories */}
      <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-center lg:justify-between border-b border-line pb-6 sm:pb-8">
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {isGu
            ? CATEGORIES_GU.map((cat) => {
                const active = category === cat.id
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setCategory(cat.id)}
                    className={`h-9 sm:h-11 rounded-full px-3.5 sm:px-5 font-display text-xs sm:text-sm font-bold transition-all active:scale-95 ${
                      active ? 'bg-rust-600 text-white shadow-xs' : 'border border-line bg-cream-50 text-ink-700 hover:bg-peach-100'
                    }`}
                  >
                    {cat.label}
                  </button>
                )
              })
            : CATEGORIES_EN.map((cat) => {
                const active = category === cat
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCategory(cat)}
                    className={`h-9 sm:h-11 rounded-full px-3.5 sm:px-5 font-display text-xs sm:text-sm font-bold transition-all active:scale-95 ${
                      active ? 'bg-rust-600 text-white shadow-xs' : 'border border-line bg-cream-50 text-ink-700 hover:bg-peach-100'
                    }`}
                  >
                    {cat}
                  </button>
                )
              })}
        </div>

        <div className="relative w-full max-w-sm">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-500" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={isGu ? 'વાર્તા કે લેખ શોધો...' : 'Search articles & stories...'}
            className="h-10 sm:h-11 w-full rounded-full border border-line bg-cream-50 pl-11 pr-4 text-xs sm:text-sm text-ink-900 outline-none focus:border-rust-600"
          />
        </div>
      </div>

      {/* Posts Grid */}
      {filteredPosts.length === 0 ? (
        <div className="py-16 sm:py-20 text-center">
          <p className="font-display text-lg sm:text-xl font-bold text-ink-900">
            {isGu ? 'કોઈ લેખ મળ્યો નથી' : 'No stories found'}
          </p>
          <p className="mt-2 text-xs sm:text-sm text-ink-500">
            {isGu ? 'અન્ય શબ્દ અથવા કેટેગરી પસંદ કરી જુઓ.' : 'Try adjusting your search terms or category filter.'}
          </p>
        </div>
      ) : (
        <m.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="mt-8 sm:mt-12 grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredPosts.map((post) => {
            const tr = isGu ? GU_POSTS_DATA[post.slug] : null
            const title = tr ? tr.title : post.title
            const excerpt = tr ? tr.excerpt : post.excerpt
            const cat = tr ? tr.cat : post.cat
            const read = tr ? tr.read : post.read

            return (
              <m.div key={post.slug} variants={fadeUp}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-line/80 bg-cream-100/50 p-3 sm:p-4 transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-lift active:scale-[0.98]"
                >
                  <div className="aspect-[16/10] overflow-hidden rounded-xl sm:rounded-2xl bg-cream-200 shadow-xs">
                    <img
                      src={post.img.src}
                      alt={title}
                      width={post.img.w}
                      height={post.img.h}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col pt-4 sm:pt-5">
                    <div className="flex items-center gap-2 text-xs text-ink-500">
                      <span className="font-bold text-rust-600">{cat}</span>
                      <span>·</span>
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{read}</span>
                    </div>
                    <h2 className="mt-2.5 font-display text-base sm:text-xl font-bold leading-snug text-ink-900 group-hover:text-rust-700">
                      {title}
                    </h2>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-ink-700 line-clamp-3">
                      {excerpt}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-4 sm:pt-6 font-display text-xs sm:text-sm font-bold text-rust-600 group-hover:text-rust-700">
                      {isGu ? 'વાંચો' : 'Read Story'}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </m.div>
            )
          })}
        </m.div>
      )}
    </div>
  )
}
