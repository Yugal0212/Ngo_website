'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { m } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'

import { Button } from '@/components/common/Button'
import { Eyebrow } from '@/components/common/Eyebrow'
import { LeafSprig } from '@/components/common/Icons'
import { inr } from '@/config/site'
import { Cause } from '@/types'
import { fadeUp, inView, stagger } from '@/lib/motion'
import { useLanguage } from '@/context/LanguageContext'

/** A small donate widget: pick a cause, an amount, once or monthly. Full flow lives on /donate. Mobile-first design. */
export function QuickDonate({ initialCause = 'cow', onDonate }: { initialCause?: Cause; onDonate?: () => void }) {
  const router = useRouter()
  const { t, isGu } = useLanguage()
  const [cause, setCause] = useState<Cause>(initialCause)
  const [preset, setPreset] = useState<string>('day')
  const [custom, setCustom] = useState('')
  const [monthly, setMonthly] = useState(false)

  useEffect(() => {
    setCause(initialCause)
  }, [initialCause])

  const presets = cause === 'cow' ? t.quickDonate.cowPlans : t.quickDonate.eduPlans
  const chosen = presets.find((p) => p.id === preset) ?? presets[0]
  const amount = preset === 'custom' ? Number(custom) || 0 : chosen.amount
  const does =
    preset === 'custom'
      ? amount >= 200
        ? cause === 'cow'
          ? isGu
            ? `આશરે ${Math.floor(amount / 200)} દિવસનો તાજો પૌષ્ટિક લીલો ઘાસચારો`
            : `About ${Math.floor(amount / 200)} day${amount >= 400 ? 's' : ''} of fresh fodder for one cow`
          : isGu
          ? 'બાળકના ભોજન, પુસ્તકો અને શૈક્ષણિક સાધનોમાં સહાય'
          : 'Goes to food, books and stationery for a child'
        : isGu
        ? 'દરેક નાનો સહયોગ મહત્વનો છે — ન્યૂનતમ રકમ ₹૧૦૦ છે'
        : 'Every rupee helps — the minimum is ₹100'
      : chosen.does

  const switchCause = (c: Cause) => {
    setCause(c)
    setPreset(c === 'cow' ? 'day' : 'stationery')
    setCustom('')
  }

  return (
    <section id="donate" aria-labelledby="donate-title" className="scroll-mt-24 px-4 pb-16 md:px-10 md:pb-24 xl:px-[56px]">
      <m.div
        initial="hidden"
        whileInView="show"
        viewport={inView}
        variants={stagger}
        className="relative mx-auto grid max-w-[1388px] items-center gap-8 sm:gap-10 overflow-hidden rounded-[28px] sm:rounded-[32px] bg-peach-100 px-4 py-8 sm:px-8 md:py-14 lg:grid-cols-[1fr_minmax(0,500px)] lg:gap-16 lg:rounded-[48px_48px_48px_140px] lg:px-16 lg:py-16"
      >
        <LeafSprig className="pointer-events-none absolute -right-2 -top-4 w-20 rotate-180 text-sand-300" />
        <m.div variants={fadeUp} className="relative">
          <Eyebrow>{t.quickDonate.eyebrow}</Eyebrow>
          <h2
            id="donate-title"
            className="mt-2.5 sm:mt-3 font-display text-2xl sm:text-[30px] font-bold leading-[1.2] sm:leading-[1.15] tracking-[-0.01em] text-ink-900 md:text-[44px]"
          >
            {t.quickDonate.title} <span className="text-rust-600">{t.quickDonate.titleHighlight}</span>
          </h2>
          <p className="mt-3.5 sm:mt-5 max-w-[480px] text-sm sm:text-base leading-[1.65] text-ink-700 md:text-lg">
            {t.quickDonate.lead}
          </p>
          <dl className="mt-6 sm:mt-8 grid max-w-[480px] grid-cols-2 gap-4 sm:gap-x-8 sm:gap-y-5 border-t border-rust-600/15 pt-5 sm:pt-6">
            {[...t.quickDonate.cowPlans, ...t.quickDonate.eduPlans].map((p) => (
              <div key={p.id}>
                <dt className="font-display text-lg sm:text-xl font-bold text-ink-900">{inr(p.amount)}</dt>
                <dd className="mt-0.5 text-xs sm:text-sm leading-snug text-ink-600">{p.does}</dd>
              </div>
            ))}
          </dl>
        </m.div>

        <m.form
          variants={fadeUp}
          onSubmit={(e) => {
            e.preventDefault()
            onDonate?.()
            const params = new URLSearchParams({ cause, freq: monthly ? 'monthly' : 'once' })
            if (preset === 'custom') params.set('amount', String(amount))
            else params.set('plan', preset)
            router.push(`/donate?${params.toString()}`)
          }}
          className="relative rounded-2xl sm:rounded-3xl bg-cream-50 p-4 sm:p-7 shadow-soft"
          aria-label="Quick donation"
        >
          {/* Cause tabs */}
          <div role="tablist" aria-label="Cause" className="grid grid-cols-2 rounded-full bg-peach-100 p-1">
            {(['cow', 'education'] as Cause[]).map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={cause === c}
                onClick={() => switchCause(c)}
                className="relative h-11 rounded-full font-display text-xs sm:text-[15px] font-bold transition-colors"
              >
                {cause === c && (
                  <m.span
                    layoutId="cause-pill"
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 rounded-full bg-rust-600 shadow-xs"
                  />
                )}
                <span className={`relative ${cause === c ? 'text-white' : 'text-ink-700'}`}>
                  {c === 'cow' ? t.quickDonate.feedCow : t.quickDonate.helpChild}
                </span>
              </button>
            ))}
          </div>

          {/* Frequency toggle */}
          <div className="mt-4 flex rounded-full bg-cream-100 p-1 text-xs sm:text-sm font-semibold">
            <button
              type="button"
              onClick={() => setMonthly(false)}
              className={`flex-1 rounded-full py-2 transition-colors ${
                !monthly ? 'bg-brown-900 text-white shadow-xs' : 'text-ink-700 hover:text-ink-900'
              }`}
            >
              {t.quickDonate.once}
            </button>
            <button
              type="button"
              onClick={() => setMonthly(true)}
              className={`flex-1 rounded-full py-2 transition-colors ${
                monthly ? 'bg-brown-900 text-white shadow-xs' : 'text-ink-700 hover:text-ink-900'
              }`}
            >
              {t.quickDonate.monthly}
            </button>
          </div>

          {/* Preset options */}
          <fieldset className="mt-5">
            <legend className="sr-only">Choose an amount</legend>
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              {presets.map((p) => {
                const active = preset === p.id
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => {
                      setPreset(p.id)
                      setCustom('')
                    }}
                    className={`flex flex-col items-start rounded-2xl border-2 p-3 text-left transition-all active:scale-[0.98] ${
                      active
                        ? 'border-rust-600 bg-peach-100/70 shadow-xs'
                        : 'border-line bg-cream-100/50 hover:border-rust-600/40'
                    }`}
                  >
                    <span className="font-display text-base sm:text-lg font-bold text-ink-900">{inr(p.amount)}</span>
                    <span className="text-xs text-ink-600 font-medium">{p.label}</span>
                  </button>
                )
              })}
            </div>

            {/* Custom amount */}
            <div className="mt-3">
              <label htmlFor="quick-custom" className="sr-only">
                {t.quickDonate.customAmount}
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-display text-base font-bold text-ink-500">
                  ₹
                </span>
                <input
                  id="quick-custom"
                  type="number"
                  inputMode="numeric"
                  min="100"
                  step="50"
                  placeholder={t.quickDonate.customPlaceholder}
                  value={custom}
                  onFocus={() => setPreset('custom')}
                  onChange={(e) => {
                    setPreset('custom')
                    setCustom(e.target.value)
                  }}
                  className={`h-12 w-full rounded-2xl border-2 bg-cream-100/50 pl-9 pr-4 text-base font-medium text-ink-900 outline-none transition-colors ${
                    preset === 'custom' ? 'border-rust-600 bg-peach-100/70' : 'border-line focus:border-rust-600'
                  }`}
                />
              </div>
            </div>
          </fieldset>

          {/* Outcome explanation note */}
          <p className="mt-4 min-h-[38px] text-xs sm:text-sm text-ink-700 font-medium leading-relaxed bg-peach-100/40 p-2.5 rounded-xl border border-line/40">
            {does}
          </p>

          <Button type="submit" heart size="lg" className="mt-5 w-full justify-center !h-12 !text-[15px] sm:!text-[17px]">
            {t.quickDonate.btnProceed}
          </Button>

          <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-[11px] sm:text-xs text-ink-500">
            <ShieldCheck className="h-3.5 w-3.5 text-leaf-600 shrink-0" />
            <span>{t.quickDonate.safety}</span>
          </p>
        </m.form>
      </m.div>
    </section>
  )
}
