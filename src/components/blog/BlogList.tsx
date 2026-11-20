'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { m } from 'framer-motion'
import { ArrowRight, Search } from 'lucide-react'

import { POSTS } from '@/lib/data'
import { PostCategory } from '@/types'
import { fadeUp, stagger } from '@/lib/motion'

const CATEGORIES: ('All' | PostCategory)[] = ['All', 'Gau Seva', 'Shiksha', 'Stories', 'Updates']

export function BlogList() {
  const searchParams = useSearchParams()
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
    const matchesQuery =
      !query ||
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(query.toLowerCase())
    return matchesCat && matchesQuery
  })

  return (
    <div className="mx-auto max-w-[1500px] px-5 py-10 md:px-10 md:py-16 xl:px-[90px]">
      {/* Search & Categories */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between border-b border-line pb-8">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => {
            const active = category === cat
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`h-11 rounded-full px-5 font-display text-sm font-semibold transition-[background-color,color] duration-150 ${
                  active ? 'bg-rust-600 text-white' : 'border border-line bg-cream-50 text-ink-700 hover:bg-peach-100'
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
            placeholder="Search articles & stories..."
            className="h-11 w-full rounded-full border border-line bg-cream-50 pl-11 pr-4 text-sm text-ink-900 outline-none focus:border-rust-600"
          />
        </div>
      </div>

      {/* Posts Grid */}
      {filteredPosts.length === 0 ? (
        <div className="py-20 text-center">
          <p className="font-display text-xl font-bold text-ink-900">No stories found</p>
          <p className="mt-2 text-sm text-ink-500">Try adjusting your search terms or category filter.</p>
        </div>
      ) : (
        <m.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredPosts.map((post) => (
            <m.div key={post.slug} variants={fadeUp}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line/80 bg-cream-100/50 p-4 transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-cream-200">
                  <img
                    src={post.img.src}
                    alt={post.img.alt}
                    width={post.img.w}
                    height={post.img.h}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col pt-5">
                  <div className="flex items-center gap-2 text-xs text-ink-500">
                    <span className="font-semibold text-rust-600">{post.cat}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.read}</span>
                  </div>
                  <h2 className="mt-3 font-display text-xl font-bold leading-snug text-ink-900 group-hover:text-rust-700">
                    {post.title}
                  </h2>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-700 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-6 font-display text-sm font-semibold text-rust-600">
                    Read Story
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </m.div>
          ))}
        </m.div>
      )}
    </div>
  )
}
