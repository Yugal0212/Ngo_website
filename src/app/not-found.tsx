'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Home } from 'lucide-react'

import { PageShell } from '@/components/common/PageShell'
import { CowHead } from '@/components/common/Icons'
import { Button } from '@/components/common/Button'

export default function NotFound() {
  return (
    <PageShell>
      <div className="mx-auto max-w-[640px] px-5 py-24 md:py-32 text-center">
        <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-peach-100 text-rust-600 shadow-soft">
          <CowHead size={56} className="text-rust-600" />
        </div>

        <span className="mt-6 inline-block font-display text-sm font-bold uppercase tracking-wider text-rust-600">
          404 — Page Not Found
        </span>

        <h1 className="mt-3 font-display text-[32px] sm:text-[44px] font-bold text-ink-900 leading-tight">
          Looks like this path wandered away
        </h1>

        <p className="mt-4 text-base leading-relaxed text-ink-700 sm:text-lg">
          The page you are looking for doesn’t exist or has moved. Let’s guide you back to our sanctuary.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/" arrow={false}>
            <Home className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <Button href="/what-we-do" variant="outline" arrow>
            Our Work
          </Button>
        </div>
      </div>
    </PageShell>
  )
}
