"use client"

import { use, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, Minus, Plus, Check, ShoppingBag, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getProductById } from "@/lib/products"
import { useCart } from "@/context/cart-context"
import { cn } from "@/lib/utils"

export default function ProductoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const router = useRouter()
  const product = getProductById(id)
  const { addItem, items } = useCart()

  const [quantity, setQuantity] = useState(1)
  const [isAdded, setIsAdded] = useState(false)

  const existingItem = items.find((item) => item.id === id)

  if (!product) {
    return (
      <div className="min-h-screen bg-[#FFF9F5] flex items-center justify-center">
        <div className="text-center">
          <span className="text-6xl mb-4 block">🐒</span>
          <h1 className="text-2xl font-bold text-[#4A4039] mb-4">Producto no encontrado</h1>
          <Button onClick={() => router.push("/catalogo")} className="gradient-monadas text-white rounded-full">
            Ver catálogo
          </Button>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      },
      quantity,
    )
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <div className="min-h-screen bg-[#FFF9F5]">
      {/* Back Button */}
      <div className="bg-white border-b border-[#FF7A42]/10 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-[#4A4039] hover:text-[#E33125] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Volver</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image */}
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-white shadow-sm">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            {product.isNew && (
              <span className="absolute top-4 left-4 px-4 py-2 text-sm font-bold gradient-monadas text-white rounded-full">
                Novedad ✨
              </span>
            )}
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#4A4039] mb-2">{product.name}</h1>
              <p className="text-3xl font-bold gradient-monadas-text">${product.price}</p>
            </div>

            <p className="text-[#4A4039]/70 text-lg leading-relaxed">{product.description}</p>

            {/* Stock Indicator */}
            <div className="flex items-center gap-2">
              <Package className="w-5 h-5 text-[#FF7A42]" />
              <span className={cn("font-medium", product.stock > 5 ? "text-green-600" : "text-orange-500")}>
                {product.stock > 5
                  ? `${product.stock} disponibles`
                  : product.stock > 0
                    ? `¡Solo quedan ${product.stock}!`
                    : "Agotado"}
              </span>
            </div>

            {/* Quantity Selector */}
            <div className="bg-white p-4 rounded-2xl shadow-sm">
              <label className="block text-sm font-medium text-[#4A4039]/70 mb-3">Cantidad</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-12 h-12 rounded-full border-2 border-[#FF7A42]/30 flex items-center justify-center hover:border-[#FF7A42] transition-colors"
                >
                  <Minus className="w-5 h-5 text-[#4A4039]" />
                </button>
                <span className="text-2xl font-bold text-[#4A4039] w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                  className="w-12 h-12 rounded-full border-2 border-[#FF7A42]/30 flex items-center justify-center hover:border-[#FF7A42] transition-colors"
                >
                  <Plus className="w-5 h-5 text-[#4A4039]" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              size="lg"
              className={cn(
                "w-full py-6 text-lg font-semibold rounded-full transition-all",
                isAdded ? "bg-green-500 hover:bg-green-500" : "gradient-monadas hover:opacity-90",
                "text-white",
              )}
            >
              {isAdded ? (
                <>
                  <Check className="mr-2 w-5 h-5" />
                  ¡Agregado!
                </>
              ) : (
                <>
                  <ShoppingBag className="mr-2 w-5 h-5" />
                  Agregar a mi lista
                </>
              )}
            </Button>

            {/* View Cart Link */}
            {(isAdded || existingItem) && (
              <Link
                href="/lista"
                className="block text-center text-[#E33125] font-medium hover:underline animate-fade-in-up"
              >
                Ver mi lista →
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
