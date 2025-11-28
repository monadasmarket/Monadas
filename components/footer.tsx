import Link from "next/link"
import Image from "next/image"

const quickLinks = [
  { href: "/catalogo", label: "Catálogo", emoji: "📦" },
  { href: "/lista", label: "Mi Lista", emoji: "🛍️" },
  { href: "/envios", label: "Envíos y Pagos", emoji: "🚚" },
  { href: "/contacto", label: "Contacto", emoji: "💬" },
]

export function Footer() {
  return (
    <footer className="relative mt-auto">
      {/* Decorative wave/gradient top border */}
      <div className="h-1 gradient-monadas" />

      <div className="bg-[#FFF9F5]">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="text-center sm:text-left">
              <Link href="/" className="inline-flex items-center gap-3 group">
                <Image
                  src="/images/image.png"
                  alt="Monadas"
                  width={56}
                  height={56}
                  className="rounded-full shadow-md transition-transform duration-300 group-hover:scale-105"
                />
                <span className="font-extrabold text-2xl gradient-monadas-text">MONADAS</span>
              </Link>
              <p className="mt-4 text-[#4A4039]/70 text-sm leading-relaxed">
                Tu tienda de todo. Estilo y variedad para cada momento.
              </p>
            </div>

            {/* Quick Links - Added emojis */}
            <div className="text-center sm:text-left">
              <h3 className="font-bold text-[#4A4039] mb-4">📌 Enlaces</h3>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#4A4039]/70 hover:text-[#FF7A42] transition-colors duration-300 text-sm"
                    >
                      {link.emoji} {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info Section */}
            <div className="text-center sm:text-left">
              <h3 className="font-bold text-[#4A4039] mb-4">ℹ️ Información</h3>
              <ul className="space-y-2.5 text-sm text-[#4A4039]/70">
                <li className="flex items-center justify-center sm:justify-start gap-2">
                  <span>📦</span> Envíos desde 3 piezas
                </li>
                <li className="flex items-center justify-center sm:justify-start gap-2">
                  <span>📍</span> Entregas los jueves
                </li>
                <li className="flex items-center justify-center sm:justify-start gap-2">
                  <span>💳</span> Efectivo, tarjeta, transferencia
                </li>
              </ul>
            </div>

            {/* Social Links - Removed WhatsApp, added Facebook, fixed Instagram hover */}
            <div className="text-center sm:text-left">
              <h3 className="font-bold text-[#4A4039] mb-4">🌟 Síguenos</h3>
              <div className="flex items-center justify-center sm:justify-start gap-3">
                {/* Facebook */}
                <a
                  href="https://facebook.com/monadas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label="Facebook"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* Instagram - Fixed hover to match WhatsApp style */}
                <a
                  href="https://instagram.com/monadas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-[#E4405F] hover:bg-[#E4405F] hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>

              <p className="mt-4 text-xs text-[#4A4039]/50">🕐 Horario: Lun - Sab, 10am - 8pm</p>
            </div>
          </div>
        </div>

        {/* Bottom bar - Added monkey emoji at the end */}
        <div className="border-t border-[#FF7A42]/10">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <p className="text-center text-xs sm:text-sm text-[#4A4039]/60">
              © 2025 Monadas — Hecho con ❤️ en México 🐵
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
