import type React from "react"
import type { Metadata, Viewport } from "next"
import { Nunito } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { CartProvider } from "@/context/cart-context"
import { Navbar } from "@/components/navbar"
import { WhatsAppButton } from "@/components/whatsapp-button"

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Monadas - Tu tienda de todo",
  description: "Tu tienda de estilo y variedad. Encuentra productos únicos y haz tu pedido por WhatsApp.",
  keywords: ["tienda", "productos", "variedad", "monadas", "pedidos", "whatsapp"],
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#FF7A42",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${nunito.className} antialiased`}>
        <CartProvider>
          <Navbar />
          <main className="min-h-screen pt-16">{children}</main>
          <WhatsAppButton />
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
