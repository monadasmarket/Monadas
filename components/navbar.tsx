"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { cn } from "@/lib/utils"
import { RotatingTagline } from "./rotating-tagline"

const navLinks = [
  { href: "/catalogo", label: "Catálogo", emoji: "📦" },
  { href: "/lista", label: "Mi Lista", emoji: "🛍️" },
  { href: "/envios", label: "Envíos", emoji: "🚚" },
  { href: "/contacto", label: "Contacto", emoji: "💬" },
]

export function Navbar() {
  const pathname = usePathname()
  const { totalItems } = useCart()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="h-1.5 gradient-monadas" />

      <RotatingTagline />

      {/* Main navbar */}
      <nav
        className={cn(
          "bg-white/95 backdrop-blur-md transition-all duration-300",
          scrolled ? "shadow-lg shadow-[#FF7A42]/10" : "border-b border-[#FF7A42]/10",
        )}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 sm:h-18">
            <Link
              href="/"
              className="flex items-center gap-2.5 group transition-transform duration-300 hover:scale-105"
            >
              <div className="relative">
                <Image
                  src="/images/image.png"
                  alt="Monadas"
                  width={48}
                  height={48}
                  className="rounded-full shadow-md shadow-[#FF7A42]/20 transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-[#FF7A42]/30"
                />
                <div className="absolute inset-0 rounded-full ring-2 ring-[#FF7A42]/0 group-hover:ring-[#FF7A42]/30 transition-all duration-300" />
              </div>
              <span className="font-extrabold text-2xl gradient-monadas-text tracking-tight hidden sm:block">
                MONADAS
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300",
                    pathname === link.href
                      ? "gradient-monadas text-white shadow-md shadow-[#FF7A42]/25"
                      : "text-[#4A4039] hover:bg-[#FFF9F5] hover:text-[#FF7A42] hover:scale-105",
                  )}
                >
                  <span className="mr-1">{link.emoji}</span> {link.label}
                </Link>
              ))}
            </div>

            {/* Right side buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="https://wa.me/5215648487411"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300 hover:scale-105 text-sm font-medium"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat
              </a>

              {/* Cart Button */}
              <Link
                href="/lista"
                className="relative p-2.5 rounded-full hover:bg-[#FFF9F5] transition-all duration-300 hover:scale-110 group"
              >
                <ShoppingBag className="w-6 h-6 text-[#4A4039] group-hover:text-[#FF7A42] transition-colors" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 gradient-monadas text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse-glow">
                    {totalItems}
                  </span>
                )}
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2.5 rounded-full hover:bg-[#FFF9F5] transition-all duration-300 active:scale-95"
              >
                {isOpen ? <X className="w-6 h-6 text-[#4A4039]" /> : <Menu className="w-6 h-6 text-[#4A4039]" />}
              </button>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-96 border-t border-[#FF7A42]/10" : "max-h-0",
          )}
        >
          <div className="px-4 py-4 space-y-2 bg-white">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={cn(
                "block px-4 py-3.5 rounded-2xl text-base font-semibold transition-all duration-300",
                pathname === "/"
                  ? "gradient-monadas text-white shadow-md"
                  : "text-[#4A4039] hover:bg-[#FFF9F5] active:scale-98",
              )}
            >
              🏠 Inicio
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-3.5 rounded-2xl text-base font-semibold transition-all duration-300",
                  pathname === link.href
                    ? "gradient-monadas text-white shadow-md"
                    : "text-[#4A4039] hover:bg-[#FFF9F5] active:scale-98",
                )}
              >
                <span className="mr-1">{link.emoji}</span> {link.label}
              </Link>
            ))}

            {/* Mobile WhatsApp button */}
            <a
              href="https://wa.me/5215648487411"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3.5 mt-2 rounded-2xl bg-[#25D366] text-white font-semibold transition-all duration-300 active:scale-98"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escribenos por WhatsApp
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
