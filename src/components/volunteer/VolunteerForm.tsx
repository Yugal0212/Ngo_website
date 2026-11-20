'use client'

import React, { useState } from 'react'
import { CheckCircle2, HeartHandshake, Sparkles, Users } from 'lucide-react'

import { Button } from '@/components/common/Button'
import { Field, TextArea, Honeypot } from '@/components/common/Field'
import { FAQ } from '@/components/common/FAQ'

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

export function VolunteerForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [selectedRoles, setSelectedRoles] = useState<string[]>([])
  const [availability, setAvailability] = useState('Weekends')
  const [notes, setNotes] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const toggleRole = (r: string) => {
    setSelectedRoles((prev) =>
      prev.includes(r) ? prev.filter((x) => x !== r) : [...prev, r]
    )
  }

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!name.trim()) errs.name = 'Please provide your name'
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) errs.email = 'Please provide a valid email address'
    if (!phone.trim()) errs.phone = 'Please provide a contact number'
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
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <span className="font-display text-sm font-bold uppercase tracking-wider text-rust-600">Join the Family</span>
          <h2 className="mt-2 font-display text-[32px] font-bold text-ink-900 md:text-[40px] leading-tight">
            Spend a morning that stays with you
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-700 md:text-lg">
            Every weekend, students, professionals, and families come together to feed cows, repair shelters, and spend time with children in Shiksha.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-line bg-cream-100 p-5">
              <HeartHandshake className="h-6 w-6 text-rust-600" />
              <h4 className="mt-3 font-display text-base font-bold text-ink-900">Hands-on Seva</h4>
              <p className="mt-1 text-xs text-ink-700 leading-relaxed">
                Feed fresh greens, brush cows, and learn their unique personalities and stories.
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-cream-100 p-5">
              <Users className="h-6 w-6 text-rust-600" />
              <h4 className="mt-3 font-display text-base font-bold text-ink-900">Teach & Mentor</h4>
              <p className="mt-1 text-xs text-ink-700 leading-relaxed">
                Help village students with English, maths, drawing, or reading stories together.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="font-display text-xl font-bold text-ink-900 mb-6">Frequently Asked Questions</h3>
            <FAQ items={VOLUNTEER_FAQS} />
          </div>
        </div>

        {/* Volunteer Form */}
        <div className="rounded-[32px] bg-cream-100 p-7 sm:p-10 border border-line shadow-soft self-start">
          {submitted ? (
            <div className="py-12 text-center">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-peach-100 text-leaf-600">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold text-ink-900">Welcome to the Team!</h3>
              <p className="mt-2 text-sm text-ink-700 max-w-sm mx-auto">
                Thank you for your willingness to help. Our volunteer coordinator will contact you via WhatsApp for the next weekend orientation.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false)
                  setName('')
                  setEmail('')
                  setPhone('')
                  setSelectedRoles([])
                  setNotes('')
                }}
                className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-rust-600 px-6 font-display text-sm font-semibold text-white hover:bg-rust-500"
              >
                Submit Another Registration
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <Honeypot />
              <Field
                label="Full Name"
                name="name"
                placeholder="Rohit Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={errors.name}
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="rohit@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={errors.email}
                />
                <Field
                  label="Mobile Number (WhatsApp)"
                  name="phone"
                  type="tel"
                  placeholder="9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  error={errors.phone}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-ink-900 mb-2">Areas of Interest</label>
                <div className="grid gap-2">
                  {ROLES.map((role) => {
                    const checked = selectedRoles.includes(role)
                    return (
                      <button
                        key={role}
                        type="button"
                        onClick={() => toggleRole(role)}
                        className={`flex items-center gap-3 rounded-xl border p-3 text-left text-xs font-semibold transition-colors ${
                          checked
                            ? 'border-rust-600 bg-peach-100 text-rust-700'
                            : 'border-line bg-cream-50 text-ink-700 hover:bg-peach-100/50'
                        }`}
                      >
                        <span className={`grid h-4 w-4 place-items-center rounded-sm border ${checked ? 'border-rust-600 bg-rust-600 text-white' : 'border-line'}`}>
                          {checked && <CheckCircle2 className="h-3.5 w-3.5" />}
                        </span>
                        {role}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-ink-900 mb-2">Availability</label>
                <select
                  value={availability}
                  onChange={(e) => setAvailability(e.target.value)}
                  className="h-12 w-full rounded-2xl border-[1.5px] border-line bg-cream-50 px-4 text-sm text-ink-900 outline-none focus:border-rust-600"
                >
                  <option value="Weekends">Weekends (Saturday / Sunday)</option>
                  <option value="Weekdays">Weekday Mornings</option>
                  <option value="Monthly">Once a Month</option>
                  <option value="Flexible">Flexible / On Call</option>
                </select>
              </div>

              <TextArea
                label="Any message or previous experience?"
                name="notes"
                placeholder="Share anything you'd like us to know..."
                optional
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />

              <Button
                type="submit"
                size="lg"
                className="w-full mt-2"
                arrow={false}
              >
                {loading ? 'Submitting...' : 'Register as Volunteer'}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
