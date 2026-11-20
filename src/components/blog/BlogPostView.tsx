'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Quote, Share2, Tag } from 'lucide-react'

import { Post } from '@/types'
import { Button } from '@/components/common/Button'
import { POSTS } from '@/lib/data'

export function BlogPostView({ post }: { post: Post }) {
  const relatedPosts = POSTS.filter((p) => p.slug !== post.slug).slice(0, 2)

  return (
    <article className="mx-auto max-w-[880px] px-5 py-12 md:py-20">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 font-display text-sm font-semibold text-rust-600 hover:text-rust-700 mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to all stories
      </Link>

      <div className="flex flex-wrap items-center gap-3 text-xs text-ink-500">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-peach-100 px-3 py-1 font-semibold text-rust-700">
          <Tag className="h-3 w-3" />
          {post.cat}
        </span>
        <span className="flex items-center gap-1">
          <Calendar className="h-3.5 w-3.5" />
          {post.date}
        </span>
        <span>·</span>
        <span className="flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" />
          {post.read}
        </span>
      </div>

      <h1 className="mt-4 font-display text-[32px] sm:text-[44px] font-extrabold leading-[1.15] text-ink-900 tracking-tight">
        {post.title}
      </h1>

      <p className="mt-5 text-lg leading-relaxed text-ink-700 font-medium border-l-2 border-rust-600 pl-4">
        {post.excerpt}
      </p>

      {/* Featured Image */}
      <div className="mt-10 overflow-hidden rounded-3xl shadow-soft">
        <img
          src={post.img.src}
          alt={post.img.alt}
          width={post.img.w}
          height={post.img.h}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Body paragraphs */}
      <div className="mt-10 space-y-6 text-base sm:text-lg leading-[1.8] text-ink-700">
        {post.body.map((paragraph, index) => (
          <React.Fragment key={index}>
            <p>{paragraph}</p>
            {index === 1 && post.pull && (
              <figure className="my-10 rounded-3xl bg-peach-100 p-8 text-center border-l-4 border-rust-600">
                <Quote className="mx-auto h-8 w-8 text-rust-600 fill-rust-600/20" />
                <blockquote className="mt-3 font-display text-xl font-bold text-ink-900 md:text-2xl leading-snug">
                  “{post.pull}”
                </blockquote>
              </figure>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Support CTA Box */}
      <div className="mt-14 rounded-3xl bg-brown-900 p-8 text-cream-50 text-center sm:text-left sm:flex sm:items-center sm:justify-between">
        <div>
          <h3 className="font-display text-2xl font-bold">Help us write more stories</h3>
          <p className="mt-1 text-sm text-peach-200">₹200 gives one day of food to an older cow at home.</p>
        </div>
        <div className="mt-6 sm:mt-0">
          <Button heart href="/donate">
            Feed a Cow
          </Button>
        </div>
      </div>

      {/* Related Stories */}
      {relatedPosts.length > 0 && (
        <div className="mt-16 border-t border-line pt-12">
          <h2 className="font-display text-2xl font-bold text-ink-900">More from the journal</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="group rounded-2xl border border-line bg-cream-50 p-4 hover:border-rust-600/50 transition-colors"
              >
                <div className="aspect-video overflow-hidden rounded-xl">
                  <img
                    src={related.img.src}
                    alt={related.img.alt}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <h4 className="mt-3 font-display text-base font-bold text-ink-900 group-hover:text-rust-700">
                  {related.title}
                </h4>
                <p className="mt-1 text-xs text-ink-500">{related.read} · {related.date}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}
