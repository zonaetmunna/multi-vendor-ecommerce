"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  ArrowLeft,
  CheckCircle,
  XCircle,
  AlertCircle,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  DollarSign,
  Percent,
  Package,
  ShoppingCart,
  Star,
  Users,
} from "lucide-react"
import { LineChart, BarChart } from "@/components/ui/chart"

export default function VendorDetailsPage({ params }: { params: { id: string } }) {
  const vendorId = Number.parseInt(params.id)
  const [activeTab, setActiveTab] = useState("overview")

  // Mock vendor data
  const vendor = {
    id: vendorId,
    name: "AudioTech",
    email: "contact@audiotech.com",
    phone: "+1 (555) 123-4567",
    address: "123 Tech Street, San Francisco, CA 94107",
    description:
      "AudioTech is a premium audio equipment retailer specializing in high-quality headphones, speakers, and audio accessories. With over 10 years of experience in the industry, we pride ourselves on offering the best sound experience to our customers.",
    logo: "/placeholder.svg?height=200&width=200",
    banner: "/placeholder.svg?height=300&width=1200",
    website: "https://audiotech.example.com",
    socialMedia: {
      facebook: "audiotech",
      instagram: "audiotech_official",
      twitter: "audiotech",
    },
    joined: "2023-01-15",
    status: "approved",
    rating: 4.8,
    reviewCount: 124,
    products: 42,
    orders: 567,
    earnings: {
      total: 12450.75,
      pending: 1250.5,
      lastMonth: 2340.25,
    },
    commission: 10,
    paymentDetails: {
      method: "Bank Transfer",
      accountName: "AudioTech Inc.",
      accountNumber: "XXXX-XXXX-XXXX-1234",
    },
    documents: [
      { name: "Business Registration", verified: true },
      { name: "Tax ID Certificate", verified: true },
      { name: "Identity Verification", verified: true },
    ],
  }

  // Mock sales data
  const monthlySales = [
    { name: "Jan", total: 1200 },
    { name: "Feb", total: 1800 },
    { name: "Mar", total: 2200 },
    { name: "Apr", total: 1700 },
    { name: "May", total: 2100 },
    { name: "Jun", total: 2500 },
    { name: "Jul", total: 2300 },
    { name: "Aug", total: 2800 },
    { name: "Sep", total: 3000 },
    { name: "Oct", total: 2700 },
    { name: "Nov", total: 3200 },
    { name: "Dec", total: 3500 },
  ]

  // Mock product categories data
  const productCategories = [
    { name: "Headphones", total: 18 },
    { name: "Speakers", total: 12 },
    { name: "Earbuds", total: 8 },
    { name: "Accessories", total: 4 },
  ]

  // Mock recent orders
  const recentOrders = [
    { id: "ORD-1234", customer: "John Doe", date: "2023-07-10", total: 199.99, status: "completed" },
    { id: "ORD-1235", customer: "Jane Smith", date: "2023-07-09", total: 149.99, status: "completed" },
    { id: "ORD-1236", customer: "Robert Johnson", date: "2023-07-08", total: 299.99, status: "processing" },
    { id: "ORD-1237", customer: "Emily Davis", date: "2023-07-07", total: 89.99, status: "completed" },
    { id: "ORD-1238", customer: "Michael Brown", date: "2023-07-06", total: 129.99, status: "completed" },
  ]

  // Mock top products
  const topProducts = [
    { id: 1, name: "Premium Wireless Headphones", price: 199.99, sold: 45 },
    { id: 2, name: "Bluetooth Speaker", price: 79.99, sold: 38 },
    { id: 3, name: "Wireless Earbuds", price: 129.99, sold: 32 },
    { id: 4, name: "Noise Cancelling Headphones", price: 249.99, sold: 28 },
    { id: 5, name: "Portable DAC/Amp", price: 149.99, sold: 24 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" asChild>
          <Link href="/dashboard/admin/vendors">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">Vendor Details</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="h-16 w-16 rounded-md overflow-hidden bg-muted">
              <img src={vendor.logo || "/placeholder.svg"} alt={vendor.name} className="h-full w-full object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <CardTitle>{vendor.name}</CardTitle>
                {vendor.status === "approved" && <Badge className="bg-green-500">Approved</Badge>}
                {vendor.status === "pending" && (
                  <Badge variant="outline" className="text-yellow-600 border-yellow-600">
                    Pending
                  </Badge>
                )}
                {vendor.status === "rejected" && (
                  <Badge variant="outline" className="text-red-600 border-red-600">
                    Rejected
                  </Badge>
                )}
              </div>
              <CardDescription>Joined on {new Date(vendor.joined).toLocaleDateString()}</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Description</h3>
                <p className="mt-1">{vendor.description}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Contact Information</h3>
                  <div className="mt-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span>{vendor.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{vendor.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{vendor.address}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Online Presence</h3>
                  <div className="mt-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                      <a
                        href={vendor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {vendor.website}
                      </a>
                    </div>
                    {Object.entries(vendor.socialMedia).map(([platform, handle]) => (
                      <div key={platform} className="flex items-center gap-2">
                        <span className="h-4 w-4 text-muted-foreground">{platform.charAt(0).toUpperCase()}</span>
                        <span>@{handle}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          {vendor.status === "pending" && (
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline" className="gap-1 text-red-600 hover:text-red-700 hover:bg-red-50">
                <XCircle className="h-4 w-4" />
                Reject
              </Button>
              <Button className="gap-1">
                <CheckCircle className="h-4 w-4" />
                Approve
              </Button>
            </CardFooter>
          )}
          {vendor.status === "approved" && (
            <CardFooter className="flex justify-end">
              <Button variant="outline" className="gap-1 text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50">
                <AlertCircle className="h-4 w-4" />
                Suspend Vendor
              </Button>
            </CardFooter>
          )}
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Vendor Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-muted-foreground" />
                  <span>Products</span>
                </div>
                <span className="font-bold">{vendor.products}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5 text-muted-foreground" />
                  <span>Orders</span>
                </div>
                <span className="font-bold">{vendor.orders}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-muted-foreground" />
                  <span>Rating</span>
                </div>
                <div className="flex items-center">
                  <span className="font-bold mr-1">{vendor.rating}</span>
                  <svg className="h-4 w-4 fill-yellow-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-xs text-muted-foreground ml-1">({vendor.reviewCount})</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <span>Customers</span>
                </div>
                <span className="font-bold">312</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-muted-foreground" />
                  <span>Total Earnings</span>
                </div>
                <span className="font-bold">${vendor.earnings.total.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-muted-foreground" />
                  <span>Pending Payout</span>
                </div>
                <span className="font-bold">${vendor.earnings.pending.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Percent className="h-5 w-5 text-muted-foreground" />
                  <span>Commission Rate</span>
                </div>
                <span className="font-bold">{vendor.commission}%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" onValueChange={setActiveTab}>
        <TabsList className="w-full grid grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="verification">Verification</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Sales Overview</CardTitle>
                <CardDescription>Monthly sales performance</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChart
                  data={monthlySales}
                  categories={["total"]}
                  colors={["#8884d8"]}
                  valueFormatter={(value) => `$${value}`}
                  showLegend={false}
                  showXAxis={true}
                  showYAxis={true}
                  showGridLines={true}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Product Categories</CardTitle>
                <CardDescription>Distribution by category</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart
                  data={productCategories}
                  categories={["total"]}
                  colors={["#8884d8"]}
                  valueFormatter={(value) => `${value}`}
                  showLegend={false}
                  showXAxis={true}
                  showYAxis={true}
                  layout="vertical"
                />
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Latest customer orders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Order ID</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Total</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentOrders.map((order) => (
                        <TableRow key={order.id}>
                          <TableCell className="font-medium">{order.id}</TableCell>
                          <TableCell>{order.customer}</TableCell>
                          <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>
                          <TableCell>${order.total.toFixed(2)}</TableCell>
                          <TableCell>
                            <Badge className={order.status === "completed" ? "bg-green-500" : "bg-blue-500"}>
                              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Products</CardTitle>
                <CardDescription>Best selling products</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Product</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Units Sold</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {topProducts.map((product) => (
                        <TableRow key={product.id}>
                          <TableCell className="font-medium">{product.name}</TableCell>
                          <TableCell>${product.price.toFixed(2)}</TableCell>
                          <TableCell>{product.sold}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="products" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Products</CardTitle>
              <CardDescription>All products from this vendor</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Products list will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="orders" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Orders</CardTitle>
              <CardDescription>Order history for this vendor</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Orders list will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="verification" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Verification Documents</CardTitle>
              <CardDescription>Submitted documents for vendor verification</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {vendor.documents.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-md">
                    <div className="flex items-center gap-3">
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
                        <div className="font-medium">{doc.name}</div>
                        <div className="text-sm text-muted-foreground">
                          Uploaded on {new Date(vendor.joined).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                    <div>
                      {doc.verified ? (
                        <Badge className="bg-green-500">Verified</Badge>
                      ) : (
                        <Badge variant="outline">Pending</Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Payment Information</CardTitle>
              <CardDescription>Vendor's payment details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Payment Method</h3>
                  <p className="mt-1">{vendor.paymentDetails.method}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Account Name</h3>
                  <p className="mt-1">{vendor.paymentDetails.accountName}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Account Number</h3>
                  <p className="mt-1">{vendor.paymentDetails.accountNumber}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
