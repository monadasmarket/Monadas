import Image from "next/image"
import { MessageCircle, Instagram, Clock, Heart } from "lucide-react"

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-[#FFF9F5]">
      {/* Header */}
      <div className="bg-white border-b border-[#FF7A42]/10">
        <div className="max-w-3xl mx-auto px-4 py-6 text-center">
          <Image
            src="/images/image.png"
            alt="Monadas"
            width={100}
            height={100}
            className="rounded-full mx-auto mb-4 shadow-lg"
          />
          <h1 className="text-2xl md:text-3xl font-bold text-[#4A4039]">Contáctanos</h1>
          <p className="text-[#4A4039]/60 mt-2 max-w-md mx-auto">
            ¡Estamos aquí para ayudarte! Escríbenos por WhatsApp o síguenos en Instagram 🐒
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
        {/* WhatsApp */}
        <a
          href="https://wa.me/5211234567890?text=Hola! Me gustaría saber más sobre Monadas 🐒"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow group"
        >
          <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center">
            <MessageCircle className="w-7 h-7 text-white fill-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-bold text-[#4A4039] group-hover:text-[#E33125] transition-colors">WhatsApp</h2>
            <p className="text-[#4A4039]/60">Escríbenos para hacer tu pedido</p>
          </div>
          <span className="text-[#4A4039]/40 group-hover:text-[#E33125] transition-colors">→</span>
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/monadas"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow group"
        >
          <div className="w-14 h-14 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-2xl flex items-center justify-center">
            <Instagram className="w-7 h-7 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-bold text-[#4A4039] group-hover:text-[#E33125] transition-colors">Instagram</h2>
            <p className="text-[#4A4039]/60">@monadas</p>
          </div>
          <span className="text-[#4A4039]/40 group-hover:text-[#E33125] transition-colors">→</span>
        </a>

        {/* Business Hours */}
        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 gradient-monadas rounded-2xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-lg font-bold text-[#4A4039]">Horario de Atención</h2>
          </div>
          <div className="space-y-3 text-[#4A4039]/80">
            <div className="flex justify-between items-center py-2 border-b border-[#FF7A42]/10">
              <span>Lunes - Viernes</span>
              <span className="font-medium">10:00 AM - 8:00 PM</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-[#FF7A42]/10">
              <span>Sábado</span>
              <span className="font-medium">10:00 AM - 6:00 PM</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span>Domingo</span>
              <span className="font-medium text-[#FF7A42]">Cerrado</span>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 gradient-monadas rounded-2xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-lg font-bold text-[#4A4039]">Sobre Monadas</h2>
          </div>
          <p className="text-[#4A4039]/80 leading-relaxed">
            Somos una tienda con variedad de productos para todos los gustos. Desde ropa y accesorios hasta artículos
            para el hogar y tecnología. Nos encanta traerte las mejores novedades cada semana. ¡Gracias por ser parte de
            nuestra familia! 🐒✨
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center pt-4 space-y-4">
          <p className="text-[#4A4039]/60">¿Listo para hacer tu pedido?</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/catalogo"
              className="inline-flex items-center justify-center gap-2 gradient-monadas text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Ver catálogo 🛍️
            </a>
            <a
              href="/lista"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#E33125] font-semibold px-6 py-3 rounded-full border-2 border-[#FF7A42] hover:bg-[#FFF9F5] transition-colors"
            >
              Mi lista 📋
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 bg-white border-t border-[#FF7A42]/10 mt-8">
        <div className="max-w-3xl mx-auto text-center">
          <Image src="/images/image.png" alt="Monadas" width={48} height={48} className="rounded-full mx-auto mb-4" />
          <p className="text-[#4A4039]/60 text-sm">© 2025 Monadas. Tu tienda de todo. 🐒</p>
        </div>
      </footer>
    </div>
  )
}
