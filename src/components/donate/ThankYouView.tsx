'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { CheckCircle2, Heart, Share2, ArrowRight } from 'lucide-react'

import { Button } from '@/components/common/Button'
import { BRAND, inr } from '@/config/site'
import { useLanguage } from '@/context/LanguageContext'

export function ThankYouView() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { t, isGu } = useLanguage()

  const id = searchParams.get('id')
  const amount = Number(searchParams.get('amount') || 200)
  const cause = searchParams.get('cause') || 'cow'
  const freq = searchParams.get('freq') || 'once'
  const name = searchParams.get('name') || (isGu ? 'મિત્ર' : 'Friend')

  useEffect(() => {
    if (!id) {
      router.replace('/donate')
    }
  }, [id, router])

  if (!id) return null

  return (
    <div className="mx-auto max-w-[760px] px-4 sm:px-6 py-8 sm:py-12 md:py-20">
      <div className="rounded-[28px] sm:rounded-[36px] bg-cream-100 p-6 sm:p-12 shadow-soft text-center border border-line">
        <div className="mx-auto grid h-16 w-16 sm:h-20 sm:w-20 place-items-center rounded-full bg-peach-100 text-rust-600 shadow-soft">
          <CheckCircle2 className="h-9 w-9 sm:h-10 sm:w-10 text-leaf-600" />
        </div>

        <span className="mt-5 sm:mt-6 inline-flex rounded-full bg-peach-200/60 px-3.5 py-1 text-xs font-semibold text-rust-700">
          {t.thankYouPage.ref}: {id}
        </span>

        <h1 className="mt-3.5 sm:mt-4 font-display text-2xl sm:text-[34px] md:text-[42px] font-bold text-ink-900 leading-tight">
          {t.thankYouPage.title}, <span className="text-rust-600">{name}</span>!
        </h1>

        <p className="mt-3 text-sm sm:text-base md:text-lg text-ink-700 max-w-[540px] mx-auto leading-relaxed">
          {t.thankYouPage.lead} <strong className="text-ink-900 font-bold">{inr(amount)}</strong> (
          {freq === 'monthly' ? t.thankYouPage.monthly : t.thankYouPage.oneTime}) {t.thankYouPage.received}
        </p>

        <div className="mt-6 sm:mt-8 rounded-2xl bg-cream-50 p-4 sm:p-6 text-left border border-line">
          <h2 className="font-display text-xs sm:text-sm font-bold text-rust-600 uppercase tracking-wider">
            {t.thankYouPage.nextTitle}
          </h2>
          <ul className="mt-3 space-y-2.5 text-xs sm:text-sm text-ink-700">
            <li className="flex items-start gap-2.5">
              <span className="mt-1 h-2 w-2 rounded-full bg-rust-600 shrink-0" />
              <span>
                {cause === 'cow'
                  ? t.thankYouPage.cowNext
                  : t.thankYouPage.eduNext}
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-1 h-2 w-2 rounded-full bg-rust-600 shrink-0" />
              <span>{t.thankYouPage.photoUpdate}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-1 h-2 w-2 rounded-full bg-rust-600 shrink-0" />
              <span>
                {t.thankYouPage.transparency} {isGu ? 'પોઝિટિવિટી ડોનેશન' : BRAND.legalName}.
              </span>
            </li>
          </ul>
        </div>

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <Button href="/" arrow={false} className="w-full sm:w-auto justify-center !h-12 text-sm sm:text-base">
            {t.thankYouPage.btnHome}
          </Button>
          <Button href="/gallery" variant="outline" arrow className="w-full sm:w-auto justify-center !h-12 text-sm sm:text-base">
            {t.thankYouPage.btnGallery}
          </Button>
        </div>

        <p className="mt-6 sm:mt-8 text-[11px] sm:text-xs text-ink-500">
          {isGu
            ? 'આપના યોગદાનની ડિજિટલ પહોંચ સુરક્ષિત રીતે નોંધવામાં આવી છે. સહાય માટે: hello@gauseva.org'
            : 'A receipt acknowledgement has been noted for record. Questions? Email us at hello@gauseva.org.'}
        </p>
      </div>
    </div>
  )
}
