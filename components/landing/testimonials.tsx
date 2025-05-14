"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Quote } from "lucide-react"

// Mock data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Customer",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "I love shopping on MultiVend! The variety of products from different vendors all in one place makes it so convenient. The checkout process is smooth, and I can track all my orders easily.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Vendor - TechGadgets",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "As a vendor, MultiVend has helped me reach a wider audience and grow my business. The platform is easy to use, and the analytics tools help me understand my customers better.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Customer",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "The quality of products and vendors on this platform is exceptional. I appreciate the detailed vendor profiles and customer reviews that help me make informed purchasing decisions.",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Vendor - EcoHome",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "MultiVend's vendor dashboard is intuitive and powerful. Managing my products, orders, and payments is straightforward, allowing me to focus on creating quality products.",
  },
  {
    id: 5,
    name: "Jessica Patel",
    role: "Customer",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "I've discovered so many unique products from independent vendors that I wouldn't have found elsewhere. The platform's curation is excellent, and shipping is always reliable.",
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 px-4 md:px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">What People Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from our customers and vendors about their experiences with our platform.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-6 left-10 text-primary/20">
            <Quote className="h-20 w-20" />
          </div>

          <div className="relative z-10">
            <Card className="border-0 shadow-lg bg-background">
              <CardContent className="p-8">
                <p className="text-lg mb-6 italic">"{testimonials[activeIndex].content}"</p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonials[activeIndex].avatar || "/placeholder.svg"}
                      alt={testimonials[activeIndex].name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonials[activeIndex].name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition-colors",
                  index === activeIndex ? "bg-primary" : "bg-muted-foreground/30",
                )}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
