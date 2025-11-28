import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sparkles, Package, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/products"
import { ProductCard } from "@/components/product-card"

export default function HomePage() {
  const newProducts = products.filter((p) => p.isNew).slice(0, 4)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF9F5] to-white">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col items-center text-center">
            {/* Logo */}
            <div className="relative mb-6 animate-bounce-subtle">
              <Image
                src="/images/image.png"
                alt="Monadas"
                width={160}
                height={160}
                className="rounded-full shadow-2xl"
                priority
              />
            </div>

            {/* Tagline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#4A4039] mb-4">
              Tu tienda de <span className="gradient-monadas-text">todo</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#4A4039]/70 mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#FF7A42]" />
              Estilo y variedad
              <Sparkles className="w-5 h-5 text-[#FF7A42]" />
            </p>

            {/* Update Banner */}
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white rounded-full shadow-md border border-[#FF7A42]/20 mb-8">
              <span className="text-lg">✨</span>
              <span className="text-sm font-medium text-[#4A4039]">Actualizaciones cada lunes</span>
              <span className="text-lg">✨</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="gradient-monadas text-white font-semibold px-8 py-6 text-lg rounded-full hover:opacity-90 transition-opacity shadow-lg"
              >
                <Link href="/catalogo">
                  Ver catálogo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-[#FF7A42] text-[#E33125] font-semibold px-8 py-6 text-lg rounded-full hover:bg-[#FFF9F5] transition-colors bg-transparent"
              >
                <Link href="/lista">
                  <ShoppingBag className="mr-2 w-5 h-5" />
                  Ir a mi lista
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#FF7A42]/10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#E33125]/10 rounded-full blur-3xl" />
      </section>

      {/* New Products Section */}
      {newProducts.length > 0 && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#4A4039] flex items-center gap-2">
                Novedades
                <span className="text-2xl">✨</span>
              </h2>
              <Link href="/catalogo" className="text-[#E33125] font-medium hover:underline flex items-center gap-1">
                Ver todo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {newProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-16 px-4 bg-[#FFF9F5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-3xl text-center shadow-sm">
              <div className="w-14 h-14 gradient-monadas rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Package className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-lg text-[#4A4039] mb-2">Envíos desde 3 piezas 📦</h3>
              <p className="text-[#4A4039]/70 text-sm">Hacemos envíos a partir de 3 piezas</p>
            </div>

            <div className="bg-white p-6 rounded-3xl text-center shadow-sm">
              <div className="w-14 h-14 gradient-monadas rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="font-bold text-lg text-[#4A4039] mb-2">Entregas los jueves</h3>
              <p className="text-[#4A4039]/70 text-sm">Entregas personales cada jueves</p>
            </div>

            <div className="bg-white p-6 rounded-3xl text-center shadow-sm">
              <div className="w-14 h-14 gradient-monadas rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✔️</span>
              </div>
              <h3 className="font-bold text-lg text-[#4A4039] mb-2">Sistema de apartado</h3>
              <p className="text-[#4A4039]/70 text-sm">Aparta tus productos favoritos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-white border-t border-[#FF7A42]/10">
        <div className="max-w-7xl mx-auto text-center">
          <Image src="/images/image.png" alt="Monadas" width={48} height={48} className="rounded-full mx-auto mb-4" />
          <p className="text-[#4A4039]/60 text-sm">© 2025 Monadas. Tu tienda de todo. 🐒</p>
        </div>
      </footer>
    </div>
  )
}
