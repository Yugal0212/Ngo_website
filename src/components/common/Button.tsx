'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Heart } from 'lucide-react'

type Props = {
  children: React.ReactNode
  variant?: 'solid' | 'outline' | 'light'
  size?: 'md' | 'lg' | 'sm'
  heart?: boolean
  arrow?: boolean
  href?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

/** Pill button. Solid = the one rust CTA per section; outline = secondary. */
export function Button({
  children,
  variant = 'solid',
  size = 'md',
  heart,
  arrow = true,
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}: Props) {
  const sizes = {
    sm: 'h-11 px-5 text-[15px] gap-2',
    md: 'h-12 px-6 text-base gap-2.5',
    lg: 'h-[52px] px-7 text-[17px] gap-3',
  }
  const variants = {
    solid:
      'bg-rust-600 text-white shadow-soft hover:bg-rust-500 hover:-translate-y-0.5 hover:shadow-lift active:bg-rust-700',
    outline:
      'border-[1.5px] border-rust-600/40 text-ink-900 hover:bg-peach-100 hover:border-rust-600',
    light: 'bg-cream-50 text-rust-700 hover:bg-peach-100 hover:-translate-y-0.5',
  }
  const cls = `group inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full font-display font-semibold transition-[transform,background-color,border-color,box-shadow] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] ${sizes[size]} ${variants[variant]} ${className}`
  const inner = (
    <>
      {heart && <Heart className="h-[18px] w-[18px] fill-current" aria-hidden />}
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
          aria-hidden
        />
      )}
    </>
  )
  if (href) {
    if (href.startsWith('http')) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick} className={cls}>
          {inner}
        </a>
      )
    }
    return (
      <Link href={href} onClick={onClick} className={cls}>
        {inner}
      </Link>
    )
  }
  return (
    <button type={type} disabled={disabled} onClick={onClick} className={cls}>
      {inner}
    </button>
  )
}
