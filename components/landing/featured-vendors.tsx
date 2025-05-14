"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BackgroundGradient } from "../ui/background-gradient"
import { cn } from "@/lib/utils"
import { ExternalLink, Star } from "lucide-react"

// Mock data
const vendors = [
  {
    id: 1,
    name: "AudioTech",
    logo: "/placeholder.svg?height=100&width=100",
    category: "Electronics",
    rating: 4.8,
    productCount: 120,
    description: "Premium audio equipment and accessories",
  },
  {
    id: 2,
    name: "EcoWear",
    logo: "/placeholder.svg?height=100&width=100",
    category: "Fashion",
    rating: 4.7,
    productCount: 85,
    description: "Sustainable and eco-friendly clothing",
  },
  {
    id: 3,
    name: "TechHome",
    logo: "/placeholder.svg?height=100&width=100",
    category: "Smart Home",
    rating: 4.9,
    productCount: 65,
    description: "Innovative smart home solutions",
  },
  {
    id: 4,
    name: "ArtisanCrafts",
    logo: "/placeholder.svg?height=100&width=100",
    category: "Home Decor",
    rating: 4.9,
    productCount: 110,
    description: "Handcrafted home decor and accessories",
  },
  {
    id: 5,
    name: "FitTech",
    logo: "/placeholder.svg?height=100&width=100",
    category: "Fitness",
    rating: 4.6,
    productCount: 75,
    description: "Cutting-edge fitness technology and gear",
  },
  {
    id: 6,
    name: "LeatherCraft",
    logo: "/placeholder.svg?height=100&width=100",
    category: "Accessories",
    rating: 4.8,
    productCount: 95,
    description: "Premium leather goods and accessories",
  },
]

export function FeaturedVendors() {
  return (
    <section className="py-16 px-4 md:px-6 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Top Vendors</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet our trusted vendors who provide high-quality products and exceptional service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vendors.map((vendor) => (
            <VendorCard key={vendor.id} vendor={vendor} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link href="/vendors">
            <Button size="lg">View All Vendors</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

function VendorCard({ vendor }: { vendor: any }) {
  return (
    <BackgroundGradient className="rounded-xl">
      <Card className="h-full border-0 bg-background">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="h-16 w-16 rounded-full overflow-hidden bg-muted flex items-center justify-center">
              <img src={vendor.logo || "/placeholder.svg"} alt={vendor.name} className="h-full w-full object-cover" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg">{vendor.name}</h3>
                <span className="text-xs px-2 py-1 bg-muted rounded-full">{vendor.category}</span>
              </div>
              <div className="flex items-center mt-1 mb-2">
                <div className="flex items-center">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "h-3.5 w-3.5",
                          i < Math.floor(vendor.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300",
                        )}
                      />
                    ))}
                </div>
                <span className="text-xs text-muted-foreground ml-1">({vendor.rating})</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{vendor.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{vendor.productCount} Products</span>
                <Link href={`/vendors/${vendor.id}`}>
                  <Button variant="ghost" size="sm" className="h-8 gap-1">
                    Visit Store
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </BackgroundGradient>
  )
}
