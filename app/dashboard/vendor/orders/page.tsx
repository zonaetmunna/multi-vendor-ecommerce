import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Eye, FileText, PackageCheck, Truck, CheckCircle2, XCircle } from "lucide-react"
import Link from "next/link"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const metadata: Metadata = {
  title: "Vendor Orders | MarketHub",
  description: "Manage your store orders",
}

export default function VendorOrdersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Orders</h1>
        <p className="text-muted-foreground">Manage and process orders from your customers</p>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-5 w-full md:w-auto">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="new">New</TabsTrigger>
            <TabsTrigger value="processing">Processing</TabsTrigger>
            <TabsTrigger value="shipped">Shipped</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>

          <div className="mt-6 space-y-4">
            <TabsContent value="all" className="space-y-4">
              {mockOrders.map((order) => (
                <VendorOrderCard key={order.id} order={order} />
              ))}
            </TabsContent>

            <TabsContent value="new" className="space-y-4">
              {mockOrders
                .filter((order) => order.status === "New")
                .map((order) => (
                  <VendorOrderCard key={order.id} order={order} />
                ))}
            </TabsContent>

            <TabsContent value="processing" className="space-y-4">
              {mockOrders
                .filter((order) => order.status === "Processing")
                .map((order) => (
                  <VendorOrderCard key={order.id} order={order} />
                ))}
            </TabsContent>

            <TabsContent value="shipped" className="space-y-4">
              {mockOrders
                .filter((order) => order.status === "Shipped")
                .map((order) => (
                  <VendorOrderCard key={order.id} order={order} />
                ))}
            </TabsContent>

            <TabsContent value="completed" className="space-y-4">
              {mockOrders
                .filter((order) => order.status === "Delivered")
                .map((order) => (
                  <VendorOrderCard key={order.id} order={order} />
                ))}
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  )
}

interface VendorOrder {
  id: string
  customerId: string
  customerName: string
  date: string
  status: "New" | "Processing" | "Shipped" | "Delivered" | "Cancelled"
  total: string
  items: {
    id: string
    name: string
    price: string
    quantity: number
    sku: string
  }[]
  trackingNumber?: string
  shippingAddress: string
}

interface VendorOrderCardProps {
  order: VendorOrder
}

