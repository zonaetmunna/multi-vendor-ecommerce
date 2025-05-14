import type { Metadata } from "next"
import { LandingNavbar } from "@/components/landing/landing-navbar"
import { Footer } from "@/components/landing/footer"

export const metadata: Metadata = {
  title: "Refund Policy | MultiVend",
  description: "Refund policy for the MultiVend platform",
}

export default function RefundPage() {
  return (
    <>
      <LandingNavbar />
      <main className="container mx-auto py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: May 13, 2025</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground">
                At MultiVend, we want you to be completely satisfied with your purchases. This Refund Policy outlines
                the terms and conditions for returns, refunds, and exchanges on our platform. Please note that as a
                multi-vendor marketplace, specific refund policies may vary by vendor, but all vendors must comply with
                our minimum standards outlined below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. General Refund Policy</h2>
              <p className="text-muted-foreground mb-4">
                You may request a refund within 30 days of receiving your order if:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>The item is defective or damaged upon arrival.</li>
                <li>The item significantly differs from its description on our platform.</li>
                <li>The wrong item was delivered.</li>
                <li>The item arrives after the guaranteed delivery date (if applicable).</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Some vendors may offer more generous refund terms, which will be clearly displayed on their product
                pages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. How to Request a Refund</h2>
              <p className="text-muted-foreground mb-4">To request a refund:</p>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>Log in to your MultiVend account.</li>
                <li>Go to "My Orders" in your dashboard.</li>
                <li>Find the order containing the item you wish to return.</li>
                <li>Click on "Request Return/Refund".</li>
                <li>Select the reason for your return and provide any necessary details.</li>
                <li>Submit your request.</li>
              </ol>
              <p className="text-muted-foreground mt-4">
                You will receive instructions on how to return the item (if required) after your request is reviewed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Return Shipping</h2>
              <p className="text-muted-foreground mb-4">Return shipping policies vary by vendor and situation:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  If the item is defective, damaged, or not as described, the vendor will cover return shipping costs.
                </li>
                <li>
                  If you're returning an item due to a change of mind or other non-vendor error, you may be responsible
                  for return shipping costs.
                </li>
                <li>
                  Some vendors offer free returns regardless of the reason - check the vendor's specific policy on their
                  product pages.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Refund Processing</h2>
              <p className="text-muted-foreground mb-4">
                Once your return is received and inspected, we will notify you of the approval or rejection of your
                refund.
              </p>
              <p className="text-muted-foreground mb-4">
                If approved, your refund will be processed, and a credit will automatically be applied to your original
                method of payment within 5-10 business days, depending on your payment provider's policies.
              </p>
              <p className="text-muted-foreground">
                In some cases, we may offer store credit instead of a refund to your original payment method.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Non-Refundable Items</h2>
              <p className="text-muted-foreground mb-4">The following items are generally non-refundable:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Digital products and downloadable items.</li>
                <li>Personalized or custom-made items (unless defective).</li>
                <li>Perishable goods such as food, flowers, or plants.</li>
                <li>Items marked as "Final Sale" or "Non-Returnable".</li>
                <li>Items that have been used, worn, or altered beyond inspection.</li>
                <li>Gift cards.</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Specific exceptions may apply - please check the product description for details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Late or Missing Refunds</h2>
              <p className="text-muted-foreground mb-4">If you haven't received a refund yet:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Check your bank account again - refunds can take 5-10 business days to process.</li>
                <li>
                  Contact your credit card company or bank, as it may take some time for the refund to be officially
                  posted.
                </li>
                <li>
                  If you've done the above and still haven't received your refund, contact our customer support team.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Exchanges</h2>
              <p className="text-muted-foreground">
                We do not process direct exchanges. If you wish to exchange an item, please return the original item for
                a refund and place a new order for the desired item.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Damaged Items in Transit</h2>
              <p className="text-muted-foreground">
                If your item arrives damaged, please take photos of the damaged item and packaging and contact customer
                support within 48 hours of delivery. We will work with you to resolve the issue promptly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Disputes and Resolutions</h2>
              <p className="text-muted-foreground">
                If you have a dispute regarding a refund, please contact our customer support team. We aim to resolve
                all disputes fairly and promptly. In cases where an agreement cannot be reached, we offer a dispute
                resolution process through our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about our Refund Policy, please contact us at refunds@multivend.com or through
                our customer support portal.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
