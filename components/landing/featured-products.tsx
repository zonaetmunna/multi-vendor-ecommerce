"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { BackgroundGradient } from "../ui/background-gradient"
import { Heart, ShoppingCart, Star } from "lucide-react"

// Mock data
const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "electronics",
    rating: 4.8,
    vendor: "AudioTech",
    vendorId: 1,
  },
  {
    id: 2,
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "fashion",
    rating: 4.5,
    vendor: "EcoWear",
    vendorId: 2,
  },
  {
    id: 3,
    name: "Smart Home Hub",
    price: 149.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "electronics",
    rating: 4.7,
    vendor: "TechHome",
    vendorId: 3,
  },
  {
    id: 4,
    name: "Handcrafted Ceramic Mug",
    price: 24.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "home",
    rating: 4.9,
    vendor: "ArtisanCrafts",
    vendorId: 4,
  },
  {
    id: 5,
    name: "Fitness Tracker Watch",
    price: 89.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "electronics",
    rating: 4.6,
    vendor: "FitTech",
    vendorId: 5,
  },
  {
    id: 6,
    name: "Leather Wallet",
    price: 49.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "fashion",
    rating: 4.7,
    vendor: "LeatherCraft",
    vendorId: 6,
  },
  {
    id: 7,
    name: "Scented Candle Set",
    price: 34.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "home",
    rating: 4.8,
    vendor: "AromaHouse",
    vendorId: 7,
  },
  {
    id: 8,
    name: "Stainless Steel Water Bottle",
    price: 19.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "home",
    rating: 4.5,
    vendor: "EcoLiving",
    vendorId: 8,
  },
]

export function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredProducts = activeTab === "all" ? products : products.filter((product) => product.category === activeTab)

  return (
    <section className="py-16 px-4 md:px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of top products from our trusted vendors.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-4 md:grid-cols-4 gap-4">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="electronics"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Electronics
              </TabsTrigger>
              <TabsTrigger
                value="fashion"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Fashion
              </TabsTrigger>
              <TabsTrigger
                value="home"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Home
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-center mt-10">
          <Link href="/products">
            <Button size="lg">View All Products</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product }: { product: any }) {
  const [isWishlisted, setIsWishlisted] = useState(false)

  return (
    <BackgroundGradient className="rounded-xl">
      <Card className="h-full overflow-hidden border-0 bg-background">
        <div className="relative">
          <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-[200px] object-cover" />
          <button
            className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full hover:bg-white transition-colors"
            onClick={() => setIsWishlisted(!isWishlisted)}
          >
            <Heart className={cn("h-5 w-5", isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600")} />
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
  )
}
