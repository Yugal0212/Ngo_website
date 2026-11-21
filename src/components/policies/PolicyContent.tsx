'use client'

import React from 'react'
import Link from 'next/link'
import { BRAND, CONTACT } from '@/config/site'
import { useLanguage } from '@/context/LanguageContext'

type PolicyDoc = 'privacy' | 'terms' | 'donation'

type Props = {
  activeDoc: PolicyDoc
}

export function PolicyContent({ activeDoc }: Props) {
  const { isGu } = useLanguage()

  const tabs = [
    { id: 'privacy', label: isGu ? 'ગોપનીયતા નીતિ (Privacy)' : 'Privacy Policy', href: '/privacy-policy' },
    { id: 'terms', label: isGu ? 'નિયમો અને શરતો (Terms)' : 'Terms of Use', href: '/terms' },
    { id: 'donation', label: isGu ? 'દાન નીતિ (Donation Policy)' : 'Donation Policy', href: '/donation-policy' },
  ]

  return (
    <div className="mx-auto max-w-[960px] px-4 sm:px-6 py-8 sm:py-12 md:py-20">
      {/* Tabs */}
      <div className="flex border-b border-line mb-8 overflow-x-auto gap-3 sm:gap-4 no-scrollbar">
        {tabs.map((tab) => {
          const active = activeDoc === tab.id
          return (
            <Link
              key={tab.id}
              href={tab.href}
              className={`pb-3 font-display text-xs sm:text-base font-bold whitespace-nowrap border-b-2 transition-colors ${
                active ? 'border-rust-600 text-rust-600' : 'border-transparent text-ink-500 hover:text-ink-900'
              }`}
            >
              {tab.label}
            </Link>
          )
        })}
      </div>

      <div className="prose prose-rust max-w-none space-y-5 text-sm sm:text-base text-ink-700 leading-relaxed">
        {activeDoc === 'privacy' && (
          <>
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-ink-900">
              {isGu ? 'ગોપનીયતા નીતિ (Privacy Policy)' : 'Privacy Policy'}
            </h1>
            <p className="text-xs text-ink-500">Last updated: March 2025</p>

            <h2 className="font-display text-lg sm:text-xl font-bold text-ink-900 mt-5">1. Information We Collect</h2>
            <p>
              When you donate, volunteer, or contact us through {BRAND.name} (operated by {BRAND.legalName}), we collect details such as your name, email address, phone number, and optional dedication notes.
            </p>

            <h2 className="font-display text-lg sm:text-xl font-bold text-ink-900 mt-5">2. How We Use Your Information</h2>
            <p>
              Your contact information is strictly used for sending donation receipts, WhatsApp photo updates from the Gushala, and coordination for volunteering. We never sell, rent, or share personal data with commercial advertisers.
            </p>

            <h2 className="font-display text-lg sm:text-xl font-bold text-ink-900 mt-5">3. Payment Security</h2>
            <p>
              All online payments are processed through secure, RBI-authorized UPI and banking gateways. We do not store credit card or netbanking PINs on our servers.
            </p>
          </>
        )}

        {activeDoc === 'terms' && (
          <>
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-ink-900">
              {isGu ? 'નિયમો અને શરતો (Terms of Use)' : 'Terms of Use'}
            </h1>
            <p className="text-xs text-ink-500">Last updated: March 2025</p>

            <h2 className="font-display text-lg sm:text-xl font-bold text-ink-900 mt-5">1. Overview</h2>
            <p>
              By accessing {BRAND.name}, you agree to support our mission of compassionate animal welfare and child education in accordance with these terms.
            </p>

            <h2 className="font-display text-lg sm:text-xl font-bold text-ink-900 mt-5">2. Registration Status</h2>
            <p>
              {BRAND.legalName} is currently operating with registration in progress. Donations directly support fodder procurement, shelter upkeep, and children’s educational supplies.
            </p>
          </>
        )}

        {activeDoc === 'donation' && (
          <>
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-ink-900">
              {isGu ? 'દાન નીતિ (Donation Policy)' : 'Donation Policy'}
            </h1>
            <p className="text-xs text-ink-500">Last updated: March 2025</p>

            <h2 className="font-display text-lg sm:text-xl font-bold text-ink-900 mt-5">1. Transparent Utilization</h2>
            <p>
              Every rupee donated is dedicated towards green fodder, animal medicine, nutritious food, and stationery kits for children as outlined in our fund allocation breakdown.
            </p>

            <h2 className="font-display text-lg sm:text-xl font-bold text-ink-900 mt-5">2. Photo Proof & Accountability</h2>
            <p>
              Donors receive digital photo receipts and WhatsApp updates showcasing the fodder feeding rounds and student tutoring sessions.
            </p>
          </>
        )}
      </div>
    </div>
  )
}
