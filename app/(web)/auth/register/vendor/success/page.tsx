import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { LandingNavbar } from "@/components/landing/landing-navbar"
import { Footer } from "@/components/landing/footer"
import { CheckCircle } from "lucide-react"

export default function VendorRegistrationSuccessPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <LandingNavbar />
      <div className="flex-1 container mx-auto px-4 py-16 flex items-center justify-center">
        <Card className="max-w-md w-full">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
            </div>
            <CardTitle className="text-2xl">Application Submitted!</CardTitle>
            <CardDescription>Your vendor application has been received and is now under review.</CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p>
              Our team will review your application and documents within 1-3 business days. You'll receive an email
              notification once your application is approved.
            </p>
            <div className="bg-muted p-4 rounded-md text-left">
              <h3 className="font-medium mb-2">What happens next?</h3>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                <li>Our team reviews your application and documents</li>
                <li>You'll receive an email with the decision</li>
                <li>If approved, you can log in and set up your store</li>
                <li>Start adding products and making sales!</li>
              </ol>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <Button asChild className="w-full">
              <Link href="/">Return to Homepage</Link>
            </Button>
            <div className="text-sm text-center text-muted-foreground">
              Have questions?{" "}
              <Link href="/contact" className="text-primary hover:underline">
                Contact Support
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
      <Footer />
    </div>
  )
}
