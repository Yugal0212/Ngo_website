'use client'

import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { CheckCircle2, HeartHandshake, Mail, MapPin, MessageCircle, Phone, Send, Sparkles, Users } from 'lucide-react'

import { Button } from '@/components/common/Button'
import { Field, TextArea, Honeypot } from '@/components/common/Field'
import { FAQ } from '@/components/common/FAQ'
import { CONTACT } from '@/config/site'

const SUBJECTS = [
  { id: 'general', label: 'General Inquiry' },
  { id: 'partner', label: 'Partnership / CSR Collaboration' },
  { id: 'visit', label: 'Visit the Gushala' },
  { id: 'adopt', label: 'Support a Specific Cow' },
  { id: 'shiksha', label: 'Shiksha Child Sponsorship' },
]

const ROLES = [
  'Weekend Fodder Distribution',
  'Care & Cleaning at Gushala',
  'Shiksha Student Tutoring',
  'Photography & Journaling',
  'Medical & Vet Assistance',
]

const VOLUNTEER_FAQS = [
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

export function ContactHub({ defaultTab = 'contact' }: { defaultTab?: 'contact' | 'volunteer' }) {
  const searchParams = useSearchParams()
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

  const toggleRole = (r: string) => {
    setSelectedRoles((prev) =>
      prev.includes(r) ? prev.filter((x) => x !== r) : [...prev, r]
    )
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs: Record<string, string> = {}
    if (!cName.trim()) errs.name = 'Please provide your name'
    if (!cEmail.trim() || !/^\S+@\S+\.\S+$/.test(cEmail)) errs.email = 'Please provide a valid email address'
    if (!cMessage.trim()) errs.message = 'Please write your message'
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
    if (!vName.trim()) errs.name = 'Please provide your name'
    if (!vEmail.trim() || !/^\S+@\S+\.\S+$/.test(vEmail)) errs.email = 'Please provide a valid email address'
    if (!vPhone.trim()) errs.phone = 'Please provide a contact phone number'
    setVErrors(errs)
    if (Object.keys(errs).length > 0) return

    setVLoading(true)
    setTimeout(() => {
      setVLoading(false)
      setVSubmitted(true)
    }, 500)
  }

  return (
    <div className="mx-auto max-w-[1500px] px-4 sm:px-6 md:px-10 py-10 md:py-16 xl:px-[90px]">
      {/* Interactive Tabs Header: Connect vs Volunteer */}
      <div className="flex justify-center mb-10 sm:mb-14">
        <div className="inline-flex rounded-full border border-line bg-cream-100 p-1.5 shadow-soft">
          <button
            type="button"
            onClick={() => setActiveTab('contact')}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-display text-xs sm:text-sm font-semibold transition-all duration-150 ${
              activeTab === 'contact'
                ? 'bg-rust-600 text-white shadow-soft'
                : 'text-ink-700 hover:text-ink-900'
            }`}
          >
            <MessageCircle className="h-4 w-4" />
            Get In Touch & Visit
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('volunteer')}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-display text-xs sm:text-sm font-semibold transition-all duration-150 ${
              activeTab === 'volunteer'
                ? 'bg-rust-600 text-white shadow-soft'
                : 'text-ink-700 hover:text-ink-900'
            }`}
          >
            <HeartHandshake className="h-4 w-4" />
            Volunteer With Us
          </button>
        </div>
      </div>

      {/* TAB 1: CONTACT & VISIT */}
      {activeTab === 'contact' && (
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 items-start">
          {/* Details */}
          <div>
            <span className="font-display text-xs font-bold uppercase tracking-wider text-rust-600">
              Sanctuary Contact
            </span>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-bold text-ink-900 leading-tight">
              We’d love to welcome and hear from you
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-ink-700">
              Have questions about cow seva, scheduling a family gushala visit, sponsoring children’s midday meals, or corporate CSR partnerships? Reach out anytime.
            </p>

            <dl className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-peach-100 text-rust-600">
                  <MapPin className="h-6 w-6" />
                </span>
                <div>
                  <dt className="font-display text-xs font-semibold uppercase tracking-wide text-ink-500">Sanctuary Address</dt>
                  <dd className="mt-0.5 text-sm sm:text-base font-medium text-ink-900">{CONTACT.address}</dd>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-peach-100 text-rust-600">
                  <Phone className="h-6 w-6" />
                </span>
                <div>
                  <dt className="font-display text-xs font-semibold uppercase tracking-wide text-ink-500">Phone</dt>
                  <dd className="mt-0.5 text-sm sm:text-base font-medium text-ink-900">
                    <a href={`tel:${CONTACT.phone}`} className="hover:text-rust-600">{CONTACT.phone}</a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-peach-100 text-rust-600">
                  <Mail className="h-6 w-6" />
                </span>
                <div>
                  <dt className="font-display text-xs font-semibold uppercase tracking-wide text-ink-500">Email</dt>
                  <dd className="mt-0.5 text-sm sm:text-base font-medium text-ink-900">
                    <a href={`mailto:${CONTACT.email}`} className="hover:text-rust-600">{CONTACT.email}</a>
                  </dd>
                </div>
              </div>
            </dl>

            {/* Visiting Hours Callout */}
            <div className="mt-8 rounded-3xl border border-line bg-cream-100 p-6 shadow-soft">
              <h3 className="font-display text-base font-bold text-ink-900">Visiting Hours for Darshan & Seva</h3>
              <p className="mt-2 text-xs sm:text-sm text-ink-700 leading-relaxed">
                Open all 7 days from <strong>6:30 AM to 6:30 PM</strong>. Morning Gau-Puja is held daily at 7:30 AM, and Evening Aarti at 5:30 PM.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-line bg-cream-50 p-6 sm:p-8 md:p-10 shadow-lift">
            {cSubmitted ? (
              <div className="py-8 text-center">
                <CheckCircle2 className="mx-auto h-14 w-14 text-rust-600" />
                <h3 className="mt-4 font-display text-2xl font-bold text-ink-900">Message Received with Gratitude</h3>
                <p className="mt-3 text-sm text-ink-700 leading-relaxed">
                  Thank you for reaching out, <strong>{cName}</strong>. Our seva team will reply via email or phone within 24 hours.
                </p>
                <Button onClick={() => setCSubmitted(false)} className="mt-6" variant="outline">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} noValidate className="space-y-5">
                <Honeypot />
                <Field
                  label="Your Full Name"
                  id="c-name"
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. Ramesh Sharma"
                  value={cName}
                  onChange={(e) => setCName(e.target.value)}
                  error={cErrors.name}
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Email Address"
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
                    label="Phone / WhatsApp (Optional)"
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
                    Topic of Inquiry
                  </label>
                  <select
                    id="c-subject"
                    name="subject"
                    value={cSubject}
                    onChange={(e) => setCSubject(e.target.value)}
                    className="mt-1.5 w-full rounded-2xl border border-line bg-cream-50 px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-rust-600 focus:ring-1 focus:ring-rust-600"
                  >
                    {SUBJECTS.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>

                <TextArea
                  label="Your Message"
                  id="c-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="How can we assist you or plan your visit?"
                  value={cMessage}
                  onChange={(e) => setCMessage(e.target.value)}
                  error={cErrors.message}
                />

                <Button type="submit" heart disabled={cLoading} className="w-full justify-center">
                  <Send className="h-4 w-4 mr-2" />
                  {cLoading ? 'Sending message...' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* TAB 2: VOLUNTEER WITH US */}
      {activeTab === 'volunteer' && (
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 items-start">
          {/* Volunteer Form */}
          <div className="rounded-3xl border border-line bg-cream-50 p-6 sm:p-8 md:p-10 shadow-lift">
            <span className="font-display text-xs font-bold uppercase tracking-wider text-rust-600">
              Join Our Seva Family
            </span>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-ink-900">
              Volunteer Application
            </h2>
            <p className="mt-2 text-sm text-ink-700">
              Give your time, skills, or presence. Everyone is welcome to contribute with devotion.
            </p>

            {vSubmitted ? (
              <div className="py-8 text-center">
                <CheckCircle2 className="mx-auto h-14 w-14 text-rust-600" />
                <h3 className="mt-4 font-display text-2xl font-bold text-ink-900">Welcome to the GauSeva Family!</h3>
                <p className="mt-3 text-sm text-ink-700 leading-relaxed">
                  Thank you, <strong>{vName}</strong>! Our volunteer lead will reach out on WhatsApp/phone to welcome you to our upcoming seva session.
                </p>
                <Button onClick={() => setVSubmitted(false)} className="mt-6" variant="outline">
                  Submit Another Response
                </Button>
              </div>
            ) : (
              <form onSubmit={handleVolunteerSubmit} noValidate className="mt-6 space-y-5">
                <Honeypot />
                <Field
                  label="Full Name"
                  id="v-name"
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. Priya Patel"
                  value={vName}
                  onChange={(e) => setVName(e.target.value)}
                  error={vErrors.name}
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Email"
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
                    label="WhatsApp / Phone"
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
                  <label className="block text-xs font-semibold uppercase tracking-wider text-ink-700 mb-2">
                    Areas of Interest (Select all that apply)
                  </label>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {ROLES.map((r) => {
                      const sel = selectedRoles.includes(r)
                      return (
                        <button
                          key={r}
                          type="button"
                          onClick={() => toggleRole(r)}
                          className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-left text-xs sm:text-sm transition-colors ${
                            sel
                              ? 'border-rust-600 bg-peach-100 font-semibold text-rust-700'
                              : 'border-line bg-cream-100 text-ink-700 hover:bg-peach-100/50'
                          }`}
                        >
                          <span
                            className={`grid h-4 w-4 shrink-0 place-items-center rounded border ${
                              sel ? 'border-rust-600 bg-rust-600 text-white' : 'border-line bg-cream-50'
                            }`}
                          >
                            {sel && '✓'}
                          </span>
                          <span className="truncate">{r}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div>
                  <label htmlFor="v-availability" className="block text-xs font-semibold uppercase tracking-wider text-ink-700 mb-1.5">
                    Your Availability
                  </label>
                  <select
                    id="v-availability"
                    name="availability"
                    value={availability}
                    onChange={(e) => setAvailability(e.target.value)}
                    className="w-full rounded-2xl border border-line bg-cream-50 px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-rust-600 focus:ring-1 focus:ring-rust-600"
                  >
                    <option value="Weekends">Weekends (Saturday or Sunday mornings)</option>
                    <option value="Weekdays">Weekdays (Morning or Afternoon)</option>
                    <option value="Flexible">Flexible / On-call for emergency rescues</option>
                    <option value="Remote">Remote (Social media, writing, design)</option>
                  </select>
                </div>

                <TextArea
                  label="Tell us a little about yourself (Optional)"
                  id="v-notes"
                  name="notes"
                  rows={3}
                  placeholder="Any skills, motivations, or questions you have?"
                  value={vNotes}
                  onChange={(e) => setVNotes(e.target.value)}
                />

                <Button type="submit" heart disabled={vLoading} className="w-full justify-center">
                  <Sparkles className="h-4 w-4 mr-2" />
                  {vLoading ? 'Submitting Application...' : 'Sign Up as a Volunteer'}
                </Button>
              </form>
            )}
          </div>

          {/* Volunteer FAQs & Perks */}
          <div className="space-y-8">
            <div>
              <span className="font-display text-xs font-bold uppercase tracking-wider text-rust-600">
                Frequently Asked Questions
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold text-ink-900">
                What it feels like to volunteer
              </h3>
            </div>

            <FAQ items={VOLUNTEER_FAQS} />

            <div className="rounded-3xl border border-sand-300 bg-sand-300/40 p-6">
              <h4 className="font-display text-base font-bold text-brown-900">Corporate & Group Seva Drives</h4>
              <p className="mt-2 text-xs sm:text-sm text-ink-700 leading-relaxed">
                Organizing a group visit with colleagues, school classes, or spiritual study circles? We can customize dedicated half-day seva itineraries with guided sanctuary tours and community midday feasts.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
