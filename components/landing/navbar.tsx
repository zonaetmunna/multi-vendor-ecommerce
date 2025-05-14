import Link from "next/link"
import { Search, ShoppingCart, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ModeToggle } from "@/components/mode-toggle"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold">MarketHub</span>
          </Link>
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
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search products..." className="w-[200px] lg:w-[300px] pl-8" />
          </div>
          <Link href="/cart">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
          <ModeToggle />
          <div className="flex items-center gap-2">
            <Link href="/auth/login">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button size="sm">Register</Button>
            </Link>
          </div>
        </div>
        <div className="flex md:hidden items-center gap-2">
          <Link href="/cart">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
          <Link href="/auth/login">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
