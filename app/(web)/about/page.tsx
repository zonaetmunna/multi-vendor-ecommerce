import type { Metadata } from "next"
import { LandingNavbar } from "@/components/landing/landing-navbar"
import { Footer } from "@/components/landing/footer"

export const metadata: Metadata = {
  title: "About Us | MultiVend",
  description: "Learn more about MultiVend - The ultimate multi-vendor marketplace",
}

export default function AboutPage() {
  return (
    <>
      <LandingNavbar />
      <main className="container mx-auto py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About MultiVend</h1>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              MultiVend was founded in 2023 with a simple mission: to create a platform where independent sellers and
              established brands alike could reach customers worldwide without the technical barriers traditionally
              associated with e-commerce.
            </p>
            <p className="text-muted-foreground mb-4">
              What started as a small project has grown into a thriving marketplace with thousands of vendors and
              customers from around the globe. Our platform has facilitated millions of transactions, helping small
              businesses grow and customers find unique products they love.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-4">
              At MultiVend, we believe in empowering entrepreneurs and small businesses by providing them with the tools
              they need to succeed in the digital marketplace. We strive to create a level playing field where quality
              products and excellent customer service are rewarded.
            </p>
            <p className="text-muted-foreground mb-4">
              Our mission is to build the most trusted multi-vendor marketplace where buyers can discover unique
              products from verified sellers, and where sellers can grow their businesses with minimal overhead.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-medium mb-2">Trust & Transparency</h3>
                <p className="text-muted-foreground">
                  We believe in building trust through transparent policies, secure transactions, and honest
                  communication.
                </p>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-medium mb-2">Quality & Excellence</h3>
                <p className="text-muted-foreground">
                  We maintain high standards for the products and vendors on our platform, ensuring a quality experience
                  for all users.
                </p>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-medium mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  We continuously improve our platform with new features and technologies to better serve our community.
                </p>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-medium mb-2">Community</h3>
                <p className="text-muted-foreground">
                  We foster a supportive community of vendors and customers who help each other succeed.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <p className="text-muted-foreground mb-6">
              MultiVend is powered by a diverse team of professionals passionate about e-commerce, technology, and
              customer experience. Our team members bring expertise from various fields including software development,
              design, marketing, and customer support.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { name: "Alex Johnson", role: "CEO & Founder" },
                { name: "Sarah Chen", role: "CTO" },
                { name: "Michael Rodriguez", role: "Head of Operations" },
                { name: "Priya Patel", role: "Head of Vendor Relations" },
                { name: "David Kim", role: "Lead Designer" },
                { name: "Emma Wilson", role: "Customer Success Manager" },
              ].map((member) => (
                <div key={member.name} className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-muted rounded-full mb-4"></div>
                  <h3 className="font-medium">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
