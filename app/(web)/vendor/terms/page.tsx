import type { Metadata } from "next"
import { LandingNavbar } from "@/components/landing/landing-navbar"
import { Footer } from "@/components/landing/footer"

export const metadata: Metadata = {
  title: "Vendor Terms | MultiVend",
  description: "Terms and conditions for vendors on the MultiVend platform",
}

export default function VendorTermsPage() {
  return (
    <>
      <LandingNavbar />
      <main className="container mx-auto py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Vendor Terms & Conditions</h1>
          <p className="text-muted-foreground mb-8">Last updated: May 13, 2025</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground">
                These Vendor Terms & Conditions ("Vendor Terms") govern your participation as a vendor on the MultiVend
                platform. By registering as a vendor or using our platform to sell products, you agree to be bound by
                these Vendor Terms in addition to our general Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Vendor Registration</h2>
              <p className="text-muted-foreground mb-4">To become a vendor on MultiVend, you must:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Complete the vendor registration process.</li>
                <li>Provide accurate and complete information about yourself and your business.</li>
                <li>Be approved by our vendor review team.</li>
                <li>Maintain accurate and up-to-date information throughout your participation on our platform.</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                We reserve the right to reject any vendor application or terminate vendor accounts that violate these
                terms or our policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Vendor Obligations</h2>
              <p className="text-muted-foreground mb-4">As a vendor on MultiVend, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Comply with all applicable laws, regulations, and industry standards.</li>
                <li>
                  Provide accurate, complete, and up-to-date information about your products, including pricing,
                  descriptions, images, and inventory status.
                </li>
                <li>Fulfill orders promptly and professionally.</li>
                <li>Maintain sufficient inventory to fulfill orders.</li>
                <li>Respond to customer inquiries within 24 hours.</li>
                <li>Handle returns, refunds, and customer complaints in accordance with our policies.</li>
                <li>Maintain a professional storefront that adheres to our community guidelines.</li>
                <li>Protect customer data in accordance with applicable privacy laws.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Product Listings</h2>
              <p className="text-muted-foreground mb-4">All product listings must:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Accurately represent the product being sold.</li>
                <li>Include clear, high-quality images that you have the right to use.</li>
                <li>
                  Provide detailed descriptions, including dimensions, materials, and any other relevant specifications.
                </li>
                <li>Clearly state any limitations, exclusions, or conditions (e.g., shipping restrictions).</li>
                <li>Comply with our prohibited items policy.</li>
                <li>Not infringe on any third-party intellectual property rights.</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                We reserve the right to remove any listings that violate these requirements or our policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Fees and Payments</h2>
              <p className="text-muted-foreground mb-4">
                As a vendor on MultiVend, you agree to the following fee structure:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>Commission Fee:</strong> A percentage of each sale, ranging from 5% to 15% depending on your
                  product category and vendor tier.
                </li>
                <li>
                  <strong>Payment Processing Fee:</strong> A fee of 2.9% + $0.30 per transaction to cover payment
                  processing costs.
                </li>
                <li>
                  <strong>Optional Feature Fees:</strong> Additional fees for premium features such as promoted
                  listings, featured vendor status, etc.
                </li>
              </ul>
              <p className="text-muted-foreground mt-4">Payment terms:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  Payments will be processed and disbursed to your designated account every 14 days for all settled
                  transactions.
                </li>
                <li>
                  A transaction is considered settled 7 days after delivery confirmation or 14 days after shipping,
                  whichever comes first.
                </li>
                <li>
                  Minimum payout amount is $50. Balances below this amount will roll over to the next payment period.
                </li>
                <li>All fees and commissions are automatically deducted from your sales before disbursement.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Shipping and Fulfillment</h2>
              <p className="text-muted-foreground mb-4">As a vendor, you are responsible for:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Setting accurate shipping rates and delivery timeframes.</li>
                <li>
                  Processing and shipping orders within your stated handling time (maximum 3 business days unless
                  otherwise specified).
                </li>
                <li>Providing tracking information for all shipments.</li>
                <li>Packaging items securely to prevent damage during transit.</li>
                <li>Resolving any shipping issues or delays promptly.</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Failure to meet these shipping obligations may result in penalties, including account suspension.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Returns and Refunds</h2>
              <p className="text-muted-foreground mb-4">
                All vendors must adhere to our platform's minimum return policy:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  Accept returns within 30 days for items that are defective, damaged, or significantly not as
                  described.
                </li>
                <li>
                  Cover return shipping costs for returns due to vendor error (wrong item, defective product, etc.).
                </li>
                <li>Process refunds within 5 business days of receiving returned items.</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                You may offer more generous return policies at your discretion, which should be clearly stated in your
                store policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Vendor Ratings and Performance</h2>
              <p className="text-muted-foreground mb-4">Your performance as a vendor will be measured by:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Customer ratings and reviews.</li>
                <li>Order fulfillment rate and speed.</li>
                <li>Return rate.</li>
                <li>Customer service responsiveness.</li>
                <li>Policy compliance.</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Vendors with consistently high ratings may qualify for reduced commission rates and other benefits.
                Vendors with poor performance metrics may be subject to review, additional fees, or account suspension.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Intellectual Property</h2>
              <p className="text-muted-foreground mb-4">By listing products on MultiVend:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  You warrant that you have the right to sell the products and use all content (images, descriptions,
                  etc.) in your listings.
                </li>
                <li>
                  You grant MultiVend a non-exclusive, worldwide, royalty-free license to use your store content and
                  product listings for marketing and operational purposes.
                </li>
                <li>You agree not to infringe on any third-party intellectual property rights.</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                We take intellectual property rights seriously and will respond to legitimate infringement claims by
                removing listings and potentially suspending vendor accounts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Account Suspension and Termination</h2>
              <p className="text-muted-foreground mb-4">
                MultiVend reserves the right to suspend or terminate your vendor account if:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>You violate these Vendor Terms or our general Terms of Service.</li>
                <li>You consistently receive poor customer ratings or have a high rate of returns/complaints.</li>
                <li>You engage in fraudulent or deceptive practices.</li>
                <li>You fail to maintain accurate inventory or repeatedly cancel orders due to stock issues.</li>
                <li>You fail to fulfill orders within the stated timeframes.</li>
                <li>You violate any applicable laws or regulations.</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                If your account is terminated, any pending payments will be held for 90 days to cover potential customer
                claims or chargebacks.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Changes to Vendor Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these Vendor Terms at any time. We will provide notice of significant
                changes via email and/or through our platform. Your continued use of our platform as a vendor after such
                modifications constitutes your acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Vendor Terms, please contact our Vendor Support team at
                vendors@multivend.com.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
