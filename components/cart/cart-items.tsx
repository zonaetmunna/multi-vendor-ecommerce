"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Trash2, Minus, Plus } from "lucide-react"

// Mock cart data
const cartItems = [
  {
    id: 1,
    productId: 1,
    name: "Premium Wireless Headphones",
    price: 199.99,
    image: "/placeholder.svg?height=200&width=200",
    quantity: 1,
    color: "Black",
    vendor: {
      id: 1,
      name: "AudioTech",
    },
    stock: 45,
  },
  {
    id: 2,
    productId: 5,
    name: "Fitness Tracker Watch",
    price: 89.99,
    image: "/placeholder.svg?height=200&width=200",
    quantity: 2,
    color: "Black",
    vendor: {
      id: 5,
      name: "FitTech",
    },
    stock: 32,
  },
  {
    id: 3,
    productId: 7,
    name: "Scented Candle Set",
    price: 34.99,
    image: "/placeholder.svg?height=200&width=200",
    quantity: 1,
    variant: "Lavender",
    vendor: {
      id: 7,
      name: "AromaHouse",
    },
    stock: 78,
  },
]

export function CartItems() {
  const [items, setItems] = useState(cartItems)

  const updateQuantity = (itemId: number, newQuantity: number) => {
    if (newQuantity < 1) return

    const item = items.find((item) => item.id === itemId)
    if (item && newQuantity <= item.stock) {
      setItems(items.map((item) => (item.id === itemId ? { ...item, quantity: newQuantity } : item)))
    }
  }

  const removeItem = (itemId: number) => {
    setItems(items.filter((item) => item.id !== itemId))
  }

  // Group items by vendor
  const itemsByVendor = items.reduce(
    (acc, item) => {
      const vendorId = item.vendor.id
      if (!acc[vendorId]) {
        acc[vendorId] = {
          vendor: item.vendor,
          items: [],
        }
      }
      acc[vendorId].items.push(item)
      return acc
    },
    {} as Record<number, { vendor: any; items: typeof items }>,
  )

  return (
    <div className="space-y-8">
      {Object.values(itemsByVendor).map((group) => (
        <div key={group.vendor.id} className="bg-card rounded-lg border overflow-hidden">
          <div className="bg-muted/50 px-6 py-4">
            <Link href={`/vendors/${group.vendor.id}`} className="font-medium hover:text-primary transition-colors">
              {group.vendor.name}
            </Link>
          </div>
          <div className="divide-y">
            {group.items.map((item) => (
              <div key={item.id} className="p-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-full sm:w-24 h-24 bg-muted rounded-md overflow-hidden flex-shrink-0">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:justify-between">
                      <Link
                        href={`/products/${item.productId}`}
                        className="font-medium hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                      <div className="font-bold">${(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {item.color && <span>Color: {item.color}</span>}
                      {item.variant && <span>Variant: {item.variant}</span>}
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-r-none"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-3 w-3" />
                          <span className="sr-only">Decrease quantity</span>
                        </Button>
                        <Input
                          type="number"
                          min="1"
                          max={item.stock}
                          className="h-8 w-12 rounded-none text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          value={item.quantity}
                          onChange={(e) => {
                            const value = Number.parseInt(e.target.value)
                            if (!isNaN(value) && value >= 1 && value <= item.stock) {
                              updateQuantity(item.id, value)
                            }
                          }}
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-l-none"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          disabled={item.quantity >= item.stock}
                        >
                          <Plus className="h-3 w-3" />
                          <span className="sr-only">Increase quantity</span>
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-muted-foreground hover:text-destructive"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {items.length === 0 && (
        <div className="text-center py-12 bg-card rounded-lg border">
          <p className="text-muted-foreground">Your cart is empty</p>
          <Link href="/products">
            <Button className="mt-4">Continue Shopping</Button>
          </Link>
        </div>
      )}

      <div className="flex justify-between items-center">
        <Button variant="outline" asChild>
          <Link href="/products">Continue Shopping</Link>
        </Button>
        <Button variant="outline" onClick={() => setItems([])}>
          Clear Cart
        </Button>
      </div>
    </div>
  )
}
