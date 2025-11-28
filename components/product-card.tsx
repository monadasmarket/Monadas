"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Plus, Check } from "lucide-react"
import { useState } from "react"
import { useCart } from "@/context/cart-context"
import type { Product } from "@/lib/products"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  product: Product
  index?: number
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem, items } = useCart()
  const [isAdding, setIsAdding] = useState(false)

  const isInCart = items.some((item) => item.id === product.id)

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    setIsAdding(true)
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })

    setTimeout(() => setIsAdding(false), 1000)
  }

  return (
    <Link
      href={`/producto/${product.id}`}
      className="group block animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#FF7A42]/5">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-[#FFF9F5]">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* New Badge */}
          {product.isNew && (
            <span className="absolute top-3 left-3 px-3 py-1 text-xs font-bold gradient-monadas text-white rounded-full">
              Novedad ✨
            </span>
          )}

          {/* Add Button */}
          <button
            onClick={handleAdd}
            disabled={isAdding}
            className={cn(
              "absolute bottom-3 right-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg",
              isAdding || isInCart ? "bg-green-500 text-white" : "gradient-monadas text-white hover:scale-110",
            )}
          >
            {isAdding || isInCart ? <Check className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
          </button>
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className="font-semibold text-[#4A4039] group-hover:text-[#E33125] transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="mt-1 font-bold text-lg gradient-monadas-text">${product.price}</p>
        </div>
      </div>
    </Link>
  )
}
