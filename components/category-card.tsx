"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/lib/products"
import { CategoryPreview } from "./category-preview"
import { cn } from "@/lib/utils"

interface CategoryCardProps {
  categoryId: string
  categoryName: string
  categoryEmoji: string
  products: Product[]
  image: string
}

export function CategoryCard({ categoryId, categoryName, categoryEmoji, products, image }: CategoryCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href={`/catalogo?category=${categoryId}`}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square rounded-3xl overflow-hidden bg-[#FFF9F5] shadow-md transition-all duration-300 hover:shadow-xl">
        <Image
          src={image || "/placeholder.svg"}
          alt={categoryName}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className={cn("mt-4 text-center transition-all duration-300", isHovered && "transform -translate-y-1")}>
        <h3 className="font-bold text-lg text-[#4A4039] flex items-center justify-center gap-2">
          {categoryEmoji} {categoryName}
        </h3>
        <p className="text-sm text-[#4A4039]/60 mt-1">{products.length} productos</p>
      </div>

      {/* Category Preview - Only on desktop */}
      <div className="hidden md:block">
        <CategoryPreview
          categoryName={categoryName}
          categoryEmoji={categoryEmoji}
          products={products}
          isHovered={isHovered}
          categoryId={categoryId}
        />
      </div>
    </Link>
  )
}
