'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Sanitair',
    description: 'Complete sanitaire installaties en renovaties. Van kleine herstellingen tot volledige badkamerrenovaties.',
    image: 'https://static.wixstatic.com/media/0a84da_312e4b8f2440473085dd3a2f7e1e6398~mv2.jpg/v1/fill/w_561,h_332,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/0a84da_312e4b8f2440473085dd3a2f7e1e6398~mv2.jpg',
    items: [
      'Badkamerrenovatie',
      'Leidingwerk',
      'Kranen & toestellen',
      'Herstellingen',
    ],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
    title: 'Verwarming',
    description: 'Plaatsing en onderhoud van verwarmingsinstallaties. Erkend gasinstallateur voor alle types ketels.',
    image: 'https://static.wixstatic.com/media/4ce8f7_e9bed84f3eb64bc98cba94a93822c7d7~mv2.png/v1/fill/w_565,h_332,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4ce8f7_e9bed84f3eb64bc98cba94a93822c7d7~mv2.png',
    items: [
      'Ketelinstallatie',
      'Onderhoud',
      'Brandervervanging',
      'G1 gecertificeerd',
    ],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Ontstopping',
    description: 'Snelle en professionele ontstoppingsdiensten. Beschikbaar voor noodgevallen in uw regio.',
    image: 'https://static.wixstatic.com/media/0a84da_57db81b3895b4374888d2f71cfff2e5b~mv2.jpg/v1/fill/w_565,h_332,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/0a84da_57db81b3895b4374888d2f71cfff2e5b~mv2.jpg',
    items: [
      'Afvoerleidingen',
      'Rioleringen',
      'Camera-inspectie',
      'Snelle interventie',
    ],
  },
]

export default function Services() {
  return (
    <section id="diensten" className="bg-dark-light py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 inline-block relative pb-2">
            Onze Diensten
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded"></span>
          </h2>
          <p className="text-lg text-gray-300 mt-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, letterSpacing: 0 }}>
            Expert oplossingen voor al uw sanitair-, verwarmings- en ontstopping behoeften.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-dark rounded-lg overflow-hidden border border-dark-lighter/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ 
                y: -8, 
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                borderColor: 'rgba(255, 107, 53, 0.3)'
              }}
            >
              {/* Icon */}
              <div className="p-6 pb-4">
                <div className="text-primary">
                  {service.icon}
                </div>
              </div>

              {/* Image */}
              <div className="relative w-full h-48 overflow-hidden bg-dark-lighter">
                <motion.div
                  className="w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-display font-bold text-white mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 text-base leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, letterSpacing: 0, lineHeight: 1.6 }}>
                  {service.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {service.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      className="flex items-start gap-3 text-gray-300 text-sm"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, letterSpacing: 0, lineHeight: 1.5 }}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + itemIndex * 0.1, duration: 0.3 }}
                    >
                      <svg 
                        className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-all duration-300 font-medium text-sm group"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, letterSpacing: 0 }}
                >
                  Meer info
                  <svg 
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link
            href="#contact"
            className="btn-gradient inline-flex items-center gap-2 text-white px-8 py-4 rounded-lg font-medium text-base"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, letterSpacing: 0 }}
          >
            Bespreek uw project
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
