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
import { useLanguage } from '@/context/LanguageContext'

const JUMP_EN = [
  ['Story', 'story'],
  ['Problem', 'problem'],
  ['Vision', 'vision'],
  ['Team', 'team'],
  ['Journey', 'journey'],
]

const JUMP_GU = [
  ['સેવા કથા', 'story'],
  ['સમસ્યા અને ઉકેલ', 'problem'],
  ['સંકલ્પ અને મૂલ્યો', 'vision'],
  ['સેવા ટીમ', 'team'],
  ['સેવા યાત્રા', 'journey'],
]

const VALUES_EN = [
  { t: 'Compassion', d: 'Every cow has a name. Every child has a story. We treat both that way.' },
  { t: 'Honesty', d: 'No inflated numbers, no claims we can’t back up. Registration in progress means exactly that.' },
  { t: 'Family first', d: 'A cow is happiest in the home she knows. We help families keep her there.' },
  { t: 'Every rupee counts', d: 'We share where the money goes, down to the fodder bill.' },
]

const VALUES_GU = [
  { t: 'જીવદયા અને કરુણા', d: 'દરેક ગૌમાતાનું નામ છે, દરેક બાળકની કહાણી છે. અમે બંનેને પરિવારજન માનીએ છીએ.' },
  { t: 'સંપૂર્ણ પારદર્શિતા', d: 'કોઈ ખોટા આંકડા નહીં, કોઈ વધારાના દાવા નહીં. સંસ્થા નોંધણી પ્રક્રિયા ચાલુ છે તે અમે પ્રમાણિકતાથી જણાવીએ છીએ.' },
  { t: 'પરિવારનું સન્માન', d: 'ગાય પોતાના પરિવાર સાથે જ સૌથી વધુ સુખી રહે છે. અમે પરિવારોને આર્થિક સહાય આપી ગાય ઘરમાં જ રહે તેવો પ્રયાસ કરીએ છીએ.' },
  { t: 'દરેક રૂપિયો પવિત્ર', d: 'ઘાસચારાના એક-એક રૂપિયાનો હિસાબ અને સદ્ઉપયોગ દાતાઓને પારદર્શક રીતે જણાવીએ છીએ.' },
]

const JOURNEY_EN = [
  { year: '2017', title: 'The first bundle of fodder', body: 'Our founder begins feeding an abandoned cow near the market — every single morning.' },
  { year: '2019', title: 'A small shed', body: 'With neighbours’ help, a simple shelter goes up for cows with nowhere to go.' },
  { year: '2022', title: 'Food for family cows', body: 'We start delivering fodder to families so they can keep their cows at home.' },
  { year: '2024', title: 'Shiksha begins', body: 'Meals, books and stationery for children whose parents can’t afford school.' },
  { year: '2025', title: 'Registering Positivity Donation', body: 'Formal registration of our organisation is underway. We’ll share details once approved.', pending: true },
]

const JOURNEY_GU = [
  { year: '૨૦૧૭', title: 'ઘાસચારાનો પ્રથમ પૂળો', body: 'સંસ્થાપકે બજાર પાસે એક ભૂખી તરછોડાયેલી ગાયને રોજ સવારે પ્રેમથી ઘાસ નીરવાનું શરૂ કર્યું.' },
  { year: '૨૦૧૯', title: 'નાની ગૌશાળાનું નિર્માણ', body: 'ગ્રામજનોના સહયોગથી નિરાધાર ગાયો માટે એક સુરક્ષિત છાંયડાવાળી ગૌશાળા ઊભી કરવામાં આવી.' },
  { year: '૨૦૨૨', title: 'ઘરબેઠા ઘાસચારા વિતરણ', body: 'ગરીબ પરિવારો ગાયને ઘરમાં જ સાચવી શકે તે માટે દર અઠવાડિયે મફત લીલો ઘાસચારો પહોંચાડવાનું શરૂ કર્યું.' },
  { year: '૨૦૨૪', title: 'શિક્ષા પ્રોજેક્ટનો પ્રારંભ', body: 'ગરીબીને કારણે શાળા છોડી દેતા બાળકો માટે દૈનિક પૌષ્ટિક ભોજન, પુસ્તકો અને યુનિફોર્મ સહાય શરૂ કરી.' },
  { year: '૨૦૨૫', title: 'સંસ્થા નોંધણી (પોઝિટિવિટી ડોનેશન)', body: 'ટ્રસ્ટની સત્તાવાર નોંધણી પ્રક્રિયા અંતિમ તબક્કામાં છે. મંજૂરી મળતાં જ તમામ વિગતો જાહેર કરાશે.', pending: true },
]

