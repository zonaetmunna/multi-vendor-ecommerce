"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { BackgroundGradient } from "../ui/background-gradient"
import { SparklesCore } from "../ui/sparkles"

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="relative w-full min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#8a63d2"
        />
      </div>

      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center space-y-10">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            The Ultimate{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
              Multi-Vendor
            </span>{" "}
            Marketplace
          </h1>
          <p className="text-muted-foreground text-xl max-w-[700px] mx-auto">
            Shop from thousands of vendors in one place. Find unique products, compare prices, and enjoy a seamless
            shopping experience.
          </p>
        </div>

        <div className="w-full max-w-md flex items-center space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for products, vendors, or categories..."
              className="pl-10 h-12 rounded-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button size="lg" className="h-12 px-6 rounded-full">
            Search
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <BackgroundGradient className="rounded-xl">
            <Link href="/auth/register?type=customer">
              <Button size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-gray-100">
                Shop Now
              </Button>
            </Link>
          </BackgroundGradient>
          <BackgroundGradient className="rounded-xl">
            <Link href="/auth/register?type=vendor">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white text-black hover:bg-gray-100">
                Become a Vendor
              </Button>
            </Link>
          </BackgroundGradient>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-green-500"></div>
            <span className="text-sm">10,000+ Products</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-blue-500"></div>
            <span className="text-sm">500+ Vendors</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-purple-500"></div>
            <span className="text-sm">24/7 Support</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-yellow-500"></div>
            <span className="text-sm">Secure Payments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
