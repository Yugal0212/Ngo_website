'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Quote, Tag } from 'lucide-react'

import { Post } from '@/types'
import { Button } from '@/components/common/Button'
import { POSTS } from '@/lib/data'
import { useLanguage } from '@/context/LanguageContext'

const GU_POST_DETAILS: Record<
  string,
  {
    title: string
    excerpt: string
    cat: string
    read: string
    pull?: string
    body: string[]
  }
> = {
  'why-families-abandon-cows': {
    title: 'ગરીબ પરિવારો મજબૂરીમાં ગાય કેમ છોડે છે — અને થોડો ઘાસચારો કેવી રીતે જીવન બદલે છે',
    excerpt: 'કોઈ પણ પરિવાર પોતાની વહાલી ગાયને તરછોડવા માંગતો નથી. દૂધ બંધ થતાં તેઓ ₹૨૦૦ રોજના ઘાસચારાનો ખર્ચ ઉઠાવી શકતા નથી.',
    cat: 'ગૌસેવા',
    read: '૫ મિનિટ વાંચન',
    pull: 'ગામડામાં કોઈ પણ પોતાની ગાયને રસ્તે મૂકવા નથી માંગતું. તેઓ પાસે કોઈ આર્થિક વિકલ્પ રહેતો નથી.',
    body: [
      'સાંજના સમયે ગામડાના રસ્તેથી પસાર થાવ તો તમને જોવા મળશે: વૃદ્ધ ગાયો, કોઈ ચાની લારી કે મંદિર પાસે શાંતિથી ઊભી હોય છે, રાહ જોતી હોય છે. તેમાંથી મોટાભાગની ગાયો ક્યારેક કોઈ એવા પરિવારની હતી જેણે તેને ખૂબ પ્રેમ કર્યો હતો.',
      'જ્યારે ગાય દૂધ આપતી બંધ થાય, ત્યારે તેના ઘાસચારાનો ખર્ચ — દરરોજ પૌષ્ટિક આહાર પાછળ આશરે ₹૨૦૦ — બંધ થતો નથી. રોજિંદી મજૂરી કરતા પરિવાર માટે, ઘણીવાર આ ખર્ચ બાળકોની સ્કૂલ ફી ભરવા કે ન ભરવા જેટલો મોટો હોય છે.',
      'અમારો વિચાર એકદમ સરળ છે. જો અમે ઘાસચારાનો આર્થિક ખર્ચ ઉઠાવી લઈએ, તો પરિવાર ગાયને પોતાના ઘરમાં જ રાખી શકે છે. ગાય એ જ બાળકો સાથે રહે છે જે તેની સાથે મોટા થયા છે, એ જ કોઢમાં રહે છે જે તેને ઓળખે છે, અને કોઈએ મજબૂરીમાં આકરો નિર્ણય લેવો પડતો નથી.',
      'આજે અમે દર અઠવાડિયે આવા પરિવારોના ઘરે તાજો લીલો ઘાસચારો પહોંચાડીએ છીએ. દરેક વિતરણની નોંધ રાખવામાં આવે છે, અને દાતાઓને તસવીરી અપડેટ્સ મોકલવામાં આવે છે જેથી તેઓ જોઈ શકે કે તેમનો સહયોગ કોના ઘરે પહોંચ્યો છે.',
    ],
  },
  'first-school-bags': {
    title: 'વીસ નવા સ્કૂલ બેગ, વીસ બાળકોનો પ્રથમ શાળા પ્રવેશ',
    excerpt: 'આ સત્રમાં ૨૦ જરૂરિયાતમંદ બાળકો નવા પુસ્તકો, ગણવેશ અને દૈનિક પૌષ્ટિક ભોજન સાથે શાળાએ પહોંચ્યા.',
    cat: 'શિક્ષા',
    read: '૪ મિનિટ વાંચન',
    body: [
      'શિક્ષા પ્રોજેક્ટની શરૂઆત એક સંયોગથી થઈ હતી. ગાયો માટે ઘાસચારો વિતરણ કરતી વખતે અમારા સંસ્થાપક એવા બાળકોને મળ્યા જેઓ શાળાના સમયે ઘરે બેઠા હતા — તેઓને ભણવું નહોતું એવું નહોતું, પણ પુસ્તકો કે બપોરના ભોજન માટે પૈસા નહોતા.',
      'આ વર્ષે આપ સહુ દાતાઓના સહયોગથી વીસ બાળકોએ સ્કૂલ બેગ, પુસ્તકો, ગણવેશ અને દૈનિક પૌષ્ટિક ભોજનના સંકલ્પ સાથે નવું શૈક્ષણિક વર્ષ શરૂ કર્યું છે.',
      'અમે દરેક બાળકની હાજરી અને પ્રગતિની સરળ ડાયરી રાખીએ છીએ અને વાલીઓની સંમતિ સાથે દાતાઓ સાથે અહેવાલ શેર કરીએ છીએ.',
    ],
  },
  'a-morning-at-the-gushala': {
    title: 'ગૌશાળામાં પ્રભાત: સવારે ૫ વાગ્યાના ઘાસચારાથી સાંજની આરતી સુધી',
    excerpt: 'અમારી ગૌશાળામાં અબોલ જીવો અને સેવાભાવી કાર્યકરોનો એક આખો દિવસ કેવો પવિત્ર પસાર થાય છે.',
    cat: 'સેવા દર્શન',
    read: '૬ મિનિટ વાંચન',
    body: [
      'દિવસ સૂર્યોદય પહેલાં શરૂ થાય છે. સવારે પાંચ વાગ્યે તાજો લીલો ઘાસચારો આવે છે, અને છ વાગ્યા સુધીમાં દરેક ગમાણ ભરાઈ જાય છે.',
      'બપોર પહેલાંનો સમય સારસંભાળ અને તપાસનો હોય છે: કોઈ ગાયને લંગડાપણું હોય, આંખમાં તકલીફ હોય કે વાછરડી બરાબર દૂધ ન પીતી હોય. અમારા મુલાકાતી પશુચિકિત્સક અઠવાડિયામાં બે વાર આવે છે; બાકીના સમયે અમારો સ્ટાફ સતત કાળજી રાખે છે.',
      'સાંજનો સમય નાની આરતી અને ગૌશાળામાં શાંત પ્રદક્ષિણા સાથે પૂર્ણ થાય છે. દરેક ગાયનું એક પ્યારું નામ છે, અને દરેક ગાયને સ્નેહપૂર્વક બોલાવવામાં આવે છે.',
    ],
  },
}

