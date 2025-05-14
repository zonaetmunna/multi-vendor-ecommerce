"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Heart, Minus, Plus, Share2, ShoppingCart, Star, Truck } from "lucide-react"
import { cn } from "@/lib/utils"

// Mock product data
const product = {
  id: 1,
  name: "Premium Wireless Headphones",
  price: 199.99,
  discount: 15,
  rating: 4.8,
  reviewCount: 124,
  stock: 45,
  sku: "WH-1000XM4",
  description:
    "Experience premium sound quality with these wireless headphones. Features noise cancellation, long battery life, and comfortable design for all-day wear.",
  vendor: {
    id: 1,
    name: "AudioTech",
    rating: 4.9,
  },
  images: [
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600&text=Image+2",
    "/placeholder.svg?height=600&width=600&text=Image+3",
    "/placeholder.svg?height=600&width=600&text=Image+4",
  ],
  variants: {
    colors: ["Black", "Silver", "Blue"],
    sizes: [],
  },
  shipping: {
    free: true,
    estimatedDelivery: "3-5 business days",
  },
  features: [
    "Noise cancellation technology",
    "30-hour battery life",
    "Quick charging (5 hours of playback with 10 minutes of charge)",
    "Touch controls",
    "Voice assistant compatible",
  ],
}

export function ProductDetails({ productId }: { productId: number }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(product.variants.colors[0])
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const discountedPrice = product.discount ? (product.price * (100 - product.discount)) / 100 : product.price

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1)
    }
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      {/* Product Images */}
      <div className="space-y-4">
        <div className="relative aspect-square overflow-hidden rounded-lg border bg-muted">
          <img
            src={product.images[selectedImage] || "/placeholder.svg"}
            alt={product.name}
            className="object-cover w-full h-full"
          />
          {product.discount > 0 && <Badge className="absolute top-4 left-4 bg-red-500">{product.discount}% OFF</Badge>}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {product.images.map((image, index) => (
            <button
              key={index}
              className={cn(
                "relative aspect-square rounded-md overflow-hidden border-2",
                selectedImage === index ? "border-primary" : "border-transparent hover:border-muted-foreground/50",
              )}
              onClick={() => setSelectedImage(index)}
            >
              <img src={image || "/placeholder.svg"} alt={`Product view ${index + 1}`} className="object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-6">
        <div>
          <Link
            href={`/vendors/${product.vendor.id}`}
            className="text-sm font-medium text-muted-foreground hover:text-primary"
          >
            {product.vendor.name}
          </Link>
          <h1 className="text-3xl font-bold mt-1">{product.name}</h1>
          <div className="flex items-center mt-2">
            <div className="flex items-center">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "h-4 w-4",
                      i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300",
                    )}
                  />
                ))}
            </div>
            <span className="ml-2 text-sm text-muted-foreground">
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {product.discount > 0 ? (
            <>
              <span className="text-3xl font-bold">${discountedPrice.toFixed(2)}</span>
              <span className="text-xl text-muted-foreground line-through">${product.price.toFixed(2)}</span>
              <Badge variant="outline" className="text-red-500 border-red-500">
                Save ${(product.price - discountedPrice).toFixed(2)}
              </Badge>
            </>
          ) : (
            <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
          )}
        </div>

        <div className="space-y-4">
          {product.variants.colors.length > 0 && (
            <div>
              <h3 className="text-sm font-medium mb-2">Color</h3>
              <div className="flex flex-wrap gap-2">
                {product.variants.colors.map((color) => (
                  <button
                    key={color}
                    className={cn(
                      "px-3 py-1 rounded-md border text-sm",
                      selectedColor === color ? "border-primary bg-primary/10" : "border-input hover:border-primary",
                    )}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div>
            <h3 className="text-sm font-medium mb-2">Quantity</h3>
            <div className="flex items-center">
              <Button
                variant="outline"
                size="icon"
                className="h-9 w-9 rounded-r-none"
                onClick={decrementQuantity}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
                <span className="sr-only">Decrease quantity</span>
              </Button>
              <Input
                type="number"
                min="1"
                max={product.stock}
                className="h-9 w-14 rounded-none text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                value={quantity}
                onChange={(e) => {
                  const value = Number.parseInt(e.target.value)
                  if (!isNaN(value) && value >= 1 && value <= product.stock) {
                    setQuantity(value)
                  }
                }}
              />
              <Button
                variant="outline"
                size="icon"
                className="h-9 w-9 rounded-l-none"
                onClick={incrementQuantity}
                disabled={quantity >= product.stock}
              >
                <Plus className="h-4 w-4" />
                <span className="sr-only">Increase quantity</span>
              </Button>
              <span className="ml-4 text-sm text-muted-foreground">{product.stock} available</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button className="flex-1 gap-2" size="lg">
              <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </Button>
            <Button
              variant="outline"
              size="lg"
              className={cn("gap-2", isWishlisted && "bg-red-50 text-red-500 border-red-200 hover:bg-red-100")}
              onClick={() => setIsWishlisted(!isWishlisted)}
            >
              <Heart className={cn("h-5 w-5", isWishlisted && "fill-red-500 text-red-500")} />
              {isWishlisted ? "Wishlisted" : "Add to Wishlist"}
            </Button>
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex items-center text-sm">
            <Truck className="h-4 w-4 mr-2 text-muted-foreground" />
            {product.shipping.free ? (
              <span>
                <span className="font-medium">Free shipping</span> • Estimated delivery:{" "}
                {product.shipping.estimatedDelivery}
              </span>
            ) : (
              <span>Estimated delivery: {product.shipping.estimatedDelivery}</span>
            )}
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
            <div>
              <span className="text-muted-foreground">SKU:</span> {product.sku}
            </div>
            <div>
              <span className="text-muted-foreground">Category:</span> Electronics
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4 pt-2">
          <Button variant="ghost" size="sm" className="gap-2">
            <Share2 className="h-4 w-4" />
            Share
          </Button>
        </div>
      </div>
    </div>
  )
}
