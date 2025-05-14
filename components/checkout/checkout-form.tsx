"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

export function CheckoutForm() {
  const [paymentMethod, setPaymentMethod] = useState("credit-card")
  const [saveInfo, setSaveInfo] = useState(true)
  const [createAccount, setCreateAccount] = useState(false)

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
          <CardDescription>We'll use this information to send your order confirmation and updates.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="your.email@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="(123) 456-7890" />
            </div>
          </div>
          <div className="flex items-center space-x-2 pt-2">
            <Checkbox
              id="create-account"
              checked={createAccount}
              onCheckedChange={(checked) => setCreateAccount(checked === true)}
            />
            <Label htmlFor="create-account" className="text-sm cursor-pointer">
              Create an account for faster checkout next time
            </Label>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Shipping Address</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">First Name</Label>
              <Input id="first-name" placeholder="John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last Name</Label>
              <Input id="last-name" placeholder="Doe" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Street Address</Label>
            <Input id="address" placeholder="123 Main St" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address2">Apartment, suite, etc. (optional)</Label>
            <Input id="address2" placeholder="Apt 4B" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input id="city" placeholder="New York" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="state">State / Province</Label>
              <Select defaultValue="NY">
                <SelectTrigger id="state">
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="AL">Alabama</SelectItem>
                  <SelectItem value="AK">Alaska</SelectItem>
                  <SelectItem value="AZ">Arizona</SelectItem>
                  <SelectItem value="CA">California</SelectItem>
                  <SelectItem value="CO">Colorado</SelectItem>
                  <SelectItem value="NY">New York</SelectItem>
                  <SelectItem value="TX">Texas</SelectItem>
                  {/* Add more states as needed */}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="zip">ZIP / Postal Code</Label>
              <Input id="zip" placeholder="10001" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Select defaultValue="US">
              <SelectTrigger id="country">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="US">United States</SelectItem>
                <SelectItem value="CA">Canada</SelectItem>
                <SelectItem value="UK">United Kingdom</SelectItem>
                <SelectItem value="AU">Australia</SelectItem>
                {/* Add more countries as needed */}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-2 pt-2">
            <Checkbox id="save-info" checked={saveInfo} onCheckedChange={(checked) => setSaveInfo(checked === true)} />
            <Label htmlFor="save-info" className="text-sm cursor-pointer">
              Save this information for next time
            </Label>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Shipping Method</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup defaultValue="standard" className="space-y-3">
            <div className="flex items-center justify-between space-x-2 rounded-md border p-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="standard" id="standard" />
                <Label htmlFor="standard" className="cursor-pointer">
                  <div>
                    <p className="font-medium">Standard Shipping</p>
                    <p className="text-sm text-muted-foreground">3-5 business days</p>
                  </div>
                </Label>
              </div>
              <p className="font-medium">Free</p>
            </div>
            <div className="flex items-center justify-between space-x-2 rounded-md border p-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="express" id="express" />
                <Label htmlFor="express" className="cursor-pointer">
                  <div>
                    <p className="font-medium">Express Shipping</p>
                    <p className="text-sm text-muted-foreground">1-2 business days</p>
                  </div>
                </Label>
              </div>
              <p className="font-medium">$12.99</p>
            </div>
            <div className="flex items-center justify-between space-x-2 rounded-md border p-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="overnight" id="overnight" />
                <Label htmlFor="overnight" className="cursor-pointer">
                  <div>
                    <p className="font-medium">Overnight Shipping</p>
                    <p className="text-sm text-muted-foreground">Next business day</p>
                  </div>
                </Label>
              </div>
              <p className="font-medium">$24.99</p>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Payment Method</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="credit-card" onValueChange={setPaymentMethod}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="credit-card">Credit Card</TabsTrigger>
              <TabsTrigger value="paypal">PayPal</TabsTrigger>
              <TabsTrigger value="apple-pay">Apple Pay</TabsTrigger>
            </TabsList>
            <TabsContent value="credit-card" className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="card-number">Card Number</Label>
                <Input id="card-number" placeholder="1234 5678 9012 3456" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiration">Expiration Date</Label>
                  <Input id="expiration" placeholder="MM/YY" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" placeholder="123" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="name-on-card">Name on Card</Label>
                <Input id="name-on-card" placeholder="John Doe" />
              </div>
            </TabsContent>
            <TabsContent value="paypal" className="pt-4">
              <div className="text-center py-8">
                <p className="mb-4">You will be redirected to PayPal to complete your purchase securely.</p>
                <Button className="w-full sm:w-auto">Continue with PayPal</Button>
              </div>
            </TabsContent>
            <TabsContent value="apple-pay" className="pt-4">
              <div className="text-center py-8">
                <p className="mb-4">You will be prompted to confirm your purchase with Apple Pay.</p>
                <Button className="w-full sm:w-auto">Continue with Apple Pay</Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Additional Information</CardTitle>
          <CardDescription>Add any special instructions or notes for your order.</CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea placeholder="Special instructions for delivery, gift messages, etc." className="min-h-[100px]" />
        </CardContent>
      </Card>
    </div>
  )
}
