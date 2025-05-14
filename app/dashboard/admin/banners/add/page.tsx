"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { ArrowLeft, Upload } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function AddBannerPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Banner Created",
        description: "Your banner has been created successfully.",
      })
    }, 1500)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/dashboard/admin/banners">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">Create New Banner</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Save as Draft</Button>
          <Button onClick={handleSubmit} disabled={isSubmitting}>
            {isSubmitting ? "Creating..." : "Create Banner"}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Banner Information</CardTitle>
              <CardDescription>Basic information about your promotional banner</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Banner Title</Label>
                <Input id="title" placeholder="Enter banner title" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Brief description of this banner" className="min-h-[100px]" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="link">Banner Link (URL)</Label>
                <Input id="link" placeholder="https://example.com/promotion" />
                <p className="text-xs text-muted-foreground">
                  Where users will be directed when they click on the banner
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Banner Image</CardTitle>
              <CardDescription>Upload the image for your banner</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center text-muted-foreground">
                <Upload className="h-8 w-8 mb-2" />
                <p className="text-sm">Drag & drop or click to upload</p>
                <p className="text-xs mt-1">Recommended size depends on placement location</p>
                <Button variant="outline" size="sm" className="mt-4">
                  Select Image
                </Button>
              </div>
              <div className="space-y-2">
                <Label htmlFor="alt-text">Alt Text</Label>
                <Input id="alt-text" placeholder="Descriptive text for accessibility" />
                <p className="text-xs text-muted-foreground">
                  This text will be read by screen readers and displayed if the image fails to load
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Display Settings</CardTitle>
              <CardDescription>Configure where and when the banner appears</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="location">Display Location</Label>
                <Select defaultValue="homepage">
                  <SelectTrigger id="location">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="homepage">Homepage</SelectItem>
                    <SelectItem value="global">Global (All Pages)</SelectItem>
                    <SelectItem value="category-electronics">Category: Electronics</SelectItem>
                    <SelectItem value="category-fashion">Category: Fashion</SelectItem>
                    <SelectItem value="category-home">Category: Home & Kitchen</SelectItem>
                    <SelectItem value="vendor-page">Vendor Pages</SelectItem>
                    <SelectItem value="checkout">Checkout Page</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="position">Banner Position</Label>
                <Select defaultValue="top">
                  <SelectTrigger id="position">
                    <SelectValue placeholder="Select position" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="top">Top</SelectItem>
                    <SelectItem value="bottom">Bottom</SelectItem>
                    <SelectItem value="sidebar">Sidebar</SelectItem>
                    <SelectItem value="popup">Popup</SelectItem>
                    <SelectItem value="slider">Slider/Carousel</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="start-date">Start Date</Label>
                <Input id="start-date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="end-date">End Date</Label>
                <Input id="end-date" type="date" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="active">Active</Label>
                  <p className="text-xs text-muted-foreground">Enable or disable this banner</p>
                </div>
                <Switch id="active" defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Advanced Options</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="priority">Display Priority</Label>
                <Select defaultValue="normal">
                  <SelectTrigger id="priority">
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="normal">Normal</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  Higher priority banners will be displayed first when multiple banners are eligible
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="mobile-visible">Show on Mobile</Label>
                  <p className="text-xs text-muted-foreground">Enable or disable this banner on mobile devices</p>
                </div>
                <Switch id="mobile-visible" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="dismissible">Allow Dismissal</Label>
                  <p className="text-xs text-muted-foreground">Allow users to close or dismiss this banner</p>
                </div>
                <Switch id="dismissible" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="target-audience">Target Audience</Label>
                <Select defaultValue="all">
                  <SelectTrigger id="target-audience">
                    <SelectValue placeholder="Select audience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Users</SelectItem>
                    <SelectItem value="guests">Guest Users</SelectItem>
                    <SelectItem value="registered">Registered Users</SelectItem>
                    <SelectItem value="returning">Returning Customers</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
