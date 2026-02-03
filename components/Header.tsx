'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-dark border-b border-dark-lighter">
      {/* Top bar with contact info */}
      <div className="hidden md:flex justify-end items-center gap-6 px-6 py-3 text-sm text-gray-400">
        <a href="tel:+32472129584" className="flex items-center gap-2 hover:text-white transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          +32 472 12 95 84
        </a>
        <a href="mailto:info@andres-technics.be" className="flex items-center gap-2 hover:text-white transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          info@andres-technics.be
        </a>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary flex items-center justify-center rounded">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-white font-display font-bold text-xl">Andres-Technics</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white hover:text-primary transition-colors">Home</Link>
            <Link href="#diensten" className="text-white hover:text-primary transition-colors">Diensten</Link>
            <Link href="#over-ons" className="text-white hover:text-primary transition-colors">Over ons</Link>
            <Link href="#contact" className="text-white hover:text-primary transition-colors">Contact</Link>
            <Link href="#contact" className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors font-medium">
              Vraag offerte aan
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link href="/" className="block text-white hover:text-primary transition-colors">Home</Link>
            <Link href="#diensten" className="block text-white hover:text-primary transition-colors">Diensten</Link>
            <Link href="#over-ons" className="block text-white hover:text-primary transition-colors">Over ons</Link>
            <Link href="#contact" className="block text-white hover:text-primary transition-colors">Contact</Link>
            <Link href="#contact" className="block bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors font-medium text-center">
              Vraag offerte aan
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

