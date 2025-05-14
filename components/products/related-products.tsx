"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { cn } from "@/lib/utils"
import { Heart, ShoppingCart, Star } from "lucide-react"

// Mock data
const relatedProducts = [
  {
    id: 2,
    name: "Wireless Earbuds",
    price: 129.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
    rating: 4.6,
    vendor: "AudioTech",
    vendorId: 1,
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 79.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
    rating: 4.7,
    vendor: "SoundWave",
    vendorId: 11,
  },
  {
    id: 4,
    name: "Noise Cancelling Headphones",
    price: 249.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
    rating: 4.9,
    vendor: "AudioTech",
    vendorId: 1,
  },
  {
    id: 5,
    name: "Portable DAC/Amp",
    price: 149.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
    rating: 4.5,
    vendor: "AudioTech",
    vendorId: 1,
  },
]

export function RelatedProducts() {
  const [wishlistedItems, setWishlistedItems] = useState<number[]>([])

  const toggleWishlist = (productId: number) => {
    setWishlistedItems((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId],
    )
  }

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <BackgroundGradient key={product.id} className="rounded-xl">
            <Card className="h-full overflow-hidden border-0 bg-background">
              <div className="relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-[200px] object-cover"
                />
                <button
                  className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full hover:bg-white transition-colors"
                  onClick={() => toggleWishlist(product.id)}
                >
                  <Heart
                    className={cn(
                      "h-5 w-5",
                      wishlistedItems.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-600",
                    )}
                  />
                </button>
                <Link
                  href={`/vendors/${product.vendorId}`}
                  className="absolute bottom-2 left-2 text-xs bg-black/70 text-white px-2 py-1 rounded-full hover:bg-black/90"
                >
                  {product.vendor}
                </Link>
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
                <div className="font-bold text-lg">${product.price.toFixed(2)}</div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          </BackgroundGradient>
        ))}
      </div>
    </div>
  )
}
