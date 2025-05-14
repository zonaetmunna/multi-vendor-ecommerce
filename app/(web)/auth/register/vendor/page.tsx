"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LandingNavbar } from "@/components/landing/landing-navbar"
import { Footer } from "@/components/landing/footer"
import { Separator } from "@/components/ui/separator"
import { Upload, X } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/components/ui/use-toast"

export default function VendorRegistrationPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [activeStep, setActiveStep] = useState(1)
  const [documents, setDocuments] = useState<{ id: number; name: string; file: File | null }[]>([
    { id: 1, name: "Business Registration", file: null },
    { id: 2, name: "Tax ID Certificate", file: null },
    { id: 3, name: "Identity Verification", file: null },
  ])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleDocumentChange = (id: number, file: File | null) => {
    setDocuments(documents.map((doc) => (doc.id === id ? { ...doc, file } : doc)))
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Application Submitted",
        description: "Your vendor application has been submitted for review. We'll notify you once it's approved.",
      })
      router.push("/auth/register/vendor/success")
    }, 2000)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <LandingNavbar />
      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Become a Vendor</h1>
            <p className="text-muted-foreground mt-2">
              Join our marketplace and start selling your products to thousands of customers
            </p>
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between relative">
              <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-muted -z-10"></div>
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex flex-col items-center gap-2">
                  <div
                    className={`h-10 w-10 rounded-full flex items-center justify-center ${
                      step === activeStep
                        ? "bg-primary text-primary-foreground"
                        : step < activeStep
                          ? "bg-green-500 text-white"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step < activeStep ? "✓" : step}
                  </div>
                  <span className="text-sm font-medium">
                    {step === 1 ? "Business Info" : step === 2 ? "Store Details" : "Verification"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {activeStep === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Business Information</CardTitle>
                <CardDescription>Tell us about your business</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="business-name">Business Name</Label>
                    <Input id="business-name" placeholder="Your business name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="business-type">Business Type</Label>
                    <Select>
                      <SelectTrigger id="business-type">
                        <SelectValue placeholder="Select business type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sole-proprietor">Sole Proprietorship</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="llc">Limited Liability Company (LLC)</SelectItem>
                        <SelectItem value="corporation">Corporation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="business-address">Business Address</Label>
                  <Textarea id="business-address" placeholder="Full business address" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="tax-id">Tax ID / VAT Number</Label>
                    <Input id="tax-id" placeholder="Tax identification number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="business-phone">Business Phone</Label>
                    <Input id="business-phone" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="business-email">Business Email</Label>
                  <Input id="business-email" type="email" placeholder="business@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="business-website">Business Website (Optional)</Label>
                  <Input id="business-website" placeholder="https://yourbusiness.com" />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={() => setActiveStep(2)}>Continue</Button>
              </CardFooter>
            </Card>
          )}

          {activeStep === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Store Details</CardTitle>
                <CardDescription>Set up your store on our marketplace</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="store-name">Store Name</Label>
                  <Input id="store-name" placeholder="Your store name" />
                  <p className="text-xs text-muted-foreground">
                    This is how customers will see your store on our marketplace
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="store-description">Store Description</Label>
                  <Textarea
                    id="store-description"
                    placeholder="Tell customers about your store and what you sell"
                    className="min-h-[120px]"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Store Logo</Label>
                    <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center text-muted-foreground">
                      <Upload className="h-8 w-8 mb-2" />
                      <p className="text-sm">Drag & drop or click to upload</p>
                      <p className="text-xs mt-1">PNG, JPG or SVG (max. 2MB)</p>
                      <Button variant="outline" size="sm" className="mt-4">
                        Select File
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Store Banner</Label>
                    <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center text-muted-foreground">
                      <Upload className="h-8 w-8 mb-2" />
                      <p className="text-sm">Drag & drop or click to upload</p>
                      <p className="text-xs mt-1">Recommended size: 1200x300px</p>
                      <Button variant="outline" size="sm" className="mt-4">
                        Select File
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="store-categories">Product Categories</Label>
                  <Select>
                    <SelectTrigger id="store-categories">
                      <SelectValue placeholder="Select primary category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="fashion">Fashion & Apparel</SelectItem>
                      <SelectItem value="home">Home & Kitchen</SelectItem>
                      <SelectItem value="beauty">Beauty & Personal Care</SelectItem>
                      <SelectItem value="sports">Sports & Outdoors</SelectItem>
                      <SelectItem value="toys">Toys & Games</SelectItem>
                      <SelectItem value="food">Food & Grocery</SelectItem>
                      <SelectItem value="health">Health & Wellness</SelectItem>
                      <SelectItem value="art">Art & Crafts</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">
                    You can add more categories later from your vendor dashboard
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setActiveStep(1)}>
                  Back
                </Button>
                <Button onClick={() => setActiveStep(3)}>Continue</Button>
              </CardFooter>
            </Card>
          )}

          {activeStep === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>Verification Documents</CardTitle>
                <CardDescription>
                  Please upload the required documents to verify your business. All documents will be reviewed by our
                  team.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {documents.map((doc) => (
                  <div key={doc.id} className="space-y-2">
                    <Label>{doc.name}</Label>
                    {doc.file ? (
                      <div className="flex items-center justify-between p-3 border rounded-md">
                        <div className="flex items-center gap-2">
                          <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center">
                            <svg
                              className="h-6 w-6 text-muted-foreground"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm font-medium">{doc.file.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {(doc.file.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon" onClick={() => handleDocumentChange(doc.id, null)}>
                          <X className="h-4 w-4" />
                          <span className="sr-only">Remove file</span>
                        </Button>
                      </div>
                    ) : (
                      <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center text-muted-foreground">
                        <Upload className="h-8 w-8 mb-2" />
                        <p className="text-sm">Drag & drop or click to upload</p>
                        <p className="text-xs mt-1">PDF, PNG or JPG (max. 5MB)</p>
                        <Button variant="outline" size="sm" className="mt-4">
                          Select File
                        </Button>
                      </div>
                    )}
                  </div>
                ))}

                <Separator />

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Payment Information</Label>
                    <p className="text-sm text-muted-foreground">
                      Select how you would like to receive payments for your sales
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="payment-method">Payment Method</Label>
                    <Select defaultValue="bank">
                      <SelectTrigger id="payment-method">
                        <SelectValue placeholder="Select payment method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bank">Bank Transfer</SelectItem>
                        <SelectItem value="paypal">PayPal</SelectItem>
                        <SelectItem value="stripe">Stripe Connect</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="account-name">Account Holder Name</Label>
                    <Input id="account-name" placeholder="Full name on the account" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="account-number">Account Number</Label>
                      <Input id="account-number" placeholder="Account number" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="routing-number">Routing Number</Label>
                      <Input id="routing-number" placeholder="Routing number" />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the vendor terms and conditions
                    </label>
                    <p className="text-sm text-muted-foreground">
                      By submitting this application, I confirm that all information provided is accurate and complete.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setActiveStep(2)}>
                  Back
                </Button>
                <Button onClick={handleSubmit} disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}
