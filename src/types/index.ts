export type NavItem = {
  label: string
  href: string
  children?: { label: string; href: string; note?: string }[]
}

export type StatItem = {
  value: number
  suffix: string
  label: string
  aria: string
  icon: 'cow' | 'people' | 'heart'
}

export type PlanItem = {
  id: string
  label: string
  amount: number
  does: string
}

export type PostCategory = 'Gau Seva' | 'Shiksha' | 'Stories' | 'Updates'

export type Post = {
  slug: string
  title: string
  excerpt: string
  cat: PostCategory
  date: string
  read: string
  img: { src: string; alt: string; w: number; h: number }
  body: string[]
  pull?: string
}

export type Story = {
  title: string
  excerpt: string
  img: { src: string; alt: string; w: number; h: number }
  body: string
}

export type Testimonial = {
  quote: string
  name: string
  role: string
}

export type Cause = 'cow' | 'education'
export type Frequency = 'once' | 'monthly'

export type DonationDetails = {
  id: string
  amount: number
  cause: Cause
  frequency: Frequency
  donorName: string
  email?: string
  phone?: string
  date?: string
}
