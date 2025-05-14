import { FeaturedProducts } from "@/components/landing/featured-products"
import { FeaturedVendors } from "@/components/landing/featured-vendors"
import { Footer } from "@/components/landing/footer"
import { HeroSection } from "@/components/landing/hero-section"
import { HowItWorks } from "@/components/landing/how-it-works"
import { LandingNavbar } from "@/components/landing/landing-navbar"
import { Testimonials } from "@/components/landing/testimonials"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <LandingNavbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturedProducts />
        <FeaturedVendors />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
