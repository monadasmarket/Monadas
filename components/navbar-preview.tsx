"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/context/cart-context"
import { useFavorites } from "@/context/favorites-context"
import { products } from "@/lib/products"

interface NavPreviewProps {
  href: string
  label: string
  emoji: string
  type: "catalog" | "lista" | "favoritos" | "envios" | "contacto"
}

export function NavPreview({ href, label, emoji, type }: NavPreviewProps) {
  const [showPreview, setShowPreview] = useState(false)
  const { items: cartItems, totalItems } = useCart()
  const { favorites, totalFavorites } = useFavorites()

  const getPreviewContent = () => {
    switch (type) {
      case "catalog":
        return {
          title: `${emoji} ${label}`,
          items: products.slice(0, 6),
          itemType: "product",
        }
      case "lista":
        return {
          title: `${emoji} ${label} (${totalItems})`,
          items: cartItems.slice(0, 4),
          itemType: "cart",
          empty: totalItems === 0,
        }
      case "favoritos":
        return {
          title: `${emoji} ${label} (${totalFavorites})`,
          items: favorites.slice(0, 4),
          itemType: "favorite",
          empty: totalFavorites === 0,
        }
      case "envios":
        return {
          title: `${emoji} ${label}`,
          content: (
            <div className="space-y-2">
              <div className="text-sm">📦 Envíos a partir de 3 piezas</div>
              <div className="text-sm">📍 Entregas personales jueves</div>
              <div className="text-sm">✔️ Sistema de apartado</div>
            </div>
          ),
        }
      case "contacto":
        return {
          title: `${emoji} ${label}`,
          content: (
            <div className="space-y-2">
              <div className="text-sm">💬 WhatsApp: +52 1 56 4848 7411</div>
              <div className="text-sm">📱 Instagram: @monadasmarket_</div>
              <div className="text-sm">⏰ Lunes a Viernes 10am-6pm</div>
            </div>
          ),
        }
      default:
        return { title: label, items: [] }
    }
  }

  const preview = getPreviewContent()
  const isEmptyCart = type === "lista" && preview.empty
  const isEmptyFavorites = type === "favoritos" && preview.empty

  return (
    <div
      className="relative group"
      onMouseEnter={() => setShowPreview(true)}
      onMouseLeave={() => setShowPreview(false)}
    >
      <Link
        href={href}
        className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap text-[#4A4039] hover:bg-[#FFF9F5] hover:text-[#FF7A42] hover:scale-105 inline-flex items-center gap-1"
      >
        <span>{emoji}</span>
        <span>{label}</span>
      </Link>

      {/* Desktop Preview - hidden on mobile */}
      {showPreview && (
        <div className="hidden md:block absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-[#FF7A42]/10 z-50">
          <div className="p-4">
            <h3 className="font-bold text-[#4A4039] mb-3">{preview.title}</h3>

            {preview.content ? (
              preview.content
            ) : (
              <>
                {isEmptyCart || isEmptyFavorites ? (
                  <div className="text-center py-4">
                    <p className="text-sm text-[#4A4039]/60">
                      {type === "lista" ? "Tu lista está vacía" : "Sin favoritos aún"}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {preview.items?.map((item: any) => (
                      <div key={item.id} className="flex gap-2 p-2 bg-[#FFF9F5] rounded-lg">
                        <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-white">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-[#4A4039] truncate">{item.name}</p>
                          <p className="text-xs text-[#4A4039]/60">
                            {type === "lista" ? `${item.quantity} piezas` : `$${item.price}`}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <Link
                  href={href}
                  className="block mt-3 text-center px-4 py-2 rounded-full bg-gradient-to-r from-[#FF7A42] to-[#E33125] text-white text-xs font-semibold hover:shadow-lg transition-all"
                >
                  Ver todo
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
