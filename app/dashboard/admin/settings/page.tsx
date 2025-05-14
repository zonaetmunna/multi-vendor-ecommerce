"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState("general")
  const [commissionRate, setCommissionRate] = useState(10)
  const [minPayout, setMinPayout] = useState(50)
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Platform Settings</h1>
        <p className="text-muted-foreground">Manage your marketplace settings and configurations</p>
      </div>

      <Tabs defaultValue="general" onValueChange={setActiveTab}>
        <TabsList className="w-full grid grid-cols-5">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="vendors">Vendors</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="space-y-6 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Site Information</CardTitle>
              <CardDescription>
                Basic information about your marketplace
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="site-name">Site Name</Label>
                <Input id="site-name" defaultValue="MultiVend" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="site-description">Site Description</Label>
                <Textarea 
                  id="site-description" 
                  defaultValue="A modern multi-vendor marketplace for unique products from trusted sellers."
                  className="min-h-[100px]"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Contact Email</Label>
                  <Input id="contact-email" type="email" defaultValue="support@multivend.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-phone">Contact Phone</Label>
                  <Input id="contact-phone" defaultValue="+1 (555) 123-4567" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Business Address</Label>
                <Textarea 
                  id="address" 
                  defaultValue="123 Market Street, San Francisco, CA 94103, United States"
                  className="min-h-[80px]"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>SEO Settings</CardTitle>
              <CardDescription>
                Optimize your marketplace for search engines
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="meta-title">Meta Title</Label>
                <Input id="meta-title" defaultValue="MultiVend - Multi-Vendor eCommerce Platform" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="meta-description">Meta Description</Label>
                <Textarea 
                  id="meta-description" 
                  defaultValue="Shop from thousands of vendors in one place. Find unique products, compare prices, and enjoy a seamless shopping experience."
                  className="min-h-[100px]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="keywords">Keywords</Label>
                <Input id="keywords" defaultValue="marketplace, ecommerce, multi-vendor, online shopping" />
                <p className="text-xs text-muted-foreground">
                  Separate keywords with commas.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="vendors" className="space-y-6 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Vendor Settings</CardTitle>
              <CardDescription>
                Configure vendor-related settings for your marketplace
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="auto-approve">Auto-approve Vendors</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically approve new vendor registrations
                  </p>
                </div>
                <Switch id="auto-approve" />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="vendor-store">Custom Storefronts</Label>
                  <p className="text-sm text-muted-foreground">
                    Allow vendors to customize their store pages
                  </p>
                </div>
                <Switch id="vendor-store" defaultChecked />
              </div>
              <Separator />
              <div className="space-y-2">
                <Label htmlFor="commission-rate">Default Commission Rate (%)</Label>
                <div className="flex items-center gap-4">
                  <Slider
                    id="commission-rate"
                    defaultValue={[commissionRate]}
                    max={30}
                    step={0.5}
                    onValueChange={(value) => setCommissionRate(value[0])}
                    className="flex-1"
                  />
                  <span className="w-12 text-center font-medium">{commissionRate}%</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Default commission percentage taken from each sale
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="required-docs">Required Verification Documents</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Switch id="doc-business" defaultChecked />
                    <Label htmlFor="doc-business">Business Registration</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="doc-tax" defaultChecked />
                    <Label htmlFor="doc-tax">Tax ID Certificate</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="doc-id" defaultChecked />
                    <Label htmlFor="doc-id">Identity Verification</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="doc-address" />
                    <Label htmlFor="doc-address">Address Proof</Label>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Vendor Capabilities</CardTitle>
              <CardDescription>
                Control what vendors can do on your platform
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Create Coupons & Discounts</Label>
                  <p className="text-sm text-muted-foreground">
                    Allow vendors to create their own promotional offers
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Set Custom Shipping Rates</Label>
                  <p className="text-sm text-muted-foreground">
                    Allow vendors to define their own shipping methods and costs
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Chat with Customers</Label>
                  <p className="text-sm text-muted-foreground">
                    Enable direct messaging between vendors and customers
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Bulk Product Import</Label>
                  <p className="text-sm text-muted-foreground">
                    Allow vendors to upload products in bulk via CSV/Excel
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="payments" className="space-y-6 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment Gateways</CardTitle>
              <CardDescription>
                Configure payment methods for your marketplace
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-md">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center">
                    <svg className="h-6 w-6 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 9V15C4 15.5523 4.44772 16 5 16H19C19.5523 16 20 15.5523 20 15V9C20 8.44772 19.5523 8 19 8H5C4.44772 8 4 8.44772 4 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4 11H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Stripe</div>
                    <div className="text-sm text-muted-foreground">Credit/Debit Cards, Apple Pay, Google Pay</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-500">Active</Badge>
                  <Button variant="outline" size="sm">Configure</Button>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 border rounded-md">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center">
                    <svg className="h-6 w-6 text-blue-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 7H5C3.89543 7 3 7.89543 3 9V15C3 16.1046 3.89543 17 5 17H19C20.1046 17 21 16.1046 21 15V9C21 7.89543 20.1046 7 19 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 12C12 10.8954 12.8954 10 14 10C15.1046 10 16 10.8954 16 12C16 13.1046 15.1046 14 14 14C12.8954 14 12 13.1046 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">PayPal</div>
                    <div className="text-sm text-muted-foreground">PayPal Balance, Credit Cards</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Inactive</Badge>
                  <Button variant="outline" size="sm">Configure</Button>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 border rounded-md">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center">
                    <svg className="h-6 w-6 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Razorpay</div>
                    <div className="text-sm text-muted-foreground">Credit/Debit Cards, UPI, Wallets</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Inactive</Badge>
                  <Button variant="outline" size="sm">Configure</Button>
                </div>
              </div>
              
              <Button variant="outline" className="w-full">
                Add Payment Gateway
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Payout Settings</CardTitle>
              <CardDescription>
                Configure how and when vendors receive their earnings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="payout-schedule">Payout Schedule</Label>
                <Select defaultValue="weekly">
                  <SelectTrigger id="payout-schedule">
                    <SelectValue placeholder="Select schedule" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="biweekly">Bi-weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="min-payout">Minimum Payout Amount ($)</Label>
                <div className="flex items-center gap-4">
                  <Slider
                    id="min-payout"
                    defaultValue={[minPayout]}
                    max={200}
                    step={5}
                    onValueChange={(value) => setMinPayout(value[0])}
                    className="flex-1"
                  />
                  <span className="w-12 text-center font-medium">${minPayout}</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Minimum amount required for automatic payouts
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="payout-methods">Available Payout Methods</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Switch id="payout-bank" defaultChecked />
                    <Label htmlFor="payout-bank">Bank Transfer</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="payout-paypal" defaultChecked />
                    <Label htmlFor="payout-paypal">PayPal</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="payout-stripe" />
                    <Label htmlFor="payout-stripe">Stripe Connect</Label>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Automatic Payouts</Label>
                  <p className="text-sm text-muted-foreground">
                    Process payouts automatically according to schedule
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="appearance" className="space-y-6 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Theme Settings</CardTitle>
              <CardDescription>
                Customize the look and feel of your marketplace
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="primary-color">Primary Color</Label>
                <div className="flex items-center gap-2">
                  <Input id="primary-color" type="color" defaultValue="#7c3aed" className="w-16 h-8 p-1" />
                  <Input defaultValue="#7c3aed" className="flex-1" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="secondary-color">Secondary Color</Label>
                <div className="flex items-center gap-2">
                  <Input id="secondary-color" type="color" defaultValue="#3b82f6" className="w-16 h-8 p-1" />
                  <Input defaultValue="#3b82f6" className="flex-1" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="font-family">Font Family</Label>
                <Select defaultValue="inter">
                  <SelectTrigger id="font-family">
                    <SelectValue placeholder="Select font" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="inter">Inter</SelectItem>
                    <SelectItem value="roboto">Roboto</SelectItem>
                    <SelectItem value="open-sans">Open Sans</SelectItem>
                    <SelectItem value="lato">Lato</SelectItem>
                    <SelectItem value="montserrat">Montserrat</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Dark Mode</Label>
                  <p className="text-sm text-muted-foreground">
                    Enable dark mode option for users
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Homepage Layout</CardTitle>
              <CardDescription>
                Configure the sections displayed on your homepage
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Enabled Sections</Label>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 border rounded-md">
                    <Label htmlFor="section-hero" className="cursor-pointer">Hero Section</Label>
                    <Switch id="section-hero" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-md">
                    <Label htmlFor="section-featured-products" className="cursor-pointer">Featured Products</Label>
                    <Switch id="section-featured-products" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-md">
                    <Label htmlFor="section-featured-vendors" className="cursor-pointer">Featured Vendors</Label>
                    <Switch id="section-featured-vendors" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-md">
                    <Label htmlFor="section-how-it-works" className="cursor-pointer">How It Works</Label>
                    <Switch id="section-how-it-works" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-md">
                    <Label htmlFor="section-testimonials" className="cursor-pointer">Testimonials</Label>
                    <Switch id="section-testimonials" defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="advanced" className="space-y-6 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>System Settings</CardTitle>
              <CardDescription>
                Advanced configuration options for your marketplace
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currency">Default Currency</Label>
                <Select defaultValue="usd">
                  <SelectTrigger id="currency">
                    <SelectValue placeholder="Select currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usd">USD ($)</SelectItem>
                    <SelectItem value="eur">EUR (€)</SelectItem>
                    <SelectItem value="gbp">GBP (£)</SelectItem>
                    <SelectItem value="cad">CAD ($)</SelectItem>
                    <SelectItem value="aud">AUD ($)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="tax-rate">Default Tax Rate (%)</Label>
                <Input id="tax-rate" type="number" defaultValue="8" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Maintenance Mode</Label>
                  <p className="text-sm text-muted-foreground">
                    Put the site in maintenance mode (only admins can access)
                  </p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Enable Guest Checkout</Label>
                  <p className="text-sm text-muted-foreground">
                    Allow customers to checkout without creating an account
                  </p>
                </div>
                <Switch />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


