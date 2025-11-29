"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X, ShoppingBag, Search, Heart, User } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { useFavorites } from "@/context/favorites-context"
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
  const router = useRouter()
  const { totalItems } = useCart()
  const { totalFavorites } = useFavorites()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/catalogo?search=${encodeURIComponent(searchQuery)}`)
      setSearchQuery("")
    }
  }

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
          <div className="flex items-center justify-between h-16 sm:h-18 gap-3 sm:gap-4">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-1.5 sm:gap-2.5 group transition-transform duration-300 hover:scale-105 flex-shrink-0"
            >
              <div className="relative">
                <Image
                  src="/images/image.png"
                  alt="Monadas"
                  width={56}
                  height={56}
                  className="w-14 h-14 sm:w-12 sm:h-12 rounded-full shadow-md shadow-[#FF7A42]/20 transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-[#FF7A42]/30"
                />
                <div className="absolute inset-0 rounded-full ring-2 ring-[#FF7A42]/0 group-hover:ring-[#FF7A42]/30 transition-all duration-300" />
              </div>
              <span className="font-extrabold text-lg sm:text-2xl gradient-monadas-text tracking-tight">MONADAS</span>
            </Link>

            {/* Search Bar - Hidden on mobile */}
            <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xs items-center">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-4 pr-10 rounded-full bg-[#FFF9F5] border border-[#FF7A42]/20 focus:outline-none focus:ring-2 focus:ring-[#FF7A42] focus:border-transparent text-sm text-[#4A4039] placeholder-[#4A4039]/50"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#FF7A42] hover:text-[#E33125] transition-colors"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </form>

            {/* Navigation Links - Hidden on mobile */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap",
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
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              {/* Favorites Button */}
              <Link
                href="/favoritos"
                className="relative p-2.5 rounded-full hover:bg-[#FFF9F5] transition-all duration-300 hover:scale-110 group"
              >
                <Heart className="w-6 h-6 text-[#4A4039] group-hover:text-[#E33125] transition-colors" />
                {totalFavorites > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-[#E33125] text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse-glow">
                    {totalFavorites}
                  </span>
                )}
              </Link>

              {/* Account Button */}
              <Link
                href="/cuenta"
                className="p-2.5 rounded-full hover:bg-[#FFF9F5] transition-all duration-300 hover:scale-110 group"
              >
                <User className="w-6 h-6 text-[#4A4039] group-hover:text-[#FF7A42] transition-colors" />
              </Link>

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

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-96 border-t border-[#FF7A42]/10" : "max-h-0",
          )}
        >
          <div className="px-4 py-4 space-y-2 bg-white">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-4 pr-10 rounded-full bg-[#FFF9F5] border border-[#FF7A42]/20 focus:outline-none focus:ring-2 focus:ring-[#FF7A42] text-sm"
                />
                <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-[#FF7A42]">
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </form>

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
          </div>
        </div>
      </nav>
    </header>
  )
}
