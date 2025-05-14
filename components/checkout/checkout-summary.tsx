"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ShieldCheck, CreditCard, Truck, ArrowRight } from "lucide-react"

// Mock cart data
const cartItems = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199.99,
    quantity: 1,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Fitness Tracker Watch",
    price: 89.99,
    quantity: 2,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Scented Candle Set",
    price: 34.99,
    quantity: 1,
    image: "/placeholder.svg?height=80&width=80",
  },
]

export function CheckoutSummary() {
  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 0
  const tax = subtotal * 0.08
  const discount = 0
  const total = subtotal + shipping + tax - discount

  return (
    <Card className="sticky top-20">
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-3">
              <div className="h-16 w-16 rounded-md overflow-hidden bg-muted flex-shrink-0">
                <img src={item.image || "/placeholder.svg"} alt={item.name} className="h-full w-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{item.name}</p>
                <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
              </div>
              <div className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</div>
            </div>
          ))}
        </div>

        <Separator />

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Shipping</span>
            <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          {discount > 0 && (
            <div className="flex justify-between text-sm text-green-600">
              <span>Discount</span>
              <span>-${discount.toFixed(2)}</span>
            </div>
          )}
        </div>

        <Separator />

        <div className="flex justify-between font-medium">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <div className="space-y-3 pt-4">
          <div className="flex items-center gap-2 text-sm">
            <ShieldCheck className="h-4 w-4 text-green-500" />
            <span>Secure checkout</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <CreditCard className="h-4 w-4 text-blue-500" />
            <span>Multiple payment options</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Truck className="h-4 w-4 text-purple-500" />
            <span>Fast shipping options</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full gap-2" size="lg">
          Place Order
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}
