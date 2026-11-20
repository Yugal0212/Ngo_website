'use client'

import React from 'react'
import Link from 'next/link'
import { m } from 'framer-motion'
import { ArrowRight, Check, HandHeart, Megaphone, Users } from 'lucide-react'

import { PageShell } from '@/components/common/PageShell'
import { PageHero } from '@/components/common/PageHero'
import { InPageNav } from '@/components/common/InPageNav'
import { Container, SectionHeading } from '@/components/common/SectionHeading'
import { Button } from '@/components/common/Button'
import { IMAGES } from '@/lib/images'
import { COW_PLANS, EDU_PLANS, inr } from '@/config/site'
import { fadeUp, inView, stagger } from '@/lib/motion'

const SECTIONS = [
  { id: 'gau-seva', label: 'Gau Seva' },
  { id: 'shiksha', label: 'Shiksha' },
  { id: 'funds', label: 'How Funds Are Used' },
  { id: 'future', label: 'Future Plans' },
  { id: 'involved', label: 'Get Involved' },
]

const FUNDS = [
  { label: 'Food & fodder', pct: 70, color: 'bg-rust-600', d: 'Green fodder, dry feed and children’s meals.' },
  { label: 'Medical care', pct: 15, color: 'bg-rust-500/70', d: 'Vet visits, medicines and dressings.' },
  { label: 'Education', pct: 10, color: 'bg-sand-300', d: 'Books, uniforms and stationery kits.' },
  { label: 'Operations', pct: 5, color: 'bg-brown-800', d: 'Transport, delivery and record-keeping.' },
]

const ROADMAP = [
  { when: 'Now', title: 'Feed every family cow', items: ['Weekly fodder to supported families', 'Twice-weekly vet visits', 'Shiksha for 20 children'] },
  { when: 'Next 12 months', title: 'Grow carefully', items: ['Complete registration', 'Monthly donor photo reports', 'A small medical bay'] },
  { when: 'Later', title: 'A home for both missions', items: ['Larger shelter with water storage', 'A study centre with daily meals', 'Published annual accounts'] },
]

const WAYS = [
  { Icon: HandHeart, t: 'Donate', d: '₹200 feeds a cow for a day. Give once or monthly.', href: '/donate', cta: 'Donate' },
  { Icon: Users, t: 'Volunteer', d: 'Spend a weekend morning at the Gushala or with the children.', href: '/volunteer', cta: 'Join us' },
  { Icon: Megaphone, t: 'Spread the word', d: 'Share a photo or story — it brings in more help than you’d think.', href: '/gallery?share=1', cta: 'Share' },
]

