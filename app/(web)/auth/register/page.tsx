"use client"

import { useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LandingNavbar } from "@/components/landing/landing-navbar"
import { Footer } from "@/components/landing/footer"

export default function RegisterPage() {
  const searchParams = useSearchParams()
  const defaultType = searchParams.get("type") || "customer"
  const [activeTab, setActiveTab] = useState<string>(defaultType)

  return (
    <div className="min-h-screen flex flex-col">
      <LandingNavbar />
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
            <CardDescription className="text-center">
              Choose your account type and enter your details to get started
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Tabs defaultValue={activeTab} className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="customer">Customer</TabsTrigger>
                <TabsTrigger value="vendor">Vendor</TabsTrigger>
              </TabsList>
              <TabsContent value="customer" className="space-y-4 pt-4">
                <CustomerRegistrationForm />
              </TabsContent>
              <TabsContent value="vendor" className="space-y-4 pt-4">
                <VendorRegistrationForm />
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-sm text-center text-muted-foreground">
              By creating an account, you agree to our{" "}
              <Link href="/terms" className="underline underline-offset-4 hover:text-primary">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="underline underline-offset-4 hover:text-primary">
                Privacy Policy
              </Link>
              .
            </div>
            <div className="text-sm text-center">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-primary underline underline-offset-4 hover:text-primary/90">
                Sign in
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
      <Footer />
    </div>
  )
}

function CustomerRegistrationForm() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="first-name">First name</Label>
          <Input id="first-name" placeholder="John" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="last-name">Last name</Label>
          <Input id="last-name" placeholder="Doe" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="john.doe@example.com" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="confirm-password">Confirm Password</Label>
        <Input id="confirm-password" type="password" />
      </div>
      <Button type="submit" className="w-full">
        Create Customer Account
      </Button>
    </div>
  )
}

function VendorRegistrationForm() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="store-name">Store Name</Label>
        <Input id="store-name" placeholder="Your Store Name" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="vendor-email">Email</Label>
        <Input id="vendor-email" type="email" placeholder="store@example.com" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="vendor-phone">Phone Number</Label>
        <Input id="vendor-phone" placeholder="+1 (555) 000-0000" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="vendor-password">Password</Label>
        <Input id="vendor-password" type="password" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="vendor-confirm-password">Confirm Password</Label>
        <Input id="vendor-confirm-password" type="password" />
      </div>
      <Button type="submit" className="w-full">
        Create Vendor Account
      </Button>
    </div>
  )
}
