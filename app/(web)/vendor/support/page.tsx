import type { Metadata } from "next"
import { LandingNavbar } from "@/components/landing/landing-navbar"
import { Footer } from "@/components/landing/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageSquare, Phone, FileText, BookOpen, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Vendor Support | MultiVend",
  description: "Get support for your vendor account on the MultiVend platform",
}

export default function VendorSupportPage() {
  return (
    <>
      <LandingNavbar />
      <main className="container mx-auto py-12 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Vendor Support</h1>
          <p className="text-muted-foreground mb-8">
            We're here to help you succeed on MultiVend. Find the support you need to grow your business.
          </p>

          <Tabs defaultValue="contact" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="contact">Contact Us</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
              <TabsTrigger value="faq">Quick Answers</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
            </TabsList>

            <TabsContent value="contact" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Vendor Support</CardTitle>
                  <CardDescription>
                    Our dedicated vendor support team is ready to assist you with any questions or issues.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <Mail className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <h3 className="font-medium">Email Support</h3>
                          <p className="text-muted-foreground">vendors@multivend.com</p>
                          <p className="text-sm text-muted-foreground">Response time: 24 hours</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <MessageSquare className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <h3 className="font-medium">Live Chat</h3>
                          <p className="text-muted-foreground">Available 9am-5pm EST, Monday-Friday</p>
                          <Button variant="outline" size="sm" className="mt-2">
                            Start Chat
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <Phone className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <h3 className="font-medium">Phone Support</h3>
                          <p className="text-muted-foreground">+1 (555) 234-5678</p>
                          <p className="text-sm text-muted-foreground">Available for Premium and Enterprise vendors</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <form className="space-y-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Name
                          </label>
                          <Input id="name" placeholder="Your name" required />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <Input id="email" type="email" placeholder="your.email@example.com" required />
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
                          <Textarea
                            id="message"
                            placeholder="Please provide as much detail as possible..."
                            rows={4}
                            required
                          />
                        </div>

                        <Button type="submit" className="w-full">
                          Send Message
                        </Button>
                      </form>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="resources" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Vendor Resources</CardTitle>
                  <CardDescription>
                    Access guides, tutorials, and tools to help you succeed on MultiVend.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="border rounded-lg p-6">
                      <FileText className="h-8 w-8 text-primary mb-4" />
                      <h3 className="text-lg font-medium mb-2">Seller Handbook</h3>
                      <p className="text-muted-foreground mb-4">
                        Comprehensive guide to selling on MultiVend, from setup to scaling.
                      </p>
                      <Button variant="outline" size="sm">
                        View Handbook
                      </Button>
                    </div>

                    <div className="border rounded-lg p-6">
                      <BookOpen className="h-8 w-8 text-primary mb-4" />
                      <h3 className="text-lg font-medium mb-2">Vendor Academy</h3>
                      <p className="text-muted-foreground mb-4">
                        Free online courses on product photography, pricing, and more.
                      </p>
                      <Button variant="outline" size="sm">
                        Start Learning
                      </Button>
                    </div>

                    <div className="border rounded-lg p-6">
                      <Users className="h-8 w-8 text-primary mb-4" />
                      <h3 className="text-lg font-medium mb-2">Webinars</h3>
                      <p className="text-muted-foreground mb-4">
                        Live and recorded training sessions with e-commerce experts.
                      </p>
                      <Button variant="outline" size="sm">
                        View Schedule
                      </Button>
                    </div>

                    <div className="border rounded-lg p-6">
                      <Mail className="h-8 w-8 text-primary mb-4" />
                      <h3 className="text-lg font-medium mb-2">Newsletter</h3>
                      <p className="text-muted-foreground mb-4">Weekly tips, platform updates, and success stories.</p>
                      <Button variant="outline" size="sm">
                        Subscribe
                      </Button>
                    </div>

                    <div className="border rounded-lg p-6">
                      <FileText className="h-8 w-8 text-primary mb-4" />
                      <h3 className="text-lg font-medium mb-2">Policy Templates</h3>
                      <p className="text-muted-foreground mb-4">Ready-to-use templates for store policies and terms.</p>
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                    </div>

                    <div className="border rounded-lg p-6">
                      <BookOpen className="h-8 w-8 text-primary mb-4" />
                      <h3 className="text-lg font-medium mb-2">Marketing Guide</h3>
                      <p className="text-muted-foreground mb-4">
                        Strategies to promote your products and increase sales.
                      </p>
                      <Button variant="outline" size="sm">
                        Read Guide
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="faq" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Answers</CardTitle>
                  <CardDescription>Find answers to common vendor questions.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[
                      {
                        q: "How do I update my inventory?",
                        a: "Go to your vendor dashboard > Products > Manage Inventory. You can update quantities individually or use the bulk update feature.",
                      },
                      {
                        q: "When will I receive my payments?",
                        a: "Payments are processed every 14 days for all settled transactions. You can view your payment schedule in the Payouts section of your dashboard.",
                      },
                      {
                        q: "How do I offer free shipping?",
                        a: "Go to your vendor dashboard > Settings > Shipping. You can set up free shipping for all products, specific products, or based on order value.",
                      },
                      {
                        q: "Can I download my sales reports?",
                        a: "Yes, go to your vendor dashboard > Analytics > Reports. You can generate and download reports in CSV or PDF format.",
                      },
                      {
                        q: "How do I respond to customer reviews?",
                        a: "Go to your vendor dashboard > Reviews. You can respond to any review by clicking the 'Reply' button below it.",
                      },
                    ].map((item, index) => (
                      <div key={index} className="border rounded-lg p-6">
                        <h3 className="font-medium mb-2">{item.q}</h3>
                        <p className="text-muted-foreground">{item.a}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All FAQs
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="community" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Vendor Community</CardTitle>
                  <CardDescription>Connect with other vendors to share tips, advice, and experiences.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="border rounded-lg p-6">
                      <h3 className="text-lg font-medium mb-2">Vendor Forum</h3>
                      <p className="text-muted-foreground mb-4">
                        Join discussions with other MultiVend sellers. Ask questions, share insights, and learn from
                        experienced vendors.
                      </p>
                      <Button>Join the Forum</Button>
                    </div>

                    <div className="border rounded-lg p-6">
                      <h3 className="text-lg font-medium mb-2">Monthly Meetups</h3>
                      <p className="text-muted-foreground mb-4">
                        Virtual networking events for MultiVend vendors. Connect with peers, share experiences, and
                        build relationships.
                      </p>
                      <Button variant="outline">View Schedule</Button>
                    </div>

                    <div className="border rounded-lg p-6">
                      <h3 className="text-lg font-medium mb-2">Success Stories</h3>
                      <p className="text-muted-foreground mb-4">
                        Read about other vendors who have grown their businesses on MultiVend. Get inspired and learn
                        from their strategies.
                      </p>
                      <Button variant="outline">Read Stories</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </>
  )
}
