'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Sanitair',
    description: 'Complete sanitaire installaties en renovaties. Van kleine herstellingen tot volledige badkamerrenovatie.',
    image: 'https://static.wixstatic.com/media/0a84da_312e4b8f2440473085dd3a2f7e1e6398~mv2.jpg/v1/fill/w_561,h_332,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/0a84da_312e4b8f2440473085dd3a2f7e1e6398~mv2.jpg',
    items: [
      'Badkamerrenovatie',
      'Leidingwerk',
      'Kranen & toestellen',
      'Herstellingen',
    ],
  },
  {
    title: 'Verwarming',
    description: 'Plaatsing en onderhoud van verwarmingsinstallaties. Erkend gasinstallateur voor alle type ketels.',
    image: 'https://static.wixstatic.com/media/4ce8f7_e9bed84f3eb64bc98cba94a93822c7d7~mv2.png/v1/fill/w_565,h_332,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4ce8f7_e9bed84f3eb64bc98cba94a93822c7d7~mv2.png',
    items: [
      'Ketelinstallatie',
      'Onderhoud',
      'Brandervervanging',
      'G1 gecertificeerd',
    ],
  },
  {
    title: 'Ontstopping',
    description: 'Snelle en professionele ontstopping diensten. Beschikbaar voor noodgevallen in uw regio.',
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
    <section id="diensten" className="bg-gradient-to-b from-dark-light to-dark py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-dark rounded-lg overflow-hidden hover-glow border border-dark-lighter"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative w-full h-48 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-display font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      className="flex items-center gap-2 text-gray-300"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + itemIndex * 0.1 }}
                    >
                      <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-all duration-300 font-medium group"
                >
                  Meer info
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            className="btn-gradient inline-flex items-center gap-2 text-white px-8 py-4 rounded-lg font-medium"
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
