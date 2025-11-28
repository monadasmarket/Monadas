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
  { id: "bolsas", name: "Bolsas", emoji: "👜" },
  { id: "vapes", name: "Vapes", emoji: "💨" },
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
    category: "bolsas",
    stock: 35,
  },
  {
    id: "13",
    name: "Bolsa Crossbody Negra",
    price: 289,
    description: "Bolsa crossbody elegante en color negro. Ideal para el día a día.",
    image: "/black-crossbody-bag-fashion.jpg",
    category: "bolsas",
    stock: 20,
    isNew: true,
  },
  {
    id: "14",
    name: "Mochila Mini Trendy",
    price: 349,
    description: "Mochila mini estilo moderno. Perfecta para salidas casuales.",
    image: "/mini-backpack-trendy-fashion.jpg",
    category: "bolsas",
    stock: 18,
  },
  {
    id: "15",
    name: "Bolsa Shopper Grande",
    price: 399,
    description: "Bolsa shopper espaciosa para todas tus compras. Material resistente.",
    image: "/large-shopper-bag-fashion.jpg",
    category: "bolsas",
    stock: 15,
  },
  {
    id: "16",
    name: "Clutch Dorado Elegante",
    price: 259,
    description: "Clutch dorado para ocasiones especiales. Cadena removible.",
    image: "/gold-clutch-bag-elegant.jpg",
    category: "bolsas",
    stock: 12,
  },
  {
    id: "17",
    name: "Bolsa Bucket Rosa",
    price: 319,
    description: "Bolsa bucket en rosa pastel. Diseño moderno y juvenil.",
    image: "/pink-bucket-bag-fashion.jpg",
    category: "bolsas",
    stock: 10,
    isNew: true,
  },
  {
    id: "18",
    name: "Vape Desechable Fresa",
    price: 189,
    description: "Vape desechable sabor fresa. 5000 puffs aproximadamente.",
    image: "/disposable-vape-strawberry-flavor.jpg",
    category: "vapes",
    stock: 30,
    isNew: true,
  },
  {
    id: "19",
    name: "Vape Desechable Mango",
    price: 189,
    description: "Vape desechable sabor mango tropical. 5000 puffs aproximadamente.",
    image: "/disposable-vape-mango-flavor.jpg",
    category: "vapes",
    stock: 25,
  },
  {
    id: "20",
    name: "Vape Desechable Uva",
    price: 189,
    description: "Vape desechable sabor uva. 5000 puffs aproximadamente.",
    image: "/disposable-vape-grape-flavor-purple.jpg",
    category: "vapes",
    stock: 28,
  },
  {
    id: "21",
    name: "Vape Recargable Kit",
    price: 449,
    description: "Kit de vape recargable completo. Incluye cargador y estuche.",
    image: "/rechargeable-vape-kit-modern.jpg",
    category: "vapes",
    stock: 15,
    isNew: true,
  },
  {
    id: "22",
    name: "Vape Desechable Sandía",
    price: 189,
    description: "Vape desechable sabor sandía refrescante. 5000 puffs aproximadamente.",
    image: "/disposable-vape-watermelon-flavor.jpg",
    category: "vapes",
    stock: 22,
  },
  {
    id: "23",
    name: "Vape Desechable Menta",
    price: 189,
    description: "Vape desechable sabor menta fresca. 5000 puffs aproximadamente.",
    image: "/disposable-vape-mint-flavor.jpg",
    category: "vapes",
    stock: 20,
  },
  {
    id: "24",
    name: "Lentes de Sol Retro",
    price: 199,
    description: "Lentes de sol estilo retro. Protección UV400.",
    image: "/retro-sunglasses-fashion.jpg",
    category: "accesorios",
    stock: 18,
  },
  {
    id: "25",
    name: "Gorra Bordada",
    price: 149,
    description: "Gorra con diseño bordado. Ajustable y cómoda.",
    image: "/embroidered-cap-fashion.jpg",
    category: "accesorios",
    stock: 25,
  },
  {
    id: "26",
    name: "Playera Básica Blanca",
    price: 179,
    description: "Playera básica de algodón. Corte clásico y cómodo.",
    image: "/basic-white-t-shirt-fashion.jpg",
    category: "ropa",
    stock: 40,
  },
  {
    id: "27",
    name: "Jeans Mom Fit",
    price: 499,
    description: "Jeans estilo mom fit. Tiro alto y cómodo.",
    image: "/mom-fit-jeans-fashion.jpg",
    category: "ropa",
    stock: 12,
    isNew: true,
  },
  {
    id: "28",
    name: "Labial Mate Rojo",
    price: 129,
    description: "Labial mate de larga duración. Color rojo intenso.",
    image: "/placeholder.svg?height=400&width=400",
    category: "belleza",
    stock: 30,
  },
  {
    id: "29",
    name: "Audífonos Bluetooth",
    price: 399,
    description: "Audífonos inalámbricos con estuche de carga. Sonido de alta calidad.",
    image: "/placeholder.svg?height=400&width=400",
    category: "tech",
    stock: 20,
    isNew: true,
  },
  {
    id: "30",
    name: "Espejo LED Maquillaje",
    price: 279,
    description: "Espejo con luz LED para maquillaje. Aumenta 5x.",
    image: "/placeholder.svg?height=400&width=400",
    category: "belleza",
    stock: 15,
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
