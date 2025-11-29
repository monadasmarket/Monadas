"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useFavorites } from "@/context/favorites-context"
import { products } from "@/lib/products"
import { ProductCard } from "@/components/product-card"

export default function FavoritosPage() {
  const { favorites } = useFavorites()

  const favoriteProducts = products.filter((p) => favorites.includes(p.id))

  return (
    <div className="min-h-screen bg-[#FFF9F5]">
      {/* Header */}
      <div className="bg-white border-b border-[#FF7A42]/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/" className="p-2 rounded-full hover:bg-[#FFF9F5] transition-colors">
              <ArrowLeft className="w-6 h-6 text-[#4A4039]" />
            </Link>
            <h1 className="text-3xl font-bold text-[#4A4039] flex items-center gap-2">
              Mis favoritos
              <span className="text-3xl">❤️</span>
            </h1>
          </div>
          <p className="text-[#4A4039]/60">
            {favorites.length} producto{favorites.length !== 1 ? "s" : ""} marcado{favorites.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {favoriteProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {favoriteProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <span className="text-6xl mb-4 block">💔</span>
            <h2 className="text-xl font-bold text-[#4A4039] mb-2">No tienes favoritos aún</h2>
            <p className="text-[#4A4039]/60 mb-6">Agrega productos a tu lista de favoritos para verlos aquí</p>
            <Link
              href="/catalogo"
              className="inline-block px-8 py-3 gradient-monadas text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              Ir al catálogo
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
