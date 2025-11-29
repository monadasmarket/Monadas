"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { User, Mail, Phone, LogOut, ShoppingBag, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { useFavorites } from "@/context/favorites-context"

export default function CuentaPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState({ name: "", email: "", phone: "" })
  const { totalItems } = useCart()
  const { totalFavorites } = useFavorites()

  useEffect(() => {
    // Load user data from localStorage
    const savedUser = localStorage.getItem("monadas-user")
    if (savedUser) {
      setUserData(JSON.parse(savedUser))
      setIsLoggedIn(true)
    }
  }, [])

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault()
    if (userData.name && userData.email) {
      localStorage.setItem("monadas-user", JSON.stringify(userData))
      setIsLoggedIn(true)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("monadas-user")
    setUserData({ name: "", email: "", phone: "" })
    setIsLoggedIn(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF9F5] to-white pt-32 pb-16">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-full gradient-monadas flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-4xl font-bold gradient-monadas-text">Mi Cuenta</h1>
        </div>

        {isLoggedIn ? (
          <div className="space-y-8">
            {/* Profile Card */}
            <div className="bg-white rounded-3xl shadow-md p-8 border border-[#FF7A42]/10">
              <h2 className="text-2xl font-bold text-[#4A4039] mb-6">👤 Perfil</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-[#FFF9F5] rounded-2xl">
                  <User className="w-5 h-5 text-[#FF7A42]" />
                  <div>
                    <p className="text-sm text-[#4A4039]/60">Nombre</p>
                    <p className="font-semibold text-[#4A4039]">{userData.name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-[#FFF9F5] rounded-2xl">
                  <Mail className="w-5 h-5 text-[#FF7A42]" />
                  <div>
                    <p className="text-sm text-[#4A4039]/60">Email</p>
                    <p className="font-semibold text-[#4A4039]">{userData.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-[#FFF9F5] rounded-2xl">
                  <Phone className="w-5 h-5 text-[#FF7A42]" />
                  <div>
                    <p className="text-sm text-[#4A4039]/60">Teléfono</p>
                    <p className="font-semibold text-[#4A4039]">{userData.phone || "No agregado"}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Link
                href="/lista"
                className="bg-white rounded-2xl shadow-md p-6 border border-[#FF7A42]/10 hover:shadow-lg transition-shadow"
              >
                <div className="w-10 h-10 rounded-full gradient-monadas flex items-center justify-center mb-3">
                  <ShoppingBag className="w-5 h-5 text-white" />
                </div>
                <p className="text-sm text-[#4A4039]/60 mb-1">Mi Lista</p>
                <p className="text-2xl font-bold text-[#FF7A42]">{totalItems}</p>
              </Link>
              <Link
                href="/favoritos"
                className="bg-white rounded-2xl shadow-md p-6 border border-[#FF7A42]/10 hover:shadow-lg transition-shadow"
              >
                <div className="w-10 h-10 rounded-full gradient-monadas flex items-center justify-center mb-3">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <p className="text-sm text-[#4A4039]/60 mb-1">Favoritos</p>
                <p className="text-2xl font-bold text-[#E33125]">{totalFavorites}</p>
              </Link>
            </div>

            {/* Edit Profile Button */}
            <Button
              onClick={() => setIsLoggedIn(false)}
              className="w-full gradient-monadas text-white font-semibold py-3 rounded-2xl hover:opacity-90 transition-opacity"
            >
              ✏️ Editar Perfil
            </Button>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="w-full py-3 px-4 bg-white border-2 border-[#E33125] text-[#E33125] font-semibold rounded-2xl hover:bg-[#FFE8E3] transition-colors flex items-center justify-center gap-2"
            >
              <LogOut className="w-5 h-5" />
              Cerrar sesión
            </button>
          </div>
        ) : (
          <form onSubmit={handleSaveProfile} className="bg-white rounded-3xl shadow-md p-8 border border-[#FF7A42]/10">
            <h2 className="text-2xl font-bold text-[#4A4039] mb-6">Crear o Actualizar Perfil</h2>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-semibold text-[#4A4039] mb-2">Nombre completo *</label>
                <input
                  type="text"
                  required
                  value={userData.name}
                  onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-[#FFF9F5] border border-[#FF7A42]/20 focus:outline-none focus:ring-2 focus:ring-[#FF7A42] text-[#4A4039] placeholder-[#4A4039]/50"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#4A4039] mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={userData.email}
                  onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-[#FFF9F5] border border-[#FF7A42]/20 focus:outline-none focus:ring-2 focus:ring-[#FF7A42] text-[#4A4039] placeholder-[#4A4039]/50"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#4A4039] mb-2">Teléfono</label>
                <input
                  type="tel"
                  value={userData.phone}
                  onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-[#FFF9F5] border border-[#FF7A42]/20 focus:outline-none focus:ring-2 focus:ring-[#FF7A42] text-[#4A4039] placeholder-[#4A4039]/50"
                  placeholder="+52 1 56 4848 7411"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full gradient-monadas text-white font-semibold py-3 rounded-2xl hover:opacity-90 transition-opacity"
            >
              Guardar Perfil
            </Button>
          </form>
        )}
      </div>
    </div>
  )
}
