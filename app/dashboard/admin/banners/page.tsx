"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Pagination } from "@/components/ui/pagination"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Edit, Eye, MoreHorizontal, Plus, Search, Trash2 } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

// Mock banners data
const banners = [
  {
    id: 1,
    title: "Summer Sale - 50% Off",
    location: "homepage",
    startDate: "2023-07-01",
    endDate: "2023-08-15",
    status: "active",
    image: "/placeholder.svg?height=50&width=200",
  },
  {
    id: 2,
    title: "New Arrivals - Fashion Collection",
    location: "category-fashion",
    startDate: "2023-06-15",
    endDate: "2023-09-01",
    status: "active",
    image: "/placeholder.svg?height=50&width=200",
  },
  {
    id: 3,
    title: "Free Shipping on Orders Over $50",
    location: "global",
    startDate: "2023-01-01",
    endDate: "2023-12-31",
    status: "active",
    image: "/placeholder.svg?height=50&width=200",
  },
  {
    id: 4,
    title: "Back to School Sale",
    location: "homepage",
    startDate: "2023-08-01",
    endDate: "2023-09-15",
    status: "scheduled",
    image: "/placeholder.svg?height=50&width=200",
  },
  {
    id: 5,
    title: "Electronics Clearance",
    location: "category-electronics",
    startDate: "2023-07-10",
    endDate: "2023-07-25",
    status: "active",
    image: "/placeholder.svg?height=50&width=200",
  },
  {
    id: 6,
    title: "Holiday Season Preview",
    location: "homepage",
    startDate: "2023-10-15",
    endDate: "2023-11-01",
    status: "scheduled",
    image: "/placeholder.svg?height=50&width=200",
  },
  {
    id: 7,
    title: "Flash Sale - 24 Hours Only",
    location: "global",
    startDate: "2023-07-20",
    endDate: "2023-07-21",
    status: "scheduled",
    image: "/placeholder.svg?height=50&width=200",
  },
  {
    id: 8,
    title: "Spring Collection 2023",
    location: "homepage",
    startDate: "2023-03-01",
    endDate: "2023-05-31",
    status: "expired",
    image: "/placeholder.svg?height=50&width=200",
  },
  {
    id: 9,
    title: "Vendor Spotlight: AudioTech",
    location: "vendor-page",
    startDate: "2023-06-01",
    endDate: "2023-07-31",
    status: "active",
    image: "/placeholder.svg?height=50&width=200",
  },
  {
    id: 10,
    title: "Black Friday Preview",
    location: "homepage",
    startDate: "2023-11-15",
    endDate: "2023-11-24",
    status: "scheduled",
    image: "/placeholder.svg?height=50&width=200",
  },
]

export default function BannersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [activeTab, setActiveTab] = useState("all")

  // Filter banners based on search query and active tab
  const filteredBanners = banners.filter((banner) => {
    const matchesSearch = banner.title.toLowerCase().includes(searchQuery.toLowerCase())

    if (activeTab === "all") return matchesSearch
    if (activeTab === "active") return matchesSearch && banner.status === "active"
    if (activeTab === "scheduled") return matchesSearch && banner.status === "scheduled"
    if (activeTab === "expired") return matchesSearch && banner.status === "expired"

    return matchesSearch
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-500">Active</Badge>
      case "scheduled":
        return (
          <Badge variant="outline" className="text-blue-600 border-blue-600">
            Scheduled
          </Badge>
        )
      case "expired":
        return (
          <Badge variant="outline" className="text-gray-600 border-gray-600">
            Expired
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
          <h1 className="text-2xl font-bold">Banners & Promotions</h1>
          <p className="text-muted-foreground">Manage promotional banners across your marketplace</p>
        </div>
        <div className="flex gap-2">
          <Button asChild>
            <Link href="/dashboard/admin/banners/add">
              <Plus className="h-4 w-4 mr-1" />
              Add New Banner
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
                placeholder="Search banners..."
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
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
              <TabsTrigger value="expired">Expired</TabsTrigger>
            </TabsList>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Banner</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredBanners.map((banner) => (
                    <TableRow key={banner.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-24 rounded-md overflow-hidden bg-muted">
                            <img
                              src={banner.image || "/placeholder.svg"}
                              alt={banner.title}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="font-medium">{banner.title}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        {banner.location === "global" ? (
                          <Badge variant="outline">Global</Badge>
                        ) : banner.location === "homepage" ? (
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                            Homepage
                          </Badge>
                        ) : banner.location.startsWith("category-") ? (
                          <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                            {banner.location.replace("category-", "").charAt(0).toUpperCase() +
                              banner.location.replace("category-", "").slice(1)}
                          </Badge>
                        ) : (
                          <Badge variant="outline">{banner.location}</Badge>
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                          <span className="text-sm">
                            {new Date(banner.startDate).toLocaleDateString()} -{" "}
                            {new Date(banner.endDate).toLocaleDateString()}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(banner.status)}</TableCell>
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
                              <Link href={`/dashboard/admin/banners/preview/${banner.id}`}>
                                <Eye className="h-4 w-4 mr-2" />
                                Preview
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link href={`/dashboard/admin/banners/edit/${banner.id}`}>
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
                  {filteredBanners.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                        No banners found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-muted-foreground">
                Showing <strong>1-{Math.min(10, filteredBanners.length)}</strong> of{" "}
                <strong>{filteredBanners.length}</strong> banners
              </div>
              <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(filteredBanners.length / 10)}
                onPageChange={setCurrentPage}
              />
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
