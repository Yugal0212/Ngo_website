'use client'

import React, { useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { Check, Globe, Sparkles, X } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { Language } from '@/lib/translations'

export function LanguageModal() {
  const { language, setLanguage, isLanguageModalOpen, setIsLanguageModalOpen, isGu } = useLanguage()
  const [remember, setRemember] = useState(true)

  const handleSelect = (lang: Language) => {
    setLanguage(lang, remember)
  }

  return (
    <AnimatePresence>
      {isLanguageModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
          {/* Backdrop */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsLanguageModalOpen(false)}
            className="fixed inset-0 bg-brown-900/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Container: Bottom sheet on mobile, centered dialog on sm+ */}
          <m.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="lang-modal-title"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-lg rounded-t-[32px] sm:rounded-[32px] border border-line/60 bg-cream-50 p-6 sm:p-8 shadow-2xl max-h-[92vh] overflow-y-auto"
          >
            {/* Mobile drag handle indicator */}
            <div className="mx-auto -mt-2 mb-4 h-1.5 w-12 rounded-full bg-sand-300 sm:hidden" />

            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-peach-100 text-rust-600 shadow-sm">
                  <Globe className="h-6 w-6" aria-hidden />
                </span>
                <div>
                  <h2 id="lang-modal-title" className="font-display text-xl sm:text-2xl font-bold text-ink-900 leading-tight">
                    પસંદ કરો / Choose Language
                  </h2>
                  <p className="mt-0.5 text-xs sm:text-sm text-ink-500">
                    આપની અનુકૂળ ભાષા પસંદ કરો · Select your language
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsLanguageModalOpen(false)}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-ink-500 hover:bg-peach-100 hover:text-ink-900 transition-colors active:scale-95"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Language Options Cards */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {/* 1. Gujarati Card */}
              <button
                type="button"
                onClick={() => handleSelect('gu')}
                className={`group relative flex flex-col items-start rounded-2xl border-2 p-4 text-left transition-all active:scale-[0.98] ${
                  language === 'gu'
                    ? 'border-rust-600 bg-peach-100/70 shadow-soft'
                    : 'border-line bg-cream-100/60 hover:border-rust-600/40 hover:bg-peach-100/30'
                }`}
              >
                <div className="flex w-full items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-rust-600/10 px-2.5 py-0.5 text-[11px] font-semibold text-rust-700">
                    <Sparkles className="h-3 w-3" />
                    મુખ્ય ભાષા / Default
                  </span>
                  {language === 'gu' && (
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-rust-600 text-white">
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </span>
                  )}
                </div>

                <div className="mt-3">
                  <span className="font-display text-2xl font-bold text-ink-900">
                    ગુજરાતી
                  </span>
                  <p className="mt-1 text-xs text-ink-700 leading-relaxed font-medium">
                    સંપૂર્ણ વેબસાઇટ આપણી માતૃભાષા ગુજરાતીમાં જુઓ
                  </p>
                </div>

                <span className="mt-4 inline-flex items-center text-xs font-bold text-rust-600 group-hover:underline">
                  ગુજરાતીમાં આગળ વધો →
                </span>
              </button>

              {/* 2. English Card */}
              <button
                type="button"
                onClick={() => handleSelect('en')}
                className={`group relative flex flex-col items-start rounded-2xl border-2 p-4 text-left transition-all active:scale-[0.98] ${
                  language === 'en'
                    ? 'border-rust-600 bg-peach-100/70 shadow-soft'
                    : 'border-line bg-cream-100/60 hover:border-rust-600/40 hover:bg-peach-100/30'
                }`}
              >
                <div className="flex w-full items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brown-900/10 px-2.5 py-0.5 text-[11px] font-semibold text-brown-900">
                    English
                  </span>
                  {language === 'en' && (
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-rust-600 text-white">
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </span>
                  )}
                </div>

                <div className="mt-3">
                  <span className="font-display text-2xl font-bold text-ink-900">
                    English
                  </span>
                  <p className="mt-1 text-xs text-ink-700 leading-relaxed font-medium">
                    Browse the complete website in English
                  </p>
                </div>

                <span className="mt-4 inline-flex items-center text-xs font-bold text-rust-600 group-hover:underline">
                  Continue in English →
                </span>
              </button>
            </div>

            {/* Remember choice toggle */}
            <div className="mt-6 flex items-center justify-between border-t border-line/60 pt-4">
              <label className="flex items-center gap-2.5 text-xs sm:text-sm text-ink-700 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="h-4 w-4 rounded border-line text-rust-600 focus:ring-rust-500"
                />
                <span>આ ડિવાઇસ પર યાદ રાખો / Remember preference</span>
              </label>

              <button
                type="button"
                onClick={() => setIsLanguageModalOpen(false)}
                className="text-xs font-semibold text-ink-500 hover:text-rust-600 underline"
              >
                {isGu ? 'બંધ કરો' : 'Dismiss'}
              </button>
            </div>
          </m.div>
        </div>
      )}
    </AnimatePresence>
  )
}
