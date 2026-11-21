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
import { inr } from '@/config/site'
import { fadeUp, inView, stagger } from '@/lib/motion'
import { useLanguage } from '@/context/LanguageContext'

const SECTIONS_EN = [
  { id: 'gau-seva', label: 'Gau Seva' },
  { id: 'shiksha', label: 'Shiksha' },
  { id: 'funds', label: 'How Funds Are Used' },
  { id: 'future', label: 'Future Plans' },
  { id: 'involved', label: 'Get Involved' },
]

const SECTIONS_GU = [
  { id: 'gau-seva', label: 'ગૌસેવા' },
  { id: 'shiksha', label: 'શિક્ષા' },
  { id: 'funds', label: 'દાનનો સદ્ઉપયોગ' },
  { id: 'future', label: 'ભાવિ સંકલ્પ' },
  { id: 'involved', label: 'સેવા સહયોગ' },
]

const FUNDS_EN = [
  { label: 'Food & fodder', pct: 70, color: 'bg-rust-600', d: 'Green fodder, dry feed and children’s meals.' },
  { label: 'Medical care', pct: 15, color: 'bg-rust-500/70', d: 'Vet visits, medicines and dressings.' },
  { label: 'Education', pct: 10, color: 'bg-sand-300', d: 'Books, uniforms and stationery kits.' },
  { label: 'Operations', pct: 5, color: 'bg-brown-800', d: 'Transport, delivery and record-keeping.' },
]

const FUNDS_GU = [
  { label: 'ઘાસચારો અને ભોજન', pct: 70, color: 'bg-rust-600', d: 'લીલો ઘાસચારો, પશુઆહાર અને બાળકોનું પૌષ્ટિક ભોજન.' },
  { label: 'ચિકિત્સા અને ઔષધિ', pct: 15, color: 'bg-rust-500/70', d: 'પશુચિકિત્સક મુલાકાત, દવાઓ, પાટાપીંડી અને ઇલાજ.' },
  { label: 'શૈક્ષણિક સામગ્રી', pct: 10, color: 'bg-sand-300', d: 'પુસ્તકો, ગણવેશ, સ્કૂલ બેગ અને સ્ટેશનરી કિટ.' },
  { label: 'વિતરણ અને વહીવટ', pct: 5, color: 'bg-brown-800', d: 'ઘાસચારા ટ્રાન્સપોર્ટ, ડિલિવરી અને પારદર્શક રેકોર્ડ.' },
]

const ROADMAP_EN = [
  { when: 'Now', title: 'Feed every family cow', items: ['Weekly fodder to supported families', 'Twice-weekly vet visits', 'Shiksha for 20 children'] },
  { when: 'Next 12 months', title: 'Grow carefully', items: ['Complete registration', 'Monthly donor photo reports', 'A small medical bay'] },
  { when: 'Later', title: 'A home for both missions', items: ['Larger shelter with water storage', 'A study centre with daily meals', 'Published annual accounts'] },
]

const ROADMAP_GU = [
  { when: 'વર્તમાન સેવા', title: 'દરેક પરિવારની ગાયને આહાર', items: ['પરિવારોને સાપ્તાહિક લીલો ઘાસચારો', 'અઠવાડિયે ૨ વાર પશુચિકિત્સક તપાસ', '૨૦ બાળકોને દૈનિક શિક્ષણ અને ભોજન'] },
  { when: 'આગામી ૧૨ મહિના', title: 'સંકલ્પ વિસ્તરણ', items: ['સંસ્થા નોંધણી પ્રક્રિયા પૂર્ણ કરવી', 'દાતાઓને માસિક તસવીરી અહેવાલ', 'ગૌશાળામાં નાની સારવાર હોસ્પિટલ'] },
  { when: 'ભાવિ આયોજન', title: 'કાયમી સેવા સંકુલ', items: ['મોટો ગૌઆશ્રય અને જળ સંગ્રહ', 'બાળકો માટે નિઃશુલ્ક અભ્યાસ કેન્દ્ર', 'ઓડિટ કરાયેલા વાર્ષિક અહેવાલોનું પ્રકાશન'] },
]

