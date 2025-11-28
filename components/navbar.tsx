"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/lista", label: "Mi Lista" },
  { href: "/envios", label: "Envíos y Pagos" },
  { href: "/contacto", label: "Contacto" },
]

export function Navbar() {
  const pathname = usePathname()
  const { totalItems } = useCart()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#FF7A42]/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/image.png" alt="Monadas" width={40} height={40} className="rounded-full" />
            <span className="font-bold text-xl gradient-monadas-text hidden sm:block">Monadas</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[#FF7A42]",
                  pathname === link.href ? "text-[#E33125]" : "text-[#4A4039]",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Cart Button */}
          <div className="flex items-center gap-4">
            <Link href="/lista" className="relative p-2 rounded-full hover:bg-[#FFF9F5] transition-colors">
              <ShoppingBag className="w-6 h-6 text-[#4A4039]" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 gradient-monadas text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-full hover:bg-[#FFF9F5] transition-colors"
            >
              {isOpen ? <X className="w-6 h-6 text-[#4A4039]" /> : <Menu className="w-6 h-6 text-[#4A4039]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-[#FF7A42]/10">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                  pathname === link.href ? "bg-[#FFF9F5] text-[#E33125]" : "text-[#4A4039] hover:bg-[#FFF9F5]",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
