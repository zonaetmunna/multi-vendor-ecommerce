import { Breadcrumb } from "@/components/ui/breadcrumb"
import { LandingNavbar } from "@/components/landing/landing-navbar"
import { Footer } from "@/components/landing/footer"
import { CheckoutForm } from "@/components/checkout/checkout-form"
import { CheckoutSummary } from "@/components/checkout/checkout-summary"

export default function CheckoutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <LandingNavbar />
      <div className="container mx-auto px-4 py-8 flex-1">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Cart", href: "/cart" },
            { label: "Checkout", href: "/checkout", active: true },
          ]}
        />

        <h1 className="text-3xl font-bold mt-6 mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CheckoutForm />
          </div>
          <div className="lg:col-span-1">
            <CheckoutSummary />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
