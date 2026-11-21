'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { Language, TRANSLATIONS } from '@/lib/translations'

type TranslationDict = (typeof TRANSLATIONS)['en']

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language, remember?: boolean) => void
  toggleLanguage: () => void
  t: TranslationDict
  isLanguageModalOpen: boolean
  setIsLanguageModalOpen: (open: boolean) => void
  isGu: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const STORAGE_KEY = 'gauseva_preferred_language'
const REMEMBER_KEY = 'gauseva_remember_language_pref'
const SESSION_ASKED_KEY = 'gauseva_language_prompt_shown'

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('gu')
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Check if user has a remembered preference
    const remembered = localStorage.getItem(STORAGE_KEY) as Language | null
    const rememberPref = localStorage.getItem(REMEMBER_KEY) === 'true'
    const sessionAsked = sessionStorage.getItem(SESSION_ASKED_KEY)

    if (remembered && (remembered === 'en' || remembered === 'gu')) {
      setLanguageState(remembered)
    } else {
      setLanguageState('gu')
    }

    // "on the first loading or every loading, it should ask for the languages"
    // If not explicitly remembered with preference, or if not yet prompted in this browser session:
    if (!rememberPref || !sessionAsked) {
      // Small timeout for smooth appearance after hydration
      const timer = setTimeout(() => {
        setIsLanguageModalOpen(true)
        sessionStorage.setItem(SESSION_ASKED_KEY, 'true')
      }, 400)
      return () => clearTimeout(timer)
    }
  }, [])

  const setLanguage = (lang: Language, remember: boolean = true) => {
    setLanguageState(lang)
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(SESSION_ASKED_KEY, 'true')
      if (remember) {
        localStorage.setItem(STORAGE_KEY, lang)
        localStorage.setItem(REMEMBER_KEY, 'true')
      } else {
        localStorage.removeItem(REMEMBER_KEY)
      }
    }
    setIsLanguageModalOpen(false)
  }

  const toggleLanguage = () => {
    const nextLang = language === 'en' ? 'gu' : 'en'
    setLanguage(nextLang, true)
  }

  const currentTranslations = TRANSLATIONS[language] as TranslationDict

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t: currentTranslations,
        isLanguageModalOpen,
        setIsLanguageModalOpen,
        isGu: language === 'gu',
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
