'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="over-ons" className="py-20 bg-gradient-to-b from-dark to-dark-light">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden hover-glow"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="https://static.wixstatic.com/media/0a84da_8b7f0d8d5ad4446cb936c6413a4dcf2b~mv2.jpg/v1/fill/w_880,h_680,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/0a84da_8b7f0d8d5ad4446cb936c6413a4dcf2b~mv2.jpg"
              alt="Over Andres-Technics"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-display font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Over <span className="gradient-text">Andres-Technics</span>
            </motion.h2>
            <motion.p
              className="text-lg text-gray-300 leading-relaxed"
              style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, letterSpacing: 0 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Met meer dan 15 jaar ervaring in de sector zijn wij uw betrouwbare partner voor alle sanitair-, verwarmings- en ontstopping werken. Wij staan bekend om onze vakkundigheid, betrouwbaarheid en persoonlijke aanpak.
            </motion.p>
            <motion.p
              className="text-lg text-gray-300 leading-relaxed"
              style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, letterSpacing: 0 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Ons team van erkende installateurs staat klaar om u te helpen met zowel kleine herstellingen als grote renovatieprojecten. Wij werken uitsluitend met kwaliteitsvolle materialen en zorgen voor een nette afwerking.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Link
                href="#contact"
                className="btn-gradient inline-flex items-center gap-2 text-white px-8 py-4 rounded-lg font-medium"
              >
                Neem contact op
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
