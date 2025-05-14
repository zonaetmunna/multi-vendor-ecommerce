"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function AddCMSPage() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("content")
  const [pageType, setPageType] = useState("page")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Page Created",
        description: "Your page has been created successfully.",
      })
    }, 1500)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/dashboard/admin/cms">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">Create New Page</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Save as Draft</Button>
          <Button onClick={handleSubmit} disabled={isSubmitting}>
            {isSubmitting ? "Publishing..." : "Publish"}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Tabs defaultValue="content" onValueChange={setActiveTab}>
            <TabsList className="w-full grid grid-cols-3">
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="seo">SEO</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="content" className="space-y-6 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Page Content</CardTitle>
                  <CardDescription>Create the content for your page</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Page Title</Label>
                    <Input id="title" placeholder="Enter page title" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="slug">URL Slug</Label>
                    <div className="flex items-center">
                      <span className="text-muted-foreground mr-2">/</span>
                      <Input id="slug" placeholder="page-url-slug" />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      The URL slug is the part of the URL that identifies this page. Use lowercase letters, numbers, and
                      hyphens only.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="content">Content</Label>
                    <div className="border rounded-md p-2">
                      <div className="bg-muted p-2 rounded-md mb-2 flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          B
                        </Button>
                        <Button variant="ghost" size="sm">
                          I
                        </Button>
                        <Button variant="ghost" size="sm">
                          U
                        </Button>
                        <div className="h-4 w-px bg-border mx-1"></div>
                        <Button variant="ghost" size="sm">
                          H1
                        </Button>
                        <Button variant="ghost" size="sm">
                          H2
                        </Button>
                        <Button variant="ghost" size="sm">
                          H3
                        </Button>
                        <div className="h-4 w-px bg-border mx-1"></div>
                        <Button variant="ghost" size="sm">
                          Link
                        </Button>
                        <Button variant="ghost" size="sm">
                          Image
                        </Button>
                      </div>
                      <Textarea
                        id="content"
                        placeholder="Write your content here..."
                        className="min-h-[300px] border-0 focus-visible:ring-0 resize-none"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="seo" className="space-y-6 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>SEO Settings</CardTitle>
                  <CardDescription>Optimize your page for search engines</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="meta-title">Meta Title</Label>
                    <Input id="meta-title" placeholder="SEO optimized title" />
                    <p className="text-xs text-muted-foreground">Recommended length: 50-60 characters</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="meta-description">Meta Description</Label>
                    <Textarea
                      id="meta-description"
                      placeholder="Brief description for search results"
                      className="min-h-[100px]"
                    />
                    <p className="text-xs text-muted-foreground">Recommended length: 150-160 characters</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="keywords">Keywords</Label>
                    <Input id="keywords" placeholder="keyword1, keyword2, keyword3" />
                    <p className="text-xs text-muted-foreground">Separate keywords with commas</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="indexable">Allow Search Engines to Index</Label>
                      <Switch id="indexable" defaultChecked />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      If turned off, search engines will be asked not to index this page
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Page Settings</CardTitle>
                  <CardDescription>Configure additional page settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="page-type">Page Type</Label>
                    <Select defaultValue={pageType} onValueChange={setPageType}>
                      <SelectTrigger id="page-type">
                        <SelectValue placeholder="Select page type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="page">Standard Page</SelectItem>
                        <SelectItem value="post">Blog Post</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {pageType === "post" && (
                    <div className="space-y-2">
                      <Label htmlFor="categories">Categories</Label>
                      <Select>
                        <SelectTrigger id="categories">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="news">News</SelectItem>
                          <SelectItem value="guides">Guides</SelectItem>
                          <SelectItem value="tutorials">Tutorials</SelectItem>
                          <SelectItem value="announcements">Announcements</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="template">Page Template</Label>
                    <Select defaultValue="default">
                      <SelectTrigger id="template">
                        <SelectValue placeholder="Select template" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="default">Default</SelectItem>
                        <SelectItem value="full-width">Full Width</SelectItem>
                        <SelectItem value="sidebar">With Sidebar</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="show-in-menu">Show in Navigation Menu</Label>
                      <Switch id="show-in-menu" />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      If enabled, this page will be shown in the main navigation menu
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="show-in-footer">Show in Footer</Label>
                      <Switch id="show-in-footer" />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      If enabled, this page will be shown in the footer links
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="status">Visibility</Label>
                <Select defaultValue="draft">
                  <SelectTrigger id="status">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="scheduled">Scheduled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="publish-date">Publish Date</Label>
                <Input id="publish-date" type="date" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Featured Image</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center text-muted-foreground">
                <svg
                  className="h-8 w-8 mb-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-sm">Drag & drop or click to upload</p>
                <p className="text-xs mt-1">Recommended size: 1200x630px</p>
                <Button variant="outline" size="sm" className="mt-4">
                  Select Image
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
