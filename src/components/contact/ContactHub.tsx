'use client'

import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { CheckCircle2, HeartHandshake, Mail, MapPin, MessageCircle, Phone, Send, Sparkles, Users, Check } from 'lucide-react'

import { Button } from '@/components/common/Button'
import { Field, TextArea, Honeypot } from '@/components/common/Field'
import { FAQ } from '@/components/common/FAQ'
import { CONTACT } from '@/config/site'
import { useLanguage } from '@/context/LanguageContext'

const SUBJECTS_EN = [
  { id: 'general', label: 'General Inquiry' },
  { id: 'partner', label: 'Partnership / CSR Collaboration' },
  { id: 'visit', label: 'Visit the Gushala' },
  { id: 'adopt', label: 'Support a Specific Cow' },
  { id: 'shiksha', label: 'Shiksha Child Sponsorship' },
]

const SUBJECTS_GU = [
  { id: 'general', label: 'સામાન્ય પૂછપરછ' },
  { id: 'partner', label: 'સહભાગીદારી / CSR સહયોગ' },
  { id: 'visit', label: 'ગૌશાળા દર્શન / મુલાકાત' },
  { id: 'adopt', label: 'ગૌમાતા દત્તક સેવા' },
  { id: 'shiksha', label: 'બાળ શિક્ષણ સ્પોન્સરશિપ' },
]

const ROLES_EN = [
  'Weekend Fodder Distribution',
  'Care & Cleaning at Gushala',
  'Shiksha Student Tutoring',
  'Photography & Journaling',
  'Medical & Vet Assistance',
]

const ROLES_GU = [
  'વીકેન્ડમાં લીલા ઘાસચારાનું વિતરણ',
  'ગૌશાળામાં ગૌસેવા અને પરિસર સફાઈ',
  'બાળકોને શિક્ષણ અને વાર્તા સત્ર',
  'તસવીરો અને સેવા ડાયરી નોંધ',
  'પશુચિકિત્સક સારવારમાં સહાય',
]

const VOLUNTEER_FAQS_EN = [
  {
    q: 'Do I need prior experience working with cows?',
    a: 'Not at all! Our experienced caretakers will guide you on how to safely feed, groom, and handle the cows with kindness.',
  },
  {
    q: 'Can children or families volunteer together?',
    a: 'Yes, family visits are very welcome! Children especially love feeding calves and meeting the students in our Shiksha programme.',
  },
  {
    q: 'What should I wear when volunteering?',
    a: 'We recommend comfortable clothes that you do not mind getting dirty, along with closed-toe shoes or boots.',
  },
  {
    q: 'Is there a minimum time commitment?',
    a: 'No rigid commitment is required. Most volunteers join us on Saturday or Sunday mornings for 2–3 hours.',
  },
]

const VOLUNTEER_FAQS_GU = [
  {
    q: 'શું ગાયો સાથે કામ કરવાનો અગાઉનો અનુભવ જરૂરી છે?',
    a: 'બિલકુલ નહીં! અમારા અનુભવી ગૌસેવકો આપને પ્રેમપૂર્વક ઘાસ નીરવા અને ગૌમાતાની સારસંભાળ રાખવા વિશે સંપૂર્ણ માર્ગદર્શન આપશે.',
  },
  {
    q: 'શું બાળકો અને પરિવાર સાથે સેવા આપી શકાય?',
    a: 'હા, પારિવારિક મુલાકાતોનું ખાસ સ્વાગત છે! બાળકોને નાની વાછરડીઓને વહાલ કરવું અને શિક્ષણ કાર્યક્રમના બાળકો સાથે મળવું ખૂબ ગમે છે.',
  },
  {
    q: 'સેવા માટે કેવા કપડાં પહેરવા જોઈએ?',
    a: 'આરામદાયક સાદા કપડાં અને પગરખાં પહેરવા હિતાવહ છે જે થોડા ધૂળવાળા થાય તો વાંધો ન આવે.',
  },
  {
    q: 'શું કેટલો સમય આપવો ફરજિયાત છે?',
    a: 'કોઈ કડક નિયમ નથી. મોટાભાગના સ્વયંસેવકો શનિવાર કે રવિવારની સવારે ૨ થી ૩ કલાક સેવા આપે છે.',
  },
]

