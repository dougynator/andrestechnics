'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can add API call here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-dark-light to-dark">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side - Contact info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="text-4xl font-display font-bold text-white mb-4">
                Neem <span className="gradient-text">contact</span> op
              </h2>
              <p className="text-lg text-gray-300" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, letterSpacing: 0 }}>
                Heeft u een vraag of wilt u een vrijblijvende offerte? Neem gerust contact met ons op, wij helpen u graag verder.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: 'location', text: 'Veldstraat 10, 9140 Temse', href: 'https://maps.google.com/?q=Veldstraat+10,+9140+Temse', type: 'location' },
                { icon: 'phone', text: 'Telefoon +32 472 12 95 84', href: 'tel:+32472129584', type: 'phone' },
                { icon: 'email', text: 'E-mail info@andres-technics.be', href: 'mailto:info@andres-technics.be', type: 'email' },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target={item.type === 'location' ? '_blank' : undefined}
                  rel={item.type === 'location' ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-3 text-gray-300 hover:text-white transition-all duration-300 group hover-glow p-3 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.type === 'location' ? (
                      <>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </>
                    ) : item.type === 'phone' ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    )}
                  </svg>
                  <span>{item.text}</span>
                </motion.a>
              ))}
            </div>

            <motion.div
              className="bg-gradient-to-br from-dark-light to-dark-lighter p-6 rounded-lg border border-dark-lighter hover-glow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-display font-bold text-white mb-2">Liever direct bellen?</h3>
              <p className="text-gray-300 mb-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, letterSpacing: 0 }}>
                Wij zijn bereikbaar op werkdagen en staan klaar om uw vragen te beantwoorden.
              </p>
              <a
                href="tel:+32472129584"
                className="btn-gradient inline-flex items-center gap-2 text-white px-6 py-3 rounded-lg font-medium"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Bel +32 472 12 95 84
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-display font-bold text-white mb-6">
              Vraag vrijblijvend een <span className="gradient-text">offerte</span> aan
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label htmlFor="firstName" className="block text-white mb-2">
                    Voornaam *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-dark-light border border-dark-lighter rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label htmlFor="lastName" className="block text-white mb-2">
                    Achternaam *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-dark-light border border-dark-lighter rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                  />
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="email" className="block text-white mb-2">
                  E-mailadres *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-dark-light border border-dark-lighter rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <label htmlFor="phone" className="block text-white mb-2">
                  Telefoonnummer
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-dark-light border border-dark-lighter rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <label htmlFor="subject" className="block text-white mb-2">
                  Onderwerp *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-dark-light border border-dark-lighter rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <label htmlFor="message" className="block text-white mb-2">
                  Uw bericht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-dark-light border border-dark-lighter rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-all duration-300 resize-none focus:ring-2 focus:ring-primary/20"
                />
              </motion.div>
              <motion.button
                type="submit"
                className="w-full btn-gradient text-white px-8 py-4 rounded-lg font-medium flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Verstuur bericht
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </motion.button>
              <p className="text-sm text-gray-400 text-center">
                We reageren meestal binnen 24 uur op werkdagen.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
