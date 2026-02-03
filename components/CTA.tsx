'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="bg-gradient-to-b from-dark-light via-dark to-dark-light py-20 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Klaar om <span className="gradient-text">samen te werken</span>?
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
          style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, letterSpacing: 0 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Bespreek uw project met ons en ontvang een vrijblijvende offerte. Wij staan klaar om u te helpen.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Link
            href="#contact"
            className="btn-gradient text-white px-8 py-4 rounded-lg font-medium flex items-center justify-center gap-2"
          >
            Vraag offerte aan
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="tel:+32472129584"
            className="bg-dark-light text-white px-8 py-4 rounded-lg hover:bg-dark-lighter transition-all duration-300 font-medium flex items-center justify-center gap-2 border border-dark-lighter hover-glow"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +32 472 12 95 84
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
