import type { Metadata } from "next"
import { LandingNavbar } from "@/components/landing/landing-navbar"
import { Footer } from "@/components/landing/footer"

export const metadata: Metadata = {
  title: "Terms of Service | MultiVend",
  description: "Terms and conditions for using the MultiVend platform",
}

export default function TermsPage() {
  return (
    <>
      <LandingNavbar />
      <main className="container mx-auto py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: May 13, 2025</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-4">
                Welcome to MultiVend. These Terms of Service ("Terms") govern your use of the MultiVend platform,
                including our website, services, and applications (collectively, the "Platform"). By accessing or using
                our Platform, you agree to be bound by these Terms.
              </p>
              <p className="text-muted-foreground">
                Please read these Terms carefully. If you do not agree with these Terms, you may not access or use our
                Platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Definitions</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>"MultiVend," "we," "us," or "our" refers to the company operating the Platform.</li>
                <li>"User," "you," or "your" refers to any individual or entity using our Platform.</li>
                <li>"Buyer" refers to a User who purchases products through our Platform.</li>
                <li>"Vendor" refers to a User who sells products through our Platform.</li>
                <li>
                  "Content" refers to all information, text, images, data, links, software, or other material that is
                  uploaded, posted, or otherwise transmitted through our Platform.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Account Registration</h2>
              <p className="text-muted-foreground mb-4">
                To access certain features of our Platform, you may need to register for an account. When you register,
                you agree to provide accurate, current, and complete information about yourself and to update such
                information as necessary.
              </p>
              <p className="text-muted-foreground mb-4">
                You are responsible for maintaining the confidentiality of your account credentials and for all
                activities that occur under your account. You agree to notify us immediately of any unauthorized use of
                your account.
              </p>
              <p className="text-muted-foreground">
                We reserve the right to suspend or terminate your account if any information provided during the
                registration process or thereafter proves to be inaccurate, false, or misleading.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. User Conduct</h2>
              <p className="text-muted-foreground mb-4">You agree not to use our Platform to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Violate any applicable law, regulation, or third-party rights.</li>
                <li>
                  Upload, post, or transmit any Content that is unlawful, harmful, threatening, abusive, harassing,
                  defamatory, vulgar, obscene, or otherwise objectionable.
                </li>
                <li>
                  Impersonate any person or entity or falsely state or otherwise misrepresent your affiliation with a
                  person or entity.
                </li>
                <li>
                  Engage in any activity that interferes with or disrupts the Platform or the servers and networks
                  connected to the Platform.
                </li>
                <li>
                  Attempt to gain unauthorized access to any portion of the Platform or any other accounts, computer
                  systems, or networks connected to the Platform.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Vendor Terms</h2>
              <p className="text-muted-foreground mb-4">If you register as a Vendor, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  Provide accurate and complete information about your products, including pricing, descriptions, and
                  images.
                </li>
                <li>Fulfill orders promptly and professionally.</li>
                <li>
                  Comply with all applicable laws and regulations, including those related to consumer protection, data
                  privacy, and intellectual property.
                </li>
                <li>Pay all applicable fees and commissions as outlined in our Vendor Agreement.</li>
                <li>Maintain accurate inventory information and promptly update product availability.</li>
              </ul>
              <p className="text-muted-foreground">
                Additional terms applicable to Vendors can be found in our Vendor Agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Buyer Terms</h2>
              <p className="text-muted-foreground mb-4">If you use our Platform as a Buyer, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide accurate and complete information when making purchases.</li>
                <li>Pay all applicable fees, taxes, and shipping costs associated with your purchases.</li>
                <li>Comply with all terms and conditions of sale established by Vendors.</li>
                <li>Use the Platform for lawful purposes only.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
              <p className="text-muted-foreground mb-4">
                The Platform and its original content, features, and functionality are owned by MultiVend and are
                protected by international copyright, trademark, patent, trade secret, and other intellectual property
                or proprietary rights laws.
              </p>
              <p className="text-muted-foreground">
                You may not copy, modify, create derivative works of, publicly display, publicly perform, republish,
                download, store, or transmit any of the material on our Platform, except as incidental to normal web
                browsing or as expressly permitted in these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                In no event shall MultiVend, its directors, employees, partners, agents, suppliers, or affiliates be
                liable for any indirect, incidental, special, consequential, or punitive damages, including without
                limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Your access to or use of or inability to access or use the Platform.</li>
                <li>Any conduct or content of any third party on the Platform.</li>
                <li>Any content obtained from the Platform.</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will
                provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material
                change will be determined at our sole discretion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms, please contact us at legal@multivend.com.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
