"use client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CheckCircle2, Eye, Filter, MoreHorizontal, Search, ShieldAlert, Store, Trash2,
  UserX, XCircle
} from "lucide-react"
import { useState } from "react"

// Mock vendor data
const vendors = [
  {
    id: 1,
    name: "AudioTech",
    email: "contact@audiotech.com",
    products: 42,
    joined: "2023-01-15",
    status: "approved",
    rating: 4.8,
    earnings: 12450.75,
    logo: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 2,
    name: "EcoWear",
    email: "info@ecowear.com",
    products: 38,
    joined: "2023-02-28",
    status: "approved",
    rating: 4.7,
    earnings: 9875.5,
    logo: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 3,
    name: "TechHome",
    email: "support@techhome.com",
    products: 27,
    joined: "2023-03-10",
    status: "approved",
    rating: 4.9,
    earnings: 7650.25,
    logo: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 4,
    name: "ArtisanCrafts",
    email: "hello@artisancrafts.com",
    products: 65,
    joined: "2023-04-05",
    status: "approved",
    rating: 4.9,
    earnings: 15780.0,
    logo: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 5,
    name: "FitTech",
    email: "sales@fittech.com",
    products: 19,
    joined: "2023-05-20",
    status: "approved",
    rating: 4.6,
    earnings: 5430.75,
    logo: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 6,
    name: "LeatherCraft",
    email: "orders@leathercraft.com",
    products: 31,
    joined: "2023-06-12",
    status: "approved",
    rating: 4.8,
    earnings: 8920.5,
    logo: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 7,
    name: "GreenGarden",
    email: "info@greengarden.com",
    products: 0,
    joined: "2023-07-01",
    status: "pending",
    rating: 0,
    earnings: 0,
    logo: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 8,
    name: "TechGadgets",
    email: "support@techgadgets.com",
    products: 0,
    joined: "2023-07-05",
    status: "pending",
    rating: 0,
    earnings: 0,
    logo: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 9,
    name: "FashionForward",
    email: "contact@fashionforward.com",
    products: 0,
    joined: "2023-07-08",
    status: "rejected",
    rating: 0,
    earnings: 0,
    logo: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 10,
    name: "HomeDecor",
    email: "sales@homedecor.com",
    products: 0,
    joined: "2023-07-10",
    status: "pending",
    rating: 0,
    earnings: 0,
    logo: "/placeholder.svg?height=50&width=50",
  },
]

