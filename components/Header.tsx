'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.header 
      className="bg-dark/95 backdrop-blur-sm border-b border-dark-lighter sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Top bar with contact info */}
      <motion.div 
        className="hidden md:flex justify-end items-center gap-6 px-6 py-3 text-sm text-gray-400"
        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, letterSpacing: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <a href="tel:+32472129584" className="flex items-center gap-2 hover:text-white transition-colors group" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, letterSpacing: 0 }}>
          <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>+32 472 12 95 84</span>
        </a>
        <a href="mailto:info@andres-technics.be" className="flex items-center gap-2 hover:text-white transition-colors group" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, letterSpacing: 0 }}>
          <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>info@andres-technics.be</span>
        </a>
      </motion.div>

      {/* Main navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div 
                className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center rounded group-hover:scale-110 transition-transform"
                whileHover={{ rotate: 5 }}
              >
                <span className="text-white font-bold text-xl">A</span>
              </motion.div>
              <span className="text-white font-display font-bold text-xl">Andres-Technics</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-white hover:text-primary transition-colors relative group text-base" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, letterSpacing: 0 }}>
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="#diensten" className="text-white hover:text-primary transition-colors relative group text-base" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, letterSpacing: 0 }}>
              Diensten
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="#over-ons" className="text-white hover:text-primary transition-colors relative group text-base" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, letterSpacing: 0 }}>
              Over ons
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="#contact" className="text-white hover:text-primary transition-colors relative group text-base" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, letterSpacing: 0 }}>
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="#contact" className="btn-gradient text-white px-6 py-2 rounded-lg font-medium text-base" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, letterSpacing: 0 }}>
              Vraag offerte aan
            </Link>
          </motion.div>

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
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden mt-4 pb-4 space-y-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="/" className="block text-white hover:text-primary transition-colors">Home</Link>
              <Link href="#diensten" className="block text-white hover:text-primary transition-colors">Diensten</Link>
              <Link href="#over-ons" className="block text-white hover:text-primary transition-colors">Over ons</Link>
              <Link href="#contact" className="block text-white hover:text-primary transition-colors">Contact</Link>
              <Link href="#contact" className="block btn-gradient text-white px-6 py-2 rounded-lg font-medium text-center">
                Vraag offerte aan
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
