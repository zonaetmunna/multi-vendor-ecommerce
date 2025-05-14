"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ShieldCheck } from "lucide-react"

export function CartSummary() {
  const [promoCode, setPromoCode] = useState("")
  const [promoApplied, setPromoApplied] = useState(false)

  // Mock cart totals
  const subtotal = 414.97
  const shipping = 0
  const tax = subtotal * 0.08
  const discount = promoApplied ? subtotal * 0.1 : 0
  const total = subtotal + shipping + tax - discount

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "discount10") {
      setPromoApplied(true)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
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
          {promoApplied && (
            <div className="flex justify-between text-sm text-green-600">
              <span>Discount (10%)</span>
              <span>-${discount.toFixed(2)}</span>
            </div>
          )}
        </div>

        <Separator />

        <div className="flex justify-between font-medium">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <div className="pt-4">
          <div className="flex space-x-2">
            <Input placeholder="Promo code" value={promoCode} onChange={(e) => setPromoCode(e.target.value)} />
            <Button variant="outline" onClick={applyPromoCode} disabled={promoApplied || !promoCode}>
              Apply
            </Button>
          </div>
          {promoApplied && <p className="text-xs text-green-600 mt-1">Promo code applied successfully!</p>}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col">
        <Button className="w-full gap-2" size="lg" asChild>
          <Link href="/checkout">
            Proceed to Checkout
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
        <div className="flex items-center justify-center gap-2 mt-4 text-xs text-muted-foreground">
          <ShieldCheck className="h-4 w-4" />
          <span>Secure checkout</span>
        </div>
        <div className="flex justify-center mt-4">
          <div className="flex gap-2">
            <div className="h-6 w-10 bg-muted rounded"></div>
            <div className="h-6 w-10 bg-muted rounded"></div>
            <div className="h-6 w-10 bg-muted rounded"></div>
            <div className="h-6 w-10 bg-muted rounded"></div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