export default function AdminVendorsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [activeTab, setActiveTab] = useState("all")
  const [openRejectDialog, setOpenRejectDialog] = useState(false)
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false)

  // Filter vendors based on search query and active tab
  const filteredVendors = vendors.filter((vendor) => {
    const matchesSearch =
      vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vendor.email.toLowerCase().includes(searchQuery.toLowerCase())

    if (activeTab === "all") return matchesSearch
    if (activeTab === "approved") return matchesSearch && vendor.status === "approved"
    if (activeTab === "pending") return matchesSearch && vendor.status === "pending"
    if (activeTab === "rejected") return matchesSearch && vendor.status === "rejected"

    return matchesSearch
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-500">Approved</Badge>
      case "pending":
        return (
          <Badge variant="outline" className="text-yellow-600 border-yellow-600">
            Pending
          </Badge>
        )
      case "rejected":
        return (
          <Badge variant="outline" className="text-red-600 border-red-600">
            Rejected
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Vendor Management</h2>
        <Button>
          <UserX className="mr-2 h-4 w-4" />
          Add New Vendor
        </Button>
      </div>
      
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search vendors by name, email or store name..."
            className="pl-8"
          />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Vendors</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="pending">Pending Approval</SelectItem>
            <SelectItem value="suspended">Suspended</SelectItem>
            <SelectItem value="rejected">Rejected</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Vendors</TabsTrigger>
          <TabsTrigger value="pending">Pending Approval</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="suspended">Suspended</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All Vendors</CardTitle>
              <CardDescription>Manage all vendors registered on your platform</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Vendor</TableHead>
                    <TableHead>Store Name</TableHead>
                    <TableHead>Joined</TableHead>
                    <TableHead>Products</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredVendors.map((vendor) => (
                    <TableRow key={vendor.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={vendor.logo || "/placeholder.svg"} />
                            <AvatarFallback>{vendor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{vendor.name}</div>
                            <div className="text-sm text-muted-foreground">{vendor.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{vendor.name}</TableCell>
                      <TableCell>{new Date(vendor.joined).toLocaleDateString()}</TableCell>
                      <TableCell>{vendor.products}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            vendor.status === "approved" ? "default" :
                            vendor.status === "pending" ? "outline" :
                            "secondary"
                          }
                          className={
                            vendor.status === "suspended" ? "bg-amber-100 text-amber-800 hover:bg-amber-100" : ""
                          }
                        >
                          {vendor.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              View Details
                            </DropdownMenuItem>
                            {vendor.status === "pending" && (
                              <>
                                <DropdownMenuItem className="text-green-600">
                                  <CheckCircle2 className="mr-2 h-4 w-4" />
                                  Approve
                                </DropdownMenuItem>
                                <DropdownMenuItem 
                                  className="text-red-600"
                                  onClick={() => setOpenRejectDialog(true)}
                                >
                                  <XCircle className="mr-2 h-4 w-4" />
                                  Reject
                                </DropdownMenuItem>
                              </>
                            )}
                            {vendor.status === "approved" && (
                              <DropdownMenuItem className="text-amber-600">
                                <ShieldAlert className="mr-2 h-4 w-4" />
                                Suspend
                              </DropdownMenuItem>
                            )}
                            {vendor.status === "suspended" && (
                              <DropdownMenuItem className="text-green-600">
                                <CheckCircle2 className="mr-2 h-4 w-4" />
                                Reactivate
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuSeparator />
                            <DropdownMenuItem 
                              className="text-red-600"
                              onClick={() => setOpenDeleteDialog(true)}
                            >
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              
              <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-muted-foreground">
                  Showing <strong>1-{Math.min(10, filteredVendors.length)}</strong> of{" "}
                  <strong>{filteredVendors.length}</strong> vendors
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="pending" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Pending Approval</CardTitle>
              <CardDescription>New vendor applications awaiting your review</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Vendor</TableHead>
                    <TableHead>Store Name</TableHead>
                    <TableHead>Applied On</TableHead>
                    <TableHead>Business Type</TableHead>
                    <TableHead>Documents</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      name: "Mike Williams",
                      email: "mike@homegoods.com",
                      store: "Home Goods Plus",
                      applied: "Apr 10, 2023",
                      business: "LLC",
                      documents: "Complete"
                    },
                    {
                      name: "Robert Chen",
                      email: "robert@sportsworld.com",
                      store: "Sports World",
                      applied: "May 5, 2023",
                      business: "Sole Proprietor",
                      documents: "Incomplete"
                    },
                    {
                      name: "Jennifer Adams",
                      email: "jennifer@petstore.com",
                      store: "Happy Pets Store",
                      applied: "May 12, 2023",
                      business: "LLC",
                      documents: "Complete"
                    }
                  ].map((vendor, i) => (
                    <TableRow key={i}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${vendor.name}`} />
                            <AvatarFallback>{vendor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{vendor.name}</div>
                            <div className="text-sm text-muted-foreground">{vendor.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{vendor.store}</TableCell>
                      <TableCell>{vendor.applied}</TableCell>
                      <TableCell>{vendor.business}</TableCell>
                      <TableCell>
                        <Badge variant={vendor.documents === "Complete" ? "default" : "outline"}>
                          {vendor.documents}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="mr-2 h-4 w-4" />
                            Review
                          </Button>
                          <Button size="sm" variant="default">
                            <CheckCircle2 className="mr-2 h-4 w-4" />
                            Approve
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Vendor Application Details</CardTitle>
              <CardDescription>Review application for Home Goods Plus</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="https://api.dicebear.com/7.x/initials/svg?seed=Mike Williams" />
                  <AvatarFallback>MW</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-medium">Mike Williams</h3>
                  <p className="text-sm text-muted-foreground">mike@homegoods.com</p>
                  <p className="text-sm text-muted-foreground">Applied on Apr 10, 2023</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-medium mb-2">Store Information</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Store Name:</span>
                      <span>Home Goods Plus</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Store URL:</span>
                      <span>home-goods-plus</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Store Phone:</span>
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Store Email:</span>
                      <span>contact@homegoods.com</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-2">Business Information</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Business Type:</span>
                      <span>LLC</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tax ID:</span>
                      <span>47-1234567</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Year Established:</span>
                      <span>2020</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Employees:</span>
                      <span>1-10</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Store Description</h4>
                <p className="text-sm">
                  Home Goods Plus offers a wide range of high-quality home decor, kitchenware, and furniture. 
                  We specialize in modern and contemporary designs that are both functional and stylish. 
                  Our products are carefully sourced from trusted manufacturers to ensure durability and customer satisfaction.
                </p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Product Categories</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Home Decor</Badge>
                  <Badge variant="outline">Kitchenware</Badge>
                  <Badge variant="outline">Furniture</Badge>
                  <Badge variant="outline">Bedding</Badge>
                  <Badge variant="outline">Bath</Badge>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Verification Documents</h4>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="justify-start">
                    <Store className="mr-2 h-4 w-4" />
                    Business Registration
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Store className="mr-2 h-4 w-4" />
                    Tax Certificate
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Store className="mr-2 h-4 w-4" />
                    ID Verification
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Store className="mr-2 h-4 w-4" />
                    Bank Details
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center justify-between border-t pt-4">
                <div>
                  <h4 className="font-medium">Application Status</h4>
                  <p className="text-sm text-muted-foreground">All required documents have been submitted</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setOpenRejectDialog(true)}>
                    <XCircle className="mr-2 h-4 w-4" />
                    Reject
                  </Button>
                  <Button>
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Approve Vendor
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Vendors</CardTitle>
              <CardDescription>Currently active vendors on your platform</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Vendor</TableHead>
                    <TableHead>Store Name</TableHead>
                    <TableHead>Products</TableHead>
                    <TableHead>Sales</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      name: "John Smith",
                      email: "john@techgadgets.com",
                      store: "Tech Gadgets Store",
                      products: 85,
                      sales: "$12,450",
                      rating: "4.8/5"
                    },
                    {
                      name: "Sarah Johnson",
                      email: "sarah@fashionista.com",
                      store: "Fashionista Boutique",
                      products: 124,
                      sales: "$18,720",
                      rating: "4.6/5"
                    },
                    {
                      name: "Emma Davis",
                      email: "emma@beautycorner.com",
                      store: "Beauty Corner",
                      products: 92,
                      sales: "$9,840",
                      rating: "4.7/5"
                    }
                  ].map((vendor, i) => (
                    <TableRow key={i}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${vendor.name}`} />
                            <AvatarFallback>{vendor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{vendor.name}</div>
                            <div className="text-sm text-muted-foreground">{vendor.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{vendor.store}</TableCell>
                      <TableCell>{vendor.products}</TableCell>
                      <TableCell>{vendor.sales}</TableCell>
                      <TableCell>{vendor.rating}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Store className="mr-2 h-4 w-4" />
                              View Store
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-amber-600">
                              <ShieldAlert className="mr-2 h-4 w-4" />
                              Suspend
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="suspended" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Suspended Vendors</CardTitle>
              <CardDescription>Vendors whose accounts have been temporarily suspended</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Vendor</TableHead>
                    <TableHead>Store Name</TableHead>
                    <TableHead>Suspended On</TableHead>
                    <TableHead>Reason</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      name: "Lisa Thompson",
                      email: "lisa@kitchenwares.com",
                      store: "Kitchen Wares Co.",
                      suspended: "May 2, 2023",
                      reason: "Policy violation - misleading product descriptions"
                    }
                  ].map((vendor, i) => (
                    <TableRow key={i}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${vendor.name}`} />
                            <AvatarFallback>{vendor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{vendor.name}</div>
                            <div className="text-sm text-muted-foreground">{vendor.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{vendor.store}</TableCell>
                      <TableCell>{vendor.suspended}</TableCell>
                      <TableCell>
                        <div className="max-w-xs truncate">{vendor.reason}</div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="mr-2 h-4 w-4" />
                            Details
                          </Button>
                          <Button size="sm" variant="default">
                            <CheckCircle2 className="mr-2 h-4 w-4" />
                            Reactivate
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <AlertDialog open={openRejectDialog} onOpenChange={setOpenRejectDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Reject Vendor Application</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to reject this vendor application? This action cannot be undone.
              The vendor will be notified about the rejection.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="space-y-2 py-2">
            <Label htmlFor="rejectReason">Rejection Reason</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a reason" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="incomplete">Incomplete Information</SelectItem>
                <SelectItem value="documents">Invalid Documents</SelectItem>
                <SelectItem value="quality">Quality Standards Not Met</SelectItem>
                <SelectItem value="policy">Policy Violation</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            <Input id="rejectReason" placeholder="Additional comments (optional)" className="mt-2" />
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-destructive text-destructive-foreground">
              <UserX className="mr-2 h-4 w-4" />
              Reject Application
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      
      <AlertDialog open={openDeleteDialog} onOpenChange={setOpenDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Vendor Account</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this vendor account? This action cannot be undone.
              All products, orders, and data associated with this vendor will be permanently removed.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-destructive text-destructive-foreground">
              <Trash2 className="mr-2 h-4 w-4" />
              Delete Vendor
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
