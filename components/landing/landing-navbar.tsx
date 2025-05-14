"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"

export function LandingNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
              MultiVend
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/products" className="text-sm font-medium transition-colors hover:text-primary">
            Products
          </Link>
          <Link href="/vendors" className="text-sm font-medium transition-colors hover:text-primary">
            Vendors
          </Link>
          <Link href="/categories" className="text-sm font-medium transition-colors hover:text-primary">
            Categories
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/cart">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
          <ModeToggle />
          <Link href="/auth/login">
            <Button variant="ghost" size="sm">
              Login
            </Button>
          </Link>
          <Link href="/auth/register">
            <Button size="sm">Register</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
          <Link href="/cart">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn("md:hidden", isMenuOpen ? "block" : "hidden")}>
        <div className="container py-4 space-y-4">
          <Link
            href="/products"
            className="block py-2 text-sm font-medium transition-colors hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/vendors"
            className="block py-2 text-sm font-medium transition-colors hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Vendors
          </Link>
          <Link
            href="/categories"
            className="block py-2 text-sm font-medium transition-colors hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Categories
          </Link>
          <Link
            href="/about"
            className="block py-2 text-sm font-medium transition-colors hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <div className="pt-4 border-t flex flex-col gap-2">
            <Link href="/auth/login">
              <Button variant="outline" className="w-full" size="sm">
                Login
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button className="w-full" size="sm">
                Register
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
