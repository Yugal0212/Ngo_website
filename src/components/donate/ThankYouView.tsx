'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { CheckCircle2, Heart, Share2, ArrowRight } from 'lucide-react'

import { Button } from '@/components/common/Button'
import { BRAND, inr } from '@/config/site'

export function ThankYouView() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const id = searchParams.get('id')
  const amount = Number(searchParams.get('amount') || 200)
  const cause = searchParams.get('cause') || 'cow'
  const freq = searchParams.get('freq') || 'once'
  const name = searchParams.get('name') || 'Friend'

  useEffect(() => {
    // Guard: thank-you needs a donation id (as defined in original prototype §12)
    if (!id) {
      router.replace('/donate')
    }
  }, [id, router])

  if (!id) return null

  return (
    <div className="mx-auto max-w-[760px] px-5 py-12 md:py-20">
      <div className="rounded-[36px] bg-cream-100 p-7 sm:p-12 shadow-soft text-center border border-line">
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-peach-100 text-rust-600 shadow-soft">
          <CheckCircle2 className="h-10 w-10 text-leaf-600" />
        </div>

        <span className="mt-6 inline-flex rounded-full bg-peach-200/60 px-4 py-1 text-xs font-semibold text-rust-700">
          Receipt Ref: {id}
        </span>

        <h1 className="mt-4 font-display text-[32px] font-bold text-ink-900 md:text-[42px] leading-tight">
          Dhanyavaad, <span className="text-rust-600">{name}</span>!
        </h1>

        <p className="mt-3 text-base text-ink-700 sm:text-lg max-w-[540px] mx-auto leading-relaxed">
          Your compassionate gift of <strong className="text-ink-900 font-bold">{inr(amount)}</strong> ({freq === 'monthly' ? 'Monthly Pledge' : 'One-time'}) has been received with deep gratitude.
        </p>

        <div className="mt-8 rounded-2xl bg-cream-50 p-6 text-left border border-line">
          <h2 className="font-display text-sm font-semibold text-rust-600 uppercase tracking-wider">What Happens Next?</h2>
          <ul className="mt-3 space-y-2 text-sm text-ink-700">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-rust-600 shrink-0" />
              <span>
                {cause === 'cow'
                  ? 'Fresh green fodder has been scheduled for delivery to a supported family.'
                  : 'Daily nutrition and school supplies will be prepared for a child in need.'}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-rust-600 shrink-0" />
              <span>A photo update will be shared with you so you can see your contribution in action.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-rust-600 shrink-0" />
              <span>Your contribution directly powers our Gushala operations at {BRAND.legalName}.</span>
            </li>
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/" arrow={false}>
            Return to Home
          </Button>
          <Button href="/gallery" variant="outline" arrow>
            Explore Gallery
          </Button>
        </div>

        <p className="mt-8 text-xs text-ink-500">
          A receipt acknowledgement has been noted for record. Questions? Email us at hello@gauseva.org.
        </p>
      </div>
    </div>
  )
}
