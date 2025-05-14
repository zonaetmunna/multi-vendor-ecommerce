"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Pagination } from "@/components/ui/pagination"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Edit, Eye, FileText, Globe, MoreHorizontal, Plus, Search, Trash2 } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

// Mock CMS pages data
const cmsPages = [
  {
    id: 1,
    title: "About Us",
    slug: "about-us",
    status: "published",
    lastUpdated: "2023-06-15",
    type: "page",
  },
  {
    id: 2,
    title: "Terms of Service",
    slug: "terms-of-service",
    status: "published",
    lastUpdated: "2023-05-20",
    type: "page",
  },
  {
    id: 3,
    title: "Privacy Policy",
    slug: "privacy-policy",
    status: "published",
    lastUpdated: "2023-05-20",
    type: "page",
  },
  {
    id: 4,
    title: "Refund Policy",
    slug: "refund-policy",
    status: "published",
    lastUpdated: "2023-07-10",
    type: "page",
  },
  {
    id: 5,
    title: "Shipping Information",
    slug: "shipping-info",
    status: "published",
    lastUpdated: "2023-07-05",
    type: "page",
  },
  {
    id: 6,
    title: "FAQ",
    slug: "faq",
    status: "published",
    lastUpdated: "2023-06-28",
    type: "page",
  },
  {
    id: 7,
    title: "Contact Us",
    slug: "contact",
    status: "published",
    lastUpdated: "2023-06-10",
    type: "page",
  },
  {
    id: 8,
    title: "Summer Sale Announcement",
    slug: "summer-sale-2023",
    status: "draft",
    lastUpdated: "2023-07-15",
    type: "post",
  },
  {
    id: 9,
    title: "New Vendor Onboarding Guide",
    slug: "vendor-onboarding",
    status: "published",
    lastUpdated: "2023-06-05",
    type: "post",
  },
  {
    id: 10,
    title: "Holiday Shopping Guide",
    slug: "holiday-shopping-guide",
    status: "draft",
    lastUpdated: "2023-07-12",
    type: "post",
  },
]

export default function CMSPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [activeTab, setActiveTab] = useState("all")

  // Filter pages based on search query and active tab
  const filteredPages = cmsPages.filter((page) => {
    const matchesSearch = page.title.toLowerCase().includes(searchQuery.toLowerCase())

    if (activeTab === "all") return matchesSearch
    if (activeTab === "pages") return matchesSearch && page.type === "page"
    if (activeTab === "posts") return matchesSearch && page.type === "post"
    if (activeTab === "published") return matchesSearch && page.status === "published"
    if (activeTab === "drafts") return matchesSearch && page.status === "draft"

    return matchesSearch
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "published":
        return <Badge className="bg-green-500">Published</Badge>
      case "draft":
        return (
          <Badge variant="outline" className="text-yellow-600 border-yellow-600">
            Draft
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">CMS Pages</h1>
          <p className="text-muted-foreground">Manage content pages and blog posts</p>
        </div>
        <div className="flex gap-2">
          <Button asChild>
            <Link href="/dashboard/admin/cms/add">
              <Plus className="h-4 w-4 mr-1" />
              Add New Page
            </Link>
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search pages..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" onValueChange={setActiveTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="pages">Pages</TabsTrigger>
              <TabsTrigger value="posts">Blog Posts</TabsTrigger>
              <TabsTrigger value="published">Published</TabsTrigger>
              <TabsTrigger value="drafts">Drafts</TabsTrigger>
            </TabsList>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Slug</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Updated</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPages.map((page) => (
                    <TableRow key={page.id}>
                      <TableCell className="font-medium">{page.title}</TableCell>
                      <TableCell>/{page.slug}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          {page.type === "page" ? (
                            <>
                              <FileText className="h-4 w-4 text-muted-foreground" />
                              <span>Page</span>
                            </>
                          ) : (
                            <>
                              <Globe className="h-4 w-4 text-muted-foreground" />
                              <span>Blog Post</span>
                            </>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(page.status)}</TableCell>
                      <TableCell>{new Date(page.lastUpdated).toLocaleDateString()}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                              <Link href={`/${page.slug}`}>
                                <Eye className="h-4 w-4 mr-2" />
                                View
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link href={`/dashboard/admin/cms/edit/${page.id}`}>
                                <Edit className="h-4 w-4 mr-2" />
                                Edit
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                  {filteredPages.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                        No pages found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-muted-foreground">
                Showing <strong>1-{Math.min(10, filteredPages.length)}</strong> of{" "}
                <strong>{filteredPages.length}</strong> pages
              </div>
              <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(filteredPages.length / 10)}
                onPageChange={setCurrentPage}
              />
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
