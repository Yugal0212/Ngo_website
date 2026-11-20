import React from 'react'
import Link from 'next/link'
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'

import { BRAND, CONTACT, SOCIALS } from '@/config/site'
import { Logo } from './Logo'
import { WaveDivider } from './WaveDivider'

const COLUMNS = [
  {
    title: 'Explore',
    links: [
      ['About Us', '/about'],
      ['Gau Seva', '/what-we-do#gau-seva'],
      ['Shiksha', '/what-we-do#shiksha'],
      ['Gallery', '/gallery'],
      ['Blog', '/blog'],
    ],
  },
  {
    title: 'Get Involved',
    links: [
      ['Donate', '/donate'],
      ['Volunteer', '/volunteer'],
      ['Partner With Us', '/contact?subject=partner'],
      ['Share Your Moment', '/gallery?share=1'],
      ['Contact', '/contact'],
    ],
  },
]

/** Brown-900 footer with a wave edge on top. */
export function Footer() {
  return (
    <footer className="text-peach-200">
      <WaveDivider />
      <div className="-mt-px bg-brown-900">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-5 pb-10 pt-10 md:grid-cols-2 md:px-10 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] xl:px-[90px]">
          <div>
            <Logo light />
            <p className="mt-5 max-w-[320px] text-[15px] leading-[1.65]">
              Compassion for cows. Hope for children. Every small act of giving counts.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="inline-flex h-11 items-center rounded-full border border-peach-200/30 px-4 text-sm text-cream-50 hover:border-peach-200 hover:bg-brown-800"
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
              <ul className="mt-4 space-y-1">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="inline-flex min-h-[36px] items-center text-[15px] hover:text-cream-50">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className="font-display text-base font-semibold text-cream-50">Reach Us</h2>
            <ul className="mt-4 space-y-3 text-[15px]">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-peach-200" aria-hidden />
                <span>{CONTACT.address}</span>
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
                <a href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-cream-50">
                  <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />
                  WhatsApp {CONTACT.whatsapp}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-peach-200/15">
          <div className="mx-auto flex max-w-[1500px] flex-col gap-4 px-5 py-6 text-sm md:flex-row md:items-center md:justify-between md:px-10 xl:px-[90px]">
            <p>
              © {new Date().getFullYear()} {BRAND.legalName}. {BRAND.registrationStatus}.
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              <li><Link href="/privacy-policy" className="hover:text-cream-50">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-cream-50">Terms</Link></li>
              <li><Link href="/donation-policy" className="hover:text-cream-50">Donation Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
