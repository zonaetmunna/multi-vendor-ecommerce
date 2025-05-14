import { ProductGrid } from "@/components/products/product-grid"
import { ProductFilters } from "@/components/products/product-filters"
import { SearchFilters } from "@/components/products/search-filters"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { LandingNavbar } from "@/components/landing/landing-navbar"
import { Footer } from "@/components/landing/footer"

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <LandingNavbar />
      <div className="container mx-auto px-4 py-8 flex-1">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products", active: true },
          ]}
        />
        <div className="flex flex-col md:flex-row gap-6 mt-6">
          <div className="w-full md:w-64 lg:w-72 shrink-0">
            <ProductFilters />
          </div>
          <div className="flex-1">
            <SearchFilters />
            <ProductGrid />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
