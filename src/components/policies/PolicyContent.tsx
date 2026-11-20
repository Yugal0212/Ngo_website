import React from 'react'
import Link from 'next/link'
import { BRAND, CONTACT } from '@/config/site'

type PolicyDoc = 'privacy' | 'terms' | 'donation'

type Props = {
  activeDoc: PolicyDoc
}

export function PolicyContent({ activeDoc }: Props) {
  const tabs = [
    { id: 'privacy', label: 'Privacy Policy', href: '/privacy-policy' },
    { id: 'terms', label: 'Terms of Use', href: '/terms' },
    { id: 'donation', label: 'Donation Policy', href: '/donation-policy' },
  ]

  return (
    <div className="mx-auto max-w-[960px] px-5 py-12 md:py-20">
      {/* Tabs */}
      <div className="flex border-b border-line mb-10 overflow-x-auto gap-4">
        {tabs.map((tab) => {
          const active = activeDoc === tab.id
          return (
            <Link
              key={tab.id}
              href={tab.href}
              className={`pb-4 font-display text-base font-semibold whitespace-nowrap border-b-2 transition-colors ${
                active ? 'border-rust-600 text-rust-600' : 'border-transparent text-ink-500 hover:text-ink-900'
              }`}
            >
              {tab.label}
            </Link>
          )
        })}
      </div>

      <div className="prose prose-rust max-w-none space-y-6 text-base text-ink-700 leading-relaxed">
        {activeDoc === 'privacy' && (
          <>
            <h1 className="font-display text-3xl font-bold text-ink-900">Privacy Policy</h1>
            <p className="text-sm text-ink-500">Last updated: March 2025</p>

            <h2 className="font-display text-xl font-bold text-ink-900 mt-6">1. Information We Collect</h2>
            <p>
              When you donate, volunteer, or contact us through {BRAND.name} (operated by {BRAND.legalName}), we collect details such as your name, email address, phone number, and optional dedication notes.
            </p>

            <h2 className="font-display text-xl font-bold text-ink-900 mt-6">2. How We Use Your Information</h2>
            <p>
              We use your contact details solely to confirm donations, share photo updates of the animals and children supported, and keep you informed of our activities. We never sell, rent, or trade your personal information to third parties.
            </p>

            <h2 className="font-display text-xl font-bold text-ink-900 mt-6">3. Data Security & Payment Information</h2>
            <p>
              All online payment transactions are processed securely via verified third-party payment gateways. We do not store credit card, debit card, or netbanking credentials on our servers.
            </p>

            <h2 className="font-display text-xl font-bold text-ink-900 mt-6">4. Contact Us</h2>
            <p>
              If you have any questions regarding your personal data or wish to have your details removed from our records, please reach us at <a href={`mailto:${CONTACT.email}`} className="text-rust-600 underline">{CONTACT.email}</a>.
            </p>
          </>
        )}

        {activeDoc === 'terms' && (
          <>
            <h1 className="font-display text-3xl font-bold text-ink-900">Terms of Service</h1>
            <p className="text-sm text-ink-500">Last updated: March 2025</p>

            <h2 className="font-display text-xl font-bold text-ink-900 mt-6">1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you agree to comply with and be bound by these terms. This site is created to support the humanitarian and animal welfare work of {BRAND.legalName} under the banner of {BRAND.name}.
            </p>

            <h2 className="font-display text-xl font-bold text-ink-900 mt-6">2. Use of Content</h2>
            <p>
              Photographs, stories, and written material on this website reflect actual beneficiaries and Gushala activities. Respecting the privacy and dignity of village families and children, reproduction without consent is strictly prohibited.
            </p>

            <h2 className="font-display text-xl font-bold text-ink-900 mt-6">3. Transparency & Disclaimers</h2>
            <p>
              All content is provided in good faith. Figures provided on website sections reflect current operating approximations and volunteer estimates, to be replaced by formal audited statements upon registration completion.
            </p>
          </>
        )}

        {activeDoc === 'donation' && (
          <>
            <h1 className="font-display text-3xl font-bold text-ink-900">Donation & Transparency Policy</h1>
            <p className="text-sm text-ink-500">Last updated: March 2025</p>

            <div className="rounded-2xl bg-peach-100 p-5 border border-rust-600/20">
              <p className="font-display font-semibold text-rust-700">Important Legal Notice</p>
              <p className="mt-1 text-sm text-ink-700">
                {BRAND.legalName} is currently registered as: <strong>{BRAND.registrationStatus}</strong>. We do not currently issue Section 80G tax deduction receipts, 12A exemption certificates, or accept foreign currency contributions under FCRA until all certifications are finalized.
              </p>
            </div>

            <h2 className="font-display text-xl font-bold text-ink-900 mt-6">1. Utilization of Contributions</h2>
            <p>
              100% of voluntary contributions received through {BRAND.name} are channelled into purchasing green fodder, feed, veterinary medicines, and educational supplies for school children.
            </p>

            <h2 className="font-display text-xl font-bold text-ink-900 mt-6">2. Donor Updates & Receipts</h2>
            <p>
              Every donor receives an electronic receipt confirmation via email. For designated cow and education sponsorships, donors receive periodic photo updates directly from the shelter and delivery rounds.
            </p>

            <h2 className="font-display text-xl font-bold text-ink-900 mt-6">3. Refund Policy</h2>
            <p>
              Because contributions directly fund immediate animal feed procurement and daily school meals, donations are considered non-refundable. If an erroneous transaction or duplicate debit occurs, please email <a href={`mailto:${CONTACT.email}`} className="text-rust-600 underline">{CONTACT.email}</a> within 7 days for assistance.
            </p>
          </>
        )}
      </div>
    </div>
  )
}
