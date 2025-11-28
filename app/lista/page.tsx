"use client"

import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

export default function ListaPage() {
  const { items, updateQuantity, removeItem, clearCart, totalItems, totalPrice } = useCart()

  const generateWhatsAppMessage = () => {
    const productList = items
      .map((item) => `• ${item.name} – ${item.quantity} pieza${item.quantity > 1 ? "s" : ""}`)
      .join("\n")

    const message = `Hola! Quiero hacer una reserva\n\n${productList}\n\nTotal: ${totalItems} pieza${totalItems > 1 ? "s" : ""}`

    return encodeURIComponent(message)
  }

  const phoneNumber = "5215648487411"
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${generateWhatsAppMessage()}`

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#FFF9F5] flex items-center justify-center px-4">
        <div className="text-center">
          <span className="text-6xl md:text-8xl mb-6 block">🛒</span>
          <h1 className="text-xl md:text-3xl font-bold text-[#4A4039] mb-4">Tu lista esta vacia</h1>
          <p className="text-[#4A4039]/60 mb-8 max-w-sm mx-auto text-sm md:text-base">
            Agrega productos desde el catalogo para hacer tu pedido por WhatsApp.
          </p>
          <Button
            asChild
            size="lg"
            className="gradient-monadas text-white font-semibold px-6 py-5 md:px-8 md:py-6 text-base md:text-lg rounded-full"
          >
            <Link href="/catalogo">
              <ShoppingBag className="mr-2 w-5 h-5" />
              Ir al catalogo
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FFF9F5] pb-40 md:pb-8">
      {/* Header */}
      <div className="bg-white border-b border-[#FF7A42]/10">
        <div className="max-w-3xl mx-auto px-4 py-4 md:py-6">
          <h1 className="text-xl md:text-3xl font-bold text-[#4A4039] flex items-center gap-2">Mi Lista de Pedido</h1>
          <p className="text-[#4A4039]/60 mt-1 text-sm md:text-base">
            {totalItems} producto{totalItems !== 1 ? "s" : ""} en tu lista
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-4 md:py-6">
        {/* Product List */}
        <div className="space-y-3 md:space-y-4 mb-6">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-3 md:p-4 shadow-sm flex gap-3 md:gap-4 animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Image */}
              <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-xl overflow-hidden flex-shrink-0 bg-[#FFF9F5]">
                <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-[#4A4039] truncate text-sm md:text-base">{item.name}</h3>
                <p className="text-base md:text-lg font-bold gradient-monadas-text">${item.price}</p>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2 md:gap-3 mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-[#FF7A42]/30 flex items-center justify-center hover:border-[#FF7A42] transition-colors active:scale-95"
                  >
                    <Minus className="w-3 h-3 md:w-4 md:h-4 text-[#4A4039]" />
                  </button>
                  <span className="font-bold text-[#4A4039] w-6 text-center text-sm md:text-base">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-[#FF7A42]/30 flex items-center justify-center hover:border-[#FF7A42] transition-colors active:scale-95"
                  >
                    <Plus className="w-3 h-3 md:w-4 md:h-4 text-[#4A4039]" />
                  </button>
                </div>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeItem(item.id)}
                className="p-2 text-[#4A4039]/50 hover:text-red-500 transition-colors self-start active:scale-95"
              >
                <Trash2 className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          ))}
        </div>

        {/* Continue Shopping - Mobile visible above summary */}
        <div className="text-center mb-4 md:hidden">
          <Link href="/catalogo" className="text-[#E33125] font-medium hover:underline text-sm">
            + Seguir agregando productos
          </Link>
        </div>

        {/* Summary Card - Fixed on mobile */}
        <div className="fixed bottom-0 left-0 right-0 md:relative bg-white rounded-t-3xl md:rounded-3xl p-4 md:p-6 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] md:shadow-sm">
          <div className="flex justify-between items-center mb-3 md:mb-4">
            <span className="text-[#4A4039]/70 text-sm md:text-base">Total de piezas:</span>
            <span className="text-xl md:text-2xl font-bold text-[#4A4039]">{totalItems}</span>
          </div>

          <div className="flex justify-between items-center mb-4 md:mb-6 pb-3 md:pb-4 border-b border-[#FF7A42]/10">
            <span className="text-[#4A4039]/70 text-sm md:text-base">Subtotal estimado:</span>
            <span className="text-lg md:text-xl font-bold gradient-monadas-text">${totalPrice}</span>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 md:py-4 bg-[#25D366] text-white font-bold text-base md:text-lg rounded-full hover:bg-[#20BD5A] transition-colors shadow-lg active:scale-[0.98]"
          >
            <WhatsAppIcon className="w-5 h-5 md:w-6 md:h-6" />
            Enviar pedido por WhatsApp
          </a>

          {/* Clear Cart */}
          <button
            onClick={clearCart}
            className="w-full mt-3 md:mt-4 py-2 md:py-3 text-[#4A4039]/60 font-medium hover:text-red-500 transition-colors text-sm md:text-base"
          >
            Vaciar lista
          </button>
        </div>

        {/* Continue Shopping - Desktop */}
        <div className="hidden md:block text-center mt-6">
          <Link href="/catalogo" className="text-[#E33125] font-medium hover:underline">
            + Seguir agregando productos
          </Link>
        </div>
      </div>
    </div>
  )
}
