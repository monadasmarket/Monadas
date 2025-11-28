"use client"

import { useState, useEffect } from "react"

const messages = ["Actualizado cada lunes", "Novedades disponibles", "Envios desde 3 piezas", "Estilo y variedad"]

export function RotatingTagline() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % messages.length)
        setIsVisible(true)
      }, 300)
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full bg-[#FFF9F5] border-b border-[#FF7A42]/10 py-1.5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <p
          className={`text-center text-xs sm:text-sm font-medium text-[#4A4039] transition-all duration-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}
        >
          <span className="mr-1.5">✨</span>
          {messages[currentIndex]}
          <span className="ml-1.5">✨</span>
        </p>
      </div>
    </div>
  )
}