function VendorOrderCard({ order }: VendorOrderCardProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <CardTitle className="text-base">Order #{order.id}</CardTitle>
            <CardDescription>
              {order.date} • Customer: {order.customerName}
            </CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Badge
              variant={
                order.status === "Delivered"
                  ? "default"
                  : order.status === "Shipped"
                    ? "secondary"
                    : order.status === "Processing"
                      ? "outline"
                      : order.status === "New"
                        ? "secondary"
                        : "destructive"
              }
            >
              {order.status}
            </Badge>
            <Link href={`/dashboard/vendor/orders/${order.id}`}>
              <Button variant="outline" size="sm">
                <Eye className="h-4 w-4 mr-2" />
                Details
              </Button>
            </Link>
            <Link href={`/orders/${order.id}/invoice`}>
              <Button variant="outline" size="sm">
                <FileText className="h-4 w-4 mr-2" />
                Invoice
              </Button>
            </Link>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {order.items.map((item) => (
            <div key={item.id} className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 py-2">
              <div>
                <div className="font-medium">{item.name}</div>
                <div className="text-sm text-muted-foreground">
                  SKU: {item.sku} • Qty: {item.quantity}
                </div>
              </div>
              <div className="font-medium">{item.price}</div>
            </div>
          ))}
          <Separator />
          <div className="flex justify-between pt-2">
            <span className="font-semibold">Total</span>
            <span className="font-semibold">{order.total}</span>
          </div>

          <div className="mt-4 p-3 bg-muted rounded-md">
            <div className="text-sm mb-2">
              <span className="font-medium">Shipping Address: </span>
              {order.shippingAddress}
            </div>

            {order.status === "Shipped" && order.trackingNumber && (
              <div className="text-sm flex items-center gap-2">
                <Truck className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Tracking: </span>
                {order.trackingNumber}
              </div>
            )}
          </div>

          {order.status !== "Delivered" && order.status !== "Cancelled" && (
            <div className="flex flex-col sm:flex-row gap-2 mt-4">
              {order.status === "New" && (
                <Button className="w-full sm:w-auto" size="sm">
                  <PackageCheck className="h-4 w-4 mr-2" />
                  Process Order
                </Button>
              )}

              {order.status === "Processing" && (
                <div className="flex flex-col sm:flex-row gap-2 w-full">
                  <div className="w-full sm:w-auto flex-1">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Add tracking number" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fedex">FedEx</SelectItem>
                        <SelectItem value="ups">UPS</SelectItem>
                        <SelectItem value="usps">USPS</SelectItem>
                        <SelectItem value="dhl">DHL</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full sm:w-auto">
                    <Truck className="h-4 w-4 mr-2" />
                    Mark as Shipped
                  </Button>
                </div>
              )}

              {order.status === "Shipped" && (
                <Button className="w-full sm:w-auto" size="sm">
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  Mark as Delivered
                </Button>
              )}

              {order.status !== "Cancelled" && (
                <Button variant="outline" className="w-full sm:w-auto" size="sm">
                  <XCircle className="h-4 w-4 mr-2" />
                  Cancel Order
                </Button>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

// Mock data
const mockOrders: VendorOrder[] = [
  {
    id: "ORD-8201",
    customerId: "CUST-1234",
    customerName: "John Smith",
    date: "May 13, 2025",
    status: "New",
    total: "$149.97",
    items: [
      {
        id: "PROD-101",
        name: "Premium Wireless Earbuds",
        price: "$149.97",
        quantity: 1,
        sku: "AUDIO-EB-001",
      },
    ],
    shippingAddress: "123 Main St, Apt 4B, New York, NY 10001",
  },
  {
    id: "ORD-8195",
    customerId: "CUST-5678",
    customerName: "Sarah Johnson",
    date: "May 12, 2025",
    status: "Processing",
    total: "$89.98",
    items: [
      {
        id: "PROD-102",
        name: "Bluetooth Speaker",
        price: "$59.99",
        quantity: 1,
        sku: "AUDIO-BS-002",
      },
      {
        id: "PROD-103",
        name: "Audio Cable",
        price: "$14.99",
        quantity: 2,
        sku: "AUDIO-AC-001",
      },
    ],
    shippingAddress: "456 Oak Ave, Chicago, IL 60611",
  },
  {
    id: "ORD-8187",
    customerId: "CUST-9012",
    customerName: "Michael Brown",
    date: "May 11, 2025",
    status: "Shipped",
    total: "$249.99",
    items: [
      {
        id: "PROD-104",
        name: "Noise Cancelling Headphones",
        price: "$249.99",
        quantity: 1,
        sku: "AUDIO-NC-003",
      },
    ],
    trackingNumber: "FDX7291834650",
    shippingAddress: "789 Pine St, San Francisco, CA 94102",
  },
  {
    id: "ORD-8156",
    customerId: "CUST-3456",
    customerName: "Emily Davis",
    date: "May 8, 2025",
    status: "Delivered",
    total: "$179.97",
    items: [
      {
        id: "PROD-105",
        name: "Wireless Headphones",
        price: "$129.99",
        quantity: 1,
        sku: "AUDIO-WH-004",
      },
      {
        id: "PROD-106",
        name: "Charging Case",
        price: "$49.98",
        quantity: 1,
        sku: "AUDIO-CC-001",
      },
    ],
    trackingNumber: "UPS8273645198",
    shippingAddress: "321 Maple Rd, Austin, TX 78701",
  },
  {
    id: "ORD-8142",
    customerId: "CUST-7890",
    customerName: "David Wilson",
    date: "May 6, 2025",
    status: "Cancelled",
    total: "$89.99",
    items: [
      {
        id: "PROD-107",
        name: "Portable Speaker",
        price: "$89.99",
        quantity: 1,
        sku: "AUDIO-PS-005",
      },
    ],
    shippingAddress: "654 Elm St, Seattle, WA 98101",
  },
]
