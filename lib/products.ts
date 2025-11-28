export interface Product {
  id: string
  name: string
  price: number
  description: string
  image: string
  category: string
  stock: number
  isNew?: boolean
}

export const categories = [
  { id: "all", name: "Todos", emoji: "🛍️" },
  { id: "ropa", name: "Ropa", emoji: "👕" },
  { id: "accesorios", name: "Accesorios", emoji: "✨" },
  { id: "hogar", name: "Hogar", emoji: "🏠" },
  { id: "tech", name: "Tech", emoji: "📱" },
  { id: "belleza", name: "Belleza", emoji: "💄" },
]

export const products: Product[] = [
  {
    id: "1",
    name: "Blusa Floral Elegante",
    price: 299,
    description: "Hermosa blusa con estampado floral, perfecta para cualquier ocasión. Tela suave y cómoda.",
    image: "/floral-blouse-elegant-fashion.jpg",
    category: "ropa",
    stock: 15,
    isNew: true,
  },
  {
    id: "2",
    name: "Aretes Dorados Luna",
    price: 89,
    description: "Elegantes aretes con diseño de luna creciente. Perfectos para el día a día.",
    image: "/gold-moon-earrings-jewelry.jpg",
    category: "accesorios",
    stock: 25,
    isNew: true,
  },
  {
    id: "3",
    name: "Vela Aromática Vainilla",
    price: 149,
    description: "Vela artesanal con aroma a vainilla. Duración aproximada de 40 horas.",
    image: "/vanilla-scented-candle-aesthetic.jpg",
    category: "hogar",
    stock: 12,
  },
  {
    id: "4",
    name: "Funda iPhone Minimalista",
    price: 199,
    description: "Funda protectora con diseño minimalista. Compatible con iPhone 13/14/15.",
    image: "/minimalist-phone-case-pastel.jpg",
    category: "tech",
    stock: 30,
  },
  {
    id: "5",
    name: "Set de Brochas Makeup",
    price: 249,
    description: "Set de 8 brochas profesionales para maquillaje. Cerdas suaves y mango ergonómico.",
    image: "/makeup-brush-set-pink-professional.jpg",
    category: "belleza",
    stock: 8,
    isNew: true,
  },
  {
    id: "6",
    name: "Vestido Midi Casual",
    price: 449,
    description: "Vestido midi perfecto para el verano. Tela fresca y diseño versátil.",
    image: "/midi-dress-casual-summer-fashion.jpg",
    category: "ropa",
    stock: 10,
  },
  {
    id: "7",
    name: "Collar Perlas Naturales",
    price: 189,
    description: "Collar elegante con perlas de agua dulce. Cierre ajustable.",
    image: "/pearl-necklace-elegant-jewelry.jpg",
    category: "accesorios",
    stock: 15,
  },
  {
    id: "8",
    name: "Maceta Decorativa Cerámica",
    price: 179,
    description: "Maceta artesanal de cerámica con diseño geométrico moderno.",
    image: "/ceramic-planter-pot-geometric-modern.jpg",
    category: "hogar",
    stock: 20,
  },
  {
    id: "9",
    name: "Power Bank 10000mAh",
    price: 349,
    description: "Cargador portátil de alta capacidad. Carga rápida para todos tus dispositivos.",
    image: "/power-bank-portable-charger-sleek.jpg",
    category: "tech",
    stock: 18,
  },
  {
    id: "10",
    name: "Paleta de Sombras Sunset",
    price: 279,
    description: "12 tonos cálidos inspirados en el atardecer. Alta pigmentación y larga duración.",
    image: "/eyeshadow-palette-warm-sunset-colors.jpg",
    category: "belleza",
    stock: 22,
    isNew: true,
  },
  {
    id: "11",
    name: "Sudadera Oversize Comfy",
    price: 399,
    description: "Sudadera ultra cómoda estilo oversize. Perfecta para días fríos.",
    image: "/oversize-hoodie-cozy-fashion.jpg",
    category: "ropa",
    stock: 14,
  },
  {
    id: "12",
    name: "Bolsa Tote Canvas",
    price: 159,
    description: "Bolsa tote de canvas ecológica. Amplia y resistente.",
    image: "/canvas-tote-bag-eco-fashion.jpg",
    category: "accesorios",
    stock: 35,
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products
  return products.filter((p) => p.category === category)
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase()
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.category.toLowerCase().includes(lowerQuery),
  )
}
