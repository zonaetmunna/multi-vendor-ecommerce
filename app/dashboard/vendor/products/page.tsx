"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Edit, MoreHorizontal, Plus, Search, Trash2, Upload, Download, Eye } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Pagination } from "@/components/ui/pagination"

// Mock product data
const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199.99,
    category: "Electronics",
    stock: 45,
    status: "active",
    created: "2023-10-15",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 2,
    name: "Bluetooth Speaker",
    price: 79.99,
    category: "Electronics",
    stock: 32,
    status: "active",
    created: "2023-09-28",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    price: 129.99,
    category: "Electronics",
    stock: 18,
    status: "active",
    created: "2023-09-10",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 4,
    name: "Portable DAC/Amp",
    price: 149.99,
    category: "Electronics",
    stock: 7,
    status: "low_stock",
    created: "2023-08-22",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 5,
    name: "Noise Cancelling Headphones",
    price: 249.99,
    category: "Electronics",
    stock: 0,
    status: "out_of_stock",
    created: "2023-08-05",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 6,
    name: "Wireless Charging Pad",
    price: 39.99,
    category: "Electronics",
    stock: 56,
    status: "active",
    created: "2023-07-19",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 7,
    name: "Smart Home Speaker",
    price: 99.99,
    category: "Electronics",
    stock: 23,
    status: "active",
    created: "2023-07-02",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 8,
    name: "Wireless Mouse",
    price: 29.99,
    category: "Electronics",
    stock: 41,
    status: "active",
    created: "2023-06-15",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 9,
    name: "Mechanical Keyboard",
    price: 89.99,
    category: "Electronics",
    stock: 12,
    status: "low_stock",
    created: "2023-05-30",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 10,
    name: "USB-C Hub",
    price: 49.99,
    category: "Electronics",
    stock: 38,
    status: "active",
    created: "2023-05-12",
    image: "/placeholder.svg?height=50&width=50",
  },
]

export default function VendorProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [activeTab, setActiveTab] = useState("all")

  // Filter products based on search query and active tab
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())

    if (activeTab === "all") return matchesSearch
    if (activeTab === "active") return matchesSearch && product.status === "active"
    if (activeTab === "low_stock") return matchesSearch && product.status === "low_stock"
    if (activeTab === "out_of_stock") return matchesSearch && product.status === "out_of_stock"

    return matchesSearch
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-500">Active</Badge>
      case "low_stock":
        return (
          <Badge variant="outline" className="text-yellow-600 border-yellow-600">
            Low Stock
          </Badge>
        )
      case "out_of_stock":
        return (
          <Badge variant="outline" className="text-red-600 border-red-600">
            Out of Stock
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
          <h1 className="text-2xl font-bold">Products</h1>
          <p className="text-muted-foreground">Manage your product inventory</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-1">
            <Upload className="h-4 w-4" />
            Bulk Upload
          </Button>
          <Button asChild>
            <Link href="/dashboard/vendor/products/add">
              <Plus className="h-4 w-4 mr-1" />
              Add Product
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
                placeholder="Search products..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="gap-1">
                <Download className="h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" onValueChange={setActiveTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Products</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="low_stock">Low Stock</TabsTrigger>
              <TabsTrigger value="out_of_stock">Out of Stock</TabsTrigger>
            </TabsList>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Added</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProducts.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-md overflow-hidden bg-muted">
                            <img
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <span className="font-medium">{product.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>${product.price.toFixed(2)}</TableCell>
                      <TableCell>{product.stock}</TableCell>
                      <TableCell>{getStatusBadge(product.status)}</TableCell>
                      <TableCell>{new Date(product.created).toLocaleDateString()}</TableCell>
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
                              <Link href={`/products/${product.id}`}>
                                <Eye className="h-4 w-4 mr-2" />
                                View
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link href={`/dashboard/vendor/products/edit/${product.id}`}>
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
                  {filteredProducts.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                        No products found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-muted-foreground">
                Showing <strong>1-{Math.min(10, filteredProducts.length)}</strong> of{" "}
                <strong>{filteredProducts.length}</strong> products
              </div>
              <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(filteredProducts.length / 10)}
                onPageChange={setCurrentPage}
              />
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
