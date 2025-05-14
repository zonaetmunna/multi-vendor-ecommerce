"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { cn } from "@/lib/utils"
import { Heart, ShoppingCart, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Pagination } from "@/components/ui/pagination"

// Mock data
const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
    rating: 4.8,
    vendor: "AudioTech",
    vendorId: 1,
    discount: 0,
    variants: ["Black", "White", "Blue"],
    stock: 45,
  },
  {
    id: 2,
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Fashion",
    rating: 4.5,
    vendor: "EcoWear",
    vendorId: 2,
    discount: 15,
    variants: ["S", "M", "L", "XL"],
    stock: 120,
  },
  {
    id: 3,
    name: "Smart Home Hub",
    price: 149.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
    rating: 4.7,
    vendor: "TechHome",
    vendorId: 3,
    discount: 0,
    variants: ["White", "Black"],
    stock: 18,
  },
  {
    id: 4,
    name: "Handcrafted Ceramic Mug",
    price: 24.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Home",
    rating: 4.9,
    vendor: "ArtisanCrafts",
    vendorId: 4,
    discount: 0,
    variants: ["Blue", "Green", "Red", "Yellow"],
    stock: 65,
  },
  {
    id: 5,
    name: "Fitness Tracker Watch",
    price: 89.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
    rating: 4.6,
    vendor: "FitTech",
    vendorId: 5,
    discount: 10,
    variants: ["Black", "Silver", "Rose Gold"],
    stock: 32,
  },
  {
    id: 6,
    name: "Leather Wallet",
    price: 49.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Fashion",
    rating: 4.7,
    vendor: "LeatherCraft",
    vendorId: 6,
    discount: 0,
    variants: ["Brown", "Black", "Tan"],
    stock: 54,
  },
  {
    id: 7,
    name: "Scented Candle Set",
    price: 34.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Home",
    rating: 4.8,
    vendor: "AromaHouse",
    vendorId: 7,
    discount: 20,
    variants: ["Lavender", "Vanilla", "Sandalwood", "Ocean Breeze"],
    stock: 78,
  },
  {
    id: 8,
    name: "Stainless Steel Water Bottle",
    price: 19.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Home",
    rating: 4.5,
    vendor: "EcoLiving",
    vendorId: 8,
    discount: 0,
    variants: ["500ml", "750ml", "1L"],
    stock: 92,
  },
  {
    id: 9,
    name: "Wireless Charging Pad",
    price: 39.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
    rating: 4.4,
    vendor: "TechGear",
    vendorId: 9,
    discount: 0,
    variants: ["Black", "White"],
    stock: 27,
  },
  {
    id: 10,
    name: "Bamboo Cutting Board",
    price: 29.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Home",
    rating: 4.7,
    vendor: "EcoKitchen",
    vendorId: 10,
    discount: 0,
    variants: ["Small", "Medium", "Large"],
    stock: 41,
  },
  {
    id: 11,
    name: "Bluetooth Speaker",
    price: 79.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
    rating: 4.6,
    vendor: "SoundWave",
    vendorId: 11,
    discount: 15,
    variants: ["Black", "Blue", "Red"],
    stock: 23,
  },
  {
    id: 12,
    name: "Yoga Mat",
    price: 45.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Sports",
    rating: 4.8,
    vendor: "FitLife",
    vendorId: 12,
    discount: 0,
    variants: ["Purple", "Blue", "Black", "Green"],
    stock: 56,
  },
]

export function ProductGrid() {
  const [currentPage, setCurrentPage] = useState(1)
  const [wishlistedItems, setWishlistedItems] = useState<number[]>([])
  const productsPerPage = 12
  const totalPages = Math.ceil(products.length / productsPerPage)

  const toggleWishlist = (productId: number) => {
    setWishlistedItems((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId],
    )
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isWishlisted={wishlistedItems.includes(product.id)}
            onToggleWishlist={toggleWishlist}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      </div>
    </div>
  )
}

function ProductCard({
  product,
  isWishlisted,
  onToggleWishlist,
}: {
  product: any
  isWishlisted: boolean
  onToggleWishlist: (id: number) => void
}) {
  return (
    <BackgroundGradient className="rounded-xl">
      <Card className="h-full overflow-hidden border-0 bg-background">
        <div className="relative">
          <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-[200px] object-cover" />
          <button
            className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full hover:bg-white transition-colors"
            onClick={() => onToggleWishlist(product.id)}
          >
            <Heart className={cn("h-5 w-5", isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600")} />
          </button>
          <Link
            href={`/vendors/${product.vendorId}`}
            className="absolute bottom-2 left-2 text-xs bg-black/70 text-white px-2 py-1 rounded-full hover:bg-black/90"
          >
            {product.vendor}
          </Link>
          {product.discount > 0 && <Badge className="absolute top-2 left-2 bg-red-500">{product.discount}% OFF</Badge>}
          {product.stock < 20 && (
            <Badge
              variant="outline"
              className="absolute bottom-2 right-2 bg-yellow-500/80 text-white border-yellow-500"
            >
              Low Stock
            </Badge>
          )}
        </div>
        <CardContent className="p-4">
          <Link href={`/products/${product.id}`}>
            <h3 className="font-medium text-lg mb-1 hover:text-primary transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "h-3.5 w-3.5",
                      i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300",
                    )}
                  />
                ))}
            </div>
            <span className="text-xs text-muted-foreground ml-1">({product.rating})</span>
          </div>
          <div className="flex items-center gap-2">
            {product.discount > 0 ? (
              <>
                <span className="font-bold text-lg">
                  ${((product.price * (100 - product.discount)) / 100).toFixed(2)}
                </span>
                <span className="text-sm text-muted-foreground line-through">${product.price.toFixed(2)}</span>
              </>
            ) : (
              <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
            )}
          </div>
          {product.variants && product.variants.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {product.variants.slice(0, 3).map((variant: string, idx: number) => (
                <span key={idx} className="inline-block px-2 py-1 text-xs bg-muted rounded-md">
                  {variant}
                </span>
              ))}
              {product.variants.length > 3 && (
                <span className="inline-block px-2 py-1 text-xs bg-muted rounded-md">
                  +{product.variants.length - 3} more
                </span>
              )}
            </div>
          )}
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button className="w-full gap-2">
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </BackgroundGradient>
  )
}
