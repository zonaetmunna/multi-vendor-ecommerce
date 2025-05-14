"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Pagination } from "@/components/ui/pagination"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, Eye, MessageSquare, MoreHorizontal, Search } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

// Mock disputes data
const disputes = [
  {
    id: "DSP-1234",
    orderId: "ORD-7890",
    customer: "John Doe",
    vendor: "AudioTech",
    reason: "Item not as described",
    amount: 199.99,
    status: "open",
    priority: "high",
    createdAt: "2023-07-15",
    lastUpdated: "2023-07-16",
  },
  {
    id: "DSP-1235",
    orderId: "ORD-7891",
    customer: "Jane Smith",
    vendor: "EcoWear",
    reason: "Wrong item received",
    amount: 49.99,
    status: "in_progress",
    priority: "medium",
    createdAt: "2023-07-14",
    lastUpdated: "2023-07-16",
  },
  {
    id: "DSP-1236",
    orderId: "ORD-7892",
    customer: "Robert Johnson",
    vendor: "TechHome",
    reason: "Item damaged during shipping",
    amount: 149.99,
    status: "resolved",
    priority: "medium",
    createdAt: "2023-07-10",
    lastUpdated: "2023-07-15",
  },
  {
    id: "DSP-1237",
    orderId: "ORD-7893",
    customer: "Emily Davis",
    vendor: "FitTech",
    reason: "Item not received",
    amount: 89.99,
    status: "open",
    priority: "high",
    createdAt: "2023-07-13",
    lastUpdated: "2023-07-13",
  },
  {
    id: "DSP-1238",
    orderId: "ORD-7894",
    customer: "Michael Brown",
    vendor: "LeatherCraft",
    reason: "Refund not processed",
    amount: 79.99,
    status: "in_progress",
    priority: "low",
    createdAt: "2023-07-12",
    lastUpdated: "2023-07-14",
  },
  {
    id: "DSP-1239",
    orderId: "ORD-7895",
    customer: "Sarah Wilson",
    vendor: "ArtisanCrafts",
    reason: "Item not as described",
    amount: 129.99,
    status: "resolved",
    priority: "medium",
    createdAt: "2023-07-08",
    lastUpdated: "2023-07-12",
  },
  {
    id: "DSP-1240",
    orderId: "ORD-7896",
    customer: "David Lee",
    vendor: "AudioTech",
    reason: "Defective product",
    amount: 249.99,
    status: "open",
    priority: "high",
    createdAt: "2023-07-14",
    lastUpdated: "2023-07-14",
  },
  {
    id: "DSP-1241",
    orderId: "ORD-7897",
    customer: "Lisa Taylor",
    vendor: "EcoWear",
    reason: "Wrong size",
    amount: 59.99,
    status: "resolved",
    priority: "low",
    createdAt: "2023-07-09",
    lastUpdated: "2023-07-11",
  },
  {
    id: "DSP-1242",
    orderId: "ORD-7898",
    customer: "James Anderson",
    vendor: "TechHome",
    reason: "Missing parts",
    amount: 179.99,
    status: "in_progress",
    priority: "medium",
    createdAt: "2023-07-11",
    lastUpdated: "2023-07-13",
  },
  {
    id: "DSP-1243",
    orderId: "ORD-7899",
    customer: "Jennifer Martin",
    vendor: "FitTech",
    reason: "Item not as described",
    amount: 69.99,
    status: "open",
    priority: "medium",
    createdAt: "2023-07-12",
    lastUpdated: "2023-07-12",
  },
]

export default function DisputesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [activeTab, setActiveTab] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [priorityFilter, setPriorityFilter] = useState("all")

  // Filter disputes based on search query, active tab, and filters
  const filteredDisputes = disputes.filter((dispute) => {
    const matchesSearch =
      dispute.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dispute.orderId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dispute.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dispute.vendor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dispute.reason.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === "all" || dispute.status === statusFilter
    const matchesPriority = priorityFilter === "all" || dispute.priority === priorityFilter

    if (activeTab === "all") return matchesSearch && matchesStatus && matchesPriority
    if (activeTab === "open") return matchesSearch && dispute.status === "open" && matchesPriority
    if (activeTab === "in_progress") return matchesSearch && dispute.status === "in_progress" && matchesPriority
    if (activeTab === "resolved") return matchesSearch && dispute.status === "resolved" && matchesPriority

    return matchesSearch && matchesStatus && matchesPriority
  })

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
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Disputes & Refunds</h1>
          <p className="text-muted-foreground">Manage customer disputes and refund requests</p>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search disputes..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="in_progress">In Progress</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                </SelectContent>
              </Select>
              <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Filter by priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priorities</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" onValueChange={setActiveTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Disputes</TabsTrigger>
              <TabsTrigger value="open">Open</TabsTrigger>
              <TabsTrigger value="in_progress">In Progress</TabsTrigger>
              <TabsTrigger value="resolved">Resolved</TabsTrigger>
            </TabsList>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Vendor</TableHead>
                    <TableHead>Reason</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredDisputes.map((dispute) => (
                    <TableRow key={dispute.id}>
                      <TableCell className="font-medium">
                        <Link href={`/dashboard/admin/disputes/${dispute.id}`} className="hover:underline">
                          {dispute.id}
                        </Link>
                        <div className="text-xs text-muted-foreground">Order: {dispute.orderId}</div>
                      </TableCell>
                      <TableCell>{dispute.customer}</TableCell>
                      <TableCell>{dispute.vendor}</TableCell>
                      <TableCell>
                        <div className="max-w-[200px] truncate" title={dispute.reason}>
                          {dispute.reason}
                        </div>
                      </TableCell>
                      <TableCell>${dispute.amount.toFixed(2)}</TableCell>
                      <TableCell>{getStatusBadge(dispute.status)}</TableCell>
                      <TableCell>{getPriorityBadge(dispute.priority)}</TableCell>
                      <TableCell>
                        <div className="text-sm">{new Date(dispute.createdAt).toLocaleDateString()}</div>
                        <div className="text-xs text-muted-foreground">
                          Updated: {new Date(dispute.lastUpdated).toLocaleDateString()}
                        </div>
                      </TableCell>
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
                              <Link href={`/dashboard/admin/disputes/${dispute.id}`}>
                                <Eye className="h-4 w-4 mr-2" />
                                View Details
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link href={`/dashboard/admin/disputes/${dispute.id}/messages`}>
                                <MessageSquare className="h-4 w-4 mr-2" />
                                View Messages
                              </Link>
                            </DropdownMenuItem>
                            {dispute.status === "open" && (
                              <DropdownMenuItem>
                                <AlertTriangle className="h-4 w-4 mr-2" />
                                Escalate
                              </DropdownMenuItem>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                  {filteredDisputes.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={9} className="text-center py-8 text-muted-foreground">
                        No disputes found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-muted-foreground">
                Showing <strong>1-{Math.min(10, filteredDisputes.length)}</strong> of{" "}
                <strong>{filteredDisputes.length}</strong> disputes
              </div>
              <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(filteredDisputes.length / 10)}
                onPageChange={setCurrentPage}
              />
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
