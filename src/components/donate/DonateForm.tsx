'use client'

import React, { Suspense, useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { AnimatePresence, m } from 'framer-motion'
import { Check, CreditCard, Heart, QrCode, ShieldCheck, Wallet } from 'lucide-react'

import { Button } from '@/components/common/Button'
import { Field } from '@/components/common/Field'
import { BRAND, COW_PLANS, EDU_PLANS, inr } from '@/config/site'
import { Cause, Frequency } from '@/types'

export function DonateForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

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

  const activePlans = cause === 'cow' ? COW_PLANS : EDU_PLANS
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
    if (!donorName.trim()) errs.name = 'Please enter your name'
    if (!donorEmail.trim() || !/^\S+@\S+\.\S+$/.test(donorEmail)) errs.email = 'Please enter a valid email address'
    if (!donorPhone.trim() || donorPhone.replace(/\D/g, '').length < 10) errs.phone = 'Please enter a valid 10-digit mobile number'
    if (selectedPlanId === 'custom' && finalAmount < 100) errs.amount = 'Minimum donation amount is ₹100'
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
        name: donorName.trim() || 'Kind Friend',
      })
      router.push(`/donate/thank-you?${params.toString()}`)
    }, 600)
  }

  return (
    <div className="mx-auto max-w-[1000px] px-5 py-8 md:py-16">
      <form onSubmit={handleSubmit} className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          {/* Step 1: Cause */}
          <div className="rounded-3xl border border-line bg-cream-100/60 p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-ink-900">1. Select Cause</h2>
            <div role="tablist" aria-label="Cause" className="mt-4 grid grid-cols-2 rounded-full bg-peach-100 p-1">
              {(['cow', 'education'] as Cause[]).map((c) => (
                <button
                  key={c}
                  type="button"
                  role="tab"
                  aria-selected={cause === c}
                  onClick={() => handleCauseChange(c)}
                  className="relative h-12 rounded-full font-display text-[15px] font-semibold"
                >
                  {cause === c && (
                    <m.span
                      layoutId="donate-cause-pill"
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0 rounded-full bg-rust-600"
                    />
                  )}
                  <span className={`relative ${cause === c ? 'text-white' : 'text-ink-700'}`}>
                    {c === 'cow' ? 'Gau Seva (Cow Care)' : 'Shiksha (Child Education)'}
                  </span>
                </button>
              ))}
            </div>

            {/* Plans */}
            <div className="mt-6">
              <label className="text-sm font-medium text-ink-500">Choose a Gift Amount</label>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
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
                      className={`flex flex-col items-start rounded-2xl border-[1.5px] p-4 text-left transition-[border-color,background-color] ${
                        selected ? 'border-rust-600 bg-peach-100' : 'border-line bg-cream-50 hover:border-rust-600/50'
                      }`}
                    >
                      <div className="flex w-full items-baseline justify-between">
                        <span className="font-display text-xl font-bold text-ink-900">{inr(plan.amount)}</span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-rust-600">{plan.label}</span>
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-ink-500">{plan.does}</p>
                    </button>
                  )
                })}
              </div>

              {/* Custom Amount option */}
              <button
                type="button"
                onClick={() => setSelectedPlanId('custom')}
                className={`mt-3 flex w-full items-center justify-between rounded-2xl border-[1.5px] p-4 text-left transition-[border-color,background-color] ${
                  selectedPlanId === 'custom' ? 'border-rust-600 bg-peach-100' : 'border-line bg-cream-50 hover:border-rust-600/50'
                }`}
              >
                <div>
                  <span className="font-display text-base font-bold text-ink-900">Custom Amount</span>
                  <p className="text-xs text-ink-500">Choose your own amount (minimum ₹100)</p>
                </div>
                <span className="font-display text-sm font-semibold text-rust-600">Enter Value</span>
              </button>

              <AnimatePresence>
                {selectedPlanId === 'custom' && (
                  <m.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden mt-3"
                  >
                    <label className="flex h-12 items-center gap-2 rounded-2xl border-[1.5px] border-line bg-cream-50 px-4 focus-within:border-rust-600">
                      <span className="font-display font-bold text-ink-900">₹</span>
                      <input
                        type="text"
                        inputMode="numeric"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value.replace(/\D/g, '').slice(0, 7))}
                        placeholder="e.g. 2500"
                        className="h-full w-full bg-transparent text-base text-ink-900 outline-none placeholder:text-ink-500"
                      />
                    </label>
                    {errors.amount && <p className="mt-1 text-xs text-rose-500">{errors.amount}</p>}
                  </m.div>
                )}
              </AnimatePresence>
            </div>

            {/* Frequency */}
            <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
              <div>
                <span className="block font-display text-base font-semibold text-ink-900">Monthly Support</span>
                <span className="text-xs text-ink-500">Nourish every month automatically</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setFrequency('once')}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold ${
                    frequency === 'once' ? 'bg-rust-600 text-white' : 'bg-cream-50 text-ink-700'
                  }`}
                >
                  One-time
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('monthly')}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold ${
                    frequency === 'monthly' ? 'bg-rust-600 text-white' : 'bg-cream-50 text-ink-700'
                  }`}
                >
                  Monthly
                </button>
              </div>
            </div>
          </div>

          {/* Step 2: Donor Details */}
          <div className="rounded-3xl border border-line bg-cream-100/60 p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-ink-900">2. Donor Information</h2>
            <p className="mt-1 text-xs text-ink-500">We will send photo updates of the supported cow or child to this email and WhatsApp.</p>
            <div className="mt-5 space-y-4">
              <Field
                label="Full Name"
                name="name"
                placeholder="Sunita Sharma"
                value={donorName}
                onChange={(e) => setDonorName(e.target.value)}
                error={errors.name}
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="sunita@example.com"
                  value={donorEmail}
                  onChange={(e) => setDonorEmail(e.target.value)}
                  error={errors.email}
                />
                <Field
                  label="Mobile Number"
                  name="phone"
                  type="tel"
                  placeholder="9876543210"
                  value={donorPhone}
                  onChange={(e) => setDonorPhone(e.target.value)}
                  error={errors.phone}
                />
              </div>
              <Field
                label="PAN Number (Optional)"
                name="pan"
                placeholder="ABCDE1234F"
                optional
                hint="For records. 80G tax benefits are currently pending official registration."
                value={donorPan}
                onChange={(e) => setDonorPan(e.target.value.toUpperCase())}
              />
              <Field
                label="Dedication / Note"
                name="notes"
                placeholder="e.g. In memory of grandmother, on birthday"
                optional
                value={donorNotes}
                onChange={(e) => setDonorNotes(e.target.value)}
              />
            </div>
          </div>

          {/* Step 3: Payment Method */}
          <div className="rounded-3xl border border-line bg-cream-100/60 p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-ink-900">3. Payment Mode</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                { id: 'upi', label: 'UPI / QR', icon: QrCode, desc: 'GPay, PhonePe, Paytm' },
                { id: 'card', label: 'Cards', icon: CreditCard, desc: 'Debit / Credit' },
                { id: 'netbanking', label: 'Net Banking', icon: Wallet, desc: 'All Major Banks' },
              ].map((mth) => {
                const Icon = mth.icon
                const sel = paymentMethod === mth.id
                return (
                  <button
                    key={mth.id}
                    type="button"
                    onClick={() => setPaymentMethod(mth.id as 'upi' | 'card' | 'netbanking')}
                    className={`flex flex-col items-center justify-center rounded-2xl border-[1.5px] p-4 text-center transition-[border-color,background-color] ${
                      sel ? 'border-rust-600 bg-peach-100' : 'border-line bg-cream-50 hover:border-rust-600/50'
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
          <div className="rounded-3xl bg-peach-100 p-6 sm:p-8 shadow-soft">
            <h3 className="font-display text-lg font-bold text-ink-900">Donation Summary</h3>
            <dl className="mt-5 space-y-3 text-sm border-b border-rust-600/15 pb-5">
              <div className="flex justify-between">
                <dt className="text-ink-500">Cause:</dt>
                <dd className="font-semibold text-ink-900">{cause === 'cow' ? 'Gau Seva' : 'Shiksha'}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink-500">Frequency:</dt>
                <dd className="font-semibold text-ink-900">{frequency === 'monthly' ? 'Monthly' : 'One-time'}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink-500">Impact:</dt>
                <dd className="font-semibold text-leaf-600 text-right max-w-[160px]">
                  {selectedPlanId === 'custom'
                    ? cause === 'cow'
                      ? `${Math.max(1, Math.floor(finalAmount / 200))} days fodder`
                      : 'Meals & learning essentials'
                    : currentPlan?.label}
                </dd>
              </div>
            </dl>

            <div className="mt-5 flex items-baseline justify-between">
              <span className="font-display text-base font-semibold text-ink-900">Total Gift:</span>
              <span className="font-display text-3xl font-extrabold text-rust-600">{inr(finalAmount)}</span>
            </div>

            <Button
              type="submit"
              heart
              size="lg"
              className="mt-6 w-full"
              arrow={false}
            >
              {submitting ? 'Processing Donation...' : `Complete ${frequency === 'monthly' ? 'Monthly' : ''} Gift`}
            </Button>

            <div className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-ink-500">
              <ShieldCheck className="h-4 w-4 shrink-0 text-leaf-600 mt-0.5" />
              <span>
                {BRAND.legalName} is currently registered under {BRAND.registrationStatus.toLowerCase()}. Tax exemption receipts (80G/12A) will be available once final approval completes.
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
