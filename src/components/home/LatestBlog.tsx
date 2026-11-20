'use client'

import React from 'react'
import Link from 'next/link'
import { m } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import { Eyebrow } from '@/components/common/Eyebrow'
import { POSTS } from '@/lib/data'
import { fadeUp, inView, stagger } from '@/lib/motion'

/** Three latest stories. Cards share a grid so dates and titles sit on the same lines. */
export function LatestBlog() {
  return (
    <section aria-labelledby="blog-title" className="pb-16 md:pb-24">
      <m.div
        initial="hidden"
        whileInView="show"
        viewport={inView}
        variants={stagger}
        className="mx-auto max-w-[1500px] px-5 md:px-10 xl:px-[90px]"
      >
        <m.div variants={fadeUp} className="flex items-end justify-between gap-6 border-t border-line pt-14">
          <div>
            <Eyebrow>From Our Journal</Eyebrow>
            <h2
              id="blog-title"
              className="mt-3 font-display text-[30px] font-bold leading-[1.15] tracking-[-0.01em] text-ink-900 md:text-[44px]"
            >
              Stories from the field
            </h2>
          </div>
          <Link
            href="/blog"
            className="group hidden h-11 items-center gap-2 whitespace-nowrap font-display font-semibold text-rust-600 sm:inline-flex"
          >
            All stories
            <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" aria-hidden />
          </Link>
        </m.div>

        <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
          {POSTS.slice(0, 3).map((p) => (
            <m.div key={p.slug} variants={fadeUp}>
              <Link
                href={`/blog/${p.slug}`}
                className="group grid grid-rows-[auto_auto_1fr_auto] h-full"
              >
                <div className="aspect-video overflow-hidden rounded-2xl">
                  <img
                    src={p.img.src}
                    alt={p.img.alt}
                    width={p.img.w}
                    height={p.img.h}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <p className="mt-5 text-sm text-ink-500">
                  <span className="font-medium text-rust-600">{p.cat}</span> · {p.date} · {p.read}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold leading-[1.3] text-ink-900 group-hover:text-rust-700">
                  {p.title}
                </h3>
                <span className="mt-4 inline-flex items-center gap-2 text-[15px] font-semibold text-ink-900">
                  Read story
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" aria-hidden />
                </span>
              </Link>
            </m.div>
          ))}
        </div>
      </m.div>
    </section>
  )
}
