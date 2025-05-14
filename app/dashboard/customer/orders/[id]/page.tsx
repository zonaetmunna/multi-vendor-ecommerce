import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, ArrowLeft, Copy, FileText, Package } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Order Details | MarketHub",
  description: "View your order details",
}

// Mock data for orders (replace with actual data fetching)
const mockOrders = [
  {
    id: "123",
    date: "May 8, 2025",
    status: "Delivered",
    items: [
      { id: "1", name: "Product A", quantity: 2, price: 20 },
      { id: "2", name: "Product B", quantity: 1, price: 30 },
    ],
  },
  {
    id: "456",
    date: "June 1, 2025",
    status: "Shipped",
    items: [{ id: "3", name: "Product C", quantity: 3, price: 15 }],
  },
  {
    id: "789",
    date: "April 20, 2025",
    status: "Processing",
    items: [{ id: "4", name: "Product D", quantity: 1, price: 50 }],
  },
  {
    id: "999",
    date: "March 10, 2025",
    status: "Cancelled",
    items: [{ id: "5", name: "Product E", quantity: 2, price: 25 }],
  },
]

export default function OrderDetailsPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the order data based on the ID
  const order = mockOrders.find(o => o.id === params.id) || mockOrders[0];
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          {/* <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard/customer">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard/customer/orders">Orders</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink>Order #{params.id}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb> */}
          <h1 className="text-2xl font-bold tracking-tight mt-2">Order #{params.id}</h1>
          <p className="text-muted-foreground">
            Placed on {order.date}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/dashboard/customer/orders">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Orders
            </Button>
          </Link>
          <Link href={`/orders/${params.id}/invoice`}>
            <Button variant="outline" size="sm">
              <FileText className="h-4 w-4 mr-2" />
              Invoice
            </Button>
          </Link>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Order Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge variant={
                      order.status === "Delivered" ? "default" :
                      order.status === "Shipped" ? "secondary" :
                      order.status === "Processing" ? "outline" :
                      "destructive"
                    }>
                      {order.status}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      Last updated: May 13, 2025, 10:30 AM
                    </span>
                  </div>
                  {order.status !== "Delivered" && order.status !== "Cancelled" && (
                    <Button variant="outline" size="sm">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      Report Issue
                    </Button>
                  )}
                </div>
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${order.status !== "Cancelled" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                        <Package className="h-5 w-5" />
                      </div>
                      <span className="text-xs mt-1">Ordered</span>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${(order.status === "Processing" || order.status === "Shipped" || order.status === "Delivered") && order.status !== "Cancelled" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                        <Package className="h-5 w-5" />
                      </div>
                      <span className="text-xs mt-1">Shipped</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${(order.status === "Processing" || order.status === "Shipped" || order.status === "Delivered") && order.status !== "Cancelled" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                      <Package className="h-5 w-5" />
                    </div>
                    <span className="text-xs mt-1">Delivered</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Tracking Number:</span>
                    <span className="text-sm text-muted-foreground">1234567890</span>
                  </div>
                  <Button variant="outline" size="sm">
                    <Copy className="h-4 w-4 mr-2" />
                    Copy
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Order Items</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {order.items.map(item => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Image src={item.image} alt={item.name} width={40} height={40} className="rounded-md" />
                      <span className="text-sm font-medium">{item.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">${item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Subtotal:</span>
                  <span className="text-sm text-muted-foreground">${order.total}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Shipping:</span>
                  <span className="text-sm text-muted-foreground">Free</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Total:</span>
                  <span className="text-sm font-medium">${order.total}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
