import React from 'react'

type Base = { label: string; name: string; error?: string; hint?: string; optional?: boolean; className?: string }

/** Labelled input with friendly inline error. */
export function Field({
  label,
  name,
  error,
  hint,
  optional,
  className = '',
  ...input
}: Base & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className={`block ${className}`}>
      <span className="flex items-baseline justify-between text-sm font-medium text-ink-900">
        {label}
        {optional && <span className="text-xs font-normal text-ink-500">Optional</span>}
      </span>
      <input
        name={name}
        aria-invalid={!!error}
        className={`mt-2 h-12 w-full rounded-2xl border-[1.5px] bg-cream-50 px-4 text-base text-ink-900 outline-none transition-[border-color] duration-150 ease-out placeholder:text-ink-500/70 focus:border-rust-600 ${
          error ? 'border-rose-500' : 'border-line'
        }`}
        {...input}
      />
      {error ? (
        <span role="alert" className="mt-1.5 block text-sm text-rose-500">
          {error}
        </span>
      ) : (
        hint && <span className="mt-1.5 block text-sm text-ink-500">{hint}</span>
      )}
    </label>
  )
}

export function TextArea({
  label,
  name,
  error,
  optional,
  className = '',
  ...rest
}: Base & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <label className={`block ${className}`}>
      <span className="flex items-baseline justify-between text-sm font-medium text-ink-900">
        {label}
        {optional && <span className="text-xs font-normal text-ink-500">Optional</span>}
      </span>
      <textarea
        name={name}
        aria-invalid={!!error}
        className={`mt-2 min-h-[132px] w-full rounded-2xl border-[1.5px] bg-cream-50 px-4 py-3 text-base text-ink-900 outline-none transition-[border-color] duration-150 ease-out placeholder:text-ink-500/70 focus:border-rust-600 ${
          error ? 'border-rose-500' : 'border-line'
        }`}
        {...rest}
      />
      {error && (
        <span role="alert" className="mt-1.5 block text-sm text-rose-500">
          {error}
        </span>
      )}
    </label>
  )
}

/** Hidden honeypot — bots fill it, people never see it. */
export function Honeypot() {
  return (
    <input type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden className="absolute -left-[9999px] h-0 w-0 opacity-0" />
  )
}
