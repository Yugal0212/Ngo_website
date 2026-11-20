export const ease = [0.22, 1, 0.36, 1] as const
export const dur = { fast: 0.18, base: 0.3 }

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease } },
}

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
}

export const inView = { once: true, margin: '-80px' } as const
