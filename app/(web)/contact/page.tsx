import type { Metadata } from "next"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { LandingNavbar } from "@/components/landing/landing-navbar"
import { Footer } from "@/components/landing/footer"

export const metadata: Metadata = {
  title: "Contact Us | MultiVend",
  description: "Get in touch with the MultiVend team",
}

export default function ContactPage() {
  return (
    <>
      <LandingNavbar />
      <main className="container mx-auto py-12 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Have questions about our platform? Want to become a vendor? Or just want to say hello? We'd love to hear
                from you. Fill out the form and our team will get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Our Office</h3>
                    <p className="text-muted-foreground">123 Commerce Street, Tech City, TC 12345</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email Us</h3>
                    <p className="text-muted-foreground">support@multivend.com</p>
                    <p className="text-muted-foreground">vendors@multivend.com (for vendor inquiries)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Call Us</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-muted-foreground">Monday-Friday, 9am-5pm EST</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">
                      First Name
                    </label>
                    <Input id="first-name" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">
                      Last Name
                    </label>
                    <Input id="last-name" placeholder="Doe" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can we help you?" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Please provide as much detail as possible..." rows={5} required />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  q: "How do I become a vendor?",
                  a: "You can register as a vendor by clicking on 'Become a Vendor' in the footer or visiting the vendor registration page directly.",
                },
                {
                  q: "What are the fees for vendors?",
                  a: "We charge a small commission on each sale. The exact percentage depends on your product category and can be found in our vendor terms.",
                },
                {
                  q: "How long does shipping take?",
                  a: "Shipping times vary by vendor and location. Each product page displays the estimated shipping time for that specific item.",
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept credit/debit cards, PayPal, and various other payment methods depending on your location.",
                },
              ].map((faq, index) => (
                <div key={index} className="border rounded-lg p-6">
                  <h3 className="font-medium mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
