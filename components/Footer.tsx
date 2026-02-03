import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark-light border-t border-dark-lighter py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Services */}
          <div>
            <h3 className="text-white font-display font-bold mb-4">Diensten</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#diensten" className="text-gray-400 hover:text-white transition-colors">
                  Sanitair
                </Link>
              </li>
              <li>
                <Link href="#diensten" className="text-gray-400 hover:text-white transition-colors">
                  Verwarming
                </Link>
              </li>
              <li>
                <Link href="#diensten" className="text-gray-400 hover:text-white transition-colors">
                  Ontstopping
                </Link>
              </li>
              <li>
                <Link href="#diensten" className="text-gray-400 hover:text-white transition-colors">
                  Badkamerrenovatie
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-display font-bold mb-4">Navigatie</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#over-ons" className="text-gray-400 hover:text-white transition-colors">
                  Over ons
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-display font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://maps.google.com/?q=Veldstraat+10,+9140+Temse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Veldstraat 10 9140 Temse
                </a>
              </li>
              <li>
                <a
                  href="tel:+32472129584"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +32 472 12 95 84
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@andres-technics.be"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@andres-technics.be
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-dark-lighter pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Andres-Technics. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  )
}

