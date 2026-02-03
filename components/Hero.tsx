import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="container mx-auto px-6 py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Content */}
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-block bg-dark-light px-4 py-2 rounded-full text-sm text-white">
            • Erkend gasinstallateur (G1)
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
            Uw expert in{' '}
            <span className="text-primary">sanitair</span>,{' '}
            <span className="text-primary">verwarming</span>{' '}
            & <span className="text-primary">ontstopping</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-300 leading-relaxed">
            Professionele installaties en renovaties in de regio Temse, Sint-Niklaas, Bornem en omstreken. Betrouwbaar, vakkundig en persoonlijke service.
          </p>

          {/* Features */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-white">
              <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Gratis offerte</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Snelle service</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>15+ jaar ervaring</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#contact"
              className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition-colors font-medium flex items-center justify-center gap-2"
            >
              Vraag offerte aan
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="tel:+32472129584"
              className="bg-dark-light text-white px-8 py-4 rounded-lg hover:bg-dark-lighter transition-colors font-medium flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Bel direct
            </Link>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="relative">
          <div className="relative w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden">
            <Image
              src="https://static.wixstatic.com/media/0a84da_1ef6c159e3e74ceb887c9038ae9b972f~mv2.jpg/v1/fill/w_960,h_691,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/0a84da_1ef6c159e3e74ceb887c9038ae9b972f~mv2.jpg"
              alt="Andres-Technics team"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Overlay contact card */}
          <div className="absolute bottom-6 left-6 bg-dark-light p-4 rounded-lg backdrop-blur-sm">
            <div className="flex items-center gap-2 text-white mb-2">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-sm font-medium">Direct contact</span>
            </div>
            <a href="tel:+32472129584" className="text-white font-semibold hover:text-primary transition-colors">
              +32 472 12 95 84
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

