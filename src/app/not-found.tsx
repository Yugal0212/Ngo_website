'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Home } from 'lucide-react'

import { PageShell } from '@/components/common/PageShell'
import { CowHead } from '@/components/common/Icons'
import { Button } from '@/components/common/Button'
import { useLanguage } from '@/context/LanguageContext'

export default function NotFound() {
  const { isGu } = useLanguage()

  return (
    <PageShell>
      <div className="mx-auto max-w-[640px] px-5 py-20 md:py-32 text-center">
        <div className="mx-auto grid h-20 w-20 sm:h-24 sm:w-24 place-items-center rounded-full bg-peach-100 text-rust-600 shadow-soft">
          <CowHead size={48} className="text-rust-600" />
        </div>

        <span className="mt-5 inline-block font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-rust-600">
          404 — {isGu ? 'પૃષ્ઠ મળ્યું નથી' : 'Page Not Found'}
        </span>

        <h1 className="mt-3 font-display text-2xl sm:text-[36px] md:text-[44px] font-bold text-ink-900 leading-tight">
          {isGu ? 'આ રસ્તો બીજે ક્યાંક વળી ગયો લાગે છે' : 'Looks like this path wandered away'}
        </h1>

        <p className="mt-3 text-sm sm:text-base leading-relaxed text-ink-700">
          {isGu
            ? 'આપ જે પેજ શોધી રહ્યા છો તે ઉપલબ્ધ નથી અથવા ખસેડવામાં આવ્યું છે. આવો આપને ફરી ગૌશાળાના પાવન માર્ગે લઈ જઈએ.'
            : 'The page you are looking for doesn’t exist or has moved. Let’s guide you back to our sanctuary.'}
        </p>

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <Button href="/" arrow={false} className="w-full sm:w-auto justify-center !h-12 text-sm sm:text-base">
            <Home className="h-4 w-4 mr-2" />
            {isGu ? 'મુખ્ય પૃષ્ઠ પર જાઓ' : 'Back to Home'}
          </Button>
          <Button href="/what-we-do" variant="outline" arrow className="w-full sm:w-auto justify-center !h-12 text-sm sm:text-base">
            {isGu ? 'આપણા સેવા કાર્યો' : 'Our Work'}
          </Button>
        </div>
      </div>
    </PageShell>
  )
}
