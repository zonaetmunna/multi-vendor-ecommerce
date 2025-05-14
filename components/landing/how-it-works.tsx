"use client"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ShoppingBag, Store, CreditCard, Package } from "lucide-react"

const steps = [
  {
    icon: ShoppingBag,
    title: "Browse Products",
    description: "Explore thousands of products from various vendors all in one place.",
    color: "bg-blue-500",
  },
  {
    icon: Store,
    title: "Choose Vendors",
    description: "Select from trusted vendors with verified ratings and reviews.",
    color: "bg-purple-500",
  },
  {
    icon: CreditCard,
    title: "Secure Checkout",
    description: "Pay securely with multiple payment options and vendor-specific shipping.",
    color: "bg-pink-500",
  },
  {
    icon: Package,
    title: "Track Orders",
    description: "Monitor your orders from multiple vendors in a unified dashboard.",
    color: "bg-green-500",
  },
]

export function HowItWorks() {
  return (
    <section className="py-16 px-4 md:px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our multi-vendor platform makes shopping simple, secure, and seamless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className={cn("p-3 rounded-full mb-4", step.color)}>
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center p-1 bg-muted rounded-full">
            <div className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium">
              For Shoppers
            </div>
            <div className="px-4 py-2 text-sm font-medium">For Vendors</div>
          </div>
        </div>
      </div>
    </section>
  )
}
