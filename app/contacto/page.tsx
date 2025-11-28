import Image from "next/image"
import { Instagram, Clock, Heart } from "lucide-react"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

export default function ContactoPage() {
  const phoneNumber = "5215648487411"

  return (
    <div className="min-h-screen bg-[#FFF9F5]">
      {/* Header */}
      <div className="bg-white border-b border-[#FF7A42]/10">
        <div className="max-w-3xl mx-auto px-4 py-6 text-center">
          <Image
            src="/images/image.png"
            alt="Monadas"
            width={80}
            height={80}
            className="rounded-full mx-auto mb-4 shadow-lg md:w-[100px] md:h-[100px]"
          />
          <h1 className="text-xl md:text-3xl font-bold text-[#4A4039]">Contactanos</h1>
          <p className="text-[#4A4039]/60 mt-2 max-w-md mx-auto text-sm md:text-base">
            Estamos aqui para ayudarte! Escribenos por WhatsApp o siguenos en Instagram
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-6 md:py-8 space-y-4 md:space-y-6">
        {/* WhatsApp - Updated with WhatsApp icon and correct phone */}
        <a
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hola! Me gustaria saber mas sobre Monadas")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow group active:scale-[0.99]"
        >
          <div className="w-12 h-12 md:w-14 md:h-14 bg-[#25D366] rounded-xl md:rounded-2xl flex items-center justify-center">
            <WhatsAppIcon className="w-6 h-6 md:w-7 md:h-7 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-base md:text-lg font-bold text-[#4A4039] group-hover:text-[#E33125] transition-colors">
              WhatsApp
            </h2>
            <p className="text-[#4A4039]/60 text-sm md:text-base">Escribenos para hacer tu pedido</p>
          </div>
          <span className="text-[#4A4039]/40 group-hover:text-[#E33125] transition-colors text-xl">→</span>
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/monadas"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow group active:scale-[0.99]"
        >
          <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-xl md:rounded-2xl flex items-center justify-center">
            <Instagram className="w-6 h-6 md:w-7 md:h-7 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-base md:text-lg font-bold text-[#4A4039] group-hover:text-[#E33125] transition-colors">
              Instagram
            </h2>
            <p className="text-[#4A4039]/60 text-sm md:text-base">@monadas</p>
          </div>
          <span className="text-[#4A4039]/40 group-hover:text-[#E33125] transition-colors text-xl">→</span>
        </a>

        {/* Business Hours */}
        <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 md:w-12 md:h-12 gradient-monadas rounded-xl md:rounded-2xl flex items-center justify-center">
              <Clock className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <h2 className="text-base md:text-lg font-bold text-[#4A4039]">Horario de Atencion</h2>
          </div>
          <div className="space-y-2 md:space-y-3 text-[#4A4039]/80 text-sm md:text-base">
            <div className="flex justify-between items-center py-2 border-b border-[#FF7A42]/10">
              <span>Lunes - Viernes</span>
              <span className="font-medium">10:00 AM - 8:00 PM</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-[#FF7A42]/10">
              <span>Sabado</span>
              <span className="font-medium">10:00 AM - 6:00 PM</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span>Domingo</span>
              <span className="font-medium text-[#FF7A42]">Cerrado</span>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 md:w-12 md:h-12 gradient-monadas rounded-xl md:rounded-2xl flex items-center justify-center">
              <Heart className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <h2 className="text-base md:text-lg font-bold text-[#4A4039]">Sobre Monadas</h2>
          </div>
          <p className="text-[#4A4039]/80 leading-relaxed text-sm md:text-base">
            Somos una tienda con variedad de productos para todos los gustos. Desde ropa y accesorios hasta articulos
            para el hogar y tecnologia. Nos encanta traerte las mejores novedades cada semana. Gracias por ser parte de
            nuestra familia!
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center pt-4 space-y-4">
          <p className="text-[#4A4039]/60 text-sm md:text-base">Listo para hacer tu pedido?</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/catalogo"
              className="inline-flex items-center justify-center gap-2 gradient-monadas text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity active:scale-[0.98] text-sm md:text-base"
            >
              Ver catalogo
            </a>
            <a
              href="/lista"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#E33125] font-semibold px-6 py-3 rounded-full border-2 border-[#FF7A42] hover:bg-[#FFF9F5] transition-colors active:scale-[0.98] text-sm md:text-base"
            >
              Mi lista
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 md:py-8 px-4 bg-white border-t border-[#FF7A42]/10 mt-8">
        <div className="max-w-3xl mx-auto text-center">
          <Image
            src="/images/image.png"
            alt="Monadas"
            width={40}
            height={40}
            className="rounded-full mx-auto mb-4 md:w-12 md:h-12"
          />
          <p className="text-[#4A4039]/60 text-xs md:text-sm">© 2025 Monadas. Tu tienda de todo.</p>
        </div>
      </footer>
    </div>
  )
}