export function BlogPostView({ post }: { post: Post }) {
  const { isGu } = useLanguage()
  const relatedPosts = POSTS.filter((p) => p.slug !== post.slug).slice(0, 2)

  const tr = isGu ? GU_POST_DETAILS[post.slug] : null
  const title = tr ? tr.title : post.title
  const excerpt = tr ? tr.excerpt : post.excerpt
  const cat = tr ? tr.cat : post.cat
  const read = tr ? tr.read : post.read
  const body = tr ? tr.body : post.body
  const pull = tr ? tr.pull : post.pull

  return (
    <article className="mx-auto max-w-[880px] px-4 sm:px-6 py-8 sm:py-12 md:py-20">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 font-display text-xs sm:text-sm font-bold text-rust-600 hover:text-rust-700 mb-6 sm:mb-8 active:scale-95 transition-transform"
      >
        <ArrowLeft className="h-4 w-4" />
        {isGu ? '← બધી સેવા વાતો પર પાછા જાઓ' : 'Back to all stories'}
      </Link>

      <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-ink-500">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-peach-100 px-3 py-1 font-bold text-rust-700">
          <Tag className="h-3 w-3" />
          {cat}
        </span>
        <span className="flex items-center gap-1">
          <Calendar className="h-3.5 w-3.5" />
          {post.date}
        </span>
        <span>·</span>
        <span className="flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" />
          {read}
        </span>
      </div>

      <h1 className="mt-3.5 sm:mt-4 font-display text-2xl sm:text-[36px] md:text-[44px] font-extrabold leading-[1.2] text-ink-900 tracking-tight">
        {title}
      </h1>

      <p className="mt-4 sm:mt-5 text-base sm:text-lg leading-relaxed text-ink-700 font-medium border-l-2 sm:border-l-4 border-rust-600 pl-3.5 sm:pl-4">
        {excerpt}
      </p>

      {/* Featured Image */}
      <div className="mt-8 sm:mt-10 overflow-hidden rounded-2xl sm:rounded-3xl shadow-soft">
        <img
          src={post.img.src}
          alt={title}
          width={post.img.w}
          height={post.img.h}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Body paragraphs */}
      <div className="mt-8 sm:mt-10 space-y-5 sm:space-y-6 text-sm sm:text-lg leading-[1.8] text-ink-700">
        {body.map((paragraph, index) => (
          <React.Fragment key={index}>
            <p>{paragraph}</p>
            {index === 1 && pull && (
              <figure className="my-8 sm:my-10 rounded-2xl sm:rounded-3xl bg-peach-100 p-5 sm:p-8 text-center border-l-4 border-rust-600 shadow-xs">
                <Quote className="mx-auto h-7 w-7 sm:h-8 sm:w-8 text-rust-600 fill-rust-600/20" />
                <blockquote className="mt-2.5 sm:mt-3 font-display text-lg sm:text-2xl font-bold text-ink-900 leading-snug">
                  “{pull}”
                </blockquote>
              </figure>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Support CTA Box */}
      <div className="mt-10 sm:mt-14 rounded-2xl sm:rounded-3xl bg-brown-900 p-6 sm:p-8 text-cream-50 text-center sm:text-left sm:flex sm:items-center sm:justify-between shadow-soft">
        <div>
          <h3 className="font-display text-xl sm:text-2xl font-bold">
            {isGu ? 'આવી વધુ પ્રેરક વાતોનું સર્જન કરવામાં સાથ આપો' : 'Help us write more stories'}
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-peach-200">
            {isGu ? '₹૨૦૦ માં એક ગૌમાતાને ઘરમાં જ એક દિવસનો પૌષ્ટિક લીલો ઘાસચારો મળે છે.' : '₹200 gives one day of food to an older cow at home.'}
          </p>
        </div>
        <div className="mt-5 sm:mt-0 shrink-0 sm:ml-4">
          <Button heart href="/donate" className="!h-11 sm:!h-12 text-xs sm:text-sm">
            {isGu ? 'ગૌમાતાને આહાર આપો' : 'Feed a Cow'}
          </Button>
        </div>
      </div>
    </article>
  )
}
