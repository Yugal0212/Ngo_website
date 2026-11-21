'use client'

import React from 'react'
import Link from 'next/link'
import { Globe, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'

import { BRAND, CONTACT, SOCIALS } from '@/config/site'
import { Logo } from './Logo'
import { WaveDivider } from './WaveDivider'
import { useLanguage } from '@/context/LanguageContext'

/** Brown-900 footer with a wave edge on top. */
export function Footer() {
  const { language, setLanguage, t, isGu } = useLanguage()

  const COLUMNS = [
    {
      title: t.footer.explore,
      links: [
        [isGu ? 'અમારા વિશે' : 'About Us', '/about'],
        [isGu ? 'ગૌસેવા' : 'Gau Seva', '/what-we-do#gau-seva'],
        [isGu ? 'શિક્ષા' : 'Shiksha', '/what-we-do#shiksha'],
        [isGu ? 'ગેલેરી' : 'Gallery', '/gallery'],
        [isGu ? 'સેવા ડાયરી (બ્લોગ)' : 'Blog', '/blog'],
      ],
    },
    {
      title: t.footer.getInvolved,
      links: [
        [isGu ? 'દાન કરો' : 'Donate', '/donate'],
        [isGu ? 'સ્વયંસેવક બનો' : 'Volunteer', '/volunteer'],
        [isGu ? 'સહભાગી બનો' : 'Partner With Us', '/contact?subject=partner'],
        [isGu ? 'તસવીર શેર કરો' : 'Share Your Moment', '/gallery?share=1'],
        [isGu ? 'સંપર્ક કરો' : 'Contact', '/contact'],
      ],
    },
  ]

  return (
    <footer className="text-peach-200">
      <WaveDivider />
      <div className="-mt-px bg-brown-900 pb-20 lg:pb-0">
        <div className="mx-auto grid max-w-[1500px] gap-10 px-5 pb-10 pt-10 md:grid-cols-2 md:px-10 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] xl:px-[90px]">
          <div>
            <Logo light />
            <p className="mt-4 max-w-[320px] text-[15px] leading-[1.65]">
              {t.footer.tagline}
            </p>

            {/* Language switch toggle in footer */}
            <div className="mt-5 flex items-center gap-2">
              <span className="text-xs text-peach-200/70 flex items-center gap-1">
                <Globe className="h-3.5 w-3.5 text-rust-500" />
                {t.footer.switchLang}:
              </span>
              <div className="inline-flex rounded-full border border-peach-200/30 p-0.5">
                <button
                  type="button"
                  onClick={() => setLanguage('gu', true)}
                  className={`rounded-full px-3 py-1 text-xs font-semibold transition-all ${
                    language === 'gu'
                      ? 'bg-rust-600 text-white'
                      : 'text-peach-200 hover:text-white'
                  }`}
                >
                  ગુજરાતી
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('en', true)}
                  className={`rounded-full px-3 py-1 text-xs font-semibold transition-all ${
                    language === 'en'
                      ? 'bg-rust-600 text-white'
                      : 'text-peach-200 hover:text-white'
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            <ul className="mt-6 flex flex-wrap gap-2">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="inline-flex h-10 items-center rounded-full border border-peach-200/30 px-4 text-xs font-medium text-cream-50 hover:border-peach-200 hover:bg-brown-800 transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="font-display text-base font-semibold text-cream-50">{col.title}</h2>
              <ul className="mt-4 space-y-2">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="inline-flex min-h-[36px] items-center text-[15px] hover:text-cream-50 active:text-rust-500 transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className="font-display text-base font-semibold text-cream-50">{t.footer.reachUs}</h2>
            <ul className="mt-4 space-y-3 text-[15px]">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-peach-200" aria-hidden />
                <span>
                  {isGu
                    ? '[ગૌશાળા સરનામું], [ગામ], [જિલ્લો], [ગુજરાત] — [પીનકોડ]'
                    : CONTACT.address}
                </span>
              </li>
              <li>
                <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-3 hover:text-cream-50">
                  <Phone className="h-5 w-5 shrink-0" aria-hidden />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 hover:text-cream-50">
                  <Mail className="h-5 w-5 shrink-0" aria-hidden />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-cream-50"
                >
                  <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />
                  WhatsApp {CONTACT.whatsapp}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-peach-200/15">
          <div className="mx-auto flex max-w-[1500px] flex-col gap-4 px-5 py-6 text-xs sm:text-sm md:flex-row md:items-center md:justify-between md:px-10 xl:px-[90px]">
            <p>
              © {new Date().getFullYear()} {isGu ? 'પોઝિટિવિટી ડોનેશન' : BRAND.legalName}. {isGu ? 'સંસ્થા નોંધણી પ્રક્રિયા ચાલુ છે.' : BRAND.registrationStatus}.
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              <li>
                <Link href="/privacy-policy" className="hover:text-cream-50">
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-cream-50">
                  {t.footer.terms}
                </Link>
              </li>
              <li>
                <Link href="/donation-policy" className="hover:text-cream-50">
                  {t.footer.donationPolicy}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
