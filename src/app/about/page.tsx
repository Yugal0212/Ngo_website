'use client'

import React from 'react'
import { m } from 'framer-motion'
import { ArrowRight, Eye, HeartHandshake, Quote, Sprout, Target } from 'lucide-react'

import { PageShell } from '@/components/common/PageShell'
import { PageHero } from '@/components/common/PageHero'
import { Container, SectionHeading } from '@/components/common/SectionHeading'
import { Button } from '@/components/common/Button'
import { WaveDivider } from '@/components/common/WaveDivider'
import { IMAGES } from '@/lib/images'
import { BRAND } from '@/config/site'
import { fadeUp, inView, stagger } from '@/lib/motion'

const JUMP = [
  ['Story', 'story'],
  ['Problem', 'problem'],
  ['Vision', 'vision'],
  ['Team', 'team'],
  ['Journey', 'journey'],
]

const VALUES = [
  { t: 'Compassion', d: 'Every cow has a name. Every child has a story. We treat both that way.' },
  { t: 'Honesty', d: 'No inflated numbers, no claims we can’t back up. Registration in progress means exactly that.' },
  { t: 'Family first', d: 'A cow is happiest in the home she knows. We help families keep her there.' },
  { t: 'Every rupee counts', d: 'We share where the money goes, down to the fodder bill.' },
]

const TEAM = [
  { initials: 'OW', name: BRAND.founder, role: 'Founder' },
  { initials: 'GC', name: '[Name]', role: 'Gushala caretaker' },
  { initials: 'SC', name: '[Name]', role: 'Shiksha coordinator' },
  { initials: 'VL', name: '[Name]', role: 'Volunteer lead' },
]

const JOURNEY = [
  { year: '2017', title: 'The first bundle of fodder', body: 'Our founder begins feeding an abandoned cow near the market — every single morning.' },
  { year: '2019', title: 'A small shed', body: 'With neighbours’ help, a simple shelter goes up for cows with nowhere to go.' },
  { year: '2022', title: 'Food for family cows', body: 'We start delivering fodder to families so they can keep their cows at home.' },
  { year: '2024', title: 'Shiksha begins', body: 'Meals, books and stationery for children whose parents can’t afford school.' },
  { year: '2025', title: 'Registering Positivity Donation', body: 'Formal registration of our organisation is underway. We’ll share details once approved.', pending: true },
]

