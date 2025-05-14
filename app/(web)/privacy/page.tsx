import type { Metadata } from "next"
import { LandingNavbar } from "@/components/landing/landing-navbar"
import { Footer } from "@/components/landing/footer"

export const metadata: Metadata = {
  title: "Privacy Policy | MultiVend",
  description: "Privacy policy for the MultiVend platform",
}

export default function PrivacyPage() {
  return (
    <>
      <LandingNavbar />
      <main className="container mx-auto py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: May 13, 2025</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-4">
                At MultiVend, we respect your privacy and are committed to protecting your personal data. This Privacy
                Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
              </p>
              <p className="text-muted-foreground">
                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy,
                please do not access the platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We collect several types of information from and about users of our platform, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>Personal Data:</strong> This includes information by which you may be personally identified,
                  such as name, email address, postal address, phone number, payment information, and any other
                  identifier by which you may be contacted online or offline.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you use our platform, including your browsing
                  actions, search queries, and viewing patterns.
                </li>
                <li>
                  <strong>Device Data:</strong> Information about your device, internet connection, IP address,
                  operating system, and browser type.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. How We Collect Information</h2>
              <p className="text-muted-foreground mb-4">We collect information:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  Directly from you when you register on our platform, place an order, fill out a form, or correspond
                  with us.
                </li>
                <li>
                  Automatically as you navigate through the platform, using cookies, web beacons, and other tracking
                  technologies.
                </li>
                <li>From third parties, such as business partners and service providers.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We may use the information we collect about you for various purposes, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>To provide, maintain, and improve our platform.</li>
                <li>To process transactions and send related information, including confirmations and invoices.</li>
                <li>To send administrative information, such as updates to our terms, conditions, and policies.</li>
                <li>
                  To personalize your experience and deliver content and product offerings relevant to your interests.
                </li>
                <li>To respond to your inquiries, comments, or questions.</li>
                <li>To provide customer support.</li>
                <li>To send marketing and promotional communications (with your consent where required by law).</li>
                <li>To protect our platform, users, and the public.</li>
                <li>To comply with legal obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Disclosure of Your Information</h2>
              <p className="text-muted-foreground mb-4">We may disclose your personal information:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>To our subsidiaries and affiliates.</li>
                <li>To vendors, service providers, and other third parties we use to support our business.</li>
                <li>
                  To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization,
                  dissolution, or other sale or transfer of some or all of our assets.
                </li>
                <li>To fulfill the purpose for which you provide it.</li>
                <li>For any other purpose disclosed by us when you provide the information.</li>
                <li>With your consent.</li>
                <li>
                  To comply with any court order, law, or legal process, including to respond to any government or
                  regulatory request.
                </li>
                <li>To enforce our Terms of Service and other agreements.</li>
                <li>
                  If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of
                  MultiVend, our customers, or others.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We have implemented measures designed to secure your personal information from accidental loss and from
                unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on
                secure servers behind firewalls.
              </p>
              <p className="text-muted-foreground">
                The safety and security of your information also depends on you. Where we have given you (or where you
                have chosen) a password for access to certain parts of our platform, you are responsible for keeping
                this password confidential.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                Depending on your location, you may have certain rights regarding your personal information, such as:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>The right to access your personal information.</li>
                <li>The right to rectify inaccurate personal information.</li>
                <li>The right to request the deletion of your personal information.</li>
                <li>The right to restrict the processing of your personal information.</li>
                <li>The right to data portability.</li>
                <li>The right to object to the processing of your personal information.</li>
                <li>The right to withdraw consent at any time, where processing is based on your consent.</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                To exercise these rights, please contact us using the information provided in the "Contact Us" section
                below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Children's Privacy</h2>
              <p className="text-muted-foreground">
                Our platform is not intended for children under 16 years of age. We do not knowingly collect personal
                information from children under 16. If you are a parent or guardian and you believe your child has
                provided us with personal information, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Changes to Our Privacy Policy</h2>
              <p className="text-muted-foreground">
                We may update our Privacy Policy from time to time. If we make material changes to how we treat our
                users' personal information, we will notify you through a notice on the platform. The date the Privacy
                Policy was last revised is identified at the top of the page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at privacy@multivend.com.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