export default function AboutPage() {
  const { isGu } = useLanguage()

  const jumps = isGu ? JUMP_GU : JUMP_EN
  const values = isGu ? VALUES_GU : VALUES_EN
  const journey = isGu ? JOURNEY_GU : JOURNEY_EN

  return (
    <PageShell active="about">
      <PageHero
        crumb={isGu ? 'અમારા વિશે' : 'About'}
        eyebrow={isGu ? '૨૦૧૭થી અવિરત સેવા યાત્રા' : 'Our story since 2017'}
        title={
          isGu ? (
            <>
              એક ભૂખી ગૌમાતાના આશીર્વાદથી શરૂ થયેલો <span className="text-rust-600">પવિત્ર સંકલ્પ</span>
            </>
          ) : (
            <>
              A promise that began with <span className="text-rust-600">one hungry cow</span>
            </>
          )
        }
        lead={
          isGu
            ? 'ગૌસેવા એ પોઝિટિવિટી ડોનેશનનું સેવા રૂપ છે — ગૌમાતાને આજીવન આહાર અને આશ્રય આપવા તેમજ જરૂરિયાતમંદ બાળકોને શિક્ષણ પૂરું પાડવાનો આ એક પારિવારિક પ્રયાસ છે.'
            : 'GauSeva is the public face of Positivity Donation — a small, family-run effort to keep cows fed and loved, and to keep children in school.'
        }
        image={IMAGES.shelter}
      >
        <nav aria-label="On this page" className="flex flex-wrap gap-2">
          {jumps.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="inline-flex h-9 sm:h-10 items-center rounded-full border border-line px-3.5 sm:px-4 text-xs sm:text-sm font-semibold text-ink-900 transition-colors hover:border-rust-600/40 hover:bg-peach-100 active:scale-95"
            >
              {label}
            </a>
          ))}
        </nav>
      </PageHero>

      {/* Ngo Story */}
      <section id="story" className="scroll-mt-24 py-12 sm:py-16 md:py-24">
        <Container className="grid gap-8 sm:gap-12 lg:grid-cols-[0.8fr_1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative mr-4 sm:mr-6 pb-6 pl-4 sm:pl-6 max-w-[420px] mx-auto lg:max-w-none">
              <div aria-hidden className="absolute bottom-0 left-0 h-[70%] w-[70%] rounded-[32px_12px_32px_12px] sm:rounded-[40px_12px_40px_12px] bg-sand-200" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[32px_12px_32px_12px] sm:rounded-[40px_12px_40px_12px] shadow-soft">
                <img
                  src={IMAGES.founder.src}
                  alt={isGu ? 'ગૌસેવા સંસ્થાપક' : IMAGES.founder.alt}
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
              <SectionHeading
                eyebrow={isGu ? 'સંસ્થાપકની પ્રેરક કથા' : 'The Founder’s Story'}
                title={
                  isGu ? (
                    <>
                      સાત વર્ષથી રોજ પ્રભાતે, <span className="text-rust-600">એક પૂળા ઘાસચારાથી શરૂઆત</span>
                    </>
                  ) : (
                    <>
                      Seven years of mornings, <span className="text-rust-600">one bundle at a time</span>
                    </>
                  )
                }
              />
            </m.div>
            <m.p variants={fadeUp} className="mt-4 sm:mt-6 text-sm sm:text-base leading-[1.75] text-ink-700 md:text-lg">
              {isGu
                ? `${BRAND.founder} બાળપણથી જ ઘરે ગાયોની વચ્ચે મોટા થયા હતા. વર્ષો પછી એક દિવસ બજાર પાસેથી પસાર થતાં તેમણે વરસાદમાં એક વૃદ્ધ ગાયને ઠૂઠવાતી જોઈ, જેના પાંસળા દેખાતા હતા પરંતુ કપાળે જૂનો ચાંદલો હજુ ઝાંખો દેખાતો હતો. કોઈ પરિવારે તેને ક્યારેક ખૂબ વહાલ કર્યો હતો.`
                : `${BRAND.founder} grew up with cows at home. Years later, walking past the market, he saw an old cow standing in the rain, ribs showing, a faded tilak still on her forehead. Someone had loved her once.`}
            </m.p>
            <m.p variants={fadeUp} className="mt-3.5 sm:mt-5 text-sm sm:text-base leading-[1.75] text-ink-700 md:text-lg">
              {isGu
                ? 'બીજે દિવસે સવારે તેઓ લીલા ઘાસનો એક પૂળો લઈને આવ્યા. પછી દરરોજ સવારે નિયમ બની ગયો. એ ૨૦૧૭નું વર્ષ હતું — અને ત્યારથી આજ દિન સુધી ક્યારેય આ સવારનો નિયમ તૂટ્યો નથી.'
                : 'The next morning he came back with a bundle of green fodder. Then the next morning. And the next. That was 2017 — and he hasn’t missed many mornings since.'}
            </m.p>
            <m.figure variants={fadeUp} className="my-6 sm:my-10 border-l-[3px] border-rust-600 pl-4 sm:pl-8">
              <Quote className="h-6 w-6 sm:h-7 sm:w-7 fill-rust-600/15 text-rust-600" aria-hidden />
              <blockquote className="mt-2.5 sm:mt-3 font-display text-lg sm:text-[22px] md:text-[26px] font-semibold leading-[1.4] text-ink-900">
                {isGu
                  ? '“ગૌમાતા વર્ષો સુધી પરિવારને અમૃત જેવું દૂધ આપે છે. જ્યારે તે વૃદ્ધ થાય, ત્યારે તેને ભરપેટ આહાર અને સુરક્ષિત આશ્રય આપવો એ આપણી નૈતિક ફરજ છે.”'
                  : '“A cow gives to a family for years. When she grows old, the least we can give back is a full stomach and a place to rest.”'}
              </blockquote>
              <figcaption className="mt-3 text-xs sm:text-sm text-ink-500">
                — {BRAND.founder}, {isGu ? 'સંસ્થાપક' : 'Founder'}
              </figcaption>
            </m.figure>
            <m.p variants={fadeUp} className="text-sm sm:text-base leading-[1.75] text-ink-700 md:text-lg">
              {isGu
                ? 'ધીમે ધીમે પડોશીઓ અને ગ્રામજનો પણ જોડાયા. એક નાની ગૌશાળા બની. જે પરિવારો પોતાની ગાયનો ખર્ચ નહોતા ઉઠાવી શકતા તેઓ મદદ માંગવા લાગ્યા — અને ત્યાંથી અમારા આ પ્રેમાળ વિચારનો જન્મ થયો.'
                : 'Neighbours began to join in. A small shed went up. Families who could no longer feed their own cows started to ask for help — and that is where our heartfelt idea was born.'}
            </m.p>
          </m.div>
        </Container>
      </section>

      {/* Problem → Solution */}
      <section id="problem" className="scroll-mt-24">
        <WaveDivider />
        <div className="bg-brown-900 py-12 sm:py-16 text-cream-50 md:py-24">
          <Container>
            <SectionHeading
              light
              eyebrow={isGu ? 'સમસ્યા અને અમારો ઉકેલ' : 'The Problem & Our Answer'}
              title={
                isGu
                  ? 'ગાયોને તરછોડવા પાછળ કોઈ ક્રૂરતા નથી, મજબૂરી અને આર્થિક બોજ છે.'
                  : 'Old cows aren’t abandoned out of cruelty. It’s cost.'
              }
            />
            <div className="mt-8 sm:mt-12 grid items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr]">
              <div className="rounded-2xl sm:rounded-3xl border border-peach-200/20 p-5 sm:p-8">
                <p className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-peach-200">
                  {isGu ? 'ગંભીર સમસ્યા' : 'The problem'}
                </p>
                <p className="mt-2.5 font-display text-lg sm:text-xl font-bold leading-[1.35] md:text-2xl">
                  {isGu
                    ? 'દૂધ બંધ થતાં ગાયનો ઘાસચારો મહિને આશરે ₹૬,૦૦૦ થાય છે, જે ગરીબ પરિવાર માટે મોટો બોજ છે.'
                    : 'When milk stops, feeding a cow costs a family ~₹6,000 a month with nothing in return.'}
                </p>
                <ul className="mt-4 sm:mt-6 space-y-2.5 text-xs sm:text-[15px] text-peach-200">
                  <li>— {isGu ? 'રોજમદાર પરિવારો આ ખર્ચ ઉઠાવી શકતા નથી' : 'Daily-wage families can’t carry the cost'}</li>
                  <li>— {isGu ? 'મજબૂરીમાં ગાયોને રસ્તે કે બજારમાં છોડવી પડે છે' : 'Cows are left on roads, near markets and highways'}</li>
                  <li>— {isGu ? 'રઝળતી ગાયો પ્લાસ્ટિક ખાય છે અને ઈજાગ્રસ્ત બને છે' : 'Many suffer injuries, plastic ingestion and hunger'}</li>
                </ul>
              </div>

              <div aria-hidden className="grid place-items-center">
                <span className="grid h-12 w-12 sm:h-14 sm:w-14 rotate-90 place-items-center rounded-full bg-rust-600 text-white lg:rotate-0 shadow-md">
                  <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
                </span>
              </div>

              <div id="solution" className="scroll-mt-24 rounded-2xl sm:rounded-3xl bg-cream-50 p-5 sm:p-8 text-ink-900 shadow-soft">
                <p className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-rust-600">
                  {isGu ? 'અમારો ઉકેલ' : 'Our answer'}
                </p>
                <p className="mt-2.5 font-display text-lg sm:text-xl font-bold leading-[1.35] md:text-2xl">
                  {isGu
                    ? 'અમે ઘાસચારાનો ખર્ચ ઉઠાવીએ છીએ. પરિવાર ગાયને ઘરમાં જ સાચવે છે.'
                    : 'We pay for the food. The family keeps the cow at home, as family.'}
                </p>
                <ul className="mt-4 sm:mt-6 space-y-2.5 text-xs sm:text-[15px] text-ink-700">
                  <li>— {isGu ? 'દર અઠવાડિયે ઘર આંગણે તાજો લીલો ઘાસચારો' : 'Weekly fresh fodder delivered to the door'}</li>
                  <li>— {isGu ? 'બીમાર ગાયો માટે નિઃશુલ્ક પશુચિકિત્સક સારવાર' : 'Vet visits for sick and injured cows'}</li>
                  <li>— {isGu ? 'સંપૂર્ણ નિરાધાર ગાયો માટે ગૌશાળામાં સુરક્ષિત આશ્રય' : 'Shelter at the Gushala for cows with no home'}</li>
                </ul>
              </div>
            </div>
          </Container>
        </div>
        <WaveDivider className="-mt-px rotate-180" />
      </section>

      {/* Second mission: Shiksha */}
      <section className="py-12 sm:py-16 md:py-24">
        <Container className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <SectionHeading
              eyebrow={isGu ? 'બીજો સંકલ્પ — શિક્ષા' : 'Our Second Mission — Shiksha'}
              title={
                isGu ? (
                  <>
                    ગાયોને ઘાસ આપતા આપતા, અમને <span className="text-rust-600">શાળા બહાર રઝળતા બાળકો મળ્યા</span>
                  </>
                ) : (
                  <>
                    While feeding cows, we kept meeting <span className="text-rust-600">children out of school</span>
                  </>
                )
              }
              lead={
                isGu
                  ? 'તેથી અમે બીજો સંકલ્પ કર્યો: ગરીબ બાળકો માટે પૌષ્ટિક ભોજન, રહેઠાણ, પુસ્તકો અને શૈક્ષણિક સાધનો પૂરા પાડી તેમના અભ્યાસને ચાલુ રાખવો.'
                  : 'So we started a second promise: food, a safe place to stay, books, stationery and the everyday essentials that keep a child learning.'
              }
            />
            <div className="mt-6 sm:mt-8">
              <Button href="/what-we-do#shiksha" variant="outline" className="!h-11 sm:!h-12 text-xs sm:text-sm">
                {isGu ? 'શિક્ષા કાર્ય વિશે વધુ જાણો' : 'See how Shiksha works'}
              </Button>
            </div>
          </div>
          <div className="relative order-1 lg:order-2 max-w-[460px] mx-auto lg:max-w-none">
            <div aria-hidden className="absolute -right-3 -top-3 h-2/3 w-1/2 rounded-[32px] sm:rounded-[40px] bg-peach-100" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[24px_24px_24px_80px] sm:rounded-[28px_28px_28px_120px] shadow-soft">
              <img
                src={IMAGES.kidsMeal.src}
                alt={isGu ? 'બાળકો માટે પૌષ્ટિક ભોજન અને શિક્ષણ' : IMAGES.kidsMeal.alt}
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
      <section id="vision" className="scroll-mt-24 bg-cream-100 py-12 sm:py-16 md:py-24">
        <Container>
          <div className="grid gap-8 sm:gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
            <div>
              <p className="flex items-center gap-2 font-display text-xs sm:text-[15px] font-bold text-rust-600 uppercase tracking-wider">
                <Eye className="h-4 w-4" aria-hidden /> {isGu ? 'અમારો સંકલ્પ (Vision)' : 'Our Vision'}
              </p>
              <p className="mt-3 font-display text-xl sm:text-[28px] font-bold leading-[1.25] text-ink-900 md:text-[36px]">
                {isGu
                  ? 'એવો સમાજ જ્યાં કોઈ ગૌમાતા વૃદ્ધ થવાને કારણે તરછોડાય નહીં, અને કોઈ બાળક ભૂખ્યા પેટે શાળા છોડે નહીં.'
                  : 'A village where no cow is abandoned for growing old, and no child leaves school hungry.'}
              </p>
              <p className="mt-6 sm:mt-8 flex items-center gap-2 font-display text-xs sm:text-[15px] font-bold text-rust-600 uppercase tracking-wider">
                <Target className="h-4 w-4" aria-hidden /> {isGu ? 'અમારું લક્ષ્ય (Mission)' : 'Our Mission'}
              </p>
              <p className="mt-2.5 max-w-[560px] text-sm sm:text-base leading-[1.7] text-ink-700 md:text-lg">
                {isGu
                  ? 'ગૌમાતાનું પ્રેમપૂર્વક જતન કરવું — શક્ય હોય ત્યાં સુધી તેના પરિચિત ઘરમાં જ — અને આર્થિક રીતે નબળા પરિવારોના બાળકોને ભોજન, શિક્ષણ અને સ્નેહ આપવો.'
                  : 'Feed and care for cows — ideally in the homes they already know — and support children from struggling families with food, stay and school essentials.'}
              </p>
            </div>
            <div>
              <p className="flex items-center gap-2 font-display text-xs sm:text-[15px] font-bold text-rust-600 uppercase tracking-wider">
                <HeartHandshake className="h-4 w-4" aria-hidden /> {isGu ? 'અમારા સેવા મૂલ્યો' : 'What we hold to'}
              </p>
              <dl className="mt-3 divide-y divide-line border-y border-line">
                {values.map((v) => (
                  <div key={v.t} className="grid gap-1 py-4 sm:py-5 sm:grid-cols-[140px_1fr] sm:gap-6">
                    <dt className="font-display text-sm sm:text-base font-bold text-ink-900">{v.t}</dt>
                    <dd className="text-xs sm:text-[15px] leading-[1.6] text-ink-700">{v.d}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* Journey */}
      <section id="journey" className="scroll-mt-24 py-12 sm:py-16 md:py-24">
        <Container className="grid gap-8 sm:gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow={isGu ? 'અમારી યાત્રા' : 'Our Journey'}
              title={isGu ? 'દર વર્ષે શ્રદ્ધાપૂર્વક આગળ વધતા કદમ' : 'Small steps, every year'}
              lead={
                isGu
                  ? 'મોટા મોટા દાવા કરવા કરતાં અમે અમારી પ્રમાણિક પ્રગતિ આપની સમક્ષ મૂકવામાં માનીએ છીએ.'
                  : 'We’d rather show you honest progress than big claims.'
              }
            />
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-2.5 sm:gap-3">
              <Button heart href="/donate" className="!h-11 sm:!h-12 text-xs sm:text-sm">
                {isGu ? 'દાન કરો' : 'Donate'}
              </Button>
              <Button variant="outline" href="/what-we-do" className="!h-11 sm:!h-12 text-xs sm:text-sm">
                {isGu ? 'સેવા કાર્યો' : 'Our Work'}
              </Button>
              <Button variant="outline" href="/contact?tab=volunteer" className="!h-11 sm:!h-12 text-xs sm:text-sm">
                {isGu ? 'સ્વયંસેવક બનો' : 'Volunteer'}
              </Button>
            </div>
          </div>
          <ol className="relative border-l-2 border-dashed border-sand-300 pl-6 sm:pl-8 md:pl-10">
            {journey.map((j) => (
              <m.li key={j.year} initial="hidden" whileInView="show" viewport={inView} variants={fadeUp} className="relative pb-8 sm:pb-10 last:pb-0">
                <span
                  aria-hidden
                  className={`absolute -left-[35px] sm:-left-[42px] top-1 grid h-5 w-5 place-items-center rounded-full ring-4 ring-cream-50 md:-left-[50px] ${
                    j.pending ? 'bg-sand-300' : 'bg-rust-600'
                  }`}
                >
                  {j.pending && <Sprout className="h-3 w-3 text-rust-700" />}
                </span>
                <p className="font-display text-xs sm:text-sm font-bold text-rust-600">{j.year}</p>
                <h3 className="mt-1 font-display text-lg sm:text-xl font-bold text-ink-900">{j.title}</h3>
                <p className="mt-1.5 max-w-[520px] text-xs sm:text-[15px] leading-[1.65] text-ink-700">{j.body}</p>
                {j.pending && (
                  <span className="mt-2.5 inline-flex rounded-full bg-peach-100 px-3 py-0.5 text-[11px] font-bold text-rust-700">
                    {isGu ? 'પ્રક્રિયા ચાલુ છે' : 'In progress'}
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
