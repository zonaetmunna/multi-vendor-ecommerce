import type { Metadata } from "next"
import { LandingNavbar } from "@/components/landing/landing-navbar"
import { Footer } from "@/components/landing/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Vendor FAQ | MultiVend",
  description: "Frequently asked questions for vendors on the MultiVend platform",
}

export default function VendorFaqPage() {
  return (
    <>
      <LandingNavbar />
      <main className="container mx-auto py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Vendor FAQ</h1>
          <p className="text-muted-foreground mb-8">
            Find answers to the most common questions about selling on MultiVend.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I become a vendor on MultiVend?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground mb-2">To become a vendor on MultiVend, follow these steps:</p>
                    <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                      <li>Click on "Become a Vendor" in the footer or navigate to the vendor registration page.</li>
                      <li>Fill out the application form with your business details.</li>
                      <li>Submit any required documentation (business license, ID, etc.).</li>
                      <li>Wait for our team to review your application (typically 1-3 business days).</li>
                      <li>Once approved, set up your store profile and add products.</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>What are the requirements to become a vendor?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground mb-2">To qualify as a vendor, you need:</p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>A valid business registration or tax ID (in some countries).</li>
                      <li>A valid email address and phone number.</li>
                      <li>A bank account or payment method that can receive funds.</li>
                      <li>High-quality products that comply with our policies.</li>
                      <li>The ability to ship products to customers in a timely manner.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Is there a fee to become a vendor?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      There is no upfront fee to register as a vendor on MultiVend. We operate on a commission-based
                      model, where we take a percentage of each sale. Commission rates range from 5% to 15% depending on
                      your product category and vendor tier. Additionally, there is a payment processing fee of 2.9% +
                      $0.30 per transaction.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>How long does the approval process take?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      The vendor approval process typically takes 1-3 business days. However, it may take longer if
                      additional information or documentation is required. You will receive email notifications about
                      the status of your application.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Products & Listings</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-5">
                  <AccordionTrigger>What types of products can I sell on MultiVend?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground mb-2">
                      MultiVend supports a wide range of product categories, including:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>Clothing and accessories</li>
                      <li>Home and garden</li>
                      <li>Electronics</li>
                      <li>Beauty and personal care</li>
                      <li>Handmade and craft items</li>
                      <li>Food and beverages (subject to additional requirements)</li>
                      <li>Digital products</li>
                    </ul>
                    <p className="text-muted-foreground mt-2">
                      Some products are prohibited, including illegal items, hazardous materials, counterfeit goods, and
                      adult content. Please review our prohibited items policy for a complete list.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>How do I add products to my store?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground mb-2">To add products to your store:</p>
                    <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                      <li>Log in to your vendor dashboard.</li>
                      <li>Navigate to "Products" &gt; "Add New Product".</li>
                      <li>Fill out the product details, including title, description, price, and inventory.</li>
                      <li>Upload high-quality product images.</li>
                      <li>Set shipping options and any variants (size, color, etc.).</li>
                      <li>Save and publish your product.</li>
                    </ol>
                    <p className="text-muted-foreground mt-2">
                      You can also use our bulk upload feature to add multiple products at once using a CSV file.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger>How many products can I list?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      There is no strict limit on the number of products you can list. However, new vendors typically
                      start with a limit of 100 products, which increases as you establish a positive selling history.
                      If you need to list more products initially, please contact vendor support.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger>What are product variants and how do I use them?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground mb-2">
                      Product variants allow you to offer different versions of the same product, such as different
                      sizes, colors, or materials. To add variants:
                    </p>
                    <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                      <li>When creating or editing a product, scroll to the "Variants" section.</li>
                      <li>Select the variant types you want to use (e.g., Size, Color).</li>
                      <li>Add the specific options for each variant (e.g., Small, Medium, Large for Size).</li>
                      <li>Set prices, SKUs, and inventory levels for each combination of variants.</li>
                      <li>You can also upload different images for each variant.</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Orders & Fulfillment</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-9">
                  <AccordionTrigger>How am I notified of new orders?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      You will receive email notifications for new orders. You can also see all orders in your vendor
                      dashboard under the "Orders" section. We recommend checking your dashboard regularly and setting
                      up email forwarding to ensure you don't miss any orders.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10">
                  <AccordionTrigger>How long do I have to fulfill an order?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      You are expected to process and ship orders within your stated handling time, with a maximum of 3
                      business days unless otherwise specified in your store policies. Consistently late shipments may
                      affect your vendor rating and account status. If you need more time for custom or made-to-order
                      items, make sure to clearly state this in your product descriptions.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-11">
                  <AccordionTrigger>How do I mark an order as shipped?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground mb-2">To mark an order as shipped:</p>
                    <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                      <li>Go to your vendor dashboard and navigate to "Orders".</li>
                      <li>Find the order you want to update and click on it.</li>
                      <li>Click the "Mark as Shipped" button.</li>
                      <li>Enter the tracking number and select the shipping carrier.</li>
                      <li>Save the changes.</li>
                    </ol>
                    <p className="text-muted-foreground mt-2">
                      The customer will automatically receive an email notification with the tracking information.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-12">
                  <AccordionTrigger>Can I cancel an order?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      You can cancel an order if it hasn't been shipped yet. To cancel an order, go to the order details
                      page and click "Cancel Order". You'll need to provide a reason for the cancellation. Please note
                      that frequent order cancellations may negatively impact your vendor rating. If a customer wants to
                      cancel an order, you should process this request promptly if the order hasn't been shipped.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Payments & Fees</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-13">
                  <AccordionTrigger>When and how do I get paid?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Payments are processed and disbursed to your designated account every 14 days for all settled
                      transactions. A transaction is considered settled 7 days after delivery confirmation or 14 days
                      after shipping, whichever comes first. The minimum payout amount is $50. Balances below this
                      amount will roll over to the next payment period. You can view your payment history and upcoming
                      payments in the "Payouts" section of your vendor dashboard.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-14">
                  <AccordionTrigger>What fees does MultiVend charge?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground mb-2">MultiVend charges the following fees:</p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>
                        <strong>Commission Fee:</strong> 5-15% of each sale, depending on your product category and
                        vendor tier.
                      </li>
                      <li>
                        <strong>Payment Processing Fee:</strong> 2.9% + $0.30 per transaction.
                      </li>
                      <li>
                        <strong>Optional Feature Fees:</strong> Additional fees for premium features such as promoted
                        listings, featured vendor status, etc.
                      </li>
                    </ul>
                    <p className="text-muted-foreground mt-2">
                      All fees are automatically deducted from your sales before disbursement. You can view a detailed
                      breakdown of fees in your vendor dashboard.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-15">
                  <AccordionTrigger>How do I set up my payment account?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground mb-2">To set up your payment account:</p>
                    <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                      <li>Go to your vendor dashboard and navigate to "Settings" > "Payment".</li>
                      <li>Choose your preferred payment method (bank transfer, PayPal, etc.).</li>
                      <li>Enter the required information for your chosen payment method.</li>
                      <li>Complete any verification steps if required.</li>
                      <li>Save your payment settings.</li>
                    </ol>
                    <p className="text-muted-foreground mt-2">
                      Make sure to double-check all information to avoid payment delays.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-16">
                  <AccordionTrigger>What happens if a customer requests a refund?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      When a customer requests a refund, you'll receive a notification. You can either approve the
                      refund request immediately or communicate with the customer to resolve any issues. If the refund
                      is for a valid reason (item damaged, not as described, etc.), you should approve it promptly. The
                      refund amount, including the original shipping cost for returns due to vendor error, will be
                      deducted from your next payout. Excessive refunds may affect your vendor rating.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Store Management</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-17">
                  <AccordionTrigger>How do I customize my storefront?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground mb-2">To customize your storefront:</p>
                    <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                      <li>Go to your vendor dashboard and navigate to "Storefront" > "Customize".</li>
                      <li>Upload your store logo and banner image.</li>
                      <li>Write your store description and policies.</li>
                      <li>Customize your store colors and layout (if available for your vendor tier).</li>
                      <li>Add featured products to showcase on your storefront.</li>
                      <li>Preview your changes and save when satisfied.</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-18">
                  <AccordionTrigger>How do I create discount coupons?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground mb-2">To create discount coupons:</p>
                    <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                      <li>Go to your vendor dashboard and navigate to "Marketing" > "Coupons".</li>
                      <li>Click "Create New Coupon".</li>
                      <li>Set the coupon code, discount type (percentage or fixed amount), and value.</li>
                      <li>Set usage limits (per customer, total uses) and expiration date.</li>
                      <li>Specify which products the coupon applies to (all products or specific ones).</li>
                      <li>Set minimum purchase requirements if desired.</li>
                      <li>Save and activate your coupon.</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-19">
                  <AccordionTrigger>How do I communicate with customers?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      You can communicate with customers through our built-in messaging system. When a customer sends
                      you a message, you'll receive a notification. To respond, go to your vendor dashboard and navigate
                      to "Messages". You can also initiate conversations with customers who have purchased from you. We
                      recommend responding to all customer inquiries within 24 hours to maintain good customer service
                      standards.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-20">
                  <AccordionTrigger>How do I view my store analytics?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground mb-2">To view your store analytics:</p>
                    <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                      <li>Go to your vendor dashboard and navigate to "Analytics".</li>
                      <li>Here you can view various metrics including:</li>
                      <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                        <li>Sales performance over time</li>
                        <li>Top-selling products</li>
                        <li>Customer demographics</li>
                        <li>Traffic sources</li>
                        <li>Conversion rates</li>
                        <li>Average order value</li>
                      </ul>
                      <li>You can adjust the date range to view data for specific periods.</li>
                      <li>Export reports in CSV format for further analysis.</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Support & Resources</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-21">
                  <AccordionTrigger>How do I contact vendor support?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground mb-2">
                      You can contact vendor support through several channels:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>
                        <strong>Email:</strong> vendors@multivend.com
                      </li>
                      <li>
                        <strong>Support Ticket:</strong> Submit a ticket through your vendor dashboard under "Help" >
                        "Support".
                      </li>
                      <li>
                        <strong>Live Chat:</strong> Available during business hours (9am-5pm EST, Monday-Friday).
                      </li>
                      <li>
                        <strong>Phone Support:</strong> Available for Premium and Enterprise vendor tiers.
                      </li>
                    </ul>
                    <p className="text-muted-foreground mt-2">
                      Our support team typically responds within 24 hours on business days.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-22">
                  <AccordionTrigger>Are there any resources to help me succeed as a vendor?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground mb-2">Yes, we offer several resources to help you succeed:</p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>
                        <strong>Vendor Academy:</strong> Free online courses on product photography, pricing strategies,
                        customer service, and more.
                      </li>
                      <li>
                        <strong>Knowledge Base:</strong> Comprehensive guides and tutorials on using all platform
                        features.
                      </li>
                      <li>
                        <strong>Vendor Community:</strong> Forum where you can connect with other vendors to share tips
                        and advice.
                      </li>
                      <li>
                        <strong>Monthly Webinars:</strong> Live training sessions on various aspects of running your
                        online store.
                      </li>
                      <li>
                        <strong>Blog:</strong> Regular articles with e-commerce tips, platform updates, and success
                        stories.
                      </li>
                    </ul>
                    <p className="text-muted-foreground mt-2">
                      You can access all these resources from your vendor dashboard under "Resources".
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
