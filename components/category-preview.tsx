"use client"

import type React from "react"

import Image from "next/image"
import { useRouter } from "next/navigation"
import type { Product } from "@/lib/products"
import { cn } from "@/lib/utils"

interface CategoryPreviewProps {
  categoryName: string
  categoryEmoji: string
  products: Product[]
  isHovered: boolean
  categoryId: string
}

export function CategoryPreview({
  categoryName,
  categoryEmoji,
  products,
  isHovered,
  categoryId,
}: CategoryPreviewProps) {
  const router = useRouter()

  const handleViewAll = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    router.push(`/catalogo?category=${categoryId}`)
  }

  return (
    <div
      className={cn(
        "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white rounded-2xl shadow-2xl border border-[#FF7A42]/20 overflow-hidden transition-all duration-300 z-50",
        isHovered
          ? "opacity-100 visible scale-100 pointer-events-auto"
          : "opacity-0 invisible scale-95 pointer-events-none",
      )}
    >
      <div className="p-4 w-72">
        <h3 className="font-bold text-lg text-[#4A4039] mb-3 flex items-center gap-2">
          {categoryEmoji} {categoryName}
        </h3>
        <div className="grid grid-cols-3 gap-2">
          {products.slice(0, 6).map((product) => (
            <div key={product.id} className="text-center group cursor-pointer">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-[#FFF9F5] mb-2 shadow-sm">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <p className="text-xs font-semibold text-[#4A4039] line-clamp-1">{product.name}</p>
              <p className="text-xs text-[#FF7A42] font-bold">${product.price}</p>
            </div>
          ))}
        </div>
        <button
          onClick={handleViewAll}
          className="w-full mt-3 py-2 px-3 rounded-lg bg-gradient-monadas text-white text-sm font-semibold hover:opacity-90 transition-opacity active:scale-95"
        >
          Ver todos
        </button>
      </div>
    </div>
  )
}
