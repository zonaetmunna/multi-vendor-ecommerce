import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Eye, FileText, Truck } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "My Orders | MarketHub",
  description: "View and manage your orders",
}

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">My Orders</h1>
        <p className="text-muted-foreground">View and track all your orders in one place</p>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Orders</TabsTrigger>
          <TabsTrigger value="processing">Processing</TabsTrigger>
          <TabsTrigger value="shipped">Shipped</TabsTrigger>
          <TabsTrigger value="delivered">Delivered</TabsTrigger>
          <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {mockOrders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </TabsContent>

        <TabsContent value="processing" className="space-y-4">
          {mockOrders
            .filter((order) => order.status === "Processing")
            .map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
        </TabsContent>

        <TabsContent value="shipped" className="space-y-4">
          {mockOrders
            .filter((order) => order.status === "Shipped")
            .map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
        </TabsContent>

        <TabsContent value="delivered" className="space-y-4">
          {mockOrders
            .filter((order) => order.status === "Delivered")
            .map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
        </TabsContent>

        <TabsContent value="cancelled" className="space-y-4">
          {mockOrders
            .filter((order) => order.status === "Cancelled")
            .map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface Order {
  id: string
  date: string
  status: "Processing" | "Shipped" | "Delivered" | "Cancelled"
  total: string
  items: {
    id: string
    name: string
    price: string
    quantity: number
    vendor: string
  }[]
  trackingNumber?: string
}

interface OrderCardProps {
  order: Order
}

function OrderCard({ order }: OrderCardProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <CardTitle className="text-base">Order #{order.id}</CardTitle>
            <CardDescription>{order.date}</CardDescription>
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
                      : "destructive"
              }
            >
              {order.status}
            </Badge>
            <Link href={`/dashboard/customer/orders/${order.id}`}>
              <Button variant="outline" size="sm">
                <Eye className="h-4 w-4 mr-2" />
                Details
              </Button>
            </Link>
            {order.status !== "Cancelled" && (
              <Link href={`/orders/${order.id}/invoice`}>
                <Button variant="outline" size="sm">
                  <FileText className="h-4 w-4 mr-2" />
                  Invoice
                </Button>
              </Link>
            )}
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
                  Vendor: {item.vendor} • Qty: {item.quantity}
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

          {order.status === "Shipped" && order.trackingNumber && (
            <div className="mt-4 p-3 bg-muted rounded-md flex items-center gap-2">
              <Truck className="h-4 w-4 text-muted-foreground" />
              <div className="text-sm">
                <span className="font-medium">Tracking Number: </span>
                {order.trackingNumber}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

// Mock data
const mockOrders: Order[] = [
  {
    id: "ORD-7829",
    date: "May 12, 2025",
    status: "Processing",
    total: "$129.99",
    items: [
      {
        id: "PROD-1",
        name: "Wireless Headphones",
        price: "$79.99",
        quantity: 1,
        vendor: "AudioTech",
      },
      {
        id: "PROD-2",
        name: "Phone Case",
        price: "$24.99",
        quantity: 2,
        vendor: "MobileAccessories",
      },
    ],
  },
  {
    id: "ORD-7752",
    date: "May 5, 2025",
    status: "Shipped",
    total: "$89.95",
    items: [
      {
        id: "PROD-3",
        name: "Smart Watch",
        price: "$89.95",
        quantity: 1,
        vendor: "TechGadgets",
      },
    ],
    trackingNumber: "TRK928374651",
  },
  {
    id: "ORD-7690",
    date: "April 28, 2025",
    status: "Delivered",
    total: "$145.98",
    items: [
      {
        id: "PROD-4",
        name: "Running Shoes",
        price: "$95.99",
        quantity: 1,
        vendor: "SportyGear",
      },
      {
        id: "PROD-5",
        name: "Fitness Tracker",
        price: "$49.99",
        quantity: 1,
        vendor: "TechGadgets",
      },
    ],
  },
  {
    id: "ORD-7523",
    date: "April 15, 2025",
    status: "Cancelled",
    total: "$34.99",
    items: [
      {
        id: "PROD-6",
        name: "Bluetooth Speaker",
        price: "$34.99",
        quantity: 1,
        vendor: "AudioTech",
      },
    ],
  },
]