export default function AboutPage() {
  return (
    <PageShell active="about">
      <PageHero
        crumb="About"
        eyebrow="Our story since 2017"
        title={
          <>
            A promise that began with <span className="text-rust-600">one hungry cow</span>
          </>
        }
        lead="GauSeva is the public face of Positivity Donation — a small, family-run effort to keep cows fed and loved, and to keep children in school."
        image={IMAGES.shelter}
      >
        <nav aria-label="On this page" className="flex flex-wrap gap-2">
          {JUMP.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="inline-flex h-10 items-center rounded-full border border-line px-4 text-sm font-medium text-ink-900 transition-[background-color,border-color] duration-150 ease-out hover:border-rust-600/40 hover:bg-peach-100"
            >
              {label}
            </a>
          ))}
        </nav>
      </PageHero>

      {/* Story */}
      <section id="story" className="scroll-mt-24 py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative mr-6 pb-6 pl-6">
              <div aria-hidden className="absolute bottom-0 left-0 h-[70%] w-[70%] rounded-[40px_12px_40px_12px] bg-sand-200" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[40px_12px_40px_12px] shadow-soft">
                <img
                  src={IMAGES.founder.src}
                  alt={IMAGES.founder.alt}
                  width={IMAGES.founder.w}
                  height={IMAGES.founder.h}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
          <m.div initial="hidden" whileInView="show" viewport={inView} variants={stagger} className="min-w-0">
            <m.div variants={fadeUp}>
              <SectionHeading eyebrow="The Founder’s Story" title={<>Seven years of mornings, <span className="text-rust-600">one bundle at a time</span></>} />
            </m.div>
            <m.p variants={fadeUp} className="mt-6 text-base leading-[1.75] text-ink-700 md:text-lg">
              {BRAND.founder} grew up with cows at home. Years later, walking past the market, he saw an old cow standing in the rain, ribs showing, a faded tilak still on her forehead. Someone had loved her once.
            </m.p>
            <m.p variants={fadeUp} className="mt-5 text-base leading-[1.75] text-ink-700 md:text-lg">
              The next morning he came back with a bundle of green fodder. Then the next morning. And the next. That was 2017 — and he hasn’t missed many mornings since.
            </m.p>
            <m.figure variants={fadeUp} className="my-10 border-l-[3px] border-rust-600 pl-6 md:pl-8">
              <Quote className="h-7 w-7 fill-rust-600/15 text-rust-600" aria-hidden />
              <blockquote className="mt-3 font-display text-[22px] font-semibold leading-[1.4] text-ink-900 md:text-[28px]">
                “A cow gives to a family for years. When she grows old, the least we can give back is a full stomach and a place to rest.”
              </blockquote>
              <figcaption className="mt-4 text-sm text-ink-500">— {BRAND.founder}, Founder</figcaption>
            </m.figure>
            <m.p variants={fadeUp} className="text-base leading-[1.75] text-ink-700 md:text-lg">
              Neighbours began to join in. A small shed went up. Families who could no longer feed their own cows started to ask for help — and that is where our heartfelt idea was born.
            </m.p>
          </m.div>
        </Container>
      </section>

      {/* Problem → Solution */}
      <section id="problem" className="scroll-mt-24">
        <WaveDivider />
        <div className="bg-brown-900 py-16 text-cream-50 md:py-24">
          <Container>
            <SectionHeading light eyebrow="The Problem & Our Answer" title="Old cows aren’t abandoned out of cruelty. It’s cost." />
            <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr]">
              <div className="rounded-3xl border border-peach-200/20 p-7 md:p-9">
                <p className="font-display text-sm font-semibold text-peach-200">The problem</p>
                <p className="mt-3 font-display text-xl font-semibold leading-[1.35] md:text-2xl">
                  When milk stops, feeding a cow costs a family ~₹6,000 a month with nothing in return.
                </p>
                <ul className="mt-6 space-y-3 text-[15px] text-peach-200">
                  <li>— Daily-wage families can’t carry the cost</li>
                  <li>— Cows are left on roads, near markets and highways</li>
                  <li>— Many suffer injuries, plastic ingestion and hunger</li>
                </ul>
              </div>
              <div aria-hidden className="grid place-items-center">
                <span className="grid h-14 w-14 rotate-90 place-items-center rounded-full bg-rust-600 lg:rotate-0">
                  <ArrowRight className="h-6 w-6" />
                </span>
              </div>
              <div id="solution" className="scroll-mt-24 rounded-3xl bg-cream-50 p-7 text-ink-900 md:p-9">
                <p className="font-display text-sm font-semibold text-rust-600">Our answer</p>
                <p className="mt-3 font-display text-xl font-semibold leading-[1.35] md:text-2xl">
                  We pay for the food. The family keeps the cow at home, as family.
                </p>
                <ul className="mt-6 space-y-3 text-[15px] text-ink-700">
                  <li>— Weekly fresh fodder delivered to the door</li>
                  <li>— Vet visits for sick and injured cows</li>
                  <li>— Shelter at the Gushala for cows with no home</li>
                </ul>
              </div>
            </div>
          </Container>
        </div>
        <WaveDivider className="-mt-px rotate-180" />
      </section>

      {/* Second mission */}
      <section className="py-16 md:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <SectionHeading
              eyebrow="Our Second Mission — Shiksha"
              title={<>While feeding cows, we kept meeting <span className="text-rust-600">children out of school</span></>}
              lead="So we started a second promise: food, a safe place to stay, books, stationery and the everyday essentials that keep a child learning."
            />
            <div className="mt-8">
              <Button href="/what-we-do#shiksha" variant="outline">See how Shiksha works</Button>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div aria-hidden className="absolute -right-3 -top-3 h-2/3 w-1/2 rounded-[40px] bg-peach-100" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px_28px_28px_120px] shadow-soft">
              <img
                src={IMAGES.kidsMeal.src}
                alt={IMAGES.kidsMeal.alt}
                width={IMAGES.kidsMeal.w}
                height={IMAGES.kidsMeal.h}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Vision / Mission / Values */}
      <section id="vision" className="scroll-mt-24 bg-cream-100 py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
            <div>
              <p className="flex items-center gap-2 font-display text-[15px] font-semibold text-rust-600">
                <Eye className="h-4 w-4" aria-hidden /> Our Vision
              </p>
              <p className="mt-4 font-display text-[28px] font-bold leading-[1.2] text-ink-900 md:text-[40px]">
                A village where no cow is abandoned for growing old, and no child leaves school hungry.
              </p>
              <p className="mt-8 flex items-center gap-2 font-display text-[15px] font-semibold text-rust-600">
                <Target className="h-4 w-4" aria-hidden /> Our Mission
              </p>
              <p className="mt-3 max-w-[560px] text-base leading-[1.7] text-ink-700 md:text-lg">
                Feed and care for cows — ideally in the homes they already know — and support children from struggling families with food, stay and school essentials.
              </p>
            </div>
            <div>
              <p className="flex items-center gap-2 font-display text-[15px] font-semibold text-rust-600">
                <HeartHandshake className="h-4 w-4" aria-hidden /> What we hold to
              </p>
              <dl className="mt-4 divide-y divide-line border-y border-line">
                {VALUES.map((v) => (
                  <div key={v.t} className="grid gap-1 py-5 sm:grid-cols-[140px_1fr] sm:gap-6">
                    <dt className="font-display font-semibold text-ink-900">{v.t}</dt>
                    <dd className="text-[15px] leading-[1.6] text-ink-700">{v.d}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* Team */}
      <section id="team" className="scroll-mt-24 py-16 md:py-24">
        <Container>
          <SectionHeading eyebrow="The People" title="A small team, a lot of heart" lead="Everyone here started as a volunteer." />
          <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
            {TEAM.map((p, i) => (
              <li key={p.role}>
                <div
                  className={`grid aspect-square place-items-center bg-peach-100 font-display text-3xl font-bold text-rust-600 ${
                    i % 2 ? 'rounded-[28px_80px_28px_28px]' : 'rounded-[80px_28px_28px_28px]'
                  }`}
                >
                  {p.initials}
                </div>
                <p className="mt-4 font-display font-semibold text-ink-900">{p.name}</p>
                <p className="text-sm text-ink-500">{p.role}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-ink-500">Photos and names to be added with consent.</p>
        </Container>
      </section>

      {/* Journey */}
      <section id="journey" className="scroll-mt-24 pb-20 md:pb-28">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading eyebrow="Our Journey" title="Small steps, every year" lead="We’d rather show you honest progress than big claims." />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button heart href="/donate">Donate</Button>
              <Button variant="outline" href="/what-we-do">Our Work</Button>
              <Button variant="outline" href="/contact?tab=volunteer">Volunteer</Button>
            </div>
          </div>
          <ol className="relative border-l-2 border-dashed border-sand-300 pl-8 md:pl-10">
            {JOURNEY.map((j) => (
              <m.li key={j.year} initial="hidden" whileInView="show" viewport={inView} variants={fadeUp} className="relative pb-10 last:pb-0">
                <span
                  aria-hidden
                  className={`absolute -left-[42px] top-1 grid h-5 w-5 place-items-center rounded-full ring-4 ring-cream-50 md:-left-[50px] ${
                    j.pending ? 'bg-sand-300' : 'bg-rust-600'
                  }`}
                >
                  {j.pending && <Sprout className="h-3 w-3 text-rust-700" />}
                </span>
                <p className="font-display text-sm font-bold text-rust-600">{j.year}</p>
                <h3 className="mt-1 font-display text-xl font-semibold text-ink-900">{j.title}</h3>
                <p className="mt-2 max-w-[520px] text-[15px] leading-[1.65] text-ink-700">{j.body}</p>
                {j.pending && (
                  <span className="mt-3 inline-flex rounded-full bg-peach-100 px-3 py-1 text-xs font-semibold text-rust-700">
                    In progress
                  </span>
                )}
              </m.li>
            ))}
          </ol>
        </Container>
      </section>
    </PageShell>
  )
}