export function ContactHub({ defaultTab = 'contact' }: { defaultTab?: 'contact' | 'volunteer' }) {
  const searchParams = useSearchParams()
  const { t, isGu } = useLanguage()
  const tabFromQuery = searchParams.get('tab') === 'volunteer' ? 'volunteer' : defaultTab
  const [activeTab, setActiveTab] = useState<'contact' | 'volunteer'>(tabFromQuery)

  // Contact Form State
  const initialSubject = searchParams.get('subject') || 'general'
  const [cName, setCName] = useState('')
  const [cEmail, setCEmail] = useState('')
  const [cPhone, setCPhone] = useState('')
  const [cSubject, setCSubject] = useState(initialSubject)
  const [cMessage, setCMessage] = useState('')
  const [cErrors, setCErrors] = useState<Record<string, string>>({})
  const [cSubmitted, setCSubmitted] = useState(false)
  const [cLoading, setCLoading] = useState(false)

  // Volunteer Form State
  const [vName, setVName] = useState('')
  const [vEmail, setVEmail] = useState('')
  const [vPhone, setVPhone] = useState('')
  const [selectedRoles, setSelectedRoles] = useState<string[]>([])
  const [availability, setAvailability] = useState('Weekends')
  const [vNotes, setVNotes] = useState('')
  const [vErrors, setVErrors] = useState<Record<string, string>>({})
  const [vSubmitted, setVSubmitted] = useState(false)
  const [vLoading, setVLoading] = useState(false)

  useEffect(() => {
    if (searchParams.get('tab') === 'volunteer') {
      setActiveTab('volunteer')
    }
  }, [searchParams])

  const roles = isGu ? ROLES_GU : ROLES_EN
  const subjects = isGu ? SUBJECTS_GU : SUBJECTS_EN
  const faqs = isGu ? VOLUNTEER_FAQS_GU : VOLUNTEER_FAQS_EN

  const toggleRole = (r: string) => {
    setSelectedRoles((prev) =>
      prev.includes(r) ? prev.filter((x) => x !== r) : [...prev, r]
    )
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs: Record<string, string> = {}
    if (!cName.trim()) errs.name = isGu ? 'કૃપા કરીને આપનું નામ લખો' : 'Please provide your name'
    if (!cEmail.trim() || !/^\S+@\S+\.\S+$/.test(cEmail)) {
      errs.email = isGu ? 'કૃપા કરીને માન્ય ઈમેલ લખો' : 'Please provide a valid email address'
    }
    if (!cMessage.trim()) errs.message = isGu ? 'કૃપા કરીને સંદેશ લખો' : 'Please write your message'
    setCErrors(errs)
    if (Object.keys(errs).length > 0) return

    setCLoading(true)
    setTimeout(() => {
      setCLoading(false)
      setCSubmitted(true)
    }, 500)
  }

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs: Record<string, string> = {}
    if (!vName.trim()) errs.name = isGu ? 'કૃપા કરીને આપનું નામ લખો' : 'Please provide your name'
    if (!vEmail.trim() || !/^\S+@\S+\.\S+$/.test(vEmail)) {
      errs.email = isGu ? 'કૃપા કરીને માન્ય ઈમેલ લખો' : 'Please provide a valid email address'
    }
    if (!vPhone.trim()) errs.phone = isGu ? 'કૃપા કરીને ફોન નંબર લખો' : 'Please provide a contact phone number'
    setVErrors(errs)
    if (Object.keys(errs).length > 0) return

    setVLoading(true)
    setTimeout(() => {
      setVLoading(false)
      setVSubmitted(true)
    }, 500)
  }

  return (
    <div className="mx-auto max-w-[1500px] px-4 sm:px-6 md:px-10 py-8 md:py-16 xl:px-[90px]">
      {/* Interactive Tabs Header: Connect vs Volunteer */}
      <div className="flex justify-center mb-8 sm:mb-12">
        <div className="inline-flex rounded-full border border-line bg-cream-100 p-1 sm:p-1.5 shadow-soft">
          <button
            type="button"
            onClick={() => setActiveTab('contact')}
            className={`inline-flex items-center gap-1.5 sm:gap-2 rounded-full px-4 sm:px-6 py-2 sm:py-2.5 font-display text-xs sm:text-sm font-bold transition-all duration-150 ${
              activeTab === 'contact'
                ? 'bg-rust-600 text-white shadow-soft'
                : 'text-ink-700 hover:text-ink-900'
            }`}
          >
            <MessageCircle className="h-4 w-4" />
            {isGu ? 'સંપર્ક અને મુલાકાત' : 'Get In Touch & Visit'}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('volunteer')}
            className={`inline-flex items-center gap-1.5 sm:gap-2 rounded-full px-4 sm:px-6 py-2 sm:py-2.5 font-display text-xs sm:text-sm font-bold transition-all duration-150 ${
              activeTab === 'volunteer'
                ? 'bg-rust-600 text-white shadow-soft'
                : 'text-ink-700 hover:text-ink-900'
            }`}
          >
            <HeartHandshake className="h-4 w-4" />
            {isGu ? 'સ્વયંસેવક બનો' : 'Volunteer With Us'}
          </button>
        </div>
      </div>

      {/* TAB 1: CONTACT & VISIT */}
      {activeTab === 'contact' && (
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 items-start">
          {/* Details */}
          <div>
            <span className="font-display text-xs font-bold uppercase tracking-wider text-rust-600">
              {isGu ? 'ગૌશાળા સંપર્ક' : 'Sanctuary Contact'}
            </span>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-bold text-ink-900 leading-tight">
              {isGu ? 'અમને આપનું સ્વાગત કરવું અને સાંભળવું ગમશે' : 'We’d love to welcome and hear from you'}
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-ink-700">
              {isGu
                ? 'ગૌસેવા, પારિવારિક ગૌશાળા મુલાકાત, બાળકોના ભોજન સહયોગ કે સંસ્થાકીય CSR ભાગીદારી અંગે આપ કોઈ પણ સમયે અમારો સંપર્ક કરી શકો છો.'
                : 'Have questions about cow seva, scheduling a family gushala visit, sponsoring children’s midday meals, or corporate CSR partnerships? Reach out anytime.'}
            </p>

            <dl className="mt-6 sm:mt-8 space-y-5 sm:space-y-6">
              <div className="flex items-start gap-3.5 sm:gap-4">
                <span className="grid h-11 w-11 sm:h-12 sm:w-12 shrink-0 place-items-center rounded-2xl bg-peach-100 text-rust-600">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />
                </span>
                <div>
                  <dt className="font-display text-xs font-bold uppercase tracking-wide text-ink-500">
                    {t.contactPage.addressTitle}
                  </dt>
                  <dd className="mt-0.5 text-sm sm:text-base font-medium text-ink-900">
                    {isGu ? '[ગૌશાળા સરનામું], [ગામ], [જિલ્લો], [ગુજરાત] — [પીનકોડ]' : CONTACT.address}
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3.5 sm:gap-4">
                <span className="grid h-11 w-11 sm:h-12 sm:w-12 shrink-0 place-items-center rounded-2xl bg-peach-100 text-rust-600">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                </span>
                <div>
                  <dt className="font-display text-xs font-bold uppercase tracking-wide text-ink-500">
                    {t.contactPage.phoneTitle}
                  </dt>
                  <dd className="mt-0.5 text-sm sm:text-base font-medium text-ink-900">
                    <a href={`tel:${CONTACT.phone}`} className="hover:text-rust-600">{CONTACT.phone}</a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3.5 sm:gap-4">
                <span className="grid h-11 w-11 sm:h-12 sm:w-12 shrink-0 place-items-center rounded-2xl bg-peach-100 text-rust-600">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                </span>
                <div>
                  <dt className="font-display text-xs font-bold uppercase tracking-wide text-ink-500">
                    {t.contactPage.emailTitle}
                  </dt>
                  <dd className="mt-0.5 text-sm sm:text-base font-medium text-ink-900">
                    <a href={`mailto:${CONTACT.email}`} className="hover:text-rust-600">{CONTACT.email}</a>
                  </dd>
                </div>
              </div>
            </dl>

            {/* Visiting Hours Callout */}
            <div className="mt-6 sm:mt-8 rounded-2xl sm:rounded-3xl border border-line bg-cream-100 p-5 sm:p-6 shadow-soft">
              <h3 className="font-display text-sm sm:text-base font-bold text-ink-900">
                {isGu ? 'ગૌદર્શન અને સેવાનો સમય' : 'Visiting Hours for Darshan & Seva'}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-ink-700 leading-relaxed">
                {isGu ? (
                  <>
                    અઠવાડિયાના તમામ ૭ દિવસ સવારે <strong>૬:૩૦ થી સાંજે ૬:૩૦</strong>. સવારે ૭:૩૦ વાગ્યે ગૌપૂજન અને સાંજે ૫:૩૦ વાગ્યે સંધ્યા આરતી થાય છે.
                  </>
                ) : (
                  <>
                    Open all 7 days from <strong>6:30 AM to 6:30 PM</strong>. Morning Gau-Puja is held daily at 7:30 AM, and Evening Aarti at 5:30 PM.
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl sm:rounded-3xl border border-line bg-cream-50 p-5 sm:p-8 md:p-10 shadow-lift">
            {cSubmitted ? (
              <div className="py-6 sm:py-8 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 sm:h-14 sm:w-14 text-leaf-600" />
                <h3 className="mt-4 font-display text-xl sm:text-2xl font-bold text-ink-900">
                  {isGu ? 'આપનો સંદેશ સ્નેહપૂર્વક મળી ગયો છે' : 'Message Received with Gratitude'}
                </h3>
                <p className="mt-2.5 text-sm text-ink-700 leading-relaxed">
                  {isGu
                    ? `ધન્યવાદ, ${cName}. અમારી સેવા ટીમ ૨૪ કલાકમાં આપનો ઈમેલ અથવા ફોન દ્વારા સંપર્ક કરશે.`
                    : `Thank you for reaching out, ${cName}. Our seva team will reply via email or phone within 24 hours.`}
                </p>
                <Button onClick={() => setCSubmitted(false)} className="mt-5" variant="outline">
                  {isGu ? 'બીજો સંદેશ મોકલો' : 'Send Another Message'}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} noValidate className="space-y-4 sm:space-y-5">
                <Honeypot />
                <Field
                  label={t.contactPage.fullName}
                  id="c-name"
                  name="name"
                  type="text"
                  required
                  placeholder={isGu ? 'રમેશભાઈ પટેલ' : 'e.g. Ramesh Patel'}
                  value={cName}
                  onChange={(e) => setCName(e.target.value)}
                  error={cErrors.name}
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label={t.contactPage.emailTitle}
                    id="c-email"
                    name="email"
                    type="email"
                    required
                    placeholder="ramesh@example.com"
                    value={cEmail}
                    onChange={(e) => setCEmail(e.target.value)}
                    error={cErrors.email}
                  />
                  <Field
                    label={isGu ? 'મોબાઇલ / વોટ્સએપ' : 'Phone / WhatsApp (Optional)'}
                    id="c-phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={cPhone}
                    onChange={(e) => setCPhone(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="c-subject" className="block text-xs font-semibold uppercase tracking-wider text-ink-700">
                    {t.contactPage.subject}
                  </label>
                  <select
                    id="c-subject"
                    name="subject"
                    value={cSubject}
                    onChange={(e) => setCSubject(e.target.value)}
                    className="mt-1.5 w-full rounded-2xl border border-line bg-cream-50 px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-rust-600 focus:ring-1 focus:ring-rust-600"
                  >
                    {subjects.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>

                <TextArea
                  label={t.contactPage.message}
                  id="c-message"
                  name="message"
                  required
                  rows={4}
                  placeholder={isGu ? 'અમે આપને કેવી રીતે સહાય કરી શકીએ?' : 'How can we assist you or plan your visit?'}
                  value={cMessage}
                  onChange={(e) => setCMessage(e.target.value)}
                  error={cErrors.message}
                />

                <Button type="submit" heart disabled={cLoading} className="w-full justify-center !h-12 text-sm sm:text-base">
                  <Send className="h-4 w-4 mr-2" />
                  {cLoading ? (isGu ? 'સંદેશ મોકલી રહ્યા છીએ...' : 'Sending message...') : t.contactPage.btnSend}
                </Button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* TAB 2: VOLUNTEER WITH US */}
      {activeTab === 'volunteer' && (
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 items-start">
          {/* Volunteer Form */}
          <div className="rounded-2xl sm:rounded-3xl border border-line bg-cream-50 p-5 sm:p-8 md:p-10 shadow-lift">
            <span className="font-display text-xs font-bold uppercase tracking-wider text-rust-600">
              {isGu ? 'અમારા સેવા પરિવારમાં જોડાઓ' : 'Join Our Seva Family'}
            </span>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-ink-900">
              {isGu ? 'સ્વયંસેવક નોંધણી પત્રક' : 'Volunteer Application'}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-ink-700">
              {isGu
                ? 'આપનો અમૂલ્ય સમય, કૌશલ્ય અથવા સ્નેહ આપો. સેવાભાવ ધરાવનાર દરેક વ્યક્તિનું સ્વાગત છે.'
                : 'Give your time, skills, or presence. Everyone is welcome to contribute with devotion.'}
            </p>

            {vSubmitted ? (
              <div className="py-6 sm:py-8 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 sm:h-14 sm:w-14 text-leaf-600" />
                <h3 className="mt-4 font-display text-xl sm:text-2xl font-bold text-ink-900">
                  {isGu ? 'ગૌસેવા પરિવારમાં આપનું સ્વાગત છે!' : 'Welcome to the GauSeva Family!'}
                </h3>
                <p className="mt-2.5 text-sm text-ink-700 leading-relaxed">
                  {isGu
                    ? `ધન્યવાદ, ${vName}! અમારા સ્વયંસેવક સમન્વયક આપનો વોટ્સએપ પર સંપર્ક કરી આગામી રવિવારના સેવા સત્રની વિગત આપશે.`
                    : `Thank you, ${vName}! Our volunteer lead will reach out on WhatsApp/phone to welcome you to our upcoming seva session.`}
                </p>
                <Button onClick={() => setVSubmitted(false)} className="mt-5" variant="outline">
                  {isGu ? 'બીજું ફોર્મ ભરો' : 'Submit Another Response'}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleVolunteerSubmit} noValidate className="mt-5 sm:mt-6 space-y-4 sm:space-y-5">
                <Honeypot />
                <Field
                  label={t.volunteerPage.fullName}
                  id="v-name"
                  name="name"
                  type="text"
                  required
                  placeholder={isGu ? 'પ્રિયાબેન પટેલ' : 'e.g. Priya Patel'}
                  value={vName}
                  onChange={(e) => setVName(e.target.value)}
                  error={vErrors.name}
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label={t.volunteerPage.email}
                    id="v-email"
                    name="email"
                    type="email"
                    required
                    placeholder="priya@example.com"
                    value={vEmail}
                    onChange={(e) => setVEmail(e.target.value)}
                    error={vErrors.email}
                  />
                  <Field
                    label={t.volunteerPage.phone}
                    id="v-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={vPhone}
                    onChange={(e) => setVPhone(e.target.value)}
                    error={vErrors.phone}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink-700 mb-2">
                    {t.volunteerPage.rolesTitle}
                  </label>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {roles.map((role) => {
                      const sel = selectedRoles.includes(role)
                      return (
                        <button
                          key={role}
                          type="button"
                          onClick={() => toggleRole(role)}
                          className={`flex items-center gap-2.5 rounded-xl border p-2.5 text-left text-xs sm:text-sm font-medium transition-all ${
                            sel
                              ? 'border-rust-600 bg-peach-100/80 text-rust-700 font-semibold'
                              : 'border-line bg-cream-50 text-ink-700 hover:border-rust-600/40'
                          }`}
                        >
                          <span className={`grid h-4 w-4 shrink-0 place-items-center rounded border ${
                            sel ? 'border-rust-600 bg-rust-600 text-white' : 'border-line'
                          }`}>
                            {sel && <Check className="h-3 w-3 stroke-[3]" />}
                          </span>
                          <span>{role}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                <TextArea
                  label={t.volunteerPage.notes}
                  id="v-notes"
                  name="notes"
                  rows={3}
                  placeholder={isGu ? 'આપનો પશુપ્રેમ, વ્યવસાય અથવા સેવાની પ્રેરણા વિશે...' : 'Tell us what inspires you to join our seva...'}
                  value={vNotes}
                  onChange={(e) => setVNotes(e.target.value)}
                />

                <Button type="submit" heart disabled={vLoading} className="w-full justify-center !h-12 text-sm sm:text-base">
                  {vLoading ? (isGu ? 'નોંધણી થઈ રહી છે...' : 'Registering...') : t.volunteerPage.btnSubmit}
                </Button>
              </form>
            )}
          </div>

          {/* Volunteer FAQs & Perks */}
          <div className="space-y-6 sm:space-y-8">
            <div className="rounded-2xl sm:rounded-3xl border border-line bg-cream-100 p-5 sm:p-7 shadow-soft">
              <h3 className="font-display text-lg sm:text-xl font-bold text-ink-900">
                {isGu ? 'વારંવાર પૂછાતા પ્રશ્નો (FAQs)' : 'Frequently Asked Questions'}
              </h3>
              <div className="mt-4 space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-line/60 pb-3 last:border-b-0 last:pb-0">
                    <h4 className="font-display text-sm font-bold text-ink-900">{faq.q}</h4>
                    <p className="mt-1 text-xs sm:text-sm text-ink-700 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
