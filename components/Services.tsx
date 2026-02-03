import Link from 'next/link'
import Image from 'next/image'

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
    <section id="diensten" className="bg-dark-light py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-dark rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative w-full h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-display font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2 text-gray-300">
                      <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-medium"
                >
                  Meer info
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition-colors font-medium"
          >
            Bespreek uw project
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