export default function WhatWeDoPage() {
  const { t, isGu } = useLanguage()

  const sections = isGu ? SECTIONS_GU : SECTIONS_EN
  const funds = isGu ? FUNDS_GU : FUNDS_EN
  const roadmap = isGu ? ROADMAP_GU : ROADMAP_EN

  const ways = [
    {
      Icon: HandHeart,
      t: isGu ? 'દાન આપો' : 'Donate',
      d: isGu ? '₹૨૦૦ માં એક ગૌમાતાને આખો દિવસ લીલો ઘાસચારો મળે છે. એક વાર અથવા માસિક સહયોગ આપો.' : '₹200 feeds a cow for a day. Give once or monthly.',
      href: '/donate',
      cta: isGu ? 'દાન કરો' : 'Donate',
    },
    {
      Icon: Users,
      t: isGu ? 'સ્વયંસેવક બનો' : 'Volunteer',
      d: isGu ? 'શનિ-રવિની એક સવાર ગૌશાળામાં અથવા બાળકો સાથે વિતાવો.' : 'Spend a weekend morning at the Gushala or with the children.',
      href: '/volunteer',
      cta: isGu ? 'જોડાઓ' : 'Join us',
    },
    {
      Icon: Megaphone,
      t: isGu ? 'સંદેશ વહેંચો' : 'Spread the word',
      d: isGu ? 'ગૌસેવાની તસવીર કે પ્રેરક વાત શેર કરો — આપની એક પોસ્ટથી ઘણો સહયોગ મળી શકે છે.' : 'Share a photo or story — it brings in more help than you’d think.',
      href: '/gallery?share=1',
      cta: isGu ? 'શેર કરો' : 'Share',
    },
  ]

  const cowProvides = isGu
    ? ['સાપ્તાહિક તાજો લીલો ઘાસચારો અને ખોળ', 'બીમાર ગાયો માટે પશુચિકિત્સક અને દવાઓ', 'નિરાધાર ગાયો માટે ગૌશાળામાં આજીવન આશ્રય', 'શિયાળામાં કંતાન કવર, સ્વચ્છ જળ અને પથારી']
    : ['Weekly fresh green fodder and dry feed', 'Vet visits and medicines for sick or injured cows', 'Shelter at the Gushala for cows with no home', 'Winter covers, clean water and dry bedding']

  const eduProvides = isGu
    ? ['કાર્યક્રમમાં જોડાયેલા બાળકો માટે દૈનિક પૌષ્ટિક ભોજન', 'વાર્ષિક પુસ્તકો, સ્કૂલ યુનિફોર્મ અને સ્ટેશનરી કિટ', 'શિક્ષક-માર્ગદર્શક સાથે અભ્યાસ માટે શાંત જગ્યા', 'વાલીઓની સંમતિ સાથે બાળકની પ્રગતિનો પારદર્શક રિપોર્ટ']
    : ['Daily meals for children in our programme', 'Books, uniform and a stationery kit each year', 'A quiet place to study with a mentor', 'Shared progress with parents, with consent']

  return (
    <PageShell active="our work">
      <PageHero
        crumb={isGu ? 'સેવા કાર્યો' : 'What We Do'}
        title={
          isGu ? (
            <>
              બે પવિત્ર સંકલ્પ, <span className="text-rust-600">એક સરળ વિચાર</span>: કોઈ અબોલ જીવ કે બાળક નિરાધાર ન રહે
            </>
          ) : (
            <>
              Two missions, <span className="text-rust-600">one simple idea</span>: nobody gets left behind
            </>
          )
        }
        lead={
          isGu
            ? 'અમે ગાયોને ઘાસચારો પહોંચાડીએ છીએ જેથી પરિવાર તેને ઘરે જ રાખી શકે, અને જરૂરિયાતમંદ બાળકોને ભોજન તથા શિક્ષણ આપીએ છીએ જેથી તેઓ શાળાએ જઈ શકે.'
            : 'We feed cows so families can keep them, and we feed and equip children so they can stay in school.'
        }
        image={IMAGES.volunteers}
      >
        <div className="flex flex-wrap gap-2.5 sm:gap-3">
          <Button heart href="/donate?cause=cow" className="!h-11 sm:!h-12 text-xs sm:text-sm">
            {isGu ? 'ગૌમાતાને આહાર આપો' : 'Feed a Cow'}
          </Button>
          <Button variant="outline" href="/donate?cause=education" className="!h-11 sm:!h-12 text-xs sm:text-sm">
            {isGu ? 'બાળકને શિક્ષણ આપો' : 'Help a Child'}
          </Button>
        </div>
      </PageHero>

      <InPageNav items={sections} />

      <Mission
        id="gau-seva"
        eyebrow={isGu ? 'ગૌસેવા — ગૌમાતાનું જતન' : 'Gau Seva — Cow Care'}
        title={
          isGu ? (
            <>
              ગૌમાતાને ઘરમાં જ <span className="text-rust-600">આહાર મળે</span>
            </>
          ) : (
            <>
              Food that keeps a cow <span className="text-rust-600">at home</span>
            </>
          )
        }
        body={
          isGu
            ? 'મોટાભાગના પરિવારો પોતાની ગાયને છોડવા માંગતા નથી — દૂધ બંધ થતાં તેઓ ઘાસચારાનો ખર્ચ ઉઠાવી શકતા નથી. અમે આ ખર્ચ ઉઠાવીએ છીએ, જેથી ગાય પોતાના પરિચિત સ્વજનો સાથે જ રહી શકે.'
            : 'Most families don’t want to give up their cow — they simply can’t afford her food once the milk stops. We cover it, so she stays with the people who love her.'
        }
        provides={cowProvides}
        plans={t.quickDonate.cowPlans}
        img={IMAGES.missionCow}
        cta={{ label: isGu ? 'ગૌસેવામાં સહયોગ આપો' : 'Feed a Cow', href: '/donate?cause=cow' }}
        isGu={isGu}
      />

      <Mission
        id="shiksha"
        reverse
        eyebrow={isGu ? 'શિક્ષા — બાળ શિક્ષણ' : 'Shiksha — Education'}
        title={
          isGu ? (
            <>
              ભરપેટ ભોજન અને <span className="text-rust-600">સ્કૂલ બેગ</span>
            </>
          ) : (
            <>
              A full stomach and <span className="text-rust-600">a school bag</span>
            </>
          )
        }
        body={
          isGu
            ? 'જે બાળકોના વાલીઓ શાળાનો ખર્ચ ઉઠાવી શકતા નથી, તેમને અમે ભોજન, સુરક્ષિત વાતાવરણ, સ્ટેશનરી, પુસ્તકો અને જરૂરી સાધનસામગ્રી પૂરી પાડીએ છીએ.'
            : 'For children whose parents can’t afford school, we provide food, a safe place to stay, stationery, books and everyday essentials.'
        }
        provides={eduProvides}
        plans={t.quickDonate.eduPlans}
        img={IMAGES.tutor}
        cta={{ label: isGu ? 'શિક્ષણમાં સહાય કરો' : 'Help a Child', href: '/donate?cause=education' }}
        isGu={isGu}
      />

      {/* Funds */}
      <section id="funds" className="scroll-mt-36 bg-cream-100 py-12 sm:py-16 md:py-24">
        <Container>
          <div className="grid gap-8 sm:gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <SectionHeading
              eyebrow={isGu ? 'દાનની રકમનો સદ્ઉપયોગ' : 'How Your Donation Is Used'}
              title={isGu ? <>આપના ₹૧૦૦ ક્યાં વપરાય છે?</> : <>Where ₹100 goes</>}
              lead={
                isGu
                  ? 'વર્તમાન સેવા ખર્ચ પર આધારિત અંદાજિત વિભાજન. સંસ્થા નોંધણી પૂર્ણ થતાં ઓડિટ થયેલ સત્તાવાર હિસાબ પ્રકાશિત કરવામાં આવશે.'
                  : 'An estimated split based on our current running costs. We’ll publish audited figures once registration completes.'
              }
            />
            <div>
              <div className="flex h-12 sm:h-14 overflow-hidden rounded-full shadow-inner" role="img" aria-label="Fund split">
                {funds.map((f) => (
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
              <dl className="mt-6 sm:mt-8 grid gap-x-8 gap-y-4 sm:gap-y-6 sm:grid-cols-2">
                {funds.map((f) => (
                  <div key={f.label} className="flex gap-3 sm:gap-4">
                    <span aria-hidden className={`mt-1 h-3 w-3 shrink-0 rounded-full ${f.color}`} />
                    <div>
                      <dt className="flex items-baseline gap-2">
                        <span className="font-display text-base sm:text-lg font-bold text-ink-900">{f.label}</span>
                        <span className="text-xs sm:text-sm font-bold text-rust-600">{f.pct}%</span>
                      </dt>
                      <dd className="mt-0.5 text-xs sm:text-sm text-ink-600 leading-relaxed">{f.d}</dd>
                    </div>
                  </div>
                ))}
              </dl>
              <p className="mt-6 sm:mt-8 text-[11px] sm:text-xs text-ink-500">
                {isGu
                  ? 'અંદાજિત માસિક સંચાલન ખર્ચ — સત્તાવાર ઓડિટ રિપોર્ટ નોંધણી પૂર્ણ થતાં ઉપલબ્ધ કરાશે.'
                  : 'Estimated running split — audited figures published upon registration completion.'}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Future */}
      <section id="future" className="scroll-mt-36 py-12 sm:py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow={isGu ? 'ભાવિ સંકલ્પ' : 'Future Plans'}
            title={isGu ? 'અમે જેના માટે પ્રયત્નશીલ છીએ' : 'What we’re working towards'}
          />
          <ol className="mt-8 sm:mt-12 grid gap-6 sm:gap-8 md:grid-cols-3 md:gap-0">
            {roadmap.map((r, i) => (
              <li key={r.when} className={`relative md:px-8 ${i ? 'md:border-l md:border-line' : 'md:pl-0'}`}>
                <span className={`inline-flex rounded-full px-3 py-1 font-display text-xs font-bold ${
                  i === 0 ? 'bg-rust-600 text-white' : 'bg-peach-100 text-rust-700'
                }`}>
                  {r.when}
                </span>
                <h3 className="mt-3.5 font-display text-lg sm:text-xl font-bold text-ink-900 md:text-2xl">{r.title}</h3>
                <ul className="mt-3.5 space-y-2">
                  {r.items.map((it) => (
                    <li key={it} className="flex gap-2 text-xs sm:text-[15px] text-ink-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-leaf-600" aria-hidden />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Get involved */}
      <section id="involved" className="scroll-mt-36 pb-16 sm:pb-20 md:pb-28">
        <Container>
          <div className="rounded-[24px] sm:rounded-[32px] bg-brown-900 p-6 sm:p-10 text-cream-50 md:rounded-[48px_48px_48px_140px] md:p-14">
            <SectionHeading
              light
              eyebrow={isGu ? 'સેવા સહયોગ' : 'Get Involved'}
              title={isGu ? 'આજે જ મદદ કરવાના ત્રણ રસ્તા' : 'Three ways to help today'}
            />
            <ul className="mt-6 sm:mt-10 divide-y divide-peach-200/15 border-y border-peach-200/15">
              {ways.map(({ Icon, t: wayTitle, d, href, cta }) => (
                <li key={wayTitle}>
                  <Link href={href} className="group grid items-center gap-3 sm:gap-4 py-5 sm:py-6 sm:grid-cols-[56px_1fr_auto]">
                    <span className="grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-full bg-brown-800 text-peach-200">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
                    </span>
                    <div>
                      <span className="block font-display text-lg sm:text-xl font-bold">{wayTitle}</span>
                      <span className="mt-1 block text-xs sm:text-[15px] text-peach-200/90 leading-relaxed">{d}</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 font-display text-xs sm:text-sm font-bold text-peach-200 group-hover:text-cream-50">
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
  isGu,
}: {
  id: string
  eyebrow: string
  title: React.ReactNode
  body: string
  provides: string[]
  plans: readonly { id: string; label: string; amount: number; does: string }[]
  img: { src: string; alt: string; w: number; h: number }
  cta: { label: string; href: string }
  reverse?: boolean
  isGu?: boolean
}) {
  return (
    <section id={id} className="scroll-mt-36 py-12 sm:py-16 md:py-24">
      <m.div initial="hidden" whileInView="show" viewport={inView} variants={stagger}>
        <Container className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20">
          <m.div variants={fadeUp} className={`relative ${reverse ? 'lg:order-2' : ''} max-w-[460px] mx-auto lg:max-w-none`}>
            <div aria-hidden className={`absolute -bottom-4 h-2/3 w-1/2 rounded-[32px] sm:rounded-[40px] bg-sand-200 ${reverse ? '-right-4' : '-left-4'}`} />
            <div className={`relative aspect-[4/3] overflow-hidden shadow-soft ${
              reverse ? 'rounded-[24px_80px_24px_24px] sm:rounded-[28px_140px_28px_28px]' : 'rounded-[80px_24px_24px_24px] sm:rounded-[140px_28px_28px_28px]'
            }`}>
              <img src={img.src} alt={img.alt} width={img.w} height={img.h} loading="lazy" className="h-full w-full object-cover" />
            </div>
          </m.div>
          <m.div variants={fadeUp} className="min-w-0">
            <SectionHeading eyebrow={eyebrow} title={title} lead={body} />
            <ul className="mt-5 sm:mt-6 grid gap-2.5 sm:grid-cols-2">
              {provides.map((p) => (
                <li key={p} className="flex gap-2 text-xs sm:text-[14px] leading-snug text-ink-700">
                  <span className="mt-0.5 grid h-4 w-4 sm:h-5 sm:w-5 shrink-0 place-items-center rounded-full bg-peach-100">
                    <Check className="h-3 w-3 text-rust-600 stroke-[3]" aria-hidden />
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 sm:mt-8 rounded-2xl bg-cream-100 p-4 sm:p-5 border border-line/50">
              <p className="text-xs sm:text-sm font-bold text-ink-700">
                {isGu ? 'આપના દાનથી શું શક્ય બને છે?' : 'What your gift does'}
              </p>
              <dl className="mt-3 grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-3">
                {plans.map((p) => (
                  <div key={p.id}>
                    <dt className="font-display font-bold text-sm sm:text-base text-ink-900">{inr(p.amount)}</dt>
                    <dd className="text-xs leading-snug text-ink-600">{p.does}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="mt-6 sm:mt-8">
              <Button heart href={cta.href} className="!h-11 sm:!h-12 text-xs sm:text-sm">{cta.label}</Button>
            </div>
          </m.div>
        </Container>
      </m.div>
    </section>
  )
}
