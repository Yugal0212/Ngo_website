import React from 'react'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

import { PageShell } from '@/components/common/PageShell'
import { BlogPostView } from '@/components/blog/BlogPostView'
import { POSTS } from '@/lib/data'

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return POSTS.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = POSTS.find((p) => p.slug === slug)
  if (!post) return { title: 'Story Not Found' }
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = POSTS.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <PageShell active="gallery">
      <BlogPostView post={post} />
    </PageShell>
  )
}
