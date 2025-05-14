import { Breadcrumb } from "@/components/ui/breadcrumb"
import { LandingNavbar } from "@/components/landing/landing-navbar"
import { Footer } from "@/components/landing/footer"
import { CartItems } from "@/components/cart/cart-items"
import { CartSummary } from "@/components/cart/cart-summary"
import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"
import Link from "next/link"

export default function CartPage() {
  // In a real app, you would fetch the cart data from your state management or API
  const hasItems = true // This would be determined by your cart state

  return (
    <div className="min-h-screen flex flex-col">
      <LandingNavbar />
      <div className="container mx-auto px-4 py-8 flex-1">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Cart", href: "/cart", active: true },
          ]}
        />

        <h1 className="text-3xl font-bold mt-6 mb-8">Your Shopping Cart</h1>

        {hasItems ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <CartItems />
            </div>
            <div className="lg:col-span-1">
              <CartSummary />
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-muted mb-6">
              <ShoppingBag className="h-10 w-10 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Looks like you haven't added any products to your cart yet. Browse our products and find something you'll
              love.
            </p>
            <Link href="/products">
              <Button size="lg">Continue Shopping</Button>
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}
