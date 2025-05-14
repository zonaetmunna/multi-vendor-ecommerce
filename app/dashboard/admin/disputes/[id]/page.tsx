"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { ArrowLeft, Calendar, FileText, MessageSquare, Package, ShoppingCart, User } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function DisputeDetailsPage({ params }: { params: { id: string } }) {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("details")
  const [status, setStatus] = useState("open")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [messageText, setMessageText] = useState("")

  // Mock dispute data
  const dispute = {
    id: params.id,
    orderId: "ORD-7890",
    customer: {
      id: "CUST-1234",
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567",
    },
    vendor: {
      id: "VEN-5678",
      name: "AudioTech",
      email: "support@audiotech.com",
    },
    product: {
      id: "PROD-9012",
      name: "Premium Wireless Headphones",
      price: 199.99,
      image: "/placeholder.svg?height=80&width=80",
    },
    reason: "Item not as described",
    description:
      "The headphones I received do not match the product description. The description mentioned noise cancellation features, but the product I received does not have this functionality. Additionally, the sound quality is much lower than advertised.",
    evidence: [
      { id: 1, name: "product_photo.jpg", type: "image", url: "/placeholder.svg?height=200&width=200" },
      { id: 2, name: "order_receipt.pdf", type: "document", url: "#" },
    ],
    amount: 199.99,
    status: "open",
    priority: "high",
    createdAt: "2023-07-15T10:30:00Z",
    lastUpdated: "2023-07-16T14:45:00Z",
    messages: [
      {
        id: 1,
        sender: "customer",
        senderName: "John Doe",
        message: "I would like to request a refund as the product doesn't match the description.",
        timestamp: "2023-07-15T10:30:00Z",
      },
      {
        id: 2,
        sender: "vendor",
        senderName: "AudioTech Support",
        message:
          "We're sorry to hear about your experience. Could you please provide more details about the issues you're experiencing?",
        timestamp: "2023-07-15T14:20:00Z",
      },
      {
        id: 3,
        sender: "customer",
        senderName: "John Doe",
        message:
          "The headphones don't have noise cancellation as advertised, and the sound quality is poor compared to what was described.",
        timestamp: "2023-07-15T15:45:00Z",
      },
      {
        id: 4,
        sender: "admin",
        senderName: "Support Team",
        message: "We're reviewing this case and will get back to you shortly.",
        timestamp: "2023-07-16T09:15:00Z",
      },
    ],
  }

  const handleStatusChange = (newStatus: string) => {
    setStatus(newStatus)
    toast({
      title: "Status Updated",
      description: `Dispute status changed to ${newStatus.replace("_", " ").toUpperCase()}`,
    })
  }

  const handleSendMessage = () => {
    if (!messageText.trim()) return

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setMessageText("")
      toast({
        title: "Message Sent",
        description: "Your message has been sent successfully.",
      })
    }, 1000)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "open":
        return (
          <Badge variant="outline" className="text-red-600 border-red-600 bg-red-50">
            Open
          </Badge>
        )
      case "in_progress":
        return (
          <Badge variant="outline" className="text-yellow-600 border-yellow-600 bg-yellow-50">
            In Progress
          </Badge>
        )
      case "resolved":
        return (
          <Badge variant="outline" className="text-green-600 border-green-600 bg-green-50">
            Resolved
          </Badge>
        )
      default:
        return null
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge className="bg-red-500">High</Badge>
      case "medium":
        return <Badge className="bg-yellow-500">Medium</Badge>
      case "low":
        return <Badge className="bg-blue-500">Low</Badge>
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" asChild>
          <Link href="/dashboard/admin/disputes">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl font-bold">Dispute {dispute.id}</h1>
          <p className="text-muted-foreground">
            Order {dispute.orderId} • {new Date(dispute.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Tabs defaultValue="details" onValueChange={setActiveTab}>
            <TabsList className="w-full grid grid-cols-3">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
              <TabsTrigger value="evidence">Evidence</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="space-y-6 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Dispute Information</CardTitle>
                  <CardDescription>Details about this dispute case</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Status</h3>
                      <div className="mt-1">{getStatusBadge(dispute.status)}</div>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Priority</h3>
                      <div className="mt-1">{getPriorityBadge(dispute.priority)}</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Reason</h3>
                    <p className="mt-1 font-medium">{dispute.reason}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Description</h3>
                    <p className="mt-1">{dispute.description}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Disputed Amount</h3>
                    <p className="mt-1 font-medium">${dispute.amount.toFixed(2)}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Created</h3>
                      <p className="mt-1">{new Date(dispute.createdAt).toLocaleString()}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Last Updated</h3>
                      <p className="mt-1">{new Date(dispute.lastUpdated).toLocaleString()}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Order Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-md overflow-hidden bg-muted flex-shrink-0">
                      <img
                        src={dispute.product.image || "/placeholder.svg"}
                        alt={dispute.product.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium truncate">{dispute.product.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        ${dispute.product.price.toFixed(2)} • Order {dispute.orderId}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                      <ShoppingCart className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <h3 className="text-sm font-medium">Order ID</h3>
                        <Link
                          href={`/dashboard/admin/orders/${dispute.orderId}`}
                          className="text-sm text-primary hover:underline"
                        >
                          {dispute.orderId}
                        </Link>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <h3 className="text-sm font-medium">Order Date</h3>
                        <p className="text-sm">July 10, 2023</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="messages" className="space-y-6 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Conversation History</CardTitle>
                  <CardDescription>Messages between customer, vendor, and support</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    {dispute.messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex gap-4 ${message.sender === "admin" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg p-4 ${
                            message.sender === "customer"
                              ? "bg-muted"
                              : message.sender === "vendor"
                                ? "bg-blue-50 dark:bg-blue-900/20"
                                : "bg-primary text-primary-foreground"
                          }`}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <span className="font-medium text-sm">{message.senderName}</span>
                            <span className="text-xs opacity-70">
                              {new Date(message.timestamp).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </span>
                          </div>
                          <p className="text-sm">{message.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <Textarea
                    placeholder="Type your message here..."
                    className="min-h-[100px]"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                  />
                  <div className="flex justify-end">
                    <Button onClick={handleSendMessage} disabled={isSubmitting || !messageText.trim()}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="evidence" className="space-y-6 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Submitted Evidence</CardTitle>
                  <CardDescription>Files and documents submitted as evidence</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {dispute.evidence.map((item) => (
                      <div key={item.id} className="border rounded-lg p-4">
                        {item.type === "image" ? (
                          <div className="space-y-2">
                            <div className="aspect-video rounded-md overflow-hidden bg-muted">
                              <img
                                src={item.url || "/placeholder.svg"}
                                alt={item.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium">{item.name}</span>
                              <Button variant="outline" size="sm">
                                View
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center">
                                <FileText className="h-5 w-5 text-muted-foreground" />
                              </div>
                              <span className="text-sm font-medium">{item.name}</span>
                            </div>
                            <Button variant="outline" size="sm">
                              Download
                            </Button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Update Status</label>
                <Select value={status} onValueChange={handleStatusChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="open">Open</SelectItem>
                    <SelectItem value="in_progress">In Progress</SelectItem>
                    <SelectItem value="resolved">Resolved</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Resolution</label>
                <div className="flex flex-col gap-2">
                  <Button variant="outline" className="justify-start">
                    Issue Full Refund
                  </Button>
                  <Button variant="outline" className="justify-start">
                    Issue Partial Refund
                  </Button>
                  <Button variant="outline" className="justify-start">
                    Request Return
                  </Button>
                  <Button variant="outline" className="justify-start">
                    Deny Refund
                  </Button>
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Contact Customer
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Contact Vendor
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Customer Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                  <User className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-medium">{dispute.customer.name}</h3>
                  <p className="text-sm text-muted-foreground">{dispute.customer.email}</p>
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Customer ID</span>
                  <span className="text-sm">{dispute.customer.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Phone</span>
                  <span className="text-sm">{dispute.customer.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Total Orders</span>
                  <span className="text-sm">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Previous Disputes</span>
                  <span className="text-sm">1</span>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href={`/dashboard/admin/customers/${dispute.customer.id}`}>View Customer Profile</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Vendor Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center">
                  <Package className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-medium">{dispute.vendor.name}</h3>
                  <p className="text-sm text-muted-foreground">{dispute.vendor.email}</p>
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Vendor ID</span>
                  <span className="text-sm">{dispute.vendor.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Total Products</span>
                  <span className="text-sm">42</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Dispute Rate</span>
                  <span className="text-sm">1.2%</span>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href={`/dashboard/admin/vendors/${dispute.vendor.id}`}>View Vendor Profile</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
