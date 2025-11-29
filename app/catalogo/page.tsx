"use client"

import { useState, useMemo, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Search, X } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import { products, categories } from "@/lib/products"
import { cn } from "@/lib/utils"

export default function CatalogoPage() {
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  useEffect(() => {
    const searchParam = searchParams.get("search")
    const categoryParam = searchParams.get("category")
    if (searchParam) setSearchQuery(searchParam)
    if (categoryParam) setActiveCategory(categoryParam)
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    let result = products

    // Filter by category
    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory)
    }

    // Filter by search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      result = result.filter((p) => p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query))
    }

    return result
  }, [searchQuery, activeCategory])

  return (
    <div className="min-h-screen bg-[#FFF9F5]">
      {/* Header */}
      <div className="bg-white border-b border-[#FF7A42]/10 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl md:text-3xl font-bold text-[#4A4039] mb-4 flex items-center gap-2">
            Catálogo
            <span className="text-2xl">📦</span>
          </h1>

          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4A4039]/50" />
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-3 bg-[#FFF9F5] rounded-full border border-[#FF7A42]/20 focus:border-[#FF7A42] focus:outline-none focus:ring-2 focus:ring-[#FF7A42]/20 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-[#FF7A42]/10 transition-colors"
              >
                <X className="w-4 h-4 text-[#4A4039]/50" />
              </button>
            )}
          </div>

          {/* Category Filters */}
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all",
                  activeCategory === cat.id
                    ? "gradient-monadas text-white"
                    : "bg-white text-[#4A4039] border border-[#FF7A42]/20 hover:border-[#FF7A42]",
                )}
              >
                {cat.emoji} {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {filteredProducts.length > 0 ? (
          <>
            <p className="text-sm text-[#4A4039]/60 mb-4">
              {filteredProducts.length} producto{filteredProducts.length !== 1 ? "s" : ""}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <span className="text-6xl mb-4 block">🔍</span>
            <h2 className="text-xl font-bold text-[#4A4039] mb-2">No encontramos productos</h2>
            <p className="text-[#4A4039]/60">Intenta con otros términos de búsqueda</p>
          </div>
        )}
      </div>
    </div>
  )
}
