'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { AnimatePresence, m } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'

import { Button } from '@/components/common/Button'
import { Eyebrow } from '@/components/common/Eyebrow'
import { LeafSprig } from '@/components/common/Icons'
import { BRAND, COW_PLANS, EDU_PLANS, inr } from '@/config/site'
import { Cause } from '@/types'
import { fadeUp, inView, stagger } from '@/lib/motion'

const QUICK = {
  cow: [
    { id: 'day', label: 'One day', amount: 200, does: 'One day of fresh fodder for one cow' },
    { id: 'month', label: 'One month', amount: 6000, does: 'Keeps one cow fed at home for a month' },
  ],
  education: [
    { id: 'stationery', label: 'Stationery', amount: 500, does: 'Notebooks, pencils and a geometry box' },
    { id: 'food', label: 'Monthly food', amount: 1500, does: 'Daily meals for one child for a month' },
  ],
}

/** A small donate widget: pick a cause, an amount, once or monthly. Full flow lives on /donate. */
export function QuickDonate({ initialCause = 'cow', onDonate }: { initialCause?: Cause; onDonate?: () => void }) {
  const router = useRouter()
  const [cause, setCause] = useState<Cause>(initialCause)
  const [preset, setPreset] = useState<string>('day')
  const [custom, setCustom] = useState('')
  const [monthly, setMonthly] = useState(false)

  useEffect(() => {
    setCause(initialCause)
  }, [initialCause])

  const presets = cause === 'cow' ? QUICK.cow : QUICK.education
  const chosen = presets.find((p) => p.id === preset) ?? presets[0]
  const amount = preset === 'custom' ? Number(custom) || 0 : chosen.amount
  const does =
    preset === 'custom'
      ? amount >= 200
        ? cause === 'cow'
          ? `About ${Math.floor(amount / 200)} day${amount >= 400 ? 's' : ''} of fresh fodder for one cow`
          : 'Goes to food, books and stationery for a child'
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
        className="relative mx-auto grid max-w-[1388px] items-center gap-10 overflow-hidden rounded-[32px] bg-peach-100 px-5 py-10 sm:px-10 md:py-14 lg:grid-cols-[1fr_minmax(0,500px)] lg:gap-16 lg:rounded-[48px_48px_48px_140px] lg:px-16 lg:py-16"
      >
        <LeafSprig className="pointer-events-none absolute -right-2 -top-4 w-20 rotate-180 text-sand-300" />
        <m.div variants={fadeUp} className="relative">
          <Eyebrow>Give in a Minute</Eyebrow>
          <h2
            id="donate-title"
            className="mt-3 font-display text-[30px] font-bold leading-[1.15] tracking-[-0.01em] text-ink-900 md:text-[44px]"
          >
            Be the reason a cow is <span className="text-rust-600">never left alone.</span>
          </h2>
          <p className="mt-5 max-w-[480px] text-base leading-[1.65] text-ink-700 md:text-lg">
            Choose what feels right. We’ll send you a photo update from the Gushala so you can see where your
            gift went.
          </p>
          <dl className="mt-8 grid max-w-[480px] grid-cols-2 gap-x-8 gap-y-5 border-t border-rust-600/15 pt-6">
            {[...COW_PLANS.slice(0, 2), ...EDU_PLANS.slice(0, 2)].map((p) => (
              <div key={p.id}>
                <dt className="font-display text-xl font-bold text-ink-900">{inr(p.amount)}</dt>
                <dd className="mt-1 text-sm leading-snug text-ink-500">{p.does}</dd>
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
          className="relative rounded-3xl bg-cream-50 p-5 shadow-soft sm:p-8"
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
                className="relative h-11 rounded-full font-display text-[15px] font-semibold"
              >
                {cause === c && (
                  <m.span
                    layoutId="cause-pill"
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 rounded-full bg-rust-600"
                  />
                )}
                <span className={`relative ${cause === c ? 'text-white' : 'text-ink-700'}`}>
                  {c === 'cow' ? 'Feed a Cow' : 'Help a Child'}
                </span>
              </button>
            ))}
          </div>

          {/* Presets */}
          <fieldset className="mt-6">
            <legend className="text-sm font-medium text-ink-500">Amount</legend>
            <div className="mt-3 grid grid-cols-3 gap-2.5">
              {[...presets, { id: 'custom', amount: 0, label: 'Custom', does: '' }].map((p) => {
                const on = preset === p.id
                return (
                  <button
                    key={p.id}
                    type="button"
                    aria-pressed={on}
                    onClick={() => setPreset(p.id)}
                    className={`flex min-h-[64px] flex-col items-center justify-center rounded-2xl border-[1.5px] px-2 py-2 transition-[background-color,border-color] duration-150 ease-out ${
                      on ? 'border-rust-600 bg-peach-100' : 'border-line hover:border-rust-600/50'
                    }`}
                  >
                    <span className="font-display text-lg font-bold text-ink-900">
                      {p.id === 'custom' ? 'Custom' : inr(p.amount)}
                    </span>
                    <span className="text-xs text-ink-500">{p.id === 'custom' ? 'Any amount' : p.label}</span>
                  </button>
                )
              })}
            </div>
          </fieldset>

          <AnimatePresence initial={false}>
            {preset === 'custom' && (
              <m.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <label className="mt-4 flex h-12 items-center gap-2 rounded-2xl border-[1.5px] border-line bg-cream-50 px-4 focus-within:border-rust-600">
                  <span className="font-display font-bold text-ink-900">₹</span>
                  <span className="sr-only">Custom amount in rupees</span>
                  <input
                    inputMode="numeric"
                    value={custom}
                    onChange={(e) => setCustom(e.target.value.replace(/\D/g, '').slice(0, 7))}
                    placeholder="Enter amount"
                    className="h-full w-full bg-transparent text-base text-ink-900 outline-none placeholder:text-ink-500"
                  />
                </label>
              </m.div>
            )}
          </AnimatePresence>

          <p aria-live="polite" className="mt-4 min-h-[24px] text-[15px] text-leaf-600">
            {does}
          </p>

          {/* Frequency */}
          <div className="mt-5 flex items-center justify-between gap-4 border-t border-line pt-5">
            <span className="text-[15px] text-ink-700">Make it monthly</span>
            <button
              type="button"
              role="switch"
              aria-checked={monthly}
              aria-label="Give monthly"
              onClick={() => setMonthly((v) => !v)}
              className={`relative h-7 w-12 shrink-0 rounded-full transition-[background-color] duration-150 ease-out ${
                monthly ? 'bg-rust-600' : 'bg-peach-200'
              }`}
            >
              <span
                className={`absolute left-1 top-1 h-5 w-5 rounded-full bg-cream-50 shadow transition-transform duration-150 ease-out ${
                  monthly ? 'translate-x-5' : ''
                }`}
              />
            </button>
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-ink-500">
              <span className="block text-sm">{monthly ? 'Every month' : 'One-time'}</span>
              <span className="font-display text-3xl font-extrabold tabular-nums text-ink-900">{inr(amount)}</span>
            </p>
            <Button type="submit" heart size="lg" className="w-full sm:w-auto">
              Donate
            </Button>
          </div>

          <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-ink-500">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-leaf-600" aria-hidden />
            Secure payment via UPI, cards or netbanking. {BRAND.legalName} — {BRAND.registrationStatus.toLowerCase()}, so
            tax receipts aren’t available yet.
          </p>
        </m.form>
      </m.div>
    </section>
  )
}
