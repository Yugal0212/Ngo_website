import { NavItem, PlanItem, StatItem } from '@/types'

/**
 * Site content configuration.
 * Positivity Donation — registration in progress.
 */
export const BRAND = {
  name: 'GauSeva',
  legalName: 'Positivity Donation', // Registration in progress — never claim 80G / 12A / FCRA
  tagline: 'Care • Shelter • Compassion',
  founder: '[OWNER NAME]',
  registrationStatus: 'Registration in progress',
}

export const NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Our Work',
    href: '/what-we-do',
    children: [
      { label: 'Gau Seva', note: 'Cow care', href: '/what-we-do#gau-seva' },
      { label: 'Shiksha', note: 'Education', href: '/what-we-do#shiksha' },
      { label: 'How Funds Are Used', href: '/what-we-do#funds' },
      { label: 'Future Plans', href: '/what-we-do#future' },
    ],
  },
  { label: 'Gallery', href: '/gallery' },
  {
    label: 'Get Involved',
    href: '/volunteer',
    children: [
      { label: 'Donate', href: '/donate' },
      { label: 'Volunteer', href: '/volunteer' },
      { label: 'Partner', href: '/contact?subject=partner' },
      { label: 'Spread the Word', href: '/gallery?share=1' },
    ],
  },
  { label: 'Contact', href: '/contact' },
]

export const STATS: readonly StatItem[] = [
  { value: 500, suffix: '+', label: 'Cows Cared', aria: '500 plus cows cared for', icon: 'cow' },
  { value: 10, suffix: 'K+', label: 'Lives Touched', aria: '10 thousand plus lives touched', icon: 'people' },
  { value: 1, suffix: 'K+', label: 'Donors', aria: '1 thousand plus donors', icon: 'heart' },
] as const

export const COW_PLANS: PlanItem[] = [
  { id: 'day', label: 'One day', amount: 200, does: 'One day of fresh fodder for one cow' },
  { id: 'week', label: 'One week', amount: 1400, does: 'A full week of meals for one cow' },
  { id: 'month', label: 'One month', amount: 6000, does: 'Keeps one cow fed at home for a month' },
  { id: 'year', label: 'One year', amount: 72000, does: 'A whole year of food for one cow' },
]

export const EDU_PLANS: PlanItem[] = [
  { id: 'stationery', label: 'Stationery kit', amount: 500, does: 'Notebooks, pencils and a geometry box' },
  { id: 'food', label: 'Monthly food', amount: 1500, does: 'Daily meals for one child for a month' },
  { id: 'books', label: 'Books + uniform', amount: 3000, does: 'A full school year of books and a uniform' },
  { id: 'sponsor', label: 'Sponsor a child', amount: 5000, does: 'Food, stay and school needs for a month' },
]

export const CONTACT = {
  phone: '+91 [PHONE]',
  email: 'hello@[DOMAIN].org',
  whatsapp: '+91 [WHATSAPP]',
  address: '[Gushala address], [Village], [District], [State] — [PIN]',
}

export const SOCIALS = [
  { label: 'Instagram', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'YouTube', href: '#' },
]

export const inr = (n: number) => '₹' + n.toLocaleString('en-IN')
