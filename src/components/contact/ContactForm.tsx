'use client'

import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { CheckCircle2, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'

import { Button } from '@/components/common/Button'
import { Field, TextArea, Honeypot } from '@/components/common/Field'
import { CONTACT } from '@/config/site'

const SUBJECTS = [
  { id: 'general', label: 'General Inquiry' },
  { id: 'partner', label: 'Partnership / CSR Collaboration' },
  { id: 'visit', label: 'Visit the Gushala' },
  { id: 'adopt', label: 'Support a Specific Cow' },
  { id: 'shiksha', label: 'Shiksha Child Sponsorship' },
]

export function ContactForm() {
  const searchParams = useSearchParams()
  const initialSubject = searchParams.get('subject') || 'general'

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState(initialSubject)
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (searchParams.get('subject')) {
      setSubject(searchParams.get('subject')!)
    }
  }, [searchParams])

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!name.trim()) errs.name = 'Please provide your name'
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) errs.email = 'Please provide a valid email address'
    if (!message.trim()) errs.message = 'Please write your message'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 600)
  }

  return (
    <div className="mx-auto max-w-[1500px] px-5 py-12 md:px-10 md:py-20 xl:px-[90px]">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        {/* Contact details */}
        <div>
          <span className="font-display text-sm font-bold uppercase tracking-wider text-rust-600">Get In Touch</span>
          <h2 className="mt-2 font-display text-[32px] font-bold text-ink-900 md:text-[40px] leading-tight">
            We’d love to hear from you
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-700 md:text-lg">
            Have questions about donating, visiting our sanctuary, or partnering with our initiatives? Reach out anytime.
          </p>

          <dl className="mt-8 space-y-6">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-peach-100 text-rust-600">
                <MapPin className="h-6 w-6" />
              </span>
              <div>
                <dt className="font-display text-sm font-semibold text-ink-500">Address</dt>
                <dd className="mt-0.5 text-base font-medium text-ink-900">{CONTACT.address}</dd>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-peach-100 text-rust-600">
                <Phone className="h-6 w-6" />
              </span>
              <div>
                <dt className="font-display text-sm font-semibold text-ink-500">Phone</dt>
                <dd className="mt-0.5 text-base font-medium text-ink-900">
                  <a href={`tel:${CONTACT.phone}`} className="hover:text-rust-600">{CONTACT.phone}</a>
                </dd>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-peach-100 text-rust-600">
                <Mail className="h-6 w-6" />
              </span>
              <div>
                <dt className="font-display text-sm font-semibold text-ink-500">Email</dt>
                <dd className="mt-0.5 text-base font-medium text-ink-900">
                  <a href={`mailto:${CONTACT.email}`} className="hover:text-rust-600">{CONTACT.email}</a>
                </dd>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-peach-100 text-rust-600">
                <MessageCircle className="h-6 w-6" />
              </span>
              <div>
                <dt className="font-display text-sm font-semibold text-ink-500">WhatsApp</dt>
                <dd className="mt-0.5 text-base font-medium text-ink-900">
                  <a href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-rust-600">
                    {CONTACT.whatsapp}
                  </a>
                </dd>
              </div>
            </div>
          </dl>

          <div className="mt-10 rounded-2xl bg-peach-100 p-5 border border-rust-600/10">
            <h4 className="font-display text-sm font-bold text-rust-700">Visiting Hours</h4>
            <p className="mt-1 text-xs text-ink-700 leading-relaxed">
              Every morning from 6:30 AM – 11:30 AM and evenings 4:00 PM – 7:00 PM. Kindly notify us before visiting.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-[32px] bg-cream-100 p-7 sm:p-10 border border-line shadow-soft">
          {submitted ? (
            <div className="py-12 text-center">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-peach-100 text-leaf-600">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold text-ink-900">Message Received!</h3>
              <p className="mt-2 text-sm text-ink-700 max-w-sm mx-auto">
                Thank you for reaching out. We will get back to you within 24–48 hours.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false)
                  setName('')
                  setEmail('')
                  setPhone('')
                  setMessage('')
                }}
                className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-rust-600 px-6 font-display text-sm font-semibold text-white hover:bg-rust-500"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Honeypot />
              <Field
                label="Your Name"
                name="name"
                placeholder="Deepak Verma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={errors.name}
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="deepak@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={errors.email}
                />
                <Field
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  placeholder="9876543210"
                  optional
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-ink-900 mb-2">Subject</label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="h-12 w-full rounded-2xl border-[1.5px] border-line bg-cream-50 px-4 text-base text-ink-900 outline-none focus:border-rust-600"
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
                name="message"
                placeholder="Tell us how you would like to connect or ask any questions..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                error={errors.message}
              />

              <Button
                type="submit"
                size="lg"
                className="w-full mt-2"
                arrow={false}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
