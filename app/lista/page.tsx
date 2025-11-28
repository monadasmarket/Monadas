"use client"

import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2, MessageCircle, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"

export default function ListaPage() {
  const { items, updateQuantity, removeItem, clearCart, totalItems, totalPrice } = useCart()

  const generateWhatsAppMessage = () => {
    const productList = items
      .map((item) => `• ${item.name} – ${item.quantity} pieza${item.quantity > 1 ? "s" : ""}`)
      .join("\n")

    const message = `Hola! Quiero hacer una reserva 🛍️\n\n${productList}\n\nTotal: ${totalItems} pieza${totalItems > 1 ? "s" : ""}`

    return encodeURIComponent(message)
  }

  const phoneNumber = "5211234567890" // Replace with actual number
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${generateWhatsAppMessage()}`

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#FFF9F5] flex items-center justify-center">
        <div className="text-center px-4">
          <span className="text-8xl mb-6 block">🛒</span>
          <h1 className="text-2xl md:text-3xl font-bold text-[#4A4039] mb-4">Tu lista está vacía</h1>
          <p className="text-[#4A4039]/60 mb-8 max-w-sm mx-auto">
            Agrega productos desde el catálogo para hacer tu pedido por WhatsApp.
          </p>
          <Button
            asChild
            size="lg"
            className="gradient-monadas text-white font-semibold px-8 py-6 text-lg rounded-full"
          >
            <Link href="/catalogo">
              <ShoppingBag className="mr-2 w-5 h-5" />
              Ir al catálogo
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FFF9F5]">
      {/* Header */}
      <div className="bg-white border-b border-[#FF7A42]/10">
        <div className="max-w-3xl mx-auto px-4 py-6">
          <h1 className="text-2xl md:text-3xl font-bold text-[#4A4039] flex items-center gap-2">
            Mi Lista de Pedido
            <span className="text-2xl">📋</span>
          </h1>
          <p className="text-[#4A4039]/60 mt-1">
            {totalItems} producto{totalItems !== 1 ? "s" : ""} en tu lista
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-6">
        {/* Product List */}
        <div className="space-y-4 mb-6">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-4 shadow-sm flex gap-4 animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Image */}
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden flex-shrink-0 bg-[#FFF9F5]">
                <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-[#4A4039] truncate">{item.name}</h3>
                <p className="text-lg font-bold gradient-monadas-text">${item.price}</p>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 rounded-full border border-[#FF7A42]/30 flex items-center justify-center hover:border-[#FF7A42] transition-colors"
                  >
                    <Minus className="w-4 h-4 text-[#4A4039]" />
                  </button>
                  <span className="font-bold text-[#4A4039] w-6 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 rounded-full border border-[#FF7A42]/30 flex items-center justify-center hover:border-[#FF7A42] transition-colors"
                  >
                    <Plus className="w-4 h-4 text-[#4A4039]" />
                  </button>
                </div>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeItem(item.id)}
                className="p-2 text-[#4A4039]/50 hover:text-red-500 transition-colors self-start"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        {/* Summary Card */}
        <div className="bg-white rounded-3xl p-6 shadow-sm sticky bottom-20 md:bottom-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-[#4A4039]/70">Total de piezas:</span>
            <span className="text-2xl font-bold text-[#4A4039]">{totalItems}</span>
          </div>

          <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#FF7A42]/10">
            <span className="text-[#4A4039]/70">Subtotal estimado:</span>
            <span className="text-xl font-bold gradient-monadas-text">${totalPrice}</span>
          </div>

          {/* Send to WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 gradient-monadas text-white font-bold text-lg rounded-full hover:opacity-90 transition-opacity shadow-lg"
          >
            <MessageCircle className="w-6 h-6 fill-white" />
            Enviar pedido por WhatsApp
          </a>

          {/* Clear Cart */}
          <button
            onClick={clearCart}
            className="w-full mt-4 py-3 text-[#4A4039]/60 font-medium hover:text-red-500 transition-colors"
          >
            Vaciar lista
          </button>
        </div>

        {/* Continue Shopping */}
        <div className="text-center mt-6">
          <Link href="/catalogo" className="text-[#E33125] font-medium hover:underline">
            ← Seguir agregando productos
          </Link>
        </div>
      </div>
    </div>
  )
}