export default function WhatWeDoPage() {
  return (
    <PageShell active="our work">
      <PageHero
        crumb="What We Do"
        title={
          <>
            Two missions, <span className="text-rust-600">one simple idea</span>: nobody gets left behind
          </>
        }
        lead="We feed cows so families can keep them, and we feed and equip children so they can stay in school."
        image={IMAGES.volunteers}
      >
        <div className="flex flex-wrap gap-3">
          <Button heart href="/donate?cause=cow">Feed a Cow</Button>
          <Button variant="outline" href="/donate?cause=education">Help a Child</Button>
        </div>
      </PageHero>

      <InPageNav items={SECTIONS} />

      <Mission
        id="gau-seva"
        eyebrow="Gau Seva — Cow Care"
        title={<>Food that keeps a cow <span className="text-rust-600">at home</span></>}
        body="Most families don’t want to give up their cow — they simply can’t afford her food once the milk stops. We cover it, so she stays with the people who love her."
        provides={['Weekly fresh green fodder and dry feed', 'Vet visits and medicines for sick or injured cows', 'Shelter at the Gushala for cows with no home', 'Winter covers, clean water and dry bedding']}
        plans={COW_PLANS}
        img={IMAGES.missionCow}
        cta={{ label: 'Feed a Cow', href: '/donate?cause=cow' }}
      />

      <Mission
        id="shiksha"
        reverse
        eyebrow="Shiksha — Education"
        title={<>A full stomach and <span className="text-rust-600">a school bag</span></>}
        body="For children whose parents can’t afford school, we provide food, a safe place to stay, stationery, books and everyday essentials."
        provides={['Daily meals for children in our programme', 'Books, uniform and a stationery kit each year', 'A quiet place to study with a mentor', 'Shared progress with parents, with consent']}
        plans={EDU_PLANS}
        img={IMAGES.tutor}
        cta={{ label: 'Help a Child', href: '/donate?cause=education' }}
      />

      {/* Funds */}
      <section id="funds" className="scroll-mt-36 bg-cream-100 py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <SectionHeading
              eyebrow="How Your Donation Is Used"
              title={<>Where ₹100 goes</>}
              lead="An estimated split based on our current running costs. We’ll publish audited figures once registration completes."
            />
            <div>
              <div className="flex h-14 overflow-hidden rounded-full" role="img" aria-label="Fund split: 70% food, 15% medical, 10% education, 5% operations">
                {FUNDS.map((f) => (
                  <m.div
                    key={f.label}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${f.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className={f.color}
                  />
                ))}
              </div>
              <dl className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2">
                {FUNDS.map((f) => (
                  <div key={f.label} className="flex gap-4">
                    <span aria-hidden className={`mt-1.5 h-3 w-3 shrink-0 rounded-full ${f.color}`} />
                    <div>
                      <dt className="flex items-baseline gap-2">
                        <span className="font-display text-2xl font-bold text-ink-900">₹{f.pct}</span>
                        <span className="font-display font-semibold text-ink-900">{f.label}</span>
                      </dt>
                      <dd className="mt-1 text-sm leading-[1.6] text-ink-500">{f.d}</dd>
                    </div>
                  </div>
                ))}
              </dl>
              <p className="mt-8 text-xs text-ink-500">Estimated running split — audited figures published upon registration completion.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Future */}
      <section id="future" className="scroll-mt-36 py-16 md:py-24">
        <Container>
          <SectionHeading eyebrow="Future Plans" title="What we’re working towards" />
          <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-0">
            {ROADMAP.map((r, i) => (
              <li key={r.when} className={`relative md:px-8 ${i ? 'md:border-l md:border-line' : 'md:pl-0'}`}>
                <span className={`inline-flex rounded-full px-3 py-1 font-display text-xs font-bold ${i === 0 ? 'bg-rust-600 text-white' : 'bg-peach-100 text-rust-700'}`}>
                  {r.when}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink-900 md:text-2xl">{r.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {r.items.map((it) => (
                    <li key={it} className="flex gap-2.5 text-[15px] text-ink-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-leaf-600" aria-hidden />
                      {it}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Get involved */}
      <section id="involved" className="scroll-mt-36 pb-20 md:pb-28">
        <Container>
          <div className="rounded-[32px] bg-brown-900 p-7 text-cream-50 md:rounded-[48px_48px_48px_140px] md:p-14">
            <SectionHeading light eyebrow="Get Involved" title="Three ways to help today" />
            <ul className="mt-10 divide-y divide-peach-200/15 border-y border-peach-200/15">
              {WAYS.map(({ Icon, t, d, href, cta }) => (
                <li key={t}>
                  <Link href={href} className="group grid items-center gap-4 py-6 sm:grid-cols-[56px_1fr_auto] sm:gap-6">
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-brown-800 text-peach-200">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <span>
                      <span className="block font-display text-xl font-semibold">{t}</span>
                      <span className="mt-1 block text-[15px] text-peach-200">{d}</span>
                    </span>
                    <span className="inline-flex items-center gap-2 font-display font-semibold text-peach-200 group-hover:text-cream-50">
                      {cta}
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" aria-hidden />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </PageShell>
  )
}

function Mission({
  id,
  eyebrow,
  title,
  body,
  provides,
  plans,
  img,
  cta,
  reverse,
}: {
  id: string
  eyebrow: string
  title: React.ReactNode
  body: string
  provides: string[]
  plans: { id: string; label: string; amount: number; does: string }[]
  img: { src: string; alt: string; w: number; h: number }
  cta: { label: string; href: string }
  reverse?: boolean
}) {
  return (
    <section id={id} className="scroll-mt-36 py-16 md:py-24">
      <m.div initial="hidden" whileInView="show" viewport={inView} variants={stagger}>
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <m.div variants={fadeUp} className={`relative ${reverse ? 'lg:order-2' : ''}`}>
            <div aria-hidden className={`absolute -bottom-4 h-2/3 w-1/2 rounded-[40px] bg-sand-200 ${reverse ? '-right-4' : '-left-4'}`} />
            <div className={`relative aspect-[4/3] overflow-hidden shadow-soft ${reverse ? 'rounded-[28px_140px_28px_28px]' : 'rounded-[140px_28px_28px_28px]'}`}>
              <img src={img.src} alt={img.alt} width={img.w} height={img.h} loading="lazy" className="h-full w-full object-cover" />
            </div>
          </m.div>
          <m.div variants={fadeUp} className="min-w-0">
            <SectionHeading eyebrow={eyebrow} title={title} lead={body} />
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {provides.map((p) => (
                <li key={p} className="flex gap-2.5 text-[15px] leading-snug text-ink-700">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-peach-100">
                    <Check className="h-3 w-3 text-rust-600" strokeWidth={3} aria-hidden />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl bg-cream-100 p-5">
              <p className="text-sm font-medium text-ink-500">What your gift does</p>
              <dl className="mt-3 grid grid-cols-2 gap-x-6 gap-y-3">
                {plans.map((p) => (
                  <div key={p.id}>
                    <dt className="font-display font-bold text-ink-900">{inr(p.amount)}</dt>
                    <dd className="text-xs leading-snug text-ink-500">{p.does}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="mt-8">
              <Button heart href={cta.href}>{cta.label}</Button>
            </div>
          </m.div>
        </Container>
      </m.div>
    </section>
  )
}
