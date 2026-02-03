'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="container mx-auto px-6 py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Content */}
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div 
            className="inline-block bg-gradient-to-r from-dark-light to-dark-lighter px-4 py-2 rounded-full text-sm text-white border border-dark-lighter hover-glow"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            • Erkend gasinstallateur (G1)
          </motion.div>

          {/* Main heading */}
          <motion.h1 
            className="text-4xl md:text-6xl font-display font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Uw expert in{' '}
            <span className="gradient-text">sanitair</span>,{' '}
            <span className="gradient-text">verwarming</span>{' '}
            & <span className="gradient-text">ontstopping</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            className="text-lg text-gray-300 leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, letterSpacing: 0 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Professionele installaties en renovaties in de regio Temse, Sint-Niklaas, Bornem en omstreken. Betrouwbaar, vakkundig en persoonlijke service.
          </motion.p>

          {/* Features */}
          <motion.div 
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {['Gratis offerte', 'Snelle service', '15+ jaar ervaring'].map((feature, index) => (
              <motion.div
                key={feature}
                className="flex items-center gap-3 text-white text-base"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, letterSpacing: 0 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
              >
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {feature === '15+ jaar ervaring' ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  )}
                </svg>
                <span>{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
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
              className="bg-dark-light text-white px-8 py-4 rounded-lg hover:bg-dark-lighter transition-all duration-300 font-medium flex items-center justify-center gap-2 hover-glow"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Bel direct
            </Link>
          </motion.div>
        </motion.div>

        {/* Right side - Image */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <motion.div 
            className="relative w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden hover-glow"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="https://static.wixstatic.com/media/0a84da_1ef6c159e3e74ceb887c9038ae9b972f~mv2.jpg/v1/fill/w_960,h_691,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/0a84da_1ef6c159e3e74ceb887c9038ae9b972f~mv2.jpg"
              alt="Andres-Technics team"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          
          {/* Overlay contact card */}
          <motion.div 
            className="absolute bottom-6 left-6 bg-gradient-to-br from-dark-light/95 to-dark-lighter/95 backdrop-blur-md p-4 rounded-lg border border-dark-lighter hover-glow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center gap-2 text-white mb-2">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-sm font-medium">Direct contact</span>
            </div>
            <a href="tel:+32472129584" className="text-white font-semibold hover:text-primary transition-colors">
              +32 472 12 95 84
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
