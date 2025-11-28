import { Package, MapPin, CheckCircle, CreditCard, Banknote, Smartphone } from "lucide-react"

export default function EnviosPage() {
  return (
    <div className="min-h-screen bg-[#FFF9F5]">
      {/* Header */}
      <div className="bg-white border-b border-[#FF7A42]/10">
        <div className="max-w-3xl mx-auto px-4 py-6">
          <h1 className="text-2xl md:text-3xl font-bold text-[#4A4039] flex items-center gap-2">
            Envíos y Pagos
            <span className="text-2xl">📦</span>
          </h1>
          <p className="text-[#4A4039]/60 mt-1">Todo lo que necesitas saber sobre entregas</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
        {/* Shipping Info */}
        <section className="bg-white rounded-3xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 gradient-monadas rounded-2xl flex items-center justify-center">
              <Package className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl font-bold text-[#4A4039]">Envíos 📦</h2>
          </div>
          <div className="space-y-4 text-[#4A4039]/80">
            <p className="flex items-start gap-3">
              <span className="text-[#FF7A42] font-bold mt-0.5">•</span>
              <span>
                Realizamos envíos <strong>a partir de 3 piezas</strong> mínimo
              </span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-[#FF7A42] font-bold mt-0.5">•</span>
              <span>El costo de envío depende de tu ubicación</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-[#FF7A42] font-bold mt-0.5">•</span>
              <span>Enviamos a toda la República Mexicana</span>
            </p>
          </div>
        </section>

        {/* Personal Delivery */}
        <section className="bg-white rounded-3xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 gradient-monadas rounded-2xl flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl font-bold text-[#4A4039]">Entregas Personales 📍</h2>
          </div>
          <div className="space-y-4 text-[#4A4039]/80">
            <p className="flex items-start gap-3">
              <span className="text-[#FF7A42] font-bold mt-0.5">•</span>
              <span>
                Entregas personales <strong>cada jueves</strong>
              </span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-[#FF7A42] font-bold mt-0.5">•</span>
              <span>Puntos de entrega en ubicaciones acordadas</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-[#FF7A42] font-bold mt-0.5">•</span>
              <span>¡Sin costo de envío en entregas personales!</span>
            </p>
          </div>
        </section>

        {/* Layaway System */}
        <section className="bg-white rounded-3xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 gradient-monadas rounded-2xl flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl font-bold text-[#4A4039]">Sistema de Apartado ✔️</h2>
          </div>
          <div className="space-y-4 text-[#4A4039]/80">
            <p className="flex items-start gap-3">
              <span className="text-[#FF7A42] font-bold mt-0.5">•</span>
              <span>
                Puedes <strong>apartar tus productos</strong> con el 50%
              </span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-[#FF7A42] font-bold mt-0.5">•</span>
              <span>
                Tienes hasta <strong>1 semana</strong> para liquidar
              </span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-[#FF7A42] font-bold mt-0.5">•</span>
              <span>Pregunta por más detalles por WhatsApp</span>
            </p>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="bg-white rounded-3xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 gradient-monadas rounded-2xl flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl font-bold text-[#4A4039]">Métodos de Pago 💳</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="flex items-center gap-3 p-4 bg-[#FFF9F5] rounded-2xl">
              <Banknote className="w-6 h-6 text-[#FF7A42]" />
              <span className="font-medium text-[#4A4039]">Efectivo</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-[#FFF9F5] rounded-2xl">
              <CreditCard className="w-6 h-6 text-[#FF7A42]" />
              <span className="font-medium text-[#4A4039]">Tarjeta</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-[#FFF9F5] rounded-2xl">
              <Smartphone className="w-6 h-6 text-[#FF7A42]" />
              <span className="font-medium text-[#4A4039]">Transferencia</span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center pt-4">
          <p className="text-[#4A4039]/60 mb-2">¿Tienes más preguntas?</p>
          <a
            href="https://wa.me/5211234567890?text=Hola! Tengo una pregunta sobre envíos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gradient-monadas text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Pregúntanos por WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
