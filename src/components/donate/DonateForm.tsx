'use client'

import React, { Suspense, useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { AnimatePresence, m } from 'framer-motion'
import { Check, CreditCard, Heart, QrCode, ShieldCheck, Wallet } from 'lucide-react'

import { Button } from '@/components/common/Button'
import { Field } from '@/components/common/Field'
import { BRAND, inr } from '@/config/site'
import { Cause, Frequency } from '@/types'
import { useLanguage } from '@/context/LanguageContext'

export function DonateForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { t, isGu } = useLanguage()

  const initialCause = (searchParams.get('cause') as Cause) || 'cow'
  const initialPlan = searchParams.get('plan') || 'day'
  const initialAmount = searchParams.get('amount') ? Number(searchParams.get('amount')) : null
  const initialFreq = (searchParams.get('freq') as Frequency) || 'once'

  const [cause, setCause] = useState<Cause>(initialCause)
  const [frequency, setFrequency] = useState<Frequency>(initialFreq)
  const [selectedPlanId, setSelectedPlanId] = useState<string>(initialAmount ? 'custom' : initialPlan)
  const [customAmount, setCustomAmount] = useState<string>(initialAmount ? String(initialAmount) : '')
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking'>('upi')

  const [donorName, setDonorName] = useState('')
  const [donorEmail, setDonorEmail] = useState('')
  const [donorPhone, setDonorPhone] = useState('')
  const [donorPan, setDonorPan] = useState('')
  const [donorNotes, setDonorNotes] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)

  const activePlans = cause === 'cow' ? t.quickDonate.cowPlans : t.quickDonate.eduPlans
  const currentPlan = activePlans.find((p) => p.id === selectedPlanId)

  const finalAmount =
    selectedPlanId === 'custom'
      ? Number(customAmount) || 0
      : currentPlan?.amount || (cause === 'cow' ? 200 : 500)

  const handleCauseChange = (c: Cause) => {
    setCause(c)
    setSelectedPlanId(c === 'cow' ? 'day' : 'stationery')
    setCustomAmount('')
  }

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!donorName.trim()) {
      errs.name = isGu ? 'કૃપા કરીને આપનું નામ લખો' : 'Please enter your name'
    }
    if (!donorEmail.trim() || !/^\S+@\S+\.\S+$/.test(donorEmail)) {
      errs.email = isGu ? 'કૃપા કરીને માન્ય ઈમેલ એડ્રેસ લખો' : 'Please enter a valid email address'
    }
    if (!donorPhone.trim() || donorPhone.replace(/\D/g, '').length < 10) {
      errs.phone = isGu ? 'કૃપા કરીને ૧૦ અંકનો મોબાઈલ નંબર લખો' : 'Please enter a valid 10-digit mobile number'
    }
    if (selectedPlanId === 'custom' && finalAmount < 100) {
      errs.amount = isGu ? 'ઓછામાં ઓછી રકમ ₹૧૦૦ છે' : 'Minimum donation amount is ₹100'
    }
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setSubmitting(true)
    const randomId = `GS-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`

    setTimeout(() => {
      const params = new URLSearchParams({
        id: randomId,
        amount: String(finalAmount),
        cause,
        freq: frequency,
        name: donorName.trim() || (isGu ? 'સેવાભાવી મિત્ર' : 'Kind Friend'),
      })
      router.push(`/donate/thank-you?${params.toString()}`)
    }, 600)
  }

  return (
    <div className="mx-auto max-w-[1000px] px-4 sm:px-6 py-6 md:py-16">
      <form onSubmit={handleSubmit} className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6 sm:space-y-8">
          {/* Step 1: Cause */}
          <div className="rounded-2xl sm:rounded-3xl border border-line bg-cream-100/60 p-4 sm:p-7 shadow-xs">
            <h2 className="font-display text-lg sm:text-xl font-bold text-ink-900">{t.donatePage.step1}</h2>
            <div role="tablist" aria-label="Cause" className="mt-3.5 sm:mt-4 grid grid-cols-2 rounded-full bg-peach-100 p-1">
              {(['cow', 'education'] as Cause[]).map((c) => (
                <button
                  key={c}
                  type="button"
                  role="tab"
                  aria-selected={cause === c}
                  onClick={() => handleCauseChange(c)}
                  className="relative h-11 sm:h-12 rounded-full font-display text-xs sm:text-[15px] font-bold transition-colors"
                >
                  {cause === c && (
                    <m.span
                      layoutId="donate-cause-pill"
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0 rounded-full bg-rust-600 shadow-xs"
                    />
                  )}
                  <span className={`relative ${cause === c ? 'text-white' : 'text-ink-700'}`}>
                    {c === 'cow'
                      ? isGu
                        ? 'ગૌસેવા (ગાયોનું જતન)'
                        : 'Gau Seva (Cow Care)'
                      : isGu
                      ? 'શિક્ષા (બાળ શિક્ષણ)'
                      : 'Shiksha (Education)'}
                  </span>
                </button>
              ))}
            </div>

            {/* Plans */}
            <div className="mt-5 sm:mt-6">
              <label className="text-xs sm:text-sm font-semibold text-ink-600">
                {t.donatePage.step3}
              </label>
              <div className="mt-2.5 sm:mt-3 grid gap-2.5 sm:gap-3 sm:grid-cols-2">
                {activePlans.map((plan) => {
                  const selected = selectedPlanId === plan.id
                  return (
                    <button
                      key={plan.id}
                      type="button"
                      onClick={() => {
                        setSelectedPlanId(plan.id)
                        setCustomAmount('')
                      }}
                      className={`flex flex-col items-start rounded-2xl border-2 p-3.5 sm:p-4 text-left transition-all active:scale-[0.98] ${
                        selected ? 'border-rust-600 bg-peach-100/80 shadow-xs' : 'border-line bg-cream-50 hover:border-rust-600/50'
                      }`}
                    >
                      <div className="flex w-full items-baseline justify-between">
                        <span className="font-display text-lg sm:text-xl font-bold text-ink-900">{inr(plan.amount)}</span>
                        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-rust-600">{plan.label}</span>
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-ink-600">{plan.does}</p>
                    </button>
                  )
                })}
              </div>

              {/* Custom Amount option */}
              <button
                type="button"
                onClick={() => setSelectedPlanId('custom')}
                className={`mt-3 flex w-full items-center justify-between rounded-2xl border-2 p-3.5 sm:p-4 text-left transition-all active:scale-[0.98] ${
                  selectedPlanId === 'custom' ? 'border-rust-600 bg-peach-100/80 shadow-xs' : 'border-line bg-cream-50 hover:border-rust-600/50'
                }`}
              >
                <div>
                  <span className="font-display text-sm sm:text-base font-bold text-ink-900">
                    {t.donatePage.customAmount}
                  </span>
                  <p className="text-xs text-ink-500">{t.donatePage.customMin}</p>
                </div>
                <span className="font-display text-xs sm:text-sm font-bold text-rust-600">
                  {isGu ? 'રકમ લખો' : 'Enter Value'}
                </span>
              </button>

              <AnimatePresence>
                {selectedPlanId === 'custom' && (
                  <m.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden mt-3"
                  >
                    <label className="flex h-12 items-center gap-2 rounded-2xl border-2 border-line bg-cream-50 px-4 focus-within:border-rust-600">
                      <span className="font-display font-bold text-ink-900">₹</span>
                      <input
                        type="text"
                        inputMode="numeric"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value.replace(/\D/g, '').slice(0, 7))}
                        placeholder={isGu ? 'દા.ત. ૨૫૦૦' : 'e.g. 2500'}
                        className="h-full w-full bg-transparent text-base text-ink-900 outline-none placeholder:text-ink-400"
                      />
                    </label>
                    {errors.amount && <p className="mt-1 text-xs text-rose-500">{errors.amount}</p>}
                  </m.div>
                )}
              </AnimatePresence>
            </div>

            {/* Frequency */}
            <div className="mt-5 sm:mt-6 flex items-center justify-between border-t border-line pt-4 sm:pt-5">
              <div>
                <span className="block font-display text-sm sm:text-base font-bold text-ink-900">
                  {isGu ? 'માસિક નિયમ (સંકલ્પ)' : 'Monthly Support'}
                </span>
                <span className="text-[11px] sm:text-xs text-ink-500">
                  {isGu ? 'દર મહિને આપોઆપ સેવા સહયોગ' : 'Nourish every month automatically'}
                </span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <button
                  type="button"
                  onClick={() => setFrequency('once')}
                  className={`rounded-full px-3 sm:px-4 py-1.5 text-xs font-bold transition-all ${
                    frequency === 'once' ? 'bg-rust-600 text-white shadow-xs' : 'bg-cream-50 text-ink-700'
                  }`}
                >
                  {isGu ? 'એક વાર' : 'One-time'}
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('monthly')}
                  className={`rounded-full px-3 sm:px-4 py-1.5 text-xs font-bold transition-all ${
                    frequency === 'monthly' ? 'bg-rust-600 text-white shadow-xs' : 'bg-cream-50 text-ink-700'
                  }`}
                >
                  {isGu ? 'દર મહિને' : 'Monthly'}
                </button>
              </div>
            </div>
          </div>

          {/* Step 2: Donor Details */}
          <div className="rounded-2xl sm:rounded-3xl border border-line bg-cream-100/60 p-4 sm:p-7 shadow-xs">
            <h2 className="font-display text-lg sm:text-xl font-bold text-ink-900">{t.donatePage.step4}</h2>
            <p className="mt-1 text-xs text-ink-500">
              {isGu
                ? 'આપના વોટ્સએપ અને ઈમેલ પર સેવા કાર્યની તસવીરો મોકલવામાં આવશે.'
                : 'We will send photo updates of the supported cow or child to this email and WhatsApp.'}
            </p>
            <div className="mt-4 sm:mt-5 space-y-4">
              <Field
                label={t.donatePage.fullName}
                name="name"
                placeholder={isGu ? 'સુનીતાબેન શર્મા' : 'Sunita Sharma'}
                value={donorName}
                onChange={(e) => setDonorName(e.target.value)}
                error={errors.name}
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label={t.donatePage.email}
                  name="email"
                  type="email"
                  placeholder="sunita@example.com"
                  value={donorEmail}
                  onChange={(e) => setDonorEmail(e.target.value)}
                  error={errors.email}
                />
                <Field
                  label={t.donatePage.phone}
                  name="phone"
                  type="tel"
                  placeholder="9876543210"
                  value={donorPhone}
                  onChange={(e) => setDonorPhone(e.target.value)}
                  error={errors.phone}
                />
              </div>
              <Field
                label={t.donatePage.pan}
                name="pan"
                placeholder="ABCDE1234F"
                optional
                hint={isGu ? 'રેકોર્ડ માટે. સંસ્થા નોંધણી પ્રક્રિયા ચાલુ છે.' : 'For records. 80G tax benefits are currently pending official registration.'}
                value={donorPan}
                onChange={(e) => setDonorPan(e.target.value.toUpperCase())}
              />
              <Field
                label={t.donatePage.prayer}
                name="notes"
                placeholder={isGu ? 'દા.ત. જન્મદિવસ નિમિત્તે, માતા-પિતાના સ્મરણાર્થે' : 'e.g. In memory of grandmother, on birthday'}
                optional
                value={donorNotes}
                onChange={(e) => setDonorNotes(e.target.value)}
              />
            </div>
          </div>

          {/* Step 3: Payment Method */}
          <div className="rounded-2xl sm:rounded-3xl border border-line bg-cream-100/60 p-4 sm:p-7 shadow-xs">
            <h2 className="font-display text-lg sm:text-xl font-bold text-ink-900">{t.donatePage.paymentMethod}</h2>
            <div className="mt-3.5 sm:mt-4 grid gap-2.5 sm:gap-3 sm:grid-cols-3">
              {[
                { id: 'upi', label: 'UPI / QR', icon: QrCode, desc: 'GPay, PhonePe, Paytm' },
                { id: 'card', label: isGu ? 'કાર્ડ' : 'Cards', icon: CreditCard, desc: 'Debit / Credit' },
                { id: 'netbanking', label: isGu ? 'નેટ બેંકિંગ' : 'Net Banking', icon: Wallet, desc: 'All Major Banks' },
              ].map((mth) => {
                const Icon = mth.icon
                const sel = paymentMethod === mth.id
                return (
                  <button
                    key={mth.id}
                    type="button"
                    onClick={() => setPaymentMethod(mth.id as 'upi' | 'card' | 'netbanking')}
                    className={`flex flex-col items-center justify-center rounded-2xl border-2 p-3 sm:p-4 text-center transition-all active:scale-[0.98] ${
                      sel ? 'border-rust-600 bg-peach-100/80 shadow-xs' : 'border-line bg-cream-50 hover:border-rust-600/50'
                    }`}
                  >
                    <Icon className="h-6 w-6 text-rust-600" />
                    <span className="mt-2 font-display text-sm font-bold text-ink-900">{mth.label}</span>
                    <span className="text-[11px] text-ink-500">{mth.desc}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Summary Card */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-2xl sm:rounded-3xl bg-peach-100 p-5 sm:p-7 shadow-soft border border-rust-600/10">
            <h3 className="font-display text-base sm:text-lg font-bold text-ink-900">
              {isGu ? 'દાનની વિગત' : 'Donation Summary'}
            </h3>
            <dl className="mt-4 sm:mt-5 space-y-2.5 text-xs sm:text-sm border-b border-rust-600/15 pb-4 sm:pb-5">
              <div className="flex justify-between">
                <dt className="text-ink-600">{isGu ? 'સેવા:' : 'Cause:'}</dt>
                <dd className="font-bold text-ink-900">
                  {cause === 'cow' ? (isGu ? 'ગૌસેવા' : 'Gau Seva') : (isGu ? 'શિક્ષા' : 'Shiksha')}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink-600">{isGu ? 'પ્રકાર:' : 'Frequency:'}</dt>
                <dd className="font-bold text-ink-900">
                  {frequency === 'monthly' ? (isGu ? 'માસિક સંકલ્પ' : 'Monthly') : (isGu ? 'એક વાર' : 'One-time')}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink-600">{isGu ? 'સદ્ઉપયોગ:' : 'Impact:'}</dt>
                <dd className="font-bold text-leaf-600 text-right max-w-[170px]">
                  {selectedPlanId === 'custom'
                    ? cause === 'cow'
                      ? isGu
                        ? `${Math.max(1, Math.floor(finalAmount / 200))} દિવસનો ઘાસચારો`
                        : `${Math.max(1, Math.floor(finalAmount / 200))} days fodder`
                      : isGu
                      ? 'શિક્ષણ અને ભોજન સહાય'
                      : 'Meals & learning essentials'
                    : currentPlan?.label}
                </dd>
              </div>
            </dl>

            <div className="mt-4 sm:mt-5 flex items-baseline justify-between">
              <span className="font-display text-sm sm:text-base font-bold text-ink-900">
                {isGu ? 'કુલ સેવા રકમ:' : 'Total Gift:'}
              </span>
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-rust-600">{inr(finalAmount)}</span>
            </div>

            <Button
              type="submit"
              heart
              size="lg"
              className="mt-5 sm:mt-6 w-full justify-center !h-12 !text-[15px]"
              arrow={false}
            >
              {submitting
                ? t.donatePage.processing
                : `${isGu ? 'દાન પૂર્ણ કરો' : 'Complete Donation'} (${inr(finalAmount)})`}
            </Button>

            <div className="mt-4 flex items-start gap-2 text-[11px] sm:text-xs leading-relaxed text-ink-600">
              <ShieldCheck className="h-4 w-4 shrink-0 text-leaf-600 mt-0.5" />
              <span>
                {t.donatePage.safePledge}
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
